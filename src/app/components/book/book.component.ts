import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  homeBooks:any[] = [
    {
      "img" : "../../../assets/images/Book1.webp",
      "title" : "Oliver twist",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book2.webp",
      "title" : "Things fall apart",
      "action" : "Read book"
    }, {
      "img" : "../../../assets/images/Book3.webp",
      "title" : "Evening play",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book4.webp",
      "title" : "Jenifa's diary",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book5.webp",
      "title" : "My dream",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book6.webp",
      "title" : "C# basics",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book7.webp",
      "title" : "Amaka's diary",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book8.webp",
      "title" : "Festive period",
      "action" : "Read book"
    }

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
