type MappedType<T> = {
  _isMapped?: true; // Marker for mapped type
} & {
  [K in keyof T]: T[K];
};

// Regular object
type RegularObject = {
  a: string;
  b: number;
};

// Mapped type
type MyMappedType = MappedType<RegularObject>;

// Utility to check the marker
type IsMapped<T> = T extends { _isMapped?: true } ? true : false;

type Check1 = IsMapped<MyMappedType>; // true
type Check2 = IsMapped<RegularObject>; // false

console.log("Hello, TypeScript!");
