
import React from 'react';

const Methodology: React.FC = () => {
  const cards = [
    {
      title: 'Agentic AI',
      desc: 'Kendi kendine karar verebilen, hedef odaklı yapay zeka ajanları ile tam otonom çalışma prensibi.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      )
    },
    {
      title: 'AIGR Altyapısı',
      desc: 'Sıfır halüsinasyon prensibiyle çalışan, yüksek güvenilirlikli veri işleme ve sentez mimarisi.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
      )
    },
    {
      title: 'LoRaWAN Teknolojisi',
      desc: '10km+ menzil, ultra düşük güç tüketimi ve kesintisiz kablosuz veri transfer altyapısı.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#f6f7f8] technical-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#111418] mb-4">AIGR Akıl Mühendisliği</h2>
          <p className="text-lg text-[#637088] max-w-2xl mx-auto">
            Sıfır halüsinasyon prensibi ile tasarlanan, yüksek güvenilirlikli otonom yönetim altyapısı.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-10 rounded-xl border border-[#dcdfe5] hover:border-[#1450b8] transition-all group shadow-sm">
              <div className="w-14 h-14 bg-[#1450b8]/10 rounded flex items-center justify-center mb-8 group-hover:bg-[#1450b8] group-hover:text-white transition-all text-[#1450b8]">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-[#637088] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
