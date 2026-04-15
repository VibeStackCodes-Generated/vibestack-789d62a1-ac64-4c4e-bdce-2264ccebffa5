import { useTodos } from '../hooks/useTodos';
import TodoCard from '../components/TodoCard';
import { CheckCircle2, PartyPopper } from 'lucide-react';

export default function CompletedPage() {
  const { completedTodos, toggleTodo, deleteTodo, editTodo } = useTodos();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Completed Tasks</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {completedTodos.length} task{completedTodos.length !== 1 ? 's' : ''} completed
        </p>
      </div>

      <div className="space-y-3">
        {completedTodos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-secondary p-4 mb-4">
              <CheckCircle2 className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">No completed tasks yet</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Complete some tasks and they will appear here.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <PartyPopper className="h-5 w-5 text-emerald-600" />
              <p className="text-sm font-medium text-emerald-700">
                Great job! You've completed {completedTodos.length} task{completedTodos.length !== 1 ? 's' : ''}.
              </p>
            </div>
            {completedTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
