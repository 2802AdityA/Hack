
import '../../styles/components/BlogCard.css';
import blogPosts from '../../assets/dummydata';
import { useParams } from 'react-router-dom';

const BlogPost = () => {

  const {id} = useParams();
  // console.log(id);
  
  const blog = blogPosts.find(post=>post.id===Number(id));

  // console.log(blog);

    return (
      <div className="blog-post">
        <div className="content">
          <div className="card"><h2>{blog.title}</h2>
            <div className="info">
              <p className="date"> <a href={`/userBlog/${blog.author}`}><em>{blog.author}</em> </a></p>
              <p className="date">{blog.date}</p>  
            </div>
            <p className="text"> {blog.excerpt}</p>
          </div>
        </div>
      </div>
    );
  };

export default BlogPost;