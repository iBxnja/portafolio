import React, { useState, useEffect } from 'react';
import '../../index.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    if (menuOpen) {
      // navbar.classList.add('w-full', 'h-screen');
      // cerrar.classList.remove('hidden');
    } else {
      // navbar.classList.remove('w-full', 'h-screen');
      // cerrar.classList.add('hidden');
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header id="header" className={`w-full h-24 flex items-center justify-center fixed cel:flex ${menuOpen ? 'cel:w-full cel:h-screen' : ''}`}>
      <nav id="navbar" className={`flex gap-12 text-white w-7/12 h-10 rounded-full items-center justify-center bg-neutral-900 border-2 border-stone-950 ${menuOpen ? 'cel:w-full cel:h-screen cel:rounded-none cel:flex-col' : 'cel:w-10 cel:absolute cel:top-5 cel:left-5'}`} onClick={toggleMenu}>
        <i className={`fa-solid fa-xmark cel:text-4xl hidden ${menuOpen ? 'cel:block cel:absolute cel:top-5 cel:right-5' : 'cel:hidden'}`} id="cerrar" onClick={toggleMenu}></i>
        <a href='#sobremi' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:bg-neutral-600 w-24 rounded-full text-center`}>Sobre mí</a>
        <a href='#habilidades' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:bg-neutral-600 w-24 rounded-full text-center`}>Habilidades</a>
        <a href='#proyectos' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:bg-neutral-600 w-24 rounded-full text-center`}>Proyectos</a>
        <a href='#experiencia' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:bg-neutral-600 w-24 rounded-full text-center`}>Experiencia</a>
        <a href='#contacto' className={`${menuOpen ? 'cel:block' : 'cel:hidden'} transition duration-200 ease-in-out hover:bg-neutral-600 w-24 rounded-full text-center`}>Contacto</a>
      </nav>
    </header>
  );
}
