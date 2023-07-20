export type IncludeType<Source, Condition> = Pick<
    Source,
    { [K in keyof Source]: Source[K] extends Condition ? K : never }[keyof Source]
>;

export type ExcludeType<Source, Condition> = Pick<
    Source,
    { [K in keyof Source]: Source[K] extends Condition ? never : K }[keyof Source]
>;
