import { stripeObjects } from './utils';

it('should return an empty array if there are no objects', () => {
  const result = stripeObjects([], [], []);

  expect(result).toHaveLength(0);
});

it('should return an empty array if there are no properties defined', () => {
  const objects = [{ a: 10 }, { a: 20 }];
  const props = [];
  const headers = [];

  const result = stripeObjects(objects, props, headers);

  expect(result).toHaveLength(0);
});

it('should return an array sized the same as the properties input', () => {
  const objects = [{ a: 10, b: '2' }, { a: 20, b: 'b2' }];
  const props = ['a'];

  const result = stripeObjects(objects, props, []);

  expect(result).toHaveLength(props.length);
});

it('should return undefined for properties that are not found', () => {
  const objects = [{ a: 10 }, { a: 20 }];
  const props = ['b'];
  const expected = [undefined, undefined, undefined];

  const result = stripeObjects(objects, props, []);

  expect(result).toHaveLength(1);
  expect(result[0]).toEqual(expected);
});

it('should add the row headers as the initial row item', () => {
  const objects = [{ a: 1, b: 1 }, { a: 1, b: 1}];
  const props = ['a', 'b'];
  const headers = ['Header for A', 'Headers for B'];

  const result = stripeObjects(objects, props, headers);

  expect(result[0][0]).toEqual(headers[0]);
  expect(result[1][0]).toEqual(headers[1]);
});

it('should extract the named properties from the objects and stripe them into rows', () => {
  const objects = [{ a: 10, b: 'b1' }, { a: 20, b: 'b2' }];
  const props = ['a', 'b'];
  const headers = ['a', 'b'];
  const expected = [
    [headers[0], objects[0].a, objects[1].a],
    [headers[1], objects[0].b, objects[1].b]
  ];

  const result = stripeObjects(objects, props, headers);

  expect(result).toEqual(expected);
});
