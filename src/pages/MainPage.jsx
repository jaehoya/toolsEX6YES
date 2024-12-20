import React, { useContext } from "react";
import { WidgetContext } from "../context/WidgetContext";
import WidgetContainer from "../components/WidgetContainer";
import WidgetAddPanel from "../components/WidgetAddPanel";

const MainPage = () => {
    const { widgets } = useContext(WidgetContext);

    return (
        <div>
            <h1>My Workspace</h1>
            <WidgetAddPanel />
            <WidgetContainer widgets={widgets} />
        </div>
    );
};

export default MainPage;
