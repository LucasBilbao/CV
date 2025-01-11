import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { NavComponent } from './components/nav/nav.component';
import { LoaderComponent } from './components/loader/loader.component';

const components = [NavComponent, LoaderComponent];

const materials = [
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

const modules = [CommonModule, RouterModule];

@NgModule({
  declarations: [components],
  imports: [modules, materials],
  exports: [components, modules, materials],
})
export class SharedModule {}
