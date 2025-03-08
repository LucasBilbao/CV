import { Component, signal } from '@angular/core';

@Component({
  template: '',
})
export class TruncatableComponent {
  public isTruncated = signal<boolean>(true);

  public toggleTruncate(): void {
    this.isTruncated.set(!this.isTruncated());
  }
}
