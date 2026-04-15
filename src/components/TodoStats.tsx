import { Card } from './ui/card';
import { CheckCircle2, Circle, ListTodo } from 'lucide-react';
import type { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    { label: 'Total', value: total, icon: ListTodo, color: 'text-primary' },
    { label: 'Active', value: active, icon: Circle, color: 'text-amber-500' },
    { label: 'Done', value: completed, icon: CheckCircle2, color: 'text-emerald-500' },
  ];

  return (
    <div className="mb-6 grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="flex flex-col items-center gap-1 border-border/50 p-3 shadow-sm"
        >
          <stat.icon className={`h-5 w-5 ${stat.color}`} />
          <span className="text-2xl font-bold text-foreground">{stat.value}</span>
          <span className="text-[11px] font-medium text-muted-foreground">{stat.label}</span>
        </Card>
      ))}
      <div className="col-span-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
          <span>Progress</span>
          <span className="font-semibold text-foreground">{percentage}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
