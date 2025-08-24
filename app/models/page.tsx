import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const models = [
  {
    name: "DQN",
    fullName: "Deep Q-Network",
    description:
      "A value-based reinforcement learning algorithm that uses deep neural networks to approximate Q-values for optimal action selection in trading environments.",
    features: ["Experience Replay", "Target Network", "Epsilon-Greedy Exploration"],
    performance: "High",
    complexity: "Medium",
  },
  {
    name: "DDPG",
    fullName: "Deep Deterministic Policy Gradient",
    description:
      "An actor-critic algorithm designed for continuous action spaces, perfect for determining precise position sizes and trading amounts.",
    features: ["Continuous Actions", "Actor-Critic Architecture", "Ornstein-Uhlenbeck Noise"],
    performance: "Very High",
    complexity: "High",
  },
  {
    name: "PPO",
    fullName: "Proximal Policy Optimization",
    description:
      "A policy gradient method that maintains a balance between sample efficiency and ease of implementation, ensuring stable learning.",
    features: ["Clipped Surrogate Objective", "Multiple Epochs", "Stable Training"],
    performance: "High",
    complexity: "Medium",
  },
  {
    name: "SAC",
    fullName: "Soft Actor-Critic",
    description:
      "An entropy-regularized algorithm that encourages exploration while learning optimal policies, ideal for volatile market conditions.",
    features: ["Maximum Entropy", "Off-Policy Learning", "Automatic Temperature Tuning"],
    performance: "Very High",
    complexity: "High",
  },
  {
    name: "A2C",
    fullName: "Advantage Actor-Critic",
    description:
      "A synchronous version of actor-critic methods that reduces variance in policy gradient estimates through advantage function approximation.",
    features: ["Advantage Function", "Synchronous Updates", "Baseline Reduction"],
    performance: "Medium",
    complexity: "Low",
  },
  {
    name: "TD3",
    fullName: "Twin Delayed Deep Deterministic Policy Gradient",
    description:
      "An improved version of DDPG that addresses overestimation bias through twin critics and delayed policy updates.",
    features: ["Twin Critics", "Delayed Updates", "Target Policy Smoothing"],
    performance: "Very High",
    complexity: "High",
  },
  {
    name: "Multi-Agent DDPG",
    fullName: "Multi-Agent Deep Deterministic Policy Gradient",
    description:
      "Extends DDPG to multi-agent environments, enabling coordination between multiple trading strategies and market participants.",
    features: ["Multi-Agent Coordination", "Centralized Training", "Decentralized Execution"],
    performance: "Exceptional",
    complexity: "Very High",
  },
]

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              Reinforcement Learning Models
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Trading Models</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Explore our suite of advanced reinforcement learning algorithms, each trained specifically for different
              trading scenarios and market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">RL Trading System Architecture</CardTitle>
                <CardDescription className="text-center">
                  A comprehensive three-layer architecture enabling seamless interaction between applications, agents,
                  and market environments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800">
                    <CardHeader>
                      <CardTitle className="text-lg text-yellow-800 dark:text-yellow-200">Applications Layer</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm space-y-1">
                        <div className="font-medium">Trading Applications:</div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                          <li>• Stock Trading & Portfolio Allocation</li>
                          <li>• High-Frequency Trading</li>
                          <li>• Cryptocurrency Trading</li>
                          <li>• Market Regulations Compliance</li>
                          <li>• User-defined Custom Tasks</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-800 dark:text-blue-200">DRL Agents Layer</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm space-y-1">
                        <div className="font-medium">Libraries & Algorithms:</div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                          <li>
                            • <strong>Libraries:</strong> ElegantRL, RLlib, Stable Baselines 3
                          </li>
                          <li>
                            • <strong>Value-based:</strong> DQN, D3QN, Double DQN
                          </li>
                          <li>
                            • <strong>Policy-based:</strong> PPO, A2C/SAC
                          </li>
                          <li>
                            • <strong>Actor-Critic:</strong> DDPG, TD3
                          </li>
                          <li>
                            • <strong>Multi-Agent:</strong> MADDPG, MAPPO
                          </li>
                          <li>
                            • <strong>Custom:</strong> User-designed DRL Algorithms
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-800 dark:text-green-200">Market Environments</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm space-y-1">
                        <div className="font-medium">Data Sources & APIs:</div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                          <li>
                            • <strong>Historical Data:</strong> WRDS, Yahoo! Finance
                          </li>
                          <li>
                            • <strong>Live Trading:</strong> CCXT, Alpaca, QuantConnect
                          </li>
                          <li>
                            • <strong>Simulations:</strong> Market Environment Simulators
                          </li>
                          <li>
                            • <strong>Custom Data:</strong> User-imported Datasets
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => (
              <Card key={model.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <Badge
                      variant={
                        model.performance === "Exceptional"
                          ? "default"
                          : model.performance === "Very High"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {model.performance}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {model.fullName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{model.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {model.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>Complexity: {model.complexity}</span>
                    <span>Performance: {model.performance}</span>
                  </div>

                  <Button className="w-full mt-auto">Try {model.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Training Process</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our reinforcement learning training loop creates intelligent agents through continuous interaction with
                market environments
              </p>
            </div>

            <Card>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-800 dark:text-green-200">State (St)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm space-y-1">
                        <div className="font-medium">Market Information:</div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                          <li>• Account Balance</li>
                          <li>• Current Shares Held</li>
                          <li>• Real-time Prices</li>
                          <li>• Technical Indicators</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-800 dark:text-blue-200">Trading Agents</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm space-y-1">
                        <div className="font-medium">RL Algorithms:</div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                          <li>• DQN, DDPG, PPO</li>
                          <li>• SAC, A2C, TD3</li>
                          <li>• Multi-Agent DDPG</li>
                          <li>• Custom Algorithms</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
                    <CardHeader>
                      <CardTitle className="text-lg text-purple-800 dark:text-purple-200">Action (At)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm space-y-1">
                        <div className="font-medium">Trading Decisions:</div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                          <li>
                            • <strong>Buy:</strong> Purchase securities
                          </li>
                          <li>
                            • <strong>Hold:</strong> Maintain position
                          </li>
                          <li>
                            • <strong>Sell:</strong> Liquidate holdings
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
                    <CardHeader>
                      <CardTitle className="text-lg text-orange-800 dark:text-orange-200">Reward (Rt)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm space-y-1">
                        <div className="font-medium">Performance Feedback:</div>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-2">
                          <li>
                            • <strong>Profit:</strong> Positive returns
                          </li>
                          <li>
                            • <strong>Loss:</strong> Negative returns
                          </li>
                          <li>• Risk-adjusted metrics</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-center">Reinforcement Learning Training Loop</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Environment Components:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-2">
                        <li>
                          • <strong>Share of Stocks:</strong> Current portfolio allocation
                        </li>
                        <li>
                          • <strong>Remaining Balance:</strong> Available capital for trading
                        </li>
                        <li>
                          • <strong>Prices of Stocks:</strong> Real-time market data
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Training Process:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-2">
                        <li>1. Agent observes current market state (St)</li>
                        <li>2. Agent selects optimal action (At) based on policy</li>
                        <li>3. Environment processes action and updates state</li>
                        <li>4. Agent receives reward (Rt+1) and new state (St+1)</li>
                        <li>5. Agent learns from experience and improves policy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
