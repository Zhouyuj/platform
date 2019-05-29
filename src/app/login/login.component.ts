import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../core/services/token.service';
import { LoginModel } from './login.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { notificationMotion, NzNotificationService } from 'ng-zorro-antd';
import { MessageService } from '../core/services/message.service';
import md5 from 'blueimp-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  username: string;
  password: string;
  submitBtnValid: boolean;

  constructor(
    private tokenService: TokenService,
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private notification: NzNotificationService,
    private messageService: MessageService
  ) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.submitBtnValid = true;
    const msgId = this.messageService.create({
      type: 'loading',
      content: '正在登陆,请稍后'
    });
    this.loginService
      .auth(
        JSON.stringify({
          userName: this.username,
          passWord: this.password
        })
      )
      .subscribe(
        res => {
          console.log(res);
          this.tokenService.setToken(res.data.accessToken);
          this.tokenService.setUserId(res.data.userId);
          this.tokenService.setUserName(this.username);
          this.tokenService.setLinkIds(res.data.linkIds);
          this.router.navigateByUrl('/index');
          this.submitBtnValid = false;
          this.messageService.remove(msgId);
        },
        err => {
          this.submitBtnValid = false;
          this.messageService.remove(msgId);
          this.notification.create('error', '错误', '用户名或密码错误');
        }
      );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.submitBtnValid = false;
  }
}
