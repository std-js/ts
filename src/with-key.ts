export type PropKey = string | number | symbol;

export type WithKey<V, K extends PropKey> = {
    [k in K]: V;
};
