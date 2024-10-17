import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5029/api/user';

  private apiUrlAuth = "http://localhost:5029/api/auth/register";

  private apiUrlLogin = "http://localhost:5029/api/auth/login";


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

  async authUser(user: any){
    try {
  const response = await axios.post(this.apiUrlAuth, user);
      return response.data;
      console.log("Server is Conecatad");
    } catch (error) {
    console.error("Erro ao criar o usuario", error);
  throw error;
    }
  }

  async loginUser(user: any){
    try {
  const response = await axios.post(this.apiUrlLogin, user);
      return response.data;
      console.log("Server is Conecatad");
    } catch (error) {
    console.error("Erro ao criar o usuario", error);
  throw error;
    }
  }

}
