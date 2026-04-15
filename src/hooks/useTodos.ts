import { useState, useEffect, useCallback } from 'react';
import type { Todo } from '../types/todo';

const STORAGE_KEY = 'taskflow-todos';

const defaultTodos: Todo[] = [
  {
    id: '1',
    title: 'Review quarterly report',
    description: 'Go through the Q4 financial report and prepare summary notes for the team meeting.',
    completed: false,
    priority: 'high',
    category: 'Work',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, avocados, chicken breast, and fresh vegetables.',
    completed: false,
    priority: 'medium',
    category: 'Personal',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '3',
    title: 'Schedule dentist appointment',
    description: 'Call Dr. Martinez office for a routine cleaning. Preferred time: morning.',
    completed: false,
    priority: 'low',
    category: 'Health',
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: '4',
    title: 'Update project dependencies',
    description: 'Run audit on all npm packages and update to latest stable versions.',
    completed: true,
    priority: 'medium',
    category: 'Work',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    completedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '5',
    title: 'Plan weekend hiking trip',
    description: 'Research trails near Lake Tahoe, check weather forecast, and pack gear.',
    completed: true,
    priority: 'low',
    category: 'Personal',
    createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    completedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
];

function loadTodos(): Todo[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultTodos;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback(
    (todo: Omit<Todo, 'id' | 'completed' | 'createdAt'>) => {
      const newTodo: Todo = {
        ...todo,
        id: crypto.randomUUID(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos((prev) => [newTodo, ...prev]);
    },
    []
  );

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              completedAt: !t.completed ? new Date().toISOString() : undefined,
            }
          : t
      )
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTodo = useCallback((id: string, updates: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  }, []);

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  return { todos, activeTodos, completedTodos, addTodo, toggleTodo, deleteTodo, editTodo };
}
