// NOTA: 'resend' se importa de forma dinámica DENTRO del handler (más abajo)
// para que cualquier fallo al cargar el módulo no crashee la función entera
// (FUNCTION_INVOCATION_FAILED) sino que devuelva un error legible.

// --- Plantilla bilingüe de auto-respuesta (correo azul para el cliente) ---
function autoReplyEmail(nombre: string, lang: 'es' | 'en') {
  const t = lang === 'en'
    ? {
        subject: "We've received your request — TechSolutions",
        preheader: "Thanks for reaching out — we'll get back to you soon.",
        tagline: 'Custom software development',
        greeting: `Hi, ${nombre}!`,
        body1: "Thank you for contacting TechSolutions. We've successfully received your request.",
        highlight: "We'll get back to you within 24 hours.",
        body2: 'In the meantime, if your inquiry is urgent, message us directly on WhatsApp.',
        cta: 'Message us on WhatsApp',
        closing: 'Best regards,',
        team: 'The TechSolutions team',
        rights: 'All rights reserved.',
      }
    : {
        subject: 'Hemos recibido tu solicitud — TechSolutions',
        preheader: 'Gracias por contactarnos — te responderemos pronto.',
        tagline: 'Desarrollo de software a tu medida',
        greeting: `¡Hola, ${nombre}!`,
        body1: 'Gracias por ponerte en contacto con TechSolutions. Hemos recibido tu solicitud correctamente.',
        highlight: 'Te responderemos en menos de 24 horas.',
        body2: 'Mientras tanto, si tu consulta es urgente, escríbenos directamente por WhatsApp.',
        cta: 'Escríbenos por WhatsApp',
        closing: 'Saludos,',
        team: 'El equipo de TechSolutions',
        rights: 'Todos los derechos reservados.',
      };

  const html = `
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${t.preheader}</div>
  <div style="background-color:#eef1f6;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:14px;overflow:hidden;">
      <tr>
        <td style="background-color:#2563eb;background-image:linear-gradient(135deg,#2563eb,#1e40af);padding:34px 40px;text-align:center;">
          <div style="color:#ffffff;font-size:25px;font-weight:bold;">Tech<span style="color:#bfdbfe;">Solutions</span></div>
          <div style="color:#dbeafe;font-size:13px;margin-top:7px;">${t.tagline}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:38px 40px 8px;">
          <h1 style="margin:0 0 16px;font-size:22px;color:#111827;">${t.greeting}</h1>
          <p style="margin:0 0 18px;font-size:15px;line-height:1.65;color:#374151;">${t.body1}</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:22px 0;">
            <tr><td style="background-color:#eff6ff;border-left:4px solid #2563eb;padding:16px 20px;border-radius:6px;">
              <span style="font-size:15px;color:#1e40af;font-weight:bold;">${t.highlight}</span>
            </td></tr>
          </table>
          <p style="margin:0 0 28px;font-size:15px;line-height:1.65;color:#374151;">${t.body2}</p>
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 6px;">
            <tr><td style="border-radius:8px;background-color:#25D366;">
              <a href="https://wa.me/50231766741" style="display:inline-block;padding:14px 34px;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">${t.cta}</a>
            </td></tr>
          </table>
          <p style="margin:30px 0;font-size:15px;line-height:1.65;color:#374151;">${t.closing}<br><strong>${t.team}</strong></p>
        </td>
      </tr>
      <tr>
        <td style="background-color:#f9fafb;padding:22px 40px;text-align:center;border-top:1px solid #e5e7eb;">
          <p style="margin:0 0 8px;font-size:13px;color:#6b7280;line-height:1.6;">
            <a href="https://www.techsolutionsgt.dev" style="color:#2563eb;text-decoration:none;">www.techsolutionsgt.dev</a>
            &nbsp;·&nbsp; contacto@techsolutionsgt.dev &nbsp;·&nbsp; +502 3176-6741
          </p>
          <p style="margin:0;font-size:12px;color:#9ca3af;">© 2026 TechSolutions. ${t.rights}</p>
        </td>
      </tr>
    </table>
  </div>`;

  return { subject: t.subject, html };
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  // Validar la API key ANTES de crear el cliente (evita el crash al inicializar)
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Falta la variable de entorno RESEND_API_KEY en Vercel.');
    return res.status(500).json({
      error: 'Configuración del servidor incompleta: falta RESEND_API_KEY.',
    });
  }

  const { nombre, email, telefono, servicio, mensaje, lang = 'es' } = req.body ?? {};

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  try {
    // Import dinámico: si 'resend' falla al cargar (p.ej. versión de Node),
    // el error se captura aquí en vez de crashear la función.
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    // 1) Notificación PARA TI — con el detalle de lo que solicitó
    const notif = await resend.emails.send({
      from: 'TechSolutions <contacto@techsolutionsgt.dev>',
      to: 'mecg1994@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}`,
      html: `
        <h2>Nuevo contacto desde TechSolutions</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Servicio de interés:</strong> ${servicio || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>`,
    });

    // Resend NO lanza excepción en errores de API: devuelve { error }. Hay que revisarlo.
    if (notif.error) {
      console.error('Resend rechazó la notificación:', notif.error);
      return res.status(500).json({
        error: 'No se pudo enviar el correo',
        detalle: notif.error,
      });
    }

    // 2) Auto-respuesta PARA EL CLIENTE — el correo azul
    const auto = autoReplyEmail(nombre, lang === 'en' ? 'en' : 'es');
    const reply = await resend.emails.send({
      from: 'TechSolutions <contacto@techsolutionsgt.dev>',
      to: email,
      replyTo: 'mecg1994@gmail.com',
      subject: auto.subject,
      html: auto.html,
    });

    if (reply.error) {
      console.error('Resend rechazó la auto-respuesta:', reply.error);
      return res.status(500).json({
        error: 'No se pudo enviar la auto-respuesta',
        detalle: reply.error,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    // El error real de Resend queda en los logs de Vercel
    console.error('Error al enviar con Resend:', err);
    return res.status(500).json({
      error: 'No se pudo enviar el correo',
      detalle: err?.message ?? String(err),
    });
  }
}