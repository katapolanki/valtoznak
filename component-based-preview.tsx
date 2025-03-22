"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"
import Image from "next/image"

export function ComponentBasedPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [activeTab, setActiveTab] = useState<"monolithic" | "component">("monolithic")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Komponens-alapú Megközelítés Előnézet</h3>
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
        defaultValue="monolithic"
        className="p-4"
        onValueChange={(value) => setActiveTab(value as "monolithic" | "component")}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Megközelítés:</h4>
          <TabsList>
            <TabsTrigger value="monolithic">Monolitikus</TabsTrigger>
            <TabsTrigger value="component">Komponens-alapú</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="monolithic" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy termék oldalt egy e-commerce webshophoz, ahol a felhasználók megtekinthetik a termék részleteit, választhatnak méretet és színt, valamint kosárba tehetik a terméket.`}
          </div>
        </TabsContent>

        <TabsContent value="component" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy termék oldalt egy e-commerce webshophoz a következő komponensekkel:

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
          </div>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border">
        <div className="p-4">
          <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

          {activeView === "preview" ? (
            <div className="rounded-md border border-border overflow-hidden">
              {activeTab === "monolithic" ? (
                <div className="bg-white p-6">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="bg-gray-100 rounded-lg aspect-square mb-4"></div>
                        <div className="grid grid-cols-4 gap-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-gray-100 rounded-lg aspect-square"></div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h1 className="text-2xl font-bold mb-2">Termék neve</h1>
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground ml-2">42 értékelés</span>
                        </div>

                        <p className="text-2xl font-bold mb-4">29 990 Ft</p>

                        <p className="mb-6">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                          lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                        </p>

                        <div className="mb-6">
                          <h3 className="text-sm font-medium mb-2">Méret</h3>
                          <div className="flex gap-2">
                            {["S", "M", "L", "XL"].map((size) => (
                              <button
                                key={size}
                                className="w-10 h-10 border rounded-md flex items-center justify-center hover:border-black"
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-sm font-medium mb-2">Szín</h3>
                          <div className="flex gap-2">
                            {["bg-black", "bg-blue-500", "bg-red-500"].map((color, i) => (
                              <button
                                key={i}
                                className={`w-8 h-8 ${color} rounded-full border-2 border-white outline outline-1 outline-gray-300`}
                              ></button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center border rounded-md">
                            <button className="w-10 h-10 flex items-center justify-center">-</button>
                            <span className="w-10 h-10 flex items-center justify-center">1</span>
                            <button className="w-10 h-10 flex items-center justify-center">+</button>
                          </div>

                          <button className="flex-1 bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800">
                            Kosárba
                          </button>

                          <button className="w-10 h-10 border rounded-md flex items-center justify-center">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h2 className="text-xl font-bold mb-4">Termék részletek</h2>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                        lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
                        ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                        lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white">
                  <div className="max-w-6xl mx-auto p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Termék galéria komponens */}
                      <div className="space-y-4">
                        <div className="relative bg-gray-100 rounded-lg aspect-square overflow-hidden group">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                              src="/placeholder.svg?height=500&width=500&text=Termék+Főkép"
                              alt="Termék főkép"
                              width={500}
                              height={500}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-10 transition-all">
                            <button className="bg-white rounded-full p-2 shadow-md">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                          {[1, 2, 3, 4].map((i) => (
                            <button
                              key={i}
                              className={`bg-gray-100 rounded-lg aspect-square overflow-hidden ${i === 1 ? "ring-2 ring-black" : ""}`}
                            >
                              <Image
                                src={`/placeholder.svg?height=100&width=100&text=Kép${i}`}
                                alt={`Termék kép ${i}`}
                                width={100}
                                height={100}
                                className="object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        {/* Termék információs komponens */}
                        <div className="mb-8">
                          <h1 className="text-3xl font-bold mb-2">Premium Póló</h1>
                          <div className="flex items-center mb-4">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${i <= 4 ? "text-yellow-400" : "text-gray-300"}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground ml-2">4.2 (86 értékelés)</span>
                          </div>

                          <p className="text-2xl font-bold mb-4">29 990 Ft</p>

                          <p className="mb-6 text-muted-foreground">
                            Prémium minőségű póló 100% organikus pamutból. Kényelmes viselet minden alkalomra, tartós
                            anyag és modern szabás.
                          </p>

                          <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Méret</h3>
                            <div className="flex flex-wrap gap-2">
                              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                                <button
                                  key={size}
                                  className={`min-w-[3rem] h-10 border rounded-md flex items-center justify-center hover:border-black transition-colors ${size === "M" ? "bg-black text-white" : ""}`}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h3 className="text-sm font-medium mb-2">Szín</h3>
                            <div className="flex gap-3">
                              {[
                                { name: "Fekete", class: "bg-black" },
                                { name: "Kék", class: "bg-blue-600" },
                                { name: "Piros", class: "bg-red-600" },
                                { name: "Zöld", class: "bg-green-600" },
                              ].map((color, i) => (
                                <button key={i} className="flex flex-col items-center gap-1">
                                  <div
                                    className={`w-8 h-8 ${color.class} rounded-full border-2 border-white outline ${i === 0 ? "outline-black" : "outline-gray-300"}`}
                                  ></div>
                                  <span className="text-xs">{color.name}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Vásárlási komponens */}
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center border rounded-md bg-white">
                              <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20 12H4"
                                  ></path>
                                </svg>
                              </button>
                              <span className="w-10 h-10 flex items-center justify-center font-medium">1</span>
                              <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                  ></path>
                                </svg>
                              </button>
                            </div>

                            <div className="flex-1 grid grid-cols-2 gap-2">
                              <button className="bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 font-medium">
                                Kosárba
                              </button>

                              <button className="border border-black bg-white py-3 px-4 rounded-md hover:bg-gray-50 font-medium flex items-center justify-center gap-2">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  ></path>
                                </svg>
                                Kedvencekhez
                              </button>
                            </div>
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-green-500"
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
                              <span>Ingyenes szállítás 20.000 Ft felett</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-green-500"
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
                              <span>30 napos pénzvisszafizetési garancia</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-green-500"
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
                              <span>Várható szállítás: 2-4 munkanap</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Termék részletek komponens */}
                    <div className="mt-12 border-t pt-8">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                          <h2 className="text-xl font-bold mb-4">Termék részletek</h2>
                          <div className="space-y-4">
                            <p>
                              A Premium Póló a legmagasabb minőségű organikus pamutból készült, amely biztosítja a
                              maximális kényelmet és tartósságot. Modern szabása tökéletesen illeszkedik a testhez,
                              miközben elegendő mozgásteret biztosít.
                            </p>
                            <p>
                              Ez a póló ideális választás mindennapi viseletre, de elég elegáns ahhoz, hogy alkalmi
                              eseményeken is viselhető legyen. Az anyag előkezelésnek köszönhetően minimális a
                              zsugorodás mosás után.
                            </p>
                            <p>
                              A környezettudatos gyártási folyamatnak köszönhetően a termék előállítása során 50%-kal
                              kevesebb vizet használtunk fel, mint a hagyományos pólók esetében.
                            </p>
                          </div>

                          <h3 className="text-lg font-bold mt-6 mb-3">Anyag és ápolás</h3>
                          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                            <li>100% organikus pamut</li>
                            <li>Gépi mosás 30°C-on</li>
                            <li>Nem fehéríthető</li>
                            <li>Alacsony hőfokon vasalható</li>
                            <li>Nem szárítható gépben</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold mb-4">Mérettáblázat</h3>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-gray-50 border-b">
                                  <th className="py-2 px-4 text-left">Méret</th>
                                  <th className="py-2 px-4 text-center">Mellbőség (cm)</th>
                                  <th className="py-2 px-4 text-center">Hossz (cm)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[
                                  { size: "XS", chest: "86-91", length: "66" },
                                  { size: "S", chest: "91-96", length: "68" },
                                  { size: "M", chest: "96-101", length: "70" },
                                  { size: "L", chest: "101-106", length: "72" },
                                  { size: "XL", chest: "106-111", length: "74" },
                                  { size: "XXL", chest: "111-116", length: "76" },
                                ].map((row, i) => (
                                  <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b`}>
                                    <td className="py-2 px-4 font-medium">{row.size}</td>
                                    <td className="py-2 px-4 text-center">{row.chest}</td>
                                    <td className="py-2 px-4 text-center">{row.length}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
              <pre className="text-xs">
                {activeTab === "monolithic"
                  ? `// Monolitikus megközelítés
"Készíts egy termék oldalt egy e-commerce webshophoz, ahol a felhasználók megtekinthetik a termék részleteit, választhatnak méretet és színt, valamint kosárba tehetik a terméket."`
                  : `// Komponens-alapú megközelítés
"Készíts egy termék oldalt egy e-commerce webshophoz a következő komponensekkel:

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
   - Méretek táblázata"`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

