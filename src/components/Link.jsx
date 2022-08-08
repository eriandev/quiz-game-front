import { Link as WouterLink } from 'wouter'

function Link ({ children, href, className, external = false }) {
  return external
    ? (
      <a className={className} href={href}>
        {children}
      </a>
      )
    : (
      <WouterLink href={href}>
        <a className={className}>{children}</a>
      </WouterLink>
      )
}

export default Link
