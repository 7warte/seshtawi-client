import { Injectable, ViewChild, NgZone } from '@angular/core';
import * as THREE from 'three'

@Injectable({
  providedIn: 'root'
})
export class BackgroundAnimationsService {
  private canvas: HTMLCanvasElement | any;
  private renderer!: any
  private camera: THREE.PerspectiveCamera | undefined;
  private scene: THREE.Scene | undefined;
  private light!: THREE.AmbientLight;

  private cube_main: THREE.Mesh | undefined;

  private sphere_main:THREE.Mesh |undefined

  private cube_react: THREE.Mesh | undefined;
  private cube_angular: THREE.Mesh | undefined;
  private cube_node: THREE.Mesh | undefined;
  private cube_js: THREE.Mesh | undefined;
  private cube_docker: THREE.Mesh | undefined;
  private cube_figma: THREE.Mesh | undefined;

  private cube_html5: THREE.Mesh | undefined;
  private cube_mjml: THREE.Mesh | undefined;
    private cube_azure: THREE.Mesh | undefined;
      private cube_github: THREE.Mesh | undefined;

    private cylinder: THREE.Mesh | undefined;

  private frameId: any = null;


  public constructor(private ngZone: NgZone) {
  }

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.renderer != null) {
      this.renderer.dispose();
      this.renderer = null;
      this.canvas = null;
    }
  }

  imageLoader: any = new THREE.TextureLoader()
  textureLoader:any = new THREE.TextureLoader()

  public createScene(canvas: any): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 0;

      this.camera.position.y = 0;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight(0xffffff,0.1);
    this.light.position.z = 10;
    // this.scene.add(this.light);



   const texture = this.textureLoader.load('/assets/images/pattern_1.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
  texture.repeat.set(4, 2)
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
  texture.wrapS = THREE.RepeatWrapping; // repeat horizontally (U)
  texture.wrapT = THREE.RepeatWrapping;

    })

    

