import React, { useState } from 'react';
import '../App.css';
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from 'reactstrap';

function Minav(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="akaya-telivigala-regular">
    <Nav pills horizontal='center' justified activeInicio={props.activeInicio}>
      <NavItem>
        <NavLink href="./Inicio" to="/inicio">
          <div className='textoNav'>Inicio</div>
          
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav >
        <div className='textoNav'>Productos</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><NavLink href="./Alimentos" to='/alimentos' ><div className='textoNav'>Alimentos</div></NavLink></DropdownItem>
          <DropdownItem><NavLink href="./Bebidas" to='/bebidas' ><div className='textoNav'>Bebidas</div></NavLink></DropdownItem>
          <DropdownItem><NavLink href="./Electrodomesticos" to='/electrodomesticos' ><div className='textoNav'>Electrodomesticos</div></NavLink></DropdownItem>
          <DropdownItem><NavLink href="./Ropa" to='/ropa' ><div className='textoNav'>Ropa</div></NavLink></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="./Promociones" to='/promociones' activePromociones={props.activePromociones}><div className='textoNav'>Promociones</div></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="./Sucursales" to='/sucursales'activeSucursales={props.activeSucursales}><div className='textoNav'>Sucursales</div></NavLink>
      </NavItem>
    </Nav>
    </div>
  );
}

export default Minav;