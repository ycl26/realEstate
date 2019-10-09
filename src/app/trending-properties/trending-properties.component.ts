import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../properties.service';
import { IProperties } from '../properties.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-properties',
  templateUrl: './trending-properties.component.html',
  styleUrls: ['./trending-properties.component.css']
})
export class TrendingPropertiesComponent implements OnInit {

  constructor(private propSrv: PropertiesService, private route : Router) { }

  limitStr = 0;
  limitEnd = 6;

  viewMore = false;

  ngOnInit() {
    // get all the trending proerties 

    this.getTrendingProperties();
  }
  trendingProperties : IProperties[] = [];
  getTrendingProperties(){
      this.propSrv.GetProperties().subscribe(
        (res) => {
          // console.log(res);
          this.trendingProperties = res;

          this.limitEnd = this.trendingProperties.length > 6 ? 6 : this.trendingProperties.length;
          
          this.viewMore = this.limitEnd < this.trendingProperties.length;
        },
        (error) => {
          console.log(error);
        }
      )
  
  }
    
  onViewMore(){
      this.limitEnd = this.limitEnd + 6;
      this.viewMore = this.limitEnd < this.trendingProperties.length;
  }

  onSubmit(){
      this.route.navigate(['/submit']);
  }

}
