import {
  createContext,
  useState
} from "react"

export const ToastContext =
  createContext()

export function ToastProvider({
  children
}) {

  const [toasts, setToasts] =
    useState([])

  const showToast = (message) => {

    const newToast = {
      id: Date.now(),
      message
    }

    setToasts(prev => [
      ...prev,
      newToast
    ])

    setTimeout(() => {
      setToasts(prev =>
        prev.filter(
          toast =>
            toast.id !== newToast.id
        )
      )
    }, 2000)
  }

  return (
    <ToastContext.Provider
      value={{ showToast }}
    >
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="toast"
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}