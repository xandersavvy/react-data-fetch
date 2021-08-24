import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { PostAddOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import useStyles from "../components/styles";
export const CreatePost = () => {
  const cssClasses = useStyles();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <form
        method="POST"
        autoComplete="off"
        className={cssClasses.createPostForm}
      >
        <TextField
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          label="Enter post title "
          id="standard-required"
          className={cssClasses.createPostFormElement}
        />
        <TextField
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          id="standard-required"
          multiline
          maxRows={10}
          label="Enter post description"
          className={cssClasses.createPostFormElement}
        />
        <Button color="primary" variant="contained" disableElevation startIcon={<PostAddOutlined />}>
          Create Post
        </Button>
        <Link href="/" variant="button">
          Home
        </Link>
      </form>
    </Grid>
  );
};
