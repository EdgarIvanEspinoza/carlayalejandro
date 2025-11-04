
import WeddingLayout from "../(wedding)/layout";
import Image from "next/image";

export default function RSVP() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="section-title">Confirmación (RSVP)</h2>
        <p className="muted small mb-2">Lista cerrada. Fecha límite: <strong>16/11/2025</strong>.</p>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col">Nombre y apellidos.
              <input className="input" type="text" name="name" required />
            </label>
            <label className="flex flex-col">Email
              <input className="input" type="email" name="email" required />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col">Nº de acompañantes (además de ti)
              <input className="input" type="number" name="companions" min="0" max="1" defaultValue={0} required />
            </label>
            <label className="flex flex-col">Restricciones / alergias alimentarias
              <input className="input" type="text" name="diet" placeholder="Ej.: sin gluten, vegetariano..." />
            </label>
          </div>
          <div className="consent">
            <label className="checkbox flex items-center gap-2">
              <input type="checkbox" name="consent" required />
              Acepto el tratamiento de mis datos personales para la gestión del evento (RGPD).
            </label>
          </div>
          <div className="cta-row flex flex-col md:flex-row gap-3 items-center">
            <button className="btn" type="submit">Enviar confirmación</button>
            <span className="small muted" role="status" aria-live="polite"></span>
          </div>
        </form>
  <Image src="/flowers-rsvp.png" alt="Flores RSVP" width={128} height={64} className="mt-8 mx-auto" />
      </section>
    </WeddingLayout>
  );
}
