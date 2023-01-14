type ClassNameMap<ClassKey extends string> = Record<ClassKey, string>;

export type StyleClasses<ClassKey extends string> = Partial<
  ClassNameMap<ClassKey>
>;
