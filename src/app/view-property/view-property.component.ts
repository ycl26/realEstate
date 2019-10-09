import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../properties.service';
import { IProperties } from '../properties.model';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  constructor(private route : ActivatedRoute, private srvObj : PropertiesService) { }

  id : any;

  routerSubscription : Subscription;
  viewPropDetails : IProperties;
  additionalDetails = [];

  similarProperties = [];

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.routerSubscription = this.route.params.subscribe(
      (params : Params) => {
          this.id = params['id'];
          this.getPropertyByID(this.id);
      }
    )
    this.getPropertyByID(this.id);

  }

  getPropertyByID(_id : any){
    this.srvObj.GetPropertyByID(_id).subscribe(
      (res) => {
          this.viewPropDetails = res[0];
          this.additionalDetails = Object.keys(this.viewPropDetails.AdditionalDetails);
          console.log("additional details : "+this.additionalDetails);

          
            this.similarProperties = this.srvObj.GetSimilarProperties(this.viewPropDetails.City, this.viewPropDetails.Type, this.viewPropDetails.Id);
            console.log("similar proper" +this.similarProperties)
        
          
      }
    )
  }

}
