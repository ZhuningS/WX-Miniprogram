var DataView = require("./_DataView.js"), Map = require("./_Map.js"), Promise = require("./_Promise.js"), Set = require("./_Set.js"), WeakMap = require("./_WeakMap.js"), baseGetTag = require("./_baseGetTag.js"), toSource = require("./_toSource.js"), mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap), getTag = baseGetTag;

(DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(e) {
    var a = baseGetTag(e), t = a == objectTag ? e.constructor : void 0, r = t ? toSource(t) : "";
    if (r) switch (r) {
      case dataViewCtorString:
        return dataViewTag;

      case mapCtorString:
        return mapTag;

      case promiseCtorString:
        return promiseTag;

      case setCtorString:
        return setTag;

      case weakMapCtorString:
        return weakMapTag;
    }
    return a;
}), module.exports = getTag;