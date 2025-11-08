import WeddingLayout from './(wedding)/layout';
import CountDown from './components/CountDown';

export default function Home() {
  return (
    <WeddingLayout>
      <section className="flex flex-col items-center justify-center py-16 animate-fade-in relative z-10">
        <h1 className="text-center text-4xl md:text-6xl font-greatvibes text-[#1f2937] mb-4 tracking-wide font-normal">
          Carla & Alejandro
        </h1>
        <p className="text-xl mb-4 text-center">
          13 de diciembre de 2025 <br />
          12:30hs Ajuntament de Barcelona
          <br />
          <a
            href="https://maps.app.goo.gl/MUdjkZ6XKtUzWWr6A"
            target="_blank"
            rel="noopener"
            className="underline hover:text-[##d4af37]"
          >
            Saló de Cent, Barcelona
          </a>
        </p>
        <CountDown />
        <p className="text-2xl text-center max-w-xl mb-8">
          Nos hace muchísima ilusión compartir con vosotros este día tan especial.
          <br />
          Gracias por acompañarnos en el inicio de esta nueva etapa juntos.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a
            href="#rsvp"
            className="inline-block bg-[#6b7d57] text-white font-inter font-semibold rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#d4af37] hover:text-white"
          >
            Confirmar asistencia
          </a>
          <a
            href="/detalles"
            className="inline-block bg-white text-[#6b7d57] font-inter font-semibold rounded-full px-6 py-3 border-2 border-[#6b7280] cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#e6efe2] hover:text-[#6b7d57]"
          >
            Ver detalles
          </a>
        </div>
        <iframe
          width="540"
          height="770"
          src="https://a7402fe3.sibforms.com/serve/MUIFAMv4JAdunPcLpCIL4-seT6FlO26y0DWKWbS3Pd_vtt7j7Azde5QZwFHU_4HPSYtpGjOJuGcwJVeLzkcGBaWa1bCUC2sLfx2hv-GoisoozlU7iYrFj5Ku6_3UNt8ZVg2CUUkvDamDP7AxYDz0sUF6vQ_bX4a3nf3hpiCdBJk9G4WqjU7vIdauQ9MR0-6ptu0EZNgaRWhgvQLf2g=="
          allowFullScreen
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
          }}
        ></iframe>
      </section>
    </WeddingLayout>
  );
}
