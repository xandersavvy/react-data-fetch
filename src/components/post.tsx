import { Button , CardContent, Fab, TextareaAutosize } from '@material-ui/core';
import { AddBoxOutlined, AddCircleOutlineRounded } from '@material-ui/icons';
import Modal from 'react-modal' ;
import  React , {useState} from 'react';
import useStyles from './styles';

export const PostButton = () => {
    const cssStyle = useStyles();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <form onSubmit>
        <Fab color="primary" aria-label="add" onClick={()=>setModalIsOpen(true)} className={cssStyle.postCommentButton}>
            <AddBoxOutlined />
        </Fab>
        <CardContent>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <Button variant="contained" color="secondary" onClick={() => setModalIsOpen(false)} className={cssStyle.cancelButton}>Cancel</Button>
            <PostForm />
        </Modal>
        </CardContent>
        </form>
    )
}
const PostForm = () => {
    return(
        <form action="">
            <TextareaAutosize></TextareaAutosize>
            <Button variant = "contained" color = "primary">submit</Button>
        </form>
    )
}
// export const PostComment = () => {
//     return (
        
//     )
// }
