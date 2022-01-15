import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrelloService } from 'src/app/services/trello.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  cardName:any;
  idBoard:string = environment.idBoard;
  cardListId = "61e2ca082ea90c08047e79b3";
  cards:any;

  constructor(private _trelloService:TrelloService, private router:Router) { }

  saveCard() {
    this._trelloService.createCard(this.cardListId,this.cardName).subscribe(res => {
      this.cardName ="";
    })
  }

  getCardListId(id:any) {
    document.querySelectorAll('.card').forEach(element => element.classList.remove('active'));
    document.getElementById(id)?.classList.add('active');
    this.cardListId = id;
  }

  getCardList() {
    this._trelloService.getCardList(this.idBoard).subscribe(res => {
      console.log(res);
      this.cards = res;
      console.log(this.cards);
    })
  }

  ngOnInit(): void {
    this.getCardList();
  }

}
