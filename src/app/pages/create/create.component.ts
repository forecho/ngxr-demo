import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {PetTag} from '../../core/pet-tag.model';
import {Store} from '@ngrx/store';
import {ADD_TEXT, COMPLETE, SELECT_FONT, SELECT_SHAPE, TOGGLE_CLIP, TOGGLE_GEMS} from '../../core/pet-tag.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;
  done = false;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store;
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state['state'];
      this.done = !!(this.petTag.shape && this.petTag.text);
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  selectShapeHandler(shape: string) {
    console.log(SELECT_SHAPE);
    this.store.dispatch({
      type: SELECT_SHAPE,
      payload: shape
    });
    console.log(this.petTag);
  }

  selectFontHandler(fontType: string) {
    this.store.dispatch({
      type: SELECT_FONT,
      payload: fontType
    });
  }

  addTextHandler(text: string) {
    this.store.dispatch({
      type: ADD_TEXT,
      payload: text
    });
  }

  toggleClipHandler() {
    this.store.dispatch({
      type: TOGGLE_CLIP
    });
  }

  toggleGemsHandler() {
    this.store.dispatch({
      type: TOGGLE_GEMS
    });
  }

  submit() {
    this.store.dispatch({
      type: COMPLETE,
      payload: true
    });
  }

}
