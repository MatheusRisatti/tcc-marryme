import { useEffect, useState } from 'react';

export function TimeLeft (eventDate: string) {
  const calculateTimeLeft = () => {
    const difference = new Date(eventDate).getTime() - new Date().getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, eventDate]);

  return timeLeft;
}

interface CounterProps {
  eventDate: string
}


export function Counter({ eventDate }: CounterProps){
  const { days, hours, minutes, seconds } = TimeLeft(eventDate);
  //EventDate example: 2024-11-27T11:30:00 ==> Y-M-D+T+H:M:S

  return(
    <>
     <div className="flex gap-2 text-amber-50">
    
      <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
          
          <h2 className="text-5xl">{days}</h2>
          <h1>Dias</h1>

      </div>
      <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
          
          <h2 className="text-5xl">{hours}</h2>
          <h1>Horas</h1>
          
      </div>
      <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
          
          <h2 className="text-5xl">{minutes}</h2>
          <h1>Minutos</h1>

      </div>
      <div className="h-20 w-20 border-[2px] rounded-xl border-stone-200 flex items-center justify-center flex-col ">
          
          <h2 className="text-5xl">{seconds} </h2>
          <h1>Segundos</h1>
      </div>
    
  </div>
    </>
  )
}
