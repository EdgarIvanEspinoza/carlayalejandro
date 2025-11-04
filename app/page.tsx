import WeddingLayout from "./(wedding)/layout";
import PetalRain from "./PetalRain";
import Image from "next/image";

export default function Home() {
  return (
    <WeddingLayout>
      <PetalRain />
      <section className="flex flex-col items-center justify-center py-16 animate-fade-in relative z-10">
        <h1 className="text-center text-4xl md:text-6xl font-greatvibes text-[#b76e79] mb-4 tracking-wide font-normal">Carla & Alejandro</h1>
        <p className="text-xl mb-4">13 de diciembre de 2025<br/><a href="https://maps.app.goo.gl/MUdjkZ6XKtUzWWr6A" target="_blank" rel="noopener" className="underline hover:text-[#b76e79]">Saló de Cent, Barcelona</a></p>
        <p className="text-2xl text-center max-w-xl mb-8">Bienvenidos a nuestra boda.<br />Un día para celebrar el amor, la familia y la amistad en el corazón de Barcelona.<br />Gracias por acompañarnos en este momento tan especial.</p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a
            href="/rsvp"
            className="inline-block bg-[#b76e79] text-white font-inter font-semibold rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#d4af37] hover:text-white"
          >
            Confirmar asistencia
          </a>
          <a
            href="/detalles"
            className="inline-block bg-white text-[#b76e79] font-inter font-semibold rounded-full px-6 py-3 border-2 border-[#b76e79] cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#ffe4e1] hover:text-[#b76e79]"
          >
            Ver detalles
          </a>
        </div>
      </section>
<Image src="/flowers.webp" alt="Flores Fotos" width={128} height={64} className="mt-8 mx-auto" />
    </WeddingLayout>
  );
}
