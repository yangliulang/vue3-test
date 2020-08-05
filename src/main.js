// import "../vue2.0-reactivity";
import MyPromise from "../promiseA.js";

const promise = new MyPromise((resolve, reject) => {
  resolve("hello");
});
const promise2 = promise.then(data => {
  return new MyPromise((resolve, reject) => {
    reject("hello");
  });
});

promise2.then(
  ret => {
    console.log("success", ret);
  },
  err => {
    console.log("--error", err);
  }
);
