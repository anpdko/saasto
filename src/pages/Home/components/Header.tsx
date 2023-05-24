import React, { useEffect } from 'react'
import s from './Header.module.scss'
import Button from '../../../components/UI/Button/Button'
import { svgRhomb, svgAlarm, svgArrow, svgVibration } from '../../../assets/svg'
import { imgClipBoard, imgMobileScreen1, imgMobileScreen2, imgAlarmClock2 } from '../../../assets/images'
import gsap from 'gsap'
import useIncNumber from '../../../hooks/useIncNumber'


const ExpertisesData = () => {
   const activeUser = useIncNumber(15, 1000)
   const totalDownload = useIncNumber(30, 1000)
   const customer = useIncNumber(10, 1000)

   return (
      <div className={s.box_expertises}>
         <div className={s.box_exp}>
            <h2 className='title'>{activeUser}k+</h2>
            <p>Active user</p>
         </div>
         <div className={s.box_exp}>
            <h2 className='title'>{totalDownload}k</h2>
            <p>Total Download</p>
         </div>
         <div className={s.box_exp}>
            <h2 className='title'>{customer}k</h2>
            <p>Customer</p>
         </div>
      </div>
   )
}

const Header = () => {

   useEffect(() => {
      gsap.from('.main_title', { delay: 0.2, duration: 1.5, y: -100, opacity: 0, ease: 'power3.out' })
      gsap.from('.main_text', { delay: 0.4, duration: 2, opacity: 0, ease: 'power3.out' })

      gsap.from('.btn', { delay: 0.3, duration: 1.5, y: 50, opacity: 0, ease: 'power3.out' })

      gsap.from(`.${s.mobile_screen_1} img`, { delay: 0.1, duration: 1.5, y: 100, x: -250, opacity: 0.8, ease: 'power3.out' })
      gsap.from('.imgAlarmClock2', { delay: 0.3, duration: 1.2, y: -50, x: -100, opacity: 0, ease: 'power3.out' })

      gsap.from(`.${s.mobile_screen_2} img`, { delay: 0.1, duration: 1.5, y: 100, x: 250, opacity: 0.8, ease: 'power3.out' })
      gsap.from(`.${s.clip_board} img`, { delay: 0.3, duration: 1.2, y: -50, x: 100, opacity: 0, ease: 'power3.out' })

      gsap.from(`.${s.box_exp}`, {
         opacity: 0,
         y: 100,
         stagger: 0.2,
         duration: 0.5,
         ease: 'power3.out',
         scrollTrigger: {
            trigger: `.${s.box_exp}`,
            markers: true,
            start: "top 95%",
            onEnter: () => {
               // Действие, которое будет выполнено после окончания анимации
               console.log("Анимация завершена. Выполняется дополнительное действие.");
            }
         }
      });
   })

   return (
      <header className={s.header}>
         <div className='container'>
            <div className={s.content}>
               <h1 className='main_title'>A collaborative  Time Tracking that you Need</h1>
               <p className='main_text'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
               <div className='btn'>
                  <Button>Start 14 Days Trial</Button>
               </div>

            </div>
         </div>
         <div className={s.back}>
            <div className={s.left}>
               <div className={s.mobile_screen_1}>
                  <img src={imgMobileScreen1} alt="Mobile Screen 1" />
                  {svgRhomb}
               </div>
               <div className={s.alarm_clock_2}>
                  <img src={imgAlarmClock2} className='imgAlarmClock2' alt="Alarm Clock 2" />
                  {svgAlarm}
               </div>
            </div>
            <div className={s.right}>
               <div className={s.clip_board}>
                  {svgArrow}
                  <img src={imgClipBoard} alt="Clip Board" />
               </div>

               <div className={s.mobile_screen_2}>
                  {svgVibration}
                  <img src={imgMobileScreen2} alt="Mobile Screen 2" />
               </div>
            </div>

            <ExpertisesData/>
            
         </div>
      </header>
   );
};
export default Header