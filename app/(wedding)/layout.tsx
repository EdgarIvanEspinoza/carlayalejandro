"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {  AnimatePresence, motion } from "framer-motion";

const menu = [
  { name: "Inicio", href: "/" },
  { name: "Detalles", href: "/detalles" },
  { name: "Programa", href: "/programa" },
  { name: "Dress Code", href: "/dresscode" },
  { name: "Regalos", href: "/regalos" },
  { name: "RSVP", href: "/rsvp" },
  { name: "Fotos", href: "/fotos" },
];

function WeddingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-[#f8f8f3] via-[#e6efe2] to-[#f7e6ef] font-inter text-zinc-800">
      {/* Mobile Hamburger */}
      <nav className="w-full py-4 bg-white/80 shadow-sm sticky top-0 z-20 animate-fade-down">
        <div className="flex items-center justify-between md:hidden px-4">
          <span className="font-greatvibes text-2xl text-[#b76e79]">C & A</span>
          <button
            aria-label="Abrir menú"
            className="p-2 rounded-lg border border-[#e6efe2] bg-white shadow"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Abrir menú</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="32" height="3" rx="1.5" fill="#b76e79" />
              <rect y="14" width="32" height="3" rx="1.5" fill="#b76e79" />
              <rect y="21" width="32" height="3" rx="1.5" fill="#b76e79" />
            </svg>
          </button>
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium justify-center">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`px-4 py-2 rounded-xl transition-colors duration-200 ${pathname === item.href ? 'bg-[#e6efe2] text-[#b76e79] font-bold shadow' : 'hover:bg-[#f7e6ef] hover:text-[#b76e79]'}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile sidebar menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30 flex flex-col pt-8 px-6"
            >
              <button
                aria-label="Cerrar menú"
                className="self-end mb-8 p-2 rounded-lg border border-[#e6efe2] bg-white"
                onClick={() => setOpen(false)}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="7" y1="7" x2="21" y2="21" stroke="#b76e79" strokeWidth="2" strokeLinecap="round" />
                  <line x1="21" y1="7" x2="7" y2="21" stroke="#b76e79" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <ul className="flex flex-col gap-4 text-lg font-medium">
                {menu.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-xl transition-colors duration-200 ${pathname === item.href ? 'bg-[#e6efe2] text-[#b76e79] font-bold shadow' : 'hover:bg-[#f7e6ef] hover:text-[#b76e79]'}`}
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
          className="max-w-3xl mx-auto px-4 py-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <footer className="site-footer py-8 px-4 text-center text-zinc-500 animate-fade-up">
        <p className="font-greatvibes text-3xl text-[#b76e79] mb-2">Carla & Alejandro</p>
        <p className="small mb-2">Un día, una historia, un amor eterno. Gracias por ser parte de nuestro sueño.</p>
        <p className="small">© 2025 Carla & Alejandro · Todos los derechos reservados · <Link href="/rsvp" className="underline">Política de privacidad (RGPD)</Link></p>
      </footer>
    </div>
  );
}

export default WeddingLayout;
