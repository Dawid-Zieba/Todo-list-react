import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";
import { Box, BoxButtons } from "./styled";


const Buttons = ({ setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
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
                        onClick={setAllDone}
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