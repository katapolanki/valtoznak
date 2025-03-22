"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"
import Image from "next/image"

export function FeedbackPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [activeTab, setActiveTab] = useState<"initial" | "feedback">("initial")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Visszajelzés és Módosítások Előnézet</h3>
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
        defaultValue="initial"
        className="p-4"
        onValueChange={(value) => setActiveTab(value as "initial" | "feedback")}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Verzió:</h4>
          <TabsList>
            <TabsTrigger value="initial">Kezdeti verzió</TabsTrigger>
            <TabsTrigger value="feedback">Visszajelzés után</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="initial" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy hírlevél feliratkozási komponenst egy weboldal számára.`}
          </div>
        </TabsContent>

        <TabsContent value="feedback" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Módosítsd a hírlevél feliratkozási komponenst a következő visszajelzések alapján:

1. A háttér legyen gradiens (kék -> lila)
2. Adj hozzá egy illusztrációt a bal oldalra
3. A feliratkozási űrlap legyen jobb oldalon
4. Adj hozzá egy "Miért iratkozz fel?" szekciót 3 ponttal
5. Legyen egy GDPR jelölőnégyzet a feliratkozás előtt
6. Adj hozzá egy "Már feliratkoztál? Leiratkozás" linket
7. A gomb legyen nagyobb és feltűnőbb`}
          </div>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border">
        <div className="p-4">
          <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

          {activeView === "preview" ? (
            <div className="rounded-md border border-border overflow-hidden">
              {activeTab === "initial" ? (
                <div className="bg-white p-6">
                  <div className="max-w-md mx-auto">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold">Iratkozz fel hírlevelünkre</h2>
                      <p className="text-muted-foreground mt-2">
                        Értesülj elsőként a legfrissebb hírekről és ajánlatokról.
                      </p>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Email cím</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="email@example.com"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                      >
                        Feliratkozás
                      </button>
                    </form>

                    <div className="mt-4 text-center text-sm text-muted-foreground">
                      <p>Bármikor leiratkozhatsz egy kattintással.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="mb-6">
                          <h2 className="text-3xl font-bold mb-4">Csatlakozz közösségünkhöz</h2>
                          <p className="text-lg opacity-90">
                            Iratkozz fel hírlevelünkre és értesülj elsőként a legfrissebb hírekről, exkluzív
                            ajánlatokról és szakértői tippekről.
                          </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                          <h3 className="text-xl font-semibold mb-4">Miért iratkozz fel?</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <div className="bg-white/20 rounded-full p-1 mt-0.5">
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
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <span>Exkluzív tartalmak és ajánlatok, amelyek csak feliratkozók számára elérhetők</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="bg-white/20 rounded-full p-1 mt-0.5">
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
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <span>Heti szakértői tippek és trükkök, amelyek segítenek céljaid elérésében</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="bg-white/20 rounded-full p-1 mt-0.5">
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
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <span>Elsőként értesülsz az új termékekről és szolgáltatásokról</span>
                            </li>
                          </ul>
                        </div>

                        <div className="relative h-48 md:h-64">
                          <Image
                            src="/placeholder.svg?height=250&width=400&text=Newsletter+Illustration"
                            alt="Newsletter illustration"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="bg-white rounded-xl shadow-xl p-6 text-gray-800">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Iratkozz fel most</h3>
                            <p className="text-gray-600">Csatlakozz több ezer elégedett olvasónkhoz</p>
                          </div>

                          <form className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Teljes név</label>
                              <input
                                type="text"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Teljes neved"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email cím</label>
                              <input
                                type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="email@example.com"
                              />
                            </div>

                            <div className="flex items-start gap-2">
                              <input type="checkbox" id="privacy" className="mt-1" />
                              <label htmlFor="privacy" className="text-sm text-gray-600">
                                Elfogadom az{" "}
                                <a href="#" className="text-blue-600 hover:underline">
                                  adatvédelmi irányelveket
                                </a>{" "}
                                és hozzájárulok, hogy marketing célú emaileket kapjak, amelyeket bármikor
                                leiratkozhatok.
                              </label>
                            </div>

                            <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:opacity-90 transition-all shadow-lg"
                            >
                              Feliratkozás most
                            </button>
                          </form>

                          <div className="mt-6 text-center">
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                              Már feliratkoztál? Leiratkozás
                            </a>
                          </div>
                        </div>

                        <div className="mt-4 text-center text-sm text-white/80">
                          <p>Soha nem osztjuk meg adataidat harmadik féllel és bármikor leiratkozhatsz.</p>
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
                {activeTab === "initial"
                  ? `// Kezdeti prompt
"Készíts egy hírlevél feliratkozási komponenst egy weboldal számára."`
                  : `// Visszajelzés utáni prompt
"Módosítsd a hírlevél feliratkozási komponenst a következő visszajelzések alapján:

1. A háttér legyen gradiens (kék -> lila)
2. Adj hozzá egy illusztrációt a bal oldalra
3. A feliratkozási űrlap legyen jobb oldalon
4. Adj hozzá egy "Miért iratkozz fel?" szekciót 3 ponttal
5. Legyen egy GDPR jelölőnégyzet a feliratkozás előtt
6. Adj hozzá egy "Már feliratkoztál? Leiratkozás" linket
7. A gomb legyen nagyobb és feltűnőbb"`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

