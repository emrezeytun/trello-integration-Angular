import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-buttons',
  template: `
  <button type="button" class="btn btn-primary btn-sm" style="margin-right: 1rem;"  (click)="clickBtnEdit($event)">Edit</button>  <button type="button" style="margin-right: 1rem;"   class="btn btn-warning btn-sm"  (click)="clickBtnMove($event)">Move</button> <button  style="margin-right: 1rem;" type="button" class="btn btn-danger btn-sm"  (click)="clickBtnDelete($event)">Remove</button>
  `
})
export class ButtonsComponent implements ICellRendererAngularComp {

  params:any;
  label: any;

  agInit(params:any): void {
    this.params = params;
    this.label = this.params.label || null;
  }
  refresh(params?: any): boolean {
    return true;
  }

  clickBtnEdit($event:any) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        currentBtn: $event.currentTarget,
        rowData: this.params.node.data
      }
      this.params.btnEditRender(params);
    }
  }

  clickBtnCheckList($event:any) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        currentBtn: $event.currentTarget,
        rowData: this.params.node.data
      }
      this.params.btnCheckListRender(params);
    }
  }

  clickBtnDelete($event:any) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        currentBtn: $event.currentTarget,
        rowData: this.params.node.data
      }
      this.params.btnDeleteRender(params);
    }
  }

  clickBtnMove($event:any) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        currentBtn: $event.currentTarget,
        rowData: this.params.node.data
      }
      this.params.btnMoveRender(params);
    }
  }

}
