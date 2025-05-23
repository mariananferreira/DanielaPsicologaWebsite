import Image from 'next/image'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Container } from '@/components/Container'
import SM from '@/images/cont.jpeg'

export function Contacts() {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
    mobile: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { from_name, reply_to, subject, message, mobile } = formData

    if (!from_name || !reply_to || !subject || !message || !mobile) {
      toast.error('Por favor, preencha todos os campos')
      return
    }

    emailjs
      .sendForm(
        'service_yv1x1pd',
        'template_0yxclri',
        e.target,
        '8qY6HCFSONqoQZK3s'
      )
      .then(() => {
        toast.success('Email enviado com sucesso!')
      })
      .catch(() => {
        toast.error('Erro ao enviar o email. Tente novamente.')
      })

    setFormData({
      from_name: '',
      reply_to: '',
      subject: '',
      message: '',
      mobile: '',
    })
  }

  return (
    <section id="Contactos" className="primaryBack py-16">
      <Container>
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

        <div className="mb-12 text-center">
          <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Aqui, começa a mudança
          </h2>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* Imagem decorativa - opcional, substituível por algo mais abstrato */}
          <div className="mx-auto max-w-md overflow-hidden rounded-xl shadow-md md:max-w-full">
            <Image
              src={SM}
              alt="Espaço terapêutico"
              className="h-auto w-full rounded-2xl object-cover object-center"
              priority
            />
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Nome</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Telemóvel</label>
                <input
                  type="text"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="reply_to"
                required
                value={formData.reply_to}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Assunto</label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
              >
                <option value="">Selecione um assunto</option>
                <option value="Agendamento Consulta">
                  Agendamento Consulta
                </option>
                <option value="Supervisão">Supervisão</option>
                <option value="Pedido formação">Pedido formação</option>
                <option value="Pedido consultoria">Pedido consultoria</option>
                <option value="Outros Assuntos">Outros Assuntos</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Mensagem</label>
              <textarea
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 px-4 py-3 shadow-sm"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-slg inline-block w-fit rounded-full border border-[#b45f42] bg-[#fff] px-4 py-2 font-medium text-[#3B3B3B] transition-colors hover:border-[#b45f42] hover:bg-[#b45f42] hover:text-white"
              >
                Enviar
              </button>
            </div>
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-600">
                Ou contacta-me diretamente via{' '}
                <a href="tel:+351918275236" className="underline">
                  +351 918 275 236
                </a>{' '}
                ou pelo Instagram:{' '}
                <a
                  href="https://www.instagram.com/danielaleal.psicologia/"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @danielaleal.psicologia
                </a>
              </p>
            </div>
          </form>
        </div>

        <ToastContainer />
      </Container>
    </section>
  )
}
