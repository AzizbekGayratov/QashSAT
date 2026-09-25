function Loading({ label = "Loading" }) {
  return <div className="ui-status" role="status"><span className="ui-spinner" />{label}</div>;
}

export default Loading;
