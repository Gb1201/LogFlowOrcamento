import { CONTACT } from '../data/content'

/**
 * Monta uma mensagem organizada com os dados do formulário e retorna
 * a URL do WhatsApp pronta para abrir em uma nova aba.
 */
export function buildWhatsappUrl(data) {
  const lines = [
    'Olá! Gostaria de solicitar um orçamento para a criação de um site.',
    '',
    `Nome: ${data.name}`,
    `Tipo de projeto: ${data.projectType}`,
    `Prazo desejado: ${data.timeline || 'Não informado'}`,
    `Faixa de investimento: ${data.budget || 'A combinar'}`,
    '',
    'Descrição do projeto:',
    data.description,
  ]

  if (data.extra?.trim()) {
    lines.push('', 'Informações adicionais:', data.extra.trim())
  }

  lines.push('', `Contato: ${data.email}`)

  const message = lines.join('\n')
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Monta o assunto e corpo de um e-mail (mailto) com os dados do formulário.
 */
export function buildMailtoUrl(data) {
  const subject = `Orçamento de site — ${data.name}`

  const bodyLines = [
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    `WhatsApp: ${data.phone}`,
    `Tipo de projeto: ${data.projectType}`,
    `Prazo desejado: ${data.timeline || 'Não informado'}`,
    `Faixa de investimento: ${data.budget || 'A combinar'}`,
    '',
    'Descrição do projeto:',
    data.description,
  ]

  if (data.extra?.trim()) {
    bodyLines.push('', 'Informações adicionais:', data.extra.trim())
  }

  const body = bodyLines.join('\n')
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}