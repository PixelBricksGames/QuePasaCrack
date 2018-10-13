import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public enable: boolean;
  public saludos: Array<string>;
  public data: Array<string>;
  public delay: number;

  constructor(private http: HttpClient) {
    this.retrieveData().subscribe(
      (data: any) => {
        this.data = data.saludos;
      }
    );
  }

  public resetGame() {
    this.enable = false;
    this.saludos = [];
    this.delay = 2000;
  }

  public addSaludo() {
    let current;
    do {
      current = this.getRandom(0, this.data.length);
    } while (Object.values(this.saludos).includes(this.data[current]));
    this.saludos.push(this.data[current]);
  }

  public getDelay() {
    return this.delay;
  }

  public setDelay(delay) {
    this.delay = delay;
  }

  public retrieveData(): Observable<any> {
    return this.http.get<any>(`http://pixelbricksgames.com/games/quepasacrack/assets/data/saludos.json`);
  }

  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

}
