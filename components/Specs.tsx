
import React from 'react';

const Specs: React.FC = () => {
  const rows = [
    { label: 'Haberleşme', svl: 'LoRa / LoRaWAN', gateway: 'Modbus / API / LoRaWAN', ppulse: 'LoRaWAN Pulse' },
    { label: 'Güç Yönetimi', svl: 'İki Aşamalı Uyku Modu', gateway: 'Endüstriyel Besleme', ppulse: 'Düşük Güç (Low-Power)' },
    { label: 'Koruma Sınıfı', svl: 'IP68 (Su Geçirmez)', gateway: 'IP66 (Toz/Su)', ppulse: 'IP67 (Saha Tipi)' },
    { label: 'Dahili Sensör', svl: 'Nem & Sıcaklık', gateway: 'Dijital/Analog Girişler', ppulse: 'Debi Veri İşleme' },
    { label: 'Yönetim Modu', svl: 'Manuel / Zaman / Otonom', gateway: 'API Veri Füzyonu', ppulse: 'Anlık Tüketim Takibi' }
  ];

  return (
    <section className="py-32 bg-[#111418] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-6">Teknik Kapasite Özeti</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            SmartMoles çözümleriyle tarım, veriye dayalı bir "Akıl Mühendisliği" disiplinine dönüşüyor.
          </p>
        </div>
        
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="px-10 py-8 text-xs font-black uppercase tracking-widest text-[#1450b8]">Özellik</th>
                <th className="px-10 py-8 text-xs font-black uppercase tracking-widest text-white">SmartValves Serisi</th>
                <th className="px-10 py-8 text-xs font-black uppercase tracking-widest text-white">Gateway Modbus</th>
                <th className="px-10 py-8 text-xs font-black uppercase tracking-widest text-white">P-Pulse Station</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-all">
                  <td className="px-10 py-6 font-bold text-white/90">{row.label}</td>
                  <td className="px-10 py-6 text-white/50">{row.svl}</td>
                  <td className="px-10 py-6 text-white/50">{row.gateway}</td>
                  <td className="px-10 py-6 text-white/50">{row.ppulse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-16 p-10 bg-[#1450b8] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-black mb-2">SmartValve Blue Özel Avantajı</h4>
            <p className="text-white/80">Bluetooth üzerinden saniyeler içinde hızlı yapılandırma ve test imkanı.</p>
          </div>
          <button className="bg-white text-[#1450b8] px-8 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all">
            Kataloğu İndir (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specs;
