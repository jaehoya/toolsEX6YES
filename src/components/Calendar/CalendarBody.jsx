import React from "react";

const CalendarBody = ({ viewMode, selectedDate, onDateClick, schedules }) => {
    const renderMonthView = () => {
        const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay(); // 0 (일요일) ~ 6 (토요일)

        // 빈 칸과 날짜 채우기
        const dates = [...Array(firstDayOfMonth).fill(null), ...Array(daysInMonth).keys()].map((day, index) =>
            day === null ? null : day + 1
        );

        return (
            <div className="calendar-grid">
                {dates.map((date, index) => {
                    const currentDate = date
                        ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date)
                        : null;

                    const schedule = schedules.find(
                        (item) => currentDate && item.date === currentDate.toDateString()
                    );

                    return (
                        <div
                            key={index}
                            className={`calendar-cell ${date ? "active" : "inactive"}`}
                            onClick={() => date && onDateClick(currentDate)}
                        >
                            {date}
                            {schedule && <div className="schedule-indicator">{schedule.text}</div>}
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderYearView = () => {
        const months = [...Array(12).keys()];
        return (
            <div className="calendar-grid year-view">
                {months.map((month) => (
                    <div key={month} className="calendar-cell">
                        {new Date(selectedDate.getFullYear(), month).toLocaleString("default", { month: "long" })}
                    </div>
                ))}
            </div>
        );
    };

    return <div className="calendar-body">{viewMode === "month" ? renderMonthView() : renderYearView()}</div>;
};

export default CalendarBody;
