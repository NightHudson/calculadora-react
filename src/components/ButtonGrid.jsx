const buttons = [
    { label: "C", action: "clear", className: "btn-clear" },
    { icon: "backspace", action: "backspace", className: "btn-operation" },
    { label: "%", action: "percent", className: "btn-operation" },
    { label: "÷", operation: "/" },
  
    { label: "7", number: "7" },
    { label: "8", number: "8" },
    { label: "9", number: "9" },
    { label: "×", operation: "*" },
  
    { label: "4", number: "4" },
    { label: "5", number: "5" },
    { label: "6", number: "6" },
    { label: "−", operation: "-" },
  
    { label: "1", number: "1" },
    { label: "2", number: "2" },
    { label: "3", number: "3" },
    { label: "+", operation: "+" },
  
    { label: "√", action: "sqrt" },
    { label: "0", number: "0" },
    { label: ".", number: "." },
    { label: "=", action: "calculate", className: "btn-equals" },
  ]
  
  function ButtonGrid({ onDigit, onOperation, onAction }) {
    return (
      <div className="calculator-buttons">
        {buttons.map((btn, idx) => {
          const { label, icon, number, operation, action, className } = btn
          const commonProps = {
            key: idx,
            className: `btn ${className || (operation ? "btn-operation" : "")}`,
            onClick: () => {
              if (number !== undefined) onDigit(number)
              else if (operation) onOperation(operation)
              else if (action) onAction(action)
            },
          }
  
          return (
            <button {...commonProps} key={idx}>
              {icon ? <span className="material-icons">{icon}</span> : label}
            </button>
          )
        })}
      </div>
    )
  }
  
  export default ButtonGrid
  