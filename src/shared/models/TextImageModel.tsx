import {ArticleModel} from "./ArticleModel";

export interface TextImageModel{
    name: string;
    image: string;
    article: ArticleModel;
}