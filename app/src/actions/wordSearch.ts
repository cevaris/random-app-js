import { createAction } from 'typesafe-actions';

export const setSearchText = createAction(
    'SET_SEARCH_TEXT',
    action => { return (text: string) => action(text); }
)();