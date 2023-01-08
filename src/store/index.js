import { legacy_createStore as createStore} from 'redux';
// Se importar import {createStore } from 'redux' isso dá erro createStore obsoleto

import { reducers } from "./reducers";

export const store = createStore(
	reducers,
	    window.__REDUX_DEVTOOLS_EXTENSION__ && 
	    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    );