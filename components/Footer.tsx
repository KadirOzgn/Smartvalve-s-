
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050a14] py-20 text-white/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="flex items-center gap-3 text-white mb-10">
              <svg className="w-10 h-10 text-[#10b981]" fill="currentColor" viewBox="0 0 48 48">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" />
              </svg>
              <span className="text-2xl font-black tracking-tighter uppercase">SmartMoles</span>
            </div>
            <p className="text-xl text-white/60 mb-8 max-w-lg font-medium leading-relaxed">
              "Geleceğin Tarımının Arkasındaki Eşsiz Zekâ Ortaklarını Seçiyor."
            </p>
            <div className="flex gap-12 text-sm font-bold tracking-widest uppercase">
              <a href="https://www.smartmoles.com" className="text-white hover:text-[#10b981] transition-all">WWW.SMARTMOLES.COM</a>
              <a href="tel:+902324642484" className="text-white hover:text-[#10b981] transition-all">+90 232-464-2484</a>
            </div>
          </div>
          
          <div className="flex flex-col justify-end md:items-end">
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.5em] mb-4">MERKEZ</p>
              <p className="text-white/80 font-bold leading-relaxed max-w-xs md:ml-auto">
                Ege Üniversitesi Teknopark, Bornova, İzmir, Türkiye
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2026 SmartMoles AIGR™ Systems. Tüm Hakları Saklıdır.</p>
          <div className="flex gap-8">
            <span>Space-to-Root Engineering</span>
            <span>Agentic AI Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
