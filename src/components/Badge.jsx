function Badge({ children, tone = "green" }) {
  return <span className={`ui-badge ui-badge-${tone}`}>{children}</span>;
}

export default Badge;
