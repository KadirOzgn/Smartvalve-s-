
import React from 'react';
import { Icons } from '../constants';

const Products: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-[#111418] mb-4">Ürün Ekosistemi</h2>
            <p className="text-lg text-[#637088]">Uçtan uca otonom kontrol ve veri füzyonu sağlayan donanımlar.</p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-[#f6f7f8] rounded border border-[#dcdfe5] text-xs font-bold text-[#1450b8] uppercase">IP68 Sertifikalı</span>
            <span className="px-4 py-2 bg-[#f6f7f8] rounded border border-[#dcdfe5] text-xs font-bold text-[#1450b8] uppercase">Endüstriyel Sınıf</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Products */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="bg-[#f6f7f8] rounded-xl overflow-hidden border border-[#dcdfe5] group hover:shadow-xl transition-all">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center font-black text-black/5 text-8xl pointer-events-none">SVL2</div>
                 <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH2TzzEyr888Y0Db-wuUxo0jkfxVIx8LA4uFeOJ9XCXBnQWvuDIvoBzEi4FaMIqwdxMg0bR8EqLpUPtHhef0eBZjfPuC84JWDL_nZOomkKolhPntAGg6Wt4DCeSeJ43yYGo64k3srqpbRtTpwb6WO32ijadwcAhx39xwnMpSQV3cRlAK4R7FzZc-NfalOEBGkF2JwqFpw5RqX5bvmUrnZ7pPcgfwPTCfnpc8cFMWkXRwChVbqS8K0k47dWmKUCZbSMrY_FwlN_-KI" 
                   alt="SVL2" 
                   className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2">SmartValves SVL2</h3>
                <p className="text-sm text-[#637088] mb-6">Orta ölçekli araziler için optimize edilmiş 2 inç otonom vana sistemi.</p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-[#111418]">
                  <div className="flex items-center gap-2"><Icons.Battery />Uzun Ömürlü Pil </div>
                  <div className="flex items-center gap-2"><Icons.Water /> Hassas Dozajlama</div>
                </div>
              </div>
            </div>

            <div className="bg-[#f6f7f8] rounded-xl overflow-hidden border border-[#dcdfe5] group hover:shadow-xl transition-all">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                 <div className="absolute inset-0 flex items-center justify-center font-black text-black/5 text-8xl pointer-events-none">SVL4</div>
                 <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYfmQkxAhYX6pK1ZN3qJMy3S_pIr0AFGDboywMUXRmty8-9K3AQeAGYaaxw83cbxt1tfnR8itJXzJzKK55KtACj52ldqOhDHDaomADPUhTBTarHxDycVbqsTizdRhAOQkLtl9egymUWAR99nZjoth4TnfiaCvWtLWR6EGnRhom6kSDa1FOFlPS9j9D6JroQxSWCF-r52fGKhvFkUzWmONhxaaPVu0Le6i4hH8eNfIszybZkdjFbPcn2O9bAxfzTRNwmMREVrG7Lxo" 
                   alt="SVL4" 
                   className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2">SmartValves SVL4</h3>
                <p className="text-sm text-[#637088] mb-6">Yüksek debili ana hatlar için 4 inç endüstriyel otonom vana.</p>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-[#111418]">
                  <div className="flex items-center gap-2"><Icons.Bolt /> Yüksek Tork</div>
                  <div className="flex items-center gap-2"><Icons.Cloud /> Gerçek Zamanlı</div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Modules */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border border-[#dcdfe5] shadow-sm flex items-center gap-6 group hover:border-[#1450b8] transition-all">
              <div className="w-16 h-16 bg-[#1450b8]/5 rounded flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1450b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M17 21v-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2"></path><path d="M15 13h2"></path><path d="M15 17h2"></path><path d="M5 13h2"></path><path d="M5 17h2"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Gateway Modbus</h4>
                <p className="text-sm text-[#637088]">PLC ve SCADA sistemleri ile tam entegrasyon sağlayan köprü.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#dcdfe5] shadow-sm flex items-center gap-6 group hover:border-[#1450b8] transition-all">
              <div className="w-16 h-16 bg-[#1450b8]/5 rounded flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1450b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">P-Pulse Station</h4>
                <p className="text-sm text-[#637088]">Basınç ve debi verilerini anlık analiz eden istasyon.</p>
              </div>
            </div>

            <div className="bg-[#1450b8] p-8 rounded-xl shadow-lg flex items-center gap-6 text-white">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Data Fusion Engine</h4>
                <p className="text-sm text-white/80">Tüm sensör verilerini birleştirerek otonom kararlar üretir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
