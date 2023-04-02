import { debounce, call, put, delay, } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    console.log("Zaczynam pracę");
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* watchFetchExampleTasks() {
    yield debounce(2000,fetchExampleTasks.type, fetchExampleTasksHandler);
}