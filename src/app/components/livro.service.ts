import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private apiUrl = 'https://acervotecnologia.onrender.com/livros';

  constructor(private http: HttpClient) {}

  pesquisarLivros(titulo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?titulo=${titulo}`);
  }

  todosOsLivros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getLivroById(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  getLivrosByCategoria(categoria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?categoria=${categoria}`);
  }

}
