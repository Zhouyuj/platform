import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'platform-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['../../management/management.component.css']
})
export class IconComponent implements OnInit {
  @Input() url: string;
  @Input() name: string;
  @Input() imgUrl: string;
  @Input() authorized: boolean;

  constructor() {
    console.log(this.url);
  }

  ngOnInit() {
    console.log(this.url, this.name);
  }

  goToUrl(url) {
    console.log(url);
  }
}
