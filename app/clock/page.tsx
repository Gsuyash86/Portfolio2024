    "use client";

    import React, { useState, useEffect } from 'react';

    const pad = (num: number, size = 2) => String(num).padStart(size, '0');
    const formatTime = () => {
        let currentTime = new Date()
        let hours = currentTime.getHours() , minutes = currentTime.getMinutes(), seconds = currentTime?.getSeconds()
        let hoursString = pad(hours);
        let minutesString = pad(minutes);
        let secondsString = pad(seconds);
        return `${hoursString}:${minutesString}:${secondsString}`;
    }
    const page = () => {
        const [time, setTime] = useState(formatTime());    
        useEffect(() => {
        let timeout =  setInterval(() => {
                setTime(formatTime());
            }, 1000)
            return () => {
                clearInterval(timeout);
            }
        }, [time]);
        
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    minHeight: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#0ea5e9",
                        letterSpacing: "0.15em",
                        background: "linear-gradient(90deg, #0ea5e9 30%, #36d399 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        padding: "16px 32px",
                        borderRadius: "16px",
                        boxShadow: "0 4px 24px 0 rgba(14,165,233,0.12)",
                        marginBottom: "24px",
                        border: "2px solid #0ea5e9"
                    }}
                >
                    {time}
                </div>
            </div>
        );
    };

    export default page;