export class Server {
  public name: string;
  public content: string;
  public type: string;

  constructor(name: string, content: string, type: string) {
    this.name = name;
    this.content = content;
    this.type = type;
  }
}
