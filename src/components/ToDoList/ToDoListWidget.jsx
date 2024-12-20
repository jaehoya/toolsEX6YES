import React, { useState, useEffect } from "react";
import "./ToDoListWidget.css";

const ToDoListWidget = ({ widgetId }) => {
    const storageKey = `todoWidget_${widgetId}`; // 위젯별 고유 키

    // ToDoList 상태
    const [listTitle, setListTitle] = useState("My ToDo List");
    const [editingTitle, setEditingTitle] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // 데이터 로드
    useEffect(() => {
        try {
            const savedData = localStorage.getItem(storageKey);
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                setListTitle(parsedData.listTitle || "My ToDo List");
                setTasks(parsedData.tasks || []);
            }
        } catch (error) {
            console.error(`Failed to load data for widgetId: ${widgetId}`, error);
        }
    }, [storageKey]);

    // 데이터 저장
    useEffect(() => {
        try {
            const dataToSave = { listTitle, tasks };
            localStorage.setItem(storageKey, JSON.stringify(dataToSave));
        } catch (error) {
            console.error(`Failed to save data for widgetId: ${widgetId}`, error);
        }
    }, [listTitle, tasks, storageKey]);

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTasks((prevTasks) => [
                ...prevTasks,
                { id: Date.now(), text: task, completed: false },
            ]);
            setTask("");
        }
    };

    const toggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const handleTitleKeyPress = (e) => {
        if (e.key === "Enter" && newTitle.trim() !== "") {
            setListTitle(newTitle);
            setEditingTitle(false);
        }
    };

    return (
        <div className="todo-list-widget">
            <h3>ToDo List Widget</h3>

            {/* 제목 섹션 */}
            <div className="list-title">
                {editingTitle ? (
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        onKeyDown={handleTitleKeyPress}
                        placeholder="Enter ToDo List Title"
                        autoFocus
                    />
                ) : (
                    <h4
                        className="list-title-display"
                        onClick={() => {
                            setEditingTitle(true);
                            setNewTitle(listTitle);
                        }}
                    >
                        {listTitle}
                    </h4>
                )}
            </div>

            {/* 할 일 목록 */}
            <div className="task-list">
                {tasks.length === 0 ? (
                    <p>No tasks added yet.</p>
                ) : (
                    <ul>
                        {tasks.map((task) => (
                            <li
                                key={task.id}
                                className={task.completed ? "completed" : ""}
                            >
                                <span onClick={() => toggleComplete(task.id)}>
                                    {task.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* 할 일 추가 입력 필드 */}
                <div className="task-input">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a new task"
                    />
                    <button onClick={handleAddTask}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default ToDoListWidget;
