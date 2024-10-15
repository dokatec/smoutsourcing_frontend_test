import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5029/api/user'

  constructor() { }

  async getUsers(){
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuarios',error)
    }

  }

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
