import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import dogs from "@/app/data/dogs";

export default function DogsPage() {
    const dog = dogs[0];

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header title="Koirat" />
            
            <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${dog.image})`, backgroundSize: 'cover', backgroundPosition: "50% 20%" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h2 className="text-4xl font-bold text-white">{dog.name}</h2>
                </div>
            </section>
            <section className="py-16 px-4 max-w-4xl mx-auto">
                <p className="text-lg mb-4">{dog.imagetext}</p>
                <p className="text-lg mb-4">{dog.description}</p>
                <table className="w-full text-left">
                    <tbody>
                        <tr>
                            <th className="text-lg font-bold py-2">Tarina</th>
                        </tr>
                        <tr>
                            <td className="py-2">{dog.story}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Footer />
        </div>
    );
}