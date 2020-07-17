// Deck reducer interface
export interface DeckState {
  loading?: boolean;
  error?: string | null;
  deck_id?: string | undefined;
  rotation?: string | undefined;
  piles?: any;
}

export interface Card {
  image?: string;
  value?: string;
  suit?: string;
  code: string;
}
