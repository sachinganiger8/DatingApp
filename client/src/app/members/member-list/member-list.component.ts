import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { Pagination } from 'src/app/_models/pagination';
import { UserParams } from 'src/app/_models/userParams';
import { MemberService } from 'src/app/_services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  baseUrl = environment.apiUrl;
  members: Member[];
  pagination: Pagination;
  userParams: UserParams;

  genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];

  constructor(private memberService: MemberService) {
    this.userParams=this.memberService.getUserParams();
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.setUserParams(this.userParams);
    this.memberService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    })
  }

  resetFilters(){
    this.userParams=this.memberService.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    console.log(event);
    this.userParams.pageNumber = event.page;
    this.loadMembers();
  }
}
