import { Component } from '@angular/core';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css'
})
export class ListcategoriesComponent {
title:String="List Categories"
categories=[
  {
    id:1,
    title:"Education",
    description:"Good For Schools"
  },
  {
    id:2,
    title:"SocialMedia",
    description:"Content Creators"
  },
  {
    id:3,
    title:"Technology",
    description:"For Tech Entustics"
  },
  {
    id:4,
    title:"Education",
    description:"Good For Schools"
  },
  {
    id:5,
    title:"Education",
    description:"Good For Schools"
  }
]
}
