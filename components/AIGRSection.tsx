
import React from 'react';

const AIGRSection: React.FC = () => {
  return (
    <section id="how" className="py-40 bg-white text-[#050a14] relative overflow-hidden">
      {/* Arka plan dekoratif elementler */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0fdf4] -skew-x-12 translate-x-1/4 opacity-30 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-[#10b981] font-black tracking-widest uppercase mb-6 text-sm">
              <span className="w-12 h-[2px] bg-[#10b981]"></span>
              METODOLOJİMİZ
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight tracking-tighter">
              AIGR Mühendislik <br/> <span className="text-[#10b981]">Zekâsı</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-[#10b981]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#10b981] group-hover:text-white transition-all duration-500 text-[#10b981] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-3">Space-Irriga Füzyonu</h4>
                  <p className="text-[#637088] leading-relaxed text-lg">
                    SpaceMoles ile uydu verilerini, sahadaki gerçek zamanlı sensörlerle senkronize eden hibrit veri mimarisi. Uzay teknolojisi tarımsal veriye dönüşür.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-[#1450b8]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#1450b8] group-hover:text-white transition-all duration-500 text-[#1450b8] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-3">Agentic AI (Ajan Yapay Zekâ)</h4>
                  <p className="text-[#637088] leading-relaxed text-lg">
                    "0" halüsinasyon ilkesiyle çalışan, uzman zirai bilgiyi otonom kararlara dönüştüren mühendislik zekâsı. İnsan faktörünü akılcı bir otonomi ile destekler.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-[#050a14]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#050a14] group-hover:text-white transition-all duration-500 text-[#050a14] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M7 20v-5"/><path d="M11 20v-8"/><path d="M15 20v-11"/><path d="M19 20v-14"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black mb-3">KHAS ve EKB</h4>
                  <p className="text-[#637088] leading-relaxed text-lg">
                    Bitkinin su ve gübreyi %80 oranında kullandığı bölgenin (EKB) ve 3D su hareketinin (Kapiller Hareket Analiz Sistemi) milimetrik takibi ile kök derinliğine tam hakimiyet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Animasyonlu Diyagram */}
            <div className="bg-[#050a14] rounded-[4rem] p-16 aspect-square relative flex items-center justify-center overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5">
              <div className="absolute inset-0 technical-grid opacity-10"></div>
              
              <svg className="w-full h-full opacity-30 absolute inset-0" viewBox="0 0 400 400">
                <circle cx="200" cy="200" r="160" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="10,10" />
                <circle cx="200" cy="200" r="110" fill="none" stroke="#1450b8" strokeWidth="1" strokeDasharray="20,10" />
                <path d="M200 20 L200 380" stroke="#10b981" strokeWidth="1" className="data-flow-line" />
                <path d="M20 200 L380 200" stroke="#1450b8" strokeWidth="1" className="data-flow-line" />
              </svg>
              
              <div className="relative z-10 text-center scale-110">
                <div className="w-40 h-40 bg-gradient-to-br from-[#10b981] to-[#064e3b] rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.4)] floating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="text-white text-3xl font-black mb-3 uppercase tracking-tighter">AIGR™ FÜZYON</h3>
                <p className="text-[#10b981] text-sm font-black uppercase tracking-[0.4em]">Sıfır Halüsinasyon Karar Mekanizması</p>
              </div>
              
              {/* Uydu İkonu */}
              <div className="absolute top-12 right-12 animate-pulse">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                 <div className="absolute -inset-2 bg-[#10b981]/20 blur-xl rounded-full -z-10"></div>
              </div>
              
              {/* Kök İkonu */}
              <div className="absolute bottom-12 left-12 opacity-50">
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2v20M2 12h20M5.07 5.07l13.86 13.86M18.93 5.07L5.07 18.93"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGRSection;
