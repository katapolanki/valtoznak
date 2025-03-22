"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  Code,
  Search,
  Bell,
  User,
  Home,
  BarChart2,
  Users,
  Settings,
  Calendar,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
} from "lucide-react"

export function DashboardPreview() {
  const [activeView, setActiveView] = useState<"preview" | "code">("preview")

  return (
    <div className="w-full rounded-lg border border-border overflow-hidden bg-white">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="font-medium">Dashboard Sablon Előnézet</h3>
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
          {`# Hozz létre egy admin dashboard felületet az alábbi specifikáció alapján:

## Általános információk
- **Alkalmazás típusa:** analitikai
- **Felhasználók:** marketing csapat
- **Stílus:** professzionális, modern
- **Színséma:** kék, szürke`}
        </div>

        <h4 className="text-sm font-medium mb-2">Eredmény:</h4>

        {activeView === "preview" ? (
          <div className="rounded-md border border-border overflow-hidden bg-white">
            <div className="flex h-screen max-h-[600px] overflow-hidden">
              {/* Oldalsáv */}
              <div className="w-64 bg-slate-900 text-white p-4 hidden md:block">
                <div className="mb-8">
                  <h1 className="text-xl font-bold flex items-center gap-2">
                    <BarChart2 size={24} />
                    <span>Analytics</span>
                  </h1>
                </div>

                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-600 text-white">
                    <Home size={18} />
                    <span>Áttekintés</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800"
                  >
                    <BarChart2 size={18} />
                    <span>Analitika</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800"
                  >
                    <Calendar size={18} />
                    <span>Kampányok</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800"
                  >
                    <Users size={18} />
                    <span>Közönség</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800"
                  >
                    <Settings size={18} />
                    <span>Beállítások</span>
                  </a>
                </nav>
              </div>

              {/* Fő tartalom */}
              <div className="flex-1 overflow-auto">
                {/* Fejléc */}
                <header className="bg-white border-b border-border p-4 flex items-center justify-between">
                  <div className="relative w-64">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={18}
                    />
                    <Input placeholder="Keresés..." className="pl-10" />
                  </div>

                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                      <Bell size={18} />
                    </Button>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <User size={16} />
                      </div>
                      <span className="text-sm font-medium hidden md:inline-block">John Doe</span>
                    </div>
                  </div>
                </header>

                {/* Tartalom */}
                <main className="p-6">
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Marketing Áttekintés</h1>
                    <p className="text-muted-foreground">Üdvözöljük a marketing analitikai dashboardon</p>
                  </div>

                  {/* KPI kártyák */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                      { title: "Összes látogató", value: "24,532", change: "+12.3%", up: true },
                      { title: "Konverziók", value: "1,429", change: "+3.2%", up: true },
                      { title: "Átlagos idő", value: "3:42", change: "-1.0%", up: false },
                      { title: "Visszafordulási arány", value: "42.8%", change: "-2.7%", up: true },
                    ].map((kpi, i) => (
                      <Card key={i}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{kpi.value}</div>
                          <div
                            className={`flex items-center text-xs mt-1 ${kpi.up ? "text-green-500" : "text-red-500"}`}
                          >
                            {kpi.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                            <span>{kpi.change} az előző időszakhoz képest</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Grafikonok */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <Card className="lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Látogatók</CardTitle>
                          <Button variant="outline" size="sm">
                            Szűrés
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] bg-slate-50 rounded-md flex items-center justify-center">
                          <p className="text-muted-foreground">Látogatói grafikon</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Források</CardTitle>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal size={16} />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[300px] bg-slate-50 rounded-md flex items-center justify-center">
                          <p className="text-muted-foreground">Forrás grafikon</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Táblázat */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Legutóbbi kampányok</CardTitle>
                        <Button variant="outline" size="sm">
                          Összes megtekintése
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 px-4 font-medium">Név</th>
                              <th className="text-left py-3 px-4 font-medium">Státusz</th>
                              <th className="text-left py-3 px-4 font-medium">Konverziók</th>
                              <th className="text-left py-3 px-4 font-medium">Költés</th>
                              <th className="text-left py-3 px-4 font-medium">ROI</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                name: "Nyári promóció",
                                status: "Aktív",
                                conversions: "423",
                                spend: "1,200,000 Ft",
                                roi: "+12.4%",
                              },
                              {
                                name: "Őszi kollekció",
                                status: "Aktív",
                                conversions: "252",
                                spend: "850,000 Ft",
                                roi: "+8.7%",
                              },
                              { name: "Black Friday", status: "Tervezett", conversions: "0", spend: "0 Ft", roi: "0%" },
                              {
                                name: "Tavaszi kampány",
                                status: "Befejezett",
                                conversions: "892",
                                spend: "2,300,000 Ft",
                                roi: "+22.3%",
                              },
                            ].map((campaign, i) => (
                              <tr key={i} className="border-b border-border">
                                <td className="py-3 px-4">{campaign.name}</td>
                                <td className="py-3 px-4">
                                  <Badge
                                    variant={
                                      campaign.status === "Aktív"
                                        ? "default"
                                        : campaign.status === "Tervezett"
                                          ? "outline"
                                          : "secondary"
                                    }
                                  >
                                    {campaign.status}
                                  </Badge>
                                </td>
                                <td className="py-3 px-4">{campaign.conversions}</td>
                                <td className="py-3 px-4">{campaign.spend}</td>
                                <td className="py-3 px-4">{campaign.roi}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </main>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto max-h-[500px]">
            <pre className="text-xs">
              {`// Dashboard sablon alapján generált kód
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Bell, User, Home, BarChart2, Users, Settings, Calendar, ArrowUp, ArrowDown, MoreHorizontal } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      {/* Oldalsáv */}
      <div className="w-64 bg-slate-900 text-white p-4 hidden md:block">
        <div className="mb-8">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <BarChart2 size={24} />
            <span>Analytics</span>
          </h1>
        </div>
        
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-blue-600 text-white">
            <Home size={18} />
            <span>Áttekintés</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800">
            <BarChart2 size={18} />
            <span>Analitika</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800">
            <Calendar size={18} />
            <span>Kampányok</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800">
            <Users size={18} />
            <span>Közönség</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:bg-slate-800">
            <Settings size={18} />
            <span>Beállítások</span>
          </a>
        </nav>
      </div>
      
      {/* Fő tartalom */}
      <div className="flex-1 overflow-auto">
        {/* Fejléc */}
        <header className="bg-white border-b border-border p-4 flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input placeholder="Keresés..." className="pl-10" />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell size={18} />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm font-medium hidden md:inline-block">John Doe</span>
            </div>
          </div>
        </header>
        
        {/* Tartalom */}
        <main className="p-6">
          {/* Fejléc */}
          {/* KPI kártyák */}
          {/* Grafikonok */}
          {/* Táblázat */}
          {/* ... további kód ... */}
        </main>
      </div>
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

