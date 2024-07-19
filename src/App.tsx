// Dependencies
import { FC, lazy, Suspense } from "react";

// Redux
import { store } from "@/redux/store";
import { Provider } from "react-redux";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Assets
import "@/assets/librarys/fontawesome/css/all.min.css";
import "~bootstrap/bootstrap.scss";
import "@/assets/styles/style.scss";

import i18n from "@/components/languages/index";
import { I18nextProvider } from "react-i18next";
// Layout
const Layout = lazy(() => import("@/layout"));

const App: FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Suspense>
            <Layout />
          </Suspense>
        </Router>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
