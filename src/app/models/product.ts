export class Product {
    id : number;
    name : string;
    price : number;
    description :string;
    imgUrl :string;

    constructor(id:number ,name:string,price:number = 0 ,description:string = '' ,imgurl:string = "https://www.innerdrive.co.uk/wp-content/uploads/2019/01/Football-sport-psych-hero.png"){
         this.id = id;
         this.name = name;
         this.price = price;
         this.description = description;  
         this.imgUrl = imgurl;
    }
}
