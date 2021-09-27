import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  styled,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addProduct } from "../../redux/features/product";
import { getCategories } from "../../redux/features/categories";

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

export default function AddProduct() {
  const message = useSelector((item) => item.product.message);
  const categories = useSelector((item) => item.categories.catalog);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleSendReq = (e) => {
    e.preventDefault();
    dispatch(addProduct({ file: file[0], name, price, desc, category }));
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        добавить товар
      </Button>
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
          <Box>
            <TextField type="file" onChange={handleFile}></TextField>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="название товара"
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