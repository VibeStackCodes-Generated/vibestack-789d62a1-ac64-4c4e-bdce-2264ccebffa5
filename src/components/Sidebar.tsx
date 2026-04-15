import { NavLink } from 'react-router-dom';
import { CheckCircle2, ListTodo, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { to: '/', label: 'Active Tasks', icon: ListTodo },
  { to: '/completed', label: 'Completed', icon: CheckCircle2 },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-card p-6 gap-6">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold tracking-tight">TaskFlow</span>
      </div>

      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )
            }
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-lg bg-primary/5 border border-primary/10 p-4">
        <p className="text-xs font-medium text-primary">Pro Tip</p>
        <p className="text-xs text-muted-foreground mt-1">
          Use priorities to focus on what matters most. High priority tasks appear at the top.
        </p>
      </div>
    </aside>
  );
}
