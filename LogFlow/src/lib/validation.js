const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_DIGITS_PATTERN = /^\d{10,11}$/

export function validateStep1(data) {
  const errors = {}

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Informe seu nome completo.'
  }

  if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'Informe um e-mail válido.'
  }

  const phoneDigits = data.phone.replace(/\D/g, '')
  if (!PHONE_DIGITS_PATTERN.test(phoneDigits)) {
    errors.phone = 'Informe um WhatsApp válido, com DDD.'
  }

  return errors
}

export function validateStep2(data) {
  const errors = {}

  if (!data.projectType) {
    errors.projectType = 'Selecione o tipo de projeto.'
  }

  if (!data.description.trim() || data.description.trim().length < 20) {
    errors.description = 'Descreva o projeto com um pouco mais de detalhe (mínimo 20 caracteres).'
  }

  return errors
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0
}