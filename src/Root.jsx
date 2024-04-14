import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Root() {
    const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return null; 
}
export default Root
