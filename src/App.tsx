import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContextProvider } from "./contexts";
import { routesConfig } from "./routes-config";
import "./styles/tailwind.css";

export function App() {
  return (
    <AppContextProvider
      initNotification={{
        message: "This text is read from context.notification ",
        detail: "my Detaul",
      }}
    >
      <div className="w-full h-full bg-rose-300">
        <BrowserRouter>
          <Switch>
            {routesConfig.map(({ path, exact, component: Component }) => (
              <Route key={path} exact={exact} path={path} component={Component} />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    </AppContextProvider>
  );
}
