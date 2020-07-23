import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";

import Result from "./Result";

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

    const mockDeck = [
        { value: "K", suit: "H" },
        { value: "A", suit: "D" },
        { value: "A", suit: "C" },
        { value: "A", suit: "S" },
        { value: "K", suit: "S" },
    ];

    const mockFullhouse = [
        [
            { value: "A", suit: "C" },
            { value: "A", suit: "D" },
            { value: "A", suit: "S" },
            { value: "K", suit: "S" },
            { value: "K", suit: "H" },
        ],
    ];

    it("Should render the right amout of Cards", () => {
        const { getAllByRole } = render(<Result />);
    });
});
