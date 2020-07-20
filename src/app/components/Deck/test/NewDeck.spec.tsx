import React from "react";
import {
  screen,
  renderWithRouter,
  fireEvent,
  waitFor,
} from "../../../../utils/test-utls";
import { Route } from "react-router-dom";
import NewDeck from "../components/NewDeck";

describe("New Deck", () => {
  jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  }));

  it("render correctly", async () => {
    renderWithRouter(<Route path="/deck/new" component={NewDeck} />, {
      route: `/deck/new`,
    });

    // Should render all inputs
    expect(
      screen.getAllByPlaceholderText("Card", { exact: false }).length
    ).toBe(11);

    // Should render the rotation card input
    expect(screen.getByPlaceholderText("Rotation Card")).toBeInTheDocument();
  });

  it("show error when inserting invalid cards", async () => {
    renderWithRouter(<Route path="/deck/new" component={NewDeck} />, {
      route: "/deck/new",
    });

    const submitBtn = screen.getByText(/submit/i);

    const card1 = screen.getByPlaceholderText("Card 1");
    const rotationCard = screen.getByPlaceholderText("Rotation Card");

    fireEvent.change(card1, { target: { value: "(9T)" } });
    fireEvent.change(rotationCard, { target: { value: "(8I)" } });
    // fireEvent.blur(card1);

    fireEvent.click(submitBtn);

    await waitFor(() => screen.getAllByTestId("form-error"));

    expect(screen.getAllByTestId("form-error").length).toBe(2);
  });

  it("show validation errors when submiting form incorrectly", async () => {
    renderWithRouter(<Route path="/deck/new" component={NewDeck} />, {
      route: `/deck/new`,
    });

    const submitBtn = screen.getByText(/submit/i);

    fireEvent.click(submitBtn);

    await waitFor(() => screen.getAllByTestId("form-error"));

    expect(screen.getAllByTestId("form-error").length).toBe(2);
  });
});
