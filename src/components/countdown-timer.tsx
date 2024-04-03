import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { type Framework } from "@/utils/framework-utils";
import { useState, useEffect } from "react";
import {TimeUnit} from './time-unit'

//Date to Start
const date: string = "2024-5-04T09:00:00-09:00"
export const CountdonwTimer = ( {currentFramework} : {currentFramework: Framework} ) => {
    const [countdown, setCountdown] = useState(calculateTimeToEvent(date))
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(calculateTimeToEvent(date))
        }, 1000);

        return () => clearInterval(intervalId) 
    }, []);

    return <div className="flex gap-[10px] text-center">

        <TimeUnit  label="DAYS" value={countdown.days} currentFramework={currentFramework}/>
        <TimeUnit  label="HOURS" value={countdown.hours} currentFramework={currentFramework}/>
        <TimeUnit  label="MINUTES" value={countdown.minutes} currentFramework={currentFramework}/>
        <TimeUnit  label="SECONDS" value={countdown.secounds} currentFramework={currentFramework}/>
    </div>
}