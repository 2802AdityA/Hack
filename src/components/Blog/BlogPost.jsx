import '../../styles/components/BlogCard.css';
// import blogPosts from '../../assets/dummydata';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_POST = gql`
  query getPost($id: uuid!) {
    document(id: $id) {
      id
      title
      author_name
      date
      content
    }
  }
`;


const BlogPost = () => {


  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const blogPost = data.document;

  return (
    <div className="blog-post">
      <h1>{blogPost.title}</h1>
      <p className="date"> <a href={`/userBlog/${blogPost.author_name}`}><em>@{blogPost.author_name}</em> </a></p>
      <p className="date">{blogPost.date}</p>
      <p className="text">{blogPost.content} </p>
    </div>
  );

};


  export default BlogPost;