import { FilterType } from '../types/todo';

interface FilterTabsProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: { all: number; active: number; completed: number };
}

const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
];

export default function FilterTabs({ filter, onFilterChange, counts }: FilterTabsProps) {
  return (
    <div
      className="flex gap-1 p-1 rounded-[10px] mb-4"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      {filters.map(({ key, label }) => {
        const isActive = filter === key;
        const count = counts[key];
        return (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-smooth"
            style={{
              backgroundColor: isActive ? 'var(--accent)' : 'transparent',
              color: isActive ? '#fff' : 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {label}
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold"
              style={{
                backgroundColor: isActive
                  ? 'rgba(255,255,255,0.2)'
                  : 'rgba(139, 138, 155, 0.15)',
                color: isActive ? '#fff' : 'var(--text-muted)',
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
