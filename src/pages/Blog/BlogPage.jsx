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
    <div className='blog-home mt-24' >
      <div className="blog-home-title  text-bold">
        <h1>The SocioAid Blog</h1>
      </div>
      <button onClick={handleClick} className='mx-auto py-auto text-center rounded-full text-xl mb-6'  style={{height:"50px",width:"300px",backgroundColor:"#9a1750",color:"white"}}>Write your blog</button>
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