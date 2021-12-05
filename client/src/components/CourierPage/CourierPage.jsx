import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Paper, Toolbar } from "@material-ui/core";
import { getUser } from "../../redux/features/users";

function CourierPage() {
  const courier = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <Toolbar />
      <Toolbar />
      <Container>
        <Paper elevation={8}>
          <p>
            <b>Имя</b>: {courier?.name}
          </p>
          <p>
            <b>фамилия</b>: {courier?.lastName}
          </p>
          <p>
            <b>почта</b>: {courier?.email}
          </p>
        </Paper>
      </Container>
    </>
  );
}

export default CourierPage;
