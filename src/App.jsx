import Navbar from './Navbar';
import Footer from './Footer';
import Blog from './Blog';
import Events from './Events';
import StateHook from './StateHook';
import UseEffectHook from './UseEffectHook';
import BlogsDB from './BlogsDB';
import BlogList from './BlogList';
import BlogListDb from './bloglist/BlogListDb';

import { useState, useEffect } from 'react';

function App() {
  // const blog = { "id": 1, "title": "Blog Title", "content": "Blog Content", author: "Author Name" };

  // 1. Create a blogs object using useState
  // 2. Pass this variable to BlogList Component
  // 3. render BlogList component in the App component
  const [blogs, setBlogs] = useState([
    { "id": 1, "title": "Blog Title 1", "content": "Blog Content 1", author: "Author Name 1" },
    { "id": 2, "title": "Blog Title 2", "content": "Blog Content 2", author: "Author Name 2" },
    { "id": 3, "title": "Blog Title 3", "content": "Blog Content 3", author: "Author Name 3" }
  ]);

  function deleteBlogForId(id){
    // Q: Create a new array and delete the elem with id,
    // and set the new array to the state
    const newArray = blogs.filter( blog => blog.id !== id);
    setBlogs(newArray);
  }
  

  return (
    <div className="App">
      <Navbar />
      {/* <Blog blog={blog} title={"Title-01"}/> */}
      {/* <Events/> */}
      {/* <StateHook /> */}
      {/* <UseEffectHook /> */}

      {/* Q: Send blogs only when id is even */}
      {/* <BlogList blogs={blogs} deleteBlogForId={deleteBlogForId} title={"Even Blogs"}/> */}
      {/* <BlogList blogs={blogs} deleteBlogForId={deleteBlogForId} title={"Odd Blogs"}/> */}
      
      <BlogListDb blogs={blogs} title={"All blogs from API"} />



      <Footer />
    </div>
  );
}

export default App;
