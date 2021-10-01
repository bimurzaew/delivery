import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardMedia,
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
import { getCategories } from "../../../redux/features/categories";
import { editProduct } from "../../../redux/features/product";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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

export default function EditProduct({ item }) {
  // const message = useSelector((state) => state.product.message);
  const categories = useSelector((state) => state.categories.catalog);
  // const user = useSelector((state) => state.users.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [file, setFile] = useState(item.file);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [desc, setDesc] = useState(item.desc);
  const [category, setCategory] = useState(item.category);
  const [amount, setAmount] = useState(item.amount);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  // useEffect(() => {
  //   dispatch(getUser());
  // }, []);

  const handleSendReq = (id) => {
    dispatch(editProduct({ file: file[0], id, name, price, desc, category }));
    setOpen(false);
  };
  const handleChangeFile = (e) => {
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
      <Button onClick={handleClickOpen}>Изменить</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Изменение товара
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box>
            <FormControlLabel
              sx={{ mr: -1 }}
              control={
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              }
              onChange={handleChangeFile}
              label={<img src={`../../images/${item.image}`} alt="" />}
            />
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="название товара"
              value={name}
              onChange={handleChangeName}
            />
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
              value={price}
              onChange={handleChangePrice}
            />
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="описание"
              value={desc}
              onChange={handleChangeDesc}
            />
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="количество"
              value={amount}
              onChange={handleChangeAmount}
            ></TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              console.log(item._id)
              handleSendReq(item._id);
            }}
          >
            Сохранить
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
