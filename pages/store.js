import EventEmitter from 'events';

class Store extends EventEmitter {
  constructor() {
    super();
    this._spotifyStatus = 'DISCONNECTED';
  }

  get spotifyStatus() {
    return this._spotifyStatus;
  }

  set spotifyStatus(value) {
    this._spotifyStatus = value;
    this.emit('change-spotify-status', value);
    this._emitAll();
  }

  getState() {
    return {
      spotifyStatus: this.spotifyStatus,
    };
  }

  _emitAll() {
    this.emit('change', this.getState());
  }
}

export default new Store();
