import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../core/services/token.service';
import { ManagementService } from './management.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  subSystemInfos: any[] = [];
  selectedBackground: string;
  backgrounds: string[] = ['banner', 'ocean', 'sky'];
  isLoaded: boolean;
  username: string;
  linkIds: string;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private managementService: ManagementService
  ) {}
  ngOnInit(): void {
    this._init();
  }

  _init = () => {
    this.username = this.tokenService.getUserName();
    this.linkIds = this.tokenService.getLinkIds();
    this._initIcons();
    this._initBackground();
  };

  _initIcons = () => {
    this.isLoaded = true;
    this.managementService.getAllIcons().subscribe(
      res => {
        this.isLoaded = false;
        this.subSystemInfos = res.data.map(s => {
          if (this.linkIds.split(',').includes(s.linkId + '')) {
            s.authorized = true;
          }
          return s;
        });
        console.log(this.subSystemInfos);
      },
      err => {
        this.isLoaded = false;
      }
    );
  };

  _initBackground = () => {
    const background = localStorage.getItem('background');
    if (background) {
      this.selectedBackground = background;
      this.setBackgroundImg(this.selectedBackground);
    } else {
      this.setBackgroundImg('banner');
      this.selectedBackground = 'banner';
      localStorage.setItem('background', 'banner');
    }
  };

  changeBackground() {
    let selectedIndex = this.backgrounds.indexOf(this.selectedBackground);
    if (selectedIndex > -1) {
      if (selectedIndex >= this.backgrounds.length - 1) {
        this.selectedBackground = this.backgrounds[0];
      } else this.selectedBackground = this.backgrounds[selectedIndex + 1];
    } else {
      this.selectedBackground = this.backgrounds[0];
    }
    this.setBackgroundImg(this.selectedBackground);
    localStorage.setItem('background', this.selectedBackground);
  }

  setBackgroundImg = background => {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundImage = `url(../../assets/background/${background}.jpg)`;
  };

  logout = () => {
    this.router.navigateByUrl('/login');
    this.tokenService.resetToken();
    this.tokenService.resetUserId();
    this.tokenService.resetUserName();
    this.tokenService.resetLinkIds();
  };

  changePWD() {
    this.router.navigateByUrl('/changePWD');
  }
}
