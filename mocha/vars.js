export const expectedRotated = {
  cards: [
    { code: '8', value: '8', ptbr: '8', card: '8' },
    { code: '7', value: '7', ptbr: '7', card: '7' },
    { code: '6', value: '6', ptbr: '6', card: '6' },
    { code: '5', value: '5', ptbr: '5', card: '5' },
    { code: '4', value: '4', ptbr: '4', card: '4' },
    { code: '3', value: '3', ptbr: '3', card: '3' },
    { code: '2', value: '2', ptbr: '2', card: '2' },
    { code: 'A', value: 'ACE', ptbr: 'Ás', card: 'A' },
    { code: 'K', value: 'KING', ptbr: 'Rei', card: 'K' },
    { code: 'Q', value: 'QUEEN', ptbr: 'Rainha', card: 'Q' },
    { code: 'J', value: 'JACK', ptbr: 'Valete', card: 'J' },
    { code: '0', value: '10', ptbr: '10', card: '10' },
    { code: '9', value: '9', ptbr: '9', card: '9' }
  ],
  suits: [
    { name: 'HEARTS', value: 'H', ptbr: 'Copas', color: '#d00' },
    { name: 'DIAMONDS', value: 'D', ptbr: 'Ouro', color: '#d00' },
    { name: 'CLUBS', value: 'C', ptbr: 'Paus', color: '#000' },
    { name: 'SPADES', value: 'S', ptbr: 'Espadas', color: '#000' }
  ]
}

export const listToOrder = [
  { code: '2D', suit: 'DIAMONDS'},
  { code: '0C', suit: 'CLUBS'},
  { code: '5D', suit: 'DIAMONDS'},
  { code: 'JH', suit: 'HEARTS'},
  { code: 'KS', suit: 'SPADES'},
  { code: 'AD', suit: 'DIAMONDS'},
  { code: '2S', suit: 'SPADES'},
  { code: '3H', suit: 'HEARTS'}
]

export const expectedSortBySuit = [['JH','3H'],['2D','5D','AD'],['0C'],['KS','2S']]

export const expectedSortByValue = [
  '3H', 'JH', '5D',
  '2D', 'AD', '0C',
  '2S', 'KS'
]