'use client';

import WeddingLayout from '../(wedding)/layout';
import Image from 'next/image';
import { useState } from 'react';

export default function RSVP() {
  const [hasGuest, setHasGuest] = useState(false);
  const [guests, setGuests] = useState([{ name: '', diet: '' }]);
  return (
    <WeddingLayout>
      <section className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-greatvibes text-[#1f2937] mb-6 text-center">
          Confirmación (RSVP)
        </h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col text-base text-zinc-700">
              Nombre y apellidos del invitado principal
              <input
                className="mt-2 border border-[#e6efe2] rounded-lg px-4 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                type="text"
                name="name"
                required
              />
            </label>
            <label className="flex flex-col text-base text-zinc-700">
              Email de contacto
              <input
                className="mt-2 border border-[#e6efe2] rounded-lg px-4 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                type="email"
                name="email"
                required
              />
            </label>
          </div>
          <div className="mt-4">
            <label className="flex flex-col text-base text-zinc-700">
              ¿Tienes alguna restricción o alergia alimentaria?
              <input
                className="mt-2 border border-[#e6efe2] rounded-lg px-4 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                type="text"
                name="diet"
                placeholder="Ej.: sin gluten, vegetariano..."
              />
            </label>
          </div>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 text-base text-zinc-700">
              <input
                type="checkbox"
                name="hasGuest"
                className="accent-[#e6efe2] w-4 h-4"
                checked={hasGuest}
                onChange={(e) => setHasGuest(e.target.checked)}
              />
              ¿Vendrás acompañado/a?
            </label>
            {hasGuest && (
              <>
                {guests.map((guest, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-4 mb-2">
                    <label className="flex flex-col text-base text-zinc-700 w-full md:w-1/2">
                      Nombre completo del acompañante
                      <input
                        className="mt-2 border border-[#e6efe2] rounded-lg px-4 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                        type="text"
                        name={`guestName${idx}`}
                        placeholder="Indica el nombre de tu acompañante"
                        required={hasGuest}
                        value={guest.name}
                        onChange={(e) => {
                          const newGuests = [...guests];
                          newGuests[idx].name = e.target.value;
                          setGuests(newGuests);
                        }}
                      />
                    </label>
                    <label className="flex flex-col text-base text-zinc-700 w-full md:w-1/2">
                      ¿Restricción o alergia alimentaria?
                      <input
                        className="mt-2 border border-[#e6efe2] rounded-lg px-4 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#b76e79] transition"
                        type="text"
                        name={`guestDiet${idx}`}
                        placeholder="Ej.: sin gluten, vegetariano..."
                        value={guest.diet}
                        onChange={(e) => {
                          const newGuests = [...guests];
                          newGuests[idx].diet = e.target.value;
                          setGuests(newGuests);
                        }}
                      />
                    </label>
                  </div>
                ))}

                {guests.length > 1 && (
                  <button
                    type="button"
                    className="inline-block bg-[#ffe4e1] text-[#b76e79] font-inter font-semibold rounded-full px-4 py-2 border-none cursor-pointer transition-colors duration-200 shadow text-sm hover:bg-[#d4af37] hover:text-white mb-2"
                    onClick={() => setGuests([...guests, { name: '', diet: '' }])}
                  >
                    Añadir acompañante
                  </button>
                )}
              </>
            )}
          </div>
          <div className="mt-4">
            <label className="flex items-center gap-2 text-sm text-zinc-700">
              <input type="checkbox" name="consent" required className="accent-[#e6efe2] w-4 h-4" />
              Acepto el tratamiento de mis datos personales para la gestión del evento (RGPD).
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center mt-6">
            <button
              className="inline-block bg-[#6b7d57] text-white font-inter font-semibold rounded-full px-6 py-3 border-none cursor-pointer transition-colors duration-200 shadow-md text-base hover:bg-[#d4af37] hover:text-white"
              type="submit"
            >
              Enviar confirmación
            </button>
            <span className="text-sm text-[#b7c9a7]" role="status" aria-live="polite"></span>
          </div>
        </form>
        <Image
          src="/flowers.webp"
          alt="Flores RSVP"
          width={128}
          height={64}
          className="mt-8 mx-auto"
        />
      </section>
    </WeddingLayout>
  );
}
