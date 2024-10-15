import { Component, OnInit,  } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ApiService } from '../../core/services/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.loadUsers();
  }

  async loadUsers(){
    try {
      this.users = await this.apiService.getUsers();
      console.log(this.users)
    } catch (error) {
      console.error('Erro ao carregar usuários', error)
    }
  }

}
