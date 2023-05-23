import React from 'react'
import s from './Tracker.module.scss'

import { svgArrowRight, svgArrowLeft } from '../../../assets/svg'
import {
   imgMinutes, imgHourglass, imgWallet, imgNewspaper, imgDarts,
   imgTrackerScreen1, imgTrackerScreen2, imgTrackerScreen3,
} from '../../../assets/images'


const Tracker = () => {
   return (
      <section className={s.tracker_work}>
      <div className={`${s.tracker_container} container`}>
         <div className={s.position}>
            <img src={imgNewspaper} alt="imgNewspaper" />
            <img src={imgDarts} alt="imgDarts" />
         </div>

         <h1 className='title'>How our Tracker work for you</h1>
         <p className='text'>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
         <div className={s.tracker_grid}>
            <div className={s.cards}>
               <div className={s.card}>
                  <img src={imgMinutes} alt="imgMinutes" />
                  <div className={s.card_content}>
                     <h3>Time Tracking</h3>
                     <p className={s.text}>Time Tracking is never been easier. Just let the stopwatch run</p>
                  </div>
                  <div className={s.arrow}>
                     <div>{svgArrowRight}</div>
                  </div>
               </div>

               <div className={s.card}>
                  <div className={s.arrow}>
                     <div>{svgArrowLeft}</div>
                  </div>
                  <img src={imgHourglass} alt="imgHourglass" />
                  <div className={s.card_content}>
                     <h3>Time Tracking</h3>
                     <p className={s.text}>Time Tracking is never been easier. Just let the stopwatch run</p>
                  </div>
               </div>

               <div className={s.card}>
                  <img src={imgWallet} alt="imgWallet" />
                  <div className={s.card_content}>
                     <h3>Time Tracking</h3>
                     <p className={s.text}>Time Tracking is never been easier. Just let the stopwatch run</p>
                  </div>
                  <div className={s.arrow}>
                  </div>
               </div>

            </div>
            <div className={s.imgs}>
               <img className={s.img} src={imgTrackerScreen1} alt="imgTrackerScreen1" />
               <img className={s.img} src={imgTrackerScreen3} alt="imgTrackerScreen3" />
               <img className={s.img} src={imgTrackerScreen2} alt="imgTrackerScreen2" />
            </div>
         </div>
      </div>
   </section>  
   );
};
export default Tracker