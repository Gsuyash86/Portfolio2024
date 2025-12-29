"use client";

import React, { useState, useRef, useEffect } from 'react';

// Pad helper for numbers, extended to allow ms (default 2 digits for h/m/s, 3 for ms)
const pad = (num: number, size = 2) => String(num).padStart(size, '0');

const page = () => {
    // State for time: milliseconds and running/interval ref
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Format ms to HH:MM:SS:MS (MS = 2 digits)
    const formatTime = (totalMs: number) => {
        const hours = Math.floor(totalMs / 3600000);
        const minutes = Math.floor((totalMs % 3600000) / 60000);
        const secs = Math.floor((totalMs % 60000) / 1000);
        const ms = Math.floor((totalMs % 1000) / 10); // Show 2 digits of ms
        return `${pad(hours)}:${pad(minutes)}:${pad(secs)}.${pad(ms)}`;
    };

    const handleStart = () => {
        if (isRunning) return;
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setMilliseconds(0);
    };

    // Update timer when running (interval at 10ms for smooth ms display)
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setMilliseconds(prev => prev + 10);
            }, 10);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        // Cleanup on unmount/stop
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning]);

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
                {formatTime(milliseconds)}
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
                <button
                    style={{
                        padding: "10px 24px",
                        backgroundColor: "#0ea5e9",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: isRunning ? "not-allowed" : "pointer",
                        opacity: isRunning ? 0.7 : 1,
                        transition: "background 0.2s",
                    }}
                    onClick={handleStart}
                    disabled={isRunning}
                    onMouseOver={e => { if (!isRunning) e.currentTarget.style.backgroundColor = "#0369a1"; }}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = "#0ea5e9")}
                >
                    Start
                </button>
                <button
                    style={{
                        padding: "10px 24px",
                        backgroundColor: "#f59e42",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: isRunning ? "pointer" : "not-allowed",
                        opacity: isRunning ? 1 : 0.7,
                        transition: "background 0.2s",
                    }}
                    onClick={handleStop}
                    disabled={!isRunning}
                    onMouseOver={e => (isRunning ? e.currentTarget.style.backgroundColor = "#b45309" : null)}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = "#f59e42")}
                >
                    Stop
                </button>
                <button
                    style={{
                        padding: "10px 24px",
                        backgroundColor: "#64748b",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: milliseconds !== 0 ? "pointer" : "not-allowed",
                        opacity: milliseconds !== 0 ? 1 : 0.7,
                        transition: "background 0.2s",
                    }}
                    onClick={handleReset}
                    disabled={milliseconds === 0}
                    onMouseOver={e => (milliseconds !== 0 ? e.currentTarget.style.backgroundColor = "#334155" : null)}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = "#64748b")}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default page;