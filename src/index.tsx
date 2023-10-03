import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3Form from "./App3Form";
import App4Form from "./App4Form";
import reportWebVitals from './reportWebVitals';
import App5Portal from "./App5Portal";
import App6TypeHooks from "./App6TypeHooks";
import App7Hook from "./App7Hook";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

root.render(
    <React.StrictMode>
        <App2 />
    </React.StrictMode>
);

root.render(
    <React.StrictMode>
        <App3Form />
    </React.StrictMode>
);
root.render(
    <React.StrictMode>
        <App4Form />
    </React.StrictMode>
);

root.render(
    <React.StrictMode>
        <App5Portal/>
    </React.StrictMode>
);

root.render(
    <React.StrictMode>
        <App7Hook/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
