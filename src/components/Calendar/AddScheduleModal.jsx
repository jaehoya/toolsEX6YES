import React, { useState } from "react";

const AddScheduleModal = ({ selectedDate, onSave, onClose }) => {
    const [scheduleText, setScheduleText] = useState("");

    const handleSave = () => {
        if (scheduleText.trim()) {
            onSave(scheduleText);
        }
        setScheduleText("");
    };

    return (
        <div className="modal">
            <h3>Add Schedule for {selectedDate.toDateString()}</h3>
            <input
                type="text"
                value={scheduleText}
                onChange={(e) => setScheduleText(e.target.value)}
                placeholder="Enter schedule"
            />
            <div className="modal-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default AddScheduleModal;
