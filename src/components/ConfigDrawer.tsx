import { useState } from 'react';
import { X, Save, RotateCcw, Sliders, DollarSign, Link2, ShieldCheck, Tag, Gift } from 'lucide-react';
import { OfferConfig } from '../types';
import { DEFAULT_CONFIG } from '../data/content';

interface ConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: OfferConfig;
  onSave: (newConfig: OfferConfig) => void;
}

export function ConfigDrawer({ isOpen, onClose, config, onSave }: ConfigDrawerProps) {
  const [formData, setFormData] = useState<OfferConfig>(config);
  const [statusMsg, setStatusMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (field: keyof OfferConfig, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBonusChange = (index: number, title: string, desc: string) => {
    const updated = [...formData.bonuses];
    updated[index] = { ...updated[index], title, description: desc };
    setFormData((prev) => ({ ...prev, bonuses: updated }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setStatusMsg('Alterações salvas com sucesso!');
    setTimeout(() => {
      setStatusMsg('');
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormData(DEFAULT_CONFIG);
    onSave(DEFAULT_CONFIG);
    setStatusMsg('Restaurado para os padrões!');
    setTimeout(() => setStatusMsg(''), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#07152B] text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1769D2] flex items-center justify-center">
              <Sliders className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base">Configurar Página de Vendas</h3>
              <p className="text-xs text-slate-300">Preços, checkout e condições da oferta</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form id="configForm" onSubmit={handleSave} className="flex-1 p-5 overflow-y-auto space-y-5 text-sm">
          {statusMsg && (
            <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold rounded-lg text-center animate-fade-in">
              ✓ {statusMsg}
            </div>
          )}

          {/* Checkout URL Field */}
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <label className="block text-xs font-bold text-amber-900 mb-1 flex items-center gap-1.5">
              <Link2 className="w-4 h-4 text-[#FF9500]" />
              Link de Checkout Universal (Hotmart, Kiwify, Eduzz, Kirvano, etc.)
            </label>
            <p className="text-[11px] text-amber-800 mb-2">
              Todos os botões da página direcionarão automaticamente para este link:
            </p>
            <input
              type="text"
              placeholder="https://pay.kiwify.com.br/exemplo..."
              value={formData.checkoutUrl}
              onChange={(e) => handleChange('checkoutUrl', e.target.value)}
              className="w-full text-xs px-3 py-2 border border-amber-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF9500] bg-white"
            />
          </div>

          {/* Pricing settings */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-extrabold text-[#07152B] flex items-center gap-1.5 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-[#1769D2]" />
              Configuração de Preços (Editáveis)
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Preço Original Riscado
                </label>
                <input
                  type="text"
                  value={formData.originalPrice}
                  onChange={(e) => handleChange('originalPrice', e.target.value)}
                  placeholder="R$ 97,00"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1769D2] bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Preço Promocional (R$)
                </label>
                <input
                  type="text"
                  value={formData.promoPrice}
                  onChange={(e) => handleChange('promoPrice', e.target.value)}
                  placeholder="19,90"
                  className="w-full text-xs font-bold text-[#FF9500] px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF9500] bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Condição de Pagamento Parcelado
              </label>
              <input
                type="text"
                value={formData.installments}
                onChange={(e) => handleChange('installments', e.target.value)}
                placeholder="ou 2x de R$ 10,40 no cartão"
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1769D2] bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Texto de Economia em Destaque
              </label>
              <input
                type="text"
                value={formData.savingsText}
                onChange={(e) => handleChange('savingsText', e.target.value)}
                placeholder="Você economiza R$ 77,10 hoje"
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1769D2] bg-white"
              />
            </div>
          </div>

          {/* Guarantee Days */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Prazo de Garantia (Dias)
            </label>
            <input
              type="number"
              min="1"
              max="90"
              value={formData.guaranteeDays}
              onChange={(e) => handleChange('guaranteeDays', Number(e.target.value))}
              className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1769D2] bg-white"
            />
          </div>

          {/* Top Banner Text */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#1769D2]" />
              Texto da Barra Superior de Oferta
            </label>
            <input
              type="text"
              value={formData.topBannerText}
              onChange={(e) => handleChange('topBannerText', e.target.value)}
              className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#1769D2] bg-white"
            />
          </div>

          {/* Bonuses Configuration */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-extrabold text-[#07152B] flex items-center gap-1.5 uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5 text-[#FF9500]" />
              Bônus Inclusos na Oferta
            </h4>
            {formData.bonuses.map((bonus, idx) => (
              <div key={bonus.id} className="p-2.5 bg-white rounded-lg border border-slate-200 space-y-1.5">
                <input
                  type="text"
                  value={bonus.title}
                  onChange={(e) => handleBonusChange(idx, e.target.value, bonus.description)}
                  className="w-full text-xs font-bold text-[#07152B] px-2 py-1 border border-slate-200 rounded"
                />
                <input
                  type="text"
                  value={bonus.description}
                  onChange={(e) => handleBonusChange(idx, bonus.title, e.target.value)}
                  className="w-full text-[11px] text-slate-600 px-2 py-1 border border-slate-200 rounded"
                />
              </div>
            ))}
          </div>
        </form>

        {/* Action Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-2 text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restaurar
          </button>

          <button
            type="submit"
            form="configForm"
            className="px-5 py-2.5 bg-[#1769D2] hover:bg-[#1255ab] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md cursor-pointer transition-colors"
          >
            <Save className="w-4 h-4" />
            Salvar e Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
