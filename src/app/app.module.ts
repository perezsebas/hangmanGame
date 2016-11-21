import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerNameComponent } from './player-name/player-name.component';
import { GameComponent } from './game/game.component';
import { ResultComponent } from './result/result.component';
import { PlayerDataService } from '../services/player-data-service';
import { WordsDataService } from '../services/words-data-service';
import { GuessLetter } from '../pipes/guess-letter';
import { SecretWord } from '../pipes/secret-word';

export const appRoutes: Routes = [
  { path: '', component: PlayerNameComponent },
  { path: 'game', component: GameComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerNameComponent,
    GameComponent,
    ResultComponent,
    GuessLetter,
    SecretWord
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayerDataService, WordsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
