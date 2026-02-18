
import React from 'react';
import { Icons } from '../constants';

const Vision: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img 
                alt="Precision water irrigation systems" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0EVUxtrlDmK45hPATHw1horcwScp39Pa84rn3aAM8oaDr5b-q3mjIVDOCVMTeADTYVJs9htv76wALkcAHsOzlTLl9xEj7rgo1BemsPLqkSuRezAosf8OVheFzU7tQ4cdDR5yxc9Rs5hN-KsoeNo_XBD5Wm-vDp0W4iyWy5vLcIJoR-8AHzVoVgX2GCH6-Kisk9fiHx2raSXdNE7uF40JVHeqHvASwYiRsNHr9SOUKyg3-DRZqvVFM0g2HQUJpiMnlkulQNdTIOH0" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#1450b8] p-8 rounded shadow-2xl hidden lg:block">
              <p className="text-white text-4xl font-black">%40</p>
              <p className="text-white/80 text-sm font-bold uppercase tracking-widest">Su Tasarrufu</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#111418] mb-6">Gıda Egemenliği İçin Mühendislik</h2>
            <p className="text-lg text-[#637088] leading-relaxed mb-8">
              Geleceğin tarımı, sadece daha fazla üretmekle değil, kaynakları akılcı kullanmakla şekilleniyor. 
              SmartValves olarak, otonom kontrol mekanizmalarımızla suyun her damlasını veriyle yönetiyoruz.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1"><Icons.Check /></div>
                <div>
                  <h4 className="font-bold text-[#111418]">Sürdürülebilir Kaynak Yönetimi</h4>
                  <p className="text-sm text-[#637088]">Yapay zeka destekli analizlerle toprak nemine göre optimize sulama.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><Icons.Check /></div>
                <div>
                  <h4 className="font-bold text-[#111418]">Otonom Karar Mekanizması</h4>
                  <p className="text-sm text-[#637088]">İnsan hatasını sıfıra indiren akıllı kontrol algoritmaları.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
