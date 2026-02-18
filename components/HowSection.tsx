
import React from 'react';

const HowSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#f6f7f8] technical-grid relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[150px] font-black text-[#111418]/5 select-none -z-10 leading-none">02</div>
          <h4 className="text-[#1450b8] font-bold tracking-widest uppercase mb-4">Metodolojimiz</h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#111418] mb-6">AIGR Akıl Mühendisliği ve Sıfır Halüsinasyon</h2>
          <p className="text-xl text-[#637088] max-w-3xl mx-auto">
            Geleneksel sistemlerin aksine, 30 yıllık mühendislik birikimimizi Agentic AI ile harmanlayarak kusursuz bir otonom yapı kuruyoruz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-transparent hover:border-[#1450b8] transition-all group">
            <div className="w-16 h-16 bg-[#1450b8]/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#1450b8] group-hover:text-white transition-all text-[#1450b8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <h3 className="text-2xl font-black mb-6">AIGR Altyapısı</h3>
            <p className="text-[#637088] leading-relaxed text-lg">
              Biyolojik varlığımızdan bağımsız, uzman görüşlerini gerçek zamanlı verilerle birleştiren bir yapay zekâ sunuyoruz.
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-transparent hover:border-[#1450b8] transition-all group">
            <div className="w-16 h-16 bg-[#1450b8]/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#1450b8] group-hover:text-white transition-all text-[#1450b8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-6">Sıfır Halüsinasyon</h3>
            <p className="text-[#637088] leading-relaxed text-lg">
              Karar mekanizmamız, her kararın veriye dayalı ve %100 kesin olmasını sağlayan deterministik bir yazılım mimarisiyle çalışır.
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-transparent hover:border-[#1450b8] transition-all group">
            <div className="w-16 h-16 bg-[#1450b8]/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#1450b8] group-hover:text-white transition-all text-[#1450b8]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-6">Haberleşme Özgürlüğü</h3>
            <p className="text-[#637088] leading-relaxed text-lg">
              LoRa ve LoRaWAN ile en zorlu arazi koşullarında düşük güç tüketimi ve uzun ömürlü pil performansıyla kesintisiz yönetim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
