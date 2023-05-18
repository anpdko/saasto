import React from 'react'
import s from './Navbar.module.scss'
import logoImg from '../../assets/svg/Logo.svg'
import Button from '../UI/Button/Button';

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <img src={logoImg} alt="" className={s.logo} />
         <ul className={s.menu}>
            <li>Demos</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
         </ul>
         <div className={s.btns}>
            <Button type='empty'>Login</Button>
            <Button>Sign up</Button>
         </div>
      </nav>
   );
};
export default Navbar