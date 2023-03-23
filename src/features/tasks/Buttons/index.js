import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Box, BoxButtons } from "./styled";


const Buttons = () => {
    const { tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <Box>
            {tasks.length > 0 && (
                <React.Fragment>
                    <BoxButtons
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </BoxButtons>
                    <BoxButtons
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </BoxButtons>
                </React.Fragment>
    
            )}
    
        </Box>
    )
};

export default Buttons