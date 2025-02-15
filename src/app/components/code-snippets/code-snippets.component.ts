import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-code-snippets',
    templateUrl: './code-snippets.component.html',
    styleUrl: './code-snippets.component.scss',
    standalone:false
})
export class CodeSnippetsComponent {

  @ViewChild('iframe') iframe: any ;


  constructor(private http:HttpClient){
    
  }


  ngOnInit(){

  //   this.http.get('https://gist.github.com/7warte/a286cd431ee46d911c42d65be5bcca29.js')
  //   // .subscribe({
  //   //   next: (res)=>{
  //   //     console.log(res);
        
  //   //   }
  //   // })

  }


  ngAfterViewInit(){
    this.loadScript(this.codeGists[0])
  }



  codeGists:any=[
  {title:'Test', url:'https://gist.github.com/7warte/a286cd431ee46d911c42d65be5bcca29.js'}
  ]





  loadScript(gist:any){



    console.log(this.iframe);
    

    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    console.log(doc);
    
    const content = `
        <html>
        <head>
          <base target="_parent">
        </head>
        <body>
        <script type="text/javascript" src="${this.codeGists[0].url}"></script>
        </body>
      </html>
    `;
    doc.open();
    doc.write(content);
    doc.close();
    



  }

 



}
