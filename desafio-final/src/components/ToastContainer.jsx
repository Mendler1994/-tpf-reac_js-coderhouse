import Toast from "./Toast"

function ToastContainer({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
        />
      ))}
    </div>
  )
}

export default ToastContainer