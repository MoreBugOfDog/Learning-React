import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
    { id: "todo-0" , name: "吃饭" , completed: true},
    { id: "todo-1" , name: "睡觉", completed: false},
    { id: "todo-2" , name: "重复，启动！", completed: false},
]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App tasks={DATA} />,);

