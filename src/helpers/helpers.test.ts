import { classesFromObject } from './helpers';

test('classesFromObject', () => {
  const classNameProp = 'class1';

  const classes = {
    'test-component': true,
  }

  const className = classesFromObject(classes, classNameProp);
  expect(className).toBe('test-component class1');
});
