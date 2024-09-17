// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext.jsx';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';

function App() {
  return (
    <UserProvider>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
