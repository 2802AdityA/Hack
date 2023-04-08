import React from 'react';
import BlogCard from './BlogCard';
// import blogPosts from '../../assets/dummydata';

import '../../styles/components/BlogList.css';
import { gql, useQuery } from '@apollo/client';


const GET_POSTS = gql`
  query getPosts {
    document {
      id
      title
      author_name
      date
      content
    }
  }
`;


const BlogList = () => {

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const blogPosts = data.document;
  console.log(blogPosts)

  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",gap:"2%"}}>

      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author_name}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default BlogList;
