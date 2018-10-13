import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public saludos: Array<string>;
  private data: Array<string>;

  constructor(private http: HttpClient) {
    this.saludos = new Array<string>();
    this.retrieveData().subscribe(
      (data: any) => {
        this.data = data.saludos;
      }
    );
  }

  public addSaludo() {
    let current;
    do {
      current = this.getRandom(0, this.data.length);
    } while (Object.values(this.saludos).includes(this.data[current]));
    this.saludos.push(this.data[current]);
  }

  private retrieveData(): Observable<any> {
    return this.http.get<any>(`../assets/data/saludos.json`);
  }

  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

}
