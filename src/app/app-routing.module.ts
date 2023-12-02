import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleComponent } from './components/article/article.component';


const routes: Routes = [
  { path: 'docs', component: DocumentationComponent },
  { path: '', component: HomepageComponent }
,
{ path: 'new-article', component: ArticleFormComponent },
{ path: 'article/:id', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
