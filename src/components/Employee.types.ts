export interface TEmployee{ 
    //  interface is used to describe the shape of object and can be extended by others. 
    //  declaring TEmployee with the datatype.
    //  in any we can have any data type base on this -> number | string | boolean | null | undefined
    id:string|number;//here id can either be a string or a number
    firstName: string;
    lastName:string;
    email:string;
}

export const dummyEmployeeList: TEmployee[]=[{
    id: new Date().toJSON().toString(),
    firstName:"Dummy",
    lastName:"Dummy",
    email:"dummy@gmail.com"
},{
    id: new Date().toJSON().toString(),
    firstName:"Ashutosh",
    lastName:"Kolambkar",
    email:"kolambkar@gmail.com"
},]

export enum PageEnum{ //set of named constants
    list,
    add
}