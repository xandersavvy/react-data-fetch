import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { api } from "../components/type";
const Hero = () => {
  return <div>Hello world</div>;
};
const PostRoutes = () => {
  const [postTitles, setPostTitles] = useState([]);

  useEffect(() => {
    const RouteApi = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = response.data;
        console.log(data);
        setPostTitles(data);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("yo");
      }
    };
    RouteApi();
  }, []);
  return (
    <Container>
      {postTitles.map((postTitle: api) => (
        <p>
          <Link to={`/post/${postTitle.id}`}>{postTitle.name}</Link>
        </p>
      ))}
      <Route path="post/:id" component={Hero} />
    </Container>
  );
};
export default PostRoutes;
