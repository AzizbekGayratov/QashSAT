function ErrorState({ title = "Something went wrong", description = "Please try again later." }) {
  return <div className="ui-state ui-state-error"><span className="ui-state-icon">!</span><h2>{title}</h2><p>{description}</p></div>;
}

export default ErrorState;
