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

  productsData: any = [];

  ngOnInit(): void {
    // this.httpClient
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .subscribe((data) => {
    //     console.log('MY project having the data from jsonholder', data);
    //   });

    // this.httpClient
    //   .get('https://in.bookmyshow.com/api/explore/v1/discover/regions')
    //   .subscribe((data) => {
    //     console.log('MY project having the data from bookmyshow', data);
    //   });

    // this.httpClient
    //   .get('https://api.firstamedu.com/api/api/state/GetAllStatesConfiguration')
    //   .subscribe((data) => {
    //     console.log('MY project having the data from Firstamdeud', data);
    //   });

    this.httpClient.get('http://localhost:3000/Products' , {
          headers :{
            CompanyName : 'Misard',
            Information : 'Its Online teacing portal'
          },
          params : {
             location : "Bangolore",
             size     : 100
          }
    }).subscribe((data) => {
      console.log('MY project having the data from local', data);
      this.productsData = data;
    });
  }

  // http://localhost:3000/Products/1
  // http://localhost:3000/Products/2
  // http://localhost:3000/Products/3

  evtGetProductsByID(textBox: HTMLInputElement) {
    let value = textBox.value;

    this.httpClient
      .get('http://localhost:3000/Products/' + value)
      .subscribe((data) => {
        console.log('MY project having the data from local', data);
        let LatestProducts = [];
        LatestProducts.push(data);
        this.productsData = LatestProducts;
      });
  }

  evtPostData(dTextbox: HTMLInputElement, pTextbox: HTMLInputElement) {
    let dvalue = dTextbox.value;
    let pvalue = pTextbox.value;

    //payload
    this.httpClient
      .post('http://localhost:3000/Products', {
        Device: dvalue,
        Price: pvalue,
      })
      .subscribe((value) => {
        console.log(value);
        this.productsData.push(value);
      });
  }

  evtUpdateData(
    deviceID: HTMLInputElement,
    deviceupdateTextBox: HTMLInputElement,
    priceupdateTextBox: HTMLInputElement
  ) {
    let dID = deviceID.value; // 8
    let dvalue = deviceupdateTextBox.value; // vivo
    let pvalue = priceupdateTextBox.value; //3000

    this.httpClient
      .put('http://localhost:3000/Products/' + dID, {
        Device: dvalue,
        Price: pvalue,
      })
      .subscribe((response:any) => {
         let record =  this.productsData.filter((x:any)=>x.id == response.id)[0];
         record.Device = response.Device;
         record.Price  = response.Price;
      });
  }

  evtPatchData(
    deviceID: HTMLInputElement,
    priceupdateTextBox: HTMLInputElement
  ) {
    let dID = deviceID.value; // 8
    let pvalue = priceupdateTextBox.value; //3000

    this.httpClient
      .patch('http://localhost:3000/Products/' + dID, {
        Price: pvalue,
      })
      .subscribe((response:any) => {
         let record =  this.productsData.filter((x:any)=>x.id == response.id)[0];
         record.Price  = response.Price;
      });
  }

  evtDeleteData(deviceDeleteID:HTMLInputElement){
    let dID = deviceDeleteID.value;   //7

    this.httpClient
      .delete('http://localhost:3000/Products/' + dID).subscribe((response)=>{
               console.log(response);
               //HOme work //
              //  Based on 7 you can delete the record  . slice() or splice() method

      })

  }





}
