const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TASK_COMPLETION':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'EDIT_TASK':
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
      );
    default:
      return state;
  }
};

export default taskReducer;