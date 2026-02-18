
import React from 'react';

const ROISection: React.FC = () => {
  return (
    <section className="py-40 bg-[#050a14] relative overflow-hidden">
      {/* Root/Derinlik Dekorasyonu */}
      <div className="absolute inset-0 z-0 opacity-20 technical-grid"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#10b981] font-black tracking-widest uppercase mb-6 text-sm">
              <span className="w-12 h-[2px] bg-[#10b981]"></span>
              VERİLER
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-12 leading-tight tracking-tighter">
              Kanıtlanmış <br/> <span className="gradient-text">Üstün Etki.</span>
            </h2>
            
            <div className="space-y-10">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-all duration-700">
                 <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#10b981]/10 rounded-full blur-[80px]"></div>
                 <p className="text-8xl font-black text-[#10b981] mb-6 glow-green tracking-tighter">%81</p>
                 <h4 className="text-2xl font-black text-white mb-4">Su ve Gübre Tasarrufu</h4>
                 <p className="text-xl text-white/60 leading-relaxed font-medium">
                   "Global bilimsel yayınlarla kanıtlanmış tasarruf verileri ile yatırım maliyetinizi koruyun, toprağınızı otonom bir mühendislik disipliniyle ölümsüzleştirin."
                 </p>
               </div>
               
               <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
                 <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center text-[#050a14] shadow-[0_0_20px_#10b981]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                 </div>
                 <p className="text-white/60 font-bold italic text-sm">
                   Ege Üniversitesi Teknoloji Geliştirme Bölgesi bünyesinde geliştirilen <br/> tescilli ileri mühendislik sistemi.
                 </p>
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square bg-gradient-to-tr from-[#1450b8]/10 to-[#10b981]/10 rounded-full flex items-center justify-center p-24 border border-white/5 relative">
               <div className="absolute inset-0 animate-[spin_30s_linear_infinite] opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4,4"/>
                    <circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="8,8"/>
                  </svg>
               </div>
               
               <div className="text-center relative z-10">
                  <p className="text-sm font-black text-[#10b981] uppercase tracking-[0.6em] mb-6">MÜHENDİSLİK MERKEZİ</p>
                  <p className="text-4xl font-black text-white leading-[1.1] tracking-tighter mb-4">Bornova — İzmir <br/> <span className="text-white/30 text-2xl">Türkiye</span></p>
                  <div className="w-20 h-1 bg-[#10b981] mx-auto mt-8 shadow-[0_0_15px_#10b981]"></div>
               </div>
               
               {/* Dekoratif Işınlar */}
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45"></div>
               <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45"></div>
               <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
