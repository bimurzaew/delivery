import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  MenuItem,
  styled,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addProduct } from "../../../redux/features/product";
import { getCategories } from "../../../redux/features/categories";
import { getUser } from "../../../redux/features/users";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const useStyles = makeStyles({
  cont: {
    width: "300px",
    textAlign: "center",
  },
});

function CloseIcon() {
  return null;
}

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddProduct() {
  const classes = useStyles();
  const categories = useSelector((state) => state.categories.catalog);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [category, setCategory] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleSendReq = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({ file: file[0], name, price, desc, category, amount })
    );
    setOpen(false);
  };
  const handleFile = (e) => {
    setFile(e.target.files);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuItem variant="outlined" onClick={handleClickOpen}>
        <AddShoppingCartIcon />
        Добавить продукт
      </MenuItem>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Добавление товара
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box className={classes.cont}>
            <FormControlLabel
              sx={{ mr: -1 }}
              control={
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              }
              onChange={handleFile}
              label={<AddAPhotoIcon />}
            />
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="название товара"
              name="name"
              onChange={handleChangeName}
            ></TextField>
          </Box>
          <Box>
            <TextField
              id="standard-select-currency"
              select
              value={category}
              onChange={handleChangeCategory}
              helperText="Выберите категорию товара"
              variant="standard"
              fullWidth
            >
              {categories?.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="цена"
              onChange={handleChangePrice}
            ></TextField>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="описание"
              onChange={handleChangeDesc}
            ></TextField>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="количество"
              onChange={handleChangeAmount}
            ></TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSendReq}>
            Сохранить
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
