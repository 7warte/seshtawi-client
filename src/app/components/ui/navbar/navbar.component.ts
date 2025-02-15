import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { debounceTime, last, distinctUntilChanged, Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})



export class NavbarComponent {

  constructor(private http: HttpClient, private router: Router) {


    // console.log(this.searchInput.getValue());


    this.searchInput.pipe(
      debounceTime(500) // Adjust the debounce time (in milliseconds) as needed
    ).subscribe((searchTerm: string) => {




      this.onSearch(searchTerm)
    });

  }


  searchIsLoading: boolean = false;
  searchResults: any = []

  hideArticles: boolean = false;

  searchBannerIsOpen: boolean = false;
  menuBannerIsOpen: boolean = false;

  @ViewChild('searchBarDesktop') searchBarDesktop: any | undefined
  @ViewChild('searchBarMobile') searchBarMobile: any | undefined
  // searchControl: FormControl = new FormControl('');

  searchInput = new BehaviorSubject<string>('');



  onSearchResultClick(value: any) {
    this.searchBannerIsOpen = false;
    this.router.navigate(['/article', value.id]);

  }

  navigateHome(){

    this.router.navigate([''])
    
  }



  menuItems: Array<{name:string,route:string,active?:boolean}> = 
  [
    {name:'About me',route:''},
    {name:'Articles',route:'articles'},
    {name:'My true colors',route:'design'},
    {name:'Code Snippets',route:'code',active:true},
    {name:'Contact me',route:'articles',active:false},
    

  
  ]


  // onSearchInpunt(){

  // }


  toggleMobileSearch() {

    this.searchBannerIsOpen = !this.searchBannerIsOpen;

    let document_: any = document

    console.log(document_.body);


    if (this.searchBannerIsOpen === true) {
      this.menuBannerIsOpen = false;
      document_.body.classList.add('screen-menu-mode');

    } else {
      document_.body.classList.remove('screen-menu-mode');
    }




  }




  toggleMenuBanner() {

    this.menuBannerIsOpen = !this.menuBannerIsOpen;

    let document_: any = document

    console.log(document_.body);


    if (this.menuBannerIsOpen === true) {
      this.searchBannerIsOpen = false

     
      
      document_.body.classList.add('mobile-menu-mode');

    } else {
      document_.body.classList.remove('mobile-menu-mode');
    }




  }



  onSearchInputChange(viewport: any) {


    console.log(viewport);



    if (viewport === 'desktop') {

      // if it's on desktop vp open or close the search banner iccordance with the string length
      this.searchBannerIsOpen = this.searchBarDesktop.nativeElement.value.length > 0 ? true : false;

      this.searchInput.next(this.searchBarDesktop.nativeElement.value);
    }

    if (viewport === 'mobile') {
      // if it's on a mobile viewport make the body max 100vh

      // let document_:any =document

      // console.log(document_.body);

      // document_.addClass('mobile-menu-mode');


      this.searchInput.next(this.searchBarMobile.nativeElement.value);


    }


    // console.log(this.searchBar.nativeElement.value, 'search bar value');



    // this.searchInput.next(this.searchBar.nativeElement.value);


    // console.log(this.searchInput.getValue());



  }



  ngOnDestroy() {
    this.searchInput.complete();
  }



  onSearch(value: any) {


     this.searchIsLoading = true;


    // this.searchBannerIsOpen = this.searchBar.nativeElement.value.length >0 ? true:false;



    let payload = {
      query: value
    }

    const filteredArticles = this.http.post(`${environment.apiUrl_backend}get_articles`, payload);
    filteredArticles.subscribe(res => {
      this.searchIsLoading = false;
      this.searchResults = res;
    })


  }

}
