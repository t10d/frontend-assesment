# Introdução

O objetivo desse projeto é avaliar o seu conhecimento de Javascript, Git, Design Patterns, Testing, HTML5, CSS3 e resolução de problemas.

# Especificação do projeto

Você deve criar uma aplicação para analizar um deck de cartas do usuário. A aplicação deve ter duas rotas e usar esta [API](https://deckofcardsapi.com/) para persistir dados.

### Rota #1 - /deck/new

Esta página mostra um formulário que aceita até 10 cartas válidas e uma **Carta de Rotação.**

Página: https://drive.google.com/file/d/1qo4Q3AiVXUZLueZgnHq0tcShrB2JlXIf/view?usp=sharing

Quando o usuário submeter o formulário, um novo deck deve ser criado [1], as cartas submetidas pelo usuário devem ser adicionadas para 1 ou mais pilhas [2] e o usuário deve ser redirecionado para a Rota #2.

### Rota #2 - /deck/<<deck_id>>
Esta página deve carregar a pilha criada pela Rota #1, usando o `deck_id` dado pelo endpoint "A Brand New Deck" [1], mostrando:

1. A pilha de cartas em ordem
2. A **Carta de Rotação**
3. A **Carta de Maior Valor**
4. Todas as combinações **Full House**

Página: https://drive.google.com/file/d/1PX44fwupvAvTzLb99w6HoeniTWVV-dqL/view?usp=sharing

Tenha em mente que você deve consumir a API porque espera-se que a Rota #2 funcione independentemente da Rota #1. Em outras palavras, uma vez criado um Deck usando a Rota #1, deve-se ser capaz de usar a Rota #2 para acessar o Deck criado usando o `deck_id`.

### Playbook

1. Naipes e valores de cartas têm uma sequência que deve ser preservada.
    1. Naipes: Corações/Hearts (H), Diamantes/Diamonds (D), Paus/Clubs (C) e Espadas/Spades (S).
    2. Valores: 2, A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3 
2. Os naipes têm precedência sobre os valores das cartas. 
3. A **Carta de Rotação** especificada pelo usuário define a carta de maior valor do deck.

    Se a **Carta de Rotação** é 6C:

    1. Do maior para o menor valor de cartas se torna: 6, 5, 4, 3, 2, A, K, Q, J, 10, 9, 8, 7
    2. Do maior para o menor naipe de cartas se torna: Paus/Clubs, Espadas/Spades, Corações/Hearts e Diamantes/Diamonds.
    3. Em ambos os casos, a sequência de valores e naipes permanecem preservados.

    Dado a carta de rotação 6C, o seguinte é verdadeiro:

    - 6S > 10S
    - 6S < 10C

    **Combinações Full House** são definidas como todas as mãos possíveis que contem 3 cartas de 1 rank e 2 cartas de outro rank.

    A **Carta de Maior Valor** é definida como a carta que possui o maior rank na pilha.

### Exemplos

1. Input - Cartas: 7D, AS, QH, 9S, 6D e **Carta de Rotação**: 2H
    - Pilha ordenada: QH, 7D, 6D, AS, 9S
    - Carta de Maior Valor: QH
    - Combinações Full House: None
2. Input - Cartas: 7D, AS, QH, 9S, 6D e **Carta de Rotação**: 10C
    - Pilha ordenada: 9S, AS, QH, 7D, 6D
    - Carta de Maior Valor: 9S
    - Combinações Full House: None
3. Input - Cartas: AS, AD, AC, KH, KS e **Carta de Rotação**: 2H
    - Pilha ordenada: KH, AD, AC, AS, KS
    - Carta de Maior Valor: KH
    - Combinações Full House:
        1. AD, AC, AS, KH, KS
4. Input - Cartas: 2H, 2D, 2C, 2S, 3H, 3D, 3C e **Carta de Rotação**: 2H
    - Pilha ordenada: 2H, 3H, 2D, 3D, 2C, 3C, 2S
    - Carta de Maior Valor: 2H
    - Combinações Full House:
        1. 2H, 2D, 2C, 3H, 3D
        2. 2H, 2D, 2C, 3H, 3C
        3. 2H, 2D, 2C, 3D, 3C
        4. 2H, 2D, 2S, 3H, 3D
        5. 2H, 2D, 2S, 3H, 3C
        6. 2H, 2D, 2S, 3D, 3C
        7. 2H, 2C, 2S, 3H, 3D
        8. 2H, 2C, 2S, 3H, 3C
        9. 2H, 2C, 2S, 3D, 3C
        10. 2D, 2C, 2S, 3H, 3D
        11. 2D, 2C, 2S, 3H, 3C
        12. 2D, 2C, 2S, 3D, 3C
        13. 2H, 2D, 3H, 3D, 3C
        14. 2H, 2C, 3H, 3D, 3C
        15. 2H, 2S, 3H, 3D, 3C
        16. 2D, 2C, 3H, 3D, 3C
        17. 2D, 2S, 3H, 3D, 3C
        18. 2C, 2S, 3H, 3D, 3C

### Referências

[1] https://deckofcardsapi.com/api/deck/new/

[2] https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S

# Regras e Requisitos

1. Você deve fazer um fork deste projeto e abrir um PR para este repositório assim que terminar.
2. Apesar da API ter imagens das cartas, gostaríamos de ver como você as construiria usando CSS.
3. Exceto por biblioteca de cartas e frameworks CSS, você pode usar qualquer biblioteca que quiser, juntamente com React.js.
    1. Caso use uma biblioteca para boilerplate, você deve criar um git commit separado para os arquivos criados por essa biblioteca.
4. Você deve escrever testes automatizados.
5. Use Redux/Mobx ou outra biblioteca de gestão de estados, para ajudar a gerir os estados de sua aplicação.
6. TypeScript não é mandatório mas você receberá pontos de bônus por utilizar.
7. Você deve incluir um Readme com instruções em como rodar o projeto, testar e usar a aplicação.
8. Balanceie seu tempo com sabedoria entre diferentes áreas deste desafio. Estimamos que você deve gastar **aproximadamente 12 horas** para completar esse desafio.
