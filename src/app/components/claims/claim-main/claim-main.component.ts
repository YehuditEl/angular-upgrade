import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-claim-main',
  templateUrl: './claim-main.component.html',
  styleUrls: ['./claim-main.component.css']
})
export class ClaimMainComponent implements OnInit {

  @Output()
  private refresh: EventEmitter<any>;

  pensionFollowUpType: any[] = [
    { code: 1, value: "במעקב נכות שנתי" },
    { code: 2, value: "במעקב נכות רפואי" },
    { code: 3, value: "במעקב נכות שנתי ורפואי" },
  ];

  @Input()
  processModel: any;

  constructor() {
    this.refresh = new EventEmitter<any>();
  }

  ngOnInit(): void {
    
  }

  
          

hasIrragularMark () {
  return this.processModel && this.processModel.superClaim && this.processModel.superClaim.irregularSuperClaimFlag === true;
}

claimRemarks()  {
  var text = "";
  if (this.processModel.superClaim && this.processModel.superClaim.inquiryPorcessFlag) {
    text += "בירור";
    if (this.processModel.superClaim.pensionFollowUpForInsuredType) {
      text += ", ";
    }
  }
  return text;
}

getClaims  () {
  if (!this.processModel.superClaim || !this.processModel.superClaim.operativeClaims) { return ''; }
  var ParticipatingClaims = this.getParticipatingClaims(this.processModel.superClaim.operativeClaims)
  return ParticipatingClaims ? ParticipatingClaims.map(function (claim:any) {
    return claim.company + "-" + claim.operativeClaimNum;
  }).join(",") : "אין תביעות משתתפות";
}

executeRefresh () {
  this.refresh.emit();
}

  getParticipatingClaims(operativeClaims: any[]) {
    var canceledClaimStatus = 2;
    return operativeClaims.filter(claim => { return claim.claimStatus.code !== canceledClaimStatus; })
      ;
}

}
