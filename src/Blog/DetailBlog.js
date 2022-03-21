import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.scss";
const DetailBlog = () => {
  let { id } = useParams();

  const [dataBlog, setDataBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // componetDidMount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
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
    <div className="blogDetail">
      <div className="id">DetailBlog id : {id}</div>
      <hr />
      {dataBlog && (
        <>
          <div className="title">Title: {dataBlog.title}</div>
          <div className="content">Content: {dataBlog.body}</div>
        </>
      )}
    </div>
  );
};

export default DetailBlog;
