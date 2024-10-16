import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]], 
      senha: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*])(?=.*[a-zA-Z]).{8,}$')]]
    });
  }

  async register() {
    if (this.userForm?.valid) { 
      try {
        const result = await this.apiService.createUser(this.userForm.value); 
        console.log('Usuário criado com sucesso:', result);
        this.router.navigate(['/dashboard/']);
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }
    } else {
      console.error('Formulário inválido');
    }
  }
}