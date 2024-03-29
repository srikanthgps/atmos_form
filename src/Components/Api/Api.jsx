import React, { useEffect, useState } from 'react'

const Api = () => {

    const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [posts, setPosts] = useState([]);

//    GET with fetch API
   useEffect(() => {
      const fetchPost = async () => {
         const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=10'
         );
         const data = await response.json();
         console.log(data);
         setPosts(data);
      };

      fetchPost();
   }, []);

   // Delete with fetchAPI
//    const deletePost = async (id) => {
//       let response = await fetch(
//          `https://jsonplaceholder.typicode.com/posts/${id}`,
//          {
//             method: 'DELETE',
//          }
//       );
//       if (response.status === 200) {
//          setPosts(
//             posts.filter((post) => {
//                return post.id !== id;
//             })
//          );
//       } else {
//          return;
//       }
//    };
   

   // Post with fetchAPI
   const addPosts = async (title, body) => {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      });
      let data = await response.json();
      setPosts((posts) => [data, ...posts]);
      setTitle('');
      setBody('');
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      addPosts(title, body);
   };

  return (
    <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            Title
            <input type="text" className="form-control" value={title}
               onChange={(e) => setTitle(e.target.value)}
            />

            TextArea
            <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={body} onChange={(e) => setBody(e.target.value)} 
            ></textarea>
            <button type="submit">Add Post</button>
         </form>
      </div>
      {/* ... */}
   </div>
  )
}

export default Api