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
  private cube_react: THREE.Mesh | undefined;
  private cube_angular: THREE.Mesh | undefined;
  private cube_node: THREE.Mesh | undefined;
  private cube_js: THREE.Mesh | undefined;
  private cube_docker: THREE.Mesh | undefined;
  private cube_figma: THREE.Mesh | undefined;

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
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);

    const cube_main_image: any = this.imageLoader.load('/assets/images/cube_texture_main.jpg');
    const cube_angular_image: any = this.imageLoader.load('/assets/images/cube_texture_angular.png');
    const cube_react_image: any = this.imageLoader.load('/assets/images/cube_texture_react.png');
    const cube_figma_image: any = this.imageLoader.load('/assets/images/cube_texture_figma.png');
    const cube_javascript_image: any = this.imageLoader.load('/assets/images/cube_texture_javascript.png');
    const cube_docker_image: any = this.imageLoader.load('/assets/images/cube_texture_docker.png');
    const cube_node_image: any = this.imageLoader.load('/assets/images/cube_texture_node.png');

cube_main_image.colorSpace = THREE.SRGBColorSpace;
cube_main_image.minFilter = THREE.LinearMipmapLinearFilter;
cube_main_image.magFilter = THREE.LinearFilter;


cube_angular_image.colorSpace = THREE.SRGBColorSpace;
cube_angular_image.minFilter = THREE.LinearMipmapLinearFilter;
cube_angular_image.magFilter = THREE.LinearFilter;


cube_react_image.colorSpace = THREE.SRGBColorSpace;
cube_react_image.minFilter = THREE.LinearMipmapLinearFilter;
cube_react_image.magFilter = THREE.LinearFilter;

cube_figma_image.colorSpace = THREE.SRGBColorSpace;
cube_figma_image.minFilter = THREE.LinearMipmapLinearFilter;
cube_figma_image.magFilter = THREE.LinearFilter;

cube_javascript_image.colorSpace = THREE.SRGBColorSpace;
cube_javascript_image.minFilter = THREE.LinearMipmapLinearFilter;
cube_javascript_image.magFilter = THREE.LinearFilter;

cube_docker_image.colorSpace = THREE.SRGBColorSpace;
cube_docker_image.minFilter = THREE.LinearMipmapLinearFilter;
cube_docker_image.magFilter = THREE.LinearFilter;

cube_node_image.colorSpace = THREE.SRGBColorSpace;
cube_node_image.minFilter = THREE.LinearMipmapLinearFilter;
cube_node_image.magFilter = THREE.LinearFilter;

    const dirLight = new THREE.DirectionalLight(0x5B6D92, 5);
    dirLight.position.set(0, 0, 3);
    this.scene.add(dirLight);
    // this.scene.add(new THREE.AmbientLight(0xffffff, 0));

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    //
    // const material = new THREE.MeshStandardMaterial({ color:'yellow'});
    const textureMain = new THREE.MeshStandardMaterial({ map: cube_main_image,


     });
    const textureAngular = new THREE.MeshStandardMaterial({ map: cube_angular_image });
    const textureReact = new THREE.MeshStandardMaterial({ map: cube_react_image });
    const textureFigma = new THREE.MeshStandardMaterial({ map: cube_figma_image });
    const textureJavascript = new THREE.MeshStandardMaterial({ map: cube_javascript_image });
    const textureDocker = new THREE.MeshStandardMaterial({ map: cube_docker_image });
    const textureNode = new THREE.MeshStandardMaterial({ map: cube_node_image });


    console.log(window.innerWidth,'<--------');

    var viewMode = window.innerWidth > 1200 ? 'desktop' : 'mobile'
    


    //cube main


    this.cube_main = new THREE.Mesh(geometry, textureMain);
    this.cube_main.position.y = viewMode ==='mobile' ? 1.9 : 1;
    this.cube_main.position.z = viewMode ==='mobile' ? 0.8 : 1.8;
    this.scene.add(this.cube_main);

    // cube angular                 
    this.cube_angular = new THREE.Mesh(geometry, textureAngular);
    this.cube_angular.position.y = viewMode ==='mobile' ? 1.5 : 2;
    this.cube_angular.position.x =  viewMode ==='mobile' ? -3 : -10.2;
    this.cube_angular.position.z = viewMode ==='mobile' ? -5 : -6.2;
    this.scene.add(this.cube_angular);

    this.cube_react = new THREE.Mesh(geometry, textureReact);
    this.cube_react.position.y = viewMode ==='mobile' ? -0.8 : 1;
    this.cube_react.position.x = viewMode ==='mobile' ? 3 : 5.2;
    this.cube_react.position.z = -6.2;
    this.scene.add(this.cube_react);

    this.cube_figma = new THREE.Mesh(geometry, textureFigma);
    this.cube_figma.position.y = viewMode ==='mobile' ? -0.4 : -2;
    this.cube_figma.position.x = viewMode ==='mobile' ? 0.3 : 8.8;
    this.cube_figma.position.z = -5.8;
    this.scene.add(this.cube_figma);

    this.cube_js = new THREE.Mesh(geometry, textureJavascript);

    this.cube_js.position.y = viewMode ==='mobile' ? -0.5 : 0;;
    this.cube_js.position.x = viewMode ==='mobile' ? -2.6 : -4.2;
    this.cube_js.position.z = -4.2;
    this.scene.add(this.cube_js);


    this.cube_docker = new THREE.Mesh(geometry, textureDocker);
    this.cube_docker.position.y = viewMode ==='mobile' ? 1.7 : -1.5;
    this.cube_docker.position.x = viewMode ==='mobile' ? 0 : -7.2;
    this.cube_docker.position.z = -4.7;
    this.scene.add(this.cube_docker);


    // cube react  cube_express              
    this.cube_node = new THREE.Mesh(geometry, textureNode);
    this.cube_node.position.y = viewMode ==='mobile' ? 1 : -1.5;
    this.cube_node.position.x = 3.2;
    this.cube_node.position.z = -5.2;
    this.scene.add(this.cube_node);



  }

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
    if (this.cube_main && this.cube_angular && this.cube_docker && this.cube_figma && this.cube_js && this.cube_react && this.cube_node) {
      this.cube_main.rotation.x += -0.00019;
      this.cube_main.rotation.y += 0.00019;

      //
      this.cube_angular.rotation.x += 0.001;
      this.cube_angular.rotation.y += 0.001;
      //
      this.cube_docker.rotation.x += 0.001;
      this.cube_docker.rotation.y += -0.001;
      //
      this.cube_figma.rotation.x += -0.001;
      this.cube_figma.rotation.y += 0.001;

      this.cube_js.rotation.x += -0.001;
      this.cube_js.rotation.y += 0.001;


      this.cube_react.rotation.x += -0.001;
      this.cube_react.rotation.y += 0.001;



      this.cube_node.rotation.x += -0.001;
      this.cube_node.rotation.y += 0.001;
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
    

    // if(this.cube_main){

    // if(width < 800 ){

   
    //       this.cube_main.position.z = 0.5;
    //   }else{
    //      this.cube_main.position.z =1.8
    //   }
    
    


    

    // }
    

    this.renderer.setSize(width, height);
  }
}
