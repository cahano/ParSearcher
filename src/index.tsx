import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Amplify } from 'aws-amplify';
import awsExports from './login/auth/aws-exports';
import { PrimaryLayout } from './components/primaryLayout'
import { AppRouter } from './routes/AppRouter'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// Configuring Amplify <-> Cognito cnxn
Amplify.configure({
  Auth: { 
    Cognito: {
    userPoolId: awsExports.USER_POOL_ID,
    userPoolClientId: awsExports.USER_POOL_APP_CLIENT_ID
    }
  }
})


export default function Parsearch() {
  return (
    <PrimaryLayout>
      <AppRouter />
    </PrimaryLayout>
  );
}


root.render(
  <React.StrictMode>
    <Parsearch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
