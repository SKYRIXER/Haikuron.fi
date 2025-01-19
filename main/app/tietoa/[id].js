import { useRouter } from 'next/router';
import Link from 'next/link';
import dogs from '../data/dogs'; // Assuming you have a data file for dogs

export async function getStaticPaths() {
  const paths = dogs.map(dog => ({
    params: { id: dog.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dog = dogs.find(d => d.id.toString() === params.id);
  return { props: { dog } };
}

const DogPage = ({ dog }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 py-5 shadow-lg">
        <Link href="/"><h1 className="text-white font-bold text-center text-3xl mb-3">Kennel Haikuron</h1></Link>
      </header>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{dog.name}</h2>
          <img src={dog.image} alt={dog.name} className="rounded-lg mb-4 w-full h-72 object-cover" />
          <p>{dog.imagetext}</p>
          <p className="text-lg mb-6">{dog.description}</p>
        </div>
      </section>
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-sm text-white text-bold">© {new Date().getFullYear()} Kennel Haikuron. Kaikki oikeudet pidätetään.</p>
      </footer>
    </div>
  );
};

export default DogPage;