import {Injectable, OnInit} from "@angular/core";
var Horizon = require("@horizon/client/dist/horizon");
const SERVER_URL = 'dockercloud-4659aec6.cloudapp.net';

@Injectable()
export class horizonService implements OnInit{
    public horizon : any = Horizon({ host: SERVER_URL, authType: 'unauthenticated' });
    
    constructor() {
                
    }

    ngOnInit() {
        this.horizon.status()
        .subscribe((status) => {            
            if(status && status.type === 'ready'){
                console.log('Horizon client is ready!!!!');
            }           
        })
        this.horizon.connect();
    }

}