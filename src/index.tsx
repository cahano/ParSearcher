import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import DocParser from './parser/DocParser';
import TeamPage from './team/TeamPage';
import HomePage from './home/HomePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export default function Parsearch() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/*" element={<HomePage />} />
          <Route path="/parser" element={<DocParser />} />
          <Route path="/team" element={<TeamPage />} />

      </Routes>
    </BrowserRouter>
  );
}


// PRESUMABLY CONNECT TO ADDITIONAL PAGES HERE

root.render(
  <React.StrictMode>
    <Parsearch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
