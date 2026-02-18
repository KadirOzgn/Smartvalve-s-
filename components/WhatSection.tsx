
import React from 'react';

const WhatSection: React.FC = () => {
  const products = [
    {
      id: 'sv-blue',
      title: 'SmartValves Blue',
      tagline: 'Bluetooth Destekli Akıllı Vana',
      desc: 'Bluetooth üzerinden hızlı yapılandırma ve otonom sulama programlama kabiliyetine sahip amiral gemisi modelimiz.',
      image: 'https://smartmoles.com/assets/images/product/smartmoles-com-smartvalves-bluetooth-urun-gorseli-01.webp',
      features: ['IP68 Koruma', 'BT Yapılandırma', 'Manuel/Zaman/Otonom Modlar']
    },
    {
      id: 'gateway',
      title: 'Gateway Modbus',
      tagline: 'Sistemin Sinir Merkezi',
      desc: 'Saha verilerini toplayan ve API üzerinden yönetim sistemlerine (SGE) veri füzyonu sağlayan yüksek menzilli iletişim üssü.',
      image: 'https://smartmoles.com/uploads/1767945384902_smartmoles-com-gateway-modbus-lora-control-unit.webp',
      features: ['LoRa/LoRaWAN', 'Modbus TCP Desteği', 'Endüstriyel IP66']
    },
    {
      id: 'p-pulse',
      title: 'P-Pulse Station',
      tagline: 'Milimetrik Takip İstasyonu',
      desc: 'Su sayaçlarından gelen darbeli sinyalleri işleyerek, tüketilen suyun anlık takibini ve verimlilik analizini yapar.',
      image: 'https://smartmoles.com/uploads/1766067481746_smartmoles-com-p-pulse-station-urun-gorseli.webp',
      features: ['Hassas Debi Takibi', 'Uzun Ömürlü Pil', 'IP67 Sertifikası']
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="relative">
            <div className="absolute -top-10 -left-6 text-[150px] font-black text-[#f6f7f8] select-none -z-10 leading-none">03</div>
            <h4 className="text-[#1450b8] font-bold tracking-widest uppercase mb-4">Çözümlerimiz </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#111418]">Uçtan Uca Tarım Ekosistemi</h2>
          </div>
          <p className="text-[#637088] max-w-sm mt-6 md:mt-0 font-medium">
            Geleceğin tarımı için İzmir'den dünyaya ihraç edilen ileri mühendislik donanımları.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {products.map((p) => (
            <div key={p.id} className="group bg-[#f6f7f8] rounded-[2.5rem] overflow-hidden border border-[#dcdfe5] hover:border-[#1450b8] transition-all duration-500 hover:shadow-2xl flex flex-col h-full">
              <div className="h-80 bg-white relative overflow-hidden p-12 flex items-center justify-center border-b border-[#dcdfe5]">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply drop-shadow-2xl" 
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="mb-6">
                  <p className="text-[#1450b8] text-xs font-black uppercase tracking-[0.2em] mb-2">{p.tagline}</p>
                  <h3 className="text-3xl font-black text-[#111418] leading-tight">{p.title}</h3>
                </div>
                <p className="text-[#637088] leading-relaxed mb-8 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.features.map(f => (
                    <span key={f} className="bg-white px-3 py-1.5 rounded-lg text-[10px] font-bold border border-[#dcdfe5] text-[#111418] uppercase tracking-tighter">{f}</span>
                  ))}
                </div>
                <button className="w-full bg-[#111418] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest group-hover:bg-[#1450b8] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-[#1450b8]/20">
                  Teknik Detayları Gör
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
