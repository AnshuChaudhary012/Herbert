import { Link } from "react-router";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const variantClasses = {
    primary:
      "border-brand bg-brand text-white hover:bg-paper hover:text-brand",
    "outline-light":
      "border-white bg-transparent text-white hover:bg-white hover:text-brand",
    light:
      "border-white bg-white text-brand hover:bg-peach hover:text-[#e56d3b]",
  };
  const classes =
    `inline-flex min-h-11 items-center justify-center rounded-[5px] border px-5 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ink ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim();
  if (!href)
    return (
      <button className={classes} {...props}>
        {children}
      </button>
    );
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link className={classes} to={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
