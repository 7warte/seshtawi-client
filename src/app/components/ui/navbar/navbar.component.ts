import { Component, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { debounceTime, last, distinctUntilChanged, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})



export class NavbarComponent {

  constructor(private http:HttpClient){

    console.log(this.searchInput);
    

    this.searchInput.pipe(
      debounceTime(500) // Adjust the debounce time (in milliseconds) as needed
    ).subscribe((searchTerm: string) => {

      console.log(searchTerm);
      
      // Call your function here, e.g., performSearch(searchTerm)

      this.onSearch(searchTerm)
    });

  }



  searchResults:any = []



  searchBannerIsOpen:boolean = false;

  @ViewChild('searchBar')searchBar:any | undefined
  // searchControl: FormControl = new FormControl('');

  searchInput = new Subject<string>();




  onSearchInpunt(){

  }

  onSearchInputChange(searchTerm: any) {
    
    this.searchInput.next(searchTerm);
  }

  ngOnDestroy() {
    this.searchInput.complete();
  }



  onSearch(value:any){

    console.log(value);
    

    this.searchBannerIsOpen = this.searchBar.nativeElement.value.length >0 ? true:false;

     let payload={
      query :value
     }

        const filteredArticles = this.http.post(`${environment.apiUrl_backend}get_articles`,payload);
        filteredArticles.subscribe(res=>{
          
          this.searchResults =res;
        })


  }

}
