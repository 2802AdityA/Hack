import React from 'react'
import BlogList from '../../components/Blog/BlogList'
import '../../styles/pages/BlogPage.css';
import SearchBar from '../../components/Blog/SearchBar';

const BlogPage = () => {
  return (
    <div className='blog-home' >
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