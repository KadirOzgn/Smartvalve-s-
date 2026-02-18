
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[#1450b8] font-black tracking-widest uppercase mb-6 text-sm">
            <span className="w-12 h-[2px] bg-[#1450b8]"></span>
            İLETİŞİM
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#050a14] mb-12 leading-tight tracking-tighter">
            Geleceğin Tarımının Arkasındaki <br/> <span className="text-[#1450b8]">Eşsiz Zekâ</span>.
          </h2>
          <p className="text-xl text-[#637088] mb-16 leading-relaxed font-medium">
            Mühendislik ekibimizle iletişime geçin. Uzaydan toprağa otonomi için ilk adımı atın.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="flex items-center gap-8 group bg-[#f6f7f8] p-10 rounded-[3rem] border border-[#dcdfe5] hover:border-[#1450b8] transition-all duration-500">
              <div className="w-16 h-16 bg-[#050a14] rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:bg-[#1450b8] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#637088] uppercase tracking-[0.3em] mb-1">TELEFON</p>
                <p className="text-2xl font-black text-[#050a14] hover:text-[#1450b8] transition-colors"><a href="tel:+902324642484">+90 232-464-2484</a></p>
              </div>
            </div>
            <div className="flex items-center gap-8 group bg-[#f6f7f8] p-10 rounded-[3rem] border border-[#dcdfe5] hover:border-[#10b981] transition-all duration-500">
              <div className="w-16 h-16 bg-[#10b981] rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-500 group-hover:bg-[#050a14] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p className="text-[11px] font-black text-[#637088] uppercase tracking-[0.3em] mb-1">E-POSTA</p>
                <p className="text-2xl font-black text-[#050a14] hover:text-[#10b981] transition-colors"><a href="mailto:info@smartmoles.com">info@smartmoles.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
