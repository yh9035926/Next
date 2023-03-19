import { useCallback } from "react";
import { useState } from "react";
const useInput = () => {
  const [value, setvalue] = useState();
  const handler = useCallback((e) => {
    setvalue(e.target.value);
  }, []);

  return [value, handler];
};

export default useInput;
