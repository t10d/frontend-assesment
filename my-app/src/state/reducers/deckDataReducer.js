import produce from 'immer';

export default (data, action) => {
  switch (action.type) {
    case 'removeDeck':
      return produce(data, draft => {
        draft.decks = [...draft.decks.filter(({id}) => id !== action.id)];
      });

    case 'addDeck':
      return produce(data, draft => {
        draft.decks = [...draft.decks, action.deck];
      });


    default:
      return data;
  }
};
