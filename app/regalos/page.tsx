import WeddingLayout from '../(wedding)/layout';

export default function Regalos() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-greatvibes text-[#1f2937] mb-6 text-center">Regalos</h2>
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
      </section>
    </WeddingLayout>
  );
}
