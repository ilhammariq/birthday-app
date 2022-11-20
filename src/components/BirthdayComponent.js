import React, { useEffect, useState } from 'react'

const BirthdayComponent = () => {

    const calculateLeftTime = () => {
        const myDate = 23
        const myMonth = "January"
        const currentYear = new Date().getFullYear()
        let myBirthDay = new Date(`${currentYear}/${myMonth}/${myDate}`)
        const difference = myBirthDay - new Date();
        let leftTime = [];

        if (difference < 0) {
            myBirthDay = new Date(`${currentYear}/${myMonth}/${myDate + 1}`)
            const isTodayMyDays = myBirthDay - new Date();
            if (isTodayMyDays < 0) {
                myBirthDay = new Date(`${currentYear + 1}/${myMonth}/${myDate}`)
                const differences = myBirthDay - new Date();
                leftTime = {
                    days: String(Math.floor(differences / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                    hours: String(Math.floor((differences / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                    minutes: String(Math.floor((differences / 1000 / 60) % 60)).padStart(2, '0'),
                    seconds: String(Math.floor((differences / 1000) % 60)).padStart(2, '0'),
                    isMyDay: false,
                    myDay: myDate + " " + myMonth + " " + myBirthDay.getUTCFullYear(),
                };
            } else {
                leftTime = {
                    days: String(Math.floor(isTodayMyDays / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                    hours: String(Math.floor((isTodayMyDays / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                    minutes: String(Math.floor((isTodayMyDays / 1000 / 60) % 60)).padStart(2, '0'),
                    seconds: String(Math.floor((isTodayMyDays / 1000) % 60)).padStart(2, '0'),
                    isMyDay: true,
                    myDay: myDate + " " + myMonth + " " + myBirthDay.getUTCFullYear(),
                };
            }
        } else {
            leftTime = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
                isMyDay: false,
                myDay: myDate + " " + myMonth + " " + myBirthDay.getUTCFullYear(),
            };
        }
        return leftTime
    };

    const [leftTime, setLeftTime] = useState(calculateLeftTime());
    useEffect(() => {
        setInterval(() => {
            setLeftTime(calculateLeftTime());
        }, 1000);
    });

    return (
        <div className="flex flex-col items-center justify-center gap-10">
            {leftTime.isMyDay ?
                <>
                    <img src="https://www.funimada.com/assets/images/cards/big/bday-252.gif" alt="" className="rounded-lg"/>
                    <audio controls loop>
                        <source src="https://cf-media.sndcdn.com/2eKRT0JweUiz.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMmVLUlQwSndlVWl6LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjY4OTg3NTY4fX19XX0_&Signature=UA59yXAjf8uBn-nIdQWcsNEopFUobSKs2Vsq5kWf-ZaTRn4daG1lp8Q15zfyQTWBOTRHkalCk1GEz8NRUok0DEH9kpQkj7UjhkHNDWedUebyQmh1OtfkrgpAhceqgb7EPwpyGS9FO6EbyZ0v3U~aOpcbXn4yEX4kt3SMQhfSNTv37RyrVkoXFNX~7zbAdMxCVfzk8JIjSJC8dlwqAOeiSh8zWugtTtddbTAbh9kqD0Ci8afvImlDaXvPckHjKt~ESCfDJ2ClVv0m-4qhhBHHTju4CjR-fGj578hct-aDnF4RPkIgYQF7HoylLzGHd7bKy4nmZ~CEOSyG7D2fs2VUOQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" type=""/>
                    </audio>
                    <div className="flex gap-5 text-4xl font-semibold text-white">
                        <div className="flex flex-col items-center gap-2">
                            <div className="shadow-lg w-[100px] h-[100px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.days}</span>
                            </div>
                            <span className="text-xl text-black font-bold">Days</span>
                        </div>
                        <span className="flex items-center mb-10">:</span>
                        <div className="flex flex-col items-center gap-2">
                            <div className="shadow-lg w-[100px] h-[100px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.hours}</span>
                            </div>
                            <span className="text-xl text-black font-bold">Hours</span>
                        </div>
                        <span className="flex items-center mb-10">:</span>
                        <div className="flex flex-col items-center gap-2">
                            <div className="shadow-lg w-[100px] h-[100px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.minutes}</span>
                            </div>
                            <span className="text-xl text-black font-bold">Minutes</span>
                        </div>
                        <span className="flex items-center mb-10">:</span>
                        <div className="flex flex-col items-center gap-2">
                            <div className="shadow-lg w-[100px] h-[100px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.seconds}</span>
                            </div>
                            <span className="text-xl text-black font-bold">Seconds</span>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="text-6xl font-bold">TIME REMAINING</div>
                    <div className="flex gap-5 text-6xl font-semibold text-white">
                        <div className="flex flex-col items-center gap-4">
                            <div className="shadow-lg w-[160px] h-[160px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.days}</span>
                            </div>
                            <span className="text-2xl text-black font-bold">Days</span>
                        </div>
                        <span className="flex items-center mb-16">:</span>
                        <div className="flex flex-col items-center gap-4">
                            <div className="shadow-lg w-[160px] h-[160px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.hours}</span>
                            </div>
                            <span className="text-2xl text-black font-bold">Hours</span>
                        </div>
                        <span className="flex items-center mb-16">:</span>
                        <div className="flex flex-col items-center gap-4">
                            <div className="shadow-lg w-[160px] h-[160px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.minutes}</span>
                            </div>
                            <span className="text-2xl text-black font-bold">Minutes</span>
                        </div>
                        <span className="flex items-center mb-16">:</span>
                        <div className="flex flex-col items-center gap-4">
                            <div className="shadow-lg w-[160px] h-[160px] flex items-center justify-center rounded-xl bg-cyan-400">
                                <span>{leftTime.seconds}</span>
                            </div>
                            <span className="text-2xl text-black font-bold">Seconds</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold">My Birthday {leftTime.myDay}</h1>
                </>
            }

        </div>
    );

}


export default BirthdayComponent