"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"

export function IterativeDesignPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [activeIteration, setActiveIteration] = useState<"first" | "second" | "third">("first")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Iteratív Fejlesztés Előnézet</h3>
        <div className="flex items-center gap-2">
          <Button
            variant={activeView === "preview" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveView("preview")}
            className="gap-1"
          >
            <Eye size={16} />
            <span>Előnézet</span>
          </Button>
          <Button
            variant={activeView === "code" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveView("code")}
            className="gap-1"
          >
            <Code size={16} />
            <span>Prompt</span>
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue="first"
        className="p-4"
        onValueChange={(value) => setActiveIteration(value as "first" | "second" | "third")}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Iteráció:</h4>
          <TabsList>
            <TabsTrigger value="first">1. Iteráció</TabsTrigger>
            <TabsTrigger value="second">2. Iteráció</TabsTrigger>
            <TabsTrigger value="third">3. Iteráció</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="first" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal.`}
          </div>
        </TabsContent>

        <TabsContent value="second" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati).
Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó.
Minden csomagnál legyen egy "Leggyakrabban választott" jelölés a Pro csomagnál.
Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat.`}
          </div>
        </TabsContent>

        <TabsContent value="third" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati).
Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó.
Minden csomagnál legyen egy "Leggyakrabban választott" jelölés a Pro csomagnál.
Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat.

Stílus:
- Használj gradiens hátteret a fejlécben (világoskék -> sötétkék)
- A kártyák legyenek fehér hátterűek, lekerekített sarkokkal és enyhe árnyékkal
- A kiemelt csomag (Pro) legyen kék szegéllyel ellátva
- Legyen egy váltógomb, amivel éves/havi árazás között lehet váltani (10% kedvezmény éves fizetésnél)
- Minden kártyán legyen egy "Próbáld ki ingyen" gomb
- A táblázatban használj pipákat és X-eket a funkciók jelölésére`}
          </div>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border">
        <div className="p-4">
          <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

          {activeView === "preview" ? (
            <div className="rounded-md border border-border overflow-hidden">
              {activeIteration === "first" && (
                <div className="bg-white p-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-bold">Árazási csomagok</h2>
                      <p className="text-muted-foreground mt-2">Válaszd ki a számodra megfelelő csomagot</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { name: "Alap", price: "9", features: ["5 projekt", "1 GB tárhely", "Email támogatás"] },
                        {
                          name: "Pro",
                          price: "19",
                          features: ["20 projekt", "10 GB tárhely", "Prioritásos támogatás", "API hozzáférés"],
                        },
                        {
                          name: "Vállalati",
                          price: "49",
                          features: [
                            "Korlátlan projekt",
                            "100 GB tárhely",
                            "24/7 támogatás",
                            "API hozzáférés",
                            "Dedikált szerver",
                          ],
                        },
                      ].map((plan, i) => (
                        <div key={i} className="border rounded-lg p-6">
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <div className="mt-4 mb-6">
                            <span className="text-3xl font-bold">{plan.price}€</span>
                            <span className="text-muted-foreground">/hó</span>
                          </div>
                          <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center">
                                <svg
                                  className="w-5 h-5 text-green-500 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Választás
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeIteration === "second" && (
                <div className="bg-white p-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-bold">Árazási csomagok</h2>
                      <p className="text-muted-foreground mt-2">Válaszd ki a számodra megfelelő csomagot</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          name: "Alap",
                          price: "9",
                          features: ["5 projekt", "1 GB tárhely", "Email támogatás"],
                          popular: false,
                        },
                        {
                          name: "Pro",
                          price: "19",
                          features: ["20 projekt", "10 GB tárhely", "Prioritásos támogatás", "API hozzáférés"],
                          popular: true,
                        },
                        {
                          name: "Vállalati",
                          price: "49",
                          features: [
                            "Korlátlan projekt",
                            "100 GB tárhely",
                            "24/7 támogatás",
                            "API hozzáférés",
                            "Dedikált szerver",
                          ],
                          popular: false,
                        },
                      ].map((plan, i) => (
                        <div
                          key={i}
                          className={`border rounded-lg p-6 relative ${plan.popular ? "border-blue-500 shadow-md" : ""}`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                              Leggyakrabban választott
                            </div>
                          )}
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <div className="mt-4 mb-6">
                            <span className="text-3xl font-bold">{plan.price}€</span>
                            <span className="text-muted-foreground">/hó</span>
                          </div>
                          <ul className="space-y-2 mb-6">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center">
                                <svg
                                  className="w-5 h-5 text-green-500 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button
                            className={`w-full py-2 px-4 ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover:bg-gray-700"} text-white rounded-md`}
                          >
                            Választás
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-16">
                      <h3 className="text-2xl font-bold mb-6 text-center">Funkciók összehasonlítása</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border px-4 py-2 text-left">Funkció</th>
                              <th className="border px-4 py-2 text-center">Alap</th>
                              <th className="border px-4 py-2 text-center">Pro</th>
                              <th className="border px-4 py-2 text-center">Vállalati</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { feature: "Projektek száma", basic: "5", pro: "20", enterprise: "Korlátlan" },
                              { feature: "Tárhely", basic: "1 GB", pro: "10 GB", enterprise: "100 GB" },
                              { feature: "Támogatás", basic: "Email", pro: "Prioritásos", enterprise: "24/7" },
                              { feature: "API hozzáférés", basic: "✕", pro: "✓", enterprise: "✓" },
                              { feature: "Dedikált szerver", basic: "✕", pro: "✕", enterprise: "✓" },
                            ].map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border px-4 py-2">{row.feature}</td>
                                <td className="border px-4 py-2 text-center">{row.basic}</td>
                                <td className="border px-4 py-2 text-center">{row.pro}</td>
                                <td className="border px-4 py-2 text-center">{row.enterprise}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeIteration === "third" && (
                <div>
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-12">
                    <div className="max-w-6xl mx-auto text-center">
                      <h2 className="text-4xl font-bold mb-4">Válaszd ki a megfelelő csomagot</h2>
                      <p className="text-xl opacity-90 mb-8">
                        Minden csomag tartalmazza az alapvető funkciókat, amelyekre szükséged van
                      </p>

                      <div className="inline-flex items-center bg-white/20 p-1 rounded-full mb-8">
                        <button className="px-4 py-2 rounded-full bg-white text-blue-600 font-medium">Havi</button>
                        <button className="px-4 py-2 rounded-full text-white font-medium">Éves (10% kedvezmény)</button>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-6xl mx-auto px-4 -mt-16">
                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          name: "Alap",
                          price: "9",
                          description: "Minden, amire egy kis csapatnak szüksége van",
                          features: [
                            "5 projekt",
                            "1 GB tárhely",
                            "Email támogatás",
                            "Alapvető analitika",
                            "1 felhasználó",
                          ],
                          popular: false,
                        },
                        {
                          name: "Pro",
                          price: "19",
                          description: "Tökéletes növekvő vállalkozások számára",
                          features: [
                            "20 projekt",
                            "10 GB tárhely",
                            "Prioritásos támogatás",
                            "Részletes analitika",
                            "5 felhasználó",
                            "API hozzáférés",
                            "Egyedi domain",
                          ],
                          popular: true,
                        },
                        {
                          name: "Vállalati",
                          price: "49",
                          description: "Fejlett funkciók nagyobb szervezetek számára",
                          features: [
                            "Korlátlan projekt",
                            "100 GB tárhely",
                            "24/7 támogatás",
                            "Fejlett analitika",
                            "Korlátlan felhasználó",
                            "API hozzáférés",
                            "Egyedi domain",
                            "Dedikált szerver",
                            "SSO integráció",
                          ],
                          popular: false,
                        },
                      ].map((plan, i) => (
                        <div
                          key={i}
                          className={`bg-white rounded-xl shadow-lg overflow-hidden ${plan.popular ? "ring-2 ring-blue-500 relative" : ""}`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                              Leggyakrabban választott
                            </div>
                          )}

                          <div className="p-6">
                            <h3 className="text-xl font-bold">{plan.name}</h3>
                            <p className="text-muted-foreground mt-1">{plan.description}</p>

                            <div className="mt-6 mb-6">
                              <span className="text-4xl font-bold">{plan.price}€</span>
                              <span className="text-muted-foreground">/hó</span>
                            </div>

                            <button
                              className={`w-full py-3 px-4 rounded-lg font-medium ${plan.popular ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
                            >
                              Próbáld ki ingyen
                            </button>
                          </div>

                          <div className="bg-gray-50 p-6">
                            <p className="font-medium mb-4">A csomag tartalma:</p>
                            <ul className="space-y-3">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-start">
                                  <svg
                                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-20 mb-12">
                      <h3 className="text-2xl font-bold mb-8 text-center">Részletes funkció összehasonlítás</h3>
                      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-50 border-b">
                              <th className="px-6 py-4 text-left font-medium">Funkció</th>
                              <th className="px-6 py-4 text-center font-medium">Alap</th>
                              <th className="px-6 py-4 text-center font-medium">Pro</th>
                              <th className="px-6 py-4 text-center font-medium">Vállalati</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { feature: "Projektek száma", basic: "5", pro: "20", enterprise: "Korlátlan" },
                              { feature: "Tárhely", basic: "1 GB", pro: "10 GB", enterprise: "100 GB" },
                              { feature: "Felhasználók", basic: "1", pro: "5", enterprise: "Korlátlan" },
                              { feature: "Támogatás", basic: "Email", pro: "Prioritásos", enterprise: "24/7" },
                              { feature: "API hozzáférés", basic: "✕", pro: "✓", enterprise: "✓" },
                              { feature: "Egyedi domain", basic: "✕", pro: "✓", enterprise: "✓" },
                              { feature: "Dedikált szerver", basic: "✕", pro: "✕", enterprise: "✓" },
                              { feature: "SSO integráció", basic: "✕", pro: "✕", enterprise: "✓" },
                            ].map((row, i) => (
                              <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b`}>
                                <td className="px-6 py-4">{row.feature}</td>
                                <td className="px-6 py-4 text-center">{row.basic}</td>
                                <td className="px-6 py-4 text-center">{row.pro}</td>
                                <td className="px-6 py-4 text-center">{row.enterprise}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
              <pre className="text-xs">
                {activeIteration === "first"
                  ? `// 1. Iteráció - Alap prompt
"Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal."`
                  : activeIteration === "second"
                    ? `// 2. Iteráció - Részletesebb prompt
"Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati).
Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó.
Minden csomagnál legyen egy "Leggyakrabban választott" jelölés a Pro csomagnál.
Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat."`
                    : `// 3. Iteráció - Részletes prompt vizuális utasításokkal
"Készíts egy árazási oldalt egy SaaS alkalmazáshoz három különböző csomaggal (Alap, Pro, Vállalati).
Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó.
Minden csomagnál legyen egy "Leggyakrabban választott" jelölés a Pro csomagnál.
Adj hozzá egy összehasonlító táblázatot is a csomagok alatt, amely részletezi a funkciókat.

Stílus:
- Használj gradiens hátteret a fejlécben (világoskék -> sötétkék)
- A kártyák legyenek fehér hátterűek, lekerekített sarkokkal és enyhe árnyékkal
- A kiemelt csomag (Pro) legyen kék szegéllyel ellátva
- Legyen egy váltógomb, amivel éves/havi árazás között lehet váltani (10% kedvezmény éves fizetésnél)
- Minden kártyán legyen egy "Próbáld ki ingyen" gomb
- A táblázatban használj pipákat és X-eket a funkciók jelölésére"`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

