import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<'loading' | 'yes' | 'no'>('loading');

  useEffect(() => {
    fetch('https://for-a-cure-foundation-backend.onrender.com/verify', { credentials: 'include' })
      .then((res) => setAuth(res.ok ? 'yes' : 'no'))
      .catch(() => setAuth('no'));
  }, []);

  if (auth === 'loading') return null; // or a spinner
  if (auth === 'no') return <Navigate to="/not-authorised" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;