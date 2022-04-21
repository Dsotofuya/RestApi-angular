import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable
({providedIn : "root" })

export class cotailService{
    constructor(public hClient : HttpClient){
    } 

    getCoctailData(){
        return this.hClient.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    }
}

