
import WeddingLayout from "../(wedding)/layout";
import Image from "next/image";

export default function DressCode() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="section-title">Dress Code</h2>
        <p className="text-lg">Elegante y cómodo. Paleta sugerida: tonos <strong>hueso</strong> y <strong>verde olivo</strong>. Añade tu toque personal y siéntete parte de la celebración.</p>
  <Image src="/flowers.webp" alt="Flores Dress Code" width={128} height={64} className="mt-8 mx-auto" />
      </section>
    </WeddingLayout>
  );
}
