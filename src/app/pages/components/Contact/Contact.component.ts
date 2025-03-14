import { Component } from '@angular/core';
import { PhoneComponent } from '../../../icons/phone/phone.component';
import { MailComponent } from '../../../icons/mail/mail.component';
import { LinkedinComponent } from '../../../icons/linkedin/linkedin.component';
import { GithubComponent } from '../../../icons/github/github.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cv-contact',
  templateUrl: './Contact.component.html',
  styleUrl: './Contact.component.scss',
  imports: [PhoneComponent, MailComponent, LinkedinComponent, GithubComponent],
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}

  public async copyToClipboard(value: string) {
    await navigator.clipboard.writeText(value);
    this.snackBar.open('Copied', undefined, {
      duration: 2750,
    });
  }
}
