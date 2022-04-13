import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from 'src/app/HeroModule/components/hero-list/Hero';
const URL = `http://localhost:5000/heros`
const ENDPOINTS = {
  createHero: `${URL}/create-hero`,
  deleteHero: `${URL}/delete-hero/`,
  getListHero: `${URL}/get-list-hero`,
  deleteMultiHeros: `${URL}/delete-multi-heros`,
}
@Injectable({
  providedIn: 'root'
})


export class HeroService {


  constructor(private http: HttpClient) { }

  token = JSON.parse(window.localStorage.getItem('USER_INFO')??'{}').token;
  headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`});

  createHero(hero: {id: number, name: string}){
    return this.http.post(`${ENDPOINTS.createHero}`, hero)
  }

  getListHero(){
    return this.http.get(`${ENDPOINTS.getListHero}`,{headers: this.headers})
  }

  deleteHero(id: number){
    return this.http.delete(`${ENDPOINTS.deleteHero}${id}`,{headers: this.headers})
  }

  deleteMultiHeros(id: number[]){
    return this.http.delete(`${ENDPOINTS.deleteMultiHeros}`,{
      headers: this.headers,
      body: {id}
    })
  }
}
