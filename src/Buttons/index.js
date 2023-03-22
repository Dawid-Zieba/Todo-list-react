import React from "react";
import { Box, BoxButtons } from "./styled";


const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <Box>
        {tasks.length > 0 && (
            <React.Fragment>
                <BoxButtons
                    onClick={toggleHideDone}>
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
);

export default Buttons