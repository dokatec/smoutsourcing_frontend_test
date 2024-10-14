import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5029/api/user'

  constructor() { }

  async createUser(user: any){
    try{
      const response = await axios.post(this.apiUrl, user);
      return response.data;

    }catch(error){
      console.error('Erro ao criar usuario', error);
      throw error;
    }
  }
}
