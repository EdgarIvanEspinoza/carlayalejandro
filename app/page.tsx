
import WeddingLayout from "./(wedding)/layout";
import Image from "next/image";

export default function Home() {
  return (
    <WeddingLayout>
      <section className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <Image src="/flowers-top.png" alt="Flores románticas" width={160} height={80} className="mb-8" />
        <h1 className="hero-title text-6xl font-greatvibes text-[#b76e79] mb-4">Carla & Alejandro</h1>
        <p className="hero-date text-xl mb-4">13 de diciembre de 2025 · Saló de Cent, Barcelona</p>
        <p className="text-2xl text-center max-w-xl mb-8">Bienvenidos a nuestra boda. Un día para celebrar el amor, la familia y la amistad en el corazón de Barcelona.<br/>Gracias por acompañarnos en este momento tan especial.</p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a className="btn" href="/rsvp">Confirmar asistencia</a>
          <a className="btn btn-outline" href="/detalles">Ver detalles</a>
        </div>
        <Image src="/flowers-bottom.png" alt="Flores románticas" width={160} height={80} className="mt-8" />
      </section>
    </WeddingLayout>
  );
}
