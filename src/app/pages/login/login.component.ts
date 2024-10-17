import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(100)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*])(?=.*[a-zA-Z]).{8,}$')]]
  
  });
  
}

  async login() {
    if (this.loginForm?.valid) { 
      try {
        const result = await this.apiService.loginUser(this.loginForm.value); 
        localStorage.setItem('token', result.token);
        this.router.navigate(['/dashboard']);
      } catch (error) {
        console.error('Erro ao ao efetuar o login:', error);
      }
    } else {
      console.error('Erro de API ou Codigo fonte');
    }
  }


  
}
