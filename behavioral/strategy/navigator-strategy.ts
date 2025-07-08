// Strategy interface for navigation strategies
interface NavigationStrategy {
  calculateRoute(start: string, end: string): string;
}

// Concrete strategy for driving navigation
class DrivingStrategy implements NavigationStrategy {
  calculateRoute(start: string, end: string): string {
    return `Driving route from ${start} to ${end}`;
  }
}

// Concrete strategy for walking navigation
class WalkingStrategy implements NavigationStrategy {
  calculateRoute(start: string, end: string): string {
    return `Walking route from ${start} to ${end}`;
  }
}

// Concrete strategy for cycling navigation
class CyclingStrategy implements NavigationStrategy {
  calculateRoute(start: string, end: string): string {
    return `Cycling route from ${start} to ${end}`;
  }
}

// Context that uses the navigation strategy
class RouteNavigator {
  private strategy: NavigationStrategy;

  constructor(strategy: NavigationStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: NavigationStrategy): void {
    this.strategy = strategy;
  }

  navigate(start: string, end: string): string {
    return this.strategy.calculateRoute(start, end);
  }
}

// Example usage
const routeNavigator = new RouteNavigator(new DrivingStrategy());
console.log(routeNavigator.navigate("Point A", "Point B"));

routeNavigator.setStrategy(new WalkingStrategy());
console.log(routeNavigator.navigate("Point A", "Point B"));

routeNavigator.setStrategy(new CyclingStrategy());
console.log(routeNavigator.navigate("Point A", "Point B"));
