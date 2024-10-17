import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(100)]],
      cpf: ['', [Validators.required, Validators.pattern('\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}')]], 
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#\\$%\\^&\\*])(?=.*[a-zA-Z]).{8,}$')]]
    });
  }

  async register() {
    if (this.userForm?.valid) { 
      try {
        const result = await this.apiService.authUser(this.userForm.value); 
        console.log('Usuário criado com sucesso:', result);
        this.router.navigate(['/login']);
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
      }
    } else {
      console.error('Formulário inválido');
    }
  }


}

