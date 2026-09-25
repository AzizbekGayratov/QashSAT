import { Link } from "react-router-dom";

function NotFound() {
  return <main className="container page-section page-shell"><p className="section-label">404</p><h1>Page not found.</h1><p className="lead">The page you requested does not exist.</p><Link className="ui-button ui-button-primary" to="/">Return home</Link></main>;
}

export default NotFound;
