import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              About X-RL Trading Agent
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">The Future of Automated Trading</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing investment management through advanced reinforcement learning, creating AI agents
              that adapt and optimize trading strategies in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  To democratize sophisticated trading strategies by making advanced AI accessible to individual
                  investors and institutions alike. Our reinforcement learning agents learn from market patterns and
                  adapt to changing conditions, providing intelligent investment decisions without human intervention.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">How We Work</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Rather than building another trading platform, we focus on what we do best: creating intelligent
                  agents. Our models integrate seamlessly with existing platforms like AlgoTrader, IBKR, and
                  QuantConnect, allowing you to deploy our strategies wherever you trade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Business Model</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Value Propositions */}
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-blue-400">Value Propositions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Adaptive trading agent</li>
                    <li>• Beginner-friendly UI</li>
                    <li>• End-to-end pipeline (data → live trading)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Customer Segments */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-cyan-400">Customer Segments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Retail traders seeking automation</li>
                    <li>• Fintech startups & incubators</li>
                    <li>• Institutional hedge funds</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Revenue Streams */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-400">Revenue Streams</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-world trading commissions</li>
                    <li>• Subscription plans</li>
                    <li>• API/licensing fees</li>
                    <li>• Custom enterprise solutions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Key Partners */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-400">Key Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Yahoo Finance (data provider)</li>
                    <li>• FinRL (open-source RL project)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Key Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-400">Key Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Yahoo Finance API (yfinance)</li>
                    <li>• Alpaca API (paper trading)</li>
                    <li>• FinRL market datasets</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Channels */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-pink-400">Distribution Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• API integration with brokers</li>
                    <li>• Fintech marketplaces</li>
                    <li>• Bloomberg App Store</li>
                    <li>• TradingView, MetaTrader</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Key Activities */}
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-indigo-400">Key Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Build & train RL agents</li>
                    <li>• Backtesting & paper trading</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Customer Relationships */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-teal-400">Customer Relationships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Self-service platform</li>
                    <li>• Premium support for institutions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cost Structure */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-400">Cost Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Cloud computing & GPU infrastructure</li>
                    <li>• Data licensing costs</li>
                    <li>• Marketing & customer acquisition</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Technology Stack</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>RL Libraries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">ElegantRL</Badge>
                    <Badge variant="outline">RLlib</Badge>
                    <Badge variant="outline">Stable Baselines 3</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">WRDS</Badge>
                    <Badge variant="outline">Yahoo Finance</Badge>
                    <Badge variant="outline">CCXT</Badge>
                    <Badge variant="outline">Alpaca</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trading Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">AlgoTrader</Badge>
                    <Badge variant="outline">IBKR</Badge>
                    <Badge variant="outline">QuantConnect</Badge>
                    <Badge variant="outline">ZuluTrade</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
