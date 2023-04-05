import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone,fetchExampleTasks, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone } from "../../tasksSlice";
import { Box, BoxButtons } from "./styled";


const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    return (
        <Box>
            <BoxButtons onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </BoxButtons>
            {!areTasksEmpty && (
                <React.Fragment>
                    <BoxButtons
                        onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </BoxButtons>
                    <BoxButtons
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </BoxButtons>
                </React.Fragment>
    
            )}
    
        </Box>
    )
};

export default Buttons;