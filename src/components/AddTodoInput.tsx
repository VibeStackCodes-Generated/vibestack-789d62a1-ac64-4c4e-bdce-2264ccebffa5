import { useState, useRef } from 'react';

interface AddTodoInputProps {
  onAdd: (text: string) => void;
}

export default function AddTodoInput({ onAdd }: AddTodoInputProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (value.trim()) {
      onAdd(value);
      setValue('');
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-2 mb-5">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 rounded-[10px] text-sm focus-glow transition-smooth"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
      />
      <button
        onClick={handleSubmit}
        disabled={!value.trim()}
        className="px-4 py-3 rounded-[10px] text-sm font-medium transition-smooth flex items-center gap-1.5"
        style={{
          backgroundColor: value.trim() ? 'var(--accent)' : 'var(--surface)',
          color: value.trim() ? '#fff' : 'var(--text-muted)',
          border: value.trim() ? 'none' : '1px solid var(--border)',
          cursor: value.trim() ? 'pointer' : 'not-allowed',
        }}
        onMouseEnter={(e) => {
          if (value.trim()) {
            e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
          }
        }}
        onMouseLeave={(e) => {
          if (value.trim()) {
            e.currentTarget.style.backgroundColor = 'var(--accent)';
          }
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        Add
      </button>
    </div>
  );
}
