import { useState, useMemo } from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoCard from '../components/TodoCard';
import AddTodoDialog from '../components/AddTodoDialog';
import StatsBar from '../components/StatsBar';
import FilterBar from '../components/FilterBar';
import { ListTodo } from 'lucide-react';

const priorityOrder = { high: 0, medium: 1, low: 2 };

export default function HomePage() {
  const { todos, activeTodos, addTodo, toggleTodo, deleteTodo, editTodo } = useTodos();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSorted = useMemo(() => {
    let result = filter === 'all' ? activeTodos : activeTodos.filter((t) => t.priority === filter);

    switch (sortBy) {
      case 'oldest':
        result = [...result].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case 'priority':
        result = [...result].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        break;
      case 'alpha':
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        result = [...result].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [activeTodos, filter, sortBy]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Active Tasks</h1>
          <p className="text-sm text-muted-foreground mt-1">
            You have {activeTodos.length} task{activeTodos.length !== 1 ? 's' : ''} to complete
          </p>
        </div>
        <AddTodoDialog onAdd={addTodo} />
      </div>

      <StatsBar todos={todos} />

      <FilterBar filter={filter} onFilterChange={setFilter} sortBy={sortBy} onSortChange={setSortBy} />

      <div className="space-y-3">
        {filteredAndSorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-secondary p-4 mb-4">
              <ListTodo className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">No tasks found</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {filter !== 'all'
                ? 'Try changing the filter to see more tasks.'
                : 'Create your first task to get started!'}
            </p>
          </div>
        ) : (
          filteredAndSorted.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}
