import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, loadOrdersByCourier } from '../../redux/features/order'
import { Container, Toolbar } from '@material-ui/core'
import { getUser } from '../../redux/features/users'

function OrdersToUser (props) {
  const courier = useSelector(state => state.users.user);
  const orders = useSelector(state => state.order.orders);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUser())
  },[])

  useEffect(()=>{
    dispatch(loadOrdersByCourier())
  },[])

  const handleComplete = (id) => {
      dispatch(deleteOrder(id))
  }

  return (
    <Container>
      <Toolbar/>
      <Toolbar/>
      <table className={"table table-striped table-hover"}>
        <thead>
        <tr>
          <th>номер товара</th>
          <th>количество</th>
          <th>сумма</th>
          <th>
            действие
          </th>
        </tr>
        </thead>
        <tbody>
        {
          orders?.map((item,index) => {
            return(
              <tr key={item._id}>
                <td >{courier._id + index}</td>
                <td>{item.products.length}</td>
                <td>{item.products.reduce((sum, item)=>{
                  return (sum + item?.product?.price) * item.amount

                },0)}</td>
                <td>
                  <button
                    onClick={()=>handleComplete(item._id)}
                    className="btn btn-primary">
                    завершить
                  </button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </Container>
  )
}

export default OrdersToUser