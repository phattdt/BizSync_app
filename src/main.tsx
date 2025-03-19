import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Sidebar from './sidebar';

import SearchBar from './header/header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/* <div className='header'>
        <Header />
      </div> */}
    <div className="main">
      <div className="sidebar_r">
        <Sidebar />
      </div>

      <div className="children">
        <div className='searchbar'>
          <SearchBar />
        </div>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);