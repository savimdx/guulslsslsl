import { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Lock, ExternalLink, Settings, Sparkles, CreditCard } from 'lucide-react';
import { OfferConfig } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: OfferConfig;
  onUpdateCheckoutUrl: (url: string) => void;
  onOpenConfig: () => void;
}

export function CheckoutModal({
  isOpen,
  onClose,
  config,
  onUpdateCheckoutUrl,
  onOpenConfig,
}: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [tempUrl, setTempUrl] = useState(config.checkoutUrl || '');
  const [isSaved, setIsSaved] = useState(false);
  const [isCompletedDemo, setIsCompletedDemo] = useState(false);

  if (!isOpen) return null;

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempUrl.trim()) {
      onUpdateCheckoutUrl(tempUrl.trim());
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
        // Direct to real checkout URL if valid
        if (tempUrl.startsWith('http')) {
          window.open(tempUrl.trim(), '_blank');
        }
      }, 700);
    }
  };

  const handleSimulatePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompletedDemo(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div 
        className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#07152B] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-bold text-base">Checkout Seguro</h3>
              <p className="text-xs text-slate-300">Ambiente criptografado SSL 256 bits</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isCompletedDemo ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#07152B] mb-2">Simulação Realizada com Sucesso!</h4>
              <p className="text-sm text-slate-600 mb-6">
                Todos os botões da sua página estão funcionando perfeitamente. Quando você inserir seu link real de checkout (Kiwify, Hotmart, Eduzz, etc.), os compradores serão enviados diretamente para lá.
              </p>
              <button
                onClick={() => {
                  setIsCompletedDemo(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#1769D2] hover:bg-[#1255ab] text-white text-sm font-bold rounded-xl transition-colors cursor-pointer"
              >
                Voltar à Página
              </button>
            </div>
          ) : (
            <div>
              {/* Product Summary */}
              <div className="bg-[#EAF3FF] border border-[#BED7FA] p-4 rounded-xl mb-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-extrabold text-sm text-[#07152B]">
                      +700 Mapas Mentais de Fórmulas de Matemática
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ensino Médio e Concursos Públicos + Todos os 3 Bônus
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 line-through block">
                      {config.originalPrice}
                    </span>
                    <span className="text-lg font-black text-[#1769D2]">
                      R$ {config.promoPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Configure custom checkout URL box */}
              <div className="mb-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5 text-[#FF9500]" />
                    Configuração de Checkout da Página
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConfig();
                    }}
                    className="text-[11px] text-[#1769D2] font-semibold hover:underline cursor-pointer"
                  >
                    Painel Geral
                  </button>
                </div>
                <p className="text-[11px] text-amber-800 mb-2 leading-relaxed">
                  Insira o link da sua plataforma de pagamentos (Hotmart, Kiwify, Eduzz, Kirvano, Mercado Pago, etc.) para que todos os botões da página direcionem diretamente para seu checkout:
                </p>
                <form onSubmit={handleSaveUrl} className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://pay.kiwify.com.br/exemplo..."
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    className="flex-1 text-xs px-3 py-2 border border-amber-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF9500] bg-white"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#FF9500] hover:bg-[#E08500] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors shrink-0"
                  >
                    {isSaved ? '✓ Salvo!' : 'Salvar Link'}
                  </button>
                </form>
              </div>

              {/* Or test with email simulation */}
              <form onSubmit={handleSimulatePurchase} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Testar Fluxo com E-mail (Demonstração)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#1769D2]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-base rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Finalizar Pagamento de Teste</span>
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garantia incondicional de 7 dias com devolução total.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
