/**
 * AsyncFunc is an async function type with a return value.
 */
export type AsyncFunc<R = void> = () => Promise<R>;

/**
 * AsyncFunc1 is an async function type with one argument and a return value.
 */
export type AsyncFunc1<T1, R = void> = (arg1: T1) => Promise<R>;

/**
 * AsyncFunc2 is an async function type with two arguments and a return value.
 */
export type AsyncFunc2<T1, T2, R = void> = (arg1: T1, arg2: T2) => Promise<R>;

/**
 * AsyncFunc3 is an async function type with three arguments and a return value.
 */
export type AsyncFunc3<T1, T2, T3, R = void> = (arg1: T1, arg2: T2, arg3: T3) => Promise<R>;

/**
 * AsyncFunc4 is an async function type with four arguments and a return value.
 */
export type AsyncFunc4<T1, T2, T3, T4, R = void> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<R>;

/**
 * AsyncFunc5 is an async function type with five arguments and a return value.
 */
export type AsyncFunc5<T1, T2, T3, T4, T5, R = void> = (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<R>;

/**
 * AsyncFunc6 is an async function type with six arguments and a return value.
 */
export type AsyncFunc6<T1, T2, T3, T4, T5, T6, R = void> = (
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6,
) => Promise<R>;
