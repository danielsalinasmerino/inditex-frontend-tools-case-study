import { QueryClient, QueryClientProvider } from "react-query";
import { CaseStudy } from "./components/pages/CaseStudy";
import { createDependenciesApp } from "./context/DependencyContainer/createDependenciesApp";
import { DependencyContainerContext } from "./context/DependencyContainer/DependencyContainer";

function App() {
  const queryClient = new QueryClient();
  const dependencies = createDependenciesApp();

  return (
    <DependencyContainerContext.Provider value={dependencies}>
      <QueryClientProvider client={queryClient}>
        <CaseStudy />
      </QueryClientProvider>
    </DependencyContainerContext.Provider>
  );
}

export default App;
