import WeddingLayout from "./(wedding)/layout";
import PetalRain from "./PetalRain";

export default function Home() {
  return (
    <WeddingLayout>
      <PetalRain />
      <section className="flex flex-col items-center justify-center py-16 animate-fade-in relative z-10">
        <h1 className="hero-title text-center text-4xl md:text-6xl font-greatvibes text-[#b76e79] mb-4">Carla & Alejandro</h1>
        <p className="hero-date text-xl mb-4">13 de diciembre de 2025<br/><a href="https://maps.app.goo.gl/MUdjkZ6XKtUzWWr6A" target="_blank" rel="noopener" className="underline hover:text-[#b76e79]">Saló de Cent, Barcelona</a></p>
        <p className="text-2xl text-center max-w-xl mb-8">Bienvenidos a nuestra boda.<br />Un día para celebrar el amor, la familia y la amistad en el corazón de Barcelona.<br />Gracias por acompañarnos en este momento tan especial.</p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a className="btn" href="/rsvp">Confirmar asistencia</a>
          <a className="btn btn-outline" href="/detalles">Ver detalles</a>
        </div>
      </section>
    </WeddingLayout>
  );
}
