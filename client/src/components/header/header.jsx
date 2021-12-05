import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/features/users";
import VendorHeader from "./VendorHeader";
import CourierHeader from "./CourierHeader";
import ClientHeader from "./ClientHeader";

function Header() {
  const role = useSelector((state) => state.users.role);
  const token = useSelector((state) => state.users.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      {!token ? <ClientHeader /> : ""}
      {role === "vendor" ? <VendorHeader /> : ""}
      {role === "courier" ? <CourierHeader /> : ""}
    </>
  );
}

export default Header;
