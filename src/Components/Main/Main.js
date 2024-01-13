import '../../index.css';
import { Contacto } from './Contacto';
import { Experiencia } from './Experiencia';
import { Habilidad } from './Habilidad';
import { Inicio } from './Inicio';
import { Proyectos } from './Proyectos';
export function Main(){
    return(
        <main class="flex flex-col items-center justify-center">
            <Inicio />
            <Habilidad />
            <Proyectos />
            <Experiencia />
            <Contacto />
        </main>
    )
}