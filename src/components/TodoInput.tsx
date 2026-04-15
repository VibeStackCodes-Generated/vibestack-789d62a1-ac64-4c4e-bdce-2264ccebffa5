import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import type { Todo } from '../types/todo';

interface TodoInputProps {
  onAdd: (text: string, priority: Todo['priority']) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim(), priority);
      setText('');
    }
  };

  const priorityOptions: { value: Todo['priority']; label: string; color: string }[] = [
    { value: 'low', label: 'Low', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { value: 'medium', label: 'Med', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    { value: 'high', label: 'High', color: 'bg-red-100 text-red-700 border-red-200' },
  ];

  return (
    <Card className="mb-6 p-4 shadow-sm border-border/50">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border-border/50 bg-background"
          />
          <Button type="submit" disabled={!text.trim()} className="gap-1.5 shadow-sm">
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">Priority:</span>
          {priorityOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setPriority(opt.value)}
              className={`rounded-full border px-3 py-0.5 text-xs font-medium transition-all ${
                priority === opt.value
                  ? `${opt.color} ring-2 ring-offset-1 ring-current/20`
                  : 'border-border bg-muted/50 text-muted-foreground hover:bg-muted'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </form>
    </Card>
  );
}
