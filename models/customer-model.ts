export class CustomerModel {
    constructor(
        public CustomerID :string,
        public CompanyName:string,
        public ContactName:string,
        public City:string,
        public Country:string
    ){
        this.CustomerID=CustomerID;
        this.CompanyName=CompanyName;
        this.ContactName=ContactName;
        this.City=City;
        this.Country=Country;
    }
}
