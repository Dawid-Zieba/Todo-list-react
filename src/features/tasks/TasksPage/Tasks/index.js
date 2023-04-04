import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { useLocation, Link } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";


const Tasks = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const { tasks, hideDone } = useSelector(state =>selectTasksByQuery(state, query));
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task=>(
                <Item
                key={task.id}
                hidden={task.done && hideDone}
                
                >
                    <Button 
                    toggleDone
                    onClick= {() => dispatch(toggleTaskDone(task.id))}
                    >
                      {task.done ? "✔" : ""}
                      </Button>
                      <Content done ={task.done}>
                     <Link to={`/zadania${task.id}`}>{task.content}</Link>
                      </Content>
                      
                      <Button 
                      remove
                      onClick={() => dispatch(removeTask(task.id))}
                      >
                      🗑
                      </Button>
                
                </Item>
            ))}
        </List>
    )
};

export default Tasks;