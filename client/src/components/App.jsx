import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { store } from "../redux/configureStore";
import SignInPage from "./authorization/SignInPage";
import SignUpPage from "./authorization/SignUpPage";
import Products from "./vendor/Products";
import Header from "./header/header";
import Main from "./main";
import Two from "./TwoHeader/Two";
import ProductGuest from './Products/Index'
import ProductsByCategory from './Products/ProductsByCategory'
import OrdersModal from './header/OrdersModal'
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={"/orders"}>
            <OrdersModal/>
          </Route>
          <Route exact path="/">

            <Main />
            <Two />
          </Route>
          <Route path="/signIn">
            <SignInPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
          <Route path="/product/category">
            <ProductGuest />
          </Route>
          <Route path="/product/category/:id">
            <ProductsByCategory />
          </Route>
          <Route path="/vendor">
            <Header />
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
