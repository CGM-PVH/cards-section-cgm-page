### Site CGM Porto Velho
Este repositório contém a base de código para a seção CGM (Controladoria Geral do Município) do site do conselho municipal de Porto Velho.
A parte do site detalhada aqui inclui vários cards clicáveis que levam o usuário para outros recursos e seções importantes do site.

## Dados dos Cards
O objeto cardsData em cardsService.js contém todas as informações necessárias para cada card:
- Cada propriedade no objeto corresponde a um card no site e seu nome é único para aquele card.
- Cada card tem propriedades para título, logo e descrição, que fornecem o título do card, a URL onde a imagem de seu logo está armazenada e um texto alternativo para a imagem, e uma descrição do que pode ser encontrado quando o link do card é seguido.
- Também contém uma propriedade linkURL, que fornece o endereço exato onde o card deve assistir quando clicado.

## Gerador de Cards
A função cardGenerator é usada para criar dinamicamente cada card individual a partir dos dados fornecidos em cardsData.
- A função verifica se uma imagem de logo é fornecida para o card. Se nenhum logo for fornecido, o título do card é usado em vez disso.
- A função então gera uma string com o HTML necessário para que cada card seja renderizado em um site e é injetado na página da web com a ajuda da manipulação do DOM.
