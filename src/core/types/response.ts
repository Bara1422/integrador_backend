type Success<T> = { success: true; result: T };
type Failure = { success: false; err: Error };

export type Result<T> = Success<T> | Failure;
