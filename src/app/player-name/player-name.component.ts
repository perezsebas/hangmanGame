import { Component, OnInit, Input } from '@angular/core';
import { PlayerDataService } from '../../services/player-data-service';
import { WordsDataService } from '../../services/words-data-service';

@Component({
  selector: 'player-name',
  //inputs: ['name'],
  templateUrl: './player-name.component.html',
  styleUrls: ['./player-name.component.css']
})
export class PlayerNameComponent implements OnInit {
  //public name: string;
  //public player;

  constructor(
    private playerDataService: PlayerDataService,
    private wordsDataService: WordsDataService
  ) { }

  ngOnInit() {
    this.wordsDataService.resetLetters();
  }

  start(name){
    //console.log(name);
    if(name == undefined){
      name = "NoName";
    }
    this.playerDataService.setPlayer(name);
  }

}
