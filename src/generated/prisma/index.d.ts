
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Guru
 * 
 */
export type Guru = $Result.DefaultSelection<Prisma.$GuruPayload>
/**
 * Model Siswa
 * 
 */
export type Siswa = $Result.DefaultSelection<Prisma.$SiswaPayload>
/**
 * Model Kelas
 * 
 */
export type Kelas = $Result.DefaultSelection<Prisma.$KelasPayload>
/**
 * Model MataPelajaran
 * 
 */
export type MataPelajaran = $Result.DefaultSelection<Prisma.$MataPelajaranPayload>
/**
 * Model JadwalPelajaran
 * 
 */
export type JadwalPelajaran = $Result.DefaultSelection<Prisma.$JadwalPelajaranPayload>
/**
 * Model AbsenHarian
 * 
 */
export type AbsenHarian = $Result.DefaultSelection<Prisma.$AbsenHarianPayload>
/**
 * Model AbsenMapel
 * 
 */
export type AbsenMapel = $Result.DefaultSelection<Prisma.$AbsenMapelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  GURU: 'GURU'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  LAKI_LAKI: 'LAKI_LAKI',
  PEREMPUAN: 'PEREMPUAN'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const StatusHarian: {
  HADIR: 'HADIR',
  SAKIT: 'SAKIT',
  IZIN: 'IZIN',
  ALFA: 'ALFA'
};

export type StatusHarian = (typeof StatusHarian)[keyof typeof StatusHarian]


export const StatusMapel: {
  HADIR: 'HADIR',
  SAKIT: 'SAKIT',
  IZIN: 'IZIN',
  ALFA: 'ALFA'
};

export type StatusMapel = (typeof StatusMapel)[keyof typeof StatusMapel]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type StatusHarian = $Enums.StatusHarian

export const StatusHarian: typeof $Enums.StatusHarian

export type StatusMapel = $Enums.StatusMapel

export const StatusMapel: typeof $Enums.StatusMapel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guru`: Exposes CRUD operations for the **Guru** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gurus
    * const gurus = await prisma.guru.findMany()
    * ```
    */
  get guru(): Prisma.GuruDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siswa`: Exposes CRUD operations for the **Siswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Siswas
    * const siswas = await prisma.siswa.findMany()
    * ```
    */
  get siswa(): Prisma.SiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas`: Exposes CRUD operations for the **Kelas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas
    * const kelas = await prisma.kelas.findMany()
    * ```
    */
  get kelas(): Prisma.KelasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mataPelajaran`: Exposes CRUD operations for the **MataPelajaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MataPelajarans
    * const mataPelajarans = await prisma.mataPelajaran.findMany()
    * ```
    */
  get mataPelajaran(): Prisma.MataPelajaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwalPelajaran`: Exposes CRUD operations for the **JadwalPelajaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JadwalPelajarans
    * const jadwalPelajarans = await prisma.jadwalPelajaran.findMany()
    * ```
    */
  get jadwalPelajaran(): Prisma.JadwalPelajaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absenHarian`: Exposes CRUD operations for the **AbsenHarian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbsenHarians
    * const absenHarians = await prisma.absenHarian.findMany()
    * ```
    */
  get absenHarian(): Prisma.AbsenHarianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absenMapel`: Exposes CRUD operations for the **AbsenMapel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbsenMapels
    * const absenMapels = await prisma.absenMapel.findMany()
    * ```
    */
  get absenMapel(): Prisma.AbsenMapelDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Guru: 'Guru',
    Siswa: 'Siswa',
    Kelas: 'Kelas',
    MataPelajaran: 'MataPelajaran',
    JadwalPelajaran: 'JadwalPelajaran',
    AbsenHarian: 'AbsenHarian',
    AbsenMapel: 'AbsenMapel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "guru" | "siswa" | "kelas" | "mataPelajaran" | "jadwalPelajaran" | "absenHarian" | "absenMapel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Guru: {
        payload: Prisma.$GuruPayload<ExtArgs>
        fields: Prisma.GuruFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuruFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuruFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          findFirst: {
            args: Prisma.GuruFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuruFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          findMany: {
            args: Prisma.GuruFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>[]
          }
          create: {
            args: Prisma.GuruCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          createMany: {
            args: Prisma.GuruCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuruCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>[]
          }
          delete: {
            args: Prisma.GuruDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          update: {
            args: Prisma.GuruUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          deleteMany: {
            args: Prisma.GuruDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuruUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuruUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>[]
          }
          upsert: {
            args: Prisma.GuruUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuruPayload>
          }
          aggregate: {
            args: Prisma.GuruAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuru>
          }
          groupBy: {
            args: Prisma.GuruGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuruGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuruCountArgs<ExtArgs>
            result: $Utils.Optional<GuruCountAggregateOutputType> | number
          }
        }
      }
      Siswa: {
        payload: Prisma.$SiswaPayload<ExtArgs>
        fields: Prisma.SiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          findFirst: {
            args: Prisma.SiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          findMany: {
            args: Prisma.SiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>[]
          }
          create: {
            args: Prisma.SiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          createMany: {
            args: Prisma.SiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>[]
          }
          delete: {
            args: Prisma.SiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          update: {
            args: Prisma.SiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          deleteMany: {
            args: Prisma.SiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>[]
          }
          upsert: {
            args: Prisma.SiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiswaPayload>
          }
          aggregate: {
            args: Prisma.SiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiswa>
          }
          groupBy: {
            args: Prisma.SiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiswaCountArgs<ExtArgs>
            result: $Utils.Optional<SiswaCountAggregateOutputType> | number
          }
        }
      }
      Kelas: {
        payload: Prisma.$KelasPayload<ExtArgs>
        fields: Prisma.KelasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KelasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KelasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findFirst: {
            args: Prisma.KelasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KelasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          findMany: {
            args: Prisma.KelasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          create: {
            args: Prisma.KelasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          createMany: {
            args: Prisma.KelasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KelasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          delete: {
            args: Prisma.KelasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          update: {
            args: Prisma.KelasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          deleteMany: {
            args: Prisma.KelasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KelasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KelasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>[]
          }
          upsert: {
            args: Prisma.KelasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KelasPayload>
          }
          aggregate: {
            args: Prisma.KelasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas>
          }
          groupBy: {
            args: Prisma.KelasGroupByArgs<ExtArgs>
            result: $Utils.Optional<KelasGroupByOutputType>[]
          }
          count: {
            args: Prisma.KelasCountArgs<ExtArgs>
            result: $Utils.Optional<KelasCountAggregateOutputType> | number
          }
        }
      }
      MataPelajaran: {
        payload: Prisma.$MataPelajaranPayload<ExtArgs>
        fields: Prisma.MataPelajaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MataPelajaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MataPelajaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          findFirst: {
            args: Prisma.MataPelajaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MataPelajaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          findMany: {
            args: Prisma.MataPelajaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>[]
          }
          create: {
            args: Prisma.MataPelajaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          createMany: {
            args: Prisma.MataPelajaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MataPelajaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>[]
          }
          delete: {
            args: Prisma.MataPelajaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          update: {
            args: Prisma.MataPelajaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          deleteMany: {
            args: Prisma.MataPelajaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MataPelajaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MataPelajaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>[]
          }
          upsert: {
            args: Prisma.MataPelajaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MataPelajaranPayload>
          }
          aggregate: {
            args: Prisma.MataPelajaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMataPelajaran>
          }
          groupBy: {
            args: Prisma.MataPelajaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<MataPelajaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.MataPelajaranCountArgs<ExtArgs>
            result: $Utils.Optional<MataPelajaranCountAggregateOutputType> | number
          }
        }
      }
      JadwalPelajaran: {
        payload: Prisma.$JadwalPelajaranPayload<ExtArgs>
        fields: Prisma.JadwalPelajaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalPelajaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalPelajaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>
          }
          findFirst: {
            args: Prisma.JadwalPelajaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalPelajaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>
          }
          findMany: {
            args: Prisma.JadwalPelajaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>[]
          }
          create: {
            args: Prisma.JadwalPelajaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>
          }
          createMany: {
            args: Prisma.JadwalPelajaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalPelajaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>[]
          }
          delete: {
            args: Prisma.JadwalPelajaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>
          }
          update: {
            args: Prisma.JadwalPelajaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>
          }
          deleteMany: {
            args: Prisma.JadwalPelajaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalPelajaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalPelajaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>[]
          }
          upsert: {
            args: Prisma.JadwalPelajaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPelajaranPayload>
          }
          aggregate: {
            args: Prisma.JadwalPelajaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwalPelajaran>
          }
          groupBy: {
            args: Prisma.JadwalPelajaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalPelajaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalPelajaranCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalPelajaranCountAggregateOutputType> | number
          }
        }
      }
      AbsenHarian: {
        payload: Prisma.$AbsenHarianPayload<ExtArgs>
        fields: Prisma.AbsenHarianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsenHarianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsenHarianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>
          }
          findFirst: {
            args: Prisma.AbsenHarianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsenHarianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>
          }
          findMany: {
            args: Prisma.AbsenHarianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>[]
          }
          create: {
            args: Prisma.AbsenHarianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>
          }
          createMany: {
            args: Prisma.AbsenHarianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsenHarianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>[]
          }
          delete: {
            args: Prisma.AbsenHarianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>
          }
          update: {
            args: Prisma.AbsenHarianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>
          }
          deleteMany: {
            args: Prisma.AbsenHarianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsenHarianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsenHarianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>[]
          }
          upsert: {
            args: Prisma.AbsenHarianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenHarianPayload>
          }
          aggregate: {
            args: Prisma.AbsenHarianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsenHarian>
          }
          groupBy: {
            args: Prisma.AbsenHarianGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsenHarianGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsenHarianCountArgs<ExtArgs>
            result: $Utils.Optional<AbsenHarianCountAggregateOutputType> | number
          }
        }
      }
      AbsenMapel: {
        payload: Prisma.$AbsenMapelPayload<ExtArgs>
        fields: Prisma.AbsenMapelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsenMapelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsenMapelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>
          }
          findFirst: {
            args: Prisma.AbsenMapelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsenMapelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>
          }
          findMany: {
            args: Prisma.AbsenMapelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>[]
          }
          create: {
            args: Prisma.AbsenMapelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>
          }
          createMany: {
            args: Prisma.AbsenMapelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsenMapelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>[]
          }
          delete: {
            args: Prisma.AbsenMapelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>
          }
          update: {
            args: Prisma.AbsenMapelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>
          }
          deleteMany: {
            args: Prisma.AbsenMapelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsenMapelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsenMapelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>[]
          }
          upsert: {
            args: Prisma.AbsenMapelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsenMapelPayload>
          }
          aggregate: {
            args: Prisma.AbsenMapelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsenMapel>
          }
          groupBy: {
            args: Prisma.AbsenMapelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsenMapelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsenMapelCountArgs<ExtArgs>
            result: $Utils.Optional<AbsenMapelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    guru?: GuruOmit
    siswa?: SiswaOmit
    kelas?: KelasOmit
    mataPelajaran?: MataPelajaranOmit
    jadwalPelajaran?: JadwalPelajaranOmit
    absenHarian?: AbsenHarianOmit
    absenMapel?: AbsenMapelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type GuruCountOutputType
   */

  export type GuruCountOutputType = {
    mengajarDiJadwal: number
  }

  export type GuruCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mengajarDiJadwal?: boolean | GuruCountOutputTypeCountMengajarDiJadwalArgs
  }

  // Custom InputTypes
  /**
   * GuruCountOutputType without action
   */
  export type GuruCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuruCountOutputType
     */
    select?: GuruCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuruCountOutputType without action
   */
  export type GuruCountOutputTypeCountMengajarDiJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalPelajaranWhereInput
  }


  /**
   * Count Type SiswaCountOutputType
   */

  export type SiswaCountOutputType = {
    absenHarian: number
    absenMapel: number
  }

  export type SiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absenHarian?: boolean | SiswaCountOutputTypeCountAbsenHarianArgs
    absenMapel?: boolean | SiswaCountOutputTypeCountAbsenMapelArgs
  }

  // Custom InputTypes
  /**
   * SiswaCountOutputType without action
   */
  export type SiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiswaCountOutputType
     */
    select?: SiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiswaCountOutputType without action
   */
  export type SiswaCountOutputTypeCountAbsenHarianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsenHarianWhereInput
  }

  /**
   * SiswaCountOutputType without action
   */
  export type SiswaCountOutputTypeCountAbsenMapelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsenMapelWhereInput
  }


  /**
   * Count Type KelasCountOutputType
   */

  export type KelasCountOutputType = {
    jadwal: number
    siswa: number
  }

  export type KelasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | KelasCountOutputTypeCountJadwalArgs
    siswa?: boolean | KelasCountOutputTypeCountSiswaArgs
  }

  // Custom InputTypes
  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KelasCountOutputType
     */
    select?: KelasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalPelajaranWhereInput
  }

  /**
   * KelasCountOutputType without action
   */
  export type KelasCountOutputTypeCountSiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiswaWhereInput
  }


  /**
   * Count Type MataPelajaranCountOutputType
   */

  export type MataPelajaranCountOutputType = {
    jadwal: number
  }

  export type MataPelajaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | MataPelajaranCountOutputTypeCountJadwalArgs
  }

  // Custom InputTypes
  /**
   * MataPelajaranCountOutputType without action
   */
  export type MataPelajaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaranCountOutputType
     */
    select?: MataPelajaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MataPelajaranCountOutputType without action
   */
  export type MataPelajaranCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalPelajaranWhereInput
  }


  /**
   * Count Type JadwalPelajaranCountOutputType
   */

  export type JadwalPelajaranCountOutputType = {
    absenMapel: number
  }

  export type JadwalPelajaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absenMapel?: boolean | JadwalPelajaranCountOutputTypeCountAbsenMapelArgs
  }

  // Custom InputTypes
  /**
   * JadwalPelajaranCountOutputType without action
   */
  export type JadwalPelajaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaranCountOutputType
     */
    select?: JadwalPelajaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JadwalPelajaranCountOutputType without action
   */
  export type JadwalPelajaranCountOutputTypeCountAbsenMapelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsenMapelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    guruProfil?: boolean | User$guruProfilArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role" | "createdAt" | "updatedAt" | "lastLogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    guruProfil?: boolean | User$guruProfilArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      guruProfil: Prisma.$GuruPayload<ExtArgs> | null
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guruProfil<T extends User$guruProfilArgs<ExtArgs> = {}>(args?: Subset<T, User$guruProfilArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.guruProfil
   */
  export type User$guruProfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    where?: GuruWhereInput
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Guru
   */

  export type AggregateGuru = {
    _count: GuruCountAggregateOutputType | null
    _min: GuruMinAggregateOutputType | null
    _max: GuruMaxAggregateOutputType | null
  }

  export type GuruMinAggregateOutputType = {
    id: string | null
    nama: string | null
    kode: string | null
    nip: string | null
    nuptk: string | null
    gender: $Enums.Gender | null
    isPiket: boolean | null
    userId: string | null
  }

  export type GuruMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    kode: string | null
    nip: string | null
    nuptk: string | null
    gender: $Enums.Gender | null
    isPiket: boolean | null
    userId: string | null
  }

  export type GuruCountAggregateOutputType = {
    id: number
    nama: number
    kode: number
    nip: number
    nuptk: number
    gender: number
    isPiket: number
    userId: number
    _all: number
  }


  export type GuruMinAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    nip?: true
    nuptk?: true
    gender?: true
    isPiket?: true
    userId?: true
  }

  export type GuruMaxAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    nip?: true
    nuptk?: true
    gender?: true
    isPiket?: true
    userId?: true
  }

  export type GuruCountAggregateInputType = {
    id?: true
    nama?: true
    kode?: true
    nip?: true
    nuptk?: true
    gender?: true
    isPiket?: true
    userId?: true
    _all?: true
  }

  export type GuruAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guru to aggregate.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gurus
    **/
    _count?: true | GuruCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuruMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuruMaxAggregateInputType
  }

  export type GetGuruAggregateType<T extends GuruAggregateArgs> = {
        [P in keyof T & keyof AggregateGuru]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuru[P]>
      : GetScalarType<T[P], AggregateGuru[P]>
  }




  export type GuruGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuruWhereInput
    orderBy?: GuruOrderByWithAggregationInput | GuruOrderByWithAggregationInput[]
    by: GuruScalarFieldEnum[] | GuruScalarFieldEnum
    having?: GuruScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuruCountAggregateInputType | true
    _min?: GuruMinAggregateInputType
    _max?: GuruMaxAggregateInputType
  }

  export type GuruGroupByOutputType = {
    id: string
    nama: string
    kode: string
    nip: string | null
    nuptk: string | null
    gender: $Enums.Gender
    isPiket: boolean
    userId: string | null
    _count: GuruCountAggregateOutputType | null
    _min: GuruMinAggregateOutputType | null
    _max: GuruMaxAggregateOutputType | null
  }

  type GetGuruGroupByPayload<T extends GuruGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuruGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuruGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuruGroupByOutputType[P]>
            : GetScalarType<T[P], GuruGroupByOutputType[P]>
        }
      >
    >


  export type GuruSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    nip?: boolean
    nuptk?: boolean
    gender?: boolean
    isPiket?: boolean
    userId?: boolean
    user?: boolean | Guru$userArgs<ExtArgs>
    mengajarDiJadwal?: boolean | Guru$mengajarDiJadwalArgs<ExtArgs>
    waliDiKelas?: boolean | Guru$waliDiKelasArgs<ExtArgs>
    _count?: boolean | GuruCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guru"]>

  export type GuruSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    nip?: boolean
    nuptk?: boolean
    gender?: boolean
    isPiket?: boolean
    userId?: boolean
    user?: boolean | Guru$userArgs<ExtArgs>
  }, ExtArgs["result"]["guru"]>

  export type GuruSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kode?: boolean
    nip?: boolean
    nuptk?: boolean
    gender?: boolean
    isPiket?: boolean
    userId?: boolean
    user?: boolean | Guru$userArgs<ExtArgs>
  }, ExtArgs["result"]["guru"]>

  export type GuruSelectScalar = {
    id?: boolean
    nama?: boolean
    kode?: boolean
    nip?: boolean
    nuptk?: boolean
    gender?: boolean
    isPiket?: boolean
    userId?: boolean
  }

  export type GuruOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kode" | "nip" | "nuptk" | "gender" | "isPiket" | "userId", ExtArgs["result"]["guru"]>
  export type GuruInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Guru$userArgs<ExtArgs>
    mengajarDiJadwal?: boolean | Guru$mengajarDiJadwalArgs<ExtArgs>
    waliDiKelas?: boolean | Guru$waliDiKelasArgs<ExtArgs>
    _count?: boolean | GuruCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuruIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Guru$userArgs<ExtArgs>
  }
  export type GuruIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Guru$userArgs<ExtArgs>
  }

  export type $GuruPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guru"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      mengajarDiJadwal: Prisma.$JadwalPelajaranPayload<ExtArgs>[]
      waliDiKelas: Prisma.$KelasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      kode: string
      nip: string | null
      nuptk: string | null
      gender: $Enums.Gender
      isPiket: boolean
      userId: string | null
    }, ExtArgs["result"]["guru"]>
    composites: {}
  }

  type GuruGetPayload<S extends boolean | null | undefined | GuruDefaultArgs> = $Result.GetResult<Prisma.$GuruPayload, S>

  type GuruCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuruFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuruCountAggregateInputType | true
    }

  export interface GuruDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guru'], meta: { name: 'Guru' } }
    /**
     * Find zero or one Guru that matches the filter.
     * @param {GuruFindUniqueArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuruFindUniqueArgs>(args: SelectSubset<T, GuruFindUniqueArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guru that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuruFindUniqueOrThrowArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuruFindUniqueOrThrowArgs>(args: SelectSubset<T, GuruFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guru that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruFindFirstArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuruFindFirstArgs>(args?: SelectSubset<T, GuruFindFirstArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guru that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruFindFirstOrThrowArgs} args - Arguments to find a Guru
     * @example
     * // Get one Guru
     * const guru = await prisma.guru.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuruFindFirstOrThrowArgs>(args?: SelectSubset<T, GuruFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gurus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gurus
     * const gurus = await prisma.guru.findMany()
     * 
     * // Get first 10 Gurus
     * const gurus = await prisma.guru.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guruWithIdOnly = await prisma.guru.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuruFindManyArgs>(args?: SelectSubset<T, GuruFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guru.
     * @param {GuruCreateArgs} args - Arguments to create a Guru.
     * @example
     * // Create one Guru
     * const Guru = await prisma.guru.create({
     *   data: {
     *     // ... data to create a Guru
     *   }
     * })
     * 
     */
    create<T extends GuruCreateArgs>(args: SelectSubset<T, GuruCreateArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gurus.
     * @param {GuruCreateManyArgs} args - Arguments to create many Gurus.
     * @example
     * // Create many Gurus
     * const guru = await prisma.guru.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuruCreateManyArgs>(args?: SelectSubset<T, GuruCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gurus and returns the data saved in the database.
     * @param {GuruCreateManyAndReturnArgs} args - Arguments to create many Gurus.
     * @example
     * // Create many Gurus
     * const guru = await prisma.guru.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gurus and only return the `id`
     * const guruWithIdOnly = await prisma.guru.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuruCreateManyAndReturnArgs>(args?: SelectSubset<T, GuruCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guru.
     * @param {GuruDeleteArgs} args - Arguments to delete one Guru.
     * @example
     * // Delete one Guru
     * const Guru = await prisma.guru.delete({
     *   where: {
     *     // ... filter to delete one Guru
     *   }
     * })
     * 
     */
    delete<T extends GuruDeleteArgs>(args: SelectSubset<T, GuruDeleteArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guru.
     * @param {GuruUpdateArgs} args - Arguments to update one Guru.
     * @example
     * // Update one Guru
     * const guru = await prisma.guru.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuruUpdateArgs>(args: SelectSubset<T, GuruUpdateArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gurus.
     * @param {GuruDeleteManyArgs} args - Arguments to filter Gurus to delete.
     * @example
     * // Delete a few Gurus
     * const { count } = await prisma.guru.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuruDeleteManyArgs>(args?: SelectSubset<T, GuruDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gurus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gurus
     * const guru = await prisma.guru.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuruUpdateManyArgs>(args: SelectSubset<T, GuruUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gurus and returns the data updated in the database.
     * @param {GuruUpdateManyAndReturnArgs} args - Arguments to update many Gurus.
     * @example
     * // Update many Gurus
     * const guru = await prisma.guru.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gurus and only return the `id`
     * const guruWithIdOnly = await prisma.guru.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuruUpdateManyAndReturnArgs>(args: SelectSubset<T, GuruUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guru.
     * @param {GuruUpsertArgs} args - Arguments to update or create a Guru.
     * @example
     * // Update or create a Guru
     * const guru = await prisma.guru.upsert({
     *   create: {
     *     // ... data to create a Guru
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guru we want to update
     *   }
     * })
     */
    upsert<T extends GuruUpsertArgs>(args: SelectSubset<T, GuruUpsertArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gurus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruCountArgs} args - Arguments to filter Gurus to count.
     * @example
     * // Count the number of Gurus
     * const count = await prisma.guru.count({
     *   where: {
     *     // ... the filter for the Gurus we want to count
     *   }
     * })
    **/
    count<T extends GuruCountArgs>(
      args?: Subset<T, GuruCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuruCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuruAggregateArgs>(args: Subset<T, GuruAggregateArgs>): Prisma.PrismaPromise<GetGuruAggregateType<T>>

    /**
     * Group by Guru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuruGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuruGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuruGroupByArgs['orderBy'] }
        : { orderBy?: GuruGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuruGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuruGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guru model
   */
  readonly fields: GuruFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guru.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuruClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Guru$userArgs<ExtArgs> = {}>(args?: Subset<T, Guru$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mengajarDiJadwal<T extends Guru$mengajarDiJadwalArgs<ExtArgs> = {}>(args?: Subset<T, Guru$mengajarDiJadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waliDiKelas<T extends Guru$waliDiKelasArgs<ExtArgs> = {}>(args?: Subset<T, Guru$waliDiKelasArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guru model
   */
  interface GuruFieldRefs {
    readonly id: FieldRef<"Guru", 'String'>
    readonly nama: FieldRef<"Guru", 'String'>
    readonly kode: FieldRef<"Guru", 'String'>
    readonly nip: FieldRef<"Guru", 'String'>
    readonly nuptk: FieldRef<"Guru", 'String'>
    readonly gender: FieldRef<"Guru", 'Gender'>
    readonly isPiket: FieldRef<"Guru", 'Boolean'>
    readonly userId: FieldRef<"Guru", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guru findUnique
   */
  export type GuruFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru findUniqueOrThrow
   */
  export type GuruFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru findFirst
   */
  export type GuruFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gurus.
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gurus.
     */
    distinct?: GuruScalarFieldEnum | GuruScalarFieldEnum[]
  }

  /**
   * Guru findFirstOrThrow
   */
  export type GuruFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Guru to fetch.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gurus.
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gurus.
     */
    distinct?: GuruScalarFieldEnum | GuruScalarFieldEnum[]
  }

  /**
   * Guru findMany
   */
  export type GuruFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter, which Gurus to fetch.
     */
    where?: GuruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gurus to fetch.
     */
    orderBy?: GuruOrderByWithRelationInput | GuruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gurus.
     */
    cursor?: GuruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gurus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gurus.
     */
    skip?: number
    distinct?: GuruScalarFieldEnum | GuruScalarFieldEnum[]
  }

  /**
   * Guru create
   */
  export type GuruCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * The data needed to create a Guru.
     */
    data: XOR<GuruCreateInput, GuruUncheckedCreateInput>
  }

  /**
   * Guru createMany
   */
  export type GuruCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gurus.
     */
    data: GuruCreateManyInput | GuruCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guru createManyAndReturn
   */
  export type GuruCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * The data used to create many Gurus.
     */
    data: GuruCreateManyInput | GuruCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guru update
   */
  export type GuruUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * The data needed to update a Guru.
     */
    data: XOR<GuruUpdateInput, GuruUncheckedUpdateInput>
    /**
     * Choose, which Guru to update.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru updateMany
   */
  export type GuruUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gurus.
     */
    data: XOR<GuruUpdateManyMutationInput, GuruUncheckedUpdateManyInput>
    /**
     * Filter which Gurus to update
     */
    where?: GuruWhereInput
    /**
     * Limit how many Gurus to update.
     */
    limit?: number
  }

  /**
   * Guru updateManyAndReturn
   */
  export type GuruUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * The data used to update Gurus.
     */
    data: XOR<GuruUpdateManyMutationInput, GuruUncheckedUpdateManyInput>
    /**
     * Filter which Gurus to update
     */
    where?: GuruWhereInput
    /**
     * Limit how many Gurus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guru upsert
   */
  export type GuruUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * The filter to search for the Guru to update in case it exists.
     */
    where: GuruWhereUniqueInput
    /**
     * In case the Guru found by the `where` argument doesn't exist, create a new Guru with this data.
     */
    create: XOR<GuruCreateInput, GuruUncheckedCreateInput>
    /**
     * In case the Guru was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuruUpdateInput, GuruUncheckedUpdateInput>
  }

  /**
   * Guru delete
   */
  export type GuruDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    /**
     * Filter which Guru to delete.
     */
    where: GuruWhereUniqueInput
  }

  /**
   * Guru deleteMany
   */
  export type GuruDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gurus to delete
     */
    where?: GuruWhereInput
    /**
     * Limit how many Gurus to delete.
     */
    limit?: number
  }

  /**
   * Guru.user
   */
  export type Guru$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Guru.mengajarDiJadwal
   */
  export type Guru$mengajarDiJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    where?: JadwalPelajaranWhereInput
    orderBy?: JadwalPelajaranOrderByWithRelationInput | JadwalPelajaranOrderByWithRelationInput[]
    cursor?: JadwalPelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalPelajaranScalarFieldEnum | JadwalPelajaranScalarFieldEnum[]
  }

  /**
   * Guru.waliDiKelas
   */
  export type Guru$waliDiKelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    where?: KelasWhereInput
  }

  /**
   * Guru without action
   */
  export type GuruDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
  }


  /**
   * Model Siswa
   */

  export type AggregateSiswa = {
    _count: SiswaCountAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  export type SiswaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    nisn: string | null
    kode: string | null
    gender: $Enums.Gender | null
    kelasId: string | null
  }

  export type SiswaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    nisn: string | null
    kode: string | null
    gender: $Enums.Gender | null
    kelasId: string | null
  }

  export type SiswaCountAggregateOutputType = {
    id: number
    nama: number
    nisn: number
    kode: number
    gender: number
    kelasId: number
    _all: number
  }


  export type SiswaMinAggregateInputType = {
    id?: true
    nama?: true
    nisn?: true
    kode?: true
    gender?: true
    kelasId?: true
  }

  export type SiswaMaxAggregateInputType = {
    id?: true
    nama?: true
    nisn?: true
    kode?: true
    gender?: true
    kelasId?: true
  }

  export type SiswaCountAggregateInputType = {
    id?: true
    nama?: true
    nisn?: true
    kode?: true
    gender?: true
    kelasId?: true
    _all?: true
  }

  export type SiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Siswa to aggregate.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Siswas
    **/
    _count?: true | SiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiswaMaxAggregateInputType
  }

  export type GetSiswaAggregateType<T extends SiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateSiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiswa[P]>
      : GetScalarType<T[P], AggregateSiswa[P]>
  }




  export type SiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiswaWhereInput
    orderBy?: SiswaOrderByWithAggregationInput | SiswaOrderByWithAggregationInput[]
    by: SiswaScalarFieldEnum[] | SiswaScalarFieldEnum
    having?: SiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiswaCountAggregateInputType | true
    _min?: SiswaMinAggregateInputType
    _max?: SiswaMaxAggregateInputType
  }

  export type SiswaGroupByOutputType = {
    id: string
    nama: string
    nisn: string
    kode: string
    gender: $Enums.Gender
    kelasId: string
    _count: SiswaCountAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  type GetSiswaGroupByPayload<T extends SiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiswaGroupByOutputType[P]>
            : GetScalarType<T[P], SiswaGroupByOutputType[P]>
        }
      >
    >


  export type SiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nisn?: boolean
    kode?: boolean
    gender?: boolean
    kelasId?: boolean
    absenHarian?: boolean | Siswa$absenHarianArgs<ExtArgs>
    absenMapel?: boolean | Siswa$absenMapelArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    _count?: boolean | SiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>

  export type SiswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nisn?: boolean
    kode?: boolean
    gender?: boolean
    kelasId?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>

  export type SiswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nisn?: boolean
    kode?: boolean
    gender?: boolean
    kelasId?: boolean
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>

  export type SiswaSelectScalar = {
    id?: boolean
    nama?: boolean
    nisn?: boolean
    kode?: boolean
    gender?: boolean
    kelasId?: boolean
  }

  export type SiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nisn" | "kode" | "gender" | "kelasId", ExtArgs["result"]["siswa"]>
  export type SiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absenHarian?: boolean | Siswa$absenHarianArgs<ExtArgs>
    absenMapel?: boolean | Siswa$absenMapelArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    _count?: boolean | SiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }
  export type SiswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
  }

  export type $SiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Siswa"
    objects: {
      absenHarian: Prisma.$AbsenHarianPayload<ExtArgs>[]
      absenMapel: Prisma.$AbsenMapelPayload<ExtArgs>[]
      kelas: Prisma.$KelasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      nisn: string
      kode: string
      gender: $Enums.Gender
      kelasId: string
    }, ExtArgs["result"]["siswa"]>
    composites: {}
  }

  type SiswaGetPayload<S extends boolean | null | undefined | SiswaDefaultArgs> = $Result.GetResult<Prisma.$SiswaPayload, S>

  type SiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiswaCountAggregateInputType | true
    }

  export interface SiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Siswa'], meta: { name: 'Siswa' } }
    /**
     * Find zero or one Siswa that matches the filter.
     * @param {SiswaFindUniqueArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiswaFindUniqueArgs>(args: SelectSubset<T, SiswaFindUniqueArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Siswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiswaFindUniqueOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, SiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindFirstArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiswaFindFirstArgs>(args?: SelectSubset<T, SiswaFindFirstArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindFirstOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, SiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Siswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Siswas
     * const siswas = await prisma.siswa.findMany()
     * 
     * // Get first 10 Siswas
     * const siswas = await prisma.siswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siswaWithIdOnly = await prisma.siswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiswaFindManyArgs>(args?: SelectSubset<T, SiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Siswa.
     * @param {SiswaCreateArgs} args - Arguments to create a Siswa.
     * @example
     * // Create one Siswa
     * const Siswa = await prisma.siswa.create({
     *   data: {
     *     // ... data to create a Siswa
     *   }
     * })
     * 
     */
    create<T extends SiswaCreateArgs>(args: SelectSubset<T, SiswaCreateArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Siswas.
     * @param {SiswaCreateManyArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiswaCreateManyArgs>(args?: SelectSubset<T, SiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Siswas and returns the data saved in the database.
     * @param {SiswaCreateManyAndReturnArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Siswas and only return the `id`
     * const siswaWithIdOnly = await prisma.siswa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiswaCreateManyAndReturnArgs>(args?: SelectSubset<T, SiswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Siswa.
     * @param {SiswaDeleteArgs} args - Arguments to delete one Siswa.
     * @example
     * // Delete one Siswa
     * const Siswa = await prisma.siswa.delete({
     *   where: {
     *     // ... filter to delete one Siswa
     *   }
     * })
     * 
     */
    delete<T extends SiswaDeleteArgs>(args: SelectSubset<T, SiswaDeleteArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Siswa.
     * @param {SiswaUpdateArgs} args - Arguments to update one Siswa.
     * @example
     * // Update one Siswa
     * const siswa = await prisma.siswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiswaUpdateArgs>(args: SelectSubset<T, SiswaUpdateArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Siswas.
     * @param {SiswaDeleteManyArgs} args - Arguments to filter Siswas to delete.
     * @example
     * // Delete a few Siswas
     * const { count } = await prisma.siswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiswaDeleteManyArgs>(args?: SelectSubset<T, SiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Siswas
     * const siswa = await prisma.siswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiswaUpdateManyArgs>(args: SelectSubset<T, SiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Siswas and returns the data updated in the database.
     * @param {SiswaUpdateManyAndReturnArgs} args - Arguments to update many Siswas.
     * @example
     * // Update many Siswas
     * const siswa = await prisma.siswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Siswas and only return the `id`
     * const siswaWithIdOnly = await prisma.siswa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiswaUpdateManyAndReturnArgs>(args: SelectSubset<T, SiswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Siswa.
     * @param {SiswaUpsertArgs} args - Arguments to update or create a Siswa.
     * @example
     * // Update or create a Siswa
     * const siswa = await prisma.siswa.upsert({
     *   create: {
     *     // ... data to create a Siswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Siswa we want to update
     *   }
     * })
     */
    upsert<T extends SiswaUpsertArgs>(args: SelectSubset<T, SiswaUpsertArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaCountArgs} args - Arguments to filter Siswas to count.
     * @example
     * // Count the number of Siswas
     * const count = await prisma.siswa.count({
     *   where: {
     *     // ... the filter for the Siswas we want to count
     *   }
     * })
    **/
    count<T extends SiswaCountArgs>(
      args?: Subset<T, SiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiswaAggregateArgs>(args: Subset<T, SiswaAggregateArgs>): Prisma.PrismaPromise<GetSiswaAggregateType<T>>

    /**
     * Group by Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiswaGroupByArgs['orderBy'] }
        : { orderBy?: SiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Siswa model
   */
  readonly fields: SiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Siswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    absenHarian<T extends Siswa$absenHarianArgs<ExtArgs> = {}>(args?: Subset<T, Siswa$absenHarianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    absenMapel<T extends Siswa$absenMapelArgs<ExtArgs> = {}>(args?: Subset<T, Siswa$absenMapelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Siswa model
   */
  interface SiswaFieldRefs {
    readonly id: FieldRef<"Siswa", 'String'>
    readonly nama: FieldRef<"Siswa", 'String'>
    readonly nisn: FieldRef<"Siswa", 'String'>
    readonly kode: FieldRef<"Siswa", 'String'>
    readonly gender: FieldRef<"Siswa", 'Gender'>
    readonly kelasId: FieldRef<"Siswa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Siswa findUnique
   */
  export type SiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa findUniqueOrThrow
   */
  export type SiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa findFirst
   */
  export type SiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa findFirstOrThrow
   */
  export type SiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswa to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa findMany
   */
  export type SiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter, which Siswas to fetch.
     */
    where?: SiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Siswas to fetch.
     */
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Siswas.
     */
    cursor?: SiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Siswas.
     */
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Siswa create
   */
  export type SiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a Siswa.
     */
    data: XOR<SiswaCreateInput, SiswaUncheckedCreateInput>
  }

  /**
   * Siswa createMany
   */
  export type SiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Siswas.
     */
    data: SiswaCreateManyInput | SiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Siswa createManyAndReturn
   */
  export type SiswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * The data used to create many Siswas.
     */
    data: SiswaCreateManyInput | SiswaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Siswa update
   */
  export type SiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a Siswa.
     */
    data: XOR<SiswaUpdateInput, SiswaUncheckedUpdateInput>
    /**
     * Choose, which Siswa to update.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa updateMany
   */
  export type SiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Siswas.
     */
    data: XOR<SiswaUpdateManyMutationInput, SiswaUncheckedUpdateManyInput>
    /**
     * Filter which Siswas to update
     */
    where?: SiswaWhereInput
    /**
     * Limit how many Siswas to update.
     */
    limit?: number
  }

  /**
   * Siswa updateManyAndReturn
   */
  export type SiswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * The data used to update Siswas.
     */
    data: XOR<SiswaUpdateManyMutationInput, SiswaUncheckedUpdateManyInput>
    /**
     * Filter which Siswas to update
     */
    where?: SiswaWhereInput
    /**
     * Limit how many Siswas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Siswa upsert
   */
  export type SiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the Siswa to update in case it exists.
     */
    where: SiswaWhereUniqueInput
    /**
     * In case the Siswa found by the `where` argument doesn't exist, create a new Siswa with this data.
     */
    create: XOR<SiswaCreateInput, SiswaUncheckedCreateInput>
    /**
     * In case the Siswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiswaUpdateInput, SiswaUncheckedUpdateInput>
  }

  /**
   * Siswa delete
   */
  export type SiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    /**
     * Filter which Siswa to delete.
     */
    where: SiswaWhereUniqueInput
  }

  /**
   * Siswa deleteMany
   */
  export type SiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Siswas to delete
     */
    where?: SiswaWhereInput
    /**
     * Limit how many Siswas to delete.
     */
    limit?: number
  }

  /**
   * Siswa.absenHarian
   */
  export type Siswa$absenHarianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    where?: AbsenHarianWhereInput
    orderBy?: AbsenHarianOrderByWithRelationInput | AbsenHarianOrderByWithRelationInput[]
    cursor?: AbsenHarianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsenHarianScalarFieldEnum | AbsenHarianScalarFieldEnum[]
  }

  /**
   * Siswa.absenMapel
   */
  export type Siswa$absenMapelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    where?: AbsenMapelWhereInput
    orderBy?: AbsenMapelOrderByWithRelationInput | AbsenMapelOrderByWithRelationInput[]
    cursor?: AbsenMapelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsenMapelScalarFieldEnum | AbsenMapelScalarFieldEnum[]
  }

  /**
   * Siswa without action
   */
  export type SiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
  }


  /**
   * Model Kelas
   */

  export type AggregateKelas = {
    _count: KelasCountAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  export type KelasMinAggregateOutputType = {
    id: string | null
    nama: string | null
    waliKelasId: string | null
  }

  export type KelasMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    waliKelasId: string | null
  }

  export type KelasCountAggregateOutputType = {
    id: number
    nama: number
    waliKelasId: number
    _all: number
  }


  export type KelasMinAggregateInputType = {
    id?: true
    nama?: true
    waliKelasId?: true
  }

  export type KelasMaxAggregateInputType = {
    id?: true
    nama?: true
    waliKelasId?: true
  }

  export type KelasCountAggregateInputType = {
    id?: true
    nama?: true
    waliKelasId?: true
    _all?: true
  }

  export type KelasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to aggregate.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelas
    **/
    _count?: true | KelasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KelasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KelasMaxAggregateInputType
  }

  export type GetKelasAggregateType<T extends KelasAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas[P]>
      : GetScalarType<T[P], AggregateKelas[P]>
  }




  export type KelasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KelasWhereInput
    orderBy?: KelasOrderByWithAggregationInput | KelasOrderByWithAggregationInput[]
    by: KelasScalarFieldEnum[] | KelasScalarFieldEnum
    having?: KelasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KelasCountAggregateInputType | true
    _min?: KelasMinAggregateInputType
    _max?: KelasMaxAggregateInputType
  }

  export type KelasGroupByOutputType = {
    id: string
    nama: string
    waliKelasId: string | null
    _count: KelasCountAggregateOutputType | null
    _min: KelasMinAggregateOutputType | null
    _max: KelasMaxAggregateOutputType | null
  }

  type GetKelasGroupByPayload<T extends KelasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KelasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KelasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KelasGroupByOutputType[P]>
            : GetScalarType<T[P], KelasGroupByOutputType[P]>
        }
      >
    >


  export type KelasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    waliKelasId?: boolean
    jadwal?: boolean | Kelas$jadwalArgs<ExtArgs>
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
    siswa?: boolean | Kelas$siswaArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    waliKelasId?: boolean
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    waliKelasId?: boolean
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }, ExtArgs["result"]["kelas"]>

  export type KelasSelectScalar = {
    id?: boolean
    nama?: boolean
    waliKelasId?: boolean
  }

  export type KelasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "waliKelasId", ExtArgs["result"]["kelas"]>
  export type KelasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | Kelas$jadwalArgs<ExtArgs>
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
    siswa?: boolean | Kelas$siswaArgs<ExtArgs>
    _count?: boolean | KelasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KelasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }
  export type KelasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waliKelas?: boolean | Kelas$waliKelasArgs<ExtArgs>
  }

  export type $KelasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas"
    objects: {
      jadwal: Prisma.$JadwalPelajaranPayload<ExtArgs>[]
      waliKelas: Prisma.$GuruPayload<ExtArgs> | null
      siswa: Prisma.$SiswaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      waliKelasId: string | null
    }, ExtArgs["result"]["kelas"]>
    composites: {}
  }

  type KelasGetPayload<S extends boolean | null | undefined | KelasDefaultArgs> = $Result.GetResult<Prisma.$KelasPayload, S>

  type KelasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KelasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KelasCountAggregateInputType | true
    }

  export interface KelasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelas'], meta: { name: 'Kelas' } }
    /**
     * Find zero or one Kelas that matches the filter.
     * @param {KelasFindUniqueArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KelasFindUniqueArgs>(args: SelectSubset<T, KelasFindUniqueArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KelasFindUniqueOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KelasFindUniqueOrThrowArgs>(args: SelectSubset<T, KelasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KelasFindFirstArgs>(args?: SelectSubset<T, KelasFindFirstArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindFirstOrThrowArgs} args - Arguments to find a Kelas
     * @example
     * // Get one Kelas
     * const kelas = await prisma.kelas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KelasFindFirstOrThrowArgs>(args?: SelectSubset<T, KelasFindFirstOrThrowArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas
     * const kelas = await prisma.kelas.findMany()
     * 
     * // Get first 10 Kelas
     * const kelas = await prisma.kelas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelasWithIdOnly = await prisma.kelas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KelasFindManyArgs>(args?: SelectSubset<T, KelasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas.
     * @param {KelasCreateArgs} args - Arguments to create a Kelas.
     * @example
     * // Create one Kelas
     * const Kelas = await prisma.kelas.create({
     *   data: {
     *     // ... data to create a Kelas
     *   }
     * })
     * 
     */
    create<T extends KelasCreateArgs>(args: SelectSubset<T, KelasCreateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas.
     * @param {KelasCreateManyArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KelasCreateManyArgs>(args?: SelectSubset<T, KelasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kelas and returns the data saved in the database.
     * @param {KelasCreateManyAndReturnArgs} args - Arguments to create many Kelas.
     * @example
     * // Create many Kelas
     * const kelas = await prisma.kelas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KelasCreateManyAndReturnArgs>(args?: SelectSubset<T, KelasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kelas.
     * @param {KelasDeleteArgs} args - Arguments to delete one Kelas.
     * @example
     * // Delete one Kelas
     * const Kelas = await prisma.kelas.delete({
     *   where: {
     *     // ... filter to delete one Kelas
     *   }
     * })
     * 
     */
    delete<T extends KelasDeleteArgs>(args: SelectSubset<T, KelasDeleteArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas.
     * @param {KelasUpdateArgs} args - Arguments to update one Kelas.
     * @example
     * // Update one Kelas
     * const kelas = await prisma.kelas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KelasUpdateArgs>(args: SelectSubset<T, KelasUpdateArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas.
     * @param {KelasDeleteManyArgs} args - Arguments to filter Kelas to delete.
     * @example
     * // Delete a few Kelas
     * const { count } = await prisma.kelas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KelasDeleteManyArgs>(args?: SelectSubset<T, KelasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KelasUpdateManyArgs>(args: SelectSubset<T, KelasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas and returns the data updated in the database.
     * @param {KelasUpdateManyAndReturnArgs} args - Arguments to update many Kelas.
     * @example
     * // Update many Kelas
     * const kelas = await prisma.kelas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kelas and only return the `id`
     * const kelasWithIdOnly = await prisma.kelas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KelasUpdateManyAndReturnArgs>(args: SelectSubset<T, KelasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kelas.
     * @param {KelasUpsertArgs} args - Arguments to update or create a Kelas.
     * @example
     * // Update or create a Kelas
     * const kelas = await prisma.kelas.upsert({
     *   create: {
     *     // ... data to create a Kelas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas we want to update
     *   }
     * })
     */
    upsert<T extends KelasUpsertArgs>(args: SelectSubset<T, KelasUpsertArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasCountArgs} args - Arguments to filter Kelas to count.
     * @example
     * // Count the number of Kelas
     * const count = await prisma.kelas.count({
     *   where: {
     *     // ... the filter for the Kelas we want to count
     *   }
     * })
    **/
    count<T extends KelasCountArgs>(
      args?: Subset<T, KelasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KelasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KelasAggregateArgs>(args: Subset<T, KelasAggregateArgs>): Prisma.PrismaPromise<GetKelasAggregateType<T>>

    /**
     * Group by Kelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KelasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KelasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KelasGroupByArgs['orderBy'] }
        : { orderBy?: KelasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KelasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kelas model
   */
  readonly fields: KelasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kelas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KelasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends Kelas$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waliKelas<T extends Kelas$waliKelasArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$waliKelasArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    siswa<T extends Kelas$siswaArgs<ExtArgs> = {}>(args?: Subset<T, Kelas$siswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kelas model
   */
  interface KelasFieldRefs {
    readonly id: FieldRef<"Kelas", 'String'>
    readonly nama: FieldRef<"Kelas", 'String'>
    readonly waliKelasId: FieldRef<"Kelas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kelas findUnique
   */
  export type KelasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findUniqueOrThrow
   */
  export type KelasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas findFirst
   */
  export type KelasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findFirstOrThrow
   */
  export type KelasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas.
     */
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas findMany
   */
  export type KelasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter, which Kelas to fetch.
     */
    where?: KelasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas to fetch.
     */
    orderBy?: KelasOrderByWithRelationInput | KelasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelas.
     */
    cursor?: KelasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas.
     */
    skip?: number
    distinct?: KelasScalarFieldEnum | KelasScalarFieldEnum[]
  }

  /**
   * Kelas create
   */
  export type KelasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelas.
     */
    data: XOR<KelasCreateInput, KelasUncheckedCreateInput>
  }

  /**
   * Kelas createMany
   */
  export type KelasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas createManyAndReturn
   */
  export type KelasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to create many Kelas.
     */
    data: KelasCreateManyInput | KelasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kelas update
   */
  export type KelasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelas.
     */
    data: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
    /**
     * Choose, which Kelas to update.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas updateMany
   */
  export type KelasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
  }

  /**
   * Kelas updateManyAndReturn
   */
  export type KelasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * The data used to update Kelas.
     */
    data: XOR<KelasUpdateManyMutationInput, KelasUncheckedUpdateManyInput>
    /**
     * Filter which Kelas to update
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kelas upsert
   */
  export type KelasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelas to update in case it exists.
     */
    where: KelasWhereUniqueInput
    /**
     * In case the Kelas found by the `where` argument doesn't exist, create a new Kelas with this data.
     */
    create: XOR<KelasCreateInput, KelasUncheckedCreateInput>
    /**
     * In case the Kelas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KelasUpdateInput, KelasUncheckedUpdateInput>
  }

  /**
   * Kelas delete
   */
  export type KelasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
    /**
     * Filter which Kelas to delete.
     */
    where: KelasWhereUniqueInput
  }

  /**
   * Kelas deleteMany
   */
  export type KelasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas to delete
     */
    where?: KelasWhereInput
    /**
     * Limit how many Kelas to delete.
     */
    limit?: number
  }

  /**
   * Kelas.jadwal
   */
  export type Kelas$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    where?: JadwalPelajaranWhereInput
    orderBy?: JadwalPelajaranOrderByWithRelationInput | JadwalPelajaranOrderByWithRelationInput[]
    cursor?: JadwalPelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalPelajaranScalarFieldEnum | JadwalPelajaranScalarFieldEnum[]
  }

  /**
   * Kelas.waliKelas
   */
  export type Kelas$waliKelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guru
     */
    select?: GuruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guru
     */
    omit?: GuruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuruInclude<ExtArgs> | null
    where?: GuruWhereInput
  }

  /**
   * Kelas.siswa
   */
  export type Kelas$siswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Siswa
     */
    select?: SiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Siswa
     */
    omit?: SiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiswaInclude<ExtArgs> | null
    where?: SiswaWhereInput
    orderBy?: SiswaOrderByWithRelationInput | SiswaOrderByWithRelationInput[]
    cursor?: SiswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * Kelas without action
   */
  export type KelasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas
     */
    select?: KelasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas
     */
    omit?: KelasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KelasInclude<ExtArgs> | null
  }


  /**
   * Model MataPelajaran
   */

  export type AggregateMataPelajaran = {
    _count: MataPelajaranCountAggregateOutputType | null
    _min: MataPelajaranMinAggregateOutputType | null
    _max: MataPelajaranMaxAggregateOutputType | null
  }

  export type MataPelajaranMinAggregateOutputType = {
    id: string | null
    kode: string | null
    nama: string | null
  }

  export type MataPelajaranMaxAggregateOutputType = {
    id: string | null
    kode: string | null
    nama: string | null
  }

  export type MataPelajaranCountAggregateOutputType = {
    id: number
    kode: number
    nama: number
    _all: number
  }


  export type MataPelajaranMinAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
  }

  export type MataPelajaranMaxAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
  }

  export type MataPelajaranCountAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    _all?: true
  }

  export type MataPelajaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MataPelajaran to aggregate.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MataPelajarans
    **/
    _count?: true | MataPelajaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MataPelajaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MataPelajaranMaxAggregateInputType
  }

  export type GetMataPelajaranAggregateType<T extends MataPelajaranAggregateArgs> = {
        [P in keyof T & keyof AggregateMataPelajaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMataPelajaran[P]>
      : GetScalarType<T[P], AggregateMataPelajaran[P]>
  }




  export type MataPelajaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MataPelajaranWhereInput
    orderBy?: MataPelajaranOrderByWithAggregationInput | MataPelajaranOrderByWithAggregationInput[]
    by: MataPelajaranScalarFieldEnum[] | MataPelajaranScalarFieldEnum
    having?: MataPelajaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MataPelajaranCountAggregateInputType | true
    _min?: MataPelajaranMinAggregateInputType
    _max?: MataPelajaranMaxAggregateInputType
  }

  export type MataPelajaranGroupByOutputType = {
    id: string
    kode: string
    nama: string
    _count: MataPelajaranCountAggregateOutputType | null
    _min: MataPelajaranMinAggregateOutputType | null
    _max: MataPelajaranMaxAggregateOutputType | null
  }

  type GetMataPelajaranGroupByPayload<T extends MataPelajaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MataPelajaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MataPelajaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MataPelajaranGroupByOutputType[P]>
            : GetScalarType<T[P], MataPelajaranGroupByOutputType[P]>
        }
      >
    >


  export type MataPelajaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    jadwal?: boolean | MataPelajaran$jadwalArgs<ExtArgs>
    _count?: boolean | MataPelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mataPelajaran"]>

  export type MataPelajaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
  }, ExtArgs["result"]["mataPelajaran"]>

  export type MataPelajaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
  }, ExtArgs["result"]["mataPelajaran"]>

  export type MataPelajaranSelectScalar = {
    id?: boolean
    kode?: boolean
    nama?: boolean
  }

  export type MataPelajaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode" | "nama", ExtArgs["result"]["mataPelajaran"]>
  export type MataPelajaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | MataPelajaran$jadwalArgs<ExtArgs>
    _count?: boolean | MataPelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MataPelajaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MataPelajaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MataPelajaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MataPelajaran"
    objects: {
      jadwal: Prisma.$JadwalPelajaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kode: string
      nama: string
    }, ExtArgs["result"]["mataPelajaran"]>
    composites: {}
  }

  type MataPelajaranGetPayload<S extends boolean | null | undefined | MataPelajaranDefaultArgs> = $Result.GetResult<Prisma.$MataPelajaranPayload, S>

  type MataPelajaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MataPelajaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MataPelajaranCountAggregateInputType | true
    }

  export interface MataPelajaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MataPelajaran'], meta: { name: 'MataPelajaran' } }
    /**
     * Find zero or one MataPelajaran that matches the filter.
     * @param {MataPelajaranFindUniqueArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MataPelajaranFindUniqueArgs>(args: SelectSubset<T, MataPelajaranFindUniqueArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MataPelajaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MataPelajaranFindUniqueOrThrowArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MataPelajaranFindUniqueOrThrowArgs>(args: SelectSubset<T, MataPelajaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MataPelajaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranFindFirstArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MataPelajaranFindFirstArgs>(args?: SelectSubset<T, MataPelajaranFindFirstArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MataPelajaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranFindFirstOrThrowArgs} args - Arguments to find a MataPelajaran
     * @example
     * // Get one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MataPelajaranFindFirstOrThrowArgs>(args?: SelectSubset<T, MataPelajaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MataPelajarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MataPelajarans
     * const mataPelajarans = await prisma.mataPelajaran.findMany()
     * 
     * // Get first 10 MataPelajarans
     * const mataPelajarans = await prisma.mataPelajaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mataPelajaranWithIdOnly = await prisma.mataPelajaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MataPelajaranFindManyArgs>(args?: SelectSubset<T, MataPelajaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MataPelajaran.
     * @param {MataPelajaranCreateArgs} args - Arguments to create a MataPelajaran.
     * @example
     * // Create one MataPelajaran
     * const MataPelajaran = await prisma.mataPelajaran.create({
     *   data: {
     *     // ... data to create a MataPelajaran
     *   }
     * })
     * 
     */
    create<T extends MataPelajaranCreateArgs>(args: SelectSubset<T, MataPelajaranCreateArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MataPelajarans.
     * @param {MataPelajaranCreateManyArgs} args - Arguments to create many MataPelajarans.
     * @example
     * // Create many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MataPelajaranCreateManyArgs>(args?: SelectSubset<T, MataPelajaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MataPelajarans and returns the data saved in the database.
     * @param {MataPelajaranCreateManyAndReturnArgs} args - Arguments to create many MataPelajarans.
     * @example
     * // Create many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MataPelajarans and only return the `id`
     * const mataPelajaranWithIdOnly = await prisma.mataPelajaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MataPelajaranCreateManyAndReturnArgs>(args?: SelectSubset<T, MataPelajaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MataPelajaran.
     * @param {MataPelajaranDeleteArgs} args - Arguments to delete one MataPelajaran.
     * @example
     * // Delete one MataPelajaran
     * const MataPelajaran = await prisma.mataPelajaran.delete({
     *   where: {
     *     // ... filter to delete one MataPelajaran
     *   }
     * })
     * 
     */
    delete<T extends MataPelajaranDeleteArgs>(args: SelectSubset<T, MataPelajaranDeleteArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MataPelajaran.
     * @param {MataPelajaranUpdateArgs} args - Arguments to update one MataPelajaran.
     * @example
     * // Update one MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MataPelajaranUpdateArgs>(args: SelectSubset<T, MataPelajaranUpdateArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MataPelajarans.
     * @param {MataPelajaranDeleteManyArgs} args - Arguments to filter MataPelajarans to delete.
     * @example
     * // Delete a few MataPelajarans
     * const { count } = await prisma.mataPelajaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MataPelajaranDeleteManyArgs>(args?: SelectSubset<T, MataPelajaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MataPelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MataPelajaranUpdateManyArgs>(args: SelectSubset<T, MataPelajaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MataPelajarans and returns the data updated in the database.
     * @param {MataPelajaranUpdateManyAndReturnArgs} args - Arguments to update many MataPelajarans.
     * @example
     * // Update many MataPelajarans
     * const mataPelajaran = await prisma.mataPelajaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MataPelajarans and only return the `id`
     * const mataPelajaranWithIdOnly = await prisma.mataPelajaran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MataPelajaranUpdateManyAndReturnArgs>(args: SelectSubset<T, MataPelajaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MataPelajaran.
     * @param {MataPelajaranUpsertArgs} args - Arguments to update or create a MataPelajaran.
     * @example
     * // Update or create a MataPelajaran
     * const mataPelajaran = await prisma.mataPelajaran.upsert({
     *   create: {
     *     // ... data to create a MataPelajaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MataPelajaran we want to update
     *   }
     * })
     */
    upsert<T extends MataPelajaranUpsertArgs>(args: SelectSubset<T, MataPelajaranUpsertArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MataPelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranCountArgs} args - Arguments to filter MataPelajarans to count.
     * @example
     * // Count the number of MataPelajarans
     * const count = await prisma.mataPelajaran.count({
     *   where: {
     *     // ... the filter for the MataPelajarans we want to count
     *   }
     * })
    **/
    count<T extends MataPelajaranCountArgs>(
      args?: Subset<T, MataPelajaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MataPelajaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MataPelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MataPelajaranAggregateArgs>(args: Subset<T, MataPelajaranAggregateArgs>): Prisma.PrismaPromise<GetMataPelajaranAggregateType<T>>

    /**
     * Group by MataPelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MataPelajaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MataPelajaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MataPelajaranGroupByArgs['orderBy'] }
        : { orderBy?: MataPelajaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MataPelajaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMataPelajaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MataPelajaran model
   */
  readonly fields: MataPelajaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MataPelajaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MataPelajaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends MataPelajaran$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, MataPelajaran$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MataPelajaran model
   */
  interface MataPelajaranFieldRefs {
    readonly id: FieldRef<"MataPelajaran", 'String'>
    readonly kode: FieldRef<"MataPelajaran", 'String'>
    readonly nama: FieldRef<"MataPelajaran", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MataPelajaran findUnique
   */
  export type MataPelajaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran findUniqueOrThrow
   */
  export type MataPelajaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran findFirst
   */
  export type MataPelajaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MataPelajarans.
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MataPelajarans.
     */
    distinct?: MataPelajaranScalarFieldEnum | MataPelajaranScalarFieldEnum[]
  }

  /**
   * MataPelajaran findFirstOrThrow
   */
  export type MataPelajaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajaran to fetch.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MataPelajarans.
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MataPelajarans.
     */
    distinct?: MataPelajaranScalarFieldEnum | MataPelajaranScalarFieldEnum[]
  }

  /**
   * MataPelajaran findMany
   */
  export type MataPelajaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which MataPelajarans to fetch.
     */
    where?: MataPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MataPelajarans to fetch.
     */
    orderBy?: MataPelajaranOrderByWithRelationInput | MataPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MataPelajarans.
     */
    cursor?: MataPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MataPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MataPelajarans.
     */
    skip?: number
    distinct?: MataPelajaranScalarFieldEnum | MataPelajaranScalarFieldEnum[]
  }

  /**
   * MataPelajaran create
   */
  export type MataPelajaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * The data needed to create a MataPelajaran.
     */
    data: XOR<MataPelajaranCreateInput, MataPelajaranUncheckedCreateInput>
  }

  /**
   * MataPelajaran createMany
   */
  export type MataPelajaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MataPelajarans.
     */
    data: MataPelajaranCreateManyInput | MataPelajaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MataPelajaran createManyAndReturn
   */
  export type MataPelajaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * The data used to create many MataPelajarans.
     */
    data: MataPelajaranCreateManyInput | MataPelajaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MataPelajaran update
   */
  export type MataPelajaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * The data needed to update a MataPelajaran.
     */
    data: XOR<MataPelajaranUpdateInput, MataPelajaranUncheckedUpdateInput>
    /**
     * Choose, which MataPelajaran to update.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran updateMany
   */
  export type MataPelajaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MataPelajarans.
     */
    data: XOR<MataPelajaranUpdateManyMutationInput, MataPelajaranUncheckedUpdateManyInput>
    /**
     * Filter which MataPelajarans to update
     */
    where?: MataPelajaranWhereInput
    /**
     * Limit how many MataPelajarans to update.
     */
    limit?: number
  }

  /**
   * MataPelajaran updateManyAndReturn
   */
  export type MataPelajaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * The data used to update MataPelajarans.
     */
    data: XOR<MataPelajaranUpdateManyMutationInput, MataPelajaranUncheckedUpdateManyInput>
    /**
     * Filter which MataPelajarans to update
     */
    where?: MataPelajaranWhereInput
    /**
     * Limit how many MataPelajarans to update.
     */
    limit?: number
  }

  /**
   * MataPelajaran upsert
   */
  export type MataPelajaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * The filter to search for the MataPelajaran to update in case it exists.
     */
    where: MataPelajaranWhereUniqueInput
    /**
     * In case the MataPelajaran found by the `where` argument doesn't exist, create a new MataPelajaran with this data.
     */
    create: XOR<MataPelajaranCreateInput, MataPelajaranUncheckedCreateInput>
    /**
     * In case the MataPelajaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MataPelajaranUpdateInput, MataPelajaranUncheckedUpdateInput>
  }

  /**
   * MataPelajaran delete
   */
  export type MataPelajaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
    /**
     * Filter which MataPelajaran to delete.
     */
    where: MataPelajaranWhereUniqueInput
  }

  /**
   * MataPelajaran deleteMany
   */
  export type MataPelajaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MataPelajarans to delete
     */
    where?: MataPelajaranWhereInput
    /**
     * Limit how many MataPelajarans to delete.
     */
    limit?: number
  }

  /**
   * MataPelajaran.jadwal
   */
  export type MataPelajaran$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    where?: JadwalPelajaranWhereInput
    orderBy?: JadwalPelajaranOrderByWithRelationInput | JadwalPelajaranOrderByWithRelationInput[]
    cursor?: JadwalPelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalPelajaranScalarFieldEnum | JadwalPelajaranScalarFieldEnum[]
  }

  /**
   * MataPelajaran without action
   */
  export type MataPelajaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MataPelajaran
     */
    select?: MataPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MataPelajaran
     */
    omit?: MataPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MataPelajaranInclude<ExtArgs> | null
  }


  /**
   * Model JadwalPelajaran
   */

  export type AggregateJadwalPelajaran = {
    _count: JadwalPelajaranCountAggregateOutputType | null
    _min: JadwalPelajaranMinAggregateOutputType | null
    _max: JadwalPelajaranMaxAggregateOutputType | null
  }

  export type JadwalPelajaranMinAggregateOutputType = {
    id: string | null
    hari: string | null
    jamMulai: Date | null
    jamSelesai: Date | null
    kelasId: string | null
    mapelId: string | null
    guruId: string | null
  }

  export type JadwalPelajaranMaxAggregateOutputType = {
    id: string | null
    hari: string | null
    jamMulai: Date | null
    jamSelesai: Date | null
    kelasId: string | null
    mapelId: string | null
    guruId: string | null
  }

  export type JadwalPelajaranCountAggregateOutputType = {
    id: number
    hari: number
    jamMulai: number
    jamSelesai: number
    kelasId: number
    mapelId: number
    guruId: number
    _all: number
  }


  export type JadwalPelajaranMinAggregateInputType = {
    id?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    kelasId?: true
    mapelId?: true
    guruId?: true
  }

  export type JadwalPelajaranMaxAggregateInputType = {
    id?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    kelasId?: true
    mapelId?: true
    guruId?: true
  }

  export type JadwalPelajaranCountAggregateInputType = {
    id?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    kelasId?: true
    mapelId?: true
    guruId?: true
    _all?: true
  }

  export type JadwalPelajaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalPelajaran to aggregate.
     */
    where?: JadwalPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalPelajarans to fetch.
     */
    orderBy?: JadwalPelajaranOrderByWithRelationInput | JadwalPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JadwalPelajarans
    **/
    _count?: true | JadwalPelajaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalPelajaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalPelajaranMaxAggregateInputType
  }

  export type GetJadwalPelajaranAggregateType<T extends JadwalPelajaranAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwalPelajaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwalPelajaran[P]>
      : GetScalarType<T[P], AggregateJadwalPelajaran[P]>
  }




  export type JadwalPelajaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalPelajaranWhereInput
    orderBy?: JadwalPelajaranOrderByWithAggregationInput | JadwalPelajaranOrderByWithAggregationInput[]
    by: JadwalPelajaranScalarFieldEnum[] | JadwalPelajaranScalarFieldEnum
    having?: JadwalPelajaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalPelajaranCountAggregateInputType | true
    _min?: JadwalPelajaranMinAggregateInputType
    _max?: JadwalPelajaranMaxAggregateInputType
  }

  export type JadwalPelajaranGroupByOutputType = {
    id: string
    hari: string
    jamMulai: Date
    jamSelesai: Date
    kelasId: string
    mapelId: string
    guruId: string
    _count: JadwalPelajaranCountAggregateOutputType | null
    _min: JadwalPelajaranMinAggregateOutputType | null
    _max: JadwalPelajaranMaxAggregateOutputType | null
  }

  type GetJadwalPelajaranGroupByPayload<T extends JadwalPelajaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalPelajaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalPelajaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalPelajaranGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalPelajaranGroupByOutputType[P]>
        }
      >
    >


  export type JadwalPelajaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    kelasId?: boolean
    mapelId?: boolean
    guruId?: boolean
    absenMapel?: boolean | JadwalPelajaran$absenMapelArgs<ExtArgs>
    guru?: boolean | GuruDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    _count?: boolean | JadwalPelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalPelajaran"]>

  export type JadwalPelajaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    kelasId?: boolean
    mapelId?: boolean
    guruId?: boolean
    guru?: boolean | GuruDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | MataPelajaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalPelajaran"]>

  export type JadwalPelajaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    kelasId?: boolean
    mapelId?: boolean
    guruId?: boolean
    guru?: boolean | GuruDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | MataPelajaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalPelajaran"]>

  export type JadwalPelajaranSelectScalar = {
    id?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    kelasId?: boolean
    mapelId?: boolean
    guruId?: boolean
  }

  export type JadwalPelajaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hari" | "jamMulai" | "jamSelesai" | "kelasId" | "mapelId" | "guruId", ExtArgs["result"]["jadwalPelajaran"]>
  export type JadwalPelajaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absenMapel?: boolean | JadwalPelajaran$absenMapelArgs<ExtArgs>
    guru?: boolean | GuruDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | MataPelajaranDefaultArgs<ExtArgs>
    _count?: boolean | JadwalPelajaranCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JadwalPelajaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | GuruDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | MataPelajaranDefaultArgs<ExtArgs>
  }
  export type JadwalPelajaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guru?: boolean | GuruDefaultArgs<ExtArgs>
    kelas?: boolean | KelasDefaultArgs<ExtArgs>
    mapel?: boolean | MataPelajaranDefaultArgs<ExtArgs>
  }

  export type $JadwalPelajaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JadwalPelajaran"
    objects: {
      absenMapel: Prisma.$AbsenMapelPayload<ExtArgs>[]
      guru: Prisma.$GuruPayload<ExtArgs>
      kelas: Prisma.$KelasPayload<ExtArgs>
      mapel: Prisma.$MataPelajaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      hari: string
      jamMulai: Date
      jamSelesai: Date
      kelasId: string
      mapelId: string
      guruId: string
    }, ExtArgs["result"]["jadwalPelajaran"]>
    composites: {}
  }

  type JadwalPelajaranGetPayload<S extends boolean | null | undefined | JadwalPelajaranDefaultArgs> = $Result.GetResult<Prisma.$JadwalPelajaranPayload, S>

  type JadwalPelajaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalPelajaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalPelajaranCountAggregateInputType | true
    }

  export interface JadwalPelajaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JadwalPelajaran'], meta: { name: 'JadwalPelajaran' } }
    /**
     * Find zero or one JadwalPelajaran that matches the filter.
     * @param {JadwalPelajaranFindUniqueArgs} args - Arguments to find a JadwalPelajaran
     * @example
     * // Get one JadwalPelajaran
     * const jadwalPelajaran = await prisma.jadwalPelajaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalPelajaranFindUniqueArgs>(args: SelectSubset<T, JadwalPelajaranFindUniqueArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JadwalPelajaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalPelajaranFindUniqueOrThrowArgs} args - Arguments to find a JadwalPelajaran
     * @example
     * // Get one JadwalPelajaran
     * const jadwalPelajaran = await prisma.jadwalPelajaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalPelajaranFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalPelajaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalPelajaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPelajaranFindFirstArgs} args - Arguments to find a JadwalPelajaran
     * @example
     * // Get one JadwalPelajaran
     * const jadwalPelajaran = await prisma.jadwalPelajaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalPelajaranFindFirstArgs>(args?: SelectSubset<T, JadwalPelajaranFindFirstArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalPelajaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPelajaranFindFirstOrThrowArgs} args - Arguments to find a JadwalPelajaran
     * @example
     * // Get one JadwalPelajaran
     * const jadwalPelajaran = await prisma.jadwalPelajaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalPelajaranFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalPelajaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JadwalPelajarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPelajaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalPelajarans
     * const jadwalPelajarans = await prisma.jadwalPelajaran.findMany()
     * 
     * // Get first 10 JadwalPelajarans
     * const jadwalPelajarans = await prisma.jadwalPelajaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalPelajaranWithIdOnly = await prisma.jadwalPelajaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalPelajaranFindManyArgs>(args?: SelectSubset<T, JadwalPelajaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JadwalPelajaran.
     * @param {JadwalPelajaranCreateArgs} args - Arguments to create a JadwalPelajaran.
     * @example
     * // Create one JadwalPelajaran
     * const JadwalPelajaran = await prisma.jadwalPelajaran.create({
     *   data: {
     *     // ... data to create a JadwalPelajaran
     *   }
     * })
     * 
     */
    create<T extends JadwalPelajaranCreateArgs>(args: SelectSubset<T, JadwalPelajaranCreateArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JadwalPelajarans.
     * @param {JadwalPelajaranCreateManyArgs} args - Arguments to create many JadwalPelajarans.
     * @example
     * // Create many JadwalPelajarans
     * const jadwalPelajaran = await prisma.jadwalPelajaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalPelajaranCreateManyArgs>(args?: SelectSubset<T, JadwalPelajaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JadwalPelajarans and returns the data saved in the database.
     * @param {JadwalPelajaranCreateManyAndReturnArgs} args - Arguments to create many JadwalPelajarans.
     * @example
     * // Create many JadwalPelajarans
     * const jadwalPelajaran = await prisma.jadwalPelajaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JadwalPelajarans and only return the `id`
     * const jadwalPelajaranWithIdOnly = await prisma.jadwalPelajaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalPelajaranCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalPelajaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JadwalPelajaran.
     * @param {JadwalPelajaranDeleteArgs} args - Arguments to delete one JadwalPelajaran.
     * @example
     * // Delete one JadwalPelajaran
     * const JadwalPelajaran = await prisma.jadwalPelajaran.delete({
     *   where: {
     *     // ... filter to delete one JadwalPelajaran
     *   }
     * })
     * 
     */
    delete<T extends JadwalPelajaranDeleteArgs>(args: SelectSubset<T, JadwalPelajaranDeleteArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JadwalPelajaran.
     * @param {JadwalPelajaranUpdateArgs} args - Arguments to update one JadwalPelajaran.
     * @example
     * // Update one JadwalPelajaran
     * const jadwalPelajaran = await prisma.jadwalPelajaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalPelajaranUpdateArgs>(args: SelectSubset<T, JadwalPelajaranUpdateArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JadwalPelajarans.
     * @param {JadwalPelajaranDeleteManyArgs} args - Arguments to filter JadwalPelajarans to delete.
     * @example
     * // Delete a few JadwalPelajarans
     * const { count } = await prisma.jadwalPelajaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalPelajaranDeleteManyArgs>(args?: SelectSubset<T, JadwalPelajaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalPelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPelajaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalPelajarans
     * const jadwalPelajaran = await prisma.jadwalPelajaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalPelajaranUpdateManyArgs>(args: SelectSubset<T, JadwalPelajaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalPelajarans and returns the data updated in the database.
     * @param {JadwalPelajaranUpdateManyAndReturnArgs} args - Arguments to update many JadwalPelajarans.
     * @example
     * // Update many JadwalPelajarans
     * const jadwalPelajaran = await prisma.jadwalPelajaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JadwalPelajarans and only return the `id`
     * const jadwalPelajaranWithIdOnly = await prisma.jadwalPelajaran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JadwalPelajaranUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalPelajaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JadwalPelajaran.
     * @param {JadwalPelajaranUpsertArgs} args - Arguments to update or create a JadwalPelajaran.
     * @example
     * // Update or create a JadwalPelajaran
     * const jadwalPelajaran = await prisma.jadwalPelajaran.upsert({
     *   create: {
     *     // ... data to create a JadwalPelajaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalPelajaran we want to update
     *   }
     * })
     */
    upsert<T extends JadwalPelajaranUpsertArgs>(args: SelectSubset<T, JadwalPelajaranUpsertArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JadwalPelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPelajaranCountArgs} args - Arguments to filter JadwalPelajarans to count.
     * @example
     * // Count the number of JadwalPelajarans
     * const count = await prisma.jadwalPelajaran.count({
     *   where: {
     *     // ... the filter for the JadwalPelajarans we want to count
     *   }
     * })
    **/
    count<T extends JadwalPelajaranCountArgs>(
      args?: Subset<T, JadwalPelajaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalPelajaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JadwalPelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPelajaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalPelajaranAggregateArgs>(args: Subset<T, JadwalPelajaranAggregateArgs>): Prisma.PrismaPromise<GetJadwalPelajaranAggregateType<T>>

    /**
     * Group by JadwalPelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPelajaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JadwalPelajaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalPelajaranGroupByArgs['orderBy'] }
        : { orderBy?: JadwalPelajaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JadwalPelajaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalPelajaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JadwalPelajaran model
   */
  readonly fields: JadwalPelajaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JadwalPelajaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalPelajaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    absenMapel<T extends JadwalPelajaran$absenMapelArgs<ExtArgs> = {}>(args?: Subset<T, JadwalPelajaran$absenMapelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guru<T extends GuruDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuruDefaultArgs<ExtArgs>>): Prisma__GuruClient<$Result.GetResult<Prisma.$GuruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas<T extends KelasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KelasDefaultArgs<ExtArgs>>): Prisma__KelasClient<$Result.GetResult<Prisma.$KelasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mapel<T extends MataPelajaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MataPelajaranDefaultArgs<ExtArgs>>): Prisma__MataPelajaranClient<$Result.GetResult<Prisma.$MataPelajaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JadwalPelajaran model
   */
  interface JadwalPelajaranFieldRefs {
    readonly id: FieldRef<"JadwalPelajaran", 'String'>
    readonly hari: FieldRef<"JadwalPelajaran", 'String'>
    readonly jamMulai: FieldRef<"JadwalPelajaran", 'DateTime'>
    readonly jamSelesai: FieldRef<"JadwalPelajaran", 'DateTime'>
    readonly kelasId: FieldRef<"JadwalPelajaran", 'String'>
    readonly mapelId: FieldRef<"JadwalPelajaran", 'String'>
    readonly guruId: FieldRef<"JadwalPelajaran", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JadwalPelajaran findUnique
   */
  export type JadwalPelajaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which JadwalPelajaran to fetch.
     */
    where: JadwalPelajaranWhereUniqueInput
  }

  /**
   * JadwalPelajaran findUniqueOrThrow
   */
  export type JadwalPelajaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which JadwalPelajaran to fetch.
     */
    where: JadwalPelajaranWhereUniqueInput
  }

  /**
   * JadwalPelajaran findFirst
   */
  export type JadwalPelajaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which JadwalPelajaran to fetch.
     */
    where?: JadwalPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalPelajarans to fetch.
     */
    orderBy?: JadwalPelajaranOrderByWithRelationInput | JadwalPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalPelajarans.
     */
    cursor?: JadwalPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalPelajarans.
     */
    distinct?: JadwalPelajaranScalarFieldEnum | JadwalPelajaranScalarFieldEnum[]
  }

  /**
   * JadwalPelajaran findFirstOrThrow
   */
  export type JadwalPelajaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which JadwalPelajaran to fetch.
     */
    where?: JadwalPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalPelajarans to fetch.
     */
    orderBy?: JadwalPelajaranOrderByWithRelationInput | JadwalPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalPelajarans.
     */
    cursor?: JadwalPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalPelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalPelajarans.
     */
    distinct?: JadwalPelajaranScalarFieldEnum | JadwalPelajaranScalarFieldEnum[]
  }

  /**
   * JadwalPelajaran findMany
   */
  export type JadwalPelajaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * Filter, which JadwalPelajarans to fetch.
     */
    where?: JadwalPelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalPelajarans to fetch.
     */
    orderBy?: JadwalPelajaranOrderByWithRelationInput | JadwalPelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JadwalPelajarans.
     */
    cursor?: JadwalPelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalPelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalPelajarans.
     */
    skip?: number
    distinct?: JadwalPelajaranScalarFieldEnum | JadwalPelajaranScalarFieldEnum[]
  }

  /**
   * JadwalPelajaran create
   */
  export type JadwalPelajaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * The data needed to create a JadwalPelajaran.
     */
    data: XOR<JadwalPelajaranCreateInput, JadwalPelajaranUncheckedCreateInput>
  }

  /**
   * JadwalPelajaran createMany
   */
  export type JadwalPelajaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JadwalPelajarans.
     */
    data: JadwalPelajaranCreateManyInput | JadwalPelajaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JadwalPelajaran createManyAndReturn
   */
  export type JadwalPelajaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * The data used to create many JadwalPelajarans.
     */
    data: JadwalPelajaranCreateManyInput | JadwalPelajaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalPelajaran update
   */
  export type JadwalPelajaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * The data needed to update a JadwalPelajaran.
     */
    data: XOR<JadwalPelajaranUpdateInput, JadwalPelajaranUncheckedUpdateInput>
    /**
     * Choose, which JadwalPelajaran to update.
     */
    where: JadwalPelajaranWhereUniqueInput
  }

  /**
   * JadwalPelajaran updateMany
   */
  export type JadwalPelajaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JadwalPelajarans.
     */
    data: XOR<JadwalPelajaranUpdateManyMutationInput, JadwalPelajaranUncheckedUpdateManyInput>
    /**
     * Filter which JadwalPelajarans to update
     */
    where?: JadwalPelajaranWhereInput
    /**
     * Limit how many JadwalPelajarans to update.
     */
    limit?: number
  }

  /**
   * JadwalPelajaran updateManyAndReturn
   */
  export type JadwalPelajaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * The data used to update JadwalPelajarans.
     */
    data: XOR<JadwalPelajaranUpdateManyMutationInput, JadwalPelajaranUncheckedUpdateManyInput>
    /**
     * Filter which JadwalPelajarans to update
     */
    where?: JadwalPelajaranWhereInput
    /**
     * Limit how many JadwalPelajarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalPelajaran upsert
   */
  export type JadwalPelajaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * The filter to search for the JadwalPelajaran to update in case it exists.
     */
    where: JadwalPelajaranWhereUniqueInput
    /**
     * In case the JadwalPelajaran found by the `where` argument doesn't exist, create a new JadwalPelajaran with this data.
     */
    create: XOR<JadwalPelajaranCreateInput, JadwalPelajaranUncheckedCreateInput>
    /**
     * In case the JadwalPelajaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalPelajaranUpdateInput, JadwalPelajaranUncheckedUpdateInput>
  }

  /**
   * JadwalPelajaran delete
   */
  export type JadwalPelajaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
    /**
     * Filter which JadwalPelajaran to delete.
     */
    where: JadwalPelajaranWhereUniqueInput
  }

  /**
   * JadwalPelajaran deleteMany
   */
  export type JadwalPelajaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalPelajarans to delete
     */
    where?: JadwalPelajaranWhereInput
    /**
     * Limit how many JadwalPelajarans to delete.
     */
    limit?: number
  }

  /**
   * JadwalPelajaran.absenMapel
   */
  export type JadwalPelajaran$absenMapelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    where?: AbsenMapelWhereInput
    orderBy?: AbsenMapelOrderByWithRelationInput | AbsenMapelOrderByWithRelationInput[]
    cursor?: AbsenMapelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsenMapelScalarFieldEnum | AbsenMapelScalarFieldEnum[]
  }

  /**
   * JadwalPelajaran without action
   */
  export type JadwalPelajaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalPelajaran
     */
    select?: JadwalPelajaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalPelajaran
     */
    omit?: JadwalPelajaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalPelajaranInclude<ExtArgs> | null
  }


  /**
   * Model AbsenHarian
   */

  export type AggregateAbsenHarian = {
    _count: AbsenHarianCountAggregateOutputType | null
    _min: AbsenHarianMinAggregateOutputType | null
    _max: AbsenHarianMaxAggregateOutputType | null
  }

  export type AbsenHarianMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    jamMasuk: Date | null
    jamPulang: Date | null
    status: $Enums.StatusHarian | null
    siswaId: string | null
  }

  export type AbsenHarianMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    jamMasuk: Date | null
    jamPulang: Date | null
    status: $Enums.StatusHarian | null
    siswaId: string | null
  }

  export type AbsenHarianCountAggregateOutputType = {
    id: number
    tanggal: number
    jamMasuk: number
    jamPulang: number
    status: number
    siswaId: number
    _all: number
  }


  export type AbsenHarianMinAggregateInputType = {
    id?: true
    tanggal?: true
    jamMasuk?: true
    jamPulang?: true
    status?: true
    siswaId?: true
  }

  export type AbsenHarianMaxAggregateInputType = {
    id?: true
    tanggal?: true
    jamMasuk?: true
    jamPulang?: true
    status?: true
    siswaId?: true
  }

  export type AbsenHarianCountAggregateInputType = {
    id?: true
    tanggal?: true
    jamMasuk?: true
    jamPulang?: true
    status?: true
    siswaId?: true
    _all?: true
  }

  export type AbsenHarianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbsenHarian to aggregate.
     */
    where?: AbsenHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenHarians to fetch.
     */
    orderBy?: AbsenHarianOrderByWithRelationInput | AbsenHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsenHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbsenHarians
    **/
    _count?: true | AbsenHarianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsenHarianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsenHarianMaxAggregateInputType
  }

  export type GetAbsenHarianAggregateType<T extends AbsenHarianAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsenHarian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsenHarian[P]>
      : GetScalarType<T[P], AggregateAbsenHarian[P]>
  }




  export type AbsenHarianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsenHarianWhereInput
    orderBy?: AbsenHarianOrderByWithAggregationInput | AbsenHarianOrderByWithAggregationInput[]
    by: AbsenHarianScalarFieldEnum[] | AbsenHarianScalarFieldEnum
    having?: AbsenHarianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsenHarianCountAggregateInputType | true
    _min?: AbsenHarianMinAggregateInputType
    _max?: AbsenHarianMaxAggregateInputType
  }

  export type AbsenHarianGroupByOutputType = {
    id: string
    tanggal: Date
    jamMasuk: Date | null
    jamPulang: Date | null
    status: $Enums.StatusHarian
    siswaId: string
    _count: AbsenHarianCountAggregateOutputType | null
    _min: AbsenHarianMinAggregateOutputType | null
    _max: AbsenHarianMaxAggregateOutputType | null
  }

  type GetAbsenHarianGroupByPayload<T extends AbsenHarianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsenHarianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsenHarianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsenHarianGroupByOutputType[P]>
            : GetScalarType<T[P], AbsenHarianGroupByOutputType[P]>
        }
      >
    >


  export type AbsenHarianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    jamMasuk?: boolean
    jamPulang?: boolean
    status?: boolean
    siswaId?: boolean
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absenHarian"]>

  export type AbsenHarianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    jamMasuk?: boolean
    jamPulang?: boolean
    status?: boolean
    siswaId?: boolean
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absenHarian"]>

  export type AbsenHarianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    jamMasuk?: boolean
    jamPulang?: boolean
    status?: boolean
    siswaId?: boolean
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absenHarian"]>

  export type AbsenHarianSelectScalar = {
    id?: boolean
    tanggal?: boolean
    jamMasuk?: boolean
    jamPulang?: boolean
    status?: boolean
    siswaId?: boolean
  }

  export type AbsenHarianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "jamMasuk" | "jamPulang" | "status" | "siswaId", ExtArgs["result"]["absenHarian"]>
  export type AbsenHarianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }
  export type AbsenHarianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }
  export type AbsenHarianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }

  export type $AbsenHarianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbsenHarian"
    objects: {
      siswa: Prisma.$SiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      jamMasuk: Date | null
      jamPulang: Date | null
      status: $Enums.StatusHarian
      siswaId: string
    }, ExtArgs["result"]["absenHarian"]>
    composites: {}
  }

  type AbsenHarianGetPayload<S extends boolean | null | undefined | AbsenHarianDefaultArgs> = $Result.GetResult<Prisma.$AbsenHarianPayload, S>

  type AbsenHarianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsenHarianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsenHarianCountAggregateInputType | true
    }

  export interface AbsenHarianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbsenHarian'], meta: { name: 'AbsenHarian' } }
    /**
     * Find zero or one AbsenHarian that matches the filter.
     * @param {AbsenHarianFindUniqueArgs} args - Arguments to find a AbsenHarian
     * @example
     * // Get one AbsenHarian
     * const absenHarian = await prisma.absenHarian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsenHarianFindUniqueArgs>(args: SelectSubset<T, AbsenHarianFindUniqueArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AbsenHarian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsenHarianFindUniqueOrThrowArgs} args - Arguments to find a AbsenHarian
     * @example
     * // Get one AbsenHarian
     * const absenHarian = await prisma.absenHarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsenHarianFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsenHarianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbsenHarian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenHarianFindFirstArgs} args - Arguments to find a AbsenHarian
     * @example
     * // Get one AbsenHarian
     * const absenHarian = await prisma.absenHarian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsenHarianFindFirstArgs>(args?: SelectSubset<T, AbsenHarianFindFirstArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbsenHarian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenHarianFindFirstOrThrowArgs} args - Arguments to find a AbsenHarian
     * @example
     * // Get one AbsenHarian
     * const absenHarian = await prisma.absenHarian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsenHarianFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsenHarianFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AbsenHarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenHarianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbsenHarians
     * const absenHarians = await prisma.absenHarian.findMany()
     * 
     * // Get first 10 AbsenHarians
     * const absenHarians = await prisma.absenHarian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absenHarianWithIdOnly = await prisma.absenHarian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsenHarianFindManyArgs>(args?: SelectSubset<T, AbsenHarianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AbsenHarian.
     * @param {AbsenHarianCreateArgs} args - Arguments to create a AbsenHarian.
     * @example
     * // Create one AbsenHarian
     * const AbsenHarian = await prisma.absenHarian.create({
     *   data: {
     *     // ... data to create a AbsenHarian
     *   }
     * })
     * 
     */
    create<T extends AbsenHarianCreateArgs>(args: SelectSubset<T, AbsenHarianCreateArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AbsenHarians.
     * @param {AbsenHarianCreateManyArgs} args - Arguments to create many AbsenHarians.
     * @example
     * // Create many AbsenHarians
     * const absenHarian = await prisma.absenHarian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsenHarianCreateManyArgs>(args?: SelectSubset<T, AbsenHarianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AbsenHarians and returns the data saved in the database.
     * @param {AbsenHarianCreateManyAndReturnArgs} args - Arguments to create many AbsenHarians.
     * @example
     * // Create many AbsenHarians
     * const absenHarian = await prisma.absenHarian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AbsenHarians and only return the `id`
     * const absenHarianWithIdOnly = await prisma.absenHarian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsenHarianCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsenHarianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AbsenHarian.
     * @param {AbsenHarianDeleteArgs} args - Arguments to delete one AbsenHarian.
     * @example
     * // Delete one AbsenHarian
     * const AbsenHarian = await prisma.absenHarian.delete({
     *   where: {
     *     // ... filter to delete one AbsenHarian
     *   }
     * })
     * 
     */
    delete<T extends AbsenHarianDeleteArgs>(args: SelectSubset<T, AbsenHarianDeleteArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AbsenHarian.
     * @param {AbsenHarianUpdateArgs} args - Arguments to update one AbsenHarian.
     * @example
     * // Update one AbsenHarian
     * const absenHarian = await prisma.absenHarian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsenHarianUpdateArgs>(args: SelectSubset<T, AbsenHarianUpdateArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AbsenHarians.
     * @param {AbsenHarianDeleteManyArgs} args - Arguments to filter AbsenHarians to delete.
     * @example
     * // Delete a few AbsenHarians
     * const { count } = await prisma.absenHarian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsenHarianDeleteManyArgs>(args?: SelectSubset<T, AbsenHarianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbsenHarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenHarianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbsenHarians
     * const absenHarian = await prisma.absenHarian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsenHarianUpdateManyArgs>(args: SelectSubset<T, AbsenHarianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbsenHarians and returns the data updated in the database.
     * @param {AbsenHarianUpdateManyAndReturnArgs} args - Arguments to update many AbsenHarians.
     * @example
     * // Update many AbsenHarians
     * const absenHarian = await prisma.absenHarian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AbsenHarians and only return the `id`
     * const absenHarianWithIdOnly = await prisma.absenHarian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbsenHarianUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsenHarianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AbsenHarian.
     * @param {AbsenHarianUpsertArgs} args - Arguments to update or create a AbsenHarian.
     * @example
     * // Update or create a AbsenHarian
     * const absenHarian = await prisma.absenHarian.upsert({
     *   create: {
     *     // ... data to create a AbsenHarian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbsenHarian we want to update
     *   }
     * })
     */
    upsert<T extends AbsenHarianUpsertArgs>(args: SelectSubset<T, AbsenHarianUpsertArgs<ExtArgs>>): Prisma__AbsenHarianClient<$Result.GetResult<Prisma.$AbsenHarianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AbsenHarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenHarianCountArgs} args - Arguments to filter AbsenHarians to count.
     * @example
     * // Count the number of AbsenHarians
     * const count = await prisma.absenHarian.count({
     *   where: {
     *     // ... the filter for the AbsenHarians we want to count
     *   }
     * })
    **/
    count<T extends AbsenHarianCountArgs>(
      args?: Subset<T, AbsenHarianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsenHarianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbsenHarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenHarianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsenHarianAggregateArgs>(args: Subset<T, AbsenHarianAggregateArgs>): Prisma.PrismaPromise<GetAbsenHarianAggregateType<T>>

    /**
     * Group by AbsenHarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenHarianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbsenHarianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsenHarianGroupByArgs['orderBy'] }
        : { orderBy?: AbsenHarianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsenHarianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsenHarianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbsenHarian model
   */
  readonly fields: AbsenHarianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbsenHarian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsenHarianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    siswa<T extends SiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiswaDefaultArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AbsenHarian model
   */
  interface AbsenHarianFieldRefs {
    readonly id: FieldRef<"AbsenHarian", 'String'>
    readonly tanggal: FieldRef<"AbsenHarian", 'DateTime'>
    readonly jamMasuk: FieldRef<"AbsenHarian", 'DateTime'>
    readonly jamPulang: FieldRef<"AbsenHarian", 'DateTime'>
    readonly status: FieldRef<"AbsenHarian", 'StatusHarian'>
    readonly siswaId: FieldRef<"AbsenHarian", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AbsenHarian findUnique
   */
  export type AbsenHarianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * Filter, which AbsenHarian to fetch.
     */
    where: AbsenHarianWhereUniqueInput
  }

  /**
   * AbsenHarian findUniqueOrThrow
   */
  export type AbsenHarianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * Filter, which AbsenHarian to fetch.
     */
    where: AbsenHarianWhereUniqueInput
  }

  /**
   * AbsenHarian findFirst
   */
  export type AbsenHarianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * Filter, which AbsenHarian to fetch.
     */
    where?: AbsenHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenHarians to fetch.
     */
    orderBy?: AbsenHarianOrderByWithRelationInput | AbsenHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbsenHarians.
     */
    cursor?: AbsenHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbsenHarians.
     */
    distinct?: AbsenHarianScalarFieldEnum | AbsenHarianScalarFieldEnum[]
  }

  /**
   * AbsenHarian findFirstOrThrow
   */
  export type AbsenHarianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * Filter, which AbsenHarian to fetch.
     */
    where?: AbsenHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenHarians to fetch.
     */
    orderBy?: AbsenHarianOrderByWithRelationInput | AbsenHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbsenHarians.
     */
    cursor?: AbsenHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenHarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbsenHarians.
     */
    distinct?: AbsenHarianScalarFieldEnum | AbsenHarianScalarFieldEnum[]
  }

  /**
   * AbsenHarian findMany
   */
  export type AbsenHarianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * Filter, which AbsenHarians to fetch.
     */
    where?: AbsenHarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenHarians to fetch.
     */
    orderBy?: AbsenHarianOrderByWithRelationInput | AbsenHarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbsenHarians.
     */
    cursor?: AbsenHarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenHarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenHarians.
     */
    skip?: number
    distinct?: AbsenHarianScalarFieldEnum | AbsenHarianScalarFieldEnum[]
  }

  /**
   * AbsenHarian create
   */
  export type AbsenHarianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * The data needed to create a AbsenHarian.
     */
    data: XOR<AbsenHarianCreateInput, AbsenHarianUncheckedCreateInput>
  }

  /**
   * AbsenHarian createMany
   */
  export type AbsenHarianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbsenHarians.
     */
    data: AbsenHarianCreateManyInput | AbsenHarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AbsenHarian createManyAndReturn
   */
  export type AbsenHarianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * The data used to create many AbsenHarians.
     */
    data: AbsenHarianCreateManyInput | AbsenHarianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbsenHarian update
   */
  export type AbsenHarianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * The data needed to update a AbsenHarian.
     */
    data: XOR<AbsenHarianUpdateInput, AbsenHarianUncheckedUpdateInput>
    /**
     * Choose, which AbsenHarian to update.
     */
    where: AbsenHarianWhereUniqueInput
  }

  /**
   * AbsenHarian updateMany
   */
  export type AbsenHarianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbsenHarians.
     */
    data: XOR<AbsenHarianUpdateManyMutationInput, AbsenHarianUncheckedUpdateManyInput>
    /**
     * Filter which AbsenHarians to update
     */
    where?: AbsenHarianWhereInput
    /**
     * Limit how many AbsenHarians to update.
     */
    limit?: number
  }

  /**
   * AbsenHarian updateManyAndReturn
   */
  export type AbsenHarianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * The data used to update AbsenHarians.
     */
    data: XOR<AbsenHarianUpdateManyMutationInput, AbsenHarianUncheckedUpdateManyInput>
    /**
     * Filter which AbsenHarians to update
     */
    where?: AbsenHarianWhereInput
    /**
     * Limit how many AbsenHarians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbsenHarian upsert
   */
  export type AbsenHarianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * The filter to search for the AbsenHarian to update in case it exists.
     */
    where: AbsenHarianWhereUniqueInput
    /**
     * In case the AbsenHarian found by the `where` argument doesn't exist, create a new AbsenHarian with this data.
     */
    create: XOR<AbsenHarianCreateInput, AbsenHarianUncheckedCreateInput>
    /**
     * In case the AbsenHarian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsenHarianUpdateInput, AbsenHarianUncheckedUpdateInput>
  }

  /**
   * AbsenHarian delete
   */
  export type AbsenHarianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
    /**
     * Filter which AbsenHarian to delete.
     */
    where: AbsenHarianWhereUniqueInput
  }

  /**
   * AbsenHarian deleteMany
   */
  export type AbsenHarianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbsenHarians to delete
     */
    where?: AbsenHarianWhereInput
    /**
     * Limit how many AbsenHarians to delete.
     */
    limit?: number
  }

  /**
   * AbsenHarian without action
   */
  export type AbsenHarianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenHarian
     */
    select?: AbsenHarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenHarian
     */
    omit?: AbsenHarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenHarianInclude<ExtArgs> | null
  }


  /**
   * Model AbsenMapel
   */

  export type AggregateAbsenMapel = {
    _count: AbsenMapelCountAggregateOutputType | null
    _min: AbsenMapelMinAggregateOutputType | null
    _max: AbsenMapelMaxAggregateOutputType | null
  }

  export type AbsenMapelMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: $Enums.StatusMapel | null
    keterangan: string | null
    hari: string | null
    jamMulai: Date | null
    jamSelesai: Date | null
    siswaId: string | null
    jadwalId: string | null
  }

  export type AbsenMapelMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: $Enums.StatusMapel | null
    keterangan: string | null
    hari: string | null
    jamMulai: Date | null
    jamSelesai: Date | null
    siswaId: string | null
    jadwalId: string | null
  }

  export type AbsenMapelCountAggregateOutputType = {
    id: number
    tanggal: number
    status: number
    keterangan: number
    hari: number
    jamMulai: number
    jamSelesai: number
    siswaId: number
    jadwalId: number
    _all: number
  }


  export type AbsenMapelMinAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    keterangan?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    siswaId?: true
    jadwalId?: true
  }

  export type AbsenMapelMaxAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    keterangan?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    siswaId?: true
    jadwalId?: true
  }

  export type AbsenMapelCountAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    keterangan?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    siswaId?: true
    jadwalId?: true
    _all?: true
  }

  export type AbsenMapelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbsenMapel to aggregate.
     */
    where?: AbsenMapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenMapels to fetch.
     */
    orderBy?: AbsenMapelOrderByWithRelationInput | AbsenMapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsenMapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenMapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenMapels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbsenMapels
    **/
    _count?: true | AbsenMapelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsenMapelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsenMapelMaxAggregateInputType
  }

  export type GetAbsenMapelAggregateType<T extends AbsenMapelAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsenMapel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsenMapel[P]>
      : GetScalarType<T[P], AggregateAbsenMapel[P]>
  }




  export type AbsenMapelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsenMapelWhereInput
    orderBy?: AbsenMapelOrderByWithAggregationInput | AbsenMapelOrderByWithAggregationInput[]
    by: AbsenMapelScalarFieldEnum[] | AbsenMapelScalarFieldEnum
    having?: AbsenMapelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsenMapelCountAggregateInputType | true
    _min?: AbsenMapelMinAggregateInputType
    _max?: AbsenMapelMaxAggregateInputType
  }

  export type AbsenMapelGroupByOutputType = {
    id: string
    tanggal: Date
    status: $Enums.StatusMapel
    keterangan: string | null
    hari: string
    jamMulai: Date
    jamSelesai: Date
    siswaId: string
    jadwalId: string
    _count: AbsenMapelCountAggregateOutputType | null
    _min: AbsenMapelMinAggregateOutputType | null
    _max: AbsenMapelMaxAggregateOutputType | null
  }

  type GetAbsenMapelGroupByPayload<T extends AbsenMapelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsenMapelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsenMapelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsenMapelGroupByOutputType[P]>
            : GetScalarType<T[P], AbsenMapelGroupByOutputType[P]>
        }
      >
    >


  export type AbsenMapelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    keterangan?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    siswaId?: boolean
    jadwalId?: boolean
    jadwal?: boolean | JadwalPelajaranDefaultArgs<ExtArgs>
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absenMapel"]>

  export type AbsenMapelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    keterangan?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    siswaId?: boolean
    jadwalId?: boolean
    jadwal?: boolean | JadwalPelajaranDefaultArgs<ExtArgs>
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absenMapel"]>

  export type AbsenMapelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    keterangan?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    siswaId?: boolean
    jadwalId?: boolean
    jadwal?: boolean | JadwalPelajaranDefaultArgs<ExtArgs>
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absenMapel"]>

  export type AbsenMapelSelectScalar = {
    id?: boolean
    tanggal?: boolean
    status?: boolean
    keterangan?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    siswaId?: boolean
    jadwalId?: boolean
  }

  export type AbsenMapelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "status" | "keterangan" | "hari" | "jamMulai" | "jamSelesai" | "siswaId" | "jadwalId", ExtArgs["result"]["absenMapel"]>
  export type AbsenMapelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | JadwalPelajaranDefaultArgs<ExtArgs>
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }
  export type AbsenMapelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | JadwalPelajaranDefaultArgs<ExtArgs>
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }
  export type AbsenMapelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | JadwalPelajaranDefaultArgs<ExtArgs>
    siswa?: boolean | SiswaDefaultArgs<ExtArgs>
  }

  export type $AbsenMapelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbsenMapel"
    objects: {
      jadwal: Prisma.$JadwalPelajaranPayload<ExtArgs>
      siswa: Prisma.$SiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      status: $Enums.StatusMapel
      keterangan: string | null
      hari: string
      jamMulai: Date
      jamSelesai: Date
      siswaId: string
      jadwalId: string
    }, ExtArgs["result"]["absenMapel"]>
    composites: {}
  }

  type AbsenMapelGetPayload<S extends boolean | null | undefined | AbsenMapelDefaultArgs> = $Result.GetResult<Prisma.$AbsenMapelPayload, S>

  type AbsenMapelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsenMapelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsenMapelCountAggregateInputType | true
    }

  export interface AbsenMapelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbsenMapel'], meta: { name: 'AbsenMapel' } }
    /**
     * Find zero or one AbsenMapel that matches the filter.
     * @param {AbsenMapelFindUniqueArgs} args - Arguments to find a AbsenMapel
     * @example
     * // Get one AbsenMapel
     * const absenMapel = await prisma.absenMapel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsenMapelFindUniqueArgs>(args: SelectSubset<T, AbsenMapelFindUniqueArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AbsenMapel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsenMapelFindUniqueOrThrowArgs} args - Arguments to find a AbsenMapel
     * @example
     * // Get one AbsenMapel
     * const absenMapel = await prisma.absenMapel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsenMapelFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsenMapelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbsenMapel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenMapelFindFirstArgs} args - Arguments to find a AbsenMapel
     * @example
     * // Get one AbsenMapel
     * const absenMapel = await prisma.absenMapel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsenMapelFindFirstArgs>(args?: SelectSubset<T, AbsenMapelFindFirstArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AbsenMapel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenMapelFindFirstOrThrowArgs} args - Arguments to find a AbsenMapel
     * @example
     * // Get one AbsenMapel
     * const absenMapel = await prisma.absenMapel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsenMapelFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsenMapelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AbsenMapels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenMapelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbsenMapels
     * const absenMapels = await prisma.absenMapel.findMany()
     * 
     * // Get first 10 AbsenMapels
     * const absenMapels = await prisma.absenMapel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absenMapelWithIdOnly = await prisma.absenMapel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsenMapelFindManyArgs>(args?: SelectSubset<T, AbsenMapelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AbsenMapel.
     * @param {AbsenMapelCreateArgs} args - Arguments to create a AbsenMapel.
     * @example
     * // Create one AbsenMapel
     * const AbsenMapel = await prisma.absenMapel.create({
     *   data: {
     *     // ... data to create a AbsenMapel
     *   }
     * })
     * 
     */
    create<T extends AbsenMapelCreateArgs>(args: SelectSubset<T, AbsenMapelCreateArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AbsenMapels.
     * @param {AbsenMapelCreateManyArgs} args - Arguments to create many AbsenMapels.
     * @example
     * // Create many AbsenMapels
     * const absenMapel = await prisma.absenMapel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsenMapelCreateManyArgs>(args?: SelectSubset<T, AbsenMapelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AbsenMapels and returns the data saved in the database.
     * @param {AbsenMapelCreateManyAndReturnArgs} args - Arguments to create many AbsenMapels.
     * @example
     * // Create many AbsenMapels
     * const absenMapel = await prisma.absenMapel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AbsenMapels and only return the `id`
     * const absenMapelWithIdOnly = await prisma.absenMapel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsenMapelCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsenMapelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AbsenMapel.
     * @param {AbsenMapelDeleteArgs} args - Arguments to delete one AbsenMapel.
     * @example
     * // Delete one AbsenMapel
     * const AbsenMapel = await prisma.absenMapel.delete({
     *   where: {
     *     // ... filter to delete one AbsenMapel
     *   }
     * })
     * 
     */
    delete<T extends AbsenMapelDeleteArgs>(args: SelectSubset<T, AbsenMapelDeleteArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AbsenMapel.
     * @param {AbsenMapelUpdateArgs} args - Arguments to update one AbsenMapel.
     * @example
     * // Update one AbsenMapel
     * const absenMapel = await prisma.absenMapel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsenMapelUpdateArgs>(args: SelectSubset<T, AbsenMapelUpdateArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AbsenMapels.
     * @param {AbsenMapelDeleteManyArgs} args - Arguments to filter AbsenMapels to delete.
     * @example
     * // Delete a few AbsenMapels
     * const { count } = await prisma.absenMapel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsenMapelDeleteManyArgs>(args?: SelectSubset<T, AbsenMapelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbsenMapels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenMapelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbsenMapels
     * const absenMapel = await prisma.absenMapel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsenMapelUpdateManyArgs>(args: SelectSubset<T, AbsenMapelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbsenMapels and returns the data updated in the database.
     * @param {AbsenMapelUpdateManyAndReturnArgs} args - Arguments to update many AbsenMapels.
     * @example
     * // Update many AbsenMapels
     * const absenMapel = await prisma.absenMapel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AbsenMapels and only return the `id`
     * const absenMapelWithIdOnly = await prisma.absenMapel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbsenMapelUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsenMapelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AbsenMapel.
     * @param {AbsenMapelUpsertArgs} args - Arguments to update or create a AbsenMapel.
     * @example
     * // Update or create a AbsenMapel
     * const absenMapel = await prisma.absenMapel.upsert({
     *   create: {
     *     // ... data to create a AbsenMapel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbsenMapel we want to update
     *   }
     * })
     */
    upsert<T extends AbsenMapelUpsertArgs>(args: SelectSubset<T, AbsenMapelUpsertArgs<ExtArgs>>): Prisma__AbsenMapelClient<$Result.GetResult<Prisma.$AbsenMapelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AbsenMapels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenMapelCountArgs} args - Arguments to filter AbsenMapels to count.
     * @example
     * // Count the number of AbsenMapels
     * const count = await prisma.absenMapel.count({
     *   where: {
     *     // ... the filter for the AbsenMapels we want to count
     *   }
     * })
    **/
    count<T extends AbsenMapelCountArgs>(
      args?: Subset<T, AbsenMapelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsenMapelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbsenMapel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenMapelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsenMapelAggregateArgs>(args: Subset<T, AbsenMapelAggregateArgs>): Prisma.PrismaPromise<GetAbsenMapelAggregateType<T>>

    /**
     * Group by AbsenMapel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsenMapelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbsenMapelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsenMapelGroupByArgs['orderBy'] }
        : { orderBy?: AbsenMapelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsenMapelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsenMapelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbsenMapel model
   */
  readonly fields: AbsenMapelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbsenMapel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsenMapelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends JadwalPelajaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JadwalPelajaranDefaultArgs<ExtArgs>>): Prisma__JadwalPelajaranClient<$Result.GetResult<Prisma.$JadwalPelajaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    siswa<T extends SiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiswaDefaultArgs<ExtArgs>>): Prisma__SiswaClient<$Result.GetResult<Prisma.$SiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AbsenMapel model
   */
  interface AbsenMapelFieldRefs {
    readonly id: FieldRef<"AbsenMapel", 'String'>
    readonly tanggal: FieldRef<"AbsenMapel", 'DateTime'>
    readonly status: FieldRef<"AbsenMapel", 'StatusMapel'>
    readonly keterangan: FieldRef<"AbsenMapel", 'String'>
    readonly hari: FieldRef<"AbsenMapel", 'String'>
    readonly jamMulai: FieldRef<"AbsenMapel", 'DateTime'>
    readonly jamSelesai: FieldRef<"AbsenMapel", 'DateTime'>
    readonly siswaId: FieldRef<"AbsenMapel", 'String'>
    readonly jadwalId: FieldRef<"AbsenMapel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AbsenMapel findUnique
   */
  export type AbsenMapelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * Filter, which AbsenMapel to fetch.
     */
    where: AbsenMapelWhereUniqueInput
  }

  /**
   * AbsenMapel findUniqueOrThrow
   */
  export type AbsenMapelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * Filter, which AbsenMapel to fetch.
     */
    where: AbsenMapelWhereUniqueInput
  }

  /**
   * AbsenMapel findFirst
   */
  export type AbsenMapelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * Filter, which AbsenMapel to fetch.
     */
    where?: AbsenMapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenMapels to fetch.
     */
    orderBy?: AbsenMapelOrderByWithRelationInput | AbsenMapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbsenMapels.
     */
    cursor?: AbsenMapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenMapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenMapels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbsenMapels.
     */
    distinct?: AbsenMapelScalarFieldEnum | AbsenMapelScalarFieldEnum[]
  }

  /**
   * AbsenMapel findFirstOrThrow
   */
  export type AbsenMapelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * Filter, which AbsenMapel to fetch.
     */
    where?: AbsenMapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenMapels to fetch.
     */
    orderBy?: AbsenMapelOrderByWithRelationInput | AbsenMapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbsenMapels.
     */
    cursor?: AbsenMapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenMapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenMapels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbsenMapels.
     */
    distinct?: AbsenMapelScalarFieldEnum | AbsenMapelScalarFieldEnum[]
  }

  /**
   * AbsenMapel findMany
   */
  export type AbsenMapelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * Filter, which AbsenMapels to fetch.
     */
    where?: AbsenMapelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbsenMapels to fetch.
     */
    orderBy?: AbsenMapelOrderByWithRelationInput | AbsenMapelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbsenMapels.
     */
    cursor?: AbsenMapelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbsenMapels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbsenMapels.
     */
    skip?: number
    distinct?: AbsenMapelScalarFieldEnum | AbsenMapelScalarFieldEnum[]
  }

  /**
   * AbsenMapel create
   */
  export type AbsenMapelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * The data needed to create a AbsenMapel.
     */
    data: XOR<AbsenMapelCreateInput, AbsenMapelUncheckedCreateInput>
  }

  /**
   * AbsenMapel createMany
   */
  export type AbsenMapelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbsenMapels.
     */
    data: AbsenMapelCreateManyInput | AbsenMapelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AbsenMapel createManyAndReturn
   */
  export type AbsenMapelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * The data used to create many AbsenMapels.
     */
    data: AbsenMapelCreateManyInput | AbsenMapelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbsenMapel update
   */
  export type AbsenMapelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * The data needed to update a AbsenMapel.
     */
    data: XOR<AbsenMapelUpdateInput, AbsenMapelUncheckedUpdateInput>
    /**
     * Choose, which AbsenMapel to update.
     */
    where: AbsenMapelWhereUniqueInput
  }

  /**
   * AbsenMapel updateMany
   */
  export type AbsenMapelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbsenMapels.
     */
    data: XOR<AbsenMapelUpdateManyMutationInput, AbsenMapelUncheckedUpdateManyInput>
    /**
     * Filter which AbsenMapels to update
     */
    where?: AbsenMapelWhereInput
    /**
     * Limit how many AbsenMapels to update.
     */
    limit?: number
  }

  /**
   * AbsenMapel updateManyAndReturn
   */
  export type AbsenMapelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * The data used to update AbsenMapels.
     */
    data: XOR<AbsenMapelUpdateManyMutationInput, AbsenMapelUncheckedUpdateManyInput>
    /**
     * Filter which AbsenMapels to update
     */
    where?: AbsenMapelWhereInput
    /**
     * Limit how many AbsenMapels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AbsenMapel upsert
   */
  export type AbsenMapelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * The filter to search for the AbsenMapel to update in case it exists.
     */
    where: AbsenMapelWhereUniqueInput
    /**
     * In case the AbsenMapel found by the `where` argument doesn't exist, create a new AbsenMapel with this data.
     */
    create: XOR<AbsenMapelCreateInput, AbsenMapelUncheckedCreateInput>
    /**
     * In case the AbsenMapel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsenMapelUpdateInput, AbsenMapelUncheckedUpdateInput>
  }

  /**
   * AbsenMapel delete
   */
  export type AbsenMapelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
    /**
     * Filter which AbsenMapel to delete.
     */
    where: AbsenMapelWhereUniqueInput
  }

  /**
   * AbsenMapel deleteMany
   */
  export type AbsenMapelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbsenMapels to delete
     */
    where?: AbsenMapelWhereInput
    /**
     * Limit how many AbsenMapels to delete.
     */
    limit?: number
  }

  /**
   * AbsenMapel without action
   */
  export type AbsenMapelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbsenMapel
     */
    select?: AbsenMapelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbsenMapel
     */
    omit?: AbsenMapelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsenMapelInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const GuruScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kode: 'kode',
    nip: 'nip',
    nuptk: 'nuptk',
    gender: 'gender',
    isPiket: 'isPiket',
    userId: 'userId'
  };

  export type GuruScalarFieldEnum = (typeof GuruScalarFieldEnum)[keyof typeof GuruScalarFieldEnum]


  export const SiswaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nisn: 'nisn',
    kode: 'kode',
    gender: 'gender',
    kelasId: 'kelasId'
  };

  export type SiswaScalarFieldEnum = (typeof SiswaScalarFieldEnum)[keyof typeof SiswaScalarFieldEnum]


  export const KelasScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    waliKelasId: 'waliKelasId'
  };

  export type KelasScalarFieldEnum = (typeof KelasScalarFieldEnum)[keyof typeof KelasScalarFieldEnum]


  export const MataPelajaranScalarFieldEnum: {
    id: 'id',
    kode: 'kode',
    nama: 'nama'
  };

  export type MataPelajaranScalarFieldEnum = (typeof MataPelajaranScalarFieldEnum)[keyof typeof MataPelajaranScalarFieldEnum]


  export const JadwalPelajaranScalarFieldEnum: {
    id: 'id',
    hari: 'hari',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    kelasId: 'kelasId',
    mapelId: 'mapelId',
    guruId: 'guruId'
  };

  export type JadwalPelajaranScalarFieldEnum = (typeof JadwalPelajaranScalarFieldEnum)[keyof typeof JadwalPelajaranScalarFieldEnum]


  export const AbsenHarianScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    jamMasuk: 'jamMasuk',
    jamPulang: 'jamPulang',
    status: 'status',
    siswaId: 'siswaId'
  };

  export type AbsenHarianScalarFieldEnum = (typeof AbsenHarianScalarFieldEnum)[keyof typeof AbsenHarianScalarFieldEnum]


  export const AbsenMapelScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    status: 'status',
    keterangan: 'keterangan',
    hari: 'hari',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    siswaId: 'siswaId',
    jadwalId: 'jadwalId'
  };

  export type AbsenMapelScalarFieldEnum = (typeof AbsenMapelScalarFieldEnum)[keyof typeof AbsenMapelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatusHarian'
   */
  export type EnumStatusHarianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusHarian'>
    


  /**
   * Reference to a field of type 'StatusHarian[]'
   */
  export type ListEnumStatusHarianFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusHarian[]'>
    


  /**
   * Reference to a field of type 'StatusMapel'
   */
  export type EnumStatusMapelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusMapel'>
    


  /**
   * Reference to a field of type 'StatusMapel[]'
   */
  export type ListEnumStatusMapelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusMapel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    guruProfil?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    guruProfil?: GuruOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    accounts?: AccountListRelationFilter
    guruProfil?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type GuruWhereInput = {
    AND?: GuruWhereInput | GuruWhereInput[]
    OR?: GuruWhereInput[]
    NOT?: GuruWhereInput | GuruWhereInput[]
    id?: StringFilter<"Guru"> | string
    nama?: StringFilter<"Guru"> | string
    kode?: StringFilter<"Guru"> | string
    nip?: StringNullableFilter<"Guru"> | string | null
    nuptk?: StringNullableFilter<"Guru"> | string | null
    gender?: EnumGenderFilter<"Guru"> | $Enums.Gender
    isPiket?: BoolFilter<"Guru"> | boolean
    userId?: StringNullableFilter<"Guru"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mengajarDiJadwal?: JadwalPelajaranListRelationFilter
    waliDiKelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
  }

  export type GuruOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    nip?: SortOrderInput | SortOrder
    nuptk?: SortOrderInput | SortOrder
    gender?: SortOrder
    isPiket?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    mengajarDiJadwal?: JadwalPelajaranOrderByRelationAggregateInput
    waliDiKelas?: KelasOrderByWithRelationInput
  }

  export type GuruWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kode?: string
    nip?: string
    nuptk?: string
    userId?: string
    AND?: GuruWhereInput | GuruWhereInput[]
    OR?: GuruWhereInput[]
    NOT?: GuruWhereInput | GuruWhereInput[]
    nama?: StringFilter<"Guru"> | string
    gender?: EnumGenderFilter<"Guru"> | $Enums.Gender
    isPiket?: BoolFilter<"Guru"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mengajarDiJadwal?: JadwalPelajaranListRelationFilter
    waliDiKelas?: XOR<KelasNullableScalarRelationFilter, KelasWhereInput> | null
  }, "id" | "kode" | "nip" | "nuptk" | "userId">

  export type GuruOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    nip?: SortOrderInput | SortOrder
    nuptk?: SortOrderInput | SortOrder
    gender?: SortOrder
    isPiket?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: GuruCountOrderByAggregateInput
    _max?: GuruMaxOrderByAggregateInput
    _min?: GuruMinOrderByAggregateInput
  }

  export type GuruScalarWhereWithAggregatesInput = {
    AND?: GuruScalarWhereWithAggregatesInput | GuruScalarWhereWithAggregatesInput[]
    OR?: GuruScalarWhereWithAggregatesInput[]
    NOT?: GuruScalarWhereWithAggregatesInput | GuruScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guru"> | string
    nama?: StringWithAggregatesFilter<"Guru"> | string
    kode?: StringWithAggregatesFilter<"Guru"> | string
    nip?: StringNullableWithAggregatesFilter<"Guru"> | string | null
    nuptk?: StringNullableWithAggregatesFilter<"Guru"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"Guru"> | $Enums.Gender
    isPiket?: BoolWithAggregatesFilter<"Guru"> | boolean
    userId?: StringNullableWithAggregatesFilter<"Guru"> | string | null
  }

  export type SiswaWhereInput = {
    AND?: SiswaWhereInput | SiswaWhereInput[]
    OR?: SiswaWhereInput[]
    NOT?: SiswaWhereInput | SiswaWhereInput[]
    id?: StringFilter<"Siswa"> | string
    nama?: StringFilter<"Siswa"> | string
    nisn?: StringFilter<"Siswa"> | string
    kode?: StringFilter<"Siswa"> | string
    gender?: EnumGenderFilter<"Siswa"> | $Enums.Gender
    kelasId?: StringFilter<"Siswa"> | string
    absenHarian?: AbsenHarianListRelationFilter
    absenMapel?: AbsenMapelListRelationFilter
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }

  export type SiswaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nisn?: SortOrder
    kode?: SortOrder
    gender?: SortOrder
    kelasId?: SortOrder
    absenHarian?: AbsenHarianOrderByRelationAggregateInput
    absenMapel?: AbsenMapelOrderByRelationAggregateInput
    kelas?: KelasOrderByWithRelationInput
  }

  export type SiswaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nisn?: string
    kode?: string
    AND?: SiswaWhereInput | SiswaWhereInput[]
    OR?: SiswaWhereInput[]
    NOT?: SiswaWhereInput | SiswaWhereInput[]
    nama?: StringFilter<"Siswa"> | string
    gender?: EnumGenderFilter<"Siswa"> | $Enums.Gender
    kelasId?: StringFilter<"Siswa"> | string
    absenHarian?: AbsenHarianListRelationFilter
    absenMapel?: AbsenMapelListRelationFilter
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
  }, "id" | "nisn" | "kode">

  export type SiswaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nisn?: SortOrder
    kode?: SortOrder
    gender?: SortOrder
    kelasId?: SortOrder
    _count?: SiswaCountOrderByAggregateInput
    _max?: SiswaMaxOrderByAggregateInput
    _min?: SiswaMinOrderByAggregateInput
  }

  export type SiswaScalarWhereWithAggregatesInput = {
    AND?: SiswaScalarWhereWithAggregatesInput | SiswaScalarWhereWithAggregatesInput[]
    OR?: SiswaScalarWhereWithAggregatesInput[]
    NOT?: SiswaScalarWhereWithAggregatesInput | SiswaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Siswa"> | string
    nama?: StringWithAggregatesFilter<"Siswa"> | string
    nisn?: StringWithAggregatesFilter<"Siswa"> | string
    kode?: StringWithAggregatesFilter<"Siswa"> | string
    gender?: EnumGenderWithAggregatesFilter<"Siswa"> | $Enums.Gender
    kelasId?: StringWithAggregatesFilter<"Siswa"> | string
  }

  export type KelasWhereInput = {
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    id?: StringFilter<"Kelas"> | string
    nama?: StringFilter<"Kelas"> | string
    waliKelasId?: StringNullableFilter<"Kelas"> | string | null
    jadwal?: JadwalPelajaranListRelationFilter
    waliKelas?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
    siswa?: SiswaListRelationFilter
  }

  export type KelasOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    jadwal?: JadwalPelajaranOrderByRelationAggregateInput
    waliKelas?: GuruOrderByWithRelationInput
    siswa?: SiswaOrderByRelationAggregateInput
  }

  export type KelasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    waliKelasId?: string
    AND?: KelasWhereInput | KelasWhereInput[]
    OR?: KelasWhereInput[]
    NOT?: KelasWhereInput | KelasWhereInput[]
    jadwal?: JadwalPelajaranListRelationFilter
    waliKelas?: XOR<GuruNullableScalarRelationFilter, GuruWhereInput> | null
    siswa?: SiswaListRelationFilter
  }, "id" | "nama" | "waliKelasId">

  export type KelasOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    _count?: KelasCountOrderByAggregateInput
    _max?: KelasMaxOrderByAggregateInput
    _min?: KelasMinOrderByAggregateInput
  }

  export type KelasScalarWhereWithAggregatesInput = {
    AND?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    OR?: KelasScalarWhereWithAggregatesInput[]
    NOT?: KelasScalarWhereWithAggregatesInput | KelasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kelas"> | string
    nama?: StringWithAggregatesFilter<"Kelas"> | string
    waliKelasId?: StringNullableWithAggregatesFilter<"Kelas"> | string | null
  }

  export type MataPelajaranWhereInput = {
    AND?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    OR?: MataPelajaranWhereInput[]
    NOT?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    id?: StringFilter<"MataPelajaran"> | string
    kode?: StringFilter<"MataPelajaran"> | string
    nama?: StringFilter<"MataPelajaran"> | string
    jadwal?: JadwalPelajaranListRelationFilter
  }

  export type MataPelajaranOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    jadwal?: JadwalPelajaranOrderByRelationAggregateInput
  }

  export type MataPelajaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kode?: string
    AND?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    OR?: MataPelajaranWhereInput[]
    NOT?: MataPelajaranWhereInput | MataPelajaranWhereInput[]
    nama?: StringFilter<"MataPelajaran"> | string
    jadwal?: JadwalPelajaranListRelationFilter
  }, "id" | "kode">

  export type MataPelajaranOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    _count?: MataPelajaranCountOrderByAggregateInput
    _max?: MataPelajaranMaxOrderByAggregateInput
    _min?: MataPelajaranMinOrderByAggregateInput
  }

  export type MataPelajaranScalarWhereWithAggregatesInput = {
    AND?: MataPelajaranScalarWhereWithAggregatesInput | MataPelajaranScalarWhereWithAggregatesInput[]
    OR?: MataPelajaranScalarWhereWithAggregatesInput[]
    NOT?: MataPelajaranScalarWhereWithAggregatesInput | MataPelajaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MataPelajaran"> | string
    kode?: StringWithAggregatesFilter<"MataPelajaran"> | string
    nama?: StringWithAggregatesFilter<"MataPelajaran"> | string
  }

  export type JadwalPelajaranWhereInput = {
    AND?: JadwalPelajaranWhereInput | JadwalPelajaranWhereInput[]
    OR?: JadwalPelajaranWhereInput[]
    NOT?: JadwalPelajaranWhereInput | JadwalPelajaranWhereInput[]
    id?: StringFilter<"JadwalPelajaran"> | string
    hari?: StringFilter<"JadwalPelajaran"> | string
    jamMulai?: DateTimeFilter<"JadwalPelajaran"> | Date | string
    jamSelesai?: DateTimeFilter<"JadwalPelajaran"> | Date | string
    kelasId?: StringFilter<"JadwalPelajaran"> | string
    mapelId?: StringFilter<"JadwalPelajaran"> | string
    guruId?: StringFilter<"JadwalPelajaran"> | string
    absenMapel?: AbsenMapelListRelationFilter
    guru?: XOR<GuruScalarRelationFilter, GuruWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mapel?: XOR<MataPelajaranScalarRelationFilter, MataPelajaranWhereInput>
  }

  export type JadwalPelajaranOrderByWithRelationInput = {
    id?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    kelasId?: SortOrder
    mapelId?: SortOrder
    guruId?: SortOrder
    absenMapel?: AbsenMapelOrderByRelationAggregateInput
    guru?: GuruOrderByWithRelationInput
    kelas?: KelasOrderByWithRelationInput
    mapel?: MataPelajaranOrderByWithRelationInput
  }

  export type JadwalPelajaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JadwalPelajaranWhereInput | JadwalPelajaranWhereInput[]
    OR?: JadwalPelajaranWhereInput[]
    NOT?: JadwalPelajaranWhereInput | JadwalPelajaranWhereInput[]
    hari?: StringFilter<"JadwalPelajaran"> | string
    jamMulai?: DateTimeFilter<"JadwalPelajaran"> | Date | string
    jamSelesai?: DateTimeFilter<"JadwalPelajaran"> | Date | string
    kelasId?: StringFilter<"JadwalPelajaran"> | string
    mapelId?: StringFilter<"JadwalPelajaran"> | string
    guruId?: StringFilter<"JadwalPelajaran"> | string
    absenMapel?: AbsenMapelListRelationFilter
    guru?: XOR<GuruScalarRelationFilter, GuruWhereInput>
    kelas?: XOR<KelasScalarRelationFilter, KelasWhereInput>
    mapel?: XOR<MataPelajaranScalarRelationFilter, MataPelajaranWhereInput>
  }, "id">

  export type JadwalPelajaranOrderByWithAggregationInput = {
    id?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    kelasId?: SortOrder
    mapelId?: SortOrder
    guruId?: SortOrder
    _count?: JadwalPelajaranCountOrderByAggregateInput
    _max?: JadwalPelajaranMaxOrderByAggregateInput
    _min?: JadwalPelajaranMinOrderByAggregateInput
  }

  export type JadwalPelajaranScalarWhereWithAggregatesInput = {
    AND?: JadwalPelajaranScalarWhereWithAggregatesInput | JadwalPelajaranScalarWhereWithAggregatesInput[]
    OR?: JadwalPelajaranScalarWhereWithAggregatesInput[]
    NOT?: JadwalPelajaranScalarWhereWithAggregatesInput | JadwalPelajaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JadwalPelajaran"> | string
    hari?: StringWithAggregatesFilter<"JadwalPelajaran"> | string
    jamMulai?: DateTimeWithAggregatesFilter<"JadwalPelajaran"> | Date | string
    jamSelesai?: DateTimeWithAggregatesFilter<"JadwalPelajaran"> | Date | string
    kelasId?: StringWithAggregatesFilter<"JadwalPelajaran"> | string
    mapelId?: StringWithAggregatesFilter<"JadwalPelajaran"> | string
    guruId?: StringWithAggregatesFilter<"JadwalPelajaran"> | string
  }

  export type AbsenHarianWhereInput = {
    AND?: AbsenHarianWhereInput | AbsenHarianWhereInput[]
    OR?: AbsenHarianWhereInput[]
    NOT?: AbsenHarianWhereInput | AbsenHarianWhereInput[]
    id?: StringFilter<"AbsenHarian"> | string
    tanggal?: DateTimeFilter<"AbsenHarian"> | Date | string
    jamMasuk?: DateTimeNullableFilter<"AbsenHarian"> | Date | string | null
    jamPulang?: DateTimeNullableFilter<"AbsenHarian"> | Date | string | null
    status?: EnumStatusHarianFilter<"AbsenHarian"> | $Enums.StatusHarian
    siswaId?: StringFilter<"AbsenHarian"> | string
    siswa?: XOR<SiswaScalarRelationFilter, SiswaWhereInput>
  }

  export type AbsenHarianOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jamMasuk?: SortOrderInput | SortOrder
    jamPulang?: SortOrderInput | SortOrder
    status?: SortOrder
    siswaId?: SortOrder
    siswa?: SiswaOrderByWithRelationInput
  }

  export type AbsenHarianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siswaId_tanggal?: AbsenHarianSiswaIdTanggalCompoundUniqueInput
    AND?: AbsenHarianWhereInput | AbsenHarianWhereInput[]
    OR?: AbsenHarianWhereInput[]
    NOT?: AbsenHarianWhereInput | AbsenHarianWhereInput[]
    tanggal?: DateTimeFilter<"AbsenHarian"> | Date | string
    jamMasuk?: DateTimeNullableFilter<"AbsenHarian"> | Date | string | null
    jamPulang?: DateTimeNullableFilter<"AbsenHarian"> | Date | string | null
    status?: EnumStatusHarianFilter<"AbsenHarian"> | $Enums.StatusHarian
    siswaId?: StringFilter<"AbsenHarian"> | string
    siswa?: XOR<SiswaScalarRelationFilter, SiswaWhereInput>
  }, "id" | "siswaId_tanggal">

  export type AbsenHarianOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jamMasuk?: SortOrderInput | SortOrder
    jamPulang?: SortOrderInput | SortOrder
    status?: SortOrder
    siswaId?: SortOrder
    _count?: AbsenHarianCountOrderByAggregateInput
    _max?: AbsenHarianMaxOrderByAggregateInput
    _min?: AbsenHarianMinOrderByAggregateInput
  }

  export type AbsenHarianScalarWhereWithAggregatesInput = {
    AND?: AbsenHarianScalarWhereWithAggregatesInput | AbsenHarianScalarWhereWithAggregatesInput[]
    OR?: AbsenHarianScalarWhereWithAggregatesInput[]
    NOT?: AbsenHarianScalarWhereWithAggregatesInput | AbsenHarianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AbsenHarian"> | string
    tanggal?: DateTimeWithAggregatesFilter<"AbsenHarian"> | Date | string
    jamMasuk?: DateTimeNullableWithAggregatesFilter<"AbsenHarian"> | Date | string | null
    jamPulang?: DateTimeNullableWithAggregatesFilter<"AbsenHarian"> | Date | string | null
    status?: EnumStatusHarianWithAggregatesFilter<"AbsenHarian"> | $Enums.StatusHarian
    siswaId?: StringWithAggregatesFilter<"AbsenHarian"> | string
  }

  export type AbsenMapelWhereInput = {
    AND?: AbsenMapelWhereInput | AbsenMapelWhereInput[]
    OR?: AbsenMapelWhereInput[]
    NOT?: AbsenMapelWhereInput | AbsenMapelWhereInput[]
    id?: StringFilter<"AbsenMapel"> | string
    tanggal?: DateTimeFilter<"AbsenMapel"> | Date | string
    status?: EnumStatusMapelFilter<"AbsenMapel"> | $Enums.StatusMapel
    keterangan?: StringNullableFilter<"AbsenMapel"> | string | null
    hari?: StringFilter<"AbsenMapel"> | string
    jamMulai?: DateTimeFilter<"AbsenMapel"> | Date | string
    jamSelesai?: DateTimeFilter<"AbsenMapel"> | Date | string
    siswaId?: StringFilter<"AbsenMapel"> | string
    jadwalId?: StringFilter<"AbsenMapel"> | string
    jadwal?: XOR<JadwalPelajaranScalarRelationFilter, JadwalPelajaranWhereInput>
    siswa?: XOR<SiswaScalarRelationFilter, SiswaWhereInput>
  }

  export type AbsenMapelOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    siswaId?: SortOrder
    jadwalId?: SortOrder
    jadwal?: JadwalPelajaranOrderByWithRelationInput
    siswa?: SiswaOrderByWithRelationInput
  }

  export type AbsenMapelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    siswaId_jadwalId_tanggal?: AbsenMapelSiswaIdJadwalIdTanggalCompoundUniqueInput
    AND?: AbsenMapelWhereInput | AbsenMapelWhereInput[]
    OR?: AbsenMapelWhereInput[]
    NOT?: AbsenMapelWhereInput | AbsenMapelWhereInput[]
    tanggal?: DateTimeFilter<"AbsenMapel"> | Date | string
    status?: EnumStatusMapelFilter<"AbsenMapel"> | $Enums.StatusMapel
    keterangan?: StringNullableFilter<"AbsenMapel"> | string | null
    hari?: StringFilter<"AbsenMapel"> | string
    jamMulai?: DateTimeFilter<"AbsenMapel"> | Date | string
    jamSelesai?: DateTimeFilter<"AbsenMapel"> | Date | string
    siswaId?: StringFilter<"AbsenMapel"> | string
    jadwalId?: StringFilter<"AbsenMapel"> | string
    jadwal?: XOR<JadwalPelajaranScalarRelationFilter, JadwalPelajaranWhereInput>
    siswa?: XOR<SiswaScalarRelationFilter, SiswaWhereInput>
  }, "id" | "siswaId_jadwalId_tanggal">

  export type AbsenMapelOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    siswaId?: SortOrder
    jadwalId?: SortOrder
    _count?: AbsenMapelCountOrderByAggregateInput
    _max?: AbsenMapelMaxOrderByAggregateInput
    _min?: AbsenMapelMinOrderByAggregateInput
  }

  export type AbsenMapelScalarWhereWithAggregatesInput = {
    AND?: AbsenMapelScalarWhereWithAggregatesInput | AbsenMapelScalarWhereWithAggregatesInput[]
    OR?: AbsenMapelScalarWhereWithAggregatesInput[]
    NOT?: AbsenMapelScalarWhereWithAggregatesInput | AbsenMapelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AbsenMapel"> | string
    tanggal?: DateTimeWithAggregatesFilter<"AbsenMapel"> | Date | string
    status?: EnumStatusMapelWithAggregatesFilter<"AbsenMapel"> | $Enums.StatusMapel
    keterangan?: StringNullableWithAggregatesFilter<"AbsenMapel"> | string | null
    hari?: StringWithAggregatesFilter<"AbsenMapel"> | string
    jamMulai?: DateTimeWithAggregatesFilter<"AbsenMapel"> | Date | string
    jamSelesai?: DateTimeWithAggregatesFilter<"AbsenMapel"> | Date | string
    siswaId?: StringWithAggregatesFilter<"AbsenMapel"> | string
    jadwalId?: StringWithAggregatesFilter<"AbsenMapel"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    guruProfil?: GuruCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    guruProfil?: GuruUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    guruProfil?: GuruUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    guruProfil?: GuruUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuruCreateInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    user?: UserCreateNestedOneWithoutGuruProfilInput
    mengajarDiJadwal?: JadwalPelajaranCreateNestedManyWithoutGuruInput
    waliDiKelas?: KelasCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruUncheckedCreateInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    userId?: string | null
    mengajarDiJadwal?: JadwalPelajaranUncheckedCreateNestedManyWithoutGuruInput
    waliDiKelas?: KelasUncheckedCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutGuruProfilNestedInput
    mengajarDiJadwal?: JadwalPelajaranUpdateManyWithoutGuruNestedInput
    waliDiKelas?: KelasUpdateOneWithoutWaliKelasNestedInput
  }

  export type GuruUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mengajarDiJadwal?: JadwalPelajaranUncheckedUpdateManyWithoutGuruNestedInput
    waliDiKelas?: KelasUncheckedUpdateOneWithoutWaliKelasNestedInput
  }

  export type GuruCreateManyInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    userId?: string | null
  }

  export type GuruUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuruUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiswaCreateInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    absenHarian?: AbsenHarianCreateNestedManyWithoutSiswaInput
    absenMapel?: AbsenMapelCreateNestedManyWithoutSiswaInput
    kelas: KelasCreateNestedOneWithoutSiswaInput
  }

  export type SiswaUncheckedCreateInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    kelasId: string
    absenHarian?: AbsenHarianUncheckedCreateNestedManyWithoutSiswaInput
    absenMapel?: AbsenMapelUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type SiswaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    absenHarian?: AbsenHarianUpdateManyWithoutSiswaNestedInput
    absenMapel?: AbsenMapelUpdateManyWithoutSiswaNestedInput
    kelas?: KelasUpdateOneRequiredWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    kelasId?: StringFieldUpdateOperationsInput | string
    absenHarian?: AbsenHarianUncheckedUpdateManyWithoutSiswaNestedInput
    absenMapel?: AbsenMapelUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type SiswaCreateManyInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    kelasId: string
  }

  export type SiswaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
  }

  export type SiswaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    kelasId?: StringFieldUpdateOperationsInput | string
  }

  export type KelasCreateInput = {
    id?: string
    nama: string
    jadwal?: JadwalPelajaranCreateNestedManyWithoutKelasInput
    waliKelas?: GuruCreateNestedOneWithoutWaliDiKelasInput
    siswa?: SiswaCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateInput = {
    id?: string
    nama: string
    waliKelasId?: string | null
    jadwal?: JadwalPelajaranUncheckedCreateNestedManyWithoutKelasInput
    siswa?: SiswaUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: JadwalPelajaranUpdateManyWithoutKelasNestedInput
    waliKelas?: GuruUpdateOneWithoutWaliDiKelasNestedInput
    siswa?: SiswaUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: JadwalPelajaranUncheckedUpdateManyWithoutKelasNestedInput
    siswa?: SiswaUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type KelasCreateManyInput = {
    id?: string
    nama: string
    waliKelasId?: string | null
  }

  export type KelasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type KelasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MataPelajaranCreateInput = {
    id?: string
    kode: string
    nama: string
    jadwal?: JadwalPelajaranCreateNestedManyWithoutMapelInput
  }

  export type MataPelajaranUncheckedCreateInput = {
    id?: string
    kode: string
    nama: string
    jadwal?: JadwalPelajaranUncheckedCreateNestedManyWithoutMapelInput
  }

  export type MataPelajaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: JadwalPelajaranUpdateManyWithoutMapelNestedInput
  }

  export type MataPelajaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: JadwalPelajaranUncheckedUpdateManyWithoutMapelNestedInput
  }

  export type MataPelajaranCreateManyInput = {
    id?: string
    kode: string
    nama: string
  }

  export type MataPelajaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type MataPelajaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type JadwalPelajaranCreateInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    absenMapel?: AbsenMapelCreateNestedManyWithoutJadwalInput
    guru: GuruCreateNestedOneWithoutMengajarDiJadwalInput
    kelas: KelasCreateNestedOneWithoutJadwalInput
    mapel: MataPelajaranCreateNestedOneWithoutJadwalInput
  }

  export type JadwalPelajaranUncheckedCreateInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    kelasId: string
    mapelId: string
    guruId: string
    absenMapel?: AbsenMapelUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalPelajaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    absenMapel?: AbsenMapelUpdateManyWithoutJadwalNestedInput
    guru?: GuruUpdateOneRequiredWithoutMengajarDiJadwalNestedInput
    kelas?: KelasUpdateOneRequiredWithoutJadwalNestedInput
    mapel?: MataPelajaranUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    guruId?: StringFieldUpdateOperationsInput | string
    absenMapel?: AbsenMapelUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalPelajaranCreateManyInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    kelasId: string
    mapelId: string
    guruId: string
  }

  export type JadwalPelajaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalPelajaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    guruId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenHarianCreateInput = {
    id?: string
    tanggal: Date | string
    jamMasuk?: Date | string | null
    jamPulang?: Date | string | null
    status?: $Enums.StatusHarian
    siswa: SiswaCreateNestedOneWithoutAbsenHarianInput
  }

  export type AbsenHarianUncheckedCreateInput = {
    id?: string
    tanggal: Date | string
    jamMasuk?: Date | string | null
    jamPulang?: Date | string | null
    status?: $Enums.StatusHarian
    siswaId: string
  }

  export type AbsenHarianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMasuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusHarianFieldUpdateOperationsInput | $Enums.StatusHarian
    siswa?: SiswaUpdateOneRequiredWithoutAbsenHarianNestedInput
  }

  export type AbsenHarianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMasuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusHarianFieldUpdateOperationsInput | $Enums.StatusHarian
    siswaId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenHarianCreateManyInput = {
    id?: string
    tanggal: Date | string
    jamMasuk?: Date | string | null
    jamPulang?: Date | string | null
    status?: $Enums.StatusHarian
    siswaId: string
  }

  export type AbsenHarianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMasuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusHarianFieldUpdateOperationsInput | $Enums.StatusHarian
  }

  export type AbsenHarianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMasuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusHarianFieldUpdateOperationsInput | $Enums.StatusHarian
    siswaId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenMapelCreateInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    jadwal: JadwalPelajaranCreateNestedOneWithoutAbsenMapelInput
    siswa: SiswaCreateNestedOneWithoutAbsenMapelInput
  }

  export type AbsenMapelUncheckedCreateInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    siswaId: string
    jadwalId: string
  }

  export type AbsenMapelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalPelajaranUpdateOneRequiredWithoutAbsenMapelNestedInput
    siswa?: SiswaUpdateOneRequiredWithoutAbsenMapelNestedInput
  }

  export type AbsenMapelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    siswaId?: StringFieldUpdateOperationsInput | string
    jadwalId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenMapelCreateManyInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    siswaId: string
    jadwalId: string
  }

  export type AbsenMapelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsenMapelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    siswaId?: StringFieldUpdateOperationsInput | string
    jadwalId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type GuruNullableScalarRelationFilter = {
    is?: GuruWhereInput | null
    isNot?: GuruWhereInput | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type JadwalPelajaranListRelationFilter = {
    every?: JadwalPelajaranWhereInput
    some?: JadwalPelajaranWhereInput
    none?: JadwalPelajaranWhereInput
  }

  export type KelasNullableScalarRelationFilter = {
    is?: KelasWhereInput | null
    isNot?: KelasWhereInput | null
  }

  export type JadwalPelajaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuruCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    nip?: SortOrder
    nuptk?: SortOrder
    gender?: SortOrder
    isPiket?: SortOrder
    userId?: SortOrder
  }

  export type GuruMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    nip?: SortOrder
    nuptk?: SortOrder
    gender?: SortOrder
    isPiket?: SortOrder
    userId?: SortOrder
  }

  export type GuruMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kode?: SortOrder
    nip?: SortOrder
    nuptk?: SortOrder
    gender?: SortOrder
    isPiket?: SortOrder
    userId?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AbsenHarianListRelationFilter = {
    every?: AbsenHarianWhereInput
    some?: AbsenHarianWhereInput
    none?: AbsenHarianWhereInput
  }

  export type AbsenMapelListRelationFilter = {
    every?: AbsenMapelWhereInput
    some?: AbsenMapelWhereInput
    none?: AbsenMapelWhereInput
  }

  export type KelasScalarRelationFilter = {
    is?: KelasWhereInput
    isNot?: KelasWhereInput
  }

  export type AbsenHarianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbsenMapelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiswaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nisn?: SortOrder
    kode?: SortOrder
    gender?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nisn?: SortOrder
    kode?: SortOrder
    gender?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nisn?: SortOrder
    kode?: SortOrder
    gender?: SortOrder
    kelasId?: SortOrder
  }

  export type SiswaListRelationFilter = {
    every?: SiswaWhereInput
    some?: SiswaWhereInput
    none?: SiswaWhereInput
  }

  export type SiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KelasCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    waliKelasId?: SortOrder
  }

  export type KelasMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    waliKelasId?: SortOrder
  }

  export type KelasMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    waliKelasId?: SortOrder
  }

  export type MataPelajaranCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
  }

  export type MataPelajaranMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
  }

  export type MataPelajaranMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
  }

  export type GuruScalarRelationFilter = {
    is?: GuruWhereInput
    isNot?: GuruWhereInput
  }

  export type MataPelajaranScalarRelationFilter = {
    is?: MataPelajaranWhereInput
    isNot?: MataPelajaranWhereInput
  }

  export type JadwalPelajaranCountOrderByAggregateInput = {
    id?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    kelasId?: SortOrder
    mapelId?: SortOrder
    guruId?: SortOrder
  }

  export type JadwalPelajaranMaxOrderByAggregateInput = {
    id?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    kelasId?: SortOrder
    mapelId?: SortOrder
    guruId?: SortOrder
  }

  export type JadwalPelajaranMinOrderByAggregateInput = {
    id?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    kelasId?: SortOrder
    mapelId?: SortOrder
    guruId?: SortOrder
  }

  export type EnumStatusHarianFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusHarian | EnumStatusHarianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusHarianFilter<$PrismaModel> | $Enums.StatusHarian
  }

  export type SiswaScalarRelationFilter = {
    is?: SiswaWhereInput
    isNot?: SiswaWhereInput
  }

  export type AbsenHarianSiswaIdTanggalCompoundUniqueInput = {
    siswaId: string
    tanggal: Date | string
  }

  export type AbsenHarianCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    status?: SortOrder
    siswaId?: SortOrder
  }

  export type AbsenHarianMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    status?: SortOrder
    siswaId?: SortOrder
  }

  export type AbsenHarianMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    jamMasuk?: SortOrder
    jamPulang?: SortOrder
    status?: SortOrder
    siswaId?: SortOrder
  }

  export type EnumStatusHarianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusHarian | EnumStatusHarianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusHarianWithAggregatesFilter<$PrismaModel> | $Enums.StatusHarian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusHarianFilter<$PrismaModel>
    _max?: NestedEnumStatusHarianFilter<$PrismaModel>
  }

  export type EnumStatusMapelFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMapel | EnumStatusMapelFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMapelFilter<$PrismaModel> | $Enums.StatusMapel
  }

  export type JadwalPelajaranScalarRelationFilter = {
    is?: JadwalPelajaranWhereInput
    isNot?: JadwalPelajaranWhereInput
  }

  export type AbsenMapelSiswaIdJadwalIdTanggalCompoundUniqueInput = {
    siswaId: string
    jadwalId: string
    tanggal: Date | string
  }

  export type AbsenMapelCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    siswaId?: SortOrder
    jadwalId?: SortOrder
  }

  export type AbsenMapelMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    siswaId?: SortOrder
    jadwalId?: SortOrder
  }

  export type AbsenMapelMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    siswaId?: SortOrder
    jadwalId?: SortOrder
  }

  export type EnumStatusMapelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMapel | EnumStatusMapelFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMapelWithAggregatesFilter<$PrismaModel> | $Enums.StatusMapel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMapelFilter<$PrismaModel>
    _max?: NestedEnumStatusMapelFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type GuruCreateNestedOneWithoutUserInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    connect?: GuruWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type GuruUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    connect?: GuruWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type GuruUpdateOneWithoutUserNestedInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    upsert?: GuruUpsertWithoutUserInput
    disconnect?: GuruWhereInput | boolean
    delete?: GuruWhereInput | boolean
    connect?: GuruWhereUniqueInput
    update?: XOR<XOR<GuruUpdateToOneWithWhereWithoutUserInput, GuruUpdateWithoutUserInput>, GuruUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type GuruUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuruCreateOrConnectWithoutUserInput
    upsert?: GuruUpsertWithoutUserInput
    disconnect?: GuruWhereInput | boolean
    delete?: GuruWhereInput | boolean
    connect?: GuruWhereUniqueInput
    update?: XOR<XOR<GuruUpdateToOneWithWhereWithoutUserInput, GuruUpdateWithoutUserInput>, GuruUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutGuruProfilInput = {
    create?: XOR<UserCreateWithoutGuruProfilInput, UserUncheckedCreateWithoutGuruProfilInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruProfilInput
    connect?: UserWhereUniqueInput
  }

  export type JadwalPelajaranCreateNestedManyWithoutGuruInput = {
    create?: XOR<JadwalPelajaranCreateWithoutGuruInput, JadwalPelajaranUncheckedCreateWithoutGuruInput> | JadwalPelajaranCreateWithoutGuruInput[] | JadwalPelajaranUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutGuruInput | JadwalPelajaranCreateOrConnectWithoutGuruInput[]
    createMany?: JadwalPelajaranCreateManyGuruInputEnvelope
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
  }

  export type KelasCreateNestedOneWithoutWaliKelasInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    connect?: KelasWhereUniqueInput
  }

  export type JadwalPelajaranUncheckedCreateNestedManyWithoutGuruInput = {
    create?: XOR<JadwalPelajaranCreateWithoutGuruInput, JadwalPelajaranUncheckedCreateWithoutGuruInput> | JadwalPelajaranCreateWithoutGuruInput[] | JadwalPelajaranUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutGuruInput | JadwalPelajaranCreateOrConnectWithoutGuruInput[]
    createMany?: JadwalPelajaranCreateManyGuruInputEnvelope
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
  }

  export type KelasUncheckedCreateNestedOneWithoutWaliKelasInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    connect?: KelasWhereUniqueInput
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutGuruProfilNestedInput = {
    create?: XOR<UserCreateWithoutGuruProfilInput, UserUncheckedCreateWithoutGuruProfilInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuruProfilInput
    upsert?: UserUpsertWithoutGuruProfilInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuruProfilInput, UserUpdateWithoutGuruProfilInput>, UserUncheckedUpdateWithoutGuruProfilInput>
  }

  export type JadwalPelajaranUpdateManyWithoutGuruNestedInput = {
    create?: XOR<JadwalPelajaranCreateWithoutGuruInput, JadwalPelajaranUncheckedCreateWithoutGuruInput> | JadwalPelajaranCreateWithoutGuruInput[] | JadwalPelajaranUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutGuruInput | JadwalPelajaranCreateOrConnectWithoutGuruInput[]
    upsert?: JadwalPelajaranUpsertWithWhereUniqueWithoutGuruInput | JadwalPelajaranUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: JadwalPelajaranCreateManyGuruInputEnvelope
    set?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    disconnect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    delete?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    update?: JadwalPelajaranUpdateWithWhereUniqueWithoutGuruInput | JadwalPelajaranUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: JadwalPelajaranUpdateManyWithWhereWithoutGuruInput | JadwalPelajaranUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
  }

  export type KelasUpdateOneWithoutWaliKelasNestedInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    upsert?: KelasUpsertWithoutWaliKelasInput
    disconnect?: KelasWhereInput | boolean
    delete?: KelasWhereInput | boolean
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutWaliKelasInput, KelasUpdateWithoutWaliKelasInput>, KelasUncheckedUpdateWithoutWaliKelasInput>
  }

  export type JadwalPelajaranUncheckedUpdateManyWithoutGuruNestedInput = {
    create?: XOR<JadwalPelajaranCreateWithoutGuruInput, JadwalPelajaranUncheckedCreateWithoutGuruInput> | JadwalPelajaranCreateWithoutGuruInput[] | JadwalPelajaranUncheckedCreateWithoutGuruInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutGuruInput | JadwalPelajaranCreateOrConnectWithoutGuruInput[]
    upsert?: JadwalPelajaranUpsertWithWhereUniqueWithoutGuruInput | JadwalPelajaranUpsertWithWhereUniqueWithoutGuruInput[]
    createMany?: JadwalPelajaranCreateManyGuruInputEnvelope
    set?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    disconnect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    delete?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    update?: JadwalPelajaranUpdateWithWhereUniqueWithoutGuruInput | JadwalPelajaranUpdateWithWhereUniqueWithoutGuruInput[]
    updateMany?: JadwalPelajaranUpdateManyWithWhereWithoutGuruInput | JadwalPelajaranUpdateManyWithWhereWithoutGuruInput[]
    deleteMany?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
  }

  export type KelasUncheckedUpdateOneWithoutWaliKelasNestedInput = {
    create?: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    connectOrCreate?: KelasCreateOrConnectWithoutWaliKelasInput
    upsert?: KelasUpsertWithoutWaliKelasInput
    disconnect?: KelasWhereInput | boolean
    delete?: KelasWhereInput | boolean
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutWaliKelasInput, KelasUpdateWithoutWaliKelasInput>, KelasUncheckedUpdateWithoutWaliKelasInput>
  }

  export type AbsenHarianCreateNestedManyWithoutSiswaInput = {
    create?: XOR<AbsenHarianCreateWithoutSiswaInput, AbsenHarianUncheckedCreateWithoutSiswaInput> | AbsenHarianCreateWithoutSiswaInput[] | AbsenHarianUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenHarianCreateOrConnectWithoutSiswaInput | AbsenHarianCreateOrConnectWithoutSiswaInput[]
    createMany?: AbsenHarianCreateManySiswaInputEnvelope
    connect?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
  }

  export type AbsenMapelCreateNestedManyWithoutSiswaInput = {
    create?: XOR<AbsenMapelCreateWithoutSiswaInput, AbsenMapelUncheckedCreateWithoutSiswaInput> | AbsenMapelCreateWithoutSiswaInput[] | AbsenMapelUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutSiswaInput | AbsenMapelCreateOrConnectWithoutSiswaInput[]
    createMany?: AbsenMapelCreateManySiswaInputEnvelope
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
  }

  export type KelasCreateNestedOneWithoutSiswaInput = {
    create?: XOR<KelasCreateWithoutSiswaInput, KelasUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: KelasCreateOrConnectWithoutSiswaInput
    connect?: KelasWhereUniqueInput
  }

  export type AbsenHarianUncheckedCreateNestedManyWithoutSiswaInput = {
    create?: XOR<AbsenHarianCreateWithoutSiswaInput, AbsenHarianUncheckedCreateWithoutSiswaInput> | AbsenHarianCreateWithoutSiswaInput[] | AbsenHarianUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenHarianCreateOrConnectWithoutSiswaInput | AbsenHarianCreateOrConnectWithoutSiswaInput[]
    createMany?: AbsenHarianCreateManySiswaInputEnvelope
    connect?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
  }

  export type AbsenMapelUncheckedCreateNestedManyWithoutSiswaInput = {
    create?: XOR<AbsenMapelCreateWithoutSiswaInput, AbsenMapelUncheckedCreateWithoutSiswaInput> | AbsenMapelCreateWithoutSiswaInput[] | AbsenMapelUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutSiswaInput | AbsenMapelCreateOrConnectWithoutSiswaInput[]
    createMany?: AbsenMapelCreateManySiswaInputEnvelope
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
  }

  export type AbsenHarianUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<AbsenHarianCreateWithoutSiswaInput, AbsenHarianUncheckedCreateWithoutSiswaInput> | AbsenHarianCreateWithoutSiswaInput[] | AbsenHarianUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenHarianCreateOrConnectWithoutSiswaInput | AbsenHarianCreateOrConnectWithoutSiswaInput[]
    upsert?: AbsenHarianUpsertWithWhereUniqueWithoutSiswaInput | AbsenHarianUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: AbsenHarianCreateManySiswaInputEnvelope
    set?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    disconnect?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    delete?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    connect?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    update?: AbsenHarianUpdateWithWhereUniqueWithoutSiswaInput | AbsenHarianUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: AbsenHarianUpdateManyWithWhereWithoutSiswaInput | AbsenHarianUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: AbsenHarianScalarWhereInput | AbsenHarianScalarWhereInput[]
  }

  export type AbsenMapelUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<AbsenMapelCreateWithoutSiswaInput, AbsenMapelUncheckedCreateWithoutSiswaInput> | AbsenMapelCreateWithoutSiswaInput[] | AbsenMapelUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutSiswaInput | AbsenMapelCreateOrConnectWithoutSiswaInput[]
    upsert?: AbsenMapelUpsertWithWhereUniqueWithoutSiswaInput | AbsenMapelUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: AbsenMapelCreateManySiswaInputEnvelope
    set?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    disconnect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    delete?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    update?: AbsenMapelUpdateWithWhereUniqueWithoutSiswaInput | AbsenMapelUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: AbsenMapelUpdateManyWithWhereWithoutSiswaInput | AbsenMapelUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: AbsenMapelScalarWhereInput | AbsenMapelScalarWhereInput[]
  }

  export type KelasUpdateOneRequiredWithoutSiswaNestedInput = {
    create?: XOR<KelasCreateWithoutSiswaInput, KelasUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: KelasCreateOrConnectWithoutSiswaInput
    upsert?: KelasUpsertWithoutSiswaInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutSiswaInput, KelasUpdateWithoutSiswaInput>, KelasUncheckedUpdateWithoutSiswaInput>
  }

  export type AbsenHarianUncheckedUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<AbsenHarianCreateWithoutSiswaInput, AbsenHarianUncheckedCreateWithoutSiswaInput> | AbsenHarianCreateWithoutSiswaInput[] | AbsenHarianUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenHarianCreateOrConnectWithoutSiswaInput | AbsenHarianCreateOrConnectWithoutSiswaInput[]
    upsert?: AbsenHarianUpsertWithWhereUniqueWithoutSiswaInput | AbsenHarianUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: AbsenHarianCreateManySiswaInputEnvelope
    set?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    disconnect?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    delete?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    connect?: AbsenHarianWhereUniqueInput | AbsenHarianWhereUniqueInput[]
    update?: AbsenHarianUpdateWithWhereUniqueWithoutSiswaInput | AbsenHarianUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: AbsenHarianUpdateManyWithWhereWithoutSiswaInput | AbsenHarianUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: AbsenHarianScalarWhereInput | AbsenHarianScalarWhereInput[]
  }

  export type AbsenMapelUncheckedUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<AbsenMapelCreateWithoutSiswaInput, AbsenMapelUncheckedCreateWithoutSiswaInput> | AbsenMapelCreateWithoutSiswaInput[] | AbsenMapelUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutSiswaInput | AbsenMapelCreateOrConnectWithoutSiswaInput[]
    upsert?: AbsenMapelUpsertWithWhereUniqueWithoutSiswaInput | AbsenMapelUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: AbsenMapelCreateManySiswaInputEnvelope
    set?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    disconnect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    delete?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    update?: AbsenMapelUpdateWithWhereUniqueWithoutSiswaInput | AbsenMapelUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: AbsenMapelUpdateManyWithWhereWithoutSiswaInput | AbsenMapelUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: AbsenMapelScalarWhereInput | AbsenMapelScalarWhereInput[]
  }

  export type JadwalPelajaranCreateNestedManyWithoutKelasInput = {
    create?: XOR<JadwalPelajaranCreateWithoutKelasInput, JadwalPelajaranUncheckedCreateWithoutKelasInput> | JadwalPelajaranCreateWithoutKelasInput[] | JadwalPelajaranUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutKelasInput | JadwalPelajaranCreateOrConnectWithoutKelasInput[]
    createMany?: JadwalPelajaranCreateManyKelasInputEnvelope
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
  }

  export type GuruCreateNestedOneWithoutWaliDiKelasInput = {
    create?: XOR<GuruCreateWithoutWaliDiKelasInput, GuruUncheckedCreateWithoutWaliDiKelasInput>
    connectOrCreate?: GuruCreateOrConnectWithoutWaliDiKelasInput
    connect?: GuruWhereUniqueInput
  }

  export type SiswaCreateNestedManyWithoutKelasInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
  }

  export type JadwalPelajaranUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<JadwalPelajaranCreateWithoutKelasInput, JadwalPelajaranUncheckedCreateWithoutKelasInput> | JadwalPelajaranCreateWithoutKelasInput[] | JadwalPelajaranUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutKelasInput | JadwalPelajaranCreateOrConnectWithoutKelasInput[]
    createMany?: JadwalPelajaranCreateManyKelasInputEnvelope
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
  }

  export type SiswaUncheckedCreateNestedManyWithoutKelasInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
  }

  export type JadwalPelajaranUpdateManyWithoutKelasNestedInput = {
    create?: XOR<JadwalPelajaranCreateWithoutKelasInput, JadwalPelajaranUncheckedCreateWithoutKelasInput> | JadwalPelajaranCreateWithoutKelasInput[] | JadwalPelajaranUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutKelasInput | JadwalPelajaranCreateOrConnectWithoutKelasInput[]
    upsert?: JadwalPelajaranUpsertWithWhereUniqueWithoutKelasInput | JadwalPelajaranUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: JadwalPelajaranCreateManyKelasInputEnvelope
    set?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    disconnect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    delete?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    update?: JadwalPelajaranUpdateWithWhereUniqueWithoutKelasInput | JadwalPelajaranUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: JadwalPelajaranUpdateManyWithWhereWithoutKelasInput | JadwalPelajaranUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
  }

  export type GuruUpdateOneWithoutWaliDiKelasNestedInput = {
    create?: XOR<GuruCreateWithoutWaliDiKelasInput, GuruUncheckedCreateWithoutWaliDiKelasInput>
    connectOrCreate?: GuruCreateOrConnectWithoutWaliDiKelasInput
    upsert?: GuruUpsertWithoutWaliDiKelasInput
    disconnect?: GuruWhereInput | boolean
    delete?: GuruWhereInput | boolean
    connect?: GuruWhereUniqueInput
    update?: XOR<XOR<GuruUpdateToOneWithWhereWithoutWaliDiKelasInput, GuruUpdateWithoutWaliDiKelasInput>, GuruUncheckedUpdateWithoutWaliDiKelasInput>
  }

  export type SiswaUpdateManyWithoutKelasNestedInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    upsert?: SiswaUpsertWithWhereUniqueWithoutKelasInput | SiswaUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    set?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    disconnect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    delete?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    update?: SiswaUpdateWithWhereUniqueWithoutKelasInput | SiswaUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: SiswaUpdateManyWithWhereWithoutKelasInput | SiswaUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
  }

  export type JadwalPelajaranUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<JadwalPelajaranCreateWithoutKelasInput, JadwalPelajaranUncheckedCreateWithoutKelasInput> | JadwalPelajaranCreateWithoutKelasInput[] | JadwalPelajaranUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutKelasInput | JadwalPelajaranCreateOrConnectWithoutKelasInput[]
    upsert?: JadwalPelajaranUpsertWithWhereUniqueWithoutKelasInput | JadwalPelajaranUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: JadwalPelajaranCreateManyKelasInputEnvelope
    set?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    disconnect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    delete?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    update?: JadwalPelajaranUpdateWithWhereUniqueWithoutKelasInput | JadwalPelajaranUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: JadwalPelajaranUpdateManyWithWhereWithoutKelasInput | JadwalPelajaranUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
  }

  export type SiswaUncheckedUpdateManyWithoutKelasNestedInput = {
    create?: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput> | SiswaCreateWithoutKelasInput[] | SiswaUncheckedCreateWithoutKelasInput[]
    connectOrCreate?: SiswaCreateOrConnectWithoutKelasInput | SiswaCreateOrConnectWithoutKelasInput[]
    upsert?: SiswaUpsertWithWhereUniqueWithoutKelasInput | SiswaUpsertWithWhereUniqueWithoutKelasInput[]
    createMany?: SiswaCreateManyKelasInputEnvelope
    set?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    disconnect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    delete?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    connect?: SiswaWhereUniqueInput | SiswaWhereUniqueInput[]
    update?: SiswaUpdateWithWhereUniqueWithoutKelasInput | SiswaUpdateWithWhereUniqueWithoutKelasInput[]
    updateMany?: SiswaUpdateManyWithWhereWithoutKelasInput | SiswaUpdateManyWithWhereWithoutKelasInput[]
    deleteMany?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
  }

  export type JadwalPelajaranCreateNestedManyWithoutMapelInput = {
    create?: XOR<JadwalPelajaranCreateWithoutMapelInput, JadwalPelajaranUncheckedCreateWithoutMapelInput> | JadwalPelajaranCreateWithoutMapelInput[] | JadwalPelajaranUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutMapelInput | JadwalPelajaranCreateOrConnectWithoutMapelInput[]
    createMany?: JadwalPelajaranCreateManyMapelInputEnvelope
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
  }

  export type JadwalPelajaranUncheckedCreateNestedManyWithoutMapelInput = {
    create?: XOR<JadwalPelajaranCreateWithoutMapelInput, JadwalPelajaranUncheckedCreateWithoutMapelInput> | JadwalPelajaranCreateWithoutMapelInput[] | JadwalPelajaranUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutMapelInput | JadwalPelajaranCreateOrConnectWithoutMapelInput[]
    createMany?: JadwalPelajaranCreateManyMapelInputEnvelope
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
  }

  export type JadwalPelajaranUpdateManyWithoutMapelNestedInput = {
    create?: XOR<JadwalPelajaranCreateWithoutMapelInput, JadwalPelajaranUncheckedCreateWithoutMapelInput> | JadwalPelajaranCreateWithoutMapelInput[] | JadwalPelajaranUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutMapelInput | JadwalPelajaranCreateOrConnectWithoutMapelInput[]
    upsert?: JadwalPelajaranUpsertWithWhereUniqueWithoutMapelInput | JadwalPelajaranUpsertWithWhereUniqueWithoutMapelInput[]
    createMany?: JadwalPelajaranCreateManyMapelInputEnvelope
    set?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    disconnect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    delete?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    update?: JadwalPelajaranUpdateWithWhereUniqueWithoutMapelInput | JadwalPelajaranUpdateWithWhereUniqueWithoutMapelInput[]
    updateMany?: JadwalPelajaranUpdateManyWithWhereWithoutMapelInput | JadwalPelajaranUpdateManyWithWhereWithoutMapelInput[]
    deleteMany?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
  }

  export type JadwalPelajaranUncheckedUpdateManyWithoutMapelNestedInput = {
    create?: XOR<JadwalPelajaranCreateWithoutMapelInput, JadwalPelajaranUncheckedCreateWithoutMapelInput> | JadwalPelajaranCreateWithoutMapelInput[] | JadwalPelajaranUncheckedCreateWithoutMapelInput[]
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutMapelInput | JadwalPelajaranCreateOrConnectWithoutMapelInput[]
    upsert?: JadwalPelajaranUpsertWithWhereUniqueWithoutMapelInput | JadwalPelajaranUpsertWithWhereUniqueWithoutMapelInput[]
    createMany?: JadwalPelajaranCreateManyMapelInputEnvelope
    set?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    disconnect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    delete?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    connect?: JadwalPelajaranWhereUniqueInput | JadwalPelajaranWhereUniqueInput[]
    update?: JadwalPelajaranUpdateWithWhereUniqueWithoutMapelInput | JadwalPelajaranUpdateWithWhereUniqueWithoutMapelInput[]
    updateMany?: JadwalPelajaranUpdateManyWithWhereWithoutMapelInput | JadwalPelajaranUpdateManyWithWhereWithoutMapelInput[]
    deleteMany?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
  }

  export type AbsenMapelCreateNestedManyWithoutJadwalInput = {
    create?: XOR<AbsenMapelCreateWithoutJadwalInput, AbsenMapelUncheckedCreateWithoutJadwalInput> | AbsenMapelCreateWithoutJadwalInput[] | AbsenMapelUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutJadwalInput | AbsenMapelCreateOrConnectWithoutJadwalInput[]
    createMany?: AbsenMapelCreateManyJadwalInputEnvelope
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
  }

  export type GuruCreateNestedOneWithoutMengajarDiJadwalInput = {
    create?: XOR<GuruCreateWithoutMengajarDiJadwalInput, GuruUncheckedCreateWithoutMengajarDiJadwalInput>
    connectOrCreate?: GuruCreateOrConnectWithoutMengajarDiJadwalInput
    connect?: GuruWhereUniqueInput
  }

  export type KelasCreateNestedOneWithoutJadwalInput = {
    create?: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KelasCreateOrConnectWithoutJadwalInput
    connect?: KelasWhereUniqueInput
  }

  export type MataPelajaranCreateNestedOneWithoutJadwalInput = {
    create?: XOR<MataPelajaranCreateWithoutJadwalInput, MataPelajaranUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: MataPelajaranCreateOrConnectWithoutJadwalInput
    connect?: MataPelajaranWhereUniqueInput
  }

  export type AbsenMapelUncheckedCreateNestedManyWithoutJadwalInput = {
    create?: XOR<AbsenMapelCreateWithoutJadwalInput, AbsenMapelUncheckedCreateWithoutJadwalInput> | AbsenMapelCreateWithoutJadwalInput[] | AbsenMapelUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutJadwalInput | AbsenMapelCreateOrConnectWithoutJadwalInput[]
    createMany?: AbsenMapelCreateManyJadwalInputEnvelope
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
  }

  export type AbsenMapelUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<AbsenMapelCreateWithoutJadwalInput, AbsenMapelUncheckedCreateWithoutJadwalInput> | AbsenMapelCreateWithoutJadwalInput[] | AbsenMapelUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutJadwalInput | AbsenMapelCreateOrConnectWithoutJadwalInput[]
    upsert?: AbsenMapelUpsertWithWhereUniqueWithoutJadwalInput | AbsenMapelUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: AbsenMapelCreateManyJadwalInputEnvelope
    set?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    disconnect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    delete?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    update?: AbsenMapelUpdateWithWhereUniqueWithoutJadwalInput | AbsenMapelUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: AbsenMapelUpdateManyWithWhereWithoutJadwalInput | AbsenMapelUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: AbsenMapelScalarWhereInput | AbsenMapelScalarWhereInput[]
  }

  export type GuruUpdateOneRequiredWithoutMengajarDiJadwalNestedInput = {
    create?: XOR<GuruCreateWithoutMengajarDiJadwalInput, GuruUncheckedCreateWithoutMengajarDiJadwalInput>
    connectOrCreate?: GuruCreateOrConnectWithoutMengajarDiJadwalInput
    upsert?: GuruUpsertWithoutMengajarDiJadwalInput
    connect?: GuruWhereUniqueInput
    update?: XOR<XOR<GuruUpdateToOneWithWhereWithoutMengajarDiJadwalInput, GuruUpdateWithoutMengajarDiJadwalInput>, GuruUncheckedUpdateWithoutMengajarDiJadwalInput>
  }

  export type KelasUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KelasCreateOrConnectWithoutJadwalInput
    upsert?: KelasUpsertWithoutJadwalInput
    connect?: KelasWhereUniqueInput
    update?: XOR<XOR<KelasUpdateToOneWithWhereWithoutJadwalInput, KelasUpdateWithoutJadwalInput>, KelasUncheckedUpdateWithoutJadwalInput>
  }

  export type MataPelajaranUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<MataPelajaranCreateWithoutJadwalInput, MataPelajaranUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: MataPelajaranCreateOrConnectWithoutJadwalInput
    upsert?: MataPelajaranUpsertWithoutJadwalInput
    connect?: MataPelajaranWhereUniqueInput
    update?: XOR<XOR<MataPelajaranUpdateToOneWithWhereWithoutJadwalInput, MataPelajaranUpdateWithoutJadwalInput>, MataPelajaranUncheckedUpdateWithoutJadwalInput>
  }

  export type AbsenMapelUncheckedUpdateManyWithoutJadwalNestedInput = {
    create?: XOR<AbsenMapelCreateWithoutJadwalInput, AbsenMapelUncheckedCreateWithoutJadwalInput> | AbsenMapelCreateWithoutJadwalInput[] | AbsenMapelUncheckedCreateWithoutJadwalInput[]
    connectOrCreate?: AbsenMapelCreateOrConnectWithoutJadwalInput | AbsenMapelCreateOrConnectWithoutJadwalInput[]
    upsert?: AbsenMapelUpsertWithWhereUniqueWithoutJadwalInput | AbsenMapelUpsertWithWhereUniqueWithoutJadwalInput[]
    createMany?: AbsenMapelCreateManyJadwalInputEnvelope
    set?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    disconnect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    delete?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    connect?: AbsenMapelWhereUniqueInput | AbsenMapelWhereUniqueInput[]
    update?: AbsenMapelUpdateWithWhereUniqueWithoutJadwalInput | AbsenMapelUpdateWithWhereUniqueWithoutJadwalInput[]
    updateMany?: AbsenMapelUpdateManyWithWhereWithoutJadwalInput | AbsenMapelUpdateManyWithWhereWithoutJadwalInput[]
    deleteMany?: AbsenMapelScalarWhereInput | AbsenMapelScalarWhereInput[]
  }

  export type SiswaCreateNestedOneWithoutAbsenHarianInput = {
    create?: XOR<SiswaCreateWithoutAbsenHarianInput, SiswaUncheckedCreateWithoutAbsenHarianInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutAbsenHarianInput
    connect?: SiswaWhereUniqueInput
  }

  export type EnumStatusHarianFieldUpdateOperationsInput = {
    set?: $Enums.StatusHarian
  }

  export type SiswaUpdateOneRequiredWithoutAbsenHarianNestedInput = {
    create?: XOR<SiswaCreateWithoutAbsenHarianInput, SiswaUncheckedCreateWithoutAbsenHarianInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutAbsenHarianInput
    upsert?: SiswaUpsertWithoutAbsenHarianInput
    connect?: SiswaWhereUniqueInput
    update?: XOR<XOR<SiswaUpdateToOneWithWhereWithoutAbsenHarianInput, SiswaUpdateWithoutAbsenHarianInput>, SiswaUncheckedUpdateWithoutAbsenHarianInput>
  }

  export type JadwalPelajaranCreateNestedOneWithoutAbsenMapelInput = {
    create?: XOR<JadwalPelajaranCreateWithoutAbsenMapelInput, JadwalPelajaranUncheckedCreateWithoutAbsenMapelInput>
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutAbsenMapelInput
    connect?: JadwalPelajaranWhereUniqueInput
  }

  export type SiswaCreateNestedOneWithoutAbsenMapelInput = {
    create?: XOR<SiswaCreateWithoutAbsenMapelInput, SiswaUncheckedCreateWithoutAbsenMapelInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutAbsenMapelInput
    connect?: SiswaWhereUniqueInput
  }

  export type EnumStatusMapelFieldUpdateOperationsInput = {
    set?: $Enums.StatusMapel
  }

  export type JadwalPelajaranUpdateOneRequiredWithoutAbsenMapelNestedInput = {
    create?: XOR<JadwalPelajaranCreateWithoutAbsenMapelInput, JadwalPelajaranUncheckedCreateWithoutAbsenMapelInput>
    connectOrCreate?: JadwalPelajaranCreateOrConnectWithoutAbsenMapelInput
    upsert?: JadwalPelajaranUpsertWithoutAbsenMapelInput
    connect?: JadwalPelajaranWhereUniqueInput
    update?: XOR<XOR<JadwalPelajaranUpdateToOneWithWhereWithoutAbsenMapelInput, JadwalPelajaranUpdateWithoutAbsenMapelInput>, JadwalPelajaranUncheckedUpdateWithoutAbsenMapelInput>
  }

  export type SiswaUpdateOneRequiredWithoutAbsenMapelNestedInput = {
    create?: XOR<SiswaCreateWithoutAbsenMapelInput, SiswaUncheckedCreateWithoutAbsenMapelInput>
    connectOrCreate?: SiswaCreateOrConnectWithoutAbsenMapelInput
    upsert?: SiswaUpsertWithoutAbsenMapelInput
    connect?: SiswaWhereUniqueInput
    update?: XOR<XOR<SiswaUpdateToOneWithWhereWithoutAbsenMapelInput, SiswaUpdateWithoutAbsenMapelInput>, SiswaUncheckedUpdateWithoutAbsenMapelInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusHarianFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusHarian | EnumStatusHarianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusHarianFilter<$PrismaModel> | $Enums.StatusHarian
  }

  export type NestedEnumStatusHarianWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusHarian | EnumStatusHarianFieldRefInput<$PrismaModel>
    in?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusHarian[] | ListEnumStatusHarianFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusHarianWithAggregatesFilter<$PrismaModel> | $Enums.StatusHarian
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusHarianFilter<$PrismaModel>
    _max?: NestedEnumStatusHarianFilter<$PrismaModel>
  }

  export type NestedEnumStatusMapelFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMapel | EnumStatusMapelFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMapelFilter<$PrismaModel> | $Enums.StatusMapel
  }

  export type NestedEnumStatusMapelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMapel | EnumStatusMapelFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusMapel[] | ListEnumStatusMapelFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusMapelWithAggregatesFilter<$PrismaModel> | $Enums.StatusMapel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMapelFilter<$PrismaModel>
    _max?: NestedEnumStatusMapelFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GuruCreateWithoutUserInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    mengajarDiJadwal?: JadwalPelajaranCreateNestedManyWithoutGuruInput
    waliDiKelas?: KelasCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruUncheckedCreateWithoutUserInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    mengajarDiJadwal?: JadwalPelajaranUncheckedCreateNestedManyWithoutGuruInput
    waliDiKelas?: KelasUncheckedCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruCreateOrConnectWithoutUserInput = {
    where: GuruWhereUniqueInput
    create: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type GuruUpsertWithoutUserInput = {
    update: XOR<GuruUpdateWithoutUserInput, GuruUncheckedUpdateWithoutUserInput>
    create: XOR<GuruCreateWithoutUserInput, GuruUncheckedCreateWithoutUserInput>
    where?: GuruWhereInput
  }

  export type GuruUpdateToOneWithWhereWithoutUserInput = {
    where?: GuruWhereInput
    data: XOR<GuruUpdateWithoutUserInput, GuruUncheckedUpdateWithoutUserInput>
  }

  export type GuruUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    mengajarDiJadwal?: JadwalPelajaranUpdateManyWithoutGuruNestedInput
    waliDiKelas?: KelasUpdateOneWithoutWaliKelasNestedInput
  }

  export type GuruUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    mengajarDiJadwal?: JadwalPelajaranUncheckedUpdateManyWithoutGuruNestedInput
    waliDiKelas?: KelasUncheckedUpdateOneWithoutWaliKelasNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    guruProfil?: GuruCreateNestedOneWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    guruProfil?: GuruUncheckedCreateNestedOneWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guruProfil?: GuruUpdateOneWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guruProfil?: GuruUncheckedUpdateOneWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    guruProfil?: GuruCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    guruProfil?: GuruUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    guruProfil?: GuruUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    guruProfil?: GuruUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutGuruProfilInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuruProfilInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGuruProfilInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuruProfilInput, UserUncheckedCreateWithoutGuruProfilInput>
  }

  export type JadwalPelajaranCreateWithoutGuruInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    absenMapel?: AbsenMapelCreateNestedManyWithoutJadwalInput
    kelas: KelasCreateNestedOneWithoutJadwalInput
    mapel: MataPelajaranCreateNestedOneWithoutJadwalInput
  }

  export type JadwalPelajaranUncheckedCreateWithoutGuruInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    kelasId: string
    mapelId: string
    absenMapel?: AbsenMapelUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalPelajaranCreateOrConnectWithoutGuruInput = {
    where: JadwalPelajaranWhereUniqueInput
    create: XOR<JadwalPelajaranCreateWithoutGuruInput, JadwalPelajaranUncheckedCreateWithoutGuruInput>
  }

  export type JadwalPelajaranCreateManyGuruInputEnvelope = {
    data: JadwalPelajaranCreateManyGuruInput | JadwalPelajaranCreateManyGuruInput[]
    skipDuplicates?: boolean
  }

  export type KelasCreateWithoutWaliKelasInput = {
    id?: string
    nama: string
    jadwal?: JadwalPelajaranCreateNestedManyWithoutKelasInput
    siswa?: SiswaCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutWaliKelasInput = {
    id?: string
    nama: string
    jadwal?: JadwalPelajaranUncheckedCreateNestedManyWithoutKelasInput
    siswa?: SiswaUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutWaliKelasInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
  }

  export type UserUpsertWithoutGuruProfilInput = {
    update: XOR<UserUpdateWithoutGuruProfilInput, UserUncheckedUpdateWithoutGuruProfilInput>
    create: XOR<UserCreateWithoutGuruProfilInput, UserUncheckedCreateWithoutGuruProfilInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuruProfilInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuruProfilInput, UserUncheckedUpdateWithoutGuruProfilInput>
  }

  export type UserUpdateWithoutGuruProfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuruProfilInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JadwalPelajaranUpsertWithWhereUniqueWithoutGuruInput = {
    where: JadwalPelajaranWhereUniqueInput
    update: XOR<JadwalPelajaranUpdateWithoutGuruInput, JadwalPelajaranUncheckedUpdateWithoutGuruInput>
    create: XOR<JadwalPelajaranCreateWithoutGuruInput, JadwalPelajaranUncheckedCreateWithoutGuruInput>
  }

  export type JadwalPelajaranUpdateWithWhereUniqueWithoutGuruInput = {
    where: JadwalPelajaranWhereUniqueInput
    data: XOR<JadwalPelajaranUpdateWithoutGuruInput, JadwalPelajaranUncheckedUpdateWithoutGuruInput>
  }

  export type JadwalPelajaranUpdateManyWithWhereWithoutGuruInput = {
    where: JadwalPelajaranScalarWhereInput
    data: XOR<JadwalPelajaranUpdateManyMutationInput, JadwalPelajaranUncheckedUpdateManyWithoutGuruInput>
  }

  export type JadwalPelajaranScalarWhereInput = {
    AND?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
    OR?: JadwalPelajaranScalarWhereInput[]
    NOT?: JadwalPelajaranScalarWhereInput | JadwalPelajaranScalarWhereInput[]
    id?: StringFilter<"JadwalPelajaran"> | string
    hari?: StringFilter<"JadwalPelajaran"> | string
    jamMulai?: DateTimeFilter<"JadwalPelajaran"> | Date | string
    jamSelesai?: DateTimeFilter<"JadwalPelajaran"> | Date | string
    kelasId?: StringFilter<"JadwalPelajaran"> | string
    mapelId?: StringFilter<"JadwalPelajaran"> | string
    guruId?: StringFilter<"JadwalPelajaran"> | string
  }

  export type KelasUpsertWithoutWaliKelasInput = {
    update: XOR<KelasUpdateWithoutWaliKelasInput, KelasUncheckedUpdateWithoutWaliKelasInput>
    create: XOR<KelasCreateWithoutWaliKelasInput, KelasUncheckedCreateWithoutWaliKelasInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutWaliKelasInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutWaliKelasInput, KelasUncheckedUpdateWithoutWaliKelasInput>
  }

  export type KelasUpdateWithoutWaliKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: JadwalPelajaranUpdateManyWithoutKelasNestedInput
    siswa?: SiswaUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutWaliKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: JadwalPelajaranUncheckedUpdateManyWithoutKelasNestedInput
    siswa?: SiswaUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type AbsenHarianCreateWithoutSiswaInput = {
    id?: string
    tanggal: Date | string
    jamMasuk?: Date | string | null
    jamPulang?: Date | string | null
    status?: $Enums.StatusHarian
  }

  export type AbsenHarianUncheckedCreateWithoutSiswaInput = {
    id?: string
    tanggal: Date | string
    jamMasuk?: Date | string | null
    jamPulang?: Date | string | null
    status?: $Enums.StatusHarian
  }

  export type AbsenHarianCreateOrConnectWithoutSiswaInput = {
    where: AbsenHarianWhereUniqueInput
    create: XOR<AbsenHarianCreateWithoutSiswaInput, AbsenHarianUncheckedCreateWithoutSiswaInput>
  }

  export type AbsenHarianCreateManySiswaInputEnvelope = {
    data: AbsenHarianCreateManySiswaInput | AbsenHarianCreateManySiswaInput[]
    skipDuplicates?: boolean
  }

  export type AbsenMapelCreateWithoutSiswaInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    jadwal: JadwalPelajaranCreateNestedOneWithoutAbsenMapelInput
  }

  export type AbsenMapelUncheckedCreateWithoutSiswaInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    jadwalId: string
  }

  export type AbsenMapelCreateOrConnectWithoutSiswaInput = {
    where: AbsenMapelWhereUniqueInput
    create: XOR<AbsenMapelCreateWithoutSiswaInput, AbsenMapelUncheckedCreateWithoutSiswaInput>
  }

  export type AbsenMapelCreateManySiswaInputEnvelope = {
    data: AbsenMapelCreateManySiswaInput | AbsenMapelCreateManySiswaInput[]
    skipDuplicates?: boolean
  }

  export type KelasCreateWithoutSiswaInput = {
    id?: string
    nama: string
    jadwal?: JadwalPelajaranCreateNestedManyWithoutKelasInput
    waliKelas?: GuruCreateNestedOneWithoutWaliDiKelasInput
  }

  export type KelasUncheckedCreateWithoutSiswaInput = {
    id?: string
    nama: string
    waliKelasId?: string | null
    jadwal?: JadwalPelajaranUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutSiswaInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutSiswaInput, KelasUncheckedCreateWithoutSiswaInput>
  }

  export type AbsenHarianUpsertWithWhereUniqueWithoutSiswaInput = {
    where: AbsenHarianWhereUniqueInput
    update: XOR<AbsenHarianUpdateWithoutSiswaInput, AbsenHarianUncheckedUpdateWithoutSiswaInput>
    create: XOR<AbsenHarianCreateWithoutSiswaInput, AbsenHarianUncheckedCreateWithoutSiswaInput>
  }

  export type AbsenHarianUpdateWithWhereUniqueWithoutSiswaInput = {
    where: AbsenHarianWhereUniqueInput
    data: XOR<AbsenHarianUpdateWithoutSiswaInput, AbsenHarianUncheckedUpdateWithoutSiswaInput>
  }

  export type AbsenHarianUpdateManyWithWhereWithoutSiswaInput = {
    where: AbsenHarianScalarWhereInput
    data: XOR<AbsenHarianUpdateManyMutationInput, AbsenHarianUncheckedUpdateManyWithoutSiswaInput>
  }

  export type AbsenHarianScalarWhereInput = {
    AND?: AbsenHarianScalarWhereInput | AbsenHarianScalarWhereInput[]
    OR?: AbsenHarianScalarWhereInput[]
    NOT?: AbsenHarianScalarWhereInput | AbsenHarianScalarWhereInput[]
    id?: StringFilter<"AbsenHarian"> | string
    tanggal?: DateTimeFilter<"AbsenHarian"> | Date | string
    jamMasuk?: DateTimeNullableFilter<"AbsenHarian"> | Date | string | null
    jamPulang?: DateTimeNullableFilter<"AbsenHarian"> | Date | string | null
    status?: EnumStatusHarianFilter<"AbsenHarian"> | $Enums.StatusHarian
    siswaId?: StringFilter<"AbsenHarian"> | string
  }

  export type AbsenMapelUpsertWithWhereUniqueWithoutSiswaInput = {
    where: AbsenMapelWhereUniqueInput
    update: XOR<AbsenMapelUpdateWithoutSiswaInput, AbsenMapelUncheckedUpdateWithoutSiswaInput>
    create: XOR<AbsenMapelCreateWithoutSiswaInput, AbsenMapelUncheckedCreateWithoutSiswaInput>
  }

  export type AbsenMapelUpdateWithWhereUniqueWithoutSiswaInput = {
    where: AbsenMapelWhereUniqueInput
    data: XOR<AbsenMapelUpdateWithoutSiswaInput, AbsenMapelUncheckedUpdateWithoutSiswaInput>
  }

  export type AbsenMapelUpdateManyWithWhereWithoutSiswaInput = {
    where: AbsenMapelScalarWhereInput
    data: XOR<AbsenMapelUpdateManyMutationInput, AbsenMapelUncheckedUpdateManyWithoutSiswaInput>
  }

  export type AbsenMapelScalarWhereInput = {
    AND?: AbsenMapelScalarWhereInput | AbsenMapelScalarWhereInput[]
    OR?: AbsenMapelScalarWhereInput[]
    NOT?: AbsenMapelScalarWhereInput | AbsenMapelScalarWhereInput[]
    id?: StringFilter<"AbsenMapel"> | string
    tanggal?: DateTimeFilter<"AbsenMapel"> | Date | string
    status?: EnumStatusMapelFilter<"AbsenMapel"> | $Enums.StatusMapel
    keterangan?: StringNullableFilter<"AbsenMapel"> | string | null
    hari?: StringFilter<"AbsenMapel"> | string
    jamMulai?: DateTimeFilter<"AbsenMapel"> | Date | string
    jamSelesai?: DateTimeFilter<"AbsenMapel"> | Date | string
    siswaId?: StringFilter<"AbsenMapel"> | string
    jadwalId?: StringFilter<"AbsenMapel"> | string
  }

  export type KelasUpsertWithoutSiswaInput = {
    update: XOR<KelasUpdateWithoutSiswaInput, KelasUncheckedUpdateWithoutSiswaInput>
    create: XOR<KelasCreateWithoutSiswaInput, KelasUncheckedCreateWithoutSiswaInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutSiswaInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutSiswaInput, KelasUncheckedUpdateWithoutSiswaInput>
  }

  export type KelasUpdateWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: JadwalPelajaranUpdateManyWithoutKelasNestedInput
    waliKelas?: GuruUpdateOneWithoutWaliDiKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: JadwalPelajaranUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type JadwalPelajaranCreateWithoutKelasInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    absenMapel?: AbsenMapelCreateNestedManyWithoutJadwalInput
    guru: GuruCreateNestedOneWithoutMengajarDiJadwalInput
    mapel: MataPelajaranCreateNestedOneWithoutJadwalInput
  }

  export type JadwalPelajaranUncheckedCreateWithoutKelasInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    mapelId: string
    guruId: string
    absenMapel?: AbsenMapelUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalPelajaranCreateOrConnectWithoutKelasInput = {
    where: JadwalPelajaranWhereUniqueInput
    create: XOR<JadwalPelajaranCreateWithoutKelasInput, JadwalPelajaranUncheckedCreateWithoutKelasInput>
  }

  export type JadwalPelajaranCreateManyKelasInputEnvelope = {
    data: JadwalPelajaranCreateManyKelasInput | JadwalPelajaranCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type GuruCreateWithoutWaliDiKelasInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    user?: UserCreateNestedOneWithoutGuruProfilInput
    mengajarDiJadwal?: JadwalPelajaranCreateNestedManyWithoutGuruInput
  }

  export type GuruUncheckedCreateWithoutWaliDiKelasInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    userId?: string | null
    mengajarDiJadwal?: JadwalPelajaranUncheckedCreateNestedManyWithoutGuruInput
  }

  export type GuruCreateOrConnectWithoutWaliDiKelasInput = {
    where: GuruWhereUniqueInput
    create: XOR<GuruCreateWithoutWaliDiKelasInput, GuruUncheckedCreateWithoutWaliDiKelasInput>
  }

  export type SiswaCreateWithoutKelasInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    absenHarian?: AbsenHarianCreateNestedManyWithoutSiswaInput
    absenMapel?: AbsenMapelCreateNestedManyWithoutSiswaInput
  }

  export type SiswaUncheckedCreateWithoutKelasInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    absenHarian?: AbsenHarianUncheckedCreateNestedManyWithoutSiswaInput
    absenMapel?: AbsenMapelUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type SiswaCreateOrConnectWithoutKelasInput = {
    where: SiswaWhereUniqueInput
    create: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput>
  }

  export type SiswaCreateManyKelasInputEnvelope = {
    data: SiswaCreateManyKelasInput | SiswaCreateManyKelasInput[]
    skipDuplicates?: boolean
  }

  export type JadwalPelajaranUpsertWithWhereUniqueWithoutKelasInput = {
    where: JadwalPelajaranWhereUniqueInput
    update: XOR<JadwalPelajaranUpdateWithoutKelasInput, JadwalPelajaranUncheckedUpdateWithoutKelasInput>
    create: XOR<JadwalPelajaranCreateWithoutKelasInput, JadwalPelajaranUncheckedCreateWithoutKelasInput>
  }

  export type JadwalPelajaranUpdateWithWhereUniqueWithoutKelasInput = {
    where: JadwalPelajaranWhereUniqueInput
    data: XOR<JadwalPelajaranUpdateWithoutKelasInput, JadwalPelajaranUncheckedUpdateWithoutKelasInput>
  }

  export type JadwalPelajaranUpdateManyWithWhereWithoutKelasInput = {
    where: JadwalPelajaranScalarWhereInput
    data: XOR<JadwalPelajaranUpdateManyMutationInput, JadwalPelajaranUncheckedUpdateManyWithoutKelasInput>
  }

  export type GuruUpsertWithoutWaliDiKelasInput = {
    update: XOR<GuruUpdateWithoutWaliDiKelasInput, GuruUncheckedUpdateWithoutWaliDiKelasInput>
    create: XOR<GuruCreateWithoutWaliDiKelasInput, GuruUncheckedCreateWithoutWaliDiKelasInput>
    where?: GuruWhereInput
  }

  export type GuruUpdateToOneWithWhereWithoutWaliDiKelasInput = {
    where?: GuruWhereInput
    data: XOR<GuruUpdateWithoutWaliDiKelasInput, GuruUncheckedUpdateWithoutWaliDiKelasInput>
  }

  export type GuruUpdateWithoutWaliDiKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutGuruProfilNestedInput
    mengajarDiJadwal?: JadwalPelajaranUpdateManyWithoutGuruNestedInput
  }

  export type GuruUncheckedUpdateWithoutWaliDiKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mengajarDiJadwal?: JadwalPelajaranUncheckedUpdateManyWithoutGuruNestedInput
  }

  export type SiswaUpsertWithWhereUniqueWithoutKelasInput = {
    where: SiswaWhereUniqueInput
    update: XOR<SiswaUpdateWithoutKelasInput, SiswaUncheckedUpdateWithoutKelasInput>
    create: XOR<SiswaCreateWithoutKelasInput, SiswaUncheckedCreateWithoutKelasInput>
  }

  export type SiswaUpdateWithWhereUniqueWithoutKelasInput = {
    where: SiswaWhereUniqueInput
    data: XOR<SiswaUpdateWithoutKelasInput, SiswaUncheckedUpdateWithoutKelasInput>
  }

  export type SiswaUpdateManyWithWhereWithoutKelasInput = {
    where: SiswaScalarWhereInput
    data: XOR<SiswaUpdateManyMutationInput, SiswaUncheckedUpdateManyWithoutKelasInput>
  }

  export type SiswaScalarWhereInput = {
    AND?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
    OR?: SiswaScalarWhereInput[]
    NOT?: SiswaScalarWhereInput | SiswaScalarWhereInput[]
    id?: StringFilter<"Siswa"> | string
    nama?: StringFilter<"Siswa"> | string
    nisn?: StringFilter<"Siswa"> | string
    kode?: StringFilter<"Siswa"> | string
    gender?: EnumGenderFilter<"Siswa"> | $Enums.Gender
    kelasId?: StringFilter<"Siswa"> | string
  }

  export type JadwalPelajaranCreateWithoutMapelInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    absenMapel?: AbsenMapelCreateNestedManyWithoutJadwalInput
    guru: GuruCreateNestedOneWithoutMengajarDiJadwalInput
    kelas: KelasCreateNestedOneWithoutJadwalInput
  }

  export type JadwalPelajaranUncheckedCreateWithoutMapelInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    kelasId: string
    guruId: string
    absenMapel?: AbsenMapelUncheckedCreateNestedManyWithoutJadwalInput
  }

  export type JadwalPelajaranCreateOrConnectWithoutMapelInput = {
    where: JadwalPelajaranWhereUniqueInput
    create: XOR<JadwalPelajaranCreateWithoutMapelInput, JadwalPelajaranUncheckedCreateWithoutMapelInput>
  }

  export type JadwalPelajaranCreateManyMapelInputEnvelope = {
    data: JadwalPelajaranCreateManyMapelInput | JadwalPelajaranCreateManyMapelInput[]
    skipDuplicates?: boolean
  }

  export type JadwalPelajaranUpsertWithWhereUniqueWithoutMapelInput = {
    where: JadwalPelajaranWhereUniqueInput
    update: XOR<JadwalPelajaranUpdateWithoutMapelInput, JadwalPelajaranUncheckedUpdateWithoutMapelInput>
    create: XOR<JadwalPelajaranCreateWithoutMapelInput, JadwalPelajaranUncheckedCreateWithoutMapelInput>
  }

  export type JadwalPelajaranUpdateWithWhereUniqueWithoutMapelInput = {
    where: JadwalPelajaranWhereUniqueInput
    data: XOR<JadwalPelajaranUpdateWithoutMapelInput, JadwalPelajaranUncheckedUpdateWithoutMapelInput>
  }

  export type JadwalPelajaranUpdateManyWithWhereWithoutMapelInput = {
    where: JadwalPelajaranScalarWhereInput
    data: XOR<JadwalPelajaranUpdateManyMutationInput, JadwalPelajaranUncheckedUpdateManyWithoutMapelInput>
  }

  export type AbsenMapelCreateWithoutJadwalInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    siswa: SiswaCreateNestedOneWithoutAbsenMapelInput
  }

  export type AbsenMapelUncheckedCreateWithoutJadwalInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    siswaId: string
  }

  export type AbsenMapelCreateOrConnectWithoutJadwalInput = {
    where: AbsenMapelWhereUniqueInput
    create: XOR<AbsenMapelCreateWithoutJadwalInput, AbsenMapelUncheckedCreateWithoutJadwalInput>
  }

  export type AbsenMapelCreateManyJadwalInputEnvelope = {
    data: AbsenMapelCreateManyJadwalInput | AbsenMapelCreateManyJadwalInput[]
    skipDuplicates?: boolean
  }

  export type GuruCreateWithoutMengajarDiJadwalInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    user?: UserCreateNestedOneWithoutGuruProfilInput
    waliDiKelas?: KelasCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruUncheckedCreateWithoutMengajarDiJadwalInput = {
    id?: string
    nama: string
    kode: string
    nip?: string | null
    nuptk?: string | null
    gender?: $Enums.Gender
    isPiket?: boolean
    userId?: string | null
    waliDiKelas?: KelasUncheckedCreateNestedOneWithoutWaliKelasInput
  }

  export type GuruCreateOrConnectWithoutMengajarDiJadwalInput = {
    where: GuruWhereUniqueInput
    create: XOR<GuruCreateWithoutMengajarDiJadwalInput, GuruUncheckedCreateWithoutMengajarDiJadwalInput>
  }

  export type KelasCreateWithoutJadwalInput = {
    id?: string
    nama: string
    waliKelas?: GuruCreateNestedOneWithoutWaliDiKelasInput
    siswa?: SiswaCreateNestedManyWithoutKelasInput
  }

  export type KelasUncheckedCreateWithoutJadwalInput = {
    id?: string
    nama: string
    waliKelasId?: string | null
    siswa?: SiswaUncheckedCreateNestedManyWithoutKelasInput
  }

  export type KelasCreateOrConnectWithoutJadwalInput = {
    where: KelasWhereUniqueInput
    create: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
  }

  export type MataPelajaranCreateWithoutJadwalInput = {
    id?: string
    kode: string
    nama: string
  }

  export type MataPelajaranUncheckedCreateWithoutJadwalInput = {
    id?: string
    kode: string
    nama: string
  }

  export type MataPelajaranCreateOrConnectWithoutJadwalInput = {
    where: MataPelajaranWhereUniqueInput
    create: XOR<MataPelajaranCreateWithoutJadwalInput, MataPelajaranUncheckedCreateWithoutJadwalInput>
  }

  export type AbsenMapelUpsertWithWhereUniqueWithoutJadwalInput = {
    where: AbsenMapelWhereUniqueInput
    update: XOR<AbsenMapelUpdateWithoutJadwalInput, AbsenMapelUncheckedUpdateWithoutJadwalInput>
    create: XOR<AbsenMapelCreateWithoutJadwalInput, AbsenMapelUncheckedCreateWithoutJadwalInput>
  }

  export type AbsenMapelUpdateWithWhereUniqueWithoutJadwalInput = {
    where: AbsenMapelWhereUniqueInput
    data: XOR<AbsenMapelUpdateWithoutJadwalInput, AbsenMapelUncheckedUpdateWithoutJadwalInput>
  }

  export type AbsenMapelUpdateManyWithWhereWithoutJadwalInput = {
    where: AbsenMapelScalarWhereInput
    data: XOR<AbsenMapelUpdateManyMutationInput, AbsenMapelUncheckedUpdateManyWithoutJadwalInput>
  }

  export type GuruUpsertWithoutMengajarDiJadwalInput = {
    update: XOR<GuruUpdateWithoutMengajarDiJadwalInput, GuruUncheckedUpdateWithoutMengajarDiJadwalInput>
    create: XOR<GuruCreateWithoutMengajarDiJadwalInput, GuruUncheckedCreateWithoutMengajarDiJadwalInput>
    where?: GuruWhereInput
  }

  export type GuruUpdateToOneWithWhereWithoutMengajarDiJadwalInput = {
    where?: GuruWhereInput
    data: XOR<GuruUpdateWithoutMengajarDiJadwalInput, GuruUncheckedUpdateWithoutMengajarDiJadwalInput>
  }

  export type GuruUpdateWithoutMengajarDiJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutGuruProfilNestedInput
    waliDiKelas?: KelasUpdateOneWithoutWaliKelasNestedInput
  }

  export type GuruUncheckedUpdateWithoutMengajarDiJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nip?: NullableStringFieldUpdateOperationsInput | string | null
    nuptk?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isPiket?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    waliDiKelas?: KelasUncheckedUpdateOneWithoutWaliKelasNestedInput
  }

  export type KelasUpsertWithoutJadwalInput = {
    update: XOR<KelasUpdateWithoutJadwalInput, KelasUncheckedUpdateWithoutJadwalInput>
    create: XOR<KelasCreateWithoutJadwalInput, KelasUncheckedCreateWithoutJadwalInput>
    where?: KelasWhereInput
  }

  export type KelasUpdateToOneWithWhereWithoutJadwalInput = {
    where?: KelasWhereInput
    data: XOR<KelasUpdateWithoutJadwalInput, KelasUncheckedUpdateWithoutJadwalInput>
  }

  export type KelasUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    waliKelas?: GuruUpdateOneWithoutWaliDiKelasNestedInput
    siswa?: SiswaUpdateManyWithoutKelasNestedInput
  }

  export type KelasUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    siswa?: SiswaUncheckedUpdateManyWithoutKelasNestedInput
  }

  export type MataPelajaranUpsertWithoutJadwalInput = {
    update: XOR<MataPelajaranUpdateWithoutJadwalInput, MataPelajaranUncheckedUpdateWithoutJadwalInput>
    create: XOR<MataPelajaranCreateWithoutJadwalInput, MataPelajaranUncheckedCreateWithoutJadwalInput>
    where?: MataPelajaranWhereInput
  }

  export type MataPelajaranUpdateToOneWithWhereWithoutJadwalInput = {
    where?: MataPelajaranWhereInput
    data: XOR<MataPelajaranUpdateWithoutJadwalInput, MataPelajaranUncheckedUpdateWithoutJadwalInput>
  }

  export type MataPelajaranUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type MataPelajaranUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type SiswaCreateWithoutAbsenHarianInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    absenMapel?: AbsenMapelCreateNestedManyWithoutSiswaInput
    kelas: KelasCreateNestedOneWithoutSiswaInput
  }

  export type SiswaUncheckedCreateWithoutAbsenHarianInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    kelasId: string
    absenMapel?: AbsenMapelUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type SiswaCreateOrConnectWithoutAbsenHarianInput = {
    where: SiswaWhereUniqueInput
    create: XOR<SiswaCreateWithoutAbsenHarianInput, SiswaUncheckedCreateWithoutAbsenHarianInput>
  }

  export type SiswaUpsertWithoutAbsenHarianInput = {
    update: XOR<SiswaUpdateWithoutAbsenHarianInput, SiswaUncheckedUpdateWithoutAbsenHarianInput>
    create: XOR<SiswaCreateWithoutAbsenHarianInput, SiswaUncheckedCreateWithoutAbsenHarianInput>
    where?: SiswaWhereInput
  }

  export type SiswaUpdateToOneWithWhereWithoutAbsenHarianInput = {
    where?: SiswaWhereInput
    data: XOR<SiswaUpdateWithoutAbsenHarianInput, SiswaUncheckedUpdateWithoutAbsenHarianInput>
  }

  export type SiswaUpdateWithoutAbsenHarianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    absenMapel?: AbsenMapelUpdateManyWithoutSiswaNestedInput
    kelas?: KelasUpdateOneRequiredWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateWithoutAbsenHarianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    kelasId?: StringFieldUpdateOperationsInput | string
    absenMapel?: AbsenMapelUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type JadwalPelajaranCreateWithoutAbsenMapelInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    guru: GuruCreateNestedOneWithoutMengajarDiJadwalInput
    kelas: KelasCreateNestedOneWithoutJadwalInput
    mapel: MataPelajaranCreateNestedOneWithoutJadwalInput
  }

  export type JadwalPelajaranUncheckedCreateWithoutAbsenMapelInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    kelasId: string
    mapelId: string
    guruId: string
  }

  export type JadwalPelajaranCreateOrConnectWithoutAbsenMapelInput = {
    where: JadwalPelajaranWhereUniqueInput
    create: XOR<JadwalPelajaranCreateWithoutAbsenMapelInput, JadwalPelajaranUncheckedCreateWithoutAbsenMapelInput>
  }

  export type SiswaCreateWithoutAbsenMapelInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    absenHarian?: AbsenHarianCreateNestedManyWithoutSiswaInput
    kelas: KelasCreateNestedOneWithoutSiswaInput
  }

  export type SiswaUncheckedCreateWithoutAbsenMapelInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
    kelasId: string
    absenHarian?: AbsenHarianUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type SiswaCreateOrConnectWithoutAbsenMapelInput = {
    where: SiswaWhereUniqueInput
    create: XOR<SiswaCreateWithoutAbsenMapelInput, SiswaUncheckedCreateWithoutAbsenMapelInput>
  }

  export type JadwalPelajaranUpsertWithoutAbsenMapelInput = {
    update: XOR<JadwalPelajaranUpdateWithoutAbsenMapelInput, JadwalPelajaranUncheckedUpdateWithoutAbsenMapelInput>
    create: XOR<JadwalPelajaranCreateWithoutAbsenMapelInput, JadwalPelajaranUncheckedCreateWithoutAbsenMapelInput>
    where?: JadwalPelajaranWhereInput
  }

  export type JadwalPelajaranUpdateToOneWithWhereWithoutAbsenMapelInput = {
    where?: JadwalPelajaranWhereInput
    data: XOR<JadwalPelajaranUpdateWithoutAbsenMapelInput, JadwalPelajaranUncheckedUpdateWithoutAbsenMapelInput>
  }

  export type JadwalPelajaranUpdateWithoutAbsenMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    guru?: GuruUpdateOneRequiredWithoutMengajarDiJadwalNestedInput
    kelas?: KelasUpdateOneRequiredWithoutJadwalNestedInput
    mapel?: MataPelajaranUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateWithoutAbsenMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    guruId?: StringFieldUpdateOperationsInput | string
  }

  export type SiswaUpsertWithoutAbsenMapelInput = {
    update: XOR<SiswaUpdateWithoutAbsenMapelInput, SiswaUncheckedUpdateWithoutAbsenMapelInput>
    create: XOR<SiswaCreateWithoutAbsenMapelInput, SiswaUncheckedCreateWithoutAbsenMapelInput>
    where?: SiswaWhereInput
  }

  export type SiswaUpdateToOneWithWhereWithoutAbsenMapelInput = {
    where?: SiswaWhereInput
    data: XOR<SiswaUpdateWithoutAbsenMapelInput, SiswaUncheckedUpdateWithoutAbsenMapelInput>
  }

  export type SiswaUpdateWithoutAbsenMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    absenHarian?: AbsenHarianUpdateManyWithoutSiswaNestedInput
    kelas?: KelasUpdateOneRequiredWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateWithoutAbsenMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    kelasId?: StringFieldUpdateOperationsInput | string
    absenHarian?: AbsenHarianUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalPelajaranCreateManyGuruInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    kelasId: string
    mapelId: string
  }

  export type JadwalPelajaranUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    absenMapel?: AbsenMapelUpdateManyWithoutJadwalNestedInput
    kelas?: KelasUpdateOneRequiredWithoutJadwalNestedInput
    mapel?: MataPelajaranUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
    absenMapel?: AbsenMapelUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateManyWithoutGuruInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    mapelId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenHarianCreateManySiswaInput = {
    id?: string
    tanggal: Date | string
    jamMasuk?: Date | string | null
    jamPulang?: Date | string | null
    status?: $Enums.StatusHarian
  }

  export type AbsenMapelCreateManySiswaInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    jadwalId: string
  }

  export type AbsenHarianUpdateWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMasuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusHarianFieldUpdateOperationsInput | $Enums.StatusHarian
  }

  export type AbsenHarianUncheckedUpdateWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMasuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusHarianFieldUpdateOperationsInput | $Enums.StatusHarian
  }

  export type AbsenHarianUncheckedUpdateManyWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jamMasuk?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jamPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusHarianFieldUpdateOperationsInput | $Enums.StatusHarian
  }

  export type AbsenMapelUpdateWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalPelajaranUpdateOneRequiredWithoutAbsenMapelNestedInput
  }

  export type AbsenMapelUncheckedUpdateWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwalId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenMapelUncheckedUpdateManyWithoutSiswaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwalId?: StringFieldUpdateOperationsInput | string
  }

  export type JadwalPelajaranCreateManyKelasInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    mapelId: string
    guruId: string
  }

  export type SiswaCreateManyKelasInput = {
    id?: string
    nama: string
    nisn: string
    kode: string
    gender?: $Enums.Gender
  }

  export type JadwalPelajaranUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    absenMapel?: AbsenMapelUpdateManyWithoutJadwalNestedInput
    guru?: GuruUpdateOneRequiredWithoutMengajarDiJadwalNestedInput
    mapel?: MataPelajaranUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    mapelId?: StringFieldUpdateOperationsInput | string
    guruId?: StringFieldUpdateOperationsInput | string
    absenMapel?: AbsenMapelUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateManyWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    mapelId?: StringFieldUpdateOperationsInput | string
    guruId?: StringFieldUpdateOperationsInput | string
  }

  export type SiswaUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    absenHarian?: AbsenHarianUpdateManyWithoutSiswaNestedInput
    absenMapel?: AbsenMapelUpdateManyWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    absenHarian?: AbsenHarianUncheckedUpdateManyWithoutSiswaNestedInput
    absenMapel?: AbsenMapelUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type SiswaUncheckedUpdateManyWithoutKelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nisn?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
  }

  export type JadwalPelajaranCreateManyMapelInput = {
    id?: string
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    kelasId: string
    guruId: string
  }

  export type JadwalPelajaranUpdateWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    absenMapel?: AbsenMapelUpdateManyWithoutJadwalNestedInput
    guru?: GuruUpdateOneRequiredWithoutMengajarDiJadwalNestedInput
    kelas?: KelasUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    guruId?: StringFieldUpdateOperationsInput | string
    absenMapel?: AbsenMapelUncheckedUpdateManyWithoutJadwalNestedInput
  }

  export type JadwalPelajaranUncheckedUpdateManyWithoutMapelInput = {
    id?: StringFieldUpdateOperationsInput | string
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    kelasId?: StringFieldUpdateOperationsInput | string
    guruId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenMapelCreateManyJadwalInput = {
    id?: string
    tanggal: Date | string
    status?: $Enums.StatusMapel
    keterangan?: string | null
    hari: string
    jamMulai: Date | string
    jamSelesai: Date | string
    siswaId: string
  }

  export type AbsenMapelUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: SiswaUpdateOneRequiredWithoutAbsenMapelNestedInput
  }

  export type AbsenMapelUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    siswaId?: StringFieldUpdateOperationsInput | string
  }

  export type AbsenMapelUncheckedUpdateManyWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusMapelFieldUpdateOperationsInput | $Enums.StatusMapel
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    jamSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    siswaId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}