import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import axios from "axios";
import { tap } from "rxjs";

@Injectable()
export class ServicePersonas{
    constructor(private _http:HttpClient){}

    getPersonas(): Observable<any>{
        let request="api/personas"

        return this._http.get(environment.apiPersonas+request)
    }

    getPersonasAxios(){
        let request="api/personas"

        return axios.get(environment.apiPersonas+request)
    }
    getPersonasFetch():Promise<any>{
        let request="api/personas"
        return fetch (environment.apiPersonas+request).then(res=>res.json());
    }
}