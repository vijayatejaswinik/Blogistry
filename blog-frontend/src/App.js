/*import Register from './pages/Register';

function App() {
  return (
    <div>
      <Register />
    </div>
  );
}

export default App;*/
/*
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;*/
/*
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link> | 
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;*/
/*
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/create">Create Post</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;*/

/*

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/AllPosts';
import EditPost from './pages/EditPost';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/create">Create Post</Link> | 
        <Link to="/posts">All Posts</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/edit/:id" element={<EditPost />} />

      </Routes>
    </Router>
  );
}

export default App;*/



import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import AllPosts from './pages/AllPosts';

import RequireAuth from './RequireAuth';

import './styles.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <Router>
      <div className="app-wrapper">
        {/* HEADER */}
        <header className="site-header">
          <h1 className="site-title">Blogistry</h1>
        </header>

        {/* NAVIGATION */}
        <nav className="site-nav">
          <div className="nav-links">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/create">Create Post</Link>
            <Link to="/posts">All Posts</Link>
          </div>
          {user && (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          )}
        </nav>

        {/* MAIN CONTENT */}
        <div className="container">
          {user?.username && (
            <h2 className="welcome-text">Welcome, {user.username} </h2>
          )}

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<AllPosts />} />
            <Route
              path="/create"
              element={
                <RequireAuth>
                  <CreatePost />
                </RequireAuth>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <RequireAuth>
                  <EditPost />
                </RequireAuth>
              }
            />
          </Routes>
        </div>

        {/* FOOTER */}
        <footer className="site-footer">
          <p><strong>© 2025 Kammari Vijaya Tejaswini. All rights reserved.</strong></p>
          <p><strong>Contact: kammarivijayatejaswini@gmail.com</strong></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

