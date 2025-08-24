import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              AI-Powered Trading Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              X-RL Trading Agent
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Your personal AI investor powered by advanced reinforcement learning. Automatically optimize your
              portfolio with intelligent trading decisions based on real-time market data and sophisticated algorithms.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/models">
                <Button size="lg">Explore Our Models</Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI agent analyzes market data and makes intelligent trading decisions
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <div className="h-6 w-6 rounded bg-blue-500" />
                  </div>
                  <CardTitle>Market Analysis</CardTitle>
                  <CardDescription>
                    Processes current and historical stock data including prices, variance, and advanced technical
                    indicators
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                    <div className="h-6 w-6 rounded bg-green-500" />
                  </div>
                  <CardTitle>AI Decision Making</CardTitle>
                  <CardDescription>
                    Uses reinforcement learning algorithms to determine optimal trading actions: buy, hold, or sell
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                    <div className="h-6 w-6 rounded bg-purple-500" />
                  </div>
                  <CardTitle>Portfolio Optimization</CardTitle>
                  <CardDescription>
                    Automatically executes trades through existing platforms to maximize your portfolio value
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Seamless Integration</h2>
            <p className="mt-4 text-lg text-muted-foreground">Deploy our models on existing trading platforms</p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {["AlgoTrader", "IBKR", "ZuluTrade", "QuantConnect"].map((platform) => (
                <Card key={platform} className="text-center">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-accent mx-auto mb-4" />
                    <p className="font-medium">{platform}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Trading Smarter?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our advanced RL models and see how they can optimize your investment strategy
            </p>
            <div className="mt-8">
              <Link href="/models">
                <Button size="lg">View Our Models</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
