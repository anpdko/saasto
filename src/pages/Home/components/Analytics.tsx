import React, {useEffect} from 'react'
import s from './Analytics.module.scss'
// import gsap from 'gsap'
import { scrollTriggerTitle, scrollTriggerText, scrollTriggerItems } from '../../../services/gsap'

import {imgMobileScreen, imgListCheck, imgKit1, imgKit2, imgKit3, 
   imgIconClock, imgIconCalendar, imgIconDashboard } from '../../../assets/images'

const Analytics = () => {

   useEffect(() => {
      scrollTriggerItems(`.${s.card}`, `.${s.list}`)
      scrollTriggerTitle(`.${s.box_content} .title`, `.${s.box_content}`, {x: 120, y: 0})
      scrollTriggerText(`.${s.box_content} .text`, `.${s.box_content}`)
   }, [])

   return (
      <section className={s.analytics}>
         <div className='container'>
            <div className={s.analytics_grid}>
               <div className={s.box_img}>
                  <div className={s.back}></div>
                  <img className={s.mobile_screen} src={imgMobileScreen} alt="Mobile Screen" />
                  <div className={s.z_box}>
                     <img className={s.list_check} src={imgListCheck} alt="" />
                     <img className={s.kit_1} src={imgKit1} alt="" />
                     <img className={s.kit_2} src={imgKit2} alt="" />
                     <img className={s.kit_3} src={imgKit3} alt="" />
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