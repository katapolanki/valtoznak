import Image from "next/image"
import Link from "next/link"
import { PromptPreview } from "@/components/prompt-preview"
import { EcommercePreview } from "@/components/ecommerce-preview"
import { DashboardPreview } from "@/components/dashboard-preview"
import { ImageReferencePreview } from "@/components/image-reference-preview"
import { IterativeDesignPreview } from "@/components/iterative-design-preview"
import { ComponentBasedPreview } from "@/components/component-based-preview"
import { StyleSystemPreview } from "@/components/style-system-preview"
import { UserFlowPreview } from "@/components/user-flow-preview"
import { FeedbackPreview } from "@/components/feedback-preview"

export default function V0Guide() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header marad változatlan */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold">v0.dev</div>
            <nav className="hidden md:flex gap-6">
              <Link href="#capabilities" className="text-sm font-medium hover:underline">
                Képességek
              </Link>
              <Link href="#tips" className="text-sm font-medium hover:underline">
                Tippek
              </Link>
              <Link href="#examples" className="text-sm font-medium hover:underline">
                Példák
              </Link>
              <Link href="#success-stories" className="text-sm font-medium hover:underline">
                Sikertörténetek
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Bevezető szekció marad változatlan */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-slate-50">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                  V0 Gyorstalpaló: Tippek és trükkök az AI Prototípus-készítéshez
                </h1>
                <p className="mx-auto max-w-[700px]">Hogyan érhetsz el jobb eredményeket nagyobb kontroll mellett</p>
              </div>
              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm text-left mt-4">
                <p className="mb-4">
                  A V0 egy AI-alapú eszköz, amely képes szöveges utasításokból felületeket, prototípusokat, sőt teljesen
                  működőképes alkalmazásokat létrehozni.
                </p>
                <p className="mb-4">
                  Más hasonló eszközökhöz hasonlóan könnyen előállítható vele egy kezdeti koncepció.
                </p>
                <p className="mb-4">
                  De mi van, ha többet szeretnél, mint egy első vázlat? Mi van, ha nagyobb kontrollt szeretnél az
                  eredmények felett? Mi van, ha egy olyan dizájnt akarsz, amely közelebb áll a saját elképzeléseidhez?
                </p>
                <p className="mb-4">
                  Az 50-60%-os készültségi szint gyorsan elérhető, de az ezt meghaladó finomítás a trükkös rész.
                </p>
                <p>
                  Ma 8 módszert osztunk meg, amelyek segítségével maximalizálhatod a V0 lehetőségeit, és nagyobb
                  precizitást és kontrollt nyerhetsz az AI által generált eredmények felett.
                </p>
              </div>
              <div className="mx-auto max-w-[800px] mt-8">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="v0.dev felhasználói felület"
                  width={800}
                  height={500}
                  className="rounded-lg border border-border overflow-hidden"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Áttekintés</h2>
                <p className="mx-auto max-w-[700px]">Ismerje meg a V0 alapjait</p>
              </div>
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">
                  A V0-t a Vercel fejlesztette, amely egy népszerű felhőplatform, amely megkönnyíti a fejlesztők számára
                  a webalkalmazások üzemeltetését és kezelését.
                </p>
                <p className="mb-4">
                  A fejlesztők mellett azonban hatalmas potenciált látunk a dizájnerek, termékmenedzserek, vállalkozók
                  és más szakemberek számára is, különösen a proof-of-concept (PoC) létrehozásában.
                </p>
                <p className="mb-4">Úgy gondoljuk, hogy az ilyen eszközök, mint a V0, itt a leghasznosabbak.</p>
                <p>
                  <strong>
                    A következőkben részletesen bemutatjuk a 8 legfontosabb módszert, amelyek segítségével
                    kihasználhatod a V0 teljes potenciálját.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. TIPP: Részletes követelmények */}
        <section id="tip-1" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">1️⃣ Adj meg részletes követelményeket</h2>
                <p className="mx-auto max-w-[700px]">Hogyan fogalmazz meg hatékony utasításokat a V0 számára</p>
              </div>
              
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">Egy részletes követelmény segíthet jobb eredményeket elérni, mint egy rövid, homályos utasítás.
                  De tudjuk, hogy nem könnyű ilyet megfogalmazni.</p>
                <p className="mb-4">Mindig kérheted a ChatGPT vagy Claude segítségét egy első vázlat elkészítéséhez az igényeid alapján,
                  amit aztán tovább finomíthatsz.</p>
                <p className="mb-4">Sok felhasználó létrehozott saját botokat (egyedi GPT-ket), amelyek segítenek gyorsan generálni 
                  részletes promptokat AI-alapú eszközökhöz.</p>
              </div>

              {/* Interaktív Preview komponens */}
              <div className="mx-auto max-w-[800px] mt-8">
                <PromptPreview />
              </div>

              {/* Prompt sablonok előnézete */}
              <div className="mx-auto max-w-[800px] mt-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Prompt sablonok előnézete</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <EcommercePreview />
                  <DashboardPreview />
                </div>
              </div>

              {/* Tippek és trükkök a részletes promptokhoz */}
              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">A tökéletes prompt anatómiája</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-2">✅ Amit érdemes belevenni:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li><strong>Pontos célmeghatározás</strong> - Mi a projekt célja és kinek készül?</li>
                      <li><strong>Vizuális stílus</strong> - Modern, minimalista, játékos, elegáns?</li>
                      <li><strong>Színvilág</strong> - Konkrét színkódok vagy általános színsémák</li>
                      <li><strong>Felhasználói folyamatok</strong> - Milyen interakciókat kell támogatnia?</li>
                      <li><strong>Komponensek listája</strong> - Milyen UI elemekre van szükség?</li>
                      <li><strong>Reszponzivitás</strong> - Milyen képernyőméretekre optimalizáljunk?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-md border border-red-100">
                    <h4 className="font-medium text-red-800 mb-2">❌ Amit kerülj:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li><strong>Túl általános kérések</strong> - "Csinálj egy szép weboldalt"</li>
                      <li><strong>Ellentmondásos utasítások</strong> - "Legyen minimalista, de sok animációval"</li>
                      <li><strong>Túl sok funkció egyszerre</strong> - Inkább bontsd kisebb részekre</li>
                      <li><strong>Technikai zsargon</strong> - Hacsak nem specifikus implementációt kérsz</li>
                      <li><strong>Homályos elvárások</strong> - "Valami modernebb kellene"</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Prompt fejlesztési stratégiák</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers">
                        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                        <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.5"/>
                        <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2.6 17.5"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Iteratív megközelítés</h4>
                      <p className="text-sm text-muted-foreground">Kezdj egy alapvető prompttal, majd fokozatosan finomítsd a részleteket. Minden iteráció után értékeld az eredményt és adj hozzá további specifikációkat.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-component">
                        <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/>
                        <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/>
                        <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/>
                        <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Komponens-alapú tervezés</h4>
                      <p className="text-sm text-muted-foreground">Bontsd le a projektet kisebb, jól definiált komponensekre. Így könnyebb specifikus utasításokat adni minden elemhez, és a végeredmény is koherensebb lesz.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 rounded-full p-2 text-amber-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                        <path d="M9 18h6"/>
                        <path d="M10 22h4"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Referenciák használata</h4>
                      <p className="text-sm text-muted-foreground">Hivatkozz létező weboldalakra, dizájn rendszerekre vagy UI könyvtárakra a promptodban. Például: "A navigáció hasonlítson az Airbnb-re, de használjon shadcn/ui komponenseket".</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 text-green-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <polyline points="16 11 18 13 22 9"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Felhasználói szempontú leírás</h4>
                      <p className="text-sm text-muted-foreground">Írd le a felhasználói folyamatokat és élményeket, ne csak a vizuális elemeket. Például: "A felhasználónak egyszerűen kell tudnia szűrni a termékeket kategória és ár szerint".</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[800px] mt-8">
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg border border-purple-200 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Jó vs. Rossz Prompt Összehasonlítás</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-md p-4 border border-red-200">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="15" y1="9" x2="9" y2="15"/>
                          <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                        <h4 className="font-medium text-red-700">Gyenge prompt:</h4>
                      </div>
                      <div className="bg-slate-50 p-3 rounded text-sm">
                        "Készíts egy weboldalt egy étteremnek."
                      </div>
                      <p className="text-sm mt-3 text-slate-600">Ez túl általános, nem ad elég információt a stílusról, funkcionalitásról vagy a célközönségről.</p>
                    </div>
                    
                    <div className="bg-white rounded-md p-4 border border-green-200">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="m9 12 2 2 4-4"/>
                        </svg>
                        <h4 className="font-medium text-green-700">Jó prompt:</h4>
                      </div>
                      <div className="bg-slate-50 p-3 rounded text-sm">
                        "Készíts egy modern, elegáns weboldalt egy olasz étteremnek. A célközönség a 30-50 éves, magasabb jövedelmű városi lakosság. Fontos funkciók: étlap böngészés, asztalfoglalás, kapcsolati információk és galéria az ételekről. Színvilág: sötét olívazöld, krémfehér és arany árnyalatok."
                      </div>
                      <p className="text-sm mt-3 text-slate-600">Ez a prompt konkrét információkat ad a stílusról, célközönségről, funkciókról és színvilágról.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Példa egy részletes promptra:</h3>
                <pre className="bg-slate-50 rounded-md p-4 font-mono whitespace-pre-wrap text-left text-sm">
{`# Hozz létre egy kattintható prototípust az alábbi dizájn specifikáció alapján:

## 1. Termékáttekintés
- **Platform:** Reszponzív web (asztali nézetre optimalizált)
- **Célközönség:** Gasztronómia iránt érdeklődők

## 2. Fő cél
- Segítsen a felhasználóknak megtalálni a legjobb pizzázókat a városukban.

## 3. Kulcsfontosságú felhasználói folyamat
- **Pizzázók keresése**

## 4. Főoldalak és komponensek
### **Keresőoldal**
- **Komponensek:**
  - Keresősáv (város vagy étterem név megadására)
  - Szűrők (értékelés, ár, távolság stb.)
  - Pizzázók listája értékelésekkel és képekkel
- **Fő interakciók:**
  - A felhasználó beírja a város vagy étterem nevét, és megjelennek az eredmények
  - A felhasználó szűrőket alkalmaz a keresés finomítására
  - A felhasználó rákattint egy pizzázóra, hogy részletes információkat lásson`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TIPP: Használj vizuális referenciákat */}
        <section id="tip-2" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">2️⃣ Használj vizuális referenciákat</h2>
                <p className="mx-auto max-w-[700px]">Hogyan irányíthatod a V0-t képek és referenciák segítségével</p>
              </div>
              
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">A V0 képes képeket és vizuális referenciákat feldolgozni, és ezek alapján generálni a kívánt felületet. Ez különösen hasznos, ha van egy konkrét dizájn elképzelésed.</p>
                <p className="mb-4">Csatolhatsz képernyőképeket, vázlatokat, vagy akár más weboldalakról készült képeket, és kérheted a V0-t, hogy kövesse azok stílusát vagy elrendezését.</p>
                <p className="mb-4">A vizuális referenciák használata jelentősen javíthatja az eredmények pontosságát és csökkentheti a félreértések lehetőségét.</p>
              </div>

              {/* Interaktív Preview komponens */}
              <div className="mx-auto max-w-[800px] mt-8">
                <ImageReferencePreview />
              </div>

              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Tippek vizuális referenciák használatához</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 text-blue-800">
                      <svg xmlns="http://www.w3.org/2000
