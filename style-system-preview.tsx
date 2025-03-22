"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"

export function StyleSystemPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Stílus és Dizájn Rendszer Előnézet</h3>
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

      <Tabs defaultValue="without" className="p-4" onValueChange={(value) => setActiveTab(value as "without" | "with")}>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Megközelítés:</h4>
          <TabsList>
            <TabsTrigger value="without">Stílus nélkül</TabsTrigger>
            <TabsTrigger value="with">Stílus rendszerrel</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="without" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy kapcsolatfelvételi űrlapot egy weboldal számára.`}
          </div>
        </TabsContent>

        <TabsContent value="with" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
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
          </div>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border">
        <div className="p-4">
          <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

          {activeView === "preview" ? (
            <div className="rounded-md border border-border overflow-hidden">
              {activeTab === "without" ? (
                <div className="bg-white p-6">
                  <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Kapcsolat</h2>
                    <p className="mb-6">Kérdése van? Töltse ki az alábbi űrlapot, és hamarosan válaszolunk.</p>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Név</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Teljes név"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Téma</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                          <option>Válasszon témát</option>
                          <option>Általános kérdés</option>
                          <option>Technikai támogatás</option>
                          <option>Árajánlat kérés</option>
                          <option>Egyéb</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Üzenet</label>
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          rows={4}
                          placeholder="Írja le üzenetét..."
                        ></textarea>
                      </div>

                      <div className="flex items-center">
                        <input type="checkbox" id="privacy" className="mr-2" />
                        <label htmlFor="privacy" className="text-sm">
                          Elfogadom az adatvédelmi irányelveket
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                      >
                        Küldés
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="bg-[#f8fafc] p-8">
                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
                    <div className="mb-8">
                      <h2 className="text-[24px] font-bold text-[#1e293b] mb-2">Lépjen kapcsolatba velünk</h2>
                      <p className="text-[16px] text-[#64748b]">
                        Kérdése van? Töltse ki az alábbi űrlapot, és hamarosan válaszolunk Önnek.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[14px] font-medium text-[#1e293b] mb-1">Teljes név</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
                            placeholder="Adja meg a nevét"
                          />
                        </div>

                        <div>
                          <label className="block text-[14px] font-medium text-[#1e293b] mb-1">Email cím</label>
                          <input
                            type="email"
                            className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
                            placeholder="email@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-[14px] font-medium text-[#1e293b] mb-1">Téma</label>
                          <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all">
                              <option value="" disabled selected>
                                Válasszon témát
                              </option>
                              <option>Általános kérdés</option>
                              <option>Technikai támogatás</option>
                              <option>Árajánlat kérés</option>
                              <option>Együttműködés</option>
                              <option>Egyéb</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                              <svg
                                className="w-5 h-5 text-[#64748b]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[14px] font-medium text-[#1e293b] mb-1">Üzenet</label>
                          <textarea
                            className="w-full px-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
                            rows={5}
                            placeholder="Írja le részletesen, miben segíthetünk..."
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="privacy"
                          className="w-4 h-4 rounded border-[#e2e8f0] text-[#6366f1] focus:ring-[#6366f1]"
                        />
                        <label htmlFor="privacy" className="ml-2 text-[14px] text-[#64748b]">
                          Elfogadom az{" "}
                          <a href="#" className="text-[#6366f1] hover:underline">
                            adatvédelmi irányelveket
                          </a>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium rounded-lg hover:opacity-90 transition-all shadow-md"
                      >
                        Üzenet küldése
                      </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-[#e2e8f0] flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <a href="#" className="text-[#64748b] hover:text-[#6366f1]">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-[#64748b] hover:text-[#6366f1]">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-[#64748b] hover:text-[#6366f1]">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                          </svg>
                        </a>
                      </div>

                      <a
                        href="#"
                        className="text-[#f97316] hover:text-[#ea580c] font-medium text-[14px] flex items-center"
                      >
                        <span>Vagy hívjon minket</span>
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
              <pre className="text-xs">
                {activeTab === "without"
                  ? `// Stílus rendszer nélküli prompt
"Készíts egy kapcsolatfelvételi űrlapot egy weboldal számára."`
                  : `// Stílus rendszerrel ellátott prompt
"Készíts egy kapcsolatfelvételi űrlapot egy weboldal számára a következő stílus rendszer alapján:

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
- Elemek közötti távolság: 16px"`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

