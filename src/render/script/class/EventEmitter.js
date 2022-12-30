class EventEmitter {
  constructor() {
    this.callbacks = {};
  }

  send(event, data) {
    const { callbacks, } = this;
    callbacks[event].forEach((cb) => cb(data));
  }

  on(event, callback) {
    const { callbacks, } = this;
    if (callbacks[event] === undefined) {
      callbacks[event] = [];
    }
    callbacks[event].push(callback);
  }
}

export default EventEmitter;
