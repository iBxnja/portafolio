/* eslint-disable jsx-a11y/alt-text */
import '../../index.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import laravel from '../../assets/laravel.png';
import tailwind from '../../assets/tailwind.png';
import php from '../../assets/php.png';
import javascript from '../../assets/javascript.png';
import dbeaver from '../../assets/dbeaver.png';
import axios from '../../assets/axios.png';
import vue from '../../assets/Vue.png';
import mysql from '../../assets/mysql.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import jquery from '../../assets/jquery.png';
import ajax from '../../assets/ajax.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import postgresql from '../../assets/postgresql.png';
import bootstrap from '../../assets/bootstrap.png';
import django from '../../assets/django.png';

export function Habilidad() {
    return (
        <section id="habilidades" class="flex justify-start items-center w-4/6 h-screen mt-20
        cel:w-11/12 cel:h-full cel:justify-center
        ">
            <div class="flex flex-col justify-center items-start cel:items-center">
                <div class="flex justify-center items-center text-gray-400">
                    <i class="fa-solid fa-sliders text-4xl mt-2"></i>
                    <h4 class="ml-5 text-4xl font-bold">Habilidades</h4>
                </div>
                <div class="mt-4 cel:text-center">
                    <h4 class="text-2xl text-white">Lenguajes de programación</h4>
                    <div class="w-full flex items-center justify-start mt-4 cel:justify-center cel:flex-wrap">
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
                        <div class="ml-2 flex items-center justify-center w-24 h-8 bg-indigo-400 border-2 border-neutral-800 rounded-full">
                            <img src={php} class="w-8 h-5" />
                            <span class="text-white font-medium ml-1">Php</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-28 h-8 bg-blue-900 border-2 border-neutral-800 rounded-full">
                            <img src={python} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Python</span>
                        </div>
                    </div>
                    <h4 class="text-2xl text-white mt-10">Librerias y tecnicas</h4>
                    <div class="w-full flex items-center justify-start mt-4 cel:justify-center cel:flex-wrap">
                        <div class="flex items-center justify-center w-24 h-8 bg-sky-600 border-2 border-neutral-800 rounded-full">
                            <img src={react} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">React</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-32 h-8 bg-blue-900 border-2 border-neutral-800 rounded-full">
                            <img src={axios} class="w-10 h-3" />
                            <span class="text-white font-medium ml-1">Axios</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-32 h-8 bg-cyan-600 border-2 border-neutral-800 rounded-full">
                            <img src={tailwind} class="w-7 h-5" />
                            <span class="text-white font-medium ml-1">Tailwind</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-24 h-8 bg-sky-500 border-2 border-neutral-800 rounded-full">
                            <img src={ajax} class="w-8 h-5" />
                            <span class="text-white font-medium ml-1">Ajax</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-24 h-8 bg-sky-800 border-2 border-neutral-800 rounded-full">
                            <img src={jquery} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Jquery</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-32 h-8 bg-violet-600 border-2 border-neutral-800 rounded-full">
                            <img src={bootstrap} class="w-6 h-5" />
                            <span class="text-white font-medium ml-1">Bootstrap</span>
                        </div>
                    </div>
                    <h4 class="text-2xl text-white mt-10">Frameworks</h4>
                    <div class="w-full flex items-center justify-start mt-4 cel:justify-center cel:flex-wrap">
                        <div class="flex items-center justify-center w-28 h-8 bg-green-900 border-2 border-neutral-800 rounded-full">
                            <img src={django} class="w-8 h-5" />
                            <span class="text-white font-medium ml-1">Django</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-20 h-8 bg-green-500 border-2 border-neutral-800 rounded-full">
                            <img src={vue} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Vue</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-28 h-8 bg-red-800 border-2 border-neutral-800 rounded-full">
                            <img src={laravel} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Laravel</span>
                        </div>
                    </div>
                    <h4 class="text-2xl text-white mt-10">Control de versiones y base de datos</h4>
                    <div class="w-full flex items-center justify-start mt-4 cel:justify-center cel:flex-wrap">
                        <div class="flex items-center justify-center w-20 h-8 bg-red-600 border-2 border-neutral-800 rounded-full">
                            <img src={git} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Git</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-24 h-8 bg-neutral-700 border-2 border-neutral-800 rounded-full">
                            <img src={github} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Github</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-28 h-8 bg-amber-900 border-2 border-neutral-800 rounded-full">
                            <img src={dbeaver} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Dbeaver</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-32 h-8 bg-cyan-700 border-2 border-neutral-800 rounded-full">
                            <img src={postgresql} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">Postgresql</span>
                        </div>
                        <div class="ml-2 flex items-center justify-center w-28 h-8 bg-orange-600 border-2 border-neutral-800 rounded-full">
                            <img src={mysql} class="w-5 h-5" />
                            <span class="text-white font-medium ml-1">MySql</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}