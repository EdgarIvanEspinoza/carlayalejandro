import WeddingLayout from "../(wedding)/layout";

export default function Detalles() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-greatvibes text-[#1f2937] mb-6 text-center">Detalles de la boda</h2>
        <div className="bg-[#e6efe2] rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Ceremonia</h3>
          <p><strong>Saló de Cent</strong> · Ajuntament de Barcelona</p>
          <p>Hora: <strong>12:30</strong></p>
          <p>Dirección: Pl. de Sant Jaume, 1, Ciutat Vella, 08002 Barcelona</p>
          <a className="inline-block bg-[#6b7d57] text-white font-inter font-semibold rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#d4af37] hover:text-white mt-4" target="_blank" rel="noopener" href="https://maps.app.goo.gl/MUdjkZ6XKtUzWWr6A">Ver en Google Maps</a>
        </div>
        <div className="bg-[#e6efe2] rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Cóctel & Celebración</h3>
          <p><strong>Camping Mar</strong></p>
          <p><em>14:30 – 20:00</em></p>
          <p>Marina Vela, Pg. de Joan de Borbó, 103, Ciutat Vella, 08039 Barcelona</p>
          <a className="inline-block bg-[#6b7d57] text-white font-inter font-semibold rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#d4af37] hover:text-white mt-4" target="_blank" rel="noopener" href="https://maps.app.goo.gl/X2GGEVsiiSMC5KCz7">Ver en Google Maps</a>
        </div>
      </section>
    </WeddingLayout>
  );
}
