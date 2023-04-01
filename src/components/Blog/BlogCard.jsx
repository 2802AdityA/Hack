import React from 'react';
import '../../styles/components/BlogCard.css'; // import the CSS file containing styles for the component

function BlogCard({ id, title, author, date, content }) {
  return (
    <div className="wrapper">

      <div className="content">
        <div className="card"><h2><a href={`/blogPost/${id}`}>{title}</a></h2>
          <div className="info">
            <p className="date"> <a href={`/userBlog/${author}`}><em>@{author}</em> </a></p>
            <p className="date">{date}</p>
          </div>
          <p className="text">{content} </p>
        </div>
      </div>
    </div>
  );
}


export default BlogCard;        