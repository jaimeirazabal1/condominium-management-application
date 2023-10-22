import React from 'react';
import ReactDOM from "react-dom/client";

// import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Si estás usando Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './Application';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <Router>
        {/* Si estás usando Redux */}
        <Provider store={store}>
          <App />  {/* actualiza esta línea */}
        </Provider>
        {/* Si no estás usando Redux */}
        {/* <App /> */}
      </Router>
    </React.StrictMode>,
  );