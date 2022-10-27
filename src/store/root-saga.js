import { all, call } from "redux-saga/effects";

import { categoriesSage } from "./categories/category.saga";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
  yield all([call(categoriesSage), call(userSagas)]);
}
