import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { store } from "../redux/configureStore";
import SignInPage from "./authorization/SignInPage";
import SignUpPage from "./authorization/SignUpPage";
import Products from "./vendor/Products";
import Header from "./header/header";
import Two from "./TwoHeader/Two";
import Main from "./main/main";
import Foods from './Food';
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Two />
            <Main />
          </Route>
          <Route path="/signIn">
            <SignInPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
          <Route path="/vendor">
            <Header />
            <Products />
          </Route>
          <Route path="/food">
            <Header/>
            <Foods/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
