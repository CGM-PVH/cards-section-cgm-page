import cardsData from "../../services/cardsService.js";

export function cards(){
    return `
    <div class="container">
            <div id="carouselProgramasDesktop">
                <ul id="sistema16">
                   ${cardGenerator(cardsData)}
                </ul>
            </div>
        </div>
    </div>
`
}

function cardGenerator(cardsData){

    const cards = cardsData.par

    return `
         <li>
            <a href="https://eaud.cgu.gov.br/">
                <div class="card" id="card1">
                    ${hasLogo(cards.logo, cards.title)}
                    <div class="card-text">
                        ${cards.description}
                    </div>
                </div>
            </a>
        </li>
    `
}

function hasLogo(logoData, title){
    if (logoData.url){
        return `<img class="logo" src=${logoData.url} alt=${logoData.alt}>`
    }
    return `<p>${title}</p>`
}
