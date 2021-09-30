export function getSubCategory(quid) {
  return {
    type: 'getSubCategory',
    quid,
  };
}

export function getSubCategoryDisplayDataSuccess(success, data) {
  return {
    type: 'getSubCategoryDisplayDataSuccess',
    success,
    data,
  };
}

export function getSubCategoryDisplayDataError(error) {
  return {
    type: 'getSubCategoryDisplayDataError',
    error,
  };
}
