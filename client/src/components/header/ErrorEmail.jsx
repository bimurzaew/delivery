import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { addOrder } from '../../redux/features/order'
import { cleanCart } from '../../redux/features/cart'

export default function ErrorEmail({classes,dispatch,email}) {
  const [open, setOpen] = React.useState(false);


  const addProductOrder = (emaill) => {


    // if (email.length<6){
    //   return setOpen(true);
    // }
    // if (email.indexOf("@",0)!==-1){
    //   return setOpen(true);
    // }
    dispatch(addOrder(emaill));
    dispatch(cleanCart())
  };
  const messageClick = () =>{
    if (email.indexOf("@mail.ru",0)===-1){
      return "введен некорректный адрес электронной почты"
    }
    if (email.length<12){
      return "слишком короткий"
    }

    return "Заявка успешно отправлена"

  }

  const messageColor = () =>{
    if (email.indexOf("@mail.ru",0)===-1||email.length<12){
      return "secondary"
    }


    return "primary"

  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.footBtn}
        variant="contained"
        color="secondary"
        onClick={() => addProductOrder(email)}
      >
        Оформить заказ
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={messageClick()}
        action={
          <React.Fragment>
            <Button color={messageColor()} size="small" onClick={handleClose}>
              {
                email.indexOf("@mail.ru",0)===-1
                  ? "ОШИБКА"
                  :email.length<12
                ? "ОШИБКА":
                "ПРИНЯТО"
              }
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
