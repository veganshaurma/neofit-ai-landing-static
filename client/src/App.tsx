import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Legal from "./pages/Legal";
import Admin from "./pages/Admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/:slug" component={CourseDetail} />
      <Route path="/checkout/:slug" component={Checkout} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/legal/:type" component={Legal} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/products" component={Admin} />
      {/* Locale-prefixed routes redirect to base routes */}
      <Route path="/en">{() => <Redirect to="/" />}</Route>
      <Route path="/ru">{() => <Redirect to="/" />}</Route>
      <Route path="/en/:rest*">{(params: { rest: string }) => <Redirect to={`/${params.rest}`} />}</Route>
      <Route path="/ru/:rest*">{(params: { rest: string }) => <Redirect to={`/${params.rest}`} />}</Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LocaleProvider>
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </CartProvider>
        </LocaleProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
