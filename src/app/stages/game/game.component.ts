import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  public message: string;
  public isPlayerTurn: boolean;
  public currentSaludo: string;
  public rightAnswers: number;
  public buttonsClass: string;
  public answerClass: string;

  public axel: string;
  public pablo: string;

  private playerLose: boolean;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.axel = 'game-axel-idle';
    this.pablo = 'game-pablo-idle';

    this.initGame();
  }

  public initGame() {
    this.service.resetGame();
    this.message = 'Repite la secuencia';
    this.playerLose = false;
    this.service.retrieveData().subscribe(
      () => {
        this.service.addSaludo();
        this.jugadaAxel(-1);
      }
    );
  }

  public saySaludo(saludo) {
    if (this.service.enable) {

      (async () => {
        this.axel = 'game-axel-idle';
        this.pablo = 'game-pablo-talking';
        this.currentSaludo = saludo;

        if (saludo === this.service.saludos[this.rightAnswers]) {
          this.answerClass = 'answer-correct';
          this.rightAnswers = this.rightAnswers + 1;
        } else {
          this.answerClass = 'answer-wrong';
          this.playerLose = true;
        }

        await this.delay(this.service.delay);

        this.currentSaludo = '';
        this.answerClass = 'answer-neutral';
        this.axel = 'game-axel-idle';
        this.pablo = 'game-pablo-idle';

        if (this.playerLose) {
          this.message = 'Has perdido!';
          this.buttonsClass = 'hidden';
        } else if (this.rightAnswers === this.service.saludos.length) {
          this.service.addSaludo();
          this.jugadaAxel(-1);
        }
      })();

    }
  }

  private jugadaAxel(level) {

    this.buttonsClass = 'hidden';
    this.answerClass = 'answer-neutral';
    this.rightAnswers = 0;

    this.isPlayerTurn = false;
    this.service.enable = false;

    if (level === -1) {
      this.currentSaludo = 'Qué pasa';
    } else {
      this.currentSaludo = this.service.saludos[level];
    }

    (async () => {
      this.axel = 'game-axel-talking';
      this.pablo = 'game-pablo-idle';

      await this.delay(this.service.delay);

      if (level < this.service.saludos.length - 1) {
        level = level + 1;
        this.jugadaAxel(level);
      } else {
        this.currentSaludo = '';
        this.axel = 'game-axel-idle';
        this.pablo = 'game-pablo-idle';
        this.jugadaPablo();
      }
    })();

  }

  private jugadaPablo() {

    this.isPlayerTurn = true;
    this.service.enable = false;
    this.currentSaludo = 'Qué pasa';

    (async () => {
      this.axel = 'game-axel-idle';
      this.pablo = 'game-pablo-talking';

      await this.delay(this.service.delay);

      this.buttonsClass = 'visible';
      this.currentSaludo = '';
      this.axel = 'game-axel-idle';
      this.pablo = 'game-pablo-idle';
      this.service.enable = true;
    })();
  }

  async delay (ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
