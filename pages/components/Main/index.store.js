import EventEmitter from 'events';

class Store extends EventEmitter {
  constructor() {
    super();
    this._playlists = null;
    this._filters = {};
    this._error = null;
    this._total = null;
    this._offset = 0;
    this._limit = 8;
  }

  get playlists() {
    return this._playlists;
  }

  set playlists(value) {
    this._playlists = value;
    this.emit('change-playlists', value);
    this._emitAll();
  }

  get error() {
    return this._error;
  }

  set error(value) {
    this._error = value;
    this.emit('change-error', value);
    this._emitAll();
  }

  get total() {
    return this._total;
  }

  set total(value) {
    this._total = value;
    this.emit('change-total', value);
    this._emitAll();
  }

  get filters() {
    return this._filters;
  }

  set filters(value) {
    this._filters = value;
    this.emit('change-filters', value);
    this._emitAll();
  }

  get offset() {
    return this._offset;
  }

  set offset(value) {
    this._offset = value;
    this.emit('change-offset', value);
    this._emitAll();
  }

  get limit() {
    return this._limit;
  }

  set limit(value) {
    this._limit = value;
    this.emit('change-limit', value);
    this._emitAll();
  }

  getState() {
    return {
      playlists: this.playlists,
      error: this.error,
      total: this.total,
      filters: this.filters,
      offset: this.offset,
      limit: this.limit,
    };
  }

  _emitAll() {
    this.emit('change', this.getState());
  }
}

export default new Store();
