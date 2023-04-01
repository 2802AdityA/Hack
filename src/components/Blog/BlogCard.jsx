import React from 'react';
import '../../styles/components/BlogCard.css'; // import the CSS file containing styles for the component

function BlogCard({id, title, author, date, excerpt}) {
  return (
    <div className="wrapper">

      <div className="content">
        {/* <div className="card first">
          <h2><a href="#">Just a blog post</a></h2>
          <p className="date">26 October, 2014</p>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Donec ut libero sed arcu vehicula ultricies a non tortor. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. 
            <br />
            Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci.</p>
        </div> */}
        <div className="card"><h2><a href={`/blogPost/${id}`}>{title}</a></h2>
          <div className="info">
            <p className="date"> <a href={`/userBlog/${author}`}><em>@{author}</em> </a></p>
            <p className="date">18 October, 2014</p>  
          </div>
          <p className="text">{excerpt} </p>
        </div>
      </div>
    </div>
  );
}


export default BlogCard;        