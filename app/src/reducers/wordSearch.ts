import * as wordSearch from '../actions/wordSearch';
import { ActionType, getType } from 'typesafe-actions';
import { State } from '../containers/wordSearch';

const defaultState: State = {
  wordSearchText: ""
}

export type WordSearchAction = ActionType<typeof wordSearch>;

export default (state = defaultState, action: WordSearchAction): State => {
  switch (action.type) {
    case getType(wordSearch.setSearchText):
      return {
        ...state,
        wordSearchText: state.wordSearchText
      };
    default:
      return state;
  }
}
