import {
  SUPORTED_TYPE,
  getComponentType,
  parseObjectByMetatada,
  selectValuesMapper,
} from './FieldMetadata';

const numberMetadata = {
  id: 'limit',
  name: 'Quantidade',
  validation: {
    primitiveType: 'INTEGER',
    min: 1,
    max: 50,
  },
};

const selectMetadata = {
  id: 'cities',
  name: 'Cities',
  values: [
    {
      value: 'cascavel',
      name: 'Cascavel',
    },
    {
      value: 'new york',
      name: 'New York',
    },
  ],
};

const dateTimeMetadata = {
  id: 'timestamp',
  name: 'Data e Horário',
  validation: {
    primitiveType: 'STRING',
    entityType: 'DATE_TIME',
    pattern: 'yyyy-MM-ddTHH:mm:ss',
  },
};

const notSupportedMetadata = {
  validation: {
    primitiveType: 'SOME_NOT_SUPPORTED_THING',
  },
};

const metadata = [dateTimeMetadata, numberMetadata];
const data = {
  timestamp: new Date(1891312123423),
  limit: '10',
};
const parsedData = {
  timestamp: '2029-12-07T04:28:43.423Z',
  limit: '10',
};

describe('FieldMetadata', () => {
  describe('getComponentType', () => {
    it('Number', () => {
      const type = getComponentType(numberMetadata);
      expect(type).to.be.equal(SUPORTED_TYPE.NUMBER);
    });

    it('DateTime', () => {
      const type = getComponentType(dateTimeMetadata);
      expect(type).to.be.equal(SUPORTED_TYPE.DATE_TIME);
    });

    it('Select', () => {
      const type = getComponentType(selectMetadata);
      expect(type).to.be.equal(SUPORTED_TYPE.SELECT);
    });

    it('Not supported type shoud return null', () => {
      const type = getComponentType(notSupportedMetadata);
      expect(type).to.be.null;
    });
  });

  describe('parseObjectByMetatada', () => {
    it('Number', () => {
      const result = parseObjectByMetatada(metadata, data);
      expect(result).to.deep.equal(parsedData);
    });

    it('should return null if metadata or objct is null', () => {
      let type = parseObjectByMetatada();
      expect(type).to.be.null;

      type = parseObjectByMetatada(metadata);
      expect(type).to.be.null;

      type = parseObjectByMetatada(null, data);
      expect(type).to.be.null;
    });
  });

  describe('selectValuesMapper', () => {
    it('Number', () => {
      const result = selectValuesMapper(selectMetadata);
      const parsed = [
        { key: 'cascavel', text: 'Cascavel', value: 'cascavel' },
        { key: 'new york', text: 'New York', value: 'new york' },
      ];
      expect(result).to.deep.equal(parsed);
    });
  });
});
