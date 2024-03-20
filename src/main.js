import './styles/global.css';
import {cards} from "./components/ProgramSectionCards/cards.js";

export function main(){
    return `
        <div id="iframe-content">
            <!--      COMPONENT LOAD      -->
        </div>
`
}

function loadCSS(path) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    link.id = 'dynamic-css';  // Adicione um id para referenciar a folha de estilo
    document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('app').innerHTML += main()
    document.getElementById('iframe-content').innerHTML += cards()
    loadCSS('./src/components/ProgramSectionCards/cards.css')
})
