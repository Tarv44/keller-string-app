import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout/Layout';
import { getSuccessData } from '../utils/checkout';
import formatPrice from '../utils/price-format';

const Success = (props) => {
  const [data, setData] = useState(null)
  let [lineItems, setLineItems] = useState(null)
  
  useEffect(() => {
    const fetch = async () => {
      const params = new URLSearchParams(props.location.search);
      const session_id = params.get("session_id");
      const response = await getSuccessData(session_id);
      setData(response)
    }
    fetch()
  }, [props.location.search]);

  useEffect(() => {
    const lis = data?.lineItems.data.map((l, i) => {
      return (
        <li key={i}>
          <span>{l.description}</span>
          <span>{formatPrice(l.amount_subtotal)}</span>
        </li>
      )
    })
    setLineItems(lis)
    console.log(data)
  }, [data])
  return (
    <>
      {data && <Layout>
        <h1>Confirmation</h1>
        <p>Thank you for shopping with us, your order has been placed!</p>
        <p><b>You will receive an email with the details of your purchase.</b> If for whatever reason you don’t see the email, please give us a call!</p>
        <div>
          <h2>Order Confirmation</h2>
          <ul>{lineItems}</ul>
          <hr />
          <ul>
            <li><span>Subtotal</span><span>{formatPrice(data.session.amount_subtotal)}</span></li>
            <li><span>Shipping</span><span>{formatPrice(data.session.total_details.amount_shipping)}</span></li>
            <li><span>Tax</span><span>{formatPrice(data.session.total_details.amount_tax)}</span></li>
          </ul>
          <div><h3>TOTAL</h3><h3>{formatPrice(data.session.amount_total)}</h3></div>
        </div>
      </Layout>}
    </>
  )
}

export default Success;