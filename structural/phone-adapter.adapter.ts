// Adapter is a structural design pattern, which allows incompatible objects to collaborate.

// Incompatible Interfaces
interface LightningPhone {
  connectWithLightning(): void;
}
class AndroidPhone {
  connectWithUsbC(): void {
    console.log("🔌 Connected with USB-C.");
  }
}

// The Adapter
class LightningToUsbCAdapter implements LightningPhone {
  private androidPhone: AndroidPhone;

  constructor(androidPhone: AndroidPhone) {
    this.androidPhone = androidPhone;
  }

  connectWithLightning(): void {
    console.log("🧩 Using Lightning to USB-C adapter...");
    this.androidPhone.connectWithUsbC();
  }
}

// Example usage
function chargeIphone(phone: LightningPhone): void {
  console.log("🔋 Charging iPhone...");
  phone.connectWithLightning();
}

const android = new AndroidPhone();
const adapter = new LightningToUsbCAdapter(android);

// Client only understands Lightning
chargeIphone(adapter);