const cube_angular_image: any =this.textureLoader.load('/assets/images/cube_texture_angular.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })


    const cube_figma_image: any =this.textureLoader.load('/assets/images/cube_texture_figma.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })




    const cube_react_image: any =this.textureLoader.load('/assets/images/cube_texture_react.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })







    // const cube_figma_image: any = this.imageLoader.load('/assets/images/cube_texture_figma.png');
    // const cube_javascript_image: any = this.imageLoader.load('/assets/images/cube_texture_javascript.png');
    // const cube_docker_image: any = this.imageLoader.load('/assets/images/cube_texture_docker.png');
    // const cube_node_image: any = this.imageLoader.load('/assets/images/cube_texture_nodejs.png');

    //     const cube_html5_image: any = this.imageLoader.load('/assets/images/cube_texture_html5.png');
    // const cube_mjml_image: any = this.imageLoader.load('/assets/images/cube_texture_mjml.png');
    // const cube_azure_image: any = this.imageLoader.load('/assets/images/cube_texture_azure.png');
    // const cube_github_image: any = this.imageLoader.load('/assets/images/cube_texture_github.png');


    const cube_javascript_image: any =this.textureLoader.load('/assets/images/cube_texture_javascript.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })



    const cube_docker_image: any =this.textureLoader.load('/assets/images/cube_texture_docker.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })



    const cube_node_image: any =this.textureLoader.load('/assets/images/cube_texture_nodejs.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })



    const cube_html5_image: any =this.textureLoader.load('/assets/images/cube_texture_html5.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })



    const cube_mjml_image: any =this.textureLoader.load('/assets/images/cube_texture_mjml.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })



    const cube_azure_image: any =this.textureLoader.load('/assets/images/cube_texture_azure.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })



    const cube_github_image: any =this.textureLoader.load('/assets/images/cube_texture_github.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })


    const cube_main_image: any =this.textureLoader.load('/assets/images/cube_texture_main_.png',(texture:any)=>{
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    })



    


    const sphere_main_image: any = this.imageLoader.load('/assets/images/cube_texture_main.png');
    
    // // const cube_angular_image: any = this.imageLoader.load('/assets/images/cube_texture_angular.png');
    // // const cube_react_image: any = this.imageLoader.load('/assets/images/cube_texture_react.png');
    // const cube_figma_image: any = this.imageLoader.load('/assets/images/cube_texture_figma.png');
    // const cube_javascript_image: any = this.imageLoader.load('/assets/images/cube_texture_javascript.png');
    // const cube_docker_image: any = this.imageLoader.load('/assets/images/cube_texture_docker.png');
    // const cube_node_image: any = this.imageLoader.load('/assets/images/cube_texture_nodejs.png');

    //     const cube_html5_image: any = this.imageLoader.load('/assets/images/cube_texture_html5.png');
    // const cube_mjml_image: any = this.imageLoader.load('/assets/images/cube_texture_mjml.png');
    // const cube_azure_image: any = this.imageLoader.load('/assets/images/cube_texture_azure.png');
    // const cube_github_image: any = this.imageLoader.load('/assets/images/cube_texture_github.png');

// cube_main_image.colorSpace = THREE.SRGBColorSpace;
// cube_main_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_main_image.magFilter = THREE.LinearFilter;



// sphere_main_image.colorSpace = THREE.SRGBColorSpace;
// sphere_main_image.minFilter = THREE.LinearMipmapLinearFilter;
// sphere_main_image.magFilter = THREE.LinearFilter;


// cube_angular_image.colorSpace = THREE.SRGBColorSpace;
// cube_angular_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_angular_image.magFilter = THREE.LinearFilter;


// cube_react_image.colorSpace = THREE.SRGBColorSpace;
// cube_react_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_react_image.magFilter = THREE.LinearFilter;

// cube_figma_image.colorSpace = THREE.SRGBColorSpace;
// cube_figma_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_figma_image.magFilter = THREE.LinearFilter;

// cube_javascript_image.colorSpace = THREE.SRGBColorSpace;
// cube_javascript_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_javascript_image.magFilter = THREE.LinearFilter;

// cube_docker_image.colorSpace = THREE.SRGBColorSpace;
// cube_docker_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_docker_image.magFilter = THREE.LinearFilter;

// cube_node_image.colorSpace = THREE.SRGBColorSpace;
// cube_node_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_node_image.magFilter = THREE.LinearFilter;

// cube_html5_image.colorSpace = THREE.SRGBColorSpace;cube_mjml_image
// cube_html5_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_html5_image.magFilter = THREE.LinearFilter;

// cube_mjml_image.colorSpace = THREE.SRGBColorSpace;
// cube_mjml_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_mjml_image.magFilter = THREE.LinearFilter;

// cube_github_image.colorSpace = THREE.SRGBColorSpace;
// cube_github_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_github_image.magFilter = THREE.LinearFilter;

// cube_azure_image.colorSpace = THREE.SRGBColorSpace;
// cube_azure_image.minFilter = THREE.LinearMipmapLinearFilter;
// cube_azure_image.magFilter = THREE.LinearFilter;


    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        // const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(0.3, 0.2, 0.3);
    this.scene.add(dirLight);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
        const geometry_main = new THREE.BoxGeometry(0.4, 0.4, 0.4);

//     const textureMain = new THREE.MeshStandardMaterial({
// map: cube_react_image

//      });
     
    const textureAngular = new THREE.MeshStandardMaterial({ map: cube_angular_image });
    const textureReact = new THREE.MeshStandardMaterial({ map: cube_react_image });
    const textureFigma = new THREE.MeshStandardMaterial({ map: cube_figma_image });
    const textureJavascript = new THREE.MeshStandardMaterial({ map: cube_javascript_image });
    const textureDocker = new THREE.MeshStandardMaterial({ map: cube_docker_image });
    const textureNode = new THREE.MeshStandardMaterial({ map: cube_node_image });
    const textureHTML5= new THREE.MeshStandardMaterial({ map: cube_html5_image });
    const textureMJML = new THREE.MeshStandardMaterial({ map: cube_mjml_image });
    const textureAzure = new THREE.MeshStandardMaterial({ map: cube_azure_image });
    const textureGithub = new THREE.MeshStandardMaterial({ map: cube_github_image });
    const textureMain = new THREE.MeshStandardMaterial({map:cube_main_image})


    console.log(window.innerWidth,'<--------');

    var viewMode = window.innerWidth > 1200 ? 'desktop' : 'mobile'
    


    //cube main

    const sphere_geometry = new THREE.SphereGeometry(0.25,64,32);
    const sphere_material = new THREE.MeshStandardMaterial
( {map: texture,normalMap:sphere_main_image});



    this.sphere_main = new THREE.Mesh(sphere_geometry,sphere_material)
    this.sphere_main.position.y = -0.2
    this.sphere_main.position.z =-1.6 
        // this.scene.add( this.sphere_main );




    this.cube_main = new THREE.Mesh(geometry_main, textureMain);
    this.cube_main.position.y = 0.16
    this.cube_main.position.z = -1.49 
    this.scene.add(this.cube_main);

    // cube angular                 
    this.cube_angular = new THREE.Mesh(geometry, textureAngular);
    this.cube_angular.position.y = 1.7 
    this.cube_angular.position.x = -0.8
    this.cube_angular.position.z = -4.2 
    this.scene.add(this.cube_angular);

    this.cube_react = new THREE.Mesh(geometry, textureReact);
    this.cube_react.position.y = 1
    this.cube_react.position.x = -1.21
    this.cube_react.position.z = -3.6
    this.scene.add(this.cube_react);

    this.cube_figma = new THREE.Mesh(geometry, textureFigma);
    this.cube_figma.position.y =  1.8 
    this.cube_figma.position.x =  0 
    this.cube_figma.position.z =  -3.6 
    this.scene.add(this.cube_figma);

    this.cube_js = new THREE.Mesh(geometry, textureJavascript);

    this.cube_js.position.y = 1.6
    this.cube_js.position.x =  0.9
    this.cube_js.position.z = -4 
    this.scene.add(this.cube_js);

    this.cube_docker = new THREE.Mesh(geometry, textureDocker);
    this.cube_docker.position.y =   1 
    this.cube_docker.position.x = 1.4
    this.cube_docker.position.z = -4.6 ;
    this.scene.add(this.cube_docker);

    // cube react  cube_express              

    this.cube_github = new THREE.Mesh(geometry, textureGithub);
    this.cube_github.position.y =-0.6 
    this.cube_github.position.x =  -.6
    this.cube_github.position.z = -3.3 
    this.scene.add(this.cube_github);
        this.cube_node = new THREE.Mesh(geometry, textureNode);
    this.cube_node.position.y =0.1 
    this.cube_node.position.x =  -1.2
    this.cube_node.position.z = -3.6 
    this.scene.add(this.cube_node);


    this.cube_html5 = new THREE.Mesh(geometry, textureHTML5);
    this.cube_html5.position.y =  -0.6 
    this.cube_html5.position.x =  0.2 
    this.cube_html5.position.z =  -4.2 
    this.scene.add(this.cube_html5);

    this.cube_mjml = new THREE.Mesh(geometry, textureMJML);
    this.cube_mjml.position.y = -0
    this.cube_mjml.position.x =  1.3
    this.cube_mjml.position.z = -3.6 
    this.scene.add(this.cube_mjml);

    this.cube_azure = new THREE.Mesh(geometry, textureAzure);
    this.cube_azure.position.y =   -0.6
    this.cube_azure.position.x = .8
    this.cube_azure.position.z = -3.6 ;
    this.scene.add(this.cube_azure);










  }

  private cubeMainDir = -1;
private cubeAngularDir = -1;
private cubeReactDir = -1;
private cubeFigmaDir = -1;
private cubeJsDir = -1;
private cubeDockerDir = -1;
private cubeGithubDir = -1;
private cubeNodeDir = -1;
private cubeHtml5Dir = -1;
private cubeMjmlDir = -1;
  
private cubeAzureDir = -1;
  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });
    // (this.cube_main && this.cube_angular && this.cube_docker && this.cube_figma && this.cube_js && this.cube_react && this.cube_node && this.cube_github && this.cube_html5 && this.cube_azure && this.cube_mjml) 
    if (this.sphere_main &&  this.cube_azure && this.cube_html5
       && this.cube_angular && this.cube_react && this.cube_figma && this.cube_js && this.cube_docker && this.cube_github && this.cube_node && this.cube_mjml && this.cube_main) {

// console.log(this.cube_main.rotation.y);


if (this.cube_main.rotation.y <= -0.4) {
  this.cubeMainDir = 1;
}
if (this.cube_main.rotation.y >= 0.4) {
  this.cubeMainDir = -1;
}
this.cube_main.rotation.y += 0.00068 * this.cubeMainDir;

// ANGULAR (rest: 1.5 -> 1.50 to 1.52)
if (this.cube_angular.position.y <= 1.50) {
  this.cubeAngularDir = 1;
}
if (this.cube_angular.position.y >= 1.52) {
  this.cubeAngularDir = -1;
}
this.cube_angular.position.y += 0.00028 * this.cubeAngularDir;


// REACT (rest: 1.0 -> 1.00 to 1.02)
if (this.cube_react.position.y <= 1.00) {
  this.cubeReactDir = 1;
}
if (this.cube_react.position.y >= 1.02) {
  this.cubeReactDir = -1;
}
this.cube_react.position.y += 0.00028 * this.cubeReactDir;


// FIGMA (rest: 1.8 -> 1.80 to 1.82)
if (this.cube_figma.position.y <= 1.80) {
  this.cubeFigmaDir = 1;
}
if (this.cube_figma.position.y >= 1.82) {
  this.cubeFigmaDir = -1;
}
this.cube_figma.position.y += 0.00028 * this.cubeFigmaDir;


// JS (rest: 1.6 -> 1.60 to 1.62)
if (this.cube_js.position.y <= 1.60) {
  this.cubeJsDir = 1;
}
if (this.cube_js.position.y >= 1.62) {
  this.cubeJsDir = -1;
}
this.cube_js.position.y += 0.00028 * this.cubeJsDir;


// DOCKER (rest: 1.0 -> 1.00 to 1.02)
if (this.cube_docker.position.y <= 1.00) {
  this.cubeDockerDir = 1;
}
if (this.cube_docker.position.y >= 1.02) {
  this.cubeDockerDir = -1;
}
this.cube_docker.position.y += 0.00028 * this.cubeDockerDir;


// GITHUB (rest: -0.6 -> -0.60 to -0.58)
if (this.cube_github.position.y <= -0.60) {
  this.cubeGithubDir = 1;
}
if (this.cube_github.position.y >= -0.58) {
  this.cubeGithubDir = -1;
}
this.cube_github.position.y += 0.00028 * this.cubeGithubDir;


// NODE (rest: 0.1 -> 0.10 to 0.12)
if (this.cube_node.position.y <= 0.10) {
  this.cubeNodeDir = 1;
}
if (this.cube_node.position.y >= 0.12) {
  this.cubeNodeDir = -1;
}
this.cube_node.position.y += 0.00028 * this.cubeNodeDir;


// HTML5 (rest: -0.6 -> -0.60 to -0.58)
if (this.cube_html5.position.y <= -0.60) {
  this.cubeHtml5Dir = 1;
}
if (this.cube_html5.position.y >= -0.58) {
  this.cubeHtml5Dir = -1;
}
this.cube_html5.position.y += 0.00028 * this.cubeHtml5Dir;


// MJML (rest: 0.0 -> 0.00 to 0.02)
if (this.cube_mjml.position.y <= 0.00) {
  this.cubeMjmlDir = 1;
}
if (this.cube_mjml.position.y >= 0.02) {
  this.cubeMjmlDir = -1;
}
this.cube_mjml.position.y += 0.00028 * this.cubeMjmlDir;


// AZURE (your original logic, unchanged)
if (this.cube_azure.position.y <= -0.60) {
  this.cubeAzureDir = 1;   // start going up
}
if (this.cube_azure.position.y >= -0.58) {
  this.cubeAzureDir = -1;  // start going down
}
this.cube_azure.position.y += 0.00028 * this.cubeAzureDir;


// if (this.cube_html5.position.y <= -0.6) {
//   this.cubeAzureDir = 1;   // start going up
// }

// if (this.cube_html5.position.y >= -0.58) {
//   this.cubeAzureDir = -1;  // start going down
// }

// this.cube_html5.position.y += 0.00028 * this.cubeAzureDir;





      this.sphere_main.rotation.y += -0.01;
      // this.cube_main.rotation.x += -0.010;
      // this.cube_main.rotation.y += 0.009;

      // //
      // // this.cube_angular.rotation.x += 0.0018;
      // this.cube_angular.rotation.y += 0.0019;
      // //
      // // this.cube_docker.rotation.x += 0.0015;
      // this.cube_docker.rotation.y += 0.0019;
      // //
      // // this.cube_figma.rotation.x += -0.0018;
      // this.cube_figma.rotation.y += 0.0019;

      // // this.cube_js.rotation.x += -0.001;
      // this.cube_js.rotation.y += 0.0019;


      // // this.cube_react.rotation.x += -0.0018;
      // this.cube_react.rotation.y += 0.0019;


      // this.cube_node.rotation.x += -0.0017;
      // this.cube_node.rotation.y += 0.0019;

            // this.cube_github.rotation.y += 0.0019;

            //      this.cube_html5.rotation.y += 0.0019;
            //      this.cube_mjml.rotation.y += 0.0019;
            //      this.cube_azure.rotation.y += 0.0019;
      


this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// r152+:
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
// r151 and earlier:
      // this.renderer.outputEncoding = THREE.sRGBEncoding;

      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.0;

      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      this.renderer.render(this.scene, this.camera);
    }



  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (this.camera) {

      this.camera.aspect = width / height;

      
      this.camera.updateProjectionMatrix();
    }

    console.log(width,'<---------');
    console.log(this.canvas.clientWidth);


    this.renderer.setSize(width, height);
  }
}
