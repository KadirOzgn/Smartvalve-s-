
import React from 'react';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 'smart-valves',
      title: 'SmartValves',
      vibe: 'Fiziksel Uygulama Gücü (Kas).',
      desc: 'IP68 koruma sınıfı, LoRa/LoRaWAN haberleşme ve otonom sulama planlaması ile sahadaki uç nokta kontrolü.',
      image: 'https://smartmoles.com/assets/images/product/smartmoles-com-smart-valves-urun-gorseli-01.webp',
      badge: 'GÜÇ ÜNİTESİ'
    },
    {
      id: 'gateway',
      title: 'Gateway & Control Unit',
      vibe: 'Yönetim ve Karar Merkezi (Beyin).',
      desc: '65 yüksek hassasiyetli sensörden gelen veriyi Edge AI ile işleyen, tüm sistemin otonom sinir merkezi.',
      image: 'https://smartmoles.com/uploads/1767945384902_smartmoles-com-gateway-modbus-lora-control-unit.webp',
      badge: 'FÜZYON ÜSSÜ'
    },
    {
      id: 'spacemoles',
      title: 'SpaceMoles & SmartFarm',
      vibe: 'Gözlem ve Havza Yönetimi (Göz).',
      desc: 'Uydu verileriyle entegre, ülke bazında havza yönetimini mümkün kılan bulut tabanlı tek otonom platform.',
      image: 'https://smartmoles.com/uploads/1769436445182_smartmoles-com-spacemoles-urun-gorse.webp',
      badge: 'UZAY KONTROL'
    }
  ];

  return (
    <section id="what" className="py-40 bg-[#f6f7f8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#1450b8] font-black tracking-widest uppercase mb-6 text-sm">
            <span className="w-12 h-[2px] bg-[#1450b8]"></span>
            ÇÖZÜMLERİMİZ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#050a14] tracking-tighter mb-8 leading-tight">Otonom Uygulama Gücü</h2>
          <p className="text-lg text-[#637088] font-medium leading-relaxed">
            "Tarlanızı kendi kendine yöneten, birbiriyle konuşan ve hata payını sıfırlayan akıllı bir tarım ekosistemi."
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-[3.5rem] overflow-hidden border border-[#dcdfe5] hover:border-[#10b981] transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] flex flex-col h-full shadow-sm">
              <div className="h-80 relative overflow-hidden p-14 flex items-center justify-center bg-white border-b border-[#dcdfe5]">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 mix-blend-multiply" 
                />
                <div className="absolute top-8 left-8 bg-[#050a14] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                  {p.badge}
                </div>
              </div>
              <div className="p-14 flex flex-col flex-1">
                <h4 className="text-[#10b981] text-xs font-black uppercase tracking-[0.3em] mb-4">{p.vibe}</h4>
                <h3 className="text-3xl font-black text-[#050a14] mb-8 leading-tight tracking-tighter">{p.title}</h3>
                <p className="text-[#637088] leading-relaxed mb-12 flex-1 text-lg font-medium">{p.desc}</p>
                <button className="w-full bg-[#050a14] text-white py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.25em] group-hover:bg-[#10b981] transition-all duration-500 flex items-center justify-center gap-4 shadow-xl active:scale-95">
                  DETAYLARI KEŞFET
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
