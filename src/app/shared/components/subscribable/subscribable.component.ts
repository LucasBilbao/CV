import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: '',
})
export class SubscribableComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  protected addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
