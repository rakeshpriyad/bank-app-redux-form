import * as React from 'react'
import MenuProfile from './MenuProfile'
import MenuPaymentTransfer from './MenuPaymentTransfer'
import MenuBillPayment from './MenuBillPayments'
import MenuFD from './MenuFD'
import MenuETax from './MenuETax'
import MenuReqEnq from './MenuReqEnq'

const MenuBar = () => {
  
  return (
    <React.Fragment>
      <MenuProfile />
      <MenuPaymentTransfer />
      <MenuBillPayment />
      <MenuFD />
      <MenuETax />
      <MenuReqEnq />
    </React.Fragment>
  )
}

export default MenuBar