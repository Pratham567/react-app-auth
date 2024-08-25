import BlogsNav from './BlogsNav';
import Footer from '../Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllBlogs from './AllBlogs';
import About from './About';
import BlogDetail from './BlogDetail';
import CreateBlog from './CreateBlog';
import Login from './Login';
import Register from './Register';

function BlogsApp() {

  return (
    <div className="App">
      <Router>
        <BlogsNav />
        <Routes>
          <Route path="/" element={<section> <p>This is the home page</p> </section>} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/contact" element={<section><p>This is a contact page</p></section>} />
          <Route path="/newblog" element={<CreateBlog />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default BlogsApp;
