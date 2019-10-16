import React from 'react';
import Avatar from '../../assets/avatar.png'
import { Link, withRouter } from 'react-router-dom'
import { Container, UserMenu } from './styles';
import { useSelector, useDispatch } from 'react-redux'
import * as MenuActions from '../../store/Reducers/MenuActions'
import { logout } from '../../services/auth'

export default function Header(props) {
  const user = useSelector(state => state.user)
  const menu = useSelector(state => state.menu)
  const dispatch = useDispatch()

  function toggleMenu() {
    dispatch(MenuActions.toggleAsideMenu(!menu.visibilityMenuAside))
  }
  function handleLogout() {
    logout()
  }

  return (
    <Container menuIsHidden={menu.visibilityMenuAside}>
      <div className="arrow" onClick={toggleMenu}>
        {menu.visibilityMenuAside ? <i className="fa fa-chevron-down"></i> :
          <i className="fa fa-chevron-left"></i>
        }
      </div>
      <a href="/dashboard">
        <h2>Article Code</h2>
      </a>
      <UserMenu>
        <span>{user.email}</span>
        <img src={Avatar} alt="" />
        <i className="fa fa-sort-down"></i>
        <div className="dropdown">
          {user.admin && <Link to="/admin">
            <i className="fa fa-cogs"></i>
            Administrador
           </Link>}
          <a href="/" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sair
           </a>
        </div>
      </UserMenu>

    </Container>
  );
}

