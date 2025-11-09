'use client';
import WeddingLayout from '../(wedding)/layout';
import Image from 'next/image';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

type CopyType = 'IBAN' | 'Bizum';

/** Componente reutilizable con estado independiente */
function CopyField({
  label,
  value,
  buttonClass = 'text-[#000] hover:text-[#000] transition-colors duration-200',
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
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* <label className="text-sm text-zinc-600">{label}</label> */}
      <div className="flex items-center">
        <div className="grow bg-white/50 border border-[#e6efe2] rounded-l-lg px-4 flex items-center h-11 font-mono text-black">
          {value}
        </div>
        <button
          onClick={handleCopy}
          className={`bg-white/50 gap-2 border-y border-r border-[#e6efe2] rounded-r-lg px-3 flex items-center justify-center h-11 hover:bg-[#6b7d57] ${buttonClass}`}
          type="button"
          aria-label={`Copiar ${label}`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5" />
              {label}
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 pr-1" />
              {label}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Regalos() {
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-greatvibes text-[#1f2937] mb-6 text-center">
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
        <p className="text-2xl md:text-2xl text-center max-w-1xl mx-auto">
          Vuestra presencia es el mejor regalo.
        </p>
        <p className="text-1xl md:text-1xl text-center max-w-1xl mx-auto">
          Si aun así queréis tener un detalle,
          <br></br>podéis usar este IBAN o Bizum.
        </p>

        <div className="mt-6 max-w-md mx-auto bg-white/90 rounded-2xl shadow-md p-8 border border-[#e6efe2] backdrop-blur-sm">
          <div className="flex flex-col gap-6">
            <CopyField label="IBAN" value="ES0914650120341755455766" />
            <div className="h-px bg-[#e6efe2] w-full"></div>
            <CopyField label="Bizum" value="600615279" />
            <CopyField label="Bizum" value="645746444" />
          </div>
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
