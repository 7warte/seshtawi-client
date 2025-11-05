
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { DesignPageComponent } from './components/design-page/design-page.component';
import { CodeSnippetsComponent } from './components/code-snippets/code-snippets.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  { path: 'docs', component: DocumentationComponent },
  { path: '', component: AboutComponent }
,
{ path: 'new-article', component: ArticleFormComponent },
{ path: 'new-photo', component: PhotoFormComponent },
{ path: 'shots', component: PhotosComponent },
{ path: 'article/:id', component: ArticleComponent },
{ path: 'articles', component: HomepageComponent },
{ path: 'design', component: DesignPageComponent },
{ path: 'code', component: CodeSnippetsComponent },
{ path: 'code', component: CodeSnippetsComponent },
{ path: 'admin', component: AdminPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{

    scrollPositionRestoration: 'enabled' ,
    onSameUrlNavigation: 'reload'

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
