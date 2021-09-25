import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import SigningIn from "./components/authorization/SigningIn";
import SigningUp from "./components/authorization/SigningUp";
import { store } from "./redux/configureStore";
import Products from "./components/product/Products";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/signIn">
                        <SigningIn />
                    </Route>
                    <Route path="/signUp">
                        <SigningUp />
                    </Route>
                    <Route path="/product">
                        <Products />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
