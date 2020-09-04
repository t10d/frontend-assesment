import DeckForm from "./modules/DeckForm";
import ShowDeck from "./modules/ShowDeck";

type Route = {
  path: string;
  exact?: boolean;
  component: any;
};

export type Routes = Route[];

const routes: Routes = [
  { path: "/", exact: true, component: DeckForm },
  { path: "/show_deck/:id", component: ShowDeck },
];

export default routes;
