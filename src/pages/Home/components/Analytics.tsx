import React, { useEffect, useRef } from 'react'
import s from './Analytics.module.scss'
import gsap from 'gsap'
import { scrollTriggerTitle, scrollTriggerText, scrollTriggerItems } from '../../../services/gsap'

import {
   imgMobileScreen, imgListCheck, imgKit1, imgKit2, imgKit3,
   imgIconClock, imgIconCalendar, imgIconDashboard
} from '../../../assets/images'

const Analytics = () => {
   const listCheckRef = useRef(null)
   const kit1Ref = useRef(null)
   const kit2Ref = useRef(null)
   const kit3Ref = useRef(null)

   useEffect(() => {
      scrollTriggerItems(`.${s.card}`, `.${s.list}`)
      scrollTriggerTitle(`.${s.box_content} .title`, `.${s.box_content}`, { x: 120, y: 0 })
      scrollTriggerText(`.${s.box_content} .text`, `.${s.box_content}`)

      gsap.from(`.${s.mobile_screen}`, {
         delay: 0.4,
         duration: 2,
         x: -100,
         opacity: 0,
         ease: 'power3.out',
         scrollTrigger: {
            trigger: `.${s.mobile_screen}`,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 2,
         }
      });


      const scrollTriggerImg = {
         trigger: `.${s.mobile_screen}`,
         start: "bottom bottom",
         end: "bottom bottom",
         // markers: true,
         scrub: 2,
      }

      gsap.from(listCheckRef.current, {
         x: -150,
         y: 150,
         scale: 0.3,
         opacity: 0,
         ease: 'power3.out',
         scrollTrigger: scrollTriggerImg
      });

      gsap.from(kit1Ref.current, {
         x: 150,
         scale: 0.7,
         opacity: 0,
         ease: 'power3.out',
         scrollTrigger: scrollTriggerImg
      });

      gsap.from([kit2Ref.current, kit3Ref.current], {
         x: -150,
         y: -50,
         opacity: 0,
         scale: 0.7,
         ease: 'power3.out',
         scrollTrigger: scrollTriggerImg
      });
   }, [])

   return (
      <section className={s.analytics}>
         <div className='container'>
            <div className={s.analytics_grid}>
               <div className={s.box_img}>
                  <div className={s.back}></div>
                  <img className={s.mobile_screen} src={imgMobileScreen} alt="Mobile Screen" />
                  <div className={s.z_box}>
                     <img className={s.list_check} src={imgListCheck} alt="" ref={listCheckRef}/>
                     <img className={s.kit_1} src={imgKit1} alt="" ref={kit1Ref}/>
                     <img className={s.kit_2} src={imgKit2} alt="" ref={kit2Ref}/>
                     <img className={s.kit_3} src={imgKit3} alt="" ref={kit3Ref}/>
                  </div>

               </div>
               <div className={s.box_content}>
                  <h1 className='title'>Analytics & Reporting Brackdown</h1>
                  <p className='text'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
                  <div className={s.list}>
                     <div className={s.card}>
                        <div className={s.item_img_box}>
                           <img src={imgIconClock} alt="Icon Clock" />
                        </div>

                        <div className={s.item_content}>
                           <h3>Automatic event tracking</h3>
                           <p>Time Tracking is never been easier. Just let the stopwatch run</p>
                        </div>
                     </div>
                     <div className={s.card}>
                        <div className={s.item_img_box}>
                           <img src={imgIconDashboard} alt="Icon Clock" />
                        </div>
                        <div className={s.item_content}>
                           <h3>Customizable dashboard</h3>
                           <p>Time Tracking is never been easier. Just let the stopwatch run</p>
                        </div>
                     </div>
                     <div className={s.card}>
                        <div className={s.item_img_box}>
                           <img src={imgIconCalendar} alt="Icon Clock" />
                        </div>
                        <div className={s.item_content}>
                           <h3>Statistics retroactively</h3>
                           <p>Time Tracking is never been easier. Just let the stopwatch run</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
export default Analytics