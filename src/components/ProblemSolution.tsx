import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="bg-[#EAF3FF] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#D6E6FA]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#1769D2] uppercase tracking-wider">
            Comparativo de Aprendizado
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07152B] tracking-tight mt-1">
            Por que estudar com mapas mentais?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            A diferença entre passar horas frustrado com fórmulas soltas e ter clareza total na hora da prova.
          </p>
        </div>

        {/* Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* CARD 1 — O PROBLEMA */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-red-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-100/40 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>

              <div className="inline-block px-2.5 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                O Problema
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#07152B] mb-3">
                Estudar Matemática pode ser complicado
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Fórmulas difíceis de memorizar, conteúdos espalhados e dificuldade para encontrar rapidamente aquilo que você precisa revisar.
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Cadernos desorganizados e anotações perdidas</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Branco total na hora de lembrar fórmulas no meio da prova</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Horas perdidas em apostilas longas e teóricas</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 text-xs font-semibold text-red-600 bg-red-50/60 p-3 rounded-lg text-center">
              ⚠️ Estudo lento, cansativo e pouco eficiente
            </div>
          </div>

          {/* CARD 2 — A SOLUÇÃO */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-300 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/40 rounded-bl-full pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>

              <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                A Solução Definitiva
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#07152B] mb-3">
                Tenha tudo organizado em um só lugar
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Com mais de 180 mapas mentais, você encontra as principais fórmulas organizadas visualmente, facilitando a consulta e a revisão dos conteúdos.
              </p>

              <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Esquemas gráficos coloridos que fixam na memória</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Consulte qualquer fórmula em menos de 10 segundos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Revisão focada 10x mais rápida para provas e vestibulares</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 text-xs font-semibold text-emerald-700 bg-emerald-50/80 p-3 rounded-lg text-center">
              ✓ Memorização acelerada e confiança para resolver qualquer questão
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
