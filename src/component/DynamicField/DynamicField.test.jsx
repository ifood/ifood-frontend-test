import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Select } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import DynamicField from './DynamicField';

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
  id: 'locale',
  name: 'Locale',
  values: [
    {
      value: 'pt_BR',
      name: 'pt_BR',
    },
    {
      value: 'en_US',
      name: 'en_US',
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

describe('<DynamicField />', () => {
  it('snapshot', () => {
    const dynamicField = mount(<DynamicField metadata={numberMetadata} />);
    jestExpect(toJson(dynamicField)).toMatchSnapshot();
  });

  it('should return null if metadata is not provided', () => {
    const dynamicField = shallow(<DynamicField />);
    expect(dynamicField.type()).to.be.null;
  });

  describe('supported field types', () => {
    it('Select', () => {
      const dynamicField = shallow(<DynamicField metadata={selectMetadata} />);
      expect(dynamicField.find(Select)).to.have.lengthOf(1);
    });

    it('Number', () => {
      const dynamicField = shallow(<DynamicField metadata={numberMetadata} />);
      expect(dynamicField.find('input[type="number"]')).to.have.lengthOf(1);
    });

    it('DateTime', () => {
      const dynamicField = shallow(
        <DynamicField metadata={dateTimeMetadata} />
      );
      expect(dynamicField.find(DatePicker)).to.have.lengthOf(1);
    });

    it('Not supported type should return null', () => {
      const dynamicField = shallow(
        <DynamicField metadata={notSupportedMetadata} />
      );
      expect(dynamicField.type()).to.be.null;
    });
  });
});
