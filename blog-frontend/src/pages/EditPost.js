/*
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPostData({ title: data.title, content: data.content });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        alert('Post updated!');
        navigate('/posts');
      } else {
        alert('Failed to update');
      }
    } catch (err) {
      alert('Error');
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="content"
          placeholder="Content"
          value={postData.content}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;*/

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    console.log("Fetching post with ID:", id);

    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch post');
        }
        return res.json();
      })
      .then((data) => {
        setPostData({ title: data.title, content: data.content });
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        alert('Failed to load post data.');
      });
  }, [id]);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });

      if (res.ok) {
        alert('Post updated!');
        navigate('/posts');
      } else {
        alert('Failed to update');
      }
    } catch (err) {
      alert('Error');
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="content"
          placeholder="Content"
          value={postData.content}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;

