import React from 'react';
import BlogCard from './BlogCard';
import blogPosts from '../../assets/dummydata';

import '../../styles/components/BlogList.css';

const BlogList = ({userPosts}) => {


return (
    <div className="blog-list">

      {userPosts ? (userPosts.map((post) => (
        <BlogCard
          key={post.id}
          id= {post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))) : (blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))) }

    </div>
  );
};

export default BlogList;
