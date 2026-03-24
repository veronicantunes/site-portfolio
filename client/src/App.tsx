import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CaseIA from "./pages/CaseIA";
import CasePlaceholder from "./pages/CasePlaceholder";

const basePath = import.meta.env.BASE_URL !== "/" ? import.meta.env.BASE_URL.replace(/\/$/, "") : undefined;

function AppRouter() {
  return (
    <Router base={basePath}>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-ia" component={CaseIA} />
      <Route path="/case-portfolio" component={() => (
        <CasePlaceholder
          title="Estruturação de Portfolio de Produtos Digitais"
          badge="Gestão | Estratégia"
          description="Como estruturar e governar um portfólio de produtos digitais em ambiente enterprise, alinhando investimentos a OKRs estratégicos e maximizando ROI."
        />
      )} />
      <Route path="/case-okrs" component={() => (
        <CasePlaceholder
          title="OKRs em Ambiente de Alta Complexidade"
          badge="Agilidade | Transformação"
          description="Como implementar OKRs em organizações de grande porte, conectando objetivos estratégicos a entregas de valor mensuráveis em um value stream de +60 pessoas e 9 squads."
        />
      )} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
