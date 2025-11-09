import WeddingLayout from "../(wedding)/layout";
import Clima from '../Clima/Clima';
import Image from 'next/image';

export default function Detalles() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-greatvibes text-[#1f2937] mb-6 text-center">Detalles de la boda</h1>
              <div className="flex flex-col items-center justify-center py-1 animate-fade-in relative z-10">
                <h2 className="text-center mb-8">
                  <Image
                    src="/olivos 2 top sin fondo.png"
                    alt="Olivos decorativos"
                    width={200}
                    height={75}
                    className="mx-auto"
                    priority
                  />
                </h2>
              </div>
        <div className="bg-[#e6efe2] rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Ceremonia</h3>
          <p>
            <strong>
              <a
                href="https://ajuntament.barcelona.cat/ca/casaments-civils-al-salo-de-cent"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#6b7d57]"
              >
                Saló de Cent
              </a>
            </strong>
            {' '}· Ajuntament de Barcelona
          </p>
          <p>Hora: <strong>12:30</strong></p>
          <p>Dirección: Pl. de Sant Jaume, 1, Ciutat Vella, 08002 Barcelona</p>
          <a className="inline-block bg-[#6b7d57] text-white font-inter font-semibold rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#d4af37] hover:text-white mt-4" target="_blank" rel="noopener" href="https://maps.app.goo.gl/EFTAQweu9iTx2j977">Ver en Google Maps</a>
        </div>
        <div className="bg-[#e6efe2] rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Cóctel & Celebración</h3>
          <p><strong><a
                href="https://grupotragaluz.com/restaurantes/camping-mar/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#6b7d57]"
              >Camping Mar</a></strong></p>
          <p><em>14:30 – 21:00</em></p>
          <p>Marina Vela, Pg. de Joan de Borbó, 103, Ciutat Vella, 08039 Barcelona</p>
          <a className="inline-block bg-[#6b7d57] text-white font-inter font-semibold rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#d4af37] hover:text-white mt-4" target="_blank" rel="noopener" href="https://maps.app.goo.gl/X2GGEVsiiSMC5KCz7">Ver en Google Maps</a>
        </div>
   {/* Aquí insertas el clima */}
          <Clima />
      </section>
    </WeddingLayout>
  );
}
