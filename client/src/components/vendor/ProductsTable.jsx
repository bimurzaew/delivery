import * as React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteProduct, getProductsForUser} from "../../redux/features/product";
import {getCategories} from "../../redux/features/categories";


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function ProductsTable() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const categories = useSelector(state => state.categories.catalog)

    useEffect(() => {
        dispatch(getProductsForUser());
    }, []);
    useEffect(() => {
        getCategories()
    },[])

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Название продукта</TableCell>
                        <TableCell align="right">количество</TableCell>
                        <TableCell align="right">цена</TableCell>
                        {categories?.map(item => {
                            return <TableCell align="right">{item.name}</TableCell>
                        })}
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item) => (
                        <TableRow key={item._id}>
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.amount}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
