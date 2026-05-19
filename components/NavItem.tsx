type NavItemProps = {
  href?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function NavItem({ href, children, onClick }: NavItemProps) {
  const inner = (
    <>
      <span className="nav-item__label">{children}</span>
      <span className="nav-item__divider" aria-hidden />
    </>
  )

  if (href) {
    return <a href={href} className="nav-item">{inner}</a>
  }

  return (
    <button className="nav-item" onClick={onClick}>
      {inner}
    </button>
  )
}
