import React, { useState } from "react";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import {GlobalProvider} from "./context/GlobalContext";

// header
import Header from "./components/global/header/Header";

// home
import Home from "./views/home/Home";

// analytics
import Analytics from "./views/analytics/Analytics";

// add new transaction
import AddTransaction from "./views/addTransaction/AddTransaction";

// not found page
import NotFound from "./views/notfound/NotFound";

const App = () => {

  const [headerWidth, setHeaderWidth] = useState(null);

  // handle the content width based on the sidebar(header)
  const handleHeaderWidth = (value) => {

    setHeaderWidth(document.documentElement.offsetWidth - value);

    window.addEventListener("resize", function () {

      setHeaderWidth(document.documentElement.offsetWidth - value);

    });

  }
  
  return (
    <BrowserRouter>

      <div className="App d-flex justify-content-end">

        <Header theWidth={handleHeaderWidth} />

        <GlobalProvider>
          <article className="the-content" style={{width: headerWidth}}>

            <Switch>

              {/* home  */}
              <Route path="/" exact component={Home} />

              {/* analytice  */}
              <Route path="/analytics" component={Analytics} />
              
              {/* addtransaction  */}
              <Route path="/addtransaction" component={AddTransaction} />

              {/* not found */}
              <Route component={NotFound} />
              
            </Switch>

          </article>
        </GlobalProvider>

      </div>

    </BrowserRouter>
  );
}

export default App;
