/* eslint-disable no-restricted-globals */
import '../../index.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bmlq4vq', 'template_v4bzinq', form.current, 'N4ObmLcyeKEP-ybQl')
            .then((result) => {
                console.log(result.text);
                alert('¡Enviado correctamente!.');
                location.reload()
            }, (error) => {
                console.log(error.text);
                alert('¡Error al enviar el correo!.')
                location.reload()
            });
    };
    return (
        <section id="sobremi" class="flex flex-col justify-center items-start w-4/6 h-full cel:mt-24 mt-20 mb-10
        cel:w-11/12 cel:h-full cel:items-center cel:text-center">
            <div class="flex justify-center items-center text-gray-400">
                <i class="fa-solid fa-address-card text-4xl"></i>
                <h4 class="ml-5 text-4xl font-bold">Contacto</h4>
            </div>
            <form ref={form} onSubmit={sendEmail} method="POST" id="contacto" class="w-full h-full flex flex-col items-start justify-center mt-10 cel:items-center">
                <div class="flex flex-col items-start justify-center w-4/5 cel:items-center">
                    <label for="" class="text-2xl font-bold mb-4 text-orange-200">Nombre completo</label>
                    <input type="text" class="w-full rounded-lg text-sm font-semibold h-8" name="user_name" id='' required></input>
                </div>
                <div class="flex flex-col items-start justify-center w-4/5 mt-10 cel:items-center">
                    <label for="" class="text-2xl font-bold mb-4 text-orange-200">Correo electronico</label>
                    <input type="email" class="w-full rounded-lg text-sm font-semibold h-8" name="user_email" id='' required></input>
                </div>
                <div class="flex items-center justify-center w-4/5">
                    <div class="flex flex-col items-start justify-center w-full mt-10 cel:items-center">
                        <label for="" class="text-2xl font-bold mb-4 text-orange-200">Correo electronico</label>
                        <textarea name="message" id="" class="resize-none w-full rounded-lg h-20 text-sm font-semibold" required></textarea>
                    </div>
                </div>
                <input type='submit' class="text-black font-medium w-4/5 bg-orange-200 mt-10 h-10 rounded-lg cursor-pointer" value="Enviar mensaje"/>
            </form>
        </section >
    );
}
