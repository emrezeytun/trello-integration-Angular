import { Component, OnInit } from '@angular/core';
import { TrelloService } from 'src/app/services/trello.service';
import { ButtonsComponent } from '../render/buttons/buttons.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  idBoard:string = environment.idBoard;
  cards:any;
  gridApi:any;
  gridColumnApi:any;
  frameworkComponents:any;
  isAnyButtonTrigger:boolean = true;
  cardItemId:any;
  cardItemName="test";
  cardId:any;



  

  constructor(private _trelloService:TrelloService) { this.frameworkComponents = { buttonRenderer: ButtonsComponent } }

  columnDefs = [
    {headerName:'Name', field: 'name', filter: true},
    {
      headerName: 'Actions',
      cellRenderer: 'buttonRenderer',
      pinned: 'right',
      width: 40,
      cellRendererParams: {
        onClick: this.btnDelete.bind(this),
        btnDeleteRender: this.btnDelete.bind(this),
        btnMoveRender: this.btnMove.bind(this),
        btnEditRender: this.btnEdit.bind(this)
      }
    },
  ];

  rowData:any;


  btnDelete(e:any) {
    this.closeForm();
    this.cardItemId = e.rowData.id;
    this.moveCard('61e3200c7430021aa0f882c1');
  }

  moveCard(mainCardId:any) {
    
      this._trelloService.moveCard(this.cardItemId, mainCardId).subscribe(res => {
        this.getListByCardId(this.cardId);
        this.closeForm();
      })
  }

  btnMove(e:any) {
    this.closeForm();
    document.querySelector('.movePopup')?.classList.add('active');
    this.cardItemId = e.rowData.id;
  }

  btnEdit(e:any) {
    this.closeForm();
    this.cardItemId = e.rowData.id;
    this.cardItemName = e.rowData.name;
    document.querySelector('.popup')?.classList.add('active');
    console.log(e.rowData)
  }

  getCardList() {
    this._trelloService.getCardList(this.idBoard).subscribe(res => {
      console.log(res);
      this.cards = res;
      console.log(this.cards);
    })
  }

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    params.api.resetRowHeights();
    params.api.setDomLayout('autoHeight')
  }

  getListByCardId(idCard:string) {
    this.cardId =   idCard;
    document.querySelectorAll('.card').forEach(element => element.classList.remove('active'));
    document.getElementById(idCard)?.classList.add('active');
    this._trelloService.getListByCardId(idCard).subscribe(res => {
      console.log(res);
      this.rowData = res;
      console.log(this.cards);
    })
  }

  closeForm() {
    document.querySelector('.popup')?.classList.remove('active');
    document.querySelector('.movePopup')?.classList.remove('active');
    this.cardItemName = "";
    this.cardItemId = null;
  }

  saveCard() {
    if(this.cardItemId != null) {
      this._trelloService.updateCard(this.cardItemId,this.cardItemName).subscribe(res => {
        this.getListByCardId(this.cardId);
        this.closeForm();
      });
    }
  }

  ngOnInit(): void {
    this.getCardList();
  }

}
