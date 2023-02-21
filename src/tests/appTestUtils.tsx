import { QueryClient, QueryClientProvider } from "react-query";
import { ReactElement, ReactNode } from "react";
import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { DependencyContainerContext } from "../context/DependencyContainer/DependencyContainer";
import { createDependenciesTests } from "../context/DependencyContainer/createDependenciesTests";

export const queryClient = new QueryClient();

export const render = (
  component: ReactElement,
  { ...renderOptions }: any = {}
) => {
  const testDependencies = createDependenciesTests();

  const Wrapper = ({ children }: { children: ReactNode; route: string }) => (
    <DependencyContainerContext.Provider value={testDependencies}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </DependencyContainerContext.Provider>
  );

  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
};

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByRole("progressbar")], {
    timeout: 4000,
  });

// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
