import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-login-entry',
  template: `HI I am the entry component for the login component`,
})
export class RemoteEntryComponent {}
