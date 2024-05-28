import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

@Component({
  selector: 'app-amplify-ticket-management',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AmplifyAuthenticatorModule,
  ],
  templateUrl: './amplify-ticket-management.component.html',
  styleUrl: './amplify-ticket-management.component.css'
})
export class AmplifyTicketManagementComponent {
  
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}
