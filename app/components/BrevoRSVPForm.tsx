'use client';

import { useState } from 'react';

export default function BrevoRSVPForm() {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    restriccion: '',
    acompanante: false,
    acompNombre: '',
    confirmado: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/brevo-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar la confirmación');
      }

      setMessage('¡Confirmación enviada con éxito! Gracias por confirmar tu asistencia.');
      setFormData({
        email: '',
        nombre: '',
        restriccion: '',
        acompanante: false,
        acompNombre: '',
        confirmado: false,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el formulario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/90 rounded-2xl shadow-md border border-[#e6efe2] backdrop-blur-sm">
      <h2 className="text-3xl font-greatvibes text-[#1f2937] mb-6 text-center">
        Confirmación de Asistencia
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-[#e6efe2] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#6b7d57] transition"
            placeholder="tu@email.com"
          />
        </div>

        {/* Nombre */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700" htmlFor="nombre">
            Nombre completo *
          </label>
          <input
            id="nombre"
            type="text"
            required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="border border-[#e6efe2] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#6b7d57] transition"
            placeholder="Tu nombre completo"
          />
        </div>

        {/* Acompañante checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="acompanante"
            type="checkbox"
            checked={formData.acompanante}
            onChange={(e) =>
              setFormData({ ...formData, acompanante: !!e.target.checked, acompNombre: '' })
            }
            className="accent-[#6b7d57] w-4 h-4"
          />
          <label className="text-sm font-medium text-zinc-700" htmlFor="acompanante">
            ¿Vendrás acompañado/a?
          </label>
        </div>

        {/* Restricción alimentaria */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-700" htmlFor="restriccion">
            ¿Tienes alguna restricción o alergia alimentaria?
          </label>
          <input
            id="restriccion"
            type="text"
            value={formData.restriccion}
            onChange={(e) => setFormData({ ...formData, restriccion: e.target.value })}
            className="border border-[#e6efe2] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#6b7d57] transition"
            placeholder="Ej.: sin gluten, vegetariano..."
          />
        </div>

        {/* Nombre acompañante (condicional) */}
        {formData.acompanante && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-700" htmlFor="acompNombre">
              Nombre del acompañante *
            </label>
            <input
              id="acompNombre"
              type="text"
              required={formData.acompanante}
              value={formData.acompNombre}
              onChange={(e) => setFormData({ ...formData, acompNombre: e.target.value })}
              className="border border-[#e6efe2] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#6b7d57] transition"
              placeholder="Nombre del acompañante"
            />
          </div>
        )}

        {/* Confirmación */}
        <div className="flex items-center gap-2">
          <input
            id="confirmado"
            type="checkbox"
            required
            checked={formData.confirmado}
            onChange={(e) => setFormData({ ...formData, confirmado: e.target.checked })}
            className="accent-[#6b7d57] w-4 h-4"
          />
          <label className="text-sm font-medium text-zinc-700" htmlFor="confirmado">
            Confirmo mi asistencia *
          </label>
        </div>

        {/* Mensajes */}
        {message && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {message}
          </div>
        )}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">{error}</div>
        )}

        {/* Botón enviar */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6b7d57] text-white font-semibold rounded-full px-6 py-3 transition-colors duration-200 shadow-md hover:bg-[#d4af37] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Enviando...' : 'Confirmar asistencia'}
        </button>
      </form>
    </div>
  );
}
