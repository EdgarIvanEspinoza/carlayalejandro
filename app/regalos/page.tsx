
import WeddingLayout from "../(wedding)/layout";
import Image from "next/image";

export default function Regalos() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="section-title">Regalos</h2>
        {/* <p>Vuestra presencia es el mejor regalo. Si aun así queréis tener un detalle, podéis usar este IBAN o Bizum.</p>
        <div className="gift-box">
          <div>
            <p><strong>IBAN:</strong> <span id="iban-text">PON_AQUI_TU_IBAN</span></p>
            <button className="btn btn-ghost" type="button">Copiar IBAN</button>
          </div>
          <div>
            <p><strong>Bizum:</strong> <span id="bizum-text">PON_AQUI_TU_BIZUM</span></p>
            <button className="btn btn-ghost" type="button">Copiar Bizum</button>
          </div>
        </div> */}
  <Image src="/flowers.webp" alt="Flores Regalos" width={128} height={64} className="mt-8 mx-auto" />
      </section>
    </WeddingLayout>
  );
}
