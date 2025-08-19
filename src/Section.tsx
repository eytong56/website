function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12 border-t border-t-gray-700 border-t-2 pt-12 last:pb-24">
      <h2 className="text-2xl font-bold text-emerald-700 mb-6">{title}</h2>
      <div className="grid grid-cols-4 gap-12">{children}</div>
    </div>
  );
}

export default Section;
