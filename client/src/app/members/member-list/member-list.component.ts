import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MemberService } from 'src/app/_services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  baseUrl=environment.apiUrl;
  members:Member[];

  constructor(private memberService:MemberService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
     this.memberService.getMembers().subscribe(members=>{
       this.members=members;
     });
  }
}
