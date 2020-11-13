"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.provider = exports.firestore = void 0;

var _app = _interopRequireDefault(require("@firebase/app"));

require("firebase/firestore");

require("firebase/storage");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyAIOCQwTQ_Bfk0stJdMOO2yjEpKAQls_P4",
  authDomain: "rick-and-morty-6e713.firebaseapp.com",
  databaseURL: "https://rick-and-morty-6e713.firebaseio.com",
  projectId: "rick-and-morty-6e713",
  storageBucket: "rick-and-morty-6e713.appspot.com",
  messagingSenderId: "553294052766",
  appId: "1:553294052766:web:e6cf9dabe870231f4aea8f",
  measurementId: "G-979XQYVZR6"
};

_app["default"].initializeApp(firebaseConfig);

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
exports.provider = provider;
var _default = _app["default"];
exports["default"] = _default;