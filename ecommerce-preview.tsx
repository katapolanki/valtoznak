"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Code, ShoppingCart, Heart, Star, Search, ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"

export function EcommercePreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">E-commerce Sablon Előnézet</h3>
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

      <div className="p-4">
        <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
          <p className="text-xs text-muted-foreground mb-2">Részlet a sablonból:</p>
          {`# Hozz létre egy e-commerce oldalt az alábbi specifikáció alapján:

## Általános információk
- **Termék típusa:** ruházat
- **Célközönség:** fiatal felnőttek
- **Stílus:** modern, minimalista
- **Színséma:** fekete, fehér, akcentszín: piros`}
        </div>

        <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

        {activeView === "preview" ? (
          <div className="rounded-md border border-border overflow-hidden bg-white">
            <header className="bg-black text-white p-4">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">FASHION</div>
                  <div className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-sm hover:text-red-400 transition-colors">
                      Férfi
                    </a>
                    <a href="#" className="text-sm hover:text-red-400 transition-colors">
                      Női
                    </a>
                    <a href="#" className="text-sm hover:text-red-400 transition-colors">
                      Új kollekció
                    </a>
                    <a href="#" className="text-sm hover:text-red-400 transition-colors">
                      Akciók
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:text-red-400 transition-colors">
                      <Search size={20} />
                    </button>
                    <button className="p-2 hover:text-red-400 transition-colors">
                      <Heart size={20} />
                    </button>
                    <button className="p-2 hover:text-red-400 transition-colors relative">
                      <ShoppingCart size={20} />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        2
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto p-4">
              <section className="mb-8">
                <div className="relative h-[300px] w-full bg-slate-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
                    <h1 className="text-4xl font-bold mb-2">Őszi kollekció</h1>
                    <p className="mb-4 max-w-md">
                      Fedezd fel az új szezon legfrissebb darabjait most akár 30% kedvezménnyel.
                    </p>
                    <Button className="bg-black hover:bg-red-600 text-white">Vásárlás most</Button>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Népszerű termékek</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="border-0 shadow-none">
                      <div className="relative aspect-square bg-slate-100 rounded-md overflow-hidden mb-2">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=Termék${i}`}
                          alt={`Termék ${i}`}
                          fill
                          className="object-cover"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-2 right-2 bg-white rounded-full p-1.5"
                        >
                          <Heart size={16} />
                        </Button>
                        {i === 2 && <Badge className="absolute top-2 left-2 bg-red-500">-20%</Badge>}
                      </div>
                      <CardContent className="p-0">
                        <h3 className="font-medium">Termék név {i}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={12}
                                className={star <= 4 ? "text-yellow-500 fill-yellow-500" : "text-slate-300"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">(42)</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          {i === 2 ? (
                            <>
                              <span className="text-red-500 font-medium">12 990 Ft</span>
                              <span className="text-muted-foreground text-sm line-through">15 990 Ft</span>
                            </>
                          ) : (
                            <span className="font-medium">14 990 Ft</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Kategóriák</h2>
                  <Button variant="link" className="text-black hover:text-red-600">
                    Összes megtekintése
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Pólók", "Nadrágok", "Cipők", "Kiegészítők"].map((category, i) => (
                    <div key={i} className="relative h-[150px] bg-slate-100 rounded-md overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-lg font-bold">{category}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        ) : (
          <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
            <pre className="text-xs">
              {`// E-commerce sablon alapján generált kód
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from "next/image";

export default function EcommercePage() {
  return (
    <div>
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">FASHION</div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm hover:text-red-400 transition-colors">Férfi</a>
              <a href="#" className="text-sm hover:text-red-400 transition-colors">Női</a>
              <a href="#" className="text-sm hover:text-red-400 transition-colors">Új kollekció</a>
              <a href="#" className="text-sm hover:text-red-400 transition-colors">Akciók</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:text-red-400 transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 hover:text-red-400 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-2 hover:text-red-400 transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero szekció */}
      <main className="max-w-7xl mx-auto p-4">
        <section className="mb-8">
          <div className="relative h-[300px] w-full bg-slate-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
              <h1 className="text-4xl font-bold mb-2">Őszi kollekció</h1>
              <p className="mb-4 max-w-md">Fedezd fel az új szezon legfrissebb darabjait most akár 30% kedvezménnyel.</p>
              <Button className="bg-black hover:bg-red-600 text-white">Vásárlás most</Button>
            </div>
          </div>
        </section>
        
        {/* Népszerű termékek */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Népszerű termékek</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft size={16} />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Termék kártyák */}
            {/* ... további kód ... */}
          </div>
        </section>
        
        {/* Kategóriák */}
        {/* ... további kód ... */}
      </main>
    </div>
  );
}`}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

