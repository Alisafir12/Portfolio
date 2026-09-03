export function CvLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href="/resume" className={className}>
      {children}
    </a>
  );
}
