import React, { useEffect, useState } from 'react'

const BirthdayComponent = () => {

    const calculateLeftTime = () => {
        const myDate = 15
        const myMonth = "November"
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
                    days: Math.floor(differences / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((differences / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((differences / 1000 / 60) % 60),
                    seconds: Math.floor((differences / 1000) % 60),
                    isMyDay: false,
                    myDay: myDate + " " + myMonth + " " + myBirthDay.getUTCFullYear(),
                };
            } else {
                leftTime = {
                    days: Math.floor(isTodayMyDays / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((isTodayMyDays / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((isTodayMyDays / 1000 / 60) % 60),
                    seconds: Math.floor((isTodayMyDays / 1000) % 60),
                    isMyDay: true,
                    myDay: myDate + " " + myMonth + " " + myBirthDay.getUTCFullYear(),
                };
            }
        } else {
            leftTime = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
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
                    <h1 className="text-4xl font-bold">Today is Your BirthDay</h1>
                    <img src="https://www.funimada.com/assets/images/cards/big/bday-252.gif" alt="" />
                    <h1 className="text-2xl">{leftTime.days !== 0 && leftTime.days + "days"} {leftTime.hours} hours {leftTime.minutes} minutes {leftTime.seconds} seconds</h1>
                </>
                :
                <>
                    <div className="text-4xl font-bold text-cyan-500">Countdown</div>
                    <h1 className="text-2xl">{leftTime.days !== 0 && leftTime.days + " days"} {leftTime.hours} hours {leftTime.minutes} minutes {leftTime.seconds} seconds</h1>
                    <h1 className="text-2xl font-bold">My Birthday {leftTime.myDay}</h1>
                </>
            }

        </div>
    );

}


export default BirthdayComponent