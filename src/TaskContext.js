import React, { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTaskCompletion, deleteTask } from './actions/taskActions';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  return (
    <TaskContext.Provider value={{}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return {
    tasks,
    addTask: (task) => dispatch(addTask(task)),
    toggleTaskCompletion: (id) => dispatch(toggleTaskCompletion(id)),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};
