import gsap from 'gsap'

interface ISetting {
   x?: number;
   y?: number;
}

const scrollTriggerTitle = (classElem:string, triggerElem:string, setting?:ISetting) => {
   // console.log(classElem, triggerElem)
   gsap.from(classElem, {
      delay: 0.2, 
      opacity: 0,
      y: -40,
      duration: 2,
      ease: 'power3.out',
      ...setting,
      scrollTrigger: {
         trigger: triggerElem,
         start: "top 95%",
         end: "bottom 60%",
         scrub: 1,
      }
   });
};

const scrollTriggerText = (classElem:string, triggerElem:string, setting?:ISetting) => {
   gsap.from(classElem, {
      delay: 0.4, 
      duration: 2, 
      y: 20,
      opacity: 0,
      ease: 'power3.out',
      ...setting,
      scrollTrigger: {
         trigger: triggerElem,
         start: "top 95%",
         end: "bottom 60%",
         scrub: 1,
      }
   });
};

const scrollTriggerItems = (classElems:string, triggerElem:string, onEnter?:()=>void) => {
   gsap.from(classElems, {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: {
         trigger: triggerElem,
         // markers: true,
         start: "top 95%",
         end: "bottom 60%",
         scrub: 1,
         onEnter: onEnter
      }
   });
};

export { scrollTriggerTitle, scrollTriggerText, scrollTriggerItems }