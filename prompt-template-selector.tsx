"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Code } from "lucide-react"
import Image from "next/image"

const TEMPLATES = {
  pizza: {
    name: "Pizzakereső alkalmazás",
    prompt: `# Hozz létre egy kattintható prototípust az alábbi dizájn specifikáció alapján:

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
  - A felhasználó rákattint egy pizzázóra, hogy részletes információkat lásson`,
    previewImage: "/placeholder.svg?height=400&width=600&text=Pizzakereső+Alkalmazás",
  },
  ecommerce: {
    name: "E-commerce oldal",
    prompt: `# Hozz létre egy e-commerce oldalt az alábbi specifikáció alapján:

## Általános információk
- **Termék típusa:** [pl. ruházat, elektronika, élelmiszer]
- **Célközönség:** [pl. fiatal felnőttek, szülők, szakemberek]
- **Stílus:** [pl. modern, minimalista, játékos]
- **Színséma:** [elsődleges és másodlagos színek]

## Főbb oldalak és komponensek
1. **Főoldal**
   - Hero szekció a kiemelt termékekkel
   - Kategória navigáció
   - Akciós termékek rész
   - Népszerű termékek rész

2. **Termék oldal**
   - Termék galéria
   - Termék leírás
   - Ár és elérhetőség információ
   - Méret/variáció választó
   - Kosárba helyezés gomb
   - Kapcsolódó termékek

3. **Kosár/Pénztár**
   - Kosár összegzés
   - Szállítási adatok űrlap
   - Fizetési mód választó`,
    previewImage: "/placeholder.svg?height=400&width=600&text=E-commerce+Oldal",
  },
  dashboard: {
    name: "Admin dashboard",
    prompt: `# Hozz létre egy admin dashboard felületet az alábbi specifikáció alapján:

## Általános információk
- **Alkalmazás típusa:** [pl. analitikai, projekt menedzsment, CRM]
- **Felhasználók:** [pl. marketing csapat, adminisztrátorok]
- **Stílus:** [pl. professzionális, modern]
- **Színséma:** [elsődleges és másodlagos színek]

## Főbb komponensek
1. **Navigáció**
   - Oldalsáv a fő menüpontokkal
   - Felső sáv keresővel és értesítésekkel
   - Felhasználói profil menü

2. **Áttekintő oldal**
   - KPI kártyák (4-6 fő metrika)
   - Grafikonok és diagramok
   - Tevékenységi feed vagy lista
   - Szűrők és időszak választó

3. **Adattáblázat**
   - Kereshető és szűrhető táblázat
   - Rendezési lehetőségek
   - Műveleti gombok (szerkesztés, törlés, stb.)
   - Lapozás vagy végtelen görgetés`,
    previewImage: "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
  },
}

type TemplateKey = keyof typeof TEMPLATES

export function PromptTemplateSelector() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateKey>("pizza")
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")

  // Szimulált eredmények a különböző sablonokhoz
  const previewImages = {
    pizza: "/placeholder.svg?height=400&width=600&text=Pizzakereső+Alkalmazás+Eredmény",
    ecommerce: "/placeholder.svg?height=400&width=600&text=E-commerce+Oldal+Eredmény",
    dashboard: "/placeholder.svg?height=400&width=600&text=Admin+Dashboard+Eredmény",
  }

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Prompt Sablon Választó</h3>
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

      <Tabs defaultValue="pizza" className="p-4" onValueChange={(value) => setActiveTemplate(value as TemplateKey)}>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Válassz sablon típust:</h4>
          <TabsList>
            <TabsTrigger value="pizza">Pizzakereső</TabsTrigger>
            <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
        </div>

        {Object.keys(TEMPLATES).map((key) => (
          <TabsContent key={key} value={key} className="mt-0">
            <Card>
              <CardContent className="p-0">
                {activeView === "preview" ? (
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-md">
                      <div className="text-center p-4">
                        <h3 className="text-lg font-semibold mb-2">{TEMPLATES[key as TemplateKey].name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          A részletes prompt alapján generált eredmény előnézete
                        </p>
                        <Image
                          src={previewImages[key as TemplateKey] || "/placeholder.svg"}
                          alt={`${TEMPLATES[key as TemplateKey].name} előnézet`}
                          width={600}
                          height={400}
                          className="rounded-md border border-border shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="h-[500px]"></div>
                  </div>
                ) : (
                  <pre className="bg-slate-50 p-4 rounded-md overflow-auto max-h-[500px] text-sm font-mono whitespace-pre-wrap">
                    {TEMPLATES[activeTemplate].prompt}
                  </pre>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="border-t border-border p-4 bg-slate-50">
        <div className="text-sm text-muted-foreground">
          <p>
            Tipp: Használd ezeket a sablonokat kiindulópontként, és módosítsd őket a saját igényeidnek megfelelően. A
            részletes promptok jelentősen jobb eredményeket hoznak!
          </p>
        </div>
      </div>
    </div>
  )
}

