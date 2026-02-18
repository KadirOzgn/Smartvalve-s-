
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#050a14]">
      {/* Doğa Arka Planı ve Veri Işınları */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050a14]/60 to-[#050a14] z-10"></div>
        <img 
          alt="Well managed green nature" 
          className="w-full h-full object-cover opacity-60 scale-110 parallax-bg" 
          src="https://smartmoles.com/assets/gallery/bag/bag-1.jpeg" 
        />
        
        {/* Hareketli Veri Işınları (Space-to-Root Simülasyonu) */}
        <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[-100%] left-[15%] w-[1px] h-[300%] bg-gradient-to-b from-transparent via-[#10b981] to-transparent animate-[flow_8s_linear_infinite]"></div>
          <div className="absolute top-[-150%] left-[45%] w-[2px] h-[300%] bg-gradient-to-b from-transparent via-[#1450b8] to-transparent animate-[flow_12s_linear_infinite]"></div>
          <div className="absolute top-[-80%] left-[75%] w-[1px] h-[300%] bg-gradient-to-b from-transparent via-[#10b981] to-transparent animate-[flow_10s_linear_infinite]"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#10b981]/20 border border-[#10b981]/30 text-[#10b981] px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-10 glow-green">
            <span className="animate-pulse inline-block w-2.5 h-2.5 rounded-full bg-[#10b981] mr-2 shadow-[0_0_10px_#10b981]"></span>
            VİZYONUMUZ
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.95] text-white mb-10 tracking-tighter">
            Tarımsal Özerklik İçin <br/>
            <span className="gradient-text">Akıl Mühendisliği:</span> <br/>
            Geleceği Bugün Yönetin.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-12 max-w-3xl border-l-4 border-[#10b981] pl-8">
            "Dünyanın yetersiz teknolojilerle vakit kaybetmeye tahammülü yok. Su kıtlığına ve çölleşmeye karşı, <span className="text-white font-bold">uzay teknolojileri</span> ve <span className="text-[#10b981] font-bold">Agentic AI</span> ile donatılmış, <span className="underline decoration-[#10b981] underline-offset-4">%81 tasarruf garantili</span> otonom ekosistemi keşfedin."
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#contact" className="bg-[#10b981] text-[#050a14] px-10 py-5 rounded-xl font-black text-lg hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1 active:scale-95">
              Pilot Çalışma Talep Et
            </a>
            <a href="#how" className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-white/10 transition-all active:scale-95">
              Mühendislik Zekâsı
            </a>
          </div>
        </div>
      </div>
      
      {/* Aşağı Kaydır İndikatörü */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">AŞAĞI İN (ROOT)</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
