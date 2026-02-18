
import React from 'react';

const WhySection: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 text-[200px] font-black text-[#f6f7f8] select-none -z-10 leading-none">01</div>
            <h4 className="text-[#1450b8] font-bold tracking-widest uppercase mb-4">Vizyonumuz</h4>
            <h2 className="text-4xl md:text-6xl font-black text-[#111418] mb-8 leading-[1.1]">
              Gıda Egemenliğimizin <br/> <span className="text-[#1450b8]">Teminatı</span> İçin.
            </h2>
            <div className="space-y-6 text-lg text-[#637088] leading-relaxed">
              <p>
                Dünya genelinde tarım su kaynaklarının %73'ünü kullanırken, her yıl 75 milyar ton verimli toprak kaybediliyor. Sulu tarımın sona ermesine izin vermemek için buradayız.
              </p>
              <div className="border-l-4 border-[#1450b8] pl-6 py-2">
                <p className="font-bold text-[#111418] text-xl">
                  "SmartMoles olarak amacımız, sadece su tasarrufu yapmak değil; tarımsal özerkliği teknolojik bir standart haline getirerek gelecek nesillere 'ölümsüz' bir zirai mühendislik mirası bırakmaktır."
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden shadow-lg border border-[#dcdfe5]">
                  <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Agriculture tech" />
                </div>
                <div className="bg-[#1450b8] p-8 rounded-2xl text-white shadow-xl">
                  <p className="text-5xl font-black mb-2">%81</p>
                  <p className="text-sm font-bold uppercase tracking-widest">Su Tasarrufu</p>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="bg-[#f6f7f8] p-8 rounded-2xl border border-[#dcdfe5] shadow-sm">
                  <p className="text-4xl font-black text-[#111418] mb-2">75B</p>
                  <p className="text-xs font-bold text-[#637088] uppercase tracking-widest">Ton Kayıp Toprak/Yıl</p>
                </div>
                <div className="aspect-[3/4] rounded-2xl bg-gray-100 overflow-hidden shadow-lg border border-[#dcdfe5]">
                  <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Sustainable farming" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
