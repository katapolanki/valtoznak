"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"

export function UserFlowPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [activeTab, setActiveTab] = useState<"without" | "with">("without")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Felhasználói Folyamatok Előnézet</h3>
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
            <TabsTrigger value="without">Folyamat nélkül</TabsTrigger>
            <TabsTrigger value="with">Részletes folyamattal</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="without" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy jelszó-visszaállítási oldalt egy webalkalmazás számára.`}
          </div>
        </TabsContent>

        <TabsContent value="with" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
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
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold">Jelszó visszaállítása</h2>
                      <p className="text-muted-foreground mt-2">
                        Adja meg email címét, és küldünk egy linket a jelszó visszaállításához.
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
                        Visszaállítási link küldése
                      </button>
                    </form>

                    <div className="mt-6 text-center">
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Vissza a bejelentkezéshez
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-6">
                  <div className="max-w-md mx-auto">
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
                            1
                          </div>
                          <div className="h-1 w-12 bg-blue-600"></div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">
                            2
                          </div>
                          <div className="h-1 w-12 bg-gray-200"></div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">
                            3
                          </div>
                          <div className="h-1 w-12 bg-gray-200"></div>
                          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center font-medium">
                            4
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <h2 className="text-2xl font-bold">Jelszó visszaállítása</h2>
                        <p className="text-muted-foreground mt-2">
                          Adja meg email címét, és küldünk egy kódot a jelszó visszaállításához.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* 1. lépés: Email megadása */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Email cím</label>
                          <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="email@example.com"
                          />
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                          Kód küldése
                        </button>
                      </div>

                      {/* 2. lépés: Kód ellenőrzése (rejtett) */}
                      <div className="hidden space-y-4">
                        <div className="text-center mb-4">
                          <p className="text-green-600 font-medium">
                            Kód elküldve a következő címre: email@example.com
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Ellenőrző kód</label>
                          <div className="flex gap-2 justify-between">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="w-10 h-12 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="text-center">
                          <button className="text-sm text-blue-600 hover:underline">
                            Nem kapta meg a kódot? Küldés újra
                          </button>
                        </div>

                        <div className="flex gap-3">
                          <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                            Vissza
                          </button>
                          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                            Tovább
                          </button>
                        </div>
                      </div>

                      {/* 3. lépés: Új jelszó megadása (rejtett) */}
                      <div className="hidden space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Új jelszó</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Legalább 8 karakter"
                          />
                          <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-yellow-500"></div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Közepes erősségű jelszó</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-1">Jelszó megerősítése</label>
                          <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Jelszó megerősítése"
                          />
                        </div>

                        <div className="flex gap-3">
                          <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                            Vissza
                          </button>
                          <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                            Jelszó megváltoztatása
                          </button>
                        </div>
                      </div>

                      {/* 4. lépés: Sikeres visszaállítás (rejtett) */}
                      <div className="hidden space-y-4 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-green-600"
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
                        </div>

                        <h3 className="text-xl font-bold">Jelszava sikeresen megváltoztatva!</h3>
                        <p className="text-muted-foreground">Most már bejelentkezhet az új jelszavával.</p>

                        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                          Vissza a bejelentkezéshez
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <a href="#" className="text-sm text-blue-600 hover:underline">
                        Vissza a bejelentkezéshez
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
                  ? `// Folyamat nélküli prompt
"Készíts egy jelszó-visszaállítási oldalt egy webalkalmazás számára."`
                  : `// Részletes folyamattal ellátott prompt
"Készíts egy jelszó-visszaállítási folyamatot egy webalkalmazás számára a következő lépésekkel:

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

Minden lépésnél legyen lehetőség visszalépni az előző lépésre. A folyamat legyen lépésenkénti (wizard), vizuálisan jelezve, hogy a felhasználó hol tart a folyamatban."`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

