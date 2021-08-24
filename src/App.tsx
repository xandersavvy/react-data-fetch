import React, { useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import useStyles from "./components/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PublicPostView } from "./routes/postList";
import { CreatePost } from "./routes/createPost";
import { Header } from "./components/header";
import { MainPage } from "./routes/mainPage";
import PostRoutes from "./routes/postRoutes";

const App = () => {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/post" component={PublicPostView} />
        <Route exact path="/post/list" component={PostRoutes} />
        <Route exact path="/createPost" component={CreatePost} />
      </Router>
    </Container>
  );
};
export default App;
