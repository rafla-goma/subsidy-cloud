// src/hooks/useCurrentRoute.js
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useCurrentRoute = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return currentRoute;
};

export default useCurrentRoute;