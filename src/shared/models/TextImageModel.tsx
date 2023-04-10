import {ArticleModel} from "./ArticleModel";

export interface TextImageModel{
    name: string;
    imgUrl: string;
    article: ArticleModel;
}