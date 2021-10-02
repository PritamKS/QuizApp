import {createSelector} from 'reselect';
import {SUBCATEGORY_STATE} from './constants';

const subCategoryState = state => state.get(SUBCATEGORY_STATE);

export const selectQuestionList = () =>
  createSelector(subCategoryState, subCategory =>
    subCategory.get('subCategoryData'),
  );

export const selectLoadingStatus = () =>
  createSelector(subCategoryState, loading => loading.get('loading'));
