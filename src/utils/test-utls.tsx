import React from "react";
import { MemoryRouter } from "react-router-dom";
import * as RTL from "@testing-library/react";
import { store } from "../app/store";
import { Provider } from "react-redux";

type ProvidersProps = {
  children?: React.ReactNode;
};

function Providers(props: ProvidersProps) {
  return <Provider store={store}>{props.children}</Provider>;
}

function customRender(ui: React.ReactElement, options?: RTL.RenderOptions) {
  return RTL.render(ui, { wrapper: Providers, ...options });
}

function renderWithRouter(
  ui: React.ReactElement,
  { route = "/", ...options } = {}
) {
  return {
    ...RTL.render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>, {
      wrapper: Providers,
      ...options,
    }),
  };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, renderWithRouter };
