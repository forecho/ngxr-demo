import {initialTag, PetTag} from './pet-tag.model';
import {Action} from '@ngrx/store';
import {ADD_TEXT, COMPLETE, RESET, SELECT_FONT, SELECT_SHAPE, TOGGLE_CLIP, TOGGLE_GEMS} from './pet-tag.actions';

export function petTagReducer(state: PetTag = initialTag, action: Action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case SELECT_SHAPE:
      return Object.assign({}, state, {
        shape: action['payload']
      });
    case SELECT_FONT:
      return Object.assign({}, state, {
        font: action['payload']
      });
    case ADD_TEXT:
      return Object.assign({}, state, {
        text: action['payload']
      });
    case TOGGLE_CLIP:
      return Object.assign({}, state, {
        clip: !state.clip
      });
    case TOGGLE_GEMS:
      return Object.assign({}, state, {
        gems: !state.gems
      });
    case COMPLETE:
      return Object.assign({}, state, {
        complete: action['payload']
      });
    case RESET:
      return Object.assign({}, state, initialTag);
    default:
      return state;
  }
}
