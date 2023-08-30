import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonalData} from "./data.model";
import {faEnvelope, faGlobe, faPhone, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  envelope = faEnvelope
  globe = faGlobe
  phone = faPhone
  mapMarker = faMapMarker
  github = faGithub
  linkedinIn = faLinkedinIn
  dataUri = "assets/data.json"
  data: PersonalData = new PersonalData()

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    void this.getData();
  }

  async getData() {
    const data = await this.http.get(this.dataUri).subscribe(
      data => {
        Object.assign(this.data, data)
        console.log(this.data);
      }
    );
  }

  protected readonly faEnvelope = faEnvelope;
  protected readonly faLinkedinIn = faLinkedinIn;
}
