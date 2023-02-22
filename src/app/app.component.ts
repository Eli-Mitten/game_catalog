import { Component, OnInit } from '@angular/core';
import { Game } from './models/game.model';
import { GameStockService } from './services/game-stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Display Data Demo';
  // @ts-ignore
  // @ts-ignore
  games!: Game[];
  show = true;

  constructor(private gameService: GameStockService) {
    this.gameService = gameService;
  }

  onGameChange(gameName: string) {
    console.log(gameName);
  }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
    
  }
}
