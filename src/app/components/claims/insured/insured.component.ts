import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-insured',
  templateUrl: './insured.component.html',
  styleUrls: ['./insured.component.css']
})
export class InsuredComponent implements OnInit {

  @Output()
  private addInsuredToContact: EventEmitter<any>;

  @Output()
  private deleteContactsEvent: EventEmitter<any>;

  @Output()
  private resetContactsEvent: EventEmitter<any>;

  @Input()
  process: any;

  @Input()
  countContacts: number = 0;

  constructor() {
    this.addInsuredToContact = new EventEmitter<any>();
    this.deleteContactsEvent = new EventEmitter<any>();
    this.resetContactsEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  deleteContacts() {
    this.deleteContactsEvent.emit();
  }

  resetContacts() {
    this.resetContactsEvent.emit();
  }


  isCompanyEmployer() {
    if (!this.process || !this.process.insured || !this.process.insured.companyEmployer) {
      return '';
    } else {
      return 'עובד חברה - ' + this.process.insured.position;
    }
  };

  addToContacts() {
    var c = {
      id: 0,
      //deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      type: {
        code: 5,
        value: "שאר"
      },
      firstName: this.process.insured.firstName,
      lastName: this.process.insured.lastName,
      identity: this.process.insured.identity,
      address: {
        homeNumber: null,
        cityName: this.process.insured.address.cityName,
        streetName: this.process.insured.address.streetName
      },
      cellPhone: this.process.insured.address.cellPhone,
      email: this.process.insured.email
    };
    this.addInsuredToContact.emit(c);
  }

}
