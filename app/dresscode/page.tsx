import WeddingLayout from '../(wedding)/layout';
import Image from 'next/image';

export default function DressCode() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h1 className="text-3xl md:text-6xl font-greatvibes text-[#1f2937] mb-6 text-center">Vestimenta</h1>
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
        <p className="text-lg text-center max-w-2xl mx-auto">
          Elegante pero relajado 
          </p>
          <p>
            Nos encantaría que todos vinieran arreglados. Traje será bienvenido y vestido (corto o largo) también. 
            Calzado cómodo es perfecto, pero deportivo mejor solo para la pista de baile. 😜
          </p>
                  <div className="mt-12 flex justify-center">
                    <Image
                      src="/dresscode SF.png"
                      alt="dresscode SF"
                      width={600}
                      height={400}
                      className="mx-auto"
                      priority
                    />
                  </div>
      </section>
    </WeddingLayout>
  );
}
