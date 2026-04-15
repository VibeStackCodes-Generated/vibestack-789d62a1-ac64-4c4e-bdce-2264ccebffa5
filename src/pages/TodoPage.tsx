import { useState } from 'react';
import { TodoHeader } from '../components/TodoHeader';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { TodoFilters } from '../components/TodoFilters';
import { TodoStats } from '../components/TodoStats';
import type { Todo, FilterType } from '../types/todo';

const initialTodos: Todo[] = [
  { id: '1', text: 'Review pull request for authentication module', completed: true, createdAt: new Date('2024-01-15T09:00:00'), priority: 'high' },
  { id: '2', text: 'Write unit tests for payment service', completed: false, createdAt: new Date('2024-01-15T10:30:00'), priority: 'high' },
  { id: '3', text: 'Update project documentation', completed: false, createdAt: new Date('2024-01-15T11:00:00'), priority: 'medium' },
  { id: '4', text: 'Schedule team standup for next sprint', completed: false, createdAt: new Date('2024-01-15T14:00:00'), priority: 'low' },
  { id: '5', text: 'Fix CSS layout bug on dashboard', completed: true, createdAt: new Date('2024-01-14T16:00:00'), priority: 'medium' },
];

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (text: string, priority: Todo['priority']) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
      priority,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <TodoHeader />
        <TodoStats todos={todos} />
        <TodoInput onAdd={addTodo} />
        <TodoFilters
          filter={filter}
          onFilterChange={setFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearCompleted={clearCompleted}
          completedCount={todos.filter((t) => t.completed).length}
        />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}
