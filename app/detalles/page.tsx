import WeddingLayout from "../(wedding)/layout";

export default function Detalles() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="section-title">Detalles de la boda</h2>
        <div className="card">
          <h3 className="card-title">Ceremonia</h3>
          <p><strong>Saló de Cent</strong> · Ajuntament de Barcelona</p>
          <p>Hora: <strong>13:00</strong></p>
          <p>Dirección: Pl. de Sant Jaume, 1, Ciutat Vella, 08002 Barcelona</p>
          <a className="link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Plaza%20de%20Sant%20Jaume%201%20Barcelona">Ver en Google Maps</a>
        </div>
        <div className="card">
          <h3 className="card-title">Cóctel & Celebración</h3>
          <p><em>14:30 – 20:00</em></p>
          <p><span className="muted">Ubicación por confirmar</span></p>
        </div>
      </section>
    </WeddingLayout>
  );
}
