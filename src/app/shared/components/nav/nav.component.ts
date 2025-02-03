import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'cv-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [RouterModule, MatIcon, MatMenuModule],
})
export class NavComponent {}
