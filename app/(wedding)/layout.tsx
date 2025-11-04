"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-[#f8f8f3] via-[#e6efe2] to-[#f7e6ef] font-inter text-zinc-800">
      <nav className="w-full flex justify-center py-6 bg-white/80 shadow-sm sticky top-0 z-20 animate-fade-down">
        <ul className="flex gap-6 text-lg font-medium">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`px-4 py-2 rounded-xl transition-colors duration-200 ${pathname === item.href ? 'bg-[#e6efe2] text-[#b76e79] font-bold shadow' : 'hover:bg-[#f7e6ef] hover:text-[#b76e79]'}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
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
        <p className="script font-greatvibes text-3xl text-[#b76e79] mb-2">Carla & Alejandro</p>
        <p className="small muted mb-2">Un día, una historia, un amor eterno. Gracias por ser parte de nuestro sueño.</p>
        <p className="small muted">© 2025 Carla & Alejandro · Todos los derechos reservados · <Link href="/rsvp" className="underline">Política de privacidad (RGPD)</Link></p>
      </footer>
    </div>
  );
}

export default WeddingLayout;
