export class Events{
    eventName:string;
    eventDate:Date;
    start:string;
    destination:string;
    address:string;
    contactNo:number;

    constructor(en:string,ed:Date,st:string,ds:string,ad:string,cn:number){
        this.eventName=en;
        this.eventDate=ed;
        this.start=st;
        this.destination=ds;
        this.address=ad;
        this.contactNo=cn;

    }
}