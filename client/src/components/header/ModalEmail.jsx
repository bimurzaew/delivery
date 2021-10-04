import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addOrder } from '../../redux/features/order'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart } from '../../redux/features/cart'
import {makeStyles} from '@material-ui/core'
import ErrorEmail from './ErrorEmail'
import { logDOM } from '@testing-library/react'

const useStyles = makeStyles((theme) => ({
  footBtn: {
    margin: "15px 0",
    backgroundColor: "#7251b5",
  },
  emailBtn:{
    margin: "15px 0",
  }
}));

export default function ModalEmail({handleClick}) {
  const [email, setEmail] = useState("")
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };





  return (
    <div>
      <Button className={classes.emailBtn} variant="contained" color="primary" onClick={handleClickOpen}>
        Оставить почту
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите свой адрес электронной почты (рабочую) чтобы мы могли вас оповестить
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
          <ErrorEmail classes={classes} dispatch={dispatch} email={email}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}
