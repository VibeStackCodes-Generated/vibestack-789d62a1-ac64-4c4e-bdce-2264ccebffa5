import { CheckCircle2 } from 'lucide-react';

export function TodoHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="mb-3 flex items-center justify-center gap-3">
        <div className="rounded-xl bg-primary p-2.5 shadow-lg shadow-primary/25">
          <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          TaskFlow
        </h1>
      </div>
      <p className="text-muted-foreground">
        Stay organized, stay productive. Manage your tasks with ease.
      </p>
    </div>
  );
}
