import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email es obligatorio' }, { status: 400 });
    }

    // Eliminar contacto de Brevo
    const response = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
    });

    if (!response.ok) {
      const data = await response.json();
      console.error('Error de Brevo:', data);
      return NextResponse.json(
        { error: data.message || 'Error al eliminar contacto de Brevo' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Contacto eliminado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
