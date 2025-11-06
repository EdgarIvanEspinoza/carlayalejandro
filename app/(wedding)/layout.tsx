'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const menu = [
  { name: 'Inicio', href: '/' },
  { name: 'Detalles', href: '/detalles' },
  { name: 'Programa', href: '/programa' },
  { name: 'Dress Code', href: '/dresscode' },
  { name: 'Regalos', href: '/regalos' },
  // { name: "RSVP", href: "/rsvp" },
  // { name: "Fotos", href: "/fotos" },
];

function WeddingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-[#F7F3EE] via-[#F7F3EE] to-[#F7F3EE] text-zinc-800 font-sans flex flex-col">
      {/* Mobile Hamburger */}
      <nav className="w-full py-4 bg-white/80 shadow-sm sticky top-0 z-20 animate-fade-down">
        <div className="flex items-center justify-between md:hidden px-4">
          <span className="font-greatvibes text-2xl text-[#1f2937]">C & A</span>
          <button
            aria-label="Abrir menú"
            className="p-2 rounded-lg border border-[#e6efe2] bg-white shadow"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="7" width="32" height="3" rx="1.5" fill="#6b7d57" />
              <rect y="14" width="32" height="3" rx="1.5" fill="#6b7d57" />
              <rect y="21" width="32" height="3" rx="1.5" fill="#6b7d57" />
            </svg>
          </button>
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium justify-center">
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-xl transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-[#F7F3EE] text-[#6b7280] font-bold shadow'
                    : 'hover:bg-[#e6efe2] hover:text-[#6b7280]'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile sidebar menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30 flex flex-col pt-8 px-6"
            >
              <button
                aria-label="Cerrar menú"
                className="self-end mb-8 p-2 rounded-lg border border-[#e6efe2] bg-white"
                onClick={() => setOpen(false)}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="7"
                    y1="7"
                    x2="21"
                    y2="21"
                    stroke="#e6efe2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="21"
                    y1="7"
                    x2="7"
                    y2="21"
                    stroke="#e6efe2"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <ul className="flex flex-col gap-4 text-lg font-medium">
                {menu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-xl transition-colors duration-200 ${
                        pathname === item.href
                          ? 'bg-[#F7F3EE] text-[#6b7280] font-bold shadow'
                          : 'hover:bg-[#6b7280] hover:text-[#6b7280]'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto px-4 py-10 flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="py-8 px-4 text-center text-zinc-500 animate-fade-up">
        <Image
          src="/olivos.webp"
          alt="Flores Fotos"
          width={128}
          height={64}
          className="mt-8 mx-auto"
        />
        <p className="font-greatvibes text-3xl text-[#1f2937] mb-2">Carla & Alejandro</p>
        <p className="text-base mb-2">
          Un día, una historia, un amor eterno. Gracias por ser parte de nuestro sueño.
        </p>
        <p className="text-base">
          © 2025 Carla & Alejandro · Todos los derechos reservados ·{' '}
          <Link href="/rsvp" className="underline">
            Política de privacidad (RGPD)
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default WeddingLayout;
