/* eslint-disable jsx-a11y/alt-text */
import '../../index.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import laravel from '../../assets/laravel.png';
import tailwind from '../../assets/tailwind.png';
import php from '../../assets/php.png';
import javascript from '../../assets/javascript.png';
import galeria from '../../assets/galeria.PNG';
import dolar from '../../assets/dolar.jpg';
import axios from '../../assets/axios.png';
import vue from '../../assets/Vue.png';
import mysql from '../../assets/mysql.png';


export function Proyectos() {
    return (
        <section id="proyectos" class="flex flex-col justify-center items-start w-4/6 h-full mt-20 cel:w-11/12 cel:text-center cel:items-center">
            <div class="flex flex-col justify-center items-start cel:items-center">
                <div class="flex items-center justify-center text-gray-400">
                    <i class="fa-solid fa-code text-4xl mt-2"></i>
                    <h4 class="cel:ml-2 ml-5 text-4xl font-bold">Proyectos</h4>
                </div>
                {/* ------------------------------------------------------------------------------------------------------ */}
                <h4 class="text-orange-200 text-2xl font-bold mt-5">Proyecto full stack</h4>
                <p class="text-white text-lg cel:text-sm cel:font-thin">Proyecto full stack el cual el usuario puede registrarse, logearse y acceder a la galeria. En
                    esta misma el usuario puede agregar imagenes de recuerdo, paises recorridos, culturas descubiertas, personas conocidas y
                    lugares visitados.</p>
                <div class="flex items-center justify-center mt-4 cel:flex-wrap">
                    <div class="flex items-center justify-center w-24 h-8 bg-orange-600 border-2 border-neutral-800 rounded-full">
                        <img src={html} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">Html</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-32 h-8 bg-cyan-800 border-2 border-neutral-800 rounded-full">
                        <img src={tailwind} class="w-7 h-5" />
                        <span class="text-white font-medium ml-1">Tailwind</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-28 h-8 bg-sky-600 border-2 border-neutral-800 rounded-full">
                        <img src={mysql} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">MySql</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-32 h-8 bg-yellow-400 border-2 border-neutral-800 rounded-full">
                        <img src={javascript} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">Javascript</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-24 h-8 bg-indigo-400 border-2 border-neutral-800 rounded-full">
                        <img src={php} class="w-8 h-5" />
                        <span class="text-white font-medium ml-1">Php</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-28 h-8 bg-red-800 border-2 border-neutral-800 rounded-full">
                        <img src={laravel} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">Laravel</span>
                    </div>

                </div>
                <img src={galeria} class="mt-5 cel:w-11/12 w-full h-full border-4 border-black shadow-lg shadow-neutral-800" />
                {/* ------------------------------------------------------------------------------------------------------ */}
                <h4 class="text-orange-200 text-2xl font-bold mt-20">Proyecto con api</h4>
                <p class="text-white text-lg cel:text-sm cel:font-thin">En este sitio utilicé una api publica para obtener los valores de compra y venta de los distintos
                    dolares que se manejan en Argentina. Tambien, con estos mismos cree un conversor de un dolar elegido por la persona a la moneda Argentina (ARS).</p>
                <div class="flex items-center justify-center mt-4 cel:flex-wrap">
                    <div class="flex items-center justify-center w-24 h-8 bg-orange-600 border-2 border-neutral-800 rounded-full">
                        <img src={html} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">Html</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-20 h-8 bg-blue-700 border-2 border-neutral-800 rounded-full">
                        <img src={css} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">Css</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-32 h-8 bg-yellow-400 border-2 border-neutral-800 rounded-full">
                        <img src={javascript} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">Javascript</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-20 h-8 bg-green-400 border-2 border-neutral-800 rounded-full">
                        <img src={vue} class="w-5 h-5" />
                        <span class="text-white font-medium ml-1">Vue</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-32 h-8 bg-blue-900 border-2 border-neutral-800 rounded-full">
                        <img src={axios} class="w-10 h-4" />
                        <span class="text-white font-medium ml-1">Axios</span>
                    </div>
                    <div class="ml-2 flex items-center justify-center w-32 h-8 bg-cyan-800 border-2 border-neutral-800 rounded-full">
                        <img src={tailwind} class="w-7 h-5" />
                        <span class="text-white font-medium ml-1">Tailwind</span>
                    </div>
                </div>
                <img src={dolar} class="mt-5 w-full cel:w-11/12 h-full border-4 border-black shadow-lg shadow-neutral-800" />
                {/* ------------------------------------------------------------------------------------------------------ */}
            </div>
        </section>
    )
}