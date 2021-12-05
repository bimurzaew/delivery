import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { store } from "../redux/configureStore";
import SignInPage from "./authorization/SignInPage";
import SignUpPage from "./authorization/SignUpPage";
import Products from "./vendor/product/Products";
import Header from "./header/header";
import Two from "./TwoHeader/Two";
import ProductGuest from "./Products/Index";
import ProductsByCategory from "./Products/ProductsByCategory";
import Orders from "./order/Orders";
import Main from "./main/main";
import "./App.css";
import CourierPage from "./CourierPage/CourierPage";
import Footer from "./footer/footer";
import CourierHeader from "./header/CourierHeader";
import OrdersToUser from "./order/OrdersToUser";

import Foods from "./Food";
import VendorHeader from "./header/VendorHeader";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/orders"}>
            <CourierHeader />
            <Orders />
          </Route>
          <Route path="/orders/courier">
            <CourierHeader />
            <CourierPage />
          </Route>
          <Route path="/orders/toUser">
            <CourierHeader />
            <OrdersToUser />
          </Route>

          <Route exact path="/">
            <Header />
            <Two />
            <Main />
            <Foods />
            <Footer />
          </Route>
          <Route path="/signIn">
            <SignInPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
          <Route path="/product/category">
            <Header />
            <Two />
            <Main />
            <ProductGuest />
            <Footer />
          </Route>
          <Route path="/product/category/:id">
            <Header />
            <ProductsByCategory />
          </Route>
          <Route path="/vendor">
            <VendorHeader />
            <Products />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
