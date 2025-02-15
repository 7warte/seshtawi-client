import { Component } from '@angular/core';

@Component({
    selector: 'app-code-snippets',
    templateUrl: './code-snippets.component.html',
    styleUrl: './code-snippets.component.scss',
    standalone:false
})
export class CodeSnippetsComponent {


  ngOnInit(){
    this.loadScript(this.codeGists[0])
  }



  codeGists:any=[
  {title:'Test', url:'https://gist.github.com/7warte/a286cd431ee46d911c42d65be5bcca29.js'}
  ]


  loadScript(gist:any){

    let body = document.body;
    console.log(body);

    let script = document.createElement('script');
    script.innerHTML='';
    script.src=gist.url
    script.async =true;
    script.defer=true;

    console.log(script);
    

    body.appendChild(script)
    



  }

 



}
