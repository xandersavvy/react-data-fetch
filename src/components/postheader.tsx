import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMoreRounded } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";
import { props } from "./type";
export const PostHeader = (props: props) => {
    const cssStyles = useStyles();
  return (
    <Accordion className={cssStyles.postHeader}>
          <AccordionSummary expandIcon={<ExpandMoreRounded /> }>
            <Typography variant="h3" component="h4">
              {props.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography variant="body2" component="p">
            {props.desc}
          </Typography>
          </AccordionDetails>
        </Accordion>
  );
};
