import React from 'react';

export const Contact = () => {
  return (
    <section className="main__contacto">
      <h2 className="container heading__lvl--two" id="contacto">Contacto</h2>
      <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xbjqrygb" method="post">
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name">Nombre Completo</label>
          <input autoComplete="off" type="text" name="name" id="full-name" placeholder="Ingresa tu nombre..." required="" />
          <label htmlFor="email-address">Correo Electrónico</label>
          <input autoComplete="off" type="email" name="_replyto" id="email-address" placeholder="tu_nombre@example.com" required="" />
          <label htmlFor="message">Mensaje</label>
          <textarea rows="10" name="message" id="message" placeholder="Si te interesa, podes enviarme un mensaje!" required=""></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
        </fieldset>
        <input type="submit" value="Enviar" />
      </form>
    </section>
  )
};
