import { Maybe } from './maybe';

export type NonPartialType =
    | Array<any>
    | Date
    | RegExp
    | Function
    | string
    | number
    | boolean
    | null
    | undefined;

export type PartialMaybe<T> = {
    [P in keyof T]: Maybe<T[P]>;
};

export type PartialDeep<T> = {
    [P in keyof T]?: T[P] extends NonPartialType ? T[P] : PartialDeep<T[P]>;
};

export type PartialMaybeDeep<T> = {
    [P in keyof T]: T[P] extends NonPartialType ? T[P] : PartialMaybeDeep<T[P]>;
};
