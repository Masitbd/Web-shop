import { useEffect, useState } from 'react';
type StatusType = 'idle' | 'pending' | 'success' | 'error';

const useAPI = <T>(asyncService: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    setError(null);
    asyncService()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return {
    data,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    error
  };
};

export default useAPI;
