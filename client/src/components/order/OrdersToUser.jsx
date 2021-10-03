import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProductByCategory } from '../../redux/features/product'

function OrdersToUser (props) {
  const orders = useSelector(state => state.users.user);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(loadProductByCategory())
  },[])
  return (
    <table className={"table table-striped table-hover"}>
      <thead>
      <tr>
        <td>номер товара</td>
        <td>количество</td>
        <td></td>
        <td></td>
      </tr>
      </thead>
    </table>
  )
}

export default OrdersToUser