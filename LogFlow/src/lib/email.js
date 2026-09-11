// Envio de e-mail via EmailJS (opcional).
//
// Este projeto NUNCA deve conter senhas ou tokens de e-mail direto no código.
// As credenciais do EmailJS são públicas por natureza (feitas para rodar no
// navegador) mas ainda assim ficam em variáveis de ambiente, para que possam
// ser trocadas sem alterar o código-fonte. Veja o guia de configuração no
// README para o passo a passo completo.
//
// Enquanto as variáveis abaixo não forem configuradas, o botão "Solicitar por
// e-mail" do formulário usa um link mailto: como alternativa segura e
// funcional — nenhuma configuração extra é necessária para isso.

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

/**
 * Envia os dados do orçamento via EmailJS.
 * Só é chamada quando as três variáveis de ambiente estão configuradas;
 * caso contrário o formulário recorre ao mailto: automaticamente.
 */
export async function sendBudgetEmail(data) {
  const { default: emailjs } = await import('@emailjs/browser')

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      project_type: data.projectType,
      timeline: data.timeline || 'Não informado',
      budget: data.budget || 'A combinar',
      description: data.description,
      extra: data.extra || '—',
    },
    { publicKey: PUBLIC_KEY },
  )
}