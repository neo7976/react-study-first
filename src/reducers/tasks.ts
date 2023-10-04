import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER} from '../constants';
import {ITask, TaskActionTypes} from "../types";
import {load} from "redux-localstorage-simple";

type stateTask = ITask[];

const savedTasks: any = load({namespace: 'todo-list'});

const initialState: stateTask = (savedTasks && savedTasks.tasks) ? savedTasks.tasks : [];

const tasks = (state = initialState, action: TaskActionTypes):stateTask => {

    switch (action.type) {
        case ADD_TASK :
            return [
                ...state, {
                    id : action.payload.id,
                    text : action.payload.text,
                    isCompleted : action.payload.isCompleted,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== action.payload.id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === action.payload.id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        default:
            return state;
    }
}

export default tasks;
