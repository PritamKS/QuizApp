export function getQuestionList() {
  return {
    type: 'getQuestionList',
  };
}

export function getQuestionListDisplayDataSuccess(success, data) {
  return {
    type: 'getQuestionListDisplayDataSuccess',
    success,
    data,
  };
}

export function getQuestionListDisplayDataError(error) {
  return {
    type: 'getQuestionListDisplayDataError',
    error,
  };
}
