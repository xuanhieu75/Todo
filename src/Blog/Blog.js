import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.scss";
import { Link } from "react-router-dom";
const Blog = () => {
  const [dataBlog, setDataBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // componetDidMount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        let data = res && res.data ? res.data : [];

        setDataBlog(data);
        setLoading(true);
        setIsError(false);
      }
      fetchData();
    } catch (e) {
      setIsError(true);
      setLoading(true);
    }
  }, []);

  return (
    <div className="blog">
      {dataBlog &&
        dataBlog.length > 0 &&
        dataBlog.map((item) => {
          return (
            <div className="blog_item">
              <div className="title">Title: {item.title}</div>
              <div className="content">Content: {item.body}</div>
              <button type="button">
                <Link to={`/blog/${item.id}`} className="btn">
                  View Detail
                </Link>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Blog;
