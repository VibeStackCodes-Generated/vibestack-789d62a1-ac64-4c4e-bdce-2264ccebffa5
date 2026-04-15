import { FilterType } from '../types/todo';

interface EmptyStateProps {
  filter: FilterType;
}

const messages: Record<FilterType, { icon: string; title: string; subtitle: string }> = {
  all: {
    icon: '📝',
    title: 'No tasks yet',
    subtitle: 'Add your first task to get started',
  },
  active: {
    icon: '🎉',
    title: 'All caught up!',
    subtitle: 'No active tasks remaining',
  },
  completed: {
    icon: '⏳',
    title: 'Nothing completed yet',
    subtitle: 'Complete a task to see it here',
  },
};

export default function EmptyState({ filter }: EmptyStateProps) {
  const { icon, title, subtitle } = messages[filter];

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <span className="text-4xl mb-4">{icon}</span>
      <h3
        className="text-sm font-medium mb-1"
        style={{ color: 'var(--text-secondary)' }}
      >
        {title}
      </h3>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
        {subtitle}
      </p>
    </div>
  );
}
