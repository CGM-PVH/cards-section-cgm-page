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
    let cardsListItemHtml = ''

    for (let cardsKey in cardsData) {
        let card = cardsData[cardsKey];
        cardsListItemHtml += `
         <li>
            <a href=${card.linkURL} target="_blank">
                <div class="card" id="card1">
                    ${hasLogo(card.logo, card.title)}
                    <div class="card-text">
                        ${card.description}
                    </div>
                </div>
            </a>
        </li>
    `
    }

    return cardsListItemHtml
}

function hasLogo(logoData, title){
    if (logoData.url){
        return `<img class="logo" src=${logoData.url} alt=${logoData.alt}>`
    }
    return `<p>${title}</p>`
}
