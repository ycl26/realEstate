import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../properties.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-properties',
  templateUrl: './show-properties.component.html',
  styleUrls: ['./show-properties.component.css']
})
export class ShowPropertiesComponent implements OnInit {

  constructor(private srvObj : PropertiesService, private route: ActivatedRoute) { }

  type;
  location;
  buy;
  rent;
  displayProperties = [];
  displayListFormat = true;
  order = "Builtin";
  recommendedProperties = [];
  ngOnInit() {
     this.type =   this.route.snapshot.params['type'];
     this.location =   this.route.snapshot.params['location'];
     this.buy =   this.route.snapshot.params['buy'];
     this.rent =   this.route.snapshot.params['rent'];

    this.showProperties(this.type, this.location, this.buy, this.rent);
    this.recommendedProperties = this.srvObj.GetSimilarProperties(this.location, this.type);
    console.log("reco : "+this.recommendedProperties)

  }

  showProperties(type: string, location : String, buy: any, rent : any ){
      this.srvObj.ShowProperties(type,location, buy,rent).subscribe(
        (response) => {
            console.log("show properties : "+response);
            this.displayProperties = response;
        }
      )
  }

  onStyleChange(list : any){
      this.displayListFormat = list;
  }

  orderBy(by: any){
      this.order = by;
  }

}
