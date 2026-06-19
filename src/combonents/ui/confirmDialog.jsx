import { useSelector, useDispatch } from "react-redux";
import { closeConfirmDialog } from "../../redux/uiSlice";
import { deleteTask } from "../../features/kanban-board/services/taskSlice";
import { showToastAction } from "../../redux/uiSlice";

function ConfirmDialog() {
  const dispatch = useDispatch();
  const { show, message, targetId } = useSelector(
    (state) => state.notics.confirmDialog
  );

  if (!show) return null;

  const handleExecute = () => {
    // 1. نفذ الأكشن الفعلي (مثل الحذف) باستخدام الـ ID المخزن بالريدكس
    dispatch(deleteTask(targetId));

    // 2. اغلق نافذة التأكيد
    dispatch(closeConfirmDialog());

    dispatch(
      showToastAction({
        message: "The task is deleted",
        type: "success",
      })
    );
    // 3. (اختياري) يمكنك إطلاق توست نجاح هنا!
  };

  return (
    <div className="fixed inset-0 bg-[#000000aa] backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#2b2c37] border border-white/10 p-6 rounded-xl w-[90%] max-w-md shadow-2xl text-center">
        {/* أيقونة تحذير كبيرة */}
        <div className="text-4xl mb-3">⚠️</div>

        <h3 className="text-white text-lg font-bold mb-2">
          Confirm the process
        </h3>
        <p className="text-gray-400 text-sm mb-6">{message}</p>

        {/* أزرار التحكم */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(closeConfirmDialog())}
            className="px-5 py-2 rounded-full text-white bg-gray-600 hover:bg-gray-500 font-medium text-sm transition"
          >
            Cancel
          </button>
          <button
            onClick={handleExecute}
            className="px-5 py-2 rounded-full text-white bg-[#ea5555] hover:bg-[#ff6b6b] font-medium text-sm transition"
          >
            Yes,sure
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
