export class Member{
    firstName:string;
    lastName:string;
    email:string;
    dob:Date;
    contact:number;
    city:string;
    photoPath:string;
    constructor(fn:string,ln:string,em:string,dob:Date,cn:number,c:string,ph:string){
        this.firstName=fn;
        this.lastName=ln;
        this.email=em;
        this.dob=dob;
        this.contact=cn;
        this.city=c;
        this.photoPath=ph;

    }
}
