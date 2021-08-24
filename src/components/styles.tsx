import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core' 

const useStyles = makeStyles({
    root : {
        display : 'flex',
        flexDirection: 'column',
        justifyContent: "baseline",
        alignItems: "center"
    },
    allHeader : {
        // position:"relative",
        width:"90vw",
        right:0,
        display : 'flex',
        flexDirection: 'row',
        padding: "2vw",
        justifyContent: "end",
        alignItems: "center"
    },
    allHeaderElement : {
        fontWeight : 1000,
        fontSize : "1.5rem",
        padding : "0.8%"
    },
    postHeader : {
        top:"5vh",
        padding : "0.25rem",
        width : "80vw"
    },
    commentCardContainer : {
        width:"80vw",
        fontSize : ".7em",
        // padding : "3vw"
    },
    commentCard : {
        background:"white",
        padding : "3vw"
    },
    comments:{
    
    },
    createPostForm :{
        display : 'flex',
        flexDirection: 'column',
        justifyContent: "baseline",
        alignItems: "center",
        width : "80vw" ,
        minHeight : "90vh",
        padding : "5vh"
    },
    createPostFormElement :{
        padding:"5vw",
        width:"80vw"
    },
    cancelButton : {
        position : "static",
        right:0
    },
    postCommentButton : {
        position :"fixed" , 
        top:"20vh" , 
        padding:"0.85em", 
        right : 0
    },
    searchContainer : {
        minHeight:"80vh",
        display:"flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    }
    });
export default  useStyles ;