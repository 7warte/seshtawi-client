import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
  standalone:false
})
export class PhotosComponent {

  constructor(  private http:HttpClient){

  }

  currentBackground:string = '';
  allPhotos:any =[];
  layout:any= 'compact';
  preview:any =null;

   backgrounds:string[] = [
    'https://pub-5a93bfba08b2473cac01f5c228f371df.r2.dev/seshtawi-blog/test.jpg',
    'https://pub-5a93bfba08b2473cac01f5c228f371df.r2.dev/seshtawi-blog/background-my-photos.jpg'
  ]


  ngOnInit(){
    this.currentBackground = this.backgrounds[1];
    console.log(this.currentBackground);
    this.fetchAllPhotos()

  }

  onPhotoClick(photo:any){
    console.log(photo);

    this.preview = photo;


  }

  closeViewer(){
    this.preview =null;
  }


  fetchAllPhotos(){
    const getPhotos = this.http.get(`${environment.apiUrl_backend}fetch_all_photos`);

    getPhotos.subscribe({  next: res => {

      return this.allPhotos = res;
    },
      error: err => console.error('Observer got an error: ' +  JSON.stringify(err)),
      complete: () => {console.log('Observer got a complete notification')}}   )
  }


  toggleView(view:string){

    this.layout= view;


  }


}
