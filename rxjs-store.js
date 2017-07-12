var createStore = function(name, reducer, initialState) {
  var storeName = 'store:'+ name

  var stream = Rx.Observable
    .fromEvent(document, storeName)
    .scan(function(state, event) {
      return reducer(state, event.detail)
    }, initialState)

  var subscribe = function(callback) {
    stream.subscribeOnNext(callback)
  }

  var dispatch = function(action) {
    document.dispatchEvent(new CustomEvent(storeName, { detail: action }))
  }

  return {
    stream: stream,
    subscribe: subscribe,
    dispatch: dispatch
  }
}
