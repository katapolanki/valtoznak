"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"
import Image from "next/image"

export function ImageReferencePreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Vizuális Referenciák Előnézet</h3>
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
          <h4 className="text-sm font-medium">Válassz prompt típust:</h4>
          <TabsList>
            <TabsTrigger value="without">Referencia nélkül</TabsTrigger>
            <TabsTrigger value="with">Referenciával</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="without" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy modern bejelentkezési oldalt egy SaaS alkalmazáshoz.`}
          </div>
        </TabsContent>

        <TabsContent value="with" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy modern bejelentkezési oldalt egy SaaS alkalmazáshoz. 
A dizájn hasonlítson erre a referenciára: [kép csatolva], 
de használj világoskék és fehér színeket, valamint lekerekített sarkokat.`}
          </div>
          <div className="mb-4 border border-border rounded-md p-2 bg-slate-50">
            <p className="text-xs text-muted-foreground mb-2">Csatolt referencia kép:</p>
            <div className="relative h-40 bg-slate-100 rounded flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=160&width=300&text=Login+Reference+Image"
                alt="Login reference image"
                width={300}
                height={160}
                className="rounded"
              />
            </div>
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
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold">Bejelentkezés</h2>
                      <p className="text-muted-foreground">Jelentkezz be a fiókodba</p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          placeholder="email@example.com"
                          className="w-full px-3 py-2 border border-border rounded-md"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">Jelszó</label>
                          <a href="#" className="text-xs text-blue-600 hover:underline">
                            Elfelejtetted?
                          </a>
                        </div>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-3 py-2 border border-border rounded-md"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="remember" className="rounded border-gray-300" />
                        <label htmlFor="remember" className="text-sm text-muted-foreground">
                          Emlékezz rám
                        </label>
                      </div>

                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Bejelentkezés
                      </button>
                    </div>

                    <div className="mt-6 text-center text-sm">
                      <span className="text-muted-foreground">Nincs még fiókod?</span>{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Regisztrálj
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row h-[500px]">
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 p-8 flex items-center justify-center">
                    <div className="max-w-md text-white">
                      <h1 className="text-3xl font-bold mb-4">Üdvözlünk a Platformon</h1>
                      <p className="mb-6">
                        Egyszerűsítsd a munkádat és növeld a produktivitást a vezető SaaS megoldásunkkal.
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                        <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                        <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
                    <div className="w-full max-w-md">
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Bejelentkezés</h2>
                        <p className="text-slate-500">Jelentkezz be a fiókodba</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Email cím</label>
                          <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-slate-700">Jelszó</label>
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                              Elfelejtetted?
                            </a>
                          </div>
                          <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="remember" className="rounded border-slate-300" />
                          <label htmlFor="remember" className="text-sm text-slate-600">
                            Emlékezz rám 30 napig
                          </label>
                        </div>

                        <button className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-500/50">
                          Bejelentkezés
                        </button>
                      </div>

                      <div className="mt-6 text-center text-sm">
                        <span className="text-slate-500">Nincs még fiókod?</span>{" "}
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                          Regisztrálj most
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
              <pre className="text-xs">
                {activeTab === "without"
                  ? `// Referencia nélküli prompt
"Készíts egy modern bejelentkezési oldalt egy SaaS alkalmazáshoz."`
                  : `// Referenciával ellátott prompt
"Készíts egy modern bejelentkezési oldalt egy SaaS alkalmazáshoz. 
A dizájn hasonlítson erre a referenciára: [kép csatolva], 
de használj világoskék és fehér színeket, valamint lekerekített sarkokat."

// A csatolt kép egy kétoszlopos bejelentkezési oldalt mutat, 
// bal oldalon színes háttérrel és szöveggel, jobb oldalon pedig 
// a bejelentkezési űrlappal.`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

