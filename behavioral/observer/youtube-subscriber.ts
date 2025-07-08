// Observer interface
interface Subscriber {
  update(channelName: string, videoTitle: string): void;
}

// Subject interface
interface Channel {
  subscribe(subscriber: Subscriber): void;
  unsubscribe(subscriber: Subscriber): void;
  notifySubscribers(videoTitle: string): void;
}

// Concrete Subject
class YouTubeChannel implements Channel {
  private subscribers: Subscriber[] = [];
  private channelName: string;

  constructor(channelName: string) {
    this.channelName = channelName;
  }

  subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  uploadVideo(videoTitle: string): void {
    console.log(`New video uploaded on ${this.channelName}: ${videoTitle}`);
    this.notifySubscribers(videoTitle);
  }

  notifySubscribers(videoTitle: string): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(this.channelName, videoTitle);
    }
  }
}

// Concrete Observers
class YouTubeSubscriber implements Subscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(channelName: string, videoTitle: string): void {
    console.log(
      `${this.name} has been notified of a new video on ${channelName}: ${videoTitle}`
    );
  }
}

// Example usage
const channel = new YouTubeChannel("Tech Insights");
const subscriber1 = new YouTubeSubscriber("Alice");
const subscriber2 = new YouTubeSubscriber("Bob");

channel.subscribe(subscriber1);
channel.subscribe(subscriber2);

channel.uploadVideo("Understanding Design Patterns in JavaScript");
channel.uploadVideo("Advanced JavaScript Techniques");
