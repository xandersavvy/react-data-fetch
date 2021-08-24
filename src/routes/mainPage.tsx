import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Input } from "@material-ui/core";
// import { api } from "../components/type";
import { SearchRounded } from "@material-ui/icons";
import useStyles from "../components/styles";

export const MainPage = () => {
  const cssStyles = useStyles();
  // const [postTitle, setPostTitle] = useState([]);

  // useEffect(() => {
  //   const mainPageApi = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/comments"
  //       );
  //       const data = response.data;
  //       console.log(data);
  //       setPostTitle(data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       console.log("yo");
  //     }
  //   };
  //   mainPageApi();
  // }, []);
  return (
    <Container maxWidth="lg" className={cssStyles.searchContainer}>
      <Input
        fullWidth={true}
        type="text"
        placeholder="Click to Search here"
      ></Input>
      <Button color="primary" variant="contained">
        <SearchRounded />
      </Button>
    </Container>
  );
};
