type StatCardProps = {
  title: string;
  value: number;
  label: string;
  labelClassName: string;
};

export default function StatCard({
  title,
  value,
  label,
  labelClassName,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <div className="mt-3 flex items-end justify-between">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          {value}
        </h2>

        <span
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${labelClassName}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}