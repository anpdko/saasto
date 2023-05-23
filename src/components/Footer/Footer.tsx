import React from 'react'
import s from './Footer.module.scss'
import svgLogo from '../../assets/svg/Logo.svg'

const Footer = () => {
   return (
      <footer className={s.footer}>
         <div className={`${s.footer_container} container`}>
            <img src={svgLogo} alt="" className={s.logo} />
            <ul className={s.menu}>
               <li>Demos</li>
               <li>Features</li>
               <li>Pricing</li>
               <li>Contact</li>
            </ul>
            <div className={s.social}>
               <i className="bi bi-instagram"></i>
               <i className="bi bi-linkedin"></i>
               <i className="bi bi-facebook"></i>
               <i className="bi bi-twitter"></i>
            </div>
         </div>
         <div className={s.bottom}>
            <p>All Right Reserved @ <a href='https://anpdko.netlify.app/'>anpdko.netlify.app</a></p>
         </div>
      </footer>
   );
};
export default Footer