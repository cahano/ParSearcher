import React from 'react';
import ReactDOM from 'react-dom/client';
import './consts/globalStyles.css';
import reportWebVitals from './reportWebVitals';

import { AppRouter } from './routes/appRouter'
import { ProvideAuth } from './hooks/useAuth'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const ParSearch:React.FC = () => {

  return (
      // Wrapping app in Auth provider 
      <ProvideAuth>
        <AppRouter />
      </ProvideAuth>
  )
}

root.render(
  <React.StrictMode>
    <ParSearch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
