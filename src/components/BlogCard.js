import React from "react";

const BlogCard = (props) => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content p-3">
          <p className="date">{props.date}</p>
          <h5 className="title">{props.title}</h5>
          <p className="description">{props.description}</p>
          <button className="btn btn-blog">{props.button}</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
