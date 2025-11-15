import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, nombre, restriccion, acompanante, acompNombre, confirmado } = body;

    // Validación básica
    if (!email || !nombre || !confirmado) {
      return NextResponse.json(
        { error: 'Email, nombre y confirmación son obligatorios' },
        { status: 400 }
      );
    }

    // Llamada a la API de Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // ID de la lista "Su primera lista"
        attributes: {
          RSVP_NOMBRE: nombre,
          RSVP_RESTRICCION: restriccion || '',
          RSVP_ACOMPANANTE: Boolean(acompanante),
          RSVP_ACOMP_NOMBRE: acompNombre || '',
          RSVP_CONFIRMADO: Boolean(confirmado),
        },
        updateEnabled: true, // Actualiza el contacto si ya existe
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error de Brevo:', data);
      return NextResponse.json(
        { error: data.message || 'Error al agregar contacto a Brevo' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Contacto agregado exitosamente', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
