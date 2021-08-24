import { AppBar, Link} from '@material-ui/core'
import { HomeTwoTone, PostAddRounded } from '@material-ui/icons';
import React, { Component } from 'react'
import useStyles from './styles'
export const Header = () => {
    const cssStyles = useStyles();
    return(
        <AppBar position="static" className={cssStyles.allHeader} color="transparent">
            <Link href="/" className={cssStyles.allHeaderElement}><HomeTwoTone/></Link>
            <Link href="/createPost" className={cssStyles.allHeaderElement}><PostAddRounded /></Link>
        </AppBar>
    )
}