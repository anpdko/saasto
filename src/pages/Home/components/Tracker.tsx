import React, {useEffect} from 'react'
import s from './Tracker.module.scss'
import { svgArrowRight, svgArrowLeft } from '../../../assets/svg'
import {imgMinutes, imgHourglass, imgWallet, imgNewspaper, imgDarts,
   imgTrackerScreen1, imgTrackerScreen2, imgTrackerScreen3} from '../../../assets/images'
import { scrollTriggerTitle, scrollTriggerText, scrollTriggerItems, scrollTriggerSide } from '../../../services/gsap'
import gsap from 'gsap'

const Tracker = () => {

   useEffect(() => {
      scrollTriggerItems(`.${s.card}`, `.${s.cards}`)
      scrollTriggerTitle(`.${s.tracker_container} .title`, `.${s.tracker_container}`, { x: -120, y: 0 })
      scrollTriggerText(`.${s.tracker_container} .text`, `.${s.tracker_container}`)

      scrollTriggerSide('#img_newspaper', `.${s.cards}`, { y: -500, x: -300 });
      scrollTriggerSide('#img_darts', `.${s.cards}`, { y: 500, x: 300 });

      scrollTriggerItems(`.${s.imgs} .${s.img}`, `.${s.imgs}`, {scale: 0, y: -150, stagger: 0.1})

   }, [])

   return (
      <section className={s.tracker_work}>
      <div className={`${s.tracker_container} container`}>
         <div className={s.position}>
            <img src={imgNewspaper} alt="imgNewspaper" id='img_newspaper'/>
            <img src={imgDarts} alt="imgDarts" id='img_darts'/>
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