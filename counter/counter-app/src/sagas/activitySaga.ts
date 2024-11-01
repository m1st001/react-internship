import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchActivityStart,
  fetchActivitySuccess,
  fetchActivityFailure,
  Activity,
} from "../store/activitySlice";

interface AxiosResponse {
  data: Activity[];
}

function* fetchActivity() {
  try {
    const response: AxiosResponse = yield call(
      axios.get,
      "https://dummy-json.mock.beeceptor.com/continents",
    );
    yield put(fetchActivitySuccess(response.data));
  } catch (error: any) {
    yield put(fetchActivityFailure(error.message));
  }
}

export function* watchFetchActivity() {
  yield takeEvery(fetchActivityStart.type, fetchActivity);
}
