import {useState, useEffect} from 'react'

const useIncNumber = (num:number, duration:number) => {
   const [number, setNumber] = useState(0)

   useEffect(() => {
      const time = duration / num;
      let intervalId:any

      intervalId = setInterval(() => {
         if(num > number){
            setNumber(number + 1)
            clearInterval(intervalId)
         }
      }, time)

      return (() => {
         clearInterval(intervalId)
      })
   }, [duration, num, number])

   return number;
};
export default useIncNumber