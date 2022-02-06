import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-insured-actions',
  templateUrl: './insured-actions.component.html',
  styleUrls: ['./insured-actions.component.css']
})
export class InsuredActionsComponent implements OnInit {

  @Output()
  private addToContactsEvent: EventEmitter<any>;

  @Output()
  private deleteContactsEvent: EventEmitter<any>;

  @Output()
  private resetContactsEvent: EventEmitter<any>;

  @Input()
  countContacts: number=0;

  constructor() {
    this.addToContactsEvent = new EventEmitter<any>();
    this.deleteContactsEvent = new EventEmitter<any>();
    this.resetContactsEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  addToContacts() {
    this.addToContactsEvent.emit();
  }

  deleteContacts() {
    this.deleteContactsEvent.emit();
  }

  resetContacts() {
    this.resetContactsEvent.emit();
  }

}
