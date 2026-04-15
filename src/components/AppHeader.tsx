interface AppHeaderProps {
  totalCount: number;
}

export default function AppHeader({ totalCount }: AppHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
          Todos
        </h1>
      </div>
      {totalCount > 0 && (
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: 'rgba(124, 106, 247, 0.15)',
            color: 'var(--accent)',
          }}
        >
          {totalCount} task{totalCount !== 1 ? 's' : ''}
        </span>
      )}
    </div>
  );
}
