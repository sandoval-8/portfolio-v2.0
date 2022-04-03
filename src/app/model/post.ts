import { Photo } from "./photo";

export interface Post {
    id?:number,
    title?:string,
    description?:string,
    presentation?:string,
    photo?:Photo[],
    enable?:boolean,
    visible?:boolean,
}