import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : String;
  username : String;
  email : String;
  password : String;

  constructor(private validateService : ValidateService,
              private flashMessagesService : FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name : this.name,
      username : this.username,
      email : this.email,
      password : this.password
    }

    if(!this.validateService.validateRegister(user)){
      this.flashMessagesService.show('값을 채워주세요',{cssClass:'alert-danger', timeout:3000});
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessagesService.show('비밀번호 형식이 잘못되었습니다.',{cssClass:'alert-danger', timeout:3000});
      return false;
    }

  }

}
