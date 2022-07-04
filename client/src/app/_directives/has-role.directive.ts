import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit{
  @Input() appHasRole:string[];
  user:User;

  constructor(private viewContainerRef:ViewContainerRef,private templateRef:TemplateRef<any>, private accountService:AccountService) {
    this.accountService.currentUsers$.pipe(take(1)).subscribe(user=>{
      this.user=user;
    })
   }

  ngOnInit(): void {
    //clear view of no roles
    if(this.user==null || !this.user?.roles){
      this.viewContainerRef.clear();
      return;
    }

    if(this.user?.roles.some(r=>this.appHasRole.includes(r))){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
