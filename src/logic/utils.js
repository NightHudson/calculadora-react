export function getOperatorSymbol(operator) {
    switch (operator) {
      case "+":
        return "+"
      case "-":
        return "−"
      case "*":
        return "×"
      case "/":
        return "÷"
      default:
        return operator
    }
  }
  
  export function formatNumber(number) {
    // Verifica se é um número
    if (isNaN(number)) return "Erro"
  
    // Converte para string e verifica se é um número inteiro
    const numStr = number.toString()
    if (Number.isInteger(number)) {
      return numStr
    }
  
    // Para números decimais, limita a 8 casas decimais para evitar problemas de precisão
    const parts = numStr.split(".")
    if (parts.length === 2) {
      // Limita a 8 casas decimais e remove zeros à direita
      const decimalPart = parts[1].substring(0, 8).replace(/0+$/, "")
      return decimalPart.length > 0 ? `${parts[0]}.${decimalPart}` : parts[0]
    }
  
    return numStr
  }
  