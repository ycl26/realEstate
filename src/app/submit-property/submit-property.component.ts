import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from '../properties.service';

@Component({
  selector: 'app-submit-property',
  templateUrl: './submit-property.component.html',
  styleUrls: ['./submit-property.component.css']
})
export class SubmitPropertyComponent implements OnInit {

  constructor(private route: Router, private srvObj : PropertiesService) { }

  ngOnInit() {
    
  }

  step = 1;

  Address: any;
  AgentAddress: any;
  AgentContact: any;
  AgentDetails: any;
  AgentMail: any;
  AgentName: any;
  Amenities: any;
  AdditionalDetails: any = ['Swimming Pool','2 Stories','Emergency Exit','Fire Place','Laundry Room','Jog Path','Ceilings','Parking'];
  Area: any;
  Availability: any;
  Balcony: any;
  Bath: any;
  Bed: any;
  Builtin: any;
  CarGarages: any;
  City: any;
  Description: any;
  Facing: any;
  Gated: any;
  Id: any;
  Kitchen: any;
  Parking: any;
  posted: any;
  Price: any;
  Propimages: any;
  State: any;
  Summary: any;
  Status: any;
  Type: any;
  Password: String;

 selectedAditionalDetails = [];


  WaterFront = false;
  onWaterFrontChecked(selected : boolean){
      if(selected){
        this.WaterFront = true;
      }else{
        this.WaterFront = false;
      }
  }
  onNext(){
    var currentStep = this.step;
    console.log(this.WaterFront);

    switch(currentStep){
      case 1 : 
        this.step = 2;
        break;
      case 2 : 
        this.step = 3;
        break;
        case 3 : 
        this.step = 4;
        break;
        case 4 : 
        this.step = 5;
        break;

        default : 
        this.step = 1;

    }
  }

  onPrevious = function () {
    // take the current step value
    var currentStep = this.step;

    switch (currentStep) {
        // there is no previous for step 1.
        case 2:
            this.step = 1;
            break;
        case 3:
            this.step = 2;
            break;
        case 4:
            this.step = 3;
            break;
        case 5:
            this.step = 4;
            break;
          
        default:
            this.step = 1;
    }
}

  onRegister(){
      this.route.navigate(['/register']);
  }

  onCheckBoxSelected(selectedVal){
      if(this.selectedAditionalDetails.indexOf(selectedVal) <= -1){
        this.selectedAditionalDetails.push(selectedVal);
      }else{
        this.selectedAditionalDetails.splice(this.selectedAditionalDetails.indexOf(selectedVal), 1);
      }

      console.log("Selected check boxes are "+this.selectedAditionalDetails);
  }

  onFinish = function () {

    
  
    var body = {
                Address	:	 "600 DLG",
	    AgentAddress	:	 "9089 your adress her",
	    AgentContact	:	 "+1 (514) 123 5678",
	    AgentDetails	:	 "About yulien Constructions Pvt. Ltd.yulien constructions pvt. Ltd. Offer residential apartment(S) on sale in and around Canada.",
	    AgentMail	:	 "Beela@yulienRealtors.com",
	    AgentName	:	 "Beela",
	    Amenities	:	 [ "WaterFrontView", "Fire Place", "Jog Path", "Swimming pool", "BikePath", "childrenpark" ],
	    AdditionalDetails: {"waterfront": "yes",
      "view": "Intracoastal View,Direct ew",
    "Parking": "2 Or More Spaces,Covered Parking,Valet Parking",
    "BuiltIn": "2017",
    "Location": "Montreal-North"
                },
	        Area	:	 "288sqft",
	    Availability	:	 "Ready to Move",
	    Balcony	:	 "2",
    Bath	:	 "2",
    Bed	:	 "2",
    Builtin	:	 "2017",
    CarGarages 	:	  "2",
    City	:	 "Montreal",
    Description	:	 "This is a premium joint venture development of Beela's construction, a luxurious and prestigious project",
    Facing	:	 "North-East",
    Gated	:	 "yes",
    Id	:	 "1",
    Kitchen	:	 "1",
    Parking	:	 "yes",
    posted	:	 "1/21/2018",
    Price	:	 "600000$",
    Propimages	:	 "prop1.jpg",
    State	:	 "QC",
    Summary	:	 "Independent House sale in Montreal",
    Status	:	"Sale",
    Type: "Apartment",
    Password :"yulien"
    }

  

    
//    this.srvObj.storeData(body).subscribe(
//     (res) => {
//             console.log("Data stored successfully" +res);
//     }
// )
this.storeData(body);

  }

  storeData(body : any){
    this.srvObj.StoreData(body).subscribe(
      (res)=> {
          console.log("data stored successfully:"+res)
      }
    )
  }

}
