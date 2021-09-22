import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import SigningIn from "./components/Authorization/SigningIn";
import SigningUp from "./components/Authorization/SigningUp";
import {store} from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route path="/signIn">
                <SigningIn/>
            </Route>
            <Route path="/signUp">
                <SigningUp/>
            </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
