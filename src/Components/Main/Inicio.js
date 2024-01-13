/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../index.css';
import CvImage from '../../assets/Cv.jpg';

export function Inicio() {
    return (
        <section id="sobremi" class="flex flex-col justify-center items-start w-4/6 h-screen cel:mt-24
        cel:w-11/12 cel:h-full cel:items-center cel:text-center">
            <div class="flex justify-center items-center text-white cel:flex-col">
                <h2 class="font-bold text-5xl cel:text-4xl">Hola, soy Benjamin Vallory</h2>
                <span class="cel:w-56 cel:h-8 w-40 h-5 grid place-items-center cel:ml-0 cel:mt-3 ml-5 mt-3 rounded-md cel:rounded-full text-sm bg-indigo-400">Disponibilidad laboral</span>
            </div>
            <div class="w-3/4 mt-2 cel:mt-5">
                <p class="text-2xl cel:text-lg font-normal cel:font-thin text-white">Desarrollador y programador web full stack junior. De Argentina, Entre Rios, Concordia.</p>
                <p class="text-2xl cel:text-lg font-normal cel:font-thin text-white">Me gusta ocupar mi tiempo libre
                    para estudiar nuevas tecnologias y realizar multiples proyectos para demostrar mis conocimientos a todas las personas.</p>
            </div>
            <div class="w-2/4 cel:w-full cel:justify-center cel:flex-col cel:items-center flex mt-8 flex-wrap justify-between text-white">
                <a href="https://github.com/iBxnja" class="cel:w-11/12 cel:h-14 cel:mt-0 w-24 h-8 border-2 border-neutral-400 bg-gray-600 rounded-full flex items-center justify-center"><i class="fa-brands fa-github mr-1"></i> Github</a>
                <a href="www.linkedin.com/in/diego-benjamin-vallory-52b793263" class="cel:w-11/12 cel:h-14 cel:mt-7 w-28 h-8 border-2 border-neutral-400 flex items-center justify-center bg-blue-500 rounded-full"><i class="fa-brands fa-linkedin mr-1"></i> LinkedIn</a>
                <a href="mailto:Benjavallory@hotmail.com" class="cel:w-11/12 cel:h-14 cel:mt-7 w-32 h-8 border-2 border-neutral-400 flex items-center justify-center bg-cyan-500 rounded-full"><i class="fa-solid fa-comments mr-1"></i> Hotmail</a>
                <a href="https://walink.co/b1d387" class="cel:w-11/12 cel:h-14 cel:mt-7 w-28 mt-5 h-8 border-2 border-neutral-400 flex items-center justify-center bg-green-500 rounded-full"><i class="fa-brands fa-whatsapp mr-1"></i> Whatsapp</a>
                <a href={CvImage} download="Cv.jpg" class="cel:w-11/12 cel:h-14 cel:mt-7 w-28 mt-5 h-8 border-2 border-neutral-400 flex items-center justify-center bg-orange-400 rounded-full"><i class="fa-solid fa-file mr-1"></i> Cv digital</a>
                <a href="mailto:benjaminvallory41gmail.com" class="cel:w-11/12 cel:h-14 cel:mt-7 cel:mb-7 w-24 mt-5 h-8 border-2 border-neutral-400 flex items-center justify-center bg-red-500 rounded-full"><i class="fa-solid fa-envelope mr-1"></i> Gmail</a>
            </div>
        </section>
    )
} 