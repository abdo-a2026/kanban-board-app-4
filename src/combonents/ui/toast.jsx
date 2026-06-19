import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideToastAction } from "../../redux/uiSlice";

function Toast() {
  const dispatch = useDispatch();
  const { show, message, type } = useSelector((state) => state.notics.toast);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideToastAction());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, dispatch]);

  if (!show) return null;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div
        className={`flex items-center gap-3 px-6 py-3 rounded-lg shadow-lg text-white border border-white/10
        ${type === "success" ? "bg-[#635fc7]" : "bg-[#ea5555]"}`}
      >
        <span>{type === "success" ? "/" : "X"}</span>
        <p className="font-medium text-sm">{message}</p>
      </div>
    </div>
  );
}

export default Toast;
