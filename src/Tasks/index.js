import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task=>(
            <li
            className={`<li className="tasks__item ${task.done && props.hideDoneTasks ? " tasks__item--hidden" : ""} `}
            >
                <button className="tasks__button tasks__button--toggleDone">
                  {task.done ? "✔" : ""}
                  </button>
                  <span className={`tasks__text ${task.done ? "tasks__text--done" : ""}`}>{task.content}</span>
                  <button className="tasks__button tasks__button--remove">
                  🗑</button>
                {task.content}
            </li>
        ))}
    </ul>
);

export default Tasks;