import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/features/users";
import VendorHeader from "./VendorHeader";
import CourierHeader from "./CourierHeader";
import ClientHeader from "./ClientHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    background: "#6247aa ",
  },
  title: {
    flexGrow: 1,
  },
  AppbarCardAndAvatar: {
    display: "flex",
  },

  Order: {
    textDecoration: "none",
    color: "white",
  },
  Avatar: {
    width: 100,
  },
}));

function Header(props) {
  const role = useSelector((state) => state.users.role);
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <>
      {!token ? <ClientHeader /> : ""}
      {role === "vendor" ? <VendorHeader /> : ""}
      {role === "courier" ? <CourierHeader /> : ""}
    </>
  );
}

export default Header;
