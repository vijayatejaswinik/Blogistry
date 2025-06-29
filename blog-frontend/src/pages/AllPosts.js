/*
import React, { useEffect, useState } from 'react';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>By: {post.username}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default AllPosts;*/
/*

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch('http://localhost:5000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('Post deleted');
        fetchPosts(); // Refresh post list
      } else {
        const data = await res.json();
        alert(data);
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>By: {post.username}</small>
            <br />
            <button onClick={() => handleDelete(post._id)} style={{ marginTop: '5px' }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllPosts;
*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch('http://localhost:5000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        alert('Post deleted');
        fetchPosts(); // refresh list
      } else {
        const data = await res.json();
        alert(data);
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>By: {post.username}</small>
            <br />
            <Link to={`/edit/${post._id}`}>
              <button style={{ marginTop: '5px', marginRight: '5px' }}>Edit</button>
            </Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllPosts;

/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts?user=${user.username}`);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    };
    fetchPosts();
  }, [user.username]);

  return (
    <div>
      <h2>Your Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllPosts;*/
