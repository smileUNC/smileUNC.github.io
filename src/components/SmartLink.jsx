import { Link } from "react-router";
import { isExternal } from "../utils/asset";

// Renders a router <Link> for internal paths and an <a target="_blank"> for
// external URLs, so data files can use either without caring which is which.
export default function SmartLink({ to, href, children, ...rest }) {
  const target = to || href;
  if (!target) return <span {...rest}>{children}</span>;
  if (isExternal(target)) {
    return (
      <a href={target} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={target} {...rest}>
      {children}
    </Link>
  );
}
