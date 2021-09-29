import * as React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    MenuItem,
    Radio,
    RadioGroup,
    styled,
    TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser } from "../../redux/features/users";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

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
    const message = useSelector((state) => state.product.message);
    const user = useSelector((state) => state.users.user);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState();
    const [category, setCategory] = useState();
    const [amount, setAmount] = useState();
    const [thing, setThing] = useState();

    useEffect(() => {
        dispatch(getUser());
    }, []);


    const handleSendReq = (e) => {
        e.preventDefault();
        dispatch(
            addProduct({ file: file[0], name, price, desc, category, amount, thing })
        );
        setOpen(false);
    };
    const handleFile = (e) => {
        setFile(e.target.files);
    };
    const handleChangeThing = (e) => {
        setThing(e.target.value);
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
    console.log(thing)

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
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Who are you warrior?</FormLabel>
                        <RadioGroup row aria-label="role" name="row-radio-buttons-group">
                            <FormControlLabel
                                value='Eда'
                                control={<Radio />}
                                label='Еда'
                                onChange={handleChangeThing}
                            />
                            <FormControlLabel
                                value='Продукты'
                                control={<Radio />}
                                label='Продукты'
                                onChange={handleChangeThing}
                            />
                        </RadioGroup>
                    </FormControl>
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