/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Válassz minőségi referenciákat</h4>
                      <p className="text-sm text-muted-foreground">Használj jó felbontású, tiszta képeket. A homályos vagy alacsony minőségű képek félrevezethetik az AI-t.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 text-green-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        <path d="m15 5 4 4"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Jelöld meg a fontos részeket</h4>
                      <p className="text-sm text-muted-foreground">Ha egy képen csak bizonyos elemek fontosak, jelöld meg őket vagy magyarázd el a promptban, hogy mire kell figyelni.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette">
                        <circle cx="13.5" cy="6.5" r=".5"/>
                        <circle cx="17.5" cy="10.5" r=".5"/>
                        <circle cx="8.5" cy="7.5" r=".5"/>
                        <circle cx="6.5" cy="12.5" r=".5"/>
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Kombináld a szöveges leírással</h4>
                      <p className="text-sm text-muted-foreground">A legjobb eredményt akkor éred el, ha a vizuális referenciát részletes szöveges leírással kombinálod, amely elmagyarázza, mit szeretnél átvenni a képről.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 rounded-full p-2 text-amber-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shuffle">
                        <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/>
                        <path d="m18 2 4 4-4 4"/>
                        <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/>
                        <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/>
                        <path d="m18 14 4 4-4 4"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Keverj különböző forrásokat</h4>
                      <p className="text-sm text-muted-foreground">Használhatsz több különböző referenciát is, például egy képet a színekhez, egy másikat az elrendezéshez, és egy harmadikat a tipográfiához.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[800px] mt-8">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-blue-200 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Példa prompt vizuális referenciával</h3>
                  
                  <div className="bg-white rounded-md p-4 border border-blue-200">
                    <pre className="text-sm whitespace-pre-wrap">
{`Készíts egy modern, minimalista landing page-et egy tech startup számára. 

A dizájn hasonlítson a csatolt képre, különösen:
- A fejléc elrendezése (logo balra, menü jobbra)
- A hero szekció elrendezése (szöveg balra, illusztráció jobbra)
- A színátmenetes háttér stílusa

De a következő módosításokkal:
- Használj kék és zöld színeket a lila helyett
- A betűtípus legyen sans-serif, modern
- Adj hozzá egy "Kapcsolat" gombot a menübe
- A hero szekcióban legyen egy email feliratkozási űrlap`}
                    </pre>
                    
                    <div className="mt-4 border border-slate-200 rounded-md p-2">
                      <p className="text-xs text-muted-foreground mb-2">Csatolt referencia kép:</p>
                      <div className="relative h-40 bg-slate-100 rounded flex items-center justify-center">
                        <Image 
                          src="/placeholder.svg?height=160&width=300&text=Landing+Page+Reference" 
                          alt="Landing page reference"
                          width={300}
                          height={160}
                          className="rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TIPP: Iteratív fejlesztés és finomítás */}
        <section id="tip-3" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">3️⃣ Iteratív fejlesztés és finomítás</h2>
                <p className="mx-auto max-w-[700px]">Hogyan finomíthatod fokozatosan a V0 által generált eredményeket</p>
              </div>
              
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">Az AI-alapú fejlesztés nem egyszeri folyamat, hanem iteratív. Kezdj egy alapvető prompttal, értékeld az eredményt, majd finomítsd a kérésedet a következő körben.</p>
                <p className="mb-4">Minden iterációval egyre közelebb kerülsz a kívánt végeredményhez, miközben a V0 is jobban megérti, mit szeretnél elérni.</p>
                <p className="mb-4">Ne félj kísérletezni és több különböző megközelítést kipróbálni ugyanarra a problémára.</p>
              </div>

              {/* Interaktív Preview komponens */}
              <div className="mx-auto max-w-[800px] mt-8">
                <IterativeDesignPreview />
              </div>

              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Az iteratív fejlesztés folyamata</h3>
                
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                      <div className="flex-1 pt-3">
                        <h4 className="font-medium text-lg mb-2">Kezdeti prompt</h4>
                        <p className="text-muted-foreground">Kezdd egy egyszerű, de konkrét prompttal, amely leírja az alapvető igényeidet. Ne próbálj túl sok részletet belezsúfolni az első körben.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                      <div className="flex-1 pt-3">
                        <h4 className="font-medium text-lg mb-2">Értékelés</h4>
                        <p className="text-muted-foreground">Értékeld az eredményt: mi tetszik, mi nem, és mi hiányzik. Készíts jegyzeteket a következő iterációhoz.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                      <div className="flex-1 pt-3">
                        <h4 className="font-medium text-lg mb-2">Finomítás</h4>
                        <p className="text-muted-foreground">Készíts egy új promptot, amely tartalmazza az eredeti kérést, valamint a konkrét módosításokat és finomításokat. Légy specifikus a változtatásokkal kapcsolatban.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">4</div>
                      <div className="flex-1 pt-3">
                        <h4 className="font-medium text-lg mb-2">Ismétlés</h4>
                        <p className="text-muted-foreground">Ismételd a 2. és 3. lépést, amíg el nem éred a kívánt eredményt. Minden iterációval egyre specifikusabb lehetsz.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">5</div>
                      <div className="flex-1 pt-3">
                        <h4 className="font-medium text-lg mb-2">Véglegesítés</h4>
                        <p className="text-muted-foreground">Az utolsó iterációban kérhetsz apró finomításokat, vagy exportálhatod a kódot további testreszabáshoz.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[800px] mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                      Hatékony iteráció
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>Egy iterációban csak néhány aspektusra fókuszálj</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>Hivatkozz az előző eredményre konkrét részletekkel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>Használj pontos leírásokat a módosításokhoz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>Tartsd meg, ami jó, és csak azt változtasd, ami szükséges</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-border p-6 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="15" y1="9" x2="9" y2="15"/>
                        <line x1="9" y1="9" x2="15" y2="15"/>
                      </svg>
                      Kerülendő hibák
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>Túl sok változtatás kérése egyszerre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>Homályos visszajelzések ("tedd szebbé", "modernebb legyen")</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>Az eredeti prompt teljes újraírása minden iterációban</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>Ellentmondásos utasítások adása különböző iterációkban</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TIPP: Komponens-alapú megközelítés */}
        <section id="tip-4" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">4️⃣ Komponens-alapú megközelítés</h2>
                <p className="mx-auto max-w-[700px]">Hogyan bonthatod le a projekteket kezelhetőbb részekre</p>
              </div>
              
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">A modern webalkalmazások komponensekből épülnek fel. Ahelyett, hogy egy teljes oldalt próbálnál egyszerre generálni, bontsd le a projektet kisebb, jól definiált komponensekre.</p>
                <p className="mb-4">Ez a megközelítés lehetővé teszi, hogy minden komponensre külön fókuszálj, és pontosabb eredményeket érj el. Később ezeket a komponenseket összeállíthatod egy teljes oldallá.</p>
                <p className="mb-4">A komponens-alapú megközelítés különösen hasznos összetett felületek esetén, ahol sok különböző elem és interakció van.</p>
              </div>

              {/* Interaktív Preview komponens */}
              <div className="mx-auto max-w-[800px] mt-8">
                <ComponentBasedPreview />
              </div>

              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Komponens-alapú tervezés lépései</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-puzzle">
                        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.235-1.873a1.95 1.95 0 0 0-1.929-2.2l-3.334.07c-.666.014-1.303-.28-1.75-.8a2.26 2.26 0 0 1-.51-1.904l.291-1.322a2 2 0 0 0-1.184-2.305l-1.612-.67a1.98 1.98 0 0 1-1.221-1.883V2"/>
                        <path d="M14.257 15.962a2.278 2.278 0 0 0-1.306 1.058l-.565 1.115a2.08 2.08 0 0 1-1.872 1.12 2.08 2.08 0 0 1-1.872-1.12l-.53-1.045a2.278 2.278 0 0 0-1.308-1.058l-1.54-.6a2.08 2.08 0 0 1-1.366-1.957V12.2c0-.802.503-1.517 1.258-1.795l1.315-.481a2.28 2.28 0 0 0 1.545-1.560l.324-1.04a2.08 2.08 0 0 1 1.992-1.425h.823c.856 0 1.607.548 1.873 1.36l.333 1.02a2.28 2.28 0 0 0 1.546 1.56l1.069.39c.823.3 1.368 1.067 1.368 1.929v.85c0 .864-.55 1.63-1.368 1.93l-1.42.518a2.28 2.28 0 0 0-1.376 1.214l-.551 1.165c-.252.534-.77.888-1.353.888h-1.058a1.58 1.58 0 0 1-1.353-.888l-.565-1.193a2.28 2.28 0 0 0-1.377-1.214l-1.17-.43"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">1. Azonosítsd a komponenseket</h4>
                      <p className="text-sm text-muted-foreground">Elemezd a tervezett felületet, és azonosítsd a különálló komponenseket. Például: navigáció, hero szekció, termék kártya, űrlap, stb.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 text-green-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-checks">
                        <path d="m3 7 3 3 3-3"/>
                        <path d="M6 10V5"/>
                        <path d="M12 6h9"/>
                        <path d="M3 17l3 3 3-3"/>
                        <path d="M6 20v-5"/>
                        <path d="M12 16h9"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">2. Határozd meg a komponensek tulajdonságait</h4>
                      <p className="text-sm text-muted-foreground">Minden komponenshez határozd meg a szükséges tulajdonságokat: méret, szín, tartalom, interakciók, stb.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-component">
                        <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/>
                        <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/>
                        <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/>
                        <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">3. Generáld a komponenseket egyenként</h4>
                      <p className="text-sm text-muted-foreground">Kérd a V0-t, hogy generálja a komponenseket egyenként, részletes leírással mindegyikhez.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 rounded-full p-2 text-amber-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-combine">
                        <rect width="8" height="8" x="2" y="2" rx="2"/>
                        <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/>
                        <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"/>
                        <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1"/>
                        <polyline points="7 21 10 18 7 15"/>
                        <rect width="8" height="8" x="14" y="14" rx="2"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">4. Állítsd össze a komponenseket</h4>
                      <p className="text-sm text-muted-foreground">Miután minden komponens elkészült, kérd a V0-t, hogy állítsa össze őket egy teljes oldallá, figyelembe véve az elrendezést és a reszponzivitást.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[800px] mt-8">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border border-green-200 p-6">
                  <h3 className="text-xl font-semibold mb-4
 text-center">Példa komponens-alapú promptra</h3>
                  
                  <div className="bg-white rounded-md p-4 border border-green-200">
                    <pre className="text-sm whitespace-pre-wrap">
{`Készíts egy termék részletező oldalt egy e-commerce webshophoz a következő komponensekkel:

1. Termék galéria komponens
   - Főkép nagyobb méretben
   - Miniatűr képek alatta, amelyekre kattintva változik a főkép
   - Nagyítás funkció a főképen

2. Termék információs komponens
   - Termék név és ár
   - Rövid leírás
   - Értékelések (5 csillagos rendszer)
   - Méret választó (S, M, L, XL)
   - Szín választó (legalább 3 szín)

3. Vásárlási komponens
   - Mennyiség választó
   - "Kosárba" gomb
   - "Kedvencekhez" gomb
   - Szállítási információk

4. Termék részletek komponens
   - Részletes leírás
   - Anyag és ápolási információk
   - Méretek táblázata`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TIPP: Stílus és dizájn rendszer meghatározása */}
        <section id="tip-5" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">5️⃣ Stílus és dizájn rendszer meghatározása</h2>
                <p className="mx-auto max-w-[700px]">Hogyan biztosíthatod a konzisztens megjelenést a V0 generált felületeken</p>
              </div>
              
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">A konzisztens dizájn kulcsfontosságú a professzionális felhasználói élmény szempontjából. A V0 képes követni egy meghatározott dizájn rendszert, ha megfelelően leírod azt.</p>
                <p className="mb-4">Egy jól definiált stílus rendszer tartalmazza a színeket, tipográfiát, komponensek stílusát és az elrendezési szabályokat.</p>
                <p className="mb-4">Ha már van meglévő dizájn rendszered vagy brand guide-od, használd azt referenciaként a V0 promptokban.</p>
              </div>

              {/* Interaktív Preview komponens */}
              <div className="mx-auto max-w-[800px] mt-8">
                <StyleSystemPreview />
              </div>

              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Dizájn rendszer elemei</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                      <h4 className="font-medium text-blue-800 mb-2">🎨 Színek</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Elsődleges szín (gombok, kiemelések)</li>
                        <li>Másodlagos szín (másodlagos elemek)</li>
                        <li>Semleges színek (háttér, szöveg)</li>
                        <li>Állapot színek (siker, hiba, figyelmeztetés)</li>
                      </ul>
                      <div className="mt-3 flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600"></div>
                        <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                        <div className="w-8 h-8 rounded-full bg-green-500"></div>
                        <div className="w-8 h-8 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
                      <h4 className="font-medium text-purple-800 mb-2">🔤 Tipográfia</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Betűtípus(ok) (sans-serif, serif)</li>
                        <li>Betűméretek (főcímek, alcímek, szöveg)</li>
                        <li>Betűvastagság (normál, félkövér, kövér)</li>
                        <li>Sormagasság és betűköz</li>
                      </ul>
                      <div className="mt-3 space-y-2">
                        <p className="text-2xl font-bold">Főcím (24px)</p>
                        <p className="text-xl font-semibold">Alcím (20px)</p>
                        <p className="text-base">Normál szöveg (16px)</p>
                        <p className="text-sm">Kis szöveg (14px)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-md border border-green-100">
                      <h4 className="font-medium text-green-800 mb-2">🧩 Komponensek</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Gombok (elsődleges, másodlagos, körvonal)</li>
                        <li>Űrlap elemek (input, select, checkbox)</li>
                        <li>Kártyák és konténerek</li>
                        <li>Navigációs elemek</li>
                        <li>Értesítések és üzenetek</li>
                      </ul>
                      <div className="mt-3 space-y-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Elsődleges gomb</button>
                        <div className="px-4 py-2 border border-slate-200 rounded-md">Kártya</div>
                        <input type="text" className="px-3 py-2 border border-slate-200 rounded-md w-full" placeholder="Input mező" />
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
                      <h4 className="font-medium text-amber-800 mb-2">📏 Elrendezés</h4>
                      <ul className="space-y-2 text-sm">
                        <li>Rács rendszer (12 oszlopos, flexbox)</li>
                        <li>Térközök és margók</li>
                        <li>Reszponzív töréspontok</li>
                        <li>Konténer maximális szélessége</li>
                        <li>Igazítási szabályok</li>
                      </ul>
                      <div className="mt-3">
                        <div className="grid grid-cols-12 gap-1 h-8">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="bg-amber-200 h-full"></div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span>xs</span>
                          <span>sm</span>
                          <span>md</span>
                          <span>lg</span>
                          <span>xl</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[800px] mt-8">
                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg border border-indigo-200 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Példa stílus rendszer promptra</h3>
                  
                  <div className="bg-white rounded-md p-4 border border-indigo-200">
                    <pre className="text-sm whitespace-pre-wrap">
{`Készíts egy kapcsolatfelvételi űrlapot egy weboldal számára a következő stílus rendszer alapján:

Színek:
- Elsődleges szín: #6366f1 (indigo)
- Másodlagos szín: #f97316 (narancs)
- Háttér: #f8fafc (világos szürke)
- Szöveg: #1e293b (sötét szürke)

Tipográfia:
- Főcímek: Inter, 24px, félkövér
- Alcímek: Inter, 18px, félkövér
- Normál szöveg: Inter, 16px, normál
- Kis szöveg: Inter, 14px, normál

Komponensek:
- Gombok: lekerekített sarkok (8px), átmenetes háttér, hover effekt
- Input mezők: lekerekített sarkok (8px), világos háttér, fókusz effekt
- Kártyák: fehér háttér, enyhe árnyék, lekerekített sarkok (12px)

Elrendezés:
- Maximális szélesség: 1200px
- Belső margók: 24px
- Elemek közötti távolság: 16px`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TIPP: Felhasználói folyamatok részletes leírása */}
        <section id="tip-6" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">6️⃣ Felhasználói folyamatok részletes leírása</h2>
                <p className="mx-auto max-w-[700px]">Hogyan tervezhetsz interaktív és felhasználóbarát élményeket</p>
              </div>
              
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">A jó felhasználói élmény nem csak a vizuális megjelenésről szól, hanem a felhasználói folyamatokról is. A V0 képes komplex felhasználói folyamatokat generálni, ha részletesen leírod azokat.</p>
                <p className="mb-4">Határozd meg a felhasználói folyamat minden lépését, beleértve a validációkat, hibaüzeneteket és visszajelzéseket.</p>
                <p className="mb-4">A részletes felhasználói folyamatok segítenek abban, hogy a generált felület ne csak jól nézzen ki, hanem jól is működjön.</p>
              </div>

              {/* Interaktív Preview komponens */}
              <div className="mx-auto max-w-[800px] mt-8">
                <UserFlowPreview />
              </div>

              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Felhasználói folyamat tervezési szempontok</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2 text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route">
                        <circle cx="6" cy="19" r="3"/>
                        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                        <circle cx="18" cy="5" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Lépések meghatározása</h4>
                      <p className="text-sm text-muted-foreground">Határozd meg a folyamat minden lépését, a kezdőponttól a végpontig. Például egy regisztrációs folyamat esetén: adatok megadása, validáció, megerősítés, sikeres regisztráció.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full p-2 text-green-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-check">
                        <path d="M18 6 7 17l-5-5"/>
                        <path d="m22 10-7.5 7.5L13 16"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Validációk és hibaüzenetek</h4>
                      <p className="text-sm text-muted-foreground">Határozd meg a validációs szabályokat minden beviteli mezőhöz, és adj meg konkrét hibaüzeneteket a különböző hibatípusokhoz.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 rounded-full p-2 text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch">
                        <circle cx="12" cy="18" r="3"/>
                        <circle cx="6" cy="6" r="3"/>
                        <circle cx="18" cy="6" r="3"/>
                        <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/>
                        <path d="M12 12v3"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Elágazások és alternatív útvonalak</h4>
                      <p className="text-sm text-muted-foreground">Gondold át a különböző útvonalakat, amelyeket a felhasználó követhet. Például: "Elfelejtett jelszó" folyamat, vagy különböző regisztrációs módok.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 rounded-full p-2 text-amber-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-more">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        <path d="M8 10h.01"/>
                        <path d="M12 10h.01"/>
                        <path d="M16 10h.01"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visszajelzések és megerősítések</h4>
                      <p className="text-sm text-muted-foreground">Határozd meg, hogyan kap visszajelzést a felhasználó a folyamat során. Például: töltőindikátorok, sikeres művelet visszaigazolása, vagy hibaüzenetek.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-2 text-red-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo-2">
                        <path d="M9 14 4 9l5-5"/>
                        <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visszalépési lehetőségek</h4>
                      <p className="text-sm text-muted-foreground">Gondoskodj arról, hogy a felhasználó vissza tudjon lépni a folyamat bármely pontján, vagy meg tudja szakítani azt, ha szükséges.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-[800px] mt-8">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg border border-blue-200 p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">Példa felhasználói folyamat promptra</h3>
                  
                  <div className="bg-white rounded-md p-4 border border-blue-200">
                    <pre className="text-sm whitespace-pre-wrap">
{`Készíts egy jelszó-visszaállítási folyamatot egy webalkalmazás számára a következő lépésekkel:

1. Email megadása
   - A felhasználó megadja az email címét
   - Validáció: érvényes email formátum
   - Hibaüzenet: "Kérjük, adjon meg egy érvényes email címet"
   - Sikeres esetben: "Ellenőrizze email fiókját a további utasításokért"

2. Kód ellenőrzése
   - A felhasználó megadja a kapott 6 jegyű kódot
   - Validáció: 6 számjegy
   - Hibaüzenet: "Érvénytelen kód. Kérjük, ellenőrizze és próbálja újra"
   - "Nem kapta meg a kódot?" opció újraküldéshez
   - Sikeres esetben: továbblépés az új jelszó megadásához

3. Új jelszó megadása
   - A felhasználó megad egy új jelszót és megerősíti azt
   - Validáció: minimum 8 karakter, tartalmazzon nagybetűt, kisbetűt és számot
   - Jelszó erősség indikátor
   - Hibaüzenet: "A jelszavak nem egyeznek" vagy "A jelszó nem elég erős"
   - Sikeres esetben: "Jelszava sikeresen megváltoztatva"

4. Sikeres visszaállítás
   - Visszaigazoló üzenet
   - "Vissza a bejelentkezéshez" gomb

Minden lépésnél legyen lehetőség visszalépni az előző lépésre. A folyamat legyen lépésenkénti (wizard), vizuálisan jelezve, hogy a felhasználó hol tart a folyamatban.`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TIPP: Visszajelzés és módosítások kérése */}
        <section id="tip-7" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container">
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">7️⃣ Visszajelzés és módosítások kérése</h2>
                <p className="mx-auto max-w-[700px]">Hogyan kérhetsz célzott módosításokat a generált felületeken</p>
              </div>
              
              <div className="mx-auto max-w-[800px] text-left mt-6">
                <p className="mb-4">A V0 kiválóan alkalmas a generált felületek módosítására konkrét visszajelzések alapján. Ahelyett, hogy újrakezdenéd a teljes folyamatot, kérhetsz célzott módosításokat.</p>
                <p className="mb-4">A hatékony visszajelzés konkrét, részletes és konstruktív. Kerüld az általános megjegyzéseket, mint például "tedd szebbé" vagy "modernebb legyen".</p>
                <p className="mb-4">Használj listákat vagy számozott pontokat a módosítási kérések rendszerezéséhez, így a V0 könnyebben követheti a kéréseidet.</p>
              </div>

              {/* Interaktív Preview komponens */}
              <div className="mx-auto max-w-[800px] mt-8">
                <FeedbackPreview />
              </div>

              <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
                <h3 className="text-xl font-semibold mb-4">Hatékony visszajelzés technikák</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-md border border-green-100">
                    <h4 className="font-medium text-green-800 mb-2">✅ Hatékony visszajelzés</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>"A fejléc háttérszínét változtasd kékről zöldre (#34d399)"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>"A 'Küldés' gomb legyen nagyobb, és változtasd a szövegét 'Küldés most'-ra"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>"Adj hozzá egy 'Elfelejtett jelszó' linket a jelszó mező alá"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>"A kártyák közötti távolságot növeld 16px-ről 24px-re"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mt-0.5">
                          <path d="m5 12 5 5L20 7"/>
                        </svg>
                        <span>"Cseréld ki a 'Termékek' szekciót egy 3 oszlopos elrendezésre"</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-md border border-red-100">
                    <h4 className="font-medium text-red-800 mb-2">❌ Nem hatékony visszajelzés</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>"Tedd szebbé a fejlécet"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>"A gomb nem elég feltűnő"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>"Valami hiányzik az űrlapból"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 12 12"/>
                        </svg>
                        <span>"A kártyák túl közel vannak egymáshoz"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mt-0.5">
                          <path d="M18 6 6 18"/>
                          <path d="m6 6 \

