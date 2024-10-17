import Header from "./header.js"
import Footer from "./footer.js"

export default function Home() {
  return (
    <div className="bg-gray-500 w-full h-screen">
      <Header />
        <div className="flex flex-col items-center mt-10 h-full">
          <p className="text-white">testiäääää</p>
        </div>
      <Footer />
    </div>
  );
}
