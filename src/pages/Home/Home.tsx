import React from 'react'
import s from './Home.module.scss'
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/UI/Button/Button'
import { svgRhomb, svgAlarm, svgArrow, svgVibration, svgAlarm2 } from '../../assets/svg'
import {
   imgClipBoard, imgMobileScreen1, imgMobileScreen2, imgAlarmClock2,
   imgTaskLists, imgBell, imgAgenda, img3dRocket,
   imgMobileScreen, imgListCheck, imgKit1, imgKit2, imgKit3,
   imgIconClock, imgIconCalendar, imgIconDashboard
} from '../../assets/images'


const Home = () => {
   return (
      <div className={s.home}>
         <header className={s.header}>
            <div className='container'>
               <div className='cont_content'>
                  <Navbar />
                  <div className={s.content}>
                     <h1>A collaborative  Time Tracking that you Need</h1>
                     <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
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
                     <img src={imgAlarmClock2} alt="Alarm Clock 2" />
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

               <div className={s.box_expertises}>
                  <div className={s.box_exp}>
                     <h2>15k+</h2>
                     <p>Active user</p>
                  </div>
                  <div className={s.box_exp}>
                     <h2>30k</h2>
                     <p>Total Download</p>
                  </div>
                  <div className={s.box_exp}>
                     <h2>10k</h2>
                     <p>Customer</p>
                  </div>
               </div>
            </div>
         </header>

         <section className={s.some_excellent}>
            <div className='container'>
               <div className='cont_content'>
                  <div className={s.title_description}>
                     <div className={s.content}>
                        <h1>Some excellent features for you</h1>
                        <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
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
            </div>
         </section>

         <section className={s.analytics}>
            <div className='container'>
               <div className='cont_content'>
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
                        <h1>Analytics & Reporting Brackdown</h1>
                        <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
                        <div className={s.list}>
                           <div className={s.item}>
                              <div className={s.item_img_box}>
                                 <img src={imgIconClock} alt="Icon Clock" />
                              </div>

                              <div className={s.item_content}>
                                 <h3>Automatic event tracking</h3>
                                 <p>Time Tracking is never been easier. Just let the stopwatch run</p>
                              </div>
                           </div>
                           <div className={s.item}>
                              <div className={s.item_img_box}>
                                 <img src={imgIconDashboard} alt="Icon Clock" />
                              </div>
                              <div className={s.item_content}>
                                 <h3>Customizable dashboard</h3>
                                 <p>Time Tracking is never been easier. Just let the stopwatch run</p>
                              </div>
                           </div>
                           <div className={s.item}>
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
            </div>
         </section>
      </div>
   );
};
export default Home