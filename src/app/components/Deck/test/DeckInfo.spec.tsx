import React from "react";
import DeckInfo from "../components/DeckInfo";
import axiosMock from "../../../../utils/axios-mock";
import { mockCardsRes } from "../../../../utils/mock";
import {
  screen,
  renderWithRouter,
  waitForElementToBeRemoved,
  within,
} from "../../../../utils/test-utls";
import { Route } from "react-router-dom";

const pileName = process.env.REACT_APP_PILE_NAME;

describe("Deck Info", () => {
  const deckID = "9goid8be11q5";

  jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  }));

  it("renders correctly given list of cards", async () => {
    const fullHouseCombinations = [
      "2H, 2D, 2C, 3H, 3D",
      "2H, 2D, 2C, 3H, 3C",
      "2H, 2D, 2C, 3D, 3C",
      "2H, 2D, 2S, 3H, 3D",
      "2H, 2D, 2S, 3H, 3C",
      "2H, 2D, 2S, 3D, 3C",
      "2H, 2C, 2S, 3H, 3D",
      "2H, 2C, 2S, 3H, 3C",
      "2H, 2C, 2S, 3D, 3C",
      "2D, 2C, 2S, 3H, 3D",
      "2D, 2C, 2S, 3H, 3C",
      "2D, 2C, 2S, 3D, 3C",
      "2H, 2D, 3H, 3D, 3C",
      "2H, 2C, 3H, 3D, 3C",
      "2H, 2S, 3H, 3D, 3C",
      "2D, 2C, 3H, 3D, 3C",
      "2D, 2S, 3H, 3D, 3C",
      "2C, 2S, 3H, 3D, 3C",
    ];

    axiosMock
      .onGet(`/${deckID}/pile/${pileName}/list`)
      .reply(200, mockCardsRes);

    renderWithRouter(<Route path="/deck/:id" component={DeckInfo} />, {
      route: `/deck/${deckID}`,
    });

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Loading data...")
    );

    // verify page content for expected route
    expect(screen.queryByText("Full House Combinations")).toBeInTheDocument();

    const fullHouseCombinationsParentElement = screen.getByText(
      /full house combinations/i
    ).parentNode as HTMLElement;

    // Expect all combinations to be printed as fullHouseCombinationsParentElement child
    fullHouseCombinations.forEach((comb) => {
      expect(
        within(fullHouseCombinationsParentElement).queryByText(comb)
      ).toBeInTheDocument();
    });
  });

  it("renders when api error occurs", async () => {
    axiosMock.onGet(`/${deckID}/pile/${pileName}/list`).networkError();

    renderWithRouter(<Route path="/deck/:id" component={DeckInfo} />, {
      route: `/deck/${deckID}`,
    });

    await waitForElementToBeRemoved(() =>
      screen.queryByText("Loading data...")
    );

    expect(
      screen.queryByText("An error occured while retrieving data")
    ).toBeInTheDocument();
  });
});
