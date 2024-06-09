import React, {  } from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 10,
            bottom: 10,
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imgUrl
              ? "https://techcrunch.com/wp-content/uploads/2023/09/india-cybersecurity-image-getty.jpg"
              : imgUrl
          }
          className="card-img-top image"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              <i>
                By {author} on {new Date(date).toGMTString()}
              </i>
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="read-more"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
