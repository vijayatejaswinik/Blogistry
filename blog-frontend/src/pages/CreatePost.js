import React, { useState } from 'react';

function CreatePost() {
  const [postData, setPostData] = useState({
    username: '',
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Post created successfully!');
        console.log(data);
      } else {
        alert(data);
      }
    } catch (err) {
      alert('Error creating post');
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <br />
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <br />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
