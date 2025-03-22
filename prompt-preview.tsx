"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, DollarSign, Search, Filter, ChevronRight, Eye, Code } from "lucide-react"
import Image from "next/image"

export function PromptPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [promptQuality, setPromptQuality] = useState<"basic" | "detailed">("basic")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Prompt Előnézet</h3>
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
            <span>Kód</span>
          </Button>
        </div>
      </div>

      <Tabs
        defaultValue="basic"
        className="p-4"
        onValueChange={(value) => setPromptQuality(value as "basic" | "detailed")}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Válassz prompt típust:</h4>
          <TabsList>
            <TabsTrigger value="basic">Egyszerű prompt</TabsTrigger>
            <TabsTrigger value="detailed">Részletes prompt</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="basic" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">Készíts egy pizzakereső weboldalt.</div>
        </TabsContent>

        <TabsContent value="detailed" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
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
  - Pizzázók listája értékelésekkel és képekkel`}
          </div>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border">
        <div className="p-4">
          <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

          {activeView === "preview" ? (
            <div
              className={`rounded-md border border-border overflow-hidden transition-all duration-300 ${promptQuality === "detailed" ? "bg-white" : "bg-slate-50"}`}
            >
              {promptQuality === "basic" ? (
                <div className="p-6 flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-full max-w-md space-y-4">
                    <h2 className="text-2xl font-bold text-center">PizzaKereső</h2>
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                        size={18}
                      />
                      <Input placeholder="Keress pizzázót..." className="pl-10" />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {[1, 2].map((i) => (
                        <div key={i} className="bg-slate-100 p-4 rounded-md flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-slate-200 rounded-md"></div>
                            <div>
                              <h3 className="font-medium">Pizzázó {i}</h3>
                              <p className="text-sm text-muted-foreground">Leírás</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ChevronRight size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="min-h-[500px]">
                  <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
                    <div className="max-w-7xl mx-auto">
                      <h1 className="text-3xl font-bold mb-4">PizzaKereső</h1>
                      <p className="mb-6">Találd meg a legjobb pizzázókat a környékeden</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                          <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                            size={18}
                          />
                          <Input placeholder="Város vagy étterem neve..." className="pl-10 bg-white text-black" />
                        </div>
                        <Button className="bg-yellow-500 hover:bg-yellow-600">Keresés</Button>
                      </div>
                    </div>
                  </header>

                  <main className="max-w-7xl mx-auto p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-64 space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Szűrők</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">Értékelés</h4>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2">Árkategória</h4>
                              <div className="flex items-center gap-2">
                                {[1, 2, 3].map((price) => (
                                  <Badge key={price} variant="outline" className="cursor-pointer">
                                    {"$".repeat(price)}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2">Távolság</h4>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="cursor-pointer">
                                  &lt; 1 km
                                </Badge>
                                <Badge variant="outline" className="cursor-pointer">
                                  &lt; 5 km
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-bold">Találatok</h2>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Filter size={16} />
                            <span>Rendezés</span>
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          {[1, 2, 3].map((i) => (
                            <Card key={i} className="overflow-hidden">
                              <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-48 h-48 relative">
                                  <Image
                                    src={`/placeholder.svg?height=200&width=200&text=Pizza${i}`}
                                    alt={`Pizzázó ${i}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1 p-4">
                                  <div className="flex items-start justify-between">
                                    <div>
                                      <h3 className="text-lg font-bold">Pizzázó {i}</h3>
                                      <div className="flex items-center gap-1 mt-1">
                                        {Array(5)
                                          .fill(0)
                                          .map((_, j) => (
                                            <Star
                                              key={j}
                                              size={16}
                                              className={`${j < 5 - i * 0.5 ? "text-yellow-500 fill-yellow-500" : "text-slate-300"}`}
                                            />
                                          ))}
                                        <span className="text-sm text-muted-foreground ml-1">(120 értékelés)</span>
                                      </div>
                                    </div>
                                    <Badge>{i === 1 ? "Népszerű" : i === 2 ? "Új" : "Akciós"}</Badge>
                                  </div>

                                  <div className="mt-4 space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <MapPin size={16} />
                                      <span>1.{i} km távolságra</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <Clock size={16} />
                                      <span>30-45 perc</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <DollarSign size={16} />
                                      <span>{"$".repeat(i)}</span>
                                    </div>
                                  </div>

                                  <div className="mt-4">
                                    <Button>Részletek megtekintése</Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
              <pre className="text-xs">
                {promptQuality === "basic"
                  ? `// Egyszerű prompt eredménye
import React from "react";

export default function PizzaSearch() {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">PizzaKereső</h2>
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Keress pizzázót..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-200 rounded-md"></div>
                <div>
                  <h3 className="font-medium">Pizzázó {i}</h3>
                  <p className="text-sm text-gray-500">Leírás</p>
                </div>
              </div>
              <button className="p-2">
                <ChevronRightIcon size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
                  : `// Részletes prompt eredménye
import React from "react";
import { 
  Card, CardHeader, CardTitle, CardContent,
  Button, Input, Badge
} from "@/components/ui";
import { Star, MapPin, Clock, DollarSign, Search, Filter, ChevronRight } from 'lucide-react';
import Image from "next/image";

export default function PizzaSearch() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">PizzaKereső</h1>
          <p className="mb-6">Találd meg a legjobb pizzázókat a környékeden</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              <Input placeholder="Város vagy étterem neve..." className="pl-10 bg-white text-black" />
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-600">Keresés</Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Szűrők</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Értékelés</h4>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Árkategória</h4>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((price) => (
                      <Badge key={price} variant="outline" className="cursor-pointer">
                        {"$".repeat(price)}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Távolság</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="cursor-pointer">
                      &lt; 1 km
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      &lt; 5 km
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Találatok</h2>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter size={16} />
                <span>Rendezés</span>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Pizzázók listája */}
              {/* ... további kód ... */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

