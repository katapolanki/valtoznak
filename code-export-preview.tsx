"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"

export function CodeExportPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")
  const [activeTab, setActiveTab] = useState<"generated" | "customized">("generated")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Kód Exportálás és Testreszabás Előnézet</h3>
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
        defaultValue="generated"
        className="p-4"
        onValueChange={(value) => setActiveTab(value as "generated" | "customized")}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium">Verzió:</h4>
          <TabsList>
            <TabsTrigger value="generated">Generált kód</TabsTrigger>
            <TabsTrigger value="customized">Testreszabott kód</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="generated" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Készíts egy egyszerű számláló komponenst React és Tailwind CSS használatával.`}
          </div>
        </TabsContent>

        <TabsContent value="customized" className="mt-0">
          <div className="bg-slate-50 p-3 rounded-md mb-4 text-sm font-mono">
            {`Exportáld a számláló komponens kódját, hogy testreszabhassam a következő módosításokkal:

1. Adj hozzá egy "Reset" gombot
2. Állíts be egy minimum (0) és maximum (10) értéket
3. Változtasd meg a színeket a saját dizájn rendszeremhez
4. Adj hozzá egy animációt a szám változásakor
5. Tedd lehetővé a billentyűzettel való vezérlést (fel/le nyilak)`}
          </div>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border">
        <div className="p-4">
          <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

          {activeView === "preview" ? (
            <div className="rounded-md border border-border overflow-hidden">
              {activeTab === "generated" ? (
                <div className="bg-white p-6">
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <h2 className="text-2xl font-bold">Egyszerű számláló</h2>

                      <div className="flex items-center space-x-4">
                        <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                          </svg>
                        </button>

                        <div className="text-4xl font-bold w-16 text-center">0</div>

                        <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600">
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
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white p-6">
                  <div className="max-w-md mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <h2 className="text-2xl font-bold">Testreszabott számláló</h2>
                      <p className="text-sm text-muted-foreground">Használd a fel/le nyilakat vagy a gombokat</p>

                      <div className="flex items-center space-x-4">
                        <button className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 shadow-md transition-all">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                          </svg>
                        </button>

                        <div className="relative">
                          <div className="text-5xl font-bold w-24 h-20 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-indigo-100">
                            <span className="animate-pulse">5</span>
                          </div>
                          <div className="absolute -bottom-2 left-0 w-full bg-gray-200 h-1 rounded-full">
                            <div className="bg-indigo-500 h-1 rounded-full" style={{ width: "50%" }}></div>
                          </div>
                        </div>

                        <button className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 shadow-md transition-all">
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
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between w-full max-w-xs">
                        <div className="text-sm text-muted-foreground">Min: 0</div>
                        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                          Reset
                        </button>
                        <div className="text-sm text-muted-foreground">Max: 10</div>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                        <p>Tipp: Használd a fel/le nyilakat a billentyűzeten a számláló vezérléséhez.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
              <pre className="text-xs">
                {activeTab === "generated"
                  ? `// Generált kód
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">Egyszerű számláló</h2>
      
      <div className="flex items-center space-x-4">
        <button 
          className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
          onClick={decrement}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
          </svg>
        </button>
        
        <div className="text-4xl font-bold w-16 text-center">{count}</div>
        
        <button 
          className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600"
          onClick={increment}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}`
                  : `// Testreszabott kód
import React, { useState, useEffect, useCallback } from 'react';

export default function CustomCounter() {
  const [count, setCount] = useState(5);
  const MIN_VALUE = 0;
  const MAX_VALUE = 10;

  const increment = useCallback(() => {
    setCount(prevCount => Math.min(prevCount + 1, MAX_VALUE));
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => Math.max(prevCount - 1, MIN_VALUE));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  // Billentyűzet vezérlés
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        increment();
      } else if (e.key === 'ArrowDown') {
        decrement();
      } else if (e.key === 'r') {
        reset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [increment, decrement, reset]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h2 className="text-2xl font-bold">Testreszabott számláló</h2>
      <p className="text-sm text-muted-foreground">Használd a fel/le nyilakat vagy a gombokat</p>
      
      <div className="flex items-center space-x-4">
        <button 
          className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 shadow-md transition-all"
          onClick={decrement}
          disabled={count === MIN_VALUE}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
          </svg>
        </button>
        
        <div className="relative">
          <div className="text-5xl font-bold w-24 h-20 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-indigo-100">
            <span className="animate-pulse">{count}</span>
          </div>
          <div className="absolute -bottom-2 left-0 w-full bg-gray-200 h-1 rounded-full">
            <div 
              className="bg-indigo-500 h-1 rounded-full transition-all duration-300" 
              style={{ width: \`\${(count / MAX_VALUE) * 100}%\` }}
            ></div>
          </div>
        </div>
        
        <button 
          className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 shadow-md transition-all"
          onClick={increment}
          disabled={count === MAX_VALUE}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
      </div>
      
      <div className="flex items-center justify-between w-full max-w-xs">
        <div className="text-sm text-muted-foreground">Min: {MIN_VALUE}</div>
        <button 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          onClick={reset}
        >
          Reset
        </button>
        <div className="text-sm text-muted-foreground">Max: {MAX_VALUE}</div>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
        <p>Tipp: Használd a fel/le nyilakat a billentyűzeten a számláló vezérléséhez.</p>
      </div>
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

