import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  process: any = {
    processType: "AMBULATORY_HEALTH_CLAIM",
    processStatus: 1,
    superClaim: {
      inquiryPorcessFlag: true,
      irregularSuperClaimFlag: false,
      pensionFollowUpForInsuredType: 0,
      superClaimStatus: {
        code: 1,
        value: "פתוחה"
      },
      deathAfterDisabilityFlag: false,
      operativeClaims: [
        {
          operativeClaimNum: 123,
          company: 2,
          claimStatus: {
            code: 2,
            value: "פתוחה"
          },
          coverages: [
            {
              coverageNum: 1,
              claimParticipating: false
            },
            {
              coverageNum: 2,
              claimParticipating: false
            }
          ]
        }, {
          operativeClaimNum: 24531,
          company: 1,
          claimStatus: {
            code: 1,
            value: "מבוטלת"
          },
          coverages: [
            {
              coverageNum: 1,
              claimParticipating: true
            },
            {
              coverageNum: 2,
              claimParticipating: false
            }
          ]
        }
      ]
    },
    insured: {
      companyEmployer: true,
      position: "פקיד",
      identity: 27854122145,
      firstName: "מריה",
      lastName: "ג'יין",
      age: 35,
      lastJobDescription: "כללי - מקפת",
      smokingCode: 0,
      email: "MARIYA_JAIN@AMAT.COM",
      address: {
        cityName: "רעננה",
        streetName: "אחוזה",
        cellPhone: 544485236
      }
    },

  };

  constructor() { }

  ngOnInit(): void {
  }

  refreshProcess() {
    this.process.superClaim.inquiryPorcessFlag = false;
    this.process.superClaim.irregularSuperClaimFlag = true;
  }

}
