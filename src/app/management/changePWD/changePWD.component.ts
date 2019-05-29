import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagementService } from '../management.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { TokenService } from 'src/app/core/services/token.service';
import { md5 } from 'blueimp-md5';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changePWD.component.html'
  // styleUrls: ['./management.component.css']
})
export class ChangePWD implements OnInit {
  validateForm: FormGroup;
  password1: string;
  password2: string;
  differentPWD: boolean;
  userId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private managementService: ManagementService,
    private notification: NzNotificationService,
    private tokenService: TokenService
  ) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.password1 !== this.password2) {
      this.differentPWD = true;
      return;
    }
    this.differentPWD = false;
    this.managementService
      .changePWD(this.userId, md5(this.password1))
      .subscribe(
        res => {
          this.notification.create('success', '成功', '更新密码成功');
          this.router.navigateByUrl('/index');
        },
        err => {
          this.notification.create('error', '错误', '更新密码错误，请重试');
        }
      );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.userId = this.tokenService.getUserId();
    if (!this.userId) {
      this.router.navigateByUrl('/login');
      this.notification.create('error', '错误', '系统错误，请重新登录');
    }
  }

  goback() {
    this.router.navigateByUrl('/index');
  }
}
