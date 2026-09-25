function EmptyState({ title = "Nothing here yet", description = "There is no data to display." }) {
  return <div className="ui-state"><span className="ui-state-icon">-</span><h2>{title}</h2><p>{description}</p></div>;
}

export default EmptyState;
