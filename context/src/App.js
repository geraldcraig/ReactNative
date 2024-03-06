import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Messages</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
