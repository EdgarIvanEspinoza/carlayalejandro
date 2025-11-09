'use client';
import WeddingLayout from '../(wedding)/layout';
import Image from 'next/image';
import { useState } from 'react';

type CopyType = 'IBAN' | 'Bizum';

/** Componente reutilizable con estado independiente */
function CopyField({
  label,
  value,
  buttonClass = 'btn btn-ghost hover:bg-[#e6efe2] transition-colors duration-200',
}: {
  label: CopyType | string;
  value: string;
  buttonClass?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // si quieres, aquí puedes mostrar un toast de error
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <p>
        <strong>{label}:</strong>{' '}
        <span className="font-mono break-all">{value}</span>
      </p>
      <button
        onClick={handleCopy}
        className={buttonClass}
        type="button"
        aria-label={`Copiar ${label}`}
      >
        {copied ? '✓ Copiado!' : `Copiar ${label}`}
      </button>
    </div>
  );
}

export default function Regalos() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h1 className="text-3xl md:text-6xl font-greatvibes text-[#1f2937] mb-6 text-center">
          Regalos
        </h1>

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
        <p className="text-2xl md:text-1xl text-center max-w-5xl mx-auto">
          Vuestra presencia es el mejor regalo.</p> 
          <p className="text-lg text-center max-w-1xl mx-auto">
            Si aun así queréis tener un detalle,
          <br></br>podéis usar este IBAN o Bizum. 
        </p>

        <div className="gift-box grid gap-6 mt-4 md:grid-cols-3">
          <CopyField label="IBAN"  value="ES0914650120341755455766" />
          <CopyField label="Bizum" value="600615279" />
          <CopyField label="Bizum" value="645746444" />
        </div>

        <div className="mt-8 flex justify-center">
          <Image
            src="/Familia.png"
            alt="Familia"
            width={420}
            height={240}
            className="mx-auto"
            priority
          />
        </div>
      </section>
    </WeddingLayout>
  );
}
