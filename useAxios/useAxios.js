import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  if (!opts.url) {
    return;
  }

  const refetch = () => {
    setState({
      loading: true,
      error: null,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState((currentState) => ({
          loading: false,
          error: null,
          data,
        }));
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
