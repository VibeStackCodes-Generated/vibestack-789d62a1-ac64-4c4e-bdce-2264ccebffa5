import { CheckCircle2, Circle, TrendingUp, Zap } from 'lucide-react';
import type { Todo } from '../types/todo';

interface StatsBarProps {
  todos: Todo[];
}

export default function StatsBar({ todos }: StatsBarProps) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    { label: 'Total Tasks', value: total, icon: Zap, color: 'text-primary' },
    { label: 'Active', value: active, icon: Circle, color: 'text-amber-500' },
    { label: 'Completed', value: completed, icon: CheckCircle2, color: 'text-emerald-500' },
    { label: 'Completion', value: `${completionRate}%`, icon: TrendingUp, color: 'text-blue-500' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border bg-card p-4 flex items-center gap-3"
        >
          <div className={`rounded-lg bg-secondary p-2 ${stat.color}`}>
            <stat.icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            <p className="text-lg font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
