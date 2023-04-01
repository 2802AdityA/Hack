import React from 'react'
import { useParams } from 'react-router-dom'
import blogPosts from '../../assets/dummydata';
import BlogList from '../../components/Blog/BlogList';
import '../../styles/pages/BlogPage.css';

const UserBlog = () => {
    const {userName} = useParams();
    const blogs = [];
    blogPosts.map(post=> {
        if(post.author===userName) blogs.push(post);
    });
    console.log(blogs)


  return (
    <div className='blog-home' >
        <div className="blog-home-title">
            <h1>{userName}'s Journey</h1>
        </div>
        <div className="blog-home-blogs">
            <BlogList userPosts = {blogs} />
        </div>
    </div>
  )
}

export default UserBlog