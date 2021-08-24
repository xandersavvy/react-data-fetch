import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "./type";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { PostComments } from "./comments";
export const FetchComments = () => {
  const cssStyles = useStyles();
  const [resData, setResData] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const myData = response.data;
        setResData(myData);
      } catch (err) {
        console.log(err);
      }
    };
    getApi();
  }, []);

  return (
    <div className={cssStyles.commentCardContainer}>
      {resData.map((data: api) => (
        <Grid
      className={cssStyles.commentCard}
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
          <Typography style={{ color: "red" }} variant="body2" component="p">{Date.now()}</Typography>
          <Typography key={data.id} variant="h5" component="h4" >
            {data.body}
          </Typography>
          <PostComments />
        </Grid>
      ))}
    </div>
  );
};
