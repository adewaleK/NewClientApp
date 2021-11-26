import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  allBooks:any[] = [
    {
      "img" : "../../../assets/images/Book12.webp",
      "title" : "Oliver twist",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book11.webp",
      "title" : "Things fall apart",
      "action" : "Read book"
    }, {
      "img" : "../../../assets/images/Book10.webp",
      "title" : "Evening play",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book9.webp",
      "title" : "Jenifa's diary",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book8.webp",
      "title" : "My dream",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book7.webp",
      "title" : "C# basics",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book6.webp",
      "title" : "Amaka's diary",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book5.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book4.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book3.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book2.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book1.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book13.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book14.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book15.webp",
      "title" : "Festive period",
      "action" : "Read book"
    },
    {
      "img" : "../../../assets/images/Book16.webp",
      "title" : "Festive period",
      "action" : "Read book"
    }

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
