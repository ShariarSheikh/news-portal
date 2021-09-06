import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Index";
import Login from "./pages/Login/Index";
import SignUp from "./pages/SignUp/Index";

const App = () => {
  return (
    <main className="w-full">
      <Header />
      <Switch>
        <section className="max-w-screen-2xl m-auto">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </section>
      </Switch>
    </main>
  );
};

export default App;
