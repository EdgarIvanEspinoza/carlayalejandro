
import WeddingLayout from "../(wedding)/layout";
import Image from "next/image";

export default function Fotos() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="section-title">Fotos del evento</h2>
        <p>Tras la boda, subiremos aquí un enlace a un álbum compartido para que podáis subir y descargar fotos y recuerdos de este día tan especial.</p>
  <Image src="/flowers.webp" alt="Flores Fotos" width={128} height={64} className="mt-8 mx-auto" />
      </section>
    </WeddingLayout>
  );
}
