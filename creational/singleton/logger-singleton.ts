class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {
    // Private constructor prevents direct instantiation
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string, level: string = "INFO"): void {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${level}: ${message}`);
    console.log(`[LOG] ${level}: ${message}`);
  }

  getLogHistory(): string[] {
    return this.logs;
  }
}

// Example usage
const logger1 = Logger.getInstance();
logger1.log("Application started");
const logger2 = Logger.getInstance();
logger2.log("User logged in", "DEBUG");
console.log("Log history:", logger1.getLogHistory());
// Both logger1 and logger2 are the same instance
console.log("Are both loggers the same instance?", logger1 === logger2);
