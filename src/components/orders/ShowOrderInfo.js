import React from 'react'
import { useSelector } from 'react-redux'
import './Orders.css'
const ShowOrderInfo = ({ order, showStatus = true }) => {
  const { user } = useSelector((state) => ({ ...state }))
  return (
    <div>
      <p>
        <span>
          <p style={{ color: 'black' }}>
            <b>Order Id </b>: {order._id}
          </p>
        </span>{' '}
        {user && user.role === 'admin' && (
          <>
            <span>
              <p style={{ color: 'black' }}>
                {' '}
                <b>Ordered By</b> : {order?.orderBy?.email}
              </p>
            </span>
          </>
        )}
        <span>
          <p style={{ color: 'black' }}>
            {' '}
            <b>Total Amount</b> : ₹{order?.totalOrderAmount}{' '}
          </p>
        </span>
        <span>
          <p style={{ color: 'black' }}>
            <b>Ordered On</b> : {new Date(order?.createdAt).toLocaleString()}{' '}
          </p>
        </span>
        {showStatus && (
          <span className='badge bg-primary'>
            <b>Status</b> : {order?.orderStatus}
          </span>
        )}{' '}
        <p className='mt-3' style={{ color: 'black' }}>
          ORDER DETAILS{' '}
        </p>
      </p>
    </div>
  )
}

export default ShowOrderInfo
