import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrelloService } from 'src/app/services/trello.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  mainCardName:any;
  idBoard:string = environment.idBoard;

  constructor(private _trelloService:TrelloService, private router:Router) { }

  saveMainCard() {
    this._trelloService.createMainCardOnBoard(this.idBoard,this.mainCardName).subscribe(res => {
      this.router.navigate(['/cards']);
    })
  }
  

  ngOnInit(): void {
  }

}
