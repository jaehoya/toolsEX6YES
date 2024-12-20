import React, { useState, useEffect } from "react";
import "./EncouragementWidget.css";

const EncouragementWidget = () => {
    const encouragementMessages = [
        "You can do it!",
        "Believe in yourself!",
        "Keep pushing forward!",
        "Stay positive!",
        "Never give up!",
        "Your hard work will pay off!",
        "You are capable of amazing things!",
        "Take one step at a time!",
    ];

    const [currentMessage, setCurrentMessage] = useState("");

    // Function to get a random encouragement message
    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * encouragementMessages.length);
        return encouragementMessages[randomIndex];
    };

    // Update the message every 5 minutes
    useEffect(() => {
        // Set an initial random message
        setCurrentMessage(getRandomMessage());

        const interval = setInterval(() => {
            setCurrentMessage(getRandomMessage());
        }, 5 * 60 * 1000); // 5 minutes in milliseconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    return (
        <div className="encouragement-widget">
            <h3>Encouragement Widget</h3>
            <p className="message">{currentMessage}</p>
        </div>
    );
};

export default EncouragementWidget;
