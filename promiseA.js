const PENDING = "PENDING"; //等待态
const FULFILLED = "FULFILLED"; //成功态
const REJECTED = "REJECTED"; //失败态
function resolvePromise(promise2, x, resolve, reject) {
  //   console.log(promise2 === x, resolve, reject);
  // 如果promise2和x相等 说明返回的是自己本身，就抛出异常
  if (promise2 === x) {
    return reject(new TypeError("自己不能等待自己"));
  }
  // 如果x是一个函数或者是一个thenable对象
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    // 去then的时候，有可能会报错
    try {
      const then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          y => {
            resolve(y);
          },
          r => {
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
}
class Promise {
  constructor(executor) {
    //   默认状态是等待态
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 多次then的时候存储成功回调
    this.onResolvedCallbacks = [];
    // 多次then的时候存储失败回调
    this.onRejectedCallbacks = [];
    // 执行成功的函数
    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(cb => cb());
      }
    };
    // 执行失败的函数
    const reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(cb => cb());
      }
    };
    // 当执行函数的时候出错
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRjected) {
    const promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRjected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRjected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });

    return promise2;
  }
}

export default Promise;
