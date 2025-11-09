import WeddingLayout from "../(wedding)/layout";
import Image from 'next/image';

export default function Programa() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h1 className="text-3xl md:text-6xl font-greatvibes text-[#1f2937] mb-6 text-center">Programa</h1>
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
        <ul className="timeline list-disc pl-6">
          <li><span className="font-semibold">12:30</span> Llegada de invitados</li>
          <li><span className="font-semibold">13:00 - 13:30</span> Ceremonia civil en Saló de Cent</li>
          <li><span className="font-semibold">13:45 - 14:30</span> Desplazamiento hacia Camping Mar</li>
          <li><span className="font-semibold">14:30 - 15:00</span> Cóctel de bienvenida</li>
          <li><span className="font-semibold">15:00 - 17:30</span> Comida y brindis</li>
          <li><span className="font-semibold">17:30 - 21:00</span> Musica y barra libre</li>          
          <li><span className="font-semibold">TBD</span> Post-Party</li>
        </ul>
        <div className="mt-12 flex justify-center">
          <Image
            src="/baile perritos SF.png"
            alt="baile perritos"
            width={300}
            height={200}
            className="mx-auto"
            priority
          />
        </div>
      </section>
    </WeddingLayout>
  );
}
