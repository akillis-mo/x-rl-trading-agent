import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Code, Cloud, Users, Building, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ServicesPage() {
  const services = [
    {
      title: "Trading Signals",
      description: "Follow our AI-powered trading signals",
      icon: <TrendingUp className="h-8 w-8" />,
      platforms: ["ZuluTrade", "Darwinex", "Collective2", "eToro"],
      revenue: "Subscription plans available",
      details: [
        "Access real-time trading signals from our RL agents",
        "Automatically copy trades to your account",
        "Multiple risk management options",
        "Performance tracking and analytics",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Strategy Deployment",
      description: "Deploy our strategies on your platform",
      icon: <Code className="h-8 w-8" />,
      platforms: ["QuantConnect Alpha Streams", "Tradestation", "MetaTrader Market", "AlgoTrader"],
      revenue: "Licensing and usage fees",
      details: [
        "Access our pre-trained RL trading strategies",
        "Deploy on institutional trading platforms",
        "Customizable risk parameters",
        "Enterprise support available",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "API Integration",
      description: "Integrate our AI models via REST API",
      icon: <Cloud className="h-8 w-8" />,
      platforms: ["REST API", "WebSocket", "Python SDK", "Custom Integration"],
      revenue: "Pay-per-call or monthly plans",
      details: [
        "Real-time trading recommendations via API",
        "Multiple asset classes supported",
        "Low-latency responses for HFT",
        "Comprehensive documentation and SDKs",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Access Our Trading Agents
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose from three flexible ways to access and integrate our AI-powered trading agents into your investment
            strategy.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden border-border bg-card/50 backdrop-blur">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                <CardHeader className="pb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} w-fit mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Supported Platforms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-primary mb-4">Revenue Model: {service.revenue}</p>
                    <Button className="w-full bg-transparent" variant="outline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Access Method</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center border-border bg-card/50">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <CardTitle className="text-lg">For Individual Traders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Start with our trading signals on popular copy-trading platforms
                </p>
                <Badge variant="outline">Best for: Beginners & Retail</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card/50">
              <CardHeader>
                <Building className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <CardTitle className="text-lg">For Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Deploy our strategies on professional trading platforms
                </p>
                <Badge variant="outline">Best for: Hedge Funds & Banks</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card/50">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <CardTitle className="text-lg">For Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Integrate our AI models directly into your applications
                </p>
                <Badge variant="outline">Best for: Fintech & Custom Apps</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Access Our Trading Agents?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the access method that best fits your trading needs and get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
