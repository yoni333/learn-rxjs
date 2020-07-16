import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { OfFromComponent } from './components/of-from/of-from.component'
import { MapConcatComponent } from './components/map-concat/map-concat.component'
import { ConcatMapDelayComponent } from './components/of-from-delay/of-from-delay.component'
import { MergeComponent } from './components/merge/merge.component'
import {BooksShopComponent} from './components/subject/books-shop/books-shop.component'
import {AddBookComponent} from './components/subject/add-book/add-book.component'
import {BookListComponent} from './components/subject/book-list/book-list.component'
const routes: Routes = [
  { path: 'step-a-from-of', component: OfFromComponent },
  { path: 'step-b-map-concat', component: MapConcatComponent },
  { path: 'step-c-concatMap-delay', component: ConcatMapDelayComponent },
  { path: 'step-d-merge', component: MergeComponent },
  { path: 'step-e-subject', component: BooksShopComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes),FormsModule],
  declarations: [OfFromComponent
    , MapConcatComponent
    , ConcatMapDelayComponent
    , MergeComponent
    , BooksShopComponent
    , BookListComponent
    , AddBookComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
