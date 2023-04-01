import React from 'react'
import BlogList from '../../components/Blog/BlogList'
import '../../styles/pages/BlogPage.css';
import SearchBar from '../../components/Blog/SearchBar';
import { useNavigate } from 'react-router';

const BlogPage = () => {

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/writeBlog");
  }

  return (
    <div className='blog-home' >
      <button onClick={handleClick}>Write your blog</button>
      <div className="blog-home-title">
        <h1>The SocioAid Blog</h1>
      </div>
      <div className="search_bar-container">
        <SearchBar />
      </div>
      <div className="blog-home-blogs">
        <BlogList />
      </div>
    </div>
  )
}

export default BlogPage