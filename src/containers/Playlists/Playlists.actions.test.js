import {
  createRequestTypes,
  action,
  playlists,
  filtersMetadata,
  PLAYLISTS,
  FILTERS_METADATA,
} from './Playlists.actions';

describe('Playlists.actions', () => {
  const mocks = {};

  beforeEach(() => {
    mocks.action = {};
  });

  describe('createRequestTypes', () => {
    it('should return an object with REQUEST, SUCCESS and FAILURE keys', () => {
      const object = createRequestTypes('SOMETHING');
      expect(object).toMatchSnapshot();
    });
  });

  describe('action', () => {
    it('should return an object with type property and other properties spread ', () => {
      const newAction = action('SOMETHING', { data: 'hello' });
      expect(newAction).toMatchSnapshot();
    });
  });

  describe('playlists.request', () => {
    it('should return an action as expected', () => {
      const returnedAction = playlists.request(['1', '2']);
      expect(returnedAction).toMatchSnapshot();
    });
  });

  describe('playlists.success', () => {
    it('should return an action as expected', () => {
      const returnedAction = playlists.request(['1', '2']);
      expect(returnedAction).toMatchSnapshot();
    });
  });

  describe('playlists.failure', () => {
    it('should return an action as expected', () => {
      const returnedAction = playlists.request('error');
      expect(returnedAction).toMatchSnapshot();
    });
  });

  describe('filtersMetadata.request', () => {
    it('should return an action as expected', () => {
      const returnedAction = playlists.request();
      expect(returnedAction).toMatchSnapshot();
    });
  });

  describe('filtersMetadata.success', () => {
    it('should return an action as expected', () => {
      const returnedAction = playlists.request(['1', '2']);
      expect(returnedAction).toMatchSnapshot();
    });
  });

  describe('filtersMetadata.failure', () => {
    it('should return an action as expected', () => {
      const returnedAction = playlists.request('error');
      expect(returnedAction).toMatchSnapshot();
    });
  });
});
