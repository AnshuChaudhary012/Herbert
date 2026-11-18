import { Link } from "react-router";

export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-[5px] border border-brand bg-brand px-5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-paper hover:text-brand focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ink button button--${variant} ${className}`.trim();
  if (!href) return <button className={classes} {...props}>{children}</button>;
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link className={classes} to={href} {...props}>{children}</Link>;
  }
  return <a className={classes} href={href} {...props}>{children}</a>;
}
