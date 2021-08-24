export interface props {
    title : String ;
    desc : String ;
}
export interface api {
    body : string ,
    id: number ,
    title : string,
    name : string   
}
export interface Match {
    params : any ,  
    isExact : Boolean
}