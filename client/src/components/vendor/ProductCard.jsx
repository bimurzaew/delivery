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
  Toolbar,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteProduct,
  getProductsForUser,
} from "../../redux/features/product";
import { makeStyles } from "@material-ui/core/styles";
import LoadingModal from "../preload/Loading";

const useStyles = makeStyles({
  cards: {
    marginTop: 20,
  },
});

export default function ProductCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(getProductsForUser());
  }, []);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <>
      <Toolbar />
      {loading ? (
        <LoadingModal />
      ) : (
        <>
          <Grid container xs={10} spacing={5} className={classes.cards}>
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
      )}
    </>
  );
}
