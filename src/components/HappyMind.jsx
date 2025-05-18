import Image from 'next/image'
import { Container } from '@/components/Container'
import {
  Heart,
  Users,
  Brain,
  BarChart,
  Home,
  Leaf,
  MessageCircleHeart,
  Target,
} from 'lucide-react'

import happyMindImage from '@/images/happy.png' // substitui pelo teu caminho real

export default function HappyMindLabsSection() {
  return (
    <section id="happy-mind-labs" className="primaryBack py-12">
      <Container>
        <hr className="mx-auto mb-24 w-3/4 border-t-2 border-[#e8cfc2]" />

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="sectionTitles text-3xl tracking-tight sm:text-3xl">
            Happy Mind Labs
          </h2>
          <p className="text text-lg">
            Bem-estar, Diversidade e Inclusão nas Organizações
          </p>
        </div>

        {/* Intro com imagem */}
        <div className="mb-16 grid items-center gap-10 md:grid-cols-2">
          {/* Texto introdutório */}
          <div className="text space-y-5 text-gray-800">
            <p>
              Happy Mind Labs é um programa de consultoria, formação e
              intervenção em Diversidade, Equidade, Inclusão e Bem-estar
              Organizacional (DEI+B), criado para empresas que cuidam
              verdadeiramente das suas pessoas.
            </p>
            <p>
              Composto por 4 pilares modulares, pode ser contratado como
              programa completo ou por módulos — sempre adaptado à cultura,
              dimensão e necessidades da organização.
            </p>
            <p className="text-sm text-gray-600">
              Personalizável, escalável e com impacto real.
            </p>
          </div>

          {/* Imagem */}
          <div className="flex justify-center">
            <Image
              src={happyMindImage}
              alt="Happy Mind Labs - DEI e Bem-estar"
              className="w-full max-w-xs object-cover"
              priority
            />
          </div>
        </div>

        {/* 4 Pilares */}
        <div className="mb-20">
          <h3 className="sectionSubTitles mb-6 text-2xl">
            Os 4 Pilares do Programa:
          </h3>
          <div className=" grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Mental Health Matters',
                icon: Brain,
                description:
                  'Protocolo de consultas psicológicas, ecoconsultas e programas de grupo (Mindfulness, burnout, regulação emocional).',
              },
              {
                title: 'Work–Family Balance',
                icon: Home,
                description:
                  'Apoio à conciliação: consultas para filhos/as, atividades familiares, literacia emergente e parentalidade.',
              },
              {
                title: 'Diversity is the New Black',
                icon: Users,
                description:
                  'Consultoria e formação em DEI, comunicação, stress, conflitos, planos internos e team building.',
              },
              {
                title: 'Tell Me About Outcomes',
                icon: BarChart,
                description:
                  'Medição de impacto, indicadores, selo interno de diversidade e apoio à autonomia organizacional.',
              },
            ].map(({ title, icon: Icon, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <Icon className="mt-1 shrink-0 text-[#7c3e2f]" size={28} />
                <div>
                  <p className="font-semibold text-[#7c3e2f]">{title}</p>
                  <p className="text mt-1 text-sm text-gray-700">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Destinatários e Benefícios */}
        <div className="mb-20 grid gap-12 md:grid-cols-2">
          {/* Para quem é */}
          <div>
            <h4 className="sectionSubTitles mb-6 text-2xl">
              Para quem é?
            </h4>
            <ul className="text space-y-2 text-sm text-gray-700">
              <li>• Empresas com políticas de ESG e responsabilidade social</li>
              <li>• Equipas de RH, DEI ou bem-estar organizacional</li>
              <li>
                • Organizações que desejam ambientes mais humanos e inclusivos
              </li>
            </ul>
          </div>

          {/* Benefícios esperados */}
          <div>
            <h4 className="sectionSubTitles mb-6 text-2xl">
              Benefícios esperados:
            </h4>
            <ul className="text space-y-2 text-sm text-gray-700">
              <li>• Aumento da retenção de talento e bem-estar geral</li>
              <li>• Redução de absentismo e burnout</li>

              <li>• Fortalecimento da marca empregadora consciente</li>
              <li>• Reforço das políticas internas de DEI</li>
              <li>
                • Melhoria do clima organizacional e da comunicação interna
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-[#f3e7e1] px-6 py-12 text-center shadow-xl md:px-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('/textures/soft-pattern.png')] bg-cover bg-center opacity-10"></div>

          <h2 className="sectionSubTitles font-extraboldmd:text-4xl mb-4 text-3xl">
            Vamos criar ambientes de trabalho onde ninguém precisa encolher-se
            para caber.
          </h2>
          <p className="text mb-8 text-lg text-gray-700">
            Quer desenhar um plano de DEI e saúde mental organizacional feito à
            medida da sua empresa? Marque uma reunião de diagnóstico sem
            compromisso.
          </p>
          <div className="flex justify-center">
            <a
              href="#Contactos"
              className="inline-block w-fit rounded-full border border-[#b45f42] bg-[#fff] px-4 py-2 text-slg font-medium text-[#3B3B3B] transition-colors hover:border-[#b45f42] hover:bg-[#b45f42] hover:text-white"
            >
              Agendar Diagnóstico
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
