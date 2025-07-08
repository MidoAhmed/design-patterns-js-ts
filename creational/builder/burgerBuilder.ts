class Burger {
  public bun?: string;
  public patty?: string;
  public toppings?: string[];
  public sauces?: string[];
  public cheese?: boolean;

  constructor(
    bun?: string,
    patty?: string,
    toppings?: string[],
    sauces?: string[],
    cheese?: boolean
  ) {
    this.bun = bun;
    this.patty = patty;
    this.toppings = toppings || [];
    this.sauces = sauces || [];
    this.cheese = cheese;
  }

  describe(): string {
    return `Burger with ${this.bun} bun, ${
      this.patty
    } patty, topped with ${this.toppings?.join(", ")} and ${this.sauces?.join(
      ", "
    )} sauces`;
  }
}

/**
 * BurgerBuilder is a builder class that constructs a Burger object step by step.
 */
class BurgerBuilder {
  private burger: Burger;

  constructor() {
    this.burger = new Burger();
  }

  setBun(bun: string): BurgerBuilder {
    this.burger.bun = bun;
    return this;
  }

  setPatty(patty: string): BurgerBuilder {
    this.burger.patty = patty;
    return this;
  }

  addTopping(topping: string): BurgerBuilder {
    this.burger.toppings?.push(topping);
    return this;
  }

  addSauce(sauce: string): BurgerBuilder {
    this.burger.sauces?.push(sauce);
    return this;
  }

  addCheese(): BurgerBuilder {
    this.burger.cheese = true;
    return this;
  }

  build(): Burger {
    return this.burger;
  }
}

// Example usage
const burger = new BurgerBuilder()
  .setBun("sesame")
  .setPatty("beef")
  .addTopping("lettuce")
  .addTopping("tomato")
  .addSauce("ketchup")
  .addSauce("mustard")
  .addCheese()
  .build();
console.log(burger.describe());
