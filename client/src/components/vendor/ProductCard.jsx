import * as React from "react";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RestoreFromTrashIcon from "@material-ui/icons/RestoreFromTrash";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProduct,
  getProductsForUser,
} from "../../redux/features/product";

export default function ProductCard() {
  const dispatch = useDispatch();
  const products = useSelector((item) => item.product.products);

  useEffect(() => {
    dispatch(getProductsForUser());
  }, []);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <Grid container xs={10} spacing={5}>
        {products?.map((item) => {
          return (
            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={item.name}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={`../../images/${item.image}`}
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    описание: {item.desc}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    цена: {item.price}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    <RestoreFromTrashIcon
                      onClick={() => {
                        handleDeleteProduct(item._id);
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
