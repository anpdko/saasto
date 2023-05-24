import React, {useEffect} from 'react'
import s from './Navbar.module.scss'
import logoImg from '../../assets/svg/Logo.svg'
import Button from '../UI/Button/Button';
import gsap from 'gsap'


const Navbar = () => {
   
   useEffect(()=>{
      gsap.from([`.${s.logo}`, `.${s.btns}`], { delay:0.1, duration: 1.2, opacity: 0, y: -20, ease: 'power2.out' })
      gsap.from(`.${s.menu} li`, { delay:0.1, duration: 1, opacity:0, x: 30, stagger: 0.3, ease: 'power2.out' })
   }, [])

   return (
      <div className={s.back}>
         <div className='container'>
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
         </div>
      </div>
   );
};
export default Navbar