export interface Url {
  url: string;
  port?: string;
  subDirectory?: string;
}

export class BaseUrl {
  private url: string;
  private port: string;
  private subDirectory: string;
  constructor(paramaters: Url) {
    this.url = paramaters.url;
    this.port = paramaters.port;
    this.subDirectory = paramaters.subDirectory;
  }

  /**
   *  get url with port if available
   */
  public getFullUrl(): string {
    let url = this.url;
    if (this.port) {
      url += `:${this.port}`;
    }
    return url;
  }

  public toString() {
    let url = this.url;
    if (this.port) {
      url += `:${this.port}`;
    }
    if (this.subDirectory) {
      url += `/${this.subDirectory}`;
    }
    return url;
  }
}
