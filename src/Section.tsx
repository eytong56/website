function Section({
  title,
  id,
  children,
}: {
  title?: string;
  id?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-12 border-t-1 border-t-gray-700 pt-12 last:pb-24" id={id}>
      {title && <h2 className="text-2xl font-bold text-emerald-700 mb-6">{title}</h2>}
      <div className="grid grid-cols-4 gap-5 lg:gap-12">{children}</div>
    </div>
  );
}

export default Section;
