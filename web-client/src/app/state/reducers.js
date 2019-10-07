import { combineReducers } from "redux-immutable";
import * as types from "./types";
import l10n from "../../../common/locales";
import themes from "../../../styles/themes";

/* State Shape
Map({
  created: Number, // timestamp
  statusCode: Number, // current HTTP status code
  appServer: String,
  apiServer: String,
  ssrApiServer: String,
  mapboxToken: null,
  locale: String,
  theme: String,
  isStarted: Boolean,
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
  isSubscribed: Boolean, // GraphQL subscriptions
  isAuthModalOpen: false,
})
*/

const createdReducer = (state = 0, action) => {
  switch (action.type) {
    case types.CREATE:
      if (typeof action.created !== "undefined") return action.created;
      break;
  }
  return state;
};

const statusCodeReducer = (state = 200, action) => {
  switch (action.type) {
    case types.CREATE:
      if (isFinite(action.statusCode) && action.statusCode >= 200)
        return action.statusCode;
      break;
    case types.SET_STATUS_CODE:
      if (isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }
  return state;
};

const appServerReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (typeof action.appServer !== "undefined") return action.appServer;
      break;
  }
  return state;
};

const apiServerReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (typeof action.apiServer !== "undefined") return action.apiServer;
      break;
  }
  return state;
};

const ssrApiServerReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (typeof action.ssrApiServer !== "undefined")
        return action.ssrApiServer;
      break;
  }
  return state;
};

const wsServerReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (typeof action.wsServer !== "undefined") return action.wsServer;
      break;
  }
  return state;
};

const mapboxTokenReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (typeof action.mapboxToken !== "undefined") return action.mapboxToken;
      break;
  }
  return state;
};

const localeReducer = (state = l10n.defaultLocale, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET_LOCALE:
      if (typeof action.locale !== "undefined") return action.locale;
      break;
  }
  return state;
};

const themeReducer = (state = themes.defaultTheme, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET_THEME:
      if (typeof action.theme !== "undefined") return action.theme;
      break;
  }
  return state;
};

const isStartedReducer = (state = false, action) => {
  switch (action.type) {
    case types.START:
      return true;
  }
  return state;
};

const isStoppedReducer = (state = false, action) => {
  switch (action.type) {
    case types.STOP:
      return true;
  }
  return state;
};

const isConnectedReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_CONNECTED:
      if (typeof action.isConnected !== "undefined") return action.isConnected;
      break;
  }
  return state;
};

const isSubscribedReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_SUBSCRIBED:
      if (typeof action.isSubscribed !== "undefined")
        return action.isSubscribed;
      break;
  }
  return state;
};

const isAuthModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_AUTH_MODAL:
      return true;
    case types.HIDE_AUTH_MODAL:
      return false;
  }
  return state;
};

const reducer = combineReducers({
  created: createdReducer,
  statusCode: statusCodeReducer,
  appServer: appServerReducer,
  apiServer: apiServerReducer,
  ssrApiServer: ssrApiServerReducer,
  wsServer: wsServerReducer,
  locale: localeReducer,
  theme: themeReducer,
  mapboxToken: mapboxTokenReducer,
  isStarted: isStartedReducer,
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer,
  isSubscribed: isSubscribedReducer,
  isAuthModalOpen: isAuthModalOpenReducer
});

export default reducer;
