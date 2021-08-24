import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import { PostComments } from '../components/comments'
import { PostButton } from '../components/post'
import { PostHeader } from '../components/postheader'
import useStyles from '../components/styles'
 export const PublicPostView = () => {
    const cssStyles = useStyles();
    return (
        <Container maxWidth="sm" className={cssStyles.root}>
            <PostHeader   title="this is my post name " desc= "this is description" />
            <PostButton />
            <PostComments />
        </Container>
    )
 }