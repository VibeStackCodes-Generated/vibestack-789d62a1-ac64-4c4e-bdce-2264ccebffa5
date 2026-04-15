interface FooterStatsProps {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export default function FooterStats({
  activeCount,
  completedCount,
  onClearCompleted,
}: FooterStatsProps) {
  return (
    <div
      className="flex items-center justify-between mt-4 pt-4"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex items-center gap-4">
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            {activeCount}
          </span>{' '}
          remaining
        </span>
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          <span className="font-semibold" style={{ color: 'var(--success)' }}>
            {completedCount}
          </span>{' '}
          completed
        </span>
      </div>
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="text-xs font-medium px-3 py-1.5 rounded-lg transition-smooth"
          style={{
            color: 'var(--text-muted)',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--danger)';
            e.currentTarget.style.backgroundColor = 'rgba(248, 113, 113, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
