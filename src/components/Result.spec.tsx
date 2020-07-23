import React from "react";
import Result from "./Result";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import ICard from "../models/Card";
import CardList from "./CardList";
import Card from "./Card";

afterEach(cleanup);

declare global {
    interface Window {
        _virtualConsole: any;
    }
}

describe("Test Home component", () => {
    let emit: any;

    beforeAll(() => {
        ({ emit } = window._virtualConsole);
    });

    beforeEach(() => {
        window._virtualConsole.emit = jest.fn();
    });

    afterAll(() => {
        window._virtualConsole.emit = emit;
    });

    const mockCard: ICard = { value: "2", suit: "H" };

    const mockDeck: ICard[] = [
        { value: "K", suit: "H" },
        { value: "A", suit: "D" },
        { value: "A", suit: "C" },
        { value: "A", suit: "S" },
        { value: "K", suit: "S" },
    ];

    const mockFullhouse: ICard[][] = [
        [
            { value: "A", suit: "C" },
            { value: "A", suit: "D" },
            { value: "A", suit: "S" },
            { value: "K", suit: "S" },
            { value: "K", suit: "H" },
        ],
    ];

    it("Should render the right amout of CardLists", () => {
        const { getAllByRole } = render(
            <Result sortedDeck={mockDeck} fullhouses={mockFullhouse} />
        );

        const cardLists = getAllByRole("card_list");

        expect(cardLists).toHaveLength(2);
    });

    it("Should render the right amout of Cards in CardList", () => {
        const { getAllByRole } = render(<CardList cards={mockDeck} />);

        const cards = getAllByRole("card");

        expect(cards).toHaveLength(5);
    });

    it("Should render card", async () => {
        const { findAllByText } = render(<Card suit={mockCard.suit} value={mockCard.value} />);

        const values = await findAllByText("2");
        const suit = await findAllByText(String.fromCharCode(9829));

        expect(values).toHaveLength(2);
        expect(suit).toHaveLength(1);
    });
});
