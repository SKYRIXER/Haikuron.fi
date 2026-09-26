import sharp from 'sharp';
import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourceRoot = path.join(root, 'public/img');
const manifest = {};
let originalBytes = 0;
let largestBytes = 0;
let smallBytes = 0;

// Keep the original photos intact. Rotate EXIF-oriented photos before resizing;
// no cropping, stretching or enlargement is applied.
for (const relative of (await readdir(sourceRoot, { recursive: true })).sort()) {
    if (!/\.jpe?g$/i.test(relative)) continue;
    const source = path.join(sourceRoot, relative);
    const metadata = await sharp(source).metadata();
    const sourceWidth = metadata.orientation >= 5 ? metadata.height : metadata.width;
    const widths = [...new Set([480, 768, 1200, 1920, 2560].map(width => Math.min(width, sourceWidth)))];
    const stem = relative.replaceAll('\\', '/').replace(/\.jpe?g$/i, '');
    const variants = [];
    for (const width of widths) {
        const url = `/img/optimized/${stem}-${width}.webp`;
        const destination = path.join(root, 'public', url);
        await mkdir(path.dirname(destination), { recursive: true });
        const result = await sharp(source).rotate().resize({ width, withoutEnlargement: true })
            .webp({ quality: 85, effort: 5 }).toFile(destination);
        variants.push({ src: url, width: result.width, bytes: result.size });
    }
    manifest[`/img/${relative.replaceAll('\\', '/')}`] = {
        src: variants.at(-1).src,
        srcSet: variants.map(variant => `${variant.src} ${variant.width}w`).join(', '),
    };
    originalBytes += (await stat(source)).size;
    largestBytes += variants.at(-1).bytes;
    smallBytes += variants[0].bytes;
}
await writeFile(path.join(root, 'app/data/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Optimized ${Object.keys(manifest).length} photos: originals ${(originalBytes / 1e6).toFixed(2)} MB, largest WebP versions ${(largestBytes / 1e6).toFixed(2)} MB, small versions ${(smallBytes / 1e6).toFixed(2)} MB.`);
