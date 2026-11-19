export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-[calc(100%-48px)] max-w-[1328px] max-lg:w-[calc(100%-40px)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
