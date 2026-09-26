import images from '../data/image-manifest.json';

export function imageSource(src) {
    return images[src]?.src ?? src;
}

// Static srcsets work on ordinary static hosting without an image server.
export default function OptimizedImage({ src, alt, sizes, loading = 'lazy', ...props }) {
    const image = images[src];
    return (
        <img
            {...props}
            src={image?.src ?? src}
            srcSet={image?.srcSet}
            sizes={sizes}
            alt={alt}
            loading={loading}
            decoding="async"
        />
    );
}
