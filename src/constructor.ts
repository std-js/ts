/**
 * Constructor is a function that can be used with the `new` operator to create new R type object.
 */
export type Constructor<R> = new (...args: any[]) => R;

/**
 * Constructor1 is a function with one argument that can be used with the `new` operator to create new R type object.
 */
export type Constructor1<R, T1> = new (arg1: T1) => R;

/**
 * Constructor2 is a function with two arguments that can be used with the `new` operator to create new R type object.
 */
export type Constructor2<R, T1, T2> = new (arg1: T1, arg2: T2) => R;

/**
 * Constructor3 is a function with three arguments that can be used with the `new` operator to create new R type object.
 */
export type Constructor3<R, T1, T2, T3> = new (arg1: T1, arg2: T2, arg3: T3) => R;

/**
 * Constructor4 is a function with four arguments that can be used with the `new` operator to create new R type object.
 */
export type Constructor4<R, T1, T2, T3, T4> = new (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => R;

/**
 * Constructor5 is a function with five arguments that can be used with the `new` operator to create new R type object.
 */
export type Constructor5<R, T1, T2, T3, T4, T5> = new (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => R;

/**
 * Constructor6 is a function with six arguments that can be used with the `new` operator to create new R type object.
 */
export type Constructor6<R, T1, T2, T3, T4, T5, T6> = new (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6,
) => R;
