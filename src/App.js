import { Provider } from "react-redux";
import "./App.css";
import AppRoute from "./Components/AppRoute";
import Loading from "./Components/Loading";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoute />
        <Loading />
      </Provider>
    </div>
  );
}

export default App;
