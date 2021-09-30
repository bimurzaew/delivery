import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  CircularProgress,
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
import Loading from "../../preload/Loading";

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
  const categories = useSelector((state) => state.categories.catalog);
  const editing = useSelector((state) => state.product.editing);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [file, setFile] = useState(item.file);

  const [productData, setProductData] = useState({
    name: item.name,
    price: item.price,
    desc: item.desc,
    category: item.category,
    amount: item.amount,
  });

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleSendReq = (id) => {
    dispatch(editProduct({ file: file[0], id, ...productData }));
    setOpen(false);
  };

  const handleChangeFile = (e) => setFile(e.target.files);

  const handleChangeData = (e) => {
    setProductData({ ...productData, [e.target.name]: [e.target.value] });
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {editing ? (
        <Loading />
      ) : (
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
                  name="name"
                  label="название товара"
                  value={productData.name}
                  onChange={handleChangeData}
                />
              </Box>
              <Box>
                <TextField
                  id="standard-select-currency"
                  select
                  name="category"
                  value={productData.category}
                  onChange={handleChangeData}
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
                  name='price'
                  value={productData.price}
                  onChange={handleChangeData}
                />
              </Box>
              <Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  label="описание"
                  name="desc"
                  value={productData.desc}
                  onChange={handleChangeData}
                />
              </Box>
              <Box>
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  label="количество"
                  name="amount"
                  value={productData.amount}
                  onChange={handleChangeData}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={() => {
                  handleSendReq(item._id);
                }}
              >
                Сохранить
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </>
      )}
    </>
  );
}
