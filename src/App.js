import React from "react";
import { WidgetProvider } from "./context/WidgetContext";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <WidgetProvider>
            <MainPage />
        </WidgetProvider>
    );
}

export default App;
