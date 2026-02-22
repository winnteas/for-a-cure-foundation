import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorised: React.FC = () => {
  return (
    <div>
      <h1>You are not authorised to view this page</h1>
      <Link to="/admin/login">Go to Login</Link>
    </div>
  );
};

export default NotAuthorised;