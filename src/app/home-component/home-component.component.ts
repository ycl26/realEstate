import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private srvObj : PropertiesService, private route : Router) { }

  buy = false;
  rent = false;
  locationText;
  Locations = [];
  PropertyType="";
  ngOnInit() {
    this.srvObj.GetProperties().subscribe();
  }
  fetchLocations(){
    console.log("Fetch location hit");
    if(this.locationText !== "" && this.locationText !== undefined){
      this.srvObj.FetchLocations(this.locationText).subscribe(
        (res) => {
            this.Locations = res;
            console.log(this.Locations);
        }
      )
    }else{
      this.Locations = [];
    }
   
  }

  onBuy(){
      this.buy = !this.buy;
      this.rent = false;
  }
  onRent(){
    this.buy = false;
    this.rent = !this.rent;
  }

  setLocation(location : String){
    this.locationText = location;
    this.Locations = [];
  }

  onSearch(){
    this.route.navigate(['showProperites', this.PropertyType, this.locationText, this.buy, this.rent]);
  }
  onRegister(){
    this.route.navigate(['/register']);
}

}
