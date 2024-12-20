import React from "react";

const CalendarHeader = ({ viewMode, setViewMode, selectedDate, setSelectedDate }) => {
    const handlePrev = () => {
        const newDate = new Date(selectedDate);
        if (viewMode === "month") {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setFullYear(newDate.getFullYear() - 1);
        }
        setSelectedDate(newDate);
    };

    const handleNext = () => {
        const newDate = new Date(selectedDate);
        if (viewMode === "month") {
            newDate.setMonth(newDate.getMonth() + 1);
        } else {
            newDate.setFullYear(newDate.getFullYear() + 1);
        }
        setSelectedDate(newDate);
    };

    return (
        <div className="calendar-header">
            <button onClick={handlePrev}>Prev</button>
            <h2>{viewMode === "month" ? selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' }) : selectedDate.getFullYear()}</h2>
            <button onClick={handleNext}>Next</button>
            <div>
                <button onClick={() => setViewMode("month")}>Month</button>
                <button onClick={() => setViewMode("year")}>Year</button>
            </div>
        </div>
    );
};

export default CalendarHeader;
