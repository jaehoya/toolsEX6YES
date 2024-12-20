import React, { createContext, useState, useEffect } from "react";

// WidgetContext 생성
export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
    // 위젯 상태
    const [widgets, setWidgets] = useState(
        JSON.parse(localStorage.getItem("activeWidgets")) || []
    );

    // 배경화면 상태
    const [backgroundImage, setBackgroundImage] = useState(
        localStorage.getItem("backgroundImage") || ""
    );

    // 위젯 상태를 localStorage에 저장
    useEffect(() => {
        localStorage.setItem("activeWidgets", JSON.stringify(widgets));
    }, [widgets]);

    // 배경화면 상태를 localStorage에 저장
    useEffect(() => {
        localStorage.setItem("backgroundImage", backgroundImage);
    }, [backgroundImage]);

    // 위젯 추가
    const addWidget = (widget) => {
        setWidgets((prevWidgets) => [...prevWidgets, widget]);
    };

    // 위젯 삭제
    const removeWidget = (widgetId) => {
        setWidgets((prevWidgets) => prevWidgets.filter((widget) => widget.id !== widgetId));
    };

    return (
        <WidgetContext.Provider
            value={{
                widgets,
                addWidget,
                removeWidget,
                backgroundImage,
                setBackgroundImage,
            }}
        >
            {children}
        </WidgetContext.Provider>
    );
};
