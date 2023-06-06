import {configureStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

import {sessionService} from 'redux-react-session';
