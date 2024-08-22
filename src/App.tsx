// Dependencies
import { FC } from "react";

// Redux
import { store } from "@/redux/store";
import { Provider } from "react-redux";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Components


// Assets
import "@/assets/librarys/fontawesome/css/all.min.css";
import "~bootstrap/bootstrap.scss";
import "@/assets/styles/style.scss";
import Layout from "./layout";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>

        <Layout />
    
      </Router>
    </Provider>
  );
};

export default App;
