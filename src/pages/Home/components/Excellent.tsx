import React, {useEffect} from 'react'
import s from './Excellent.module.scss'
import { svgAlarm2} from '../../../assets/svg'
import { imgTaskLists, imgBell, imgAgenda, img3dRocket } from '../../../assets/images'
import gsap from 'gsap'
import { scrollTriggerTitle, scrollTriggerText, scrollTriggerItems } from '../../../services/gsap'

const Excellent = () => {
   useEffect(() => {
      scrollTriggerItems(`.${s.card}`, `.${s.cards}`)
      scrollTriggerTitle(`.${s.content} .title`, `.${s.content}`,)
      scrollTriggerText(`.${s.content} .text`, `.${s.content}`)


      gsap.from(`.${s.img_3d_rocket}`, {
         opacity: 0,
         y: 300,
         x: -300,
         stagger: 0.2,
         duration: 4,
         ease: 'power3.out',
         scrollTrigger: {
            trigger: `.${s.cards}`,
            // markers: true,
            start: "top 100%",
            onEnter: () => {
               let svgElem = document.querySelector(`.${s.title_description} path`)
               if(svgElem) svgElem.classList.add('path') 
            }
         }
      });

   }, [])

   return (
      <section className={s.some_excellent}>
         <div className='container'>
            <div className={s.title_description}>
               <div className={s.content}>
                  <h1 className='title center'>Some excellent features for you</h1>
                  <p className='text center'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
                  <img className={s.img_3d_rocket} src={img3dRocket} alt="3d rocket" />
               </div>
               {svgAlarm2}
            </div>
            <div className={s.cards}>
               <div className={s.card}>
                  <div className={s.box_img}>
                     <img src={imgTaskLists} alt="Task Lists" />
                  </div>
                  <h3>Preset List of Task</h3>
                  <p>Make bill payments easily using the wallet app</p>
               </div>

               <div className={s.card}>
                  <div className={s.box_img}>
                     <img src={imgBell} alt="Task Lists" />
                  </div>
                  <h3>Reminder of Task</h3>
                  <p>Make bill payments easily using the wallet app</p>
               </div>

               <div className={s.card}>
                  <div className={s.box_img}>
                     <img src={imgAgenda} alt="Task Lists" />
                  </div>
                  <h3>Complecation Report</h3>
                  <p>Make bill payments easily using the wallet app</p>
               </div>
            </div>
         </div>
      </section>
   );
};
export default Excellent