import WeddingLayout from "../(wedding)/layout";

export default function Programa() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-greatvibes text-[#1f2937] mb-6 text-center">Programa</h2>
        <ul className="timeline list-disc pl-6">
          <li><span className="font-semibold">12:30</span> Llegada de invitados</li>
          <li><span className="font-semibold">13:00</span> Ceremonia civil en Saló de Cent</li>
          <li><span className="font-semibold">14:30</span> Cóctel de celebración</li>
          <li><span className="font-semibold">—</span> Música en directo & DJ</li>
          <li><span className="font-semibold">20:00</span> Cierre</li>
        </ul>
      </section>
    </WeddingLayout>
  );
}
