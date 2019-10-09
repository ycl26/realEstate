import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperties } from './properties.model';
import {map} from 'rxjs/operators'
import { Key } from 'protractor';

@Injectable(
    {
        providedIn : 'root'
    }
)
export class PropertiesService implements OnInit{

    constructor(private http : HttpClient){

    }
    ngOnInit(){

    }

    AllProperties : IProperties[] = [];
    SimilarProperties : IProperties[] = [];
    GetProperties(){
            return this.http.get<{[key : string] : IProperties}>('http://localhost:3000/api/buy')
            .pipe(
                map(
                    (response) => {
                            const prpoerties : IProperties[] = [];
                            for(const key in response){
                                prpoerties.push({...response[key]});
                                
                            }
                            // console.log(prpoerties);
                            this.AllProperties = prpoerties;
                            return prpoerties;
                    }
                )
            )
    }

    GetPropertyByID(_id : any){
         return  this.http.get<{[Key : string]: IProperties}>('http://localhost:3000/api/viewProp/'+_id).pipe(
                map(
                    (response)=>{
                        const responseData : IProperties[] = [];

                        for(const key in response){
                            responseData.push({...response[key]});
                        }
                        console.log(responseData);
                        return responseData;
                })
            )
    }
    
    GetSimilarProperties(city : any, type : any, id ?: any) : IProperties[] {

        // this.AllProperties.forEach(
        //     function(prop, index, array){
        //         if(prop.City == city && prop.Type == type){
        //             this.SimilarProperties.push(prop);
        //         }
        //     }

        // )
        this.SimilarProperties = [];
        for(let property of this.AllProperties){
            if(property.City == city && property.Type == type){
                            this.SimilarProperties.push(property);
                        }
        }
        console.log("similar proper" +this.SimilarProperties)
        return this.SimilarProperties;
    }

    FetchLocations(locationText : String){
            return this.http.get<{[key : string]: IProperties}>('http://localhost:3000/api/FetchLocations/'+locationText).pipe(
                map(
                    (response)=>{
                        
                        const locations = [];
                            
                                for(const key in response){

                                    if(locations.indexOf(response[key].City) <= -1){
                                        locations.push(response[key].City)
                                    }else{
                                        console.log(response[key].City +"was already added to the locations array");
                                    }
                                }
                                console.log("Locations : "+locations);
                                return locations;
                            }
            )
        );
    }

    ShowProperties(type : String, location : String, buy : any, rent : any){

        var status = buy == 'true' ? 'Sale' : rent == 'true' ? 'Rent' : 'All';

        console.log("Req url is : "+"http://localhost:3000/api/ShowProperties/"+type+"/"+location+"/"+status);

        return this.http.get('http://localhost:3000/api/ShowProperties/'+type+"/"+location+"/"+status)
        .pipe(
            map((response)=>{
                        const responseData = [];

                        for(const key in response){
                                if(response.hasOwnProperty(key)){
                                    responseData.push({...response[key]});

                                }
                        }

                        console.log("Show prop response "+responseData);

                        return responseData;
            })
        );
    }

    StoreData(body : any){
       return this.http.post('http://localhost:3000/api/StoreData', body);
    }

}