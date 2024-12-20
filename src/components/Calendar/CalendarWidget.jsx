import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import AddScheduleModal from "./AddScheduleModal";
import "./CalendarWidget.css";

const CalendarWidget = () => {
    const [viewMode, setViewMode] = useState("month"); // 'month' or 'year'
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [schedules, setSchedules] = useState([]); // 상태로 일정 관리
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setIsAddModalOpen(true);
    };

    const handleAddSchedule = (schedule) => {
        setSchedules((prev) => [
            ...prev,
            { date: selectedDate.toDateString(), text: schedule },
        ]);
        setIsAddModalOpen(false);
    };

    return (
        <div className="calendar-widget">
            <CalendarHeader
                viewMode={viewMode}
                setViewMode={setViewMode}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <CalendarBody
                viewMode={viewMode}
                selectedDate={selectedDate}
                onDateClick={handleDateClick}
                schedules={schedules}
            />
            {isAddModalOpen && (
                <AddScheduleModal
                    selectedDate={selectedDate}
                    onSave={handleAddSchedule}
                    onClose={() => setIsAddModalOpen(false)}
                />
            )}
        </div>
    );
};

export default CalendarWidget;
