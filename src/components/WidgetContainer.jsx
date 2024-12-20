import React from "react";
import TimerWidget from "./Timer/TimerWidget";
import CalendarWidget from "./Calendar/CalendarWidget";
import ToDoListWidget from "./ToDoList/ToDoListWidget";
import EncouragementWidget from "./Encouragement/EncouragementWidget";
import CalculatorWidget from "./CalculatorWidget/CalculatorWidget";
import { WidgetContext } from "../context/WidgetContext";
import "./WidgetContainer.css";


const WidgetContainer = ({ widgets }) => {
    const { removeWidget } = React.useContext(WidgetContext);

    return (
        <div className="widget-container">
            {widgets.map((widget) => (
                <div key={widget.id} className="widget-wrapper">
                    {widget.type === "timer" && <TimerWidget />}
                    {widget.type === "calendar" && <CalendarWidget />}
                    {widget.type === "todo" && <ToDoListWidget widgetId={widget.id} />}
                    {widget.type === "encouragement" && <EncouragementWidget />}
                    {widget.type === "calculator" && <CalculatorWidget />}
                    <button
                        className="delete-widget-btn"
                        onClick={() => removeWidget(widget.id)}
                    >
                        Delete Widget
                    </button>
                </div>
            ))}
        </div>
    );
};

export default WidgetContainer;
