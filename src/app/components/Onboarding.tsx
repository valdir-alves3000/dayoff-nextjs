"use client"
import React, { useState } from 'react';
import { FaArrowRight, FaCalendar, FaClock, FaCheck, FaArrowLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation';

export const Onboarding = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Bem-vindo ao Day Off",
      description: "Gerencie sua escala de folgas de forma simples e intuitiva.",
      icon: <FaCalendar className="w-16 h-16 text-blue-500 mb-4" />,
      details: [
        "Visualize seu calendário de trabalho",
        "Acompanhe suas folgas automaticamente",
        "Suporte para múltiplos tipos de escala"
      ]
    },
    {
      title: "Escolha sua Escala",
      description: "O Day Off suporta diversas escalas de trabalho para atender às suas necessidades.",
      icon: <FaClock className="w-16 h-16 text-blue-500 mb-4" />,
      details: [
        "6x2: Trabalho 6 dias, folga 2 dias.",
        "5x1: Trabalho 5 dias, folga 1 dia.",
        "4x2: Trabalho 4 dias, folga 2 dias.",
        "12x36: Trabalho 12 horas, folga 36 horas.",
        "14x14: Trabalho 14 dias, folga 14 dias.",
        "18x12: Trabalho 18 dias, folga 12 dias.",
        "24x48: Trabalho 24 horas, folga 48 horas.",
        "6x1: Trabalho 6 dias, folga 1 (com folgas alternadas aos sábados).",
        "5x3x1: Trabalho 5 dias, folga 1 e na semana em que folga na segunda-feira também folga 3 dias (sexta, sábado e domingo).",
      ]
    },
    {
      title: "Visualize seu Calendário",
      description: "Navegue facilmente pelo seu calendário de folgas.",
      icon: <FaCheck className="w-16 h-16 text-blue-500 mb-4" />,
      details: [
        "Dias de folga destacados em verde.",
        "Visualização por mês para planejamento a longo prazo.",
        "Clique no seu último dia de folga para definir as folgas baseado na escala."
      ]
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      return
    }

    router.push('/home');
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      return
    }
  }

  const currentSlide = steps[currentStep];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col py-28">
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-lg mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full">
          <div className="flex justify-center">
            {currentSlide.icon}
          </div>

          <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">
            {currentSlide.title}
          </h2>

          <p className="text-gray-600 text-center mb-6">
            {currentSlide.description}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <ul className="space-y-2">
              {currentSlide.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg flex items-center transition-colors ${currentStep === 0
                  ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
            >
              <FaArrowLeft className="mr-2 h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
            >
              {currentStep < steps.length - 1 ? 'Próximo' : 'Começar'}
              <FaArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
