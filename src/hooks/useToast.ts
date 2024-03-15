import { useCallback } from "react";
import { toast } from "react-toastify";

const useToast = () => {
  const showSuccess = useCallback((msg: string) => {
    toast.success(msg, {});
  }, []);

  const showError = useCallback((msg: string) => {
    toast.error(msg, {});
  }, []);

  const showInfo = useCallback((msg: string) => {
    toast.info(msg, {});
  }, []);

  const showWarning = useCallback((msg: string) => {
    toast.warning(msg, {});
  }, []);

  const showDefault = useCallback((msg: string) => {
    toast(msg, {});
  }, []);

  return {
    showDefault,
    showError,
    showInfo,
    showSuccess,
    showWarning,
  };
};

export default useToast;
