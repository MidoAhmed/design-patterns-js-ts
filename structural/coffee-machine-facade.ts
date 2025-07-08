// Provide a unified, high-level interface to a set of interfaces in a subsystem. This makes the subsystem easier to use.

// Subsystems

class Grinder {
  grindBeans(): void {
    console.log("🔧 Grinding coffee beans...");
  }
}

class Boiler {
  boilWater(): void {
    console.log("💧 Boiling water...");
  }
}

class Brewer {
  brew(): void {
    console.log("☕ Brewing the coffee...");
  }
}

class Cup {
  pour(): void {
    console.log("🍶 Pouring coffee into the cup...");
  }
}

//  Facade — CoffeeMachine
class CoffeeMachineFacade {
  private grinder = new Grinder();
  private boiler = new Boiler();
  private brewer = new Brewer();
  private cup = new Cup();

  makeCoffee(): void {
    console.log("=== Making Coffee ===");
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brew();
    this.cup.pour();
    console.log("✅ Coffee is ready!\n");
  }
}

// Example usage
const coffeeMachine = new CoffeeMachineFacade();
coffeeMachine.makeCoffee();
