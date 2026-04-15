interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-medium"
          style={{ color: 'var(--text-secondary)' }}
        >
          Progress
        </span>
        <span
          className="text-xs font-semibold"
          style={{ color: percentage === 100 ? 'var(--success)' : 'var(--accent)' }}
        >
          {percentage}%
        </span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--border)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-500 ease-out progress-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: percentage === 100 ? 'var(--success)' : 'var(--accent)',
          }}
        />
      </div>
    </div>
  );
}
