import { Component, Input, OnInit } from '@angular/core';
import { ContactPersonTypeEnum } from '../../../enums/contact-person-type';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input()
  process: any;
  

  contactPersons: any[];

  constructor() {
    this.contactPersons=[
      {
        id: 1,
        deliveryFlag: true,
        type: {
          code: 1,
          value: "מבוטח"
        },
        firstName: "ניקיטה",
        lastName: "ג'יין",
        identity: 278545412,
        address: {
          homeNumber: 9,
          cityName: "רחובות",
          streetName: "אופנהיימר"
        },
        cellPhone: 525816206,
        email: "NIKITA_JAIN@AMAT.COM"
      },
      {
        id: 2,
        deliveryFlag: false,
        type: {
          code: 21,
          value: "סוכן"
        },
        firstName: "טוביה",
        lastName: "בצקי",
        identity: 433974846,
        address: {
          cityName: "מחנה תל נוף",
        },
        cellPhone: 525452206,
      }
    ];
  }

  ngOnInit(): void {
  }

   isAmbulatoryProcess() {
  return this.process.processType === "AMBULATORY_HEALTH_CLAIM" ||  this.process.processType === "AMBULATORY_HEALTH_CLAIM_CONT";
}

 contactIsInsured(contactPerson:any) {
   return contactPerson.type.code === ContactPersonTypeEnum.INSURED;
 }

  isInsuredInHealthClaim  (contactPerson:any) {
    return this.isAmbulatoryProcess() && this.contactIsInsured(contactPerson);
  };

  addInsured2Contacts(params:any) {
    var newContact = this.createContact(params);
    this.contactPersons.push(newContact);
  }

  resetContacts() {
    var contacts = [];
    if (this.contactPersons.length>0)
      contacts.push(this.contactPersons[0]);
    this.contactPersons = contacts;
  }

  deleteContacts() {
    this.contactPersons = [];
  }



     createContact(contact:any) {
  return {
    id: this.contactPersons.length,
    deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
    type: {
      code: 1,
      value: "מבוטח"
    },
    firstName: contact.firstName,
    lastName: contact.lastName,
    identity: contact.identity,
    address: {
      cityName: contact.address.cityName,
      streetName: contact.address.streetName
    },
    cellPhone: contact.cellPhone,
    email: contact.email
  }
}

  addContactPerson() {
    var newContact = {
      id: this.contactPersons.length,
      deliveryFlag: this.contactPersons[this.contactPersons.length - 1] ? this.contactPersons[this.contactPersons.length - 1].deliveryFlag ? false : true : true,
      type: {
        code: 5,
        value: "שאר"
      },
      firstName: "ישראל",
      lastName: "ישראלי",
      identity: 278545412,
      address: {
        homeNumber: 9,
        cityName: "רחובות",
        streetName: "אופנהיימר"
      },
      cellPhone: 525816206,
      email: "NIKITA_JAIN@AMAT.COM"
    };

    this.contactPersons.push(newContact);

    return;
  }
}
