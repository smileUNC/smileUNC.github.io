import { Link } from "react-router";
import { isExternal } from "../utils/asset";

// One button for internal routes (`to`), external links (`href`) and actions (`onClick`).
//   <Button to="/team">Team</Button>
//   <Button href="https://github.com/..." variant="secondary">GitHub</Button>
//   <Button onClick={fn} variant="ghost" size="sm">Reset</Button>
// Variants: primary (default) | secondary | ghost | light.  Sizes: md (default) | sm.
export function Button({
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...rest
}) {
  const classes = [
    "btn",
    variant !== "primary" ? `btn--${variant}` : "",
    size === "sm" ? "btn--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = isExternal(href);
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
