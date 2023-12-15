import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

// Components
import { NavComponent } from './components/nav/nav.component';

const components = [NavComponent];

const materials = [MatIconModule, MatMenuModule, MatButtonModule];

@NgModule({
  declarations: [components],
  imports: [CommonModule, materials, RouterModule],
  exports: [components, CommonModule],
})
export class SharedModule {}
