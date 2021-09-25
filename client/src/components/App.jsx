import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { store } from "../redux/configureStore";
import SignInPage from "./authorization/SignInPage";
import SignUpPage from "./authorization/SignUpPage";
import Products from "./product/Products";
import Header from "./header/header";
import Main from "./main";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/signIn">
            <SignInPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
          <Route path="/product">
            <Products />
          </Route>
          <Route path='/'>
            <Header />
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
