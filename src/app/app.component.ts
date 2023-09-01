import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}


  // jsonplacehoder -- server
       




  //   localserver 

  ngOnInit(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
        console.log("MY project having the data from jsonholder",data);
    })

    this.httpClient
      .get('https://in.bookmyshow.com/api/explore/v1/discover/regions')
      .subscribe((data) => {
        console.log('MY project having the data from bookmyshow', data);
      });


    this.httpClient
      .get('https://api.firstamedu.com/api/api/state/GetAllStatesConfiguration')
      .subscribe((data) => {
        console.log('MY project having the data from Firstamdeud', data);
      });

      
  }

  //angular http

  // to connect the apis

  //https://jsonplaceholder.typicode.com/posts
}
