import * as React from 'react'
import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import MenuProfile from './MenuProfile'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'
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