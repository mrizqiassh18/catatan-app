import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage';
 
function CatatanApp() {
   return (
    <div className='catatan-app'>
      <header className='catatan-app__header'>
        <h1>Your Notes</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='detail/:id' element={<DetailPage />} />
        </Routes>
      </main>
    </div>
   )
  }
 
export default CatatanApp;