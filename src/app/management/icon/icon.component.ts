import { Component, OnInit, Input } from "@angular/core";
import { TokenService } from "src/app/core/services/token.service";

@Component({
  selector: "platform-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["../../management/management.component.css"]
})
export class IconComponent implements OnInit {
  @Input() url: string;
  @Input() name: string;
  @Input() imgUrl: string;
  @Input() authorized: boolean;
  @Input() title: string;
  @Input() content: string;
  hover: boolean = false;
  timeout: any;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {}

  goToUrl() {
    const token = this.tokenService.getToken();
    if (!this.authorized && !this.imgUrl.includes("Unknown")) {
      let pdf = this.distractPdfName(this.imgUrl);
      window.open(`../../../assets/documents/${pdf}.pdf`);
    } else {
      window.location.href = `${this.url}?AUTH_TOKEN=${token}`;
    }
  }

  distractPdfName = (imgName: string) => {
    return imgName.substring(
      imgName.lastIndexOf("/") + 1,
      imgName.lastIndexOf(".")
    );
  };

  timeoutHoverEnter() {
    this.timeout = setTimeout(() => {
      this.hover = true;
    }, 1500);
  }

  timeoutHoverLeave() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.hover = false;
  }
}
