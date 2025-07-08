interface Coffee {
  brew(): string;
}

class Espresso implements Coffee {
  brew(): string {
    return "Brewing a delicious espresso!";
  }
}

class Latte implements Coffee {
  brew(): string {
    return "Brewing a creamy latte!";
  }
}

class Cappuccino implements Coffee {
  brew(): string {
    return "Brewing a frothy cappuccino!";
  }
}

/**
 * CoffeeFactory is a factory class that creates coffee objects.
 */
class CoffeeFactory {
  /**
   * Creates a coffee object.
   * @param type - The type of coffee to create.
   * @returns A coffee object.
   */
  createCoffee(type: string): Coffee {
    switch (type) {
      case "espresso":
        return new Espresso();
      case "latte":
        return new Latte();
      case "cappuccino":
        return new Cappuccino();
      default:
        throw new Error(`Unknown coffee type: ${type}`);
    }
  }
}

// Example usage
const orders: string[] = ["espresso", "latte", "cappuccino", "mocha"];

orders.forEach((order) => {
  try {
    const coffeeFactory = new CoffeeFactory();
    const coffee = coffeeFactory.createCoffee(order);
    console.log(coffee.brew());
  } catch (err) {
    console.error(err.message);
  }
});
