import React, { useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import "./WidgetAddPanel.css";

const WidgetAddPanel = () => {
    const { addWidget } = useContext(WidgetContext);

    const handleAddWidget = (type) => {
        const newWidget = {
            id: Date.now(),
            type: type,
        };
        addWidget(newWidget);
    };

    return (
        <div className="widget-add-panel">
            <button
                className="widget-icon timer"
                onClick={() => handleAddWidget("timer")}
            >
                ⏱
            </button>
            <button
                className="widget-icon calendar"
                onClick={() => handleAddWidget("calendar")}
            >
                📅
            </button>
            <button
                className="widget-icon todo"
                onClick={() => handleAddWidget("todo")}
            >
                ✅
            </button>
            <button
                className="widget-icon encouragement"
                onClick={() => handleAddWidget("encouragement")}
            >
                💬
            </button>
            <button
                className="widget-icon calculator"
                onClick={() => handleAddWidget("calculator")}
            >
                🧮
            </button>
            <button
                className="widget-icon background"
                onClick={() => handleAddWidget("background")}
            >
                🎨
            </button>
        </div>
    );
};

export default WidgetAddPanel;