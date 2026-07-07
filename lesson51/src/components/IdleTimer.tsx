import { useIdleTimer } from "react-idle-timer";
import { toast } from "react-toastify";

function IdleTimer() {
  useIdleTimer({
    timeout: 1000 * 10,
    throttle: 500,
    onIdle: () => {
      toast.warning("You have been inactive for 10 seconds.");
    },
    onActive: () => {
      toast.info("Welcome back!");
    },
  });

  return null;
}

export default IdleTimer;
