import { useState , useRef } from "react";
import ResultModel from "./ResultModel";
export default function Timerchallenges( {title ,targetTime} ){

   const timer= useRef();
   const dialog= useRef();

   const [timeRemaining, setTimeRemaning]= useState(targetTime *1000);
   
   const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime*1000;

   if(timeRemaining <=0){

    clearInterval(timer.current);
     dialog.current.open();

    
   }
    function handelReset(){
        setTimeRemaning(targetTime *1000);
    }
  
   function handelStart(){
   timer.current = setInterval(()=> {
      setTimeRemaning( (prevTimeRemaning)=>prevTimeRemaning-10);
    }, 10);
   }

    function handelstop(){
     dialog.current.open();
     clearInterval(timer.current)
     
    }

    return (
        <>
          { <ResultModel ref={dialog} targetTime={targetTime}  remainingtime={timeRemaining}  reset={handelReset} ></ResultModel>}
           <section className="challenge">
            <h2>{title} </h2>
           
            <p className="challenge-time">
                {targetTime} second{targetTime >1 ? 's' :' '}
            </p>
            <p>
                <button onClick={timerIsActive ? handelstop :handelStart}>
                   {timerIsActive ? 'Stop' :  'start'} challenge
                </button>
            </p>
            <p className={timerIsActive ?'active' :undefined}> 
                {timerIsActive ? 'Time is running' : 'Timer is inactive'}
            </p>
        </section>
        </>
     
    );

}