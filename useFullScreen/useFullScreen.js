import { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();

  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    currentEl = element.current;
    if (currentEl) {
      if (currentEl.requestFullscreen) {
        currentEl.requestFullscreen();
      } else if (currentEl.mozRequestFullScreen) {
        currentEl.mozRequestFullScreen();
      } else if (currentEl.webkitRequestFullScreen) {
        currentEl.webkitRequestFullScreen();
      } else if (currentEl.msRequestFullScreen) {
        currentEl.msRequestFullScreen();
      }

      runCb(true);
    }
  };

  // 브라우저 별로 처리 필요
  const exitFull = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      runCb(false);
    }
  };

  return { element, triggerFull, exitFull };
};
