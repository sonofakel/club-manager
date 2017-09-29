import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
@Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginUpdatingPlayer(playerToUpdate){
   this.playerService.updatePlayer(playerToUpdate);
 }

}
