import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesConfig } from "./routes-config";
import "./styles/tailwind.css";

export function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Switch>
          {routesConfig.map(({ path, exact, component: Component }) => (
            <Route key={path} exact={exact} path={path} component={Component} />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
