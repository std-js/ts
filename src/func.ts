/**
 * Func is a function type with a return value.
 */
export type Func<R = void> = () => R;

/**
 * Func1 is a function type with one argument and a return value.
 */
export type Func1<T1, R = void> = (arg1: T1) => R;

/**
 * Func2 is a function type with two arguments and a return value.
 */
export type Func2<T1, T2, R = void> = (arg1: T1, arg2: T2) => R;

/**
 * Func3 is a function type with three arguments and a return value.
 */
export type Func3<T1, T2, T3, R = void> = (arg1: T1, arg2: T2, arg3: T3) => R;

/**
 * Func4 is a function type with four arguments and a return value.
 */
export type Func4<T1, T2, T3, T4, R = void> = (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4
) => R;

/**
 * Func5 is a function type with five arguments and a return value.
 */
export type Func5<T1, T2, T3, T4, T5, R = void> = (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5
) => R;

/**
 * Func6 is a function type with six arguments and a return value.
 */
export type Func6<T1, T2, T3, T4, T5, T6, R = void> = (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6
) => R;