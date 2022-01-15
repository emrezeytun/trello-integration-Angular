import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataResponse } from '../models/DataResponse';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {

  private trelloApiUrl:string = environment.trelloApiUrl;
  private key:string = environment.key;
  private token:string = environment.token;

  constructor(private http:HttpClient) { }

  getCardList(idBoard:string):Observable <DataResponse> {
    return this.http.get<DataResponse>(this.trelloApiUrl + "1/boards/"+idBoard+"/lists?key="+ this.key +"&token="+this.token);
  }

  getListByCardId(idCard:string):Observable <DataResponse> {
    return this.http.get<DataResponse>(this.trelloApiUrl + "1/lists/"+idCard+"/cards?key="+ this.key +"&token="+this.token)
  }

  updateCard(idCard:string, cardItemName:string): Observable<DataResponse> {
    return this.http.put<DataResponse>(this.trelloApiUrl + "1/cards/"+idCard+"/?name="+cardItemName+"&token="+this.token+"&key="+this.key, JSON.parse(JSON.stringify(cardItemName))).pipe(map(x => new DataResponse(x)));
  }

  moveCard(idCard:string, idMainCard:string): Observable<DataResponse> {
    return this.http.put<DataResponse>(this.trelloApiUrl + "1/cards/"+idCard+"/?idList="+idMainCard+"&token="+this.token+"&key="+this.key, JSON.parse(JSON.stringify(idMainCard))).pipe(map(x => new DataResponse(x)));
  }

  createMainCardOnBoard(idBoard:string, mainCardName:string): Observable<DataResponse> {
    return this.http.post<DataResponse>(this.trelloApiUrl + "1/boards/"+idBoard+"/lists?name="+mainCardName+"&token="+this.token+"&key="+this.key, JSON.parse(JSON.stringify(mainCardName))).pipe(map(x => new DataResponse(x)));
  }

  createCard(idList:string, cardName:string): Observable<DataResponse> {
    return this.http.post<DataResponse>(this.trelloApiUrl + "1/cards?idList="+idList+"&name="+cardName+"&token="+this.token+"&key="+this.key, JSON.parse(JSON.stringify(cardName))).pipe(map(x => new DataResponse(x)));
  }

  

}
