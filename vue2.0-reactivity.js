// import { reactive, effect, ref, computed, track } from "@vue/reactivity";

const originProto = Array.prototype;
const reactiveArrayProto = Object.create(originProto);
["push", "shift", "unshift", "pop", "splice", "reverse", "sort"].forEach(
  method => {
    reactiveArrayProto[method] = function() {
      update();
      originProto[method].apply(this, Array.from(arguments));
    };
  }
);
function track(target, key) {
  if (!target.deeps) {
    target.deeps = {};
  }
  if (!target.deeps[key]) {
    target.deeps[key] = [];
  }
  target.deeps[key].push(watchCallback);
}
function trigger(target, key, newValue, value) {
  const watchers = target.deeps[key];
  watchers.forEach(watcher => watcher(newValue, value));
}
// 数据劫持
function observer(target) {
  if (typeof target !== "object" || target == null) {
    return target;
  }
  if (Array.isArray(target)) {
    Object.setPrototypeOf(target, reactiveArrayProto);
  }
  //   对target的重新定义getter和setter
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
// 定义响应式
function defineReactive(target, key, value) {
  observer(value);
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: true,
    get() {
      track(target, key);
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        observer(newValue);
        trigger(target, key, newValue, value);
        value = newValue;
      }
    }
  });
}
let watchCallback;
function watch(key, callback) {
  watchCallback = callback;
  const oldValue = data[key];
}
const data = {
  name: "yy",
  age: 30,
  list: [1, 2, 3, 4],
  son: { name: "xiatian", age: 2 }
};

observer(data);

watch("age", (val, oldVal) => {
  console.log(val, oldVal);
});
data.age = 90;
