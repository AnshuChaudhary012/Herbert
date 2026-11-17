import { Link } from "react-router";

export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const classes = `button button--${variant} ${className}`.trim();
  if (!href) return <button className={classes} {...props}>{children}</button>;
  if (href.startsWith("/") && !href.startsWith("//")) {
    return <Link className={classes} to={href} {...props}>{children}</Link>;
  }
  return <a className={classes} href={href} {...props}>{children}</a>;
}
