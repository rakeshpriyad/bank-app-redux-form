import * as React from 'react'
import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'


const MenuPaymentTransfer = () => {
  const popupStateHome = usePopupState({ variant: 'popover', popupId: 'homeMenu' })
  const about = () => {
    console.log("About");
    popupStateHome.close();
  }
  return (
    <React.Fragment>
      
      <Button variant="contained" {...bindHover(popupStateHome)}>
       Payment / Transfer
      </Button>
      <Menu
        {...bindMenu(popupStateHome)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={about}>
          <NavLink to="/" style={{textDecoration: 'none'}}>Account Summary</NavLink>
        </MenuItem>
        <MenuItem onClick={popupStateHome.close}>
            <NavLink to="/User" style={{textDecoration: 'none'}}>Account Statement</NavLink>
        </MenuItem>
      </Menu>
    </React.Fragment>
    
  )
}

export default MenuPaymentTransfer