"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Apple, 
  Flame, 
  TrendingDown, 
  Sparkles, 
  Camera, 
  BarChart3, 
  Target, 
  Award,
  ChevronRight,
  Zap,
  Heart,
  Brain,
  Trophy,
  Star,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function LyfoApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [calories, setCalories] = useState(1247);
  const calorieGoal = 1800;
  const calorieProgress = (calories / calorieGoal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  LYFO
                </h1>
                <p className="text-xs text-gray-500">Sua melhor versão começa hoje</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg">
              <Crown className="w-4 h-4 mr-2" />
              Premium
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm p-1 rounded-2xl shadow-lg">
            <TabsTrigger value="home" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Apple className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Início</span>
            </TabsTrigger>
            <TabsTrigger value="diary" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Flame className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Diário</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Brain className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">IA Coach</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <BarChart3 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Progresso</span>
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            {/* Hero Section */}
            <Card className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white p-8 rounded-3xl shadow-2xl border-0 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <Badge className="bg-white/20 text-white border-0 mb-4">
                  <Zap className="w-3 h-3 mr-1" />
                  Modo Turbo Ativo
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Olá, Maria! 👋</h2>
                <p className="text-emerald-50 text-lg mb-6">
                  Você está incrível! Já perdeu 3.2kg em 12 dias.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                    <div className="text-2xl font-bold">-3.2kg</div>
                    <div className="text-sm text-emerald-50">Perdidos</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-emerald-50">Dias</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                    <div className="text-2xl font-bold">68kg</div>
                    <div className="text-sm text-emerald-50">Atual</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Calorie Counter */}
            <Card className="p-6 rounded-3xl shadow-xl bg-white border-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Calorias de Hoje</h3>
                <Badge className="bg-emerald-100 text-emerald-700 border-0">
                  {calorieGoal - calories} restantes
                </Badge>
              </div>
              
              <div className="relative mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {calories}
                    </div>
                    <div className="text-gray-500">de {calorieGoal} kcal</div>
                  </div>
                </div>
                <Progress value={calorieProgress} className="h-3 bg-gray-100" />
              </div>

              {/* Macros */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-2xl">
                  <div className="text-2xl font-bold text-orange-600">45g</div>
                  <div className="text-sm text-gray-600">Carboidratos</div>
                  <Progress value={60} className="h-1 mt-2 bg-orange-100" />
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600">78g</div>
                  <div className="text-sm text-gray-600">Proteínas</div>
                  <Progress value={85} className="h-1 mt-2 bg-blue-100" />
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-2xl">
                  <div className="text-2xl font-bold text-amber-600">32g</div>
                  <div className="text-sm text-gray-600">Gorduras</div>
                  <Progress value={70} className="h-1 mt-2 bg-amber-100" />
                </div>
              </div>
            </Card>

            {/* AI Suggestions */}
            <Card className="p-6 rounded-3xl shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Sugestão Inteligente</h3>
                  <p className="text-sm text-gray-600">Baseado no seu dia</p>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl mb-4">
                <p className="text-gray-700 mb-3">
                  🎯 Você ainda tem 553 calorias! Que tal um jantar leve com salmão grelhado e salada? 
                  Vai te deixar satisfeita e dentro da meta.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Ver Receita Completa
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-purple-100 text-purple-700 border-0">Alta Proteína</Badge>
                <Badge className="bg-pink-100 text-pink-700 border-0">Baixo Carbo</Badge>
                <Badge className="bg-emerald-100 text-emerald-700 border-0">Saudável</Badge>
              </div>
            </Card>

            {/* Daily Mission */}
            <Card className="p-6 rounded-3xl shadow-xl bg-white border-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-lg font-bold text-gray-800">Missão Diária</h3>
                </div>
                <Badge className="bg-amber-100 text-amber-700 border-0">
                  <Trophy className="w-3 h-3 mr-1" />
                  +50 XP
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 flex-1">Registrar café da manhã</span>
                  <Badge className="bg-emerald-600 text-white border-0">Feito!</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  <span className="text-gray-700 flex-1">Beber 2L de água</span>
                  <span className="text-sm text-gray-500">1.2L / 2L</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                  <span className="text-gray-700 flex-1">10 min de exercício</span>
                  <span className="text-sm text-gray-500">0 / 10 min</span>
                </div>
              </div>
            </Card>

            {/* Premium CTA */}
            <Card className="p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-0 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <Badge className="bg-amber-500 text-white border-0 mb-4">
                  <Star className="w-3 h-3 mr-1" />
                  Oferta Especial
                </Badge>
                <h3 className="text-2xl font-bold mb-2">Desbloqueie o Modo Turbo</h3>
                <p className="text-gray-300 mb-6">
                  Planos personalizados, receitas exclusivas, treinos diários e suporte IA 24/7.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Dieta IA Personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Receitas Exclusivas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Comparação de Fotos</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg py-6 rounded-2xl shadow-xl">
                  Começar Agora - 7 Dias Grátis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Cancele quando quiser. Sem compromisso.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Diary Tab */}
          <TabsContent value="diary" className="space-y-6">
            <Card className="p-6 rounded-3xl shadow-xl bg-white border-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Diário Alimentar</h2>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Buscar alimento ou escanear código de barras..."
                  className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-0 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <Button className="absolute right-2 top-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              {/* Meals */}
              <div className="space-y-4">
                {/* Breakfast */}
                <div className="p-4 bg-orange-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                        <Apple className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Café da Manhã</h3>
                        <p className="text-sm text-gray-600">387 kcal</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-600">
                      + Adicionar
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Ovo mexido (2 unidades)</span>
                      <span className="text-sm font-semibold text-gray-800">156 kcal</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Pão integral (2 fatias)</span>
                      <span className="text-sm font-semibold text-gray-800">138 kcal</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Café com leite</span>
                      <span className="text-sm font-semibold text-gray-800">93 kcal</span>
                    </div>
                  </div>
                </div>

                {/* Lunch */}
                <div className="p-4 bg-emerald-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <Apple className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Almoço</h3>
                        <p className="text-sm text-gray-600">623 kcal</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-600">
                      + Adicionar
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Frango grelhado (150g)</span>
                      <span className="text-sm font-semibold text-gray-800">247 kcal</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Arroz integral (100g)</span>
                      <span className="text-sm font-semibold text-gray-800">123 kcal</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Salada verde</span>
                      <span className="text-sm font-semibold text-gray-800">45 kcal</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Feijão (1 concha)</span>
                      <span className="text-sm font-semibold text-gray-800">208 kcal</span>
                    </div>
                  </div>
                </div>

                {/* Snack */}
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <Apple className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Lanche</h3>
                        <p className="text-sm text-gray-600">237 kcal</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-600">
                      + Adicionar
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Iogurte grego natural</span>
                      <span className="text-sm font-semibold text-gray-800">137 kcal</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-xl">
                      <span className="text-sm text-gray-700">Banana</span>
                      <span className="text-sm font-semibold text-gray-800">100 kcal</span>
                    </div>
                  </div>
                </div>

                {/* Dinner */}
                <div className="p-4 bg-purple-50 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                        <Apple className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Jantar</h3>
                        <p className="text-sm text-gray-600">Ainda não registrado</p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                      + Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Add Favorites */}
            <Card className="p-6 rounded-3xl shadow-xl bg-white border-0">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Favoritos Rápidos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-2xl border-2 hover:border-emerald-500 hover:bg-emerald-50">
                  <Apple className="w-6 h-6 text-emerald-600" />
                  <span className="text-xs font-semibold">Ovo Mexido</span>
                  <span className="text-xs text-gray-500">156 kcal</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-2xl border-2 hover:border-emerald-500 hover:bg-emerald-50">
                  <Apple className="w-6 h-6 text-blue-600" />
                  <span className="text-xs font-semibold">Frango Grelhado</span>
                  <span className="text-xs text-gray-500">247 kcal</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-2xl border-2 hover:border-emerald-500 hover:bg-emerald-50">
                  <Apple className="w-6 h-6 text-orange-600" />
                  <span className="text-xs font-semibold">Banana</span>
                  <span className="text-xs text-gray-500">100 kcal</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-2xl border-2 hover:border-emerald-500 hover:bg-emerald-50">
                  <Apple className="w-6 h-6 text-purple-600" />
                  <span className="text-xs font-semibold">Iogurte Grego</span>
                  <span className="text-xs text-gray-500">137 kcal</span>
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* AI Coach Tab */}
          <TabsContent value="ai" className="space-y-6">
            <Card className="p-6 rounded-3xl shadow-xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 text-white border-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Coach IA</h2>
                  <p className="text-purple-100">Seu assistente pessoal 24/7</p>
                </div>
              </div>
            </Card>

            {/* Chat Messages */}
            <div className="space-y-4">
              <Card className="p-4 rounded-2xl bg-white border-0 shadow-lg">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 mb-1">Coach LYFO</p>
                    <p className="text-gray-700">
                      Bom dia, Maria! 🌟 Notei que você está indo muito bem! Já perdeu 3.2kg em 12 dias. 
                      Que tal manter o ritmo com um café da manhã rico em proteínas hoje?
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 rounded-2xl bg-emerald-50 border-0 shadow-lg ml-12">
                <p className="text-gray-700">
                  Oi! Sim, quero sugestões de café da manhã 😊
                </p>
              </Card>

              <Card className="p-4 rounded-2xl bg-white border-0 shadow-lg">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 mb-1">Coach LYFO</p>
                    <p className="text-gray-700 mb-3">
                      Perfeito! Aqui estão 3 opções deliciosas e nutritivas:
                    </p>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-800">🍳 Ovos com Abacate</span>
                          <Badge className="bg-orange-500 text-white border-0">387 kcal</Badge>
                        </div>
                        <p className="text-sm text-gray-600">2 ovos mexidos + 1/2 abacate + torrada integral</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-800">🥣 Iogurte Proteico</span>
                          <Badge className="bg-blue-500 text-white border-0">312 kcal</Badge>
                        </div>
                        <p className="text-sm text-gray-600">Iogurte grego + granola + frutas vermelhas</p>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-800">🥪 Wrap de Frango</span>
                          <Badge className="bg-emerald-500 text-white border-0">425 kcal</Badge>
                        </div>
                        <p className="text-sm text-gray-600">Wrap integral + frango desfiado + vegetais</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 rounded-3xl shadow-xl bg-white border-0">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Pergunte ao Coach</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start h-auto p-4 rounded-2xl border-2 hover:border-purple-500 hover:bg-purple-50">
                  <Sparkles className="w-5 h-5 mr-3 text-purple-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Gerar Dieta do Dia</div>
                    <div className="text-xs text-gray-500">Baseado no seu humor</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 rounded-2xl border-2 hover:border-pink-500 hover:bg-pink-50">
                  <Heart className="w-5 h-5 mr-3 text-pink-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Receitas Saudáveis</div>
                    <div className="text-xs text-gray-500">Ideias para hoje</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 rounded-2xl border-2 hover:border-emerald-500 hover:bg-emerald-50">
                  <TrendingDown className="w-5 h-5 mr-3 text-emerald-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Ajustar Meta</div>
                    <div className="text-xs text-gray-500">Otimizar calorias</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto p-4 rounded-2xl border-2 hover:border-blue-500 hover:bg-blue-50">
                  <Zap className="w-5 h-5 mr-3 text-blue-600" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-800">Modo Turbo</div>
                    <div className="text-xs text-gray-500">Acelerar resultados</div>
                  </div>
                </Button>
              </div>
            </Card>

            {/* Motivational Quote */}
            <Card className="p-6 rounded-3xl shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 border-0">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Frase do Dia</h3>
                  <p className="text-gray-700 italic">
                    "Um passo hoje vale mais que mil amanhã. Seu corpo agradece cada escolha."
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <Card className="p-6 rounded-3xl shadow-xl bg-white border-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Seu Progresso</h2>
              
              {/* Weight Chart */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Evolução de Peso</h3>
                  <Badge className="bg-emerald-100 text-emerald-700 border-0">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    -3.2kg
                  </Badge>
                </div>
                <div className="h-64 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 flex items-end justify-between gap-2">
                  {[71.2, 70.8, 70.5, 70.1, 69.7, 69.3, 69.0, 68.6, 68.3, 68.0].map((weight, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-emerald-500 to-teal-500 rounded-t-lg transition-all hover:from-emerald-600 hover:to-teal-600"
                        style={{ height: `${((71.2 - weight) / 3.2) * 100}%` }}
                      ></div>
                      <span className="text-xs text-gray-600">{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="p-4 bg-emerald-50 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-emerald-600">68kg</div>
                  <div className="text-sm text-gray-600">Peso Atual</div>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-blue-600">65kg</div>
                  <div className="text-sm text-gray-600">Meta</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-600">Dias</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-2xl text-center">
                  <div className="text-3xl font-bold text-orange-600">18</div>
                  <div className="text-sm text-gray-600">Restantes</div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Conquistas</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl text-white text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">7 Dias</div>
                    <div className="text-xs opacity-90">Sequência</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl text-white text-center">
                    <Award className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">3kg</div>
                    <div className="text-xs opacity-90">Perdidos</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl text-white text-center">
                    <Star className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold">Nível 5</div>
                    <div className="text-xs opacity-90">Guerreira</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Before/After Photos */}
            <Card className="p-6 rounded-3xl shadow-xl bg-white border-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Comparação Visual</h3>
                <Badge className="bg-purple-100 text-purple-700 border-0">
                  <Camera className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white font-semibold">Antes</div>
                    <div className="text-white/80 text-sm">71.2kg</div>
                  </div>
                </div>
                <div className="relative aspect-[3/4] bg-gradient-to-br from-emerald-100 to-teal-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-emerald-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white font-semibold">Hoje</div>
                    <div className="text-white/80 text-sm">68.0kg</div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                <Camera className="w-4 h-4 mr-2" />
                Adicionar Foto de Progresso
              </Button>
            </Card>

            {/* Weekly Report */}
            <Card className="p-6 rounded-3xl shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Relatório Semanal</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Dias Registrados</div>
                      <div className="text-sm text-gray-600">Excelente consistência!</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">7/7</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Média de Calorias</div>
                      <div className="text-sm text-gray-600">Dentro da meta</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">1.753</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Perda Semanal</div>
                      <div className="text-sm text-gray-600">Ritmo saudável</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">-0.9kg</div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Motivational Toast */}
      <div className="fixed bottom-6 right-6 max-w-sm">
        <Card className="p-4 rounded-2xl shadow-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 animate-in slide-in-from-bottom-5">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 flex-shrink-0" />
            <p className="text-sm font-medium">
              Só 10 min hoje. Você consegue! 💪
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

// Crown component (missing from lucide-react)
function Crown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12l3-3 3 3 4-8 4 8 3-3 3 3v8H2z"/>
    </svg>
  );
}
