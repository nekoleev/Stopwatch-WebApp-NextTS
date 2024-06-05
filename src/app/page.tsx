"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <header className="h-p4 flex justify-center">
        <h1>Stopwatch Mini-Project</h1>
      </header>
      <main className="flex justify-center items-center flex-grow">
        <section className="w-6/12 flex flex-col justify-center items-center text-center">
          <div>
            <span>{("0" + "0" + Math.floor((time/3600000)% 999)).slice(-3)}:</span>
            <span>{("0" + Math.floor((time/60000)% 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time/1000)% 60)).slice(-2)}:</span>
            <span>{("0" + ((time/10)% 100)).slice(-2)}</span>
          </div>
          <div className="flex">
            {running ? (
              <button onClick={() => (setRunning(false))}>Stop</button>
            ) : (
              <button onClick={() => (setRunning(true))}>Start</button>
            )}
            <button onClick={() => {
              setTime(0);
              setRunning(false);
            }}>Reset</button>
          </div>
        </section>
      </main>
      <footer className="h-p4 flex justify-center">
        <p>Built by Nekoleev</p>
      </footer>
    </>
  );
}
