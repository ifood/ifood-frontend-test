import EventEmitter from 'events';

class Store extends EventEmitter {
  constructor() {
    super();
    this._spotifyStatus = 'DISCONNECTED';
    this._filterStatus = false;
    this._me = null;
  }

  get spotifyStatus() {
    return this._spotifyStatus;
  }

  set spotifyStatus(value) {
    this._spotifyStatus = value;
    this.emit('change-spotify-status', value);
    this._emitAll();
  }

  get filterStatus() {
    return this._filterStatus;
  }

  set filterStatus(value) {
    this._filterStatus = value;
    this.emit('change-filter-status', value);
    this._emitAll();
  }

  get me() {
    return this._me;
  }

  set me(value) {
    this._me = value;
    this.emit('change-me', value);
    this._emitAll();
  }

  getState() {
    return {
      spotifyStatus: this.spotifyStatus,
      filterStatus: this.filterStatus,
      me: this.me,
    };
  }

  _emitAll() {
    this.emit('change', this.getState());
  }
}

export default new Store();
