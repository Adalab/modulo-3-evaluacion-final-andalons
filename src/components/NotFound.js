import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <section className="error-section">
      <p>Oops! This URL does not exist.</p>
      <Link to="/">Go back to our main website</Link>
    </section>
  );
};

export default NotFound;
