export class UrlBuilder {
  private path: string = '';
  private parameters: string = '';

  public setPath(path: string): UrlBuilder {
    this.path = path;
    return this;
  }

  public setParameters(parameters: {
    [key: string]: string | number;
  }): UrlBuilder {
    this.parameters = Object.entries(parameters).reduce(
      (prev, [key, value]) => `${prev}${key}=${value}&`,
      ''
    );
    return this;
  }

  public get() {
    return `${this.path}?${this.parameters}`;
  }
}
