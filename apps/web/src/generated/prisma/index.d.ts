
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model LeadNote
 * 
 */
export type LeadNote = $Result.DefaultSelection<Prisma.$LeadNotePayload>
/**
 * Model TestDrive
 * 
 */
export type TestDrive = $Result.DefaultSelection<Prisma.$TestDrivePayload>
/**
 * Model Showroom
 * 
 */
export type Showroom = $Result.DefaultSelection<Prisma.$ShowroomPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CarStatus: {
  DRAFT: 'DRAFT',
  LIVE: 'LIVE',
  SOLD: 'SOLD',
  ARCHIVED: 'ARCHIVED'
};

export type CarStatus = (typeof CarStatus)[keyof typeof CarStatus]


export const LeadSource: {
  WHATSAPP: 'WHATSAPP',
  FORM: 'FORM',
  DIRECT: 'DIRECT',
  REFERRAL: 'REFERRAL'
};

export type LeadSource = (typeof LeadSource)[keyof typeof LeadSource]


export const LeadStatus: {
  NEW: 'NEW',
  CONTACTED: 'CONTACTED',
  TEST_DRIVE_BOOKED: 'TEST_DRIVE_BOOKED',
  CLOSED: 'CLOSED',
  LOST: 'LOST'
};

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus]


export const TestDriveStatus: {
  REQUESTED: 'REQUESTED',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TestDriveStatus = (typeof TestDriveStatus)[keyof typeof TestDriveStatus]


export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  AGENT: 'AGENT',
  SHOWROOM: 'SHOWROOM'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type CarStatus = $Enums.CarStatus

export const CarStatus: typeof $Enums.CarStatus

export type LeadSource = $Enums.LeadSource

export const LeadSource: typeof $Enums.LeadSource

export type LeadStatus = $Enums.LeadStatus

export const LeadStatus: typeof $Enums.LeadStatus

export type TestDriveStatus = $Enums.TestDriveStatus

export const TestDriveStatus: typeof $Enums.TestDriveStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leadNote`: Exposes CRUD operations for the **LeadNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadNotes
    * const leadNotes = await prisma.leadNote.findMany()
    * ```
    */
  get leadNote(): Prisma.LeadNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testDrive`: Exposes CRUD operations for the **TestDrive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestDrives
    * const testDrives = await prisma.testDrive.findMany()
    * ```
    */
  get testDrive(): Prisma.TestDriveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showroom`: Exposes CRUD operations for the **Showroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Showrooms
    * const showrooms = await prisma.showroom.findMany()
    * ```
    */
  get showroom(): Prisma.ShowroomDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Car: 'Car',
    Image: 'Image',
    Lead: 'Lead',
    LeadNote: 'LeadNote',
    TestDrive: 'TestDrive',
    Showroom: 'Showroom',
    User: 'User',
    Enquiry: 'Enquiry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "car" | "image" | "lead" | "leadNote" | "testDrive" | "showroom" | "user" | "enquiry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      LeadNote: {
        payload: Prisma.$LeadNotePayload<ExtArgs>
        fields: Prisma.LeadNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findFirst: {
            args: Prisma.LeadNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          findMany: {
            args: Prisma.LeadNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          create: {
            args: Prisma.LeadNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          createMany: {
            args: Prisma.LeadNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          delete: {
            args: Prisma.LeadNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          update: {
            args: Prisma.LeadNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          deleteMany: {
            args: Prisma.LeadNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>[]
          }
          upsert: {
            args: Prisma.LeadNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadNotePayload>
          }
          aggregate: {
            args: Prisma.LeadNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadNote>
          }
          groupBy: {
            args: Prisma.LeadNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadNoteCountArgs<ExtArgs>
            result: $Utils.Optional<LeadNoteCountAggregateOutputType> | number
          }
        }
      }
      TestDrive: {
        payload: Prisma.$TestDrivePayload<ExtArgs>
        fields: Prisma.TestDriveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestDriveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestDriveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>
          }
          findFirst: {
            args: Prisma.TestDriveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestDriveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>
          }
          findMany: {
            args: Prisma.TestDriveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>[]
          }
          create: {
            args: Prisma.TestDriveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>
          }
          createMany: {
            args: Prisma.TestDriveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestDriveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>[]
          }
          delete: {
            args: Prisma.TestDriveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>
          }
          update: {
            args: Prisma.TestDriveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>
          }
          deleteMany: {
            args: Prisma.TestDriveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestDriveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestDriveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>[]
          }
          upsert: {
            args: Prisma.TestDriveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDrivePayload>
          }
          aggregate: {
            args: Prisma.TestDriveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestDrive>
          }
          groupBy: {
            args: Prisma.TestDriveGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestDriveGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestDriveCountArgs<ExtArgs>
            result: $Utils.Optional<TestDriveCountAggregateOutputType> | number
          }
        }
      }
      Showroom: {
        payload: Prisma.$ShowroomPayload<ExtArgs>
        fields: Prisma.ShowroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>
          }
          findFirst: {
            args: Prisma.ShowroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>
          }
          findMany: {
            args: Prisma.ShowroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>[]
          }
          create: {
            args: Prisma.ShowroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>
          }
          createMany: {
            args: Prisma.ShowroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>[]
          }
          delete: {
            args: Prisma.ShowroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>
          }
          update: {
            args: Prisma.ShowroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>
          }
          deleteMany: {
            args: Prisma.ShowroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>[]
          }
          upsert: {
            args: Prisma.ShowroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowroomPayload>
          }
          aggregate: {
            args: Prisma.ShowroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowroom>
          }
          groupBy: {
            args: Prisma.ShowroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowroomCountArgs<ExtArgs>
            result: $Utils.Optional<ShowroomCountAggregateOutputType> | number
          }
        }
      }
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
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    car?: CarOmit
    image?: ImageOmit
    lead?: LeadOmit
    leadNote?: LeadNoteOmit
    testDrive?: TestDriveOmit
    showroom?: ShowroomOmit
    user?: UserOmit
    enquiry?: EnquiryOmit
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
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    images: number
    leads: number
    enquiries: number
    testDrives: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | CarCountOutputTypeCountImagesArgs
    leads?: boolean | CarCountOutputTypeCountLeadsArgs
    enquiries?: boolean | CarCountOutputTypeCountEnquiriesArgs
    testDrives?: boolean | CarCountOutputTypeCountTestDrivesArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountEnquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountTestDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    notes: number
    testDrives: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | LeadCountOutputTypeCountNotesArgs
    testDrives?: boolean | LeadCountOutputTypeCountTestDrivesArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountTestDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveWhereInput
  }


  /**
   * Count Type ShowroomCountOutputType
   */

  export type ShowroomCountOutputType = {
    cars: number
    users: number
  }

  export type ShowroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | ShowroomCountOutputTypeCountCarsArgs
    users?: boolean | ShowroomCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ShowroomCountOutputType without action
   */
  export type ShowroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowroomCountOutputType
     */
    select?: ShowroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShowroomCountOutputType without action
   */
  export type ShowroomCountOutputTypeCountCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }

  /**
   * ShowroomCountOutputType without action
   */
  export type ShowroomCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leads: number
    notes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | UserCountOutputTypeCountLeadsArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
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
  export type UserCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    year: number | null
    price: number | null
    mileage: number | null
    seats: number | null
  }

  export type CarSumAggregateOutputType = {
    year: number | null
    price: number | null
    mileage: number | null
    seats: number | null
  }

  export type CarMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    make: string | null
    model: string | null
    year: number | null
    price: number | null
    mileage: number | null
    fuelType: string | null
    transmission: string | null
    driveType: string | null
    bodyType: string | null
    colour: string | null
    seats: number | null
    condition: string | null
    importFrom: string | null
    description: string | null
    location: string | null
    status: $Enums.CarStatus | null
    featured: boolean | null
    showroomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    make: string | null
    model: string | null
    year: number | null
    price: number | null
    mileage: number | null
    fuelType: string | null
    transmission: string | null
    driveType: string | null
    bodyType: string | null
    colour: string | null
    seats: number | null
    condition: string | null
    importFrom: string | null
    description: string | null
    location: string | null
    status: $Enums.CarStatus | null
    featured: boolean | null
    showroomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    make: number
    model: number
    year: number
    price: number
    mileage: number
    fuelType: number
    transmission: number
    driveType: number
    bodyType: number
    colour: number
    seats: number
    condition: number
    importFrom: number
    description: number
    location: number
    status: number
    featured: number
    showroomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seats?: true
  }

  export type CarSumAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seats?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    fuelType?: true
    transmission?: true
    driveType?: true
    bodyType?: true
    colour?: true
    seats?: true
    condition?: true
    importFrom?: true
    description?: true
    location?: true
    status?: true
    featured?: true
    showroomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    fuelType?: true
    transmission?: true
    driveType?: true
    bodyType?: true
    colour?: true
    seats?: true
    condition?: true
    importFrom?: true
    description?: true
    location?: true
    status?: true
    featured?: true
    showroomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    fuelType?: true
    transmission?: true
    driveType?: true
    bodyType?: true
    colour?: true
    seats?: true
    condition?: true
    importFrom?: true
    description?: true
    location?: true
    status?: true
    featured?: true
    showroomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats: number
    condition: string
    importFrom: string | null
    description: string | null
    location: string
    status: $Enums.CarStatus
    featured: boolean
    showroomId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    driveType?: boolean
    bodyType?: boolean
    colour?: boolean
    seats?: boolean
    condition?: boolean
    importFrom?: boolean
    description?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    showroomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showroom?: boolean | Car$showroomArgs<ExtArgs>
    images?: boolean | Car$imagesArgs<ExtArgs>
    leads?: boolean | Car$leadsArgs<ExtArgs>
    enquiries?: boolean | Car$enquiriesArgs<ExtArgs>
    testDrives?: boolean | Car$testDrivesArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    driveType?: boolean
    bodyType?: boolean
    colour?: boolean
    seats?: boolean
    condition?: boolean
    importFrom?: boolean
    description?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    showroomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showroom?: boolean | Car$showroomArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    driveType?: boolean
    bodyType?: boolean
    colour?: boolean
    seats?: boolean
    condition?: boolean
    importFrom?: boolean
    description?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    showroomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    showroom?: boolean | Car$showroomArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    fuelType?: boolean
    transmission?: boolean
    driveType?: boolean
    bodyType?: boolean
    colour?: boolean
    seats?: boolean
    condition?: boolean
    importFrom?: boolean
    description?: boolean
    location?: boolean
    status?: boolean
    featured?: boolean
    showroomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "make" | "model" | "year" | "price" | "mileage" | "fuelType" | "transmission" | "driveType" | "bodyType" | "colour" | "seats" | "condition" | "importFrom" | "description" | "location" | "status" | "featured" | "showroomId" | "createdAt" | "updatedAt", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showroom?: boolean | Car$showroomArgs<ExtArgs>
    images?: boolean | Car$imagesArgs<ExtArgs>
    leads?: boolean | Car$leadsArgs<ExtArgs>
    enquiries?: boolean | Car$enquiriesArgs<ExtArgs>
    testDrives?: boolean | Car$testDrivesArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showroom?: boolean | Car$showroomArgs<ExtArgs>
  }
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showroom?: boolean | Car$showroomArgs<ExtArgs>
  }

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      showroom: Prisma.$ShowroomPayload<ExtArgs> | null
      images: Prisma.$ImagePayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
      enquiries: Prisma.$EnquiryPayload<ExtArgs>[]
      testDrives: Prisma.$TestDrivePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      make: string
      model: string
      year: number
      price: number
      mileage: number
      fuelType: string
      transmission: string
      driveType: string
      bodyType: string
      colour: string
      seats: number
      condition: string
      importFrom: string | null
      description: string | null
      location: string
      status: $Enums.CarStatus
      featured: boolean
      showroomId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    showroom<T extends Car$showroomArgs<ExtArgs> = {}>(args?: Subset<T, Car$showroomArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Car$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Car$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Car$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Car$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enquiries<T extends Car$enquiriesArgs<ExtArgs> = {}>(args?: Subset<T, Car$enquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testDrives<T extends Car$testDrivesArgs<ExtArgs> = {}>(args?: Subset<T, Car$testDrivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'String'>
    readonly slug: FieldRef<"Car", 'String'>
    readonly title: FieldRef<"Car", 'String'>
    readonly make: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly price: FieldRef<"Car", 'Int'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly fuelType: FieldRef<"Car", 'String'>
    readonly transmission: FieldRef<"Car", 'String'>
    readonly driveType: FieldRef<"Car", 'String'>
    readonly bodyType: FieldRef<"Car", 'String'>
    readonly colour: FieldRef<"Car", 'String'>
    readonly seats: FieldRef<"Car", 'Int'>
    readonly condition: FieldRef<"Car", 'String'>
    readonly importFrom: FieldRef<"Car", 'String'>
    readonly description: FieldRef<"Car", 'String'>
    readonly location: FieldRef<"Car", 'String'>
    readonly status: FieldRef<"Car", 'CarStatus'>
    readonly featured: FieldRef<"Car", 'Boolean'>
    readonly showroomId: FieldRef<"Car", 'String'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.showroom
   */
  export type Car$showroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    where?: ShowroomWhereInput
  }

  /**
   * Car.images
   */
  export type Car$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Car.leads
   */
  export type Car$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Car.enquiries
   */
  export type Car$enquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    cursor?: EnquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Car.testDrives
   */
  export type Car$testDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    where?: TestDriveWhereInput
    orderBy?: TestDriveOrderByWithRelationInput | TestDriveOrderByWithRelationInput[]
    cursor?: TestDriveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestDriveScalarFieldEnum | TestDriveScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    order: number | null
  }

  export type ImageSumAggregateOutputType = {
    order: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    carId: string | null
    url: string | null
    imagekitId: string | null
    order: number | null
    isPrimary: boolean | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    carId: string | null
    url: string | null
    imagekitId: string | null
    order: number | null
    isPrimary: boolean | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    carId: number
    url: number
    imagekitId: number
    order: number
    isPrimary: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    order?: true
  }

  export type ImageSumAggregateInputType = {
    order?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    carId?: true
    url?: true
    imagekitId?: true
    order?: true
    isPrimary?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    carId?: true
    url?: true
    imagekitId?: true
    order?: true
    isPrimary?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    carId?: true
    url?: true
    imagekitId?: true
    order?: true
    isPrimary?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    carId: string
    url: string
    imagekitId: string | null
    order: number
    isPrimary: boolean
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    url?: boolean
    imagekitId?: boolean
    order?: boolean
    isPrimary?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    url?: boolean
    imagekitId?: boolean
    order?: boolean
    isPrimary?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    url?: boolean
    imagekitId?: boolean
    order?: boolean
    isPrimary?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    carId?: boolean
    url?: boolean
    imagekitId?: boolean
    order?: boolean
    isPrimary?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "url" | "imagekitId" | "order" | "isPrimary", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carId: string
      url: string
      imagekitId: string | null
      order: number
      isPrimary: boolean
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly carId: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly imagekitId: FieldRef<"Image", 'String'>
    readonly order: FieldRef<"Image", 'Int'>
    readonly isPrimary: FieldRef<"Image", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    carId: string | null
    buyerName: string | null
    buyerPhone: string | null
    buyerEmail: string | null
    source: $Enums.LeadSource | null
    status: $Enums.LeadStatus | null
    agentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    carId: string | null
    buyerName: string | null
    buyerPhone: string | null
    buyerEmail: string | null
    source: $Enums.LeadSource | null
    status: $Enums.LeadStatus | null
    agentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    carId: number
    buyerName: number
    buyerPhone: number
    buyerEmail: number
    source: number
    status: number
    agentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    carId?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    source?: true
    status?: true
    agentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    carId?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    source?: true
    status?: true
    agentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    carId?: true
    buyerName?: true
    buyerPhone?: true
    buyerEmail?: true
    source?: true
    status?: true
    agentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    carId: string
    buyerName: string
    buyerPhone: string
    buyerEmail: string | null
    source: $Enums.LeadSource
    status: $Enums.LeadStatus
    agentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    source?: boolean
    status?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
    notes?: boolean | Lead$notesArgs<ExtArgs>
    testDrives?: boolean | Lead$testDrivesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    source?: boolean
    status?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    source?: boolean
    status?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    buyerEmail?: boolean
    source?: boolean
    status?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "buyerName" | "buyerPhone" | "buyerEmail" | "source" | "status" | "agentId" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
    notes?: boolean | Lead$notesArgs<ExtArgs>
    testDrives?: boolean | Lead$testDrivesArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    agent?: boolean | Lead$agentArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      agent: Prisma.$UserPayload<ExtArgs> | null
      notes: Prisma.$LeadNotePayload<ExtArgs>[]
      testDrives: Prisma.$TestDrivePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carId: string
      buyerName: string
      buyerPhone: string
      buyerEmail: string | null
      source: $Enums.LeadSource
      status: $Enums.LeadStatus
      agentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends Lead$agentArgs<ExtArgs> = {}>(args?: Subset<T, Lead$agentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends Lead$notesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testDrives<T extends Lead$testDrivesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$testDrivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly carId: FieldRef<"Lead", 'String'>
    readonly buyerName: FieldRef<"Lead", 'String'>
    readonly buyerPhone: FieldRef<"Lead", 'String'>
    readonly buyerEmail: FieldRef<"Lead", 'String'>
    readonly source: FieldRef<"Lead", 'LeadSource'>
    readonly status: FieldRef<"Lead", 'LeadStatus'>
    readonly agentId: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.agent
   */
  export type Lead$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Lead.notes
   */
  export type Lead$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    cursor?: LeadNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * Lead.testDrives
   */
  export type Lead$testDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    where?: TestDriveWhereInput
    orderBy?: TestDriveOrderByWithRelationInput | TestDriveOrderByWithRelationInput[]
    cursor?: TestDriveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestDriveScalarFieldEnum | TestDriveScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model LeadNote
   */

  export type AggregateLeadNote = {
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  export type LeadNoteMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    agentId: string | null
    note: string | null
    createdAt: Date | null
  }

  export type LeadNoteMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    agentId: string | null
    note: string | null
    createdAt: Date | null
  }

  export type LeadNoteCountAggregateOutputType = {
    id: number
    leadId: number
    agentId: number
    note: number
    createdAt: number
    _all: number
  }


  export type LeadNoteMinAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    note?: true
    createdAt?: true
  }

  export type LeadNoteMaxAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    note?: true
    createdAt?: true
  }

  export type LeadNoteCountAggregateInputType = {
    id?: true
    leadId?: true
    agentId?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type LeadNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNote to aggregate.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadNotes
    **/
    _count?: true | LeadNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadNoteMaxAggregateInputType
  }

  export type GetLeadNoteAggregateType<T extends LeadNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadNote[P]>
      : GetScalarType<T[P], AggregateLeadNote[P]>
  }




  export type LeadNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithAggregationInput | LeadNoteOrderByWithAggregationInput[]
    by: LeadNoteScalarFieldEnum[] | LeadNoteScalarFieldEnum
    having?: LeadNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadNoteCountAggregateInputType | true
    _min?: LeadNoteMinAggregateInputType
    _max?: LeadNoteMaxAggregateInputType
  }

  export type LeadNoteGroupByOutputType = {
    id: string
    leadId: string
    agentId: string
    note: string
    createdAt: Date
    _count: LeadNoteCountAggregateOutputType | null
    _min: LeadNoteMinAggregateOutputType | null
    _max: LeadNoteMaxAggregateOutputType | null
  }

  type GetLeadNoteGroupByPayload<T extends LeadNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
            : GetScalarType<T[P], LeadNoteGroupByOutputType[P]>
        }
      >
    >


  export type LeadNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    note?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    agent?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    note?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    agent?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    note?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    agent?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadNote"]>

  export type LeadNoteSelectScalar = {
    id?: boolean
    leadId?: boolean
    agentId?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type LeadNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "agentId" | "note" | "createdAt", ExtArgs["result"]["leadNote"]>
  export type LeadNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    agent?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    agent?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeadNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    agent?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeadNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadNote"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
      agent: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      agentId: string
      note: string
      createdAt: Date
    }, ExtArgs["result"]["leadNote"]>
    composites: {}
  }

  type LeadNoteGetPayload<S extends boolean | null | undefined | LeadNoteDefaultArgs> = $Result.GetResult<Prisma.$LeadNotePayload, S>

  type LeadNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadNoteCountAggregateInputType | true
    }

  export interface LeadNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadNote'], meta: { name: 'LeadNote' } }
    /**
     * Find zero or one LeadNote that matches the filter.
     * @param {LeadNoteFindUniqueArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadNoteFindUniqueArgs>(args: SelectSubset<T, LeadNoteFindUniqueArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeadNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadNoteFindUniqueOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadNoteFindFirstArgs>(args?: SelectSubset<T, LeadNoteFindFirstArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeadNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindFirstOrThrowArgs} args - Arguments to find a LeadNote
     * @example
     * // Get one LeadNote
     * const leadNote = await prisma.leadNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeadNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadNotes
     * const leadNotes = await prisma.leadNote.findMany()
     * 
     * // Get first 10 LeadNotes
     * const leadNotes = await prisma.leadNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadNoteFindManyArgs>(args?: SelectSubset<T, LeadNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeadNote.
     * @param {LeadNoteCreateArgs} args - Arguments to create a LeadNote.
     * @example
     * // Create one LeadNote
     * const LeadNote = await prisma.leadNote.create({
     *   data: {
     *     // ... data to create a LeadNote
     *   }
     * })
     * 
     */
    create<T extends LeadNoteCreateArgs>(args: SelectSubset<T, LeadNoteCreateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeadNotes.
     * @param {LeadNoteCreateManyArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadNoteCreateManyArgs>(args?: SelectSubset<T, LeadNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadNotes and returns the data saved in the database.
     * @param {LeadNoteCreateManyAndReturnArgs} args - Arguments to create many LeadNotes.
     * @example
     * // Create many LeadNotes
     * const leadNote = await prisma.leadNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeadNote.
     * @param {LeadNoteDeleteArgs} args - Arguments to delete one LeadNote.
     * @example
     * // Delete one LeadNote
     * const LeadNote = await prisma.leadNote.delete({
     *   where: {
     *     // ... filter to delete one LeadNote
     *   }
     * })
     * 
     */
    delete<T extends LeadNoteDeleteArgs>(args: SelectSubset<T, LeadNoteDeleteArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeadNote.
     * @param {LeadNoteUpdateArgs} args - Arguments to update one LeadNote.
     * @example
     * // Update one LeadNote
     * const leadNote = await prisma.leadNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadNoteUpdateArgs>(args: SelectSubset<T, LeadNoteUpdateArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeadNotes.
     * @param {LeadNoteDeleteManyArgs} args - Arguments to filter LeadNotes to delete.
     * @example
     * // Delete a few LeadNotes
     * const { count } = await prisma.leadNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadNoteDeleteManyArgs>(args?: SelectSubset<T, LeadNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadNoteUpdateManyArgs>(args: SelectSubset<T, LeadNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadNotes and returns the data updated in the database.
     * @param {LeadNoteUpdateManyAndReturnArgs} args - Arguments to update many LeadNotes.
     * @example
     * // Update many LeadNotes
     * const leadNote = await prisma.leadNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeadNotes and only return the `id`
     * const leadNoteWithIdOnly = await prisma.leadNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeadNote.
     * @param {LeadNoteUpsertArgs} args - Arguments to update or create a LeadNote.
     * @example
     * // Update or create a LeadNote
     * const leadNote = await prisma.leadNote.upsert({
     *   create: {
     *     // ... data to create a LeadNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadNote we want to update
     *   }
     * })
     */
    upsert<T extends LeadNoteUpsertArgs>(args: SelectSubset<T, LeadNoteUpsertArgs<ExtArgs>>): Prisma__LeadNoteClient<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeadNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteCountArgs} args - Arguments to filter LeadNotes to count.
     * @example
     * // Count the number of LeadNotes
     * const count = await prisma.leadNote.count({
     *   where: {
     *     // ... the filter for the LeadNotes we want to count
     *   }
     * })
    **/
    count<T extends LeadNoteCountArgs>(
      args?: Subset<T, LeadNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadNoteAggregateArgs>(args: Subset<T, LeadNoteAggregateArgs>): Prisma.PrismaPromise<GetLeadNoteAggregateType<T>>

    /**
     * Group by LeadNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadNoteGroupByArgs} args - Group by arguments.
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
      T extends LeadNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadNoteGroupByArgs['orderBy'] }
        : { orderBy?: LeadNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadNote model
   */
  readonly fields: LeadNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeadNote model
   */
  interface LeadNoteFieldRefs {
    readonly id: FieldRef<"LeadNote", 'String'>
    readonly leadId: FieldRef<"LeadNote", 'String'>
    readonly agentId: FieldRef<"LeadNote", 'String'>
    readonly note: FieldRef<"LeadNote", 'String'>
    readonly createdAt: FieldRef<"LeadNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadNote findUnique
   */
  export type LeadNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findUniqueOrThrow
   */
  export type LeadNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote findFirst
   */
  export type LeadNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findFirstOrThrow
   */
  export type LeadNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNote to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote findMany
   */
  export type LeadNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter, which LeadNotes to fetch.
     */
    where?: LeadNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadNotes to fetch.
     */
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadNotes.
     */
    cursor?: LeadNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadNotes.
     */
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
  }

  /**
   * LeadNote create
   */
  export type LeadNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadNote.
     */
    data: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
  }

  /**
   * LeadNote createMany
   */
  export type LeadNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadNote createManyAndReturn
   */
  export type LeadNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to create many LeadNotes.
     */
    data: LeadNoteCreateManyInput | LeadNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote update
   */
  export type LeadNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadNote.
     */
    data: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
    /**
     * Choose, which LeadNote to update.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote updateMany
   */
  export type LeadNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
  }

  /**
   * LeadNote updateManyAndReturn
   */
  export type LeadNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * The data used to update LeadNotes.
     */
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyInput>
    /**
     * Filter which LeadNotes to update
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadNote upsert
   */
  export type LeadNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadNote to update in case it exists.
     */
    where: LeadNoteWhereUniqueInput
    /**
     * In case the LeadNote found by the `where` argument doesn't exist, create a new LeadNote with this data.
     */
    create: XOR<LeadNoteCreateInput, LeadNoteUncheckedCreateInput>
    /**
     * In case the LeadNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadNoteUpdateInput, LeadNoteUncheckedUpdateInput>
  }

  /**
   * LeadNote delete
   */
  export type LeadNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    /**
     * Filter which LeadNote to delete.
     */
    where: LeadNoteWhereUniqueInput
  }

  /**
   * LeadNote deleteMany
   */
  export type LeadNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadNotes to delete
     */
    where?: LeadNoteWhereInput
    /**
     * Limit how many LeadNotes to delete.
     */
    limit?: number
  }

  /**
   * LeadNote without action
   */
  export type LeadNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
  }


  /**
   * Model TestDrive
   */

  export type AggregateTestDrive = {
    _count: TestDriveCountAggregateOutputType | null
    _min: TestDriveMinAggregateOutputType | null
    _max: TestDriveMaxAggregateOutputType | null
  }

  export type TestDriveMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    carId: string | null
    scheduledAt: Date | null
    status: $Enums.TestDriveStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type TestDriveMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    carId: string | null
    scheduledAt: Date | null
    status: $Enums.TestDriveStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type TestDriveCountAggregateOutputType = {
    id: number
    leadId: number
    carId: number
    scheduledAt: number
    status: number
    notes: number
    createdAt: number
    _all: number
  }


  export type TestDriveMinAggregateInputType = {
    id?: true
    leadId?: true
    carId?: true
    scheduledAt?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type TestDriveMaxAggregateInputType = {
    id?: true
    leadId?: true
    carId?: true
    scheduledAt?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type TestDriveCountAggregateInputType = {
    id?: true
    leadId?: true
    carId?: true
    scheduledAt?: true
    status?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type TestDriveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestDrive to aggregate.
     */
    where?: TestDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDrives to fetch.
     */
    orderBy?: TestDriveOrderByWithRelationInput | TestDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDrives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestDrives
    **/
    _count?: true | TestDriveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestDriveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestDriveMaxAggregateInputType
  }

  export type GetTestDriveAggregateType<T extends TestDriveAggregateArgs> = {
        [P in keyof T & keyof AggregateTestDrive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestDrive[P]>
      : GetScalarType<T[P], AggregateTestDrive[P]>
  }




  export type TestDriveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveWhereInput
    orderBy?: TestDriveOrderByWithAggregationInput | TestDriveOrderByWithAggregationInput[]
    by: TestDriveScalarFieldEnum[] | TestDriveScalarFieldEnum
    having?: TestDriveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestDriveCountAggregateInputType | true
    _min?: TestDriveMinAggregateInputType
    _max?: TestDriveMaxAggregateInputType
  }

  export type TestDriveGroupByOutputType = {
    id: string
    leadId: string
    carId: string
    scheduledAt: Date
    status: $Enums.TestDriveStatus
    notes: string | null
    createdAt: Date
    _count: TestDriveCountAggregateOutputType | null
    _min: TestDriveMinAggregateOutputType | null
    _max: TestDriveMaxAggregateOutputType | null
  }

  type GetTestDriveGroupByPayload<T extends TestDriveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestDriveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestDriveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestDriveGroupByOutputType[P]>
            : GetScalarType<T[P], TestDriveGroupByOutputType[P]>
        }
      >
    >


  export type TestDriveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    carId?: boolean
    scheduledAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDrive"]>

  export type TestDriveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    carId?: boolean
    scheduledAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDrive"]>

  export type TestDriveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    carId?: boolean
    scheduledAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDrive"]>

  export type TestDriveSelectScalar = {
    id?: boolean
    leadId?: boolean
    carId?: boolean
    scheduledAt?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type TestDriveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "carId" | "scheduledAt" | "status" | "notes" | "createdAt", ExtArgs["result"]["testDrive"]>
  export type TestDriveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type TestDriveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type TestDriveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $TestDrivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestDrive"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      carId: string
      scheduledAt: Date
      status: $Enums.TestDriveStatus
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["testDrive"]>
    composites: {}
  }

  type TestDriveGetPayload<S extends boolean | null | undefined | TestDriveDefaultArgs> = $Result.GetResult<Prisma.$TestDrivePayload, S>

  type TestDriveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestDriveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestDriveCountAggregateInputType | true
    }

  export interface TestDriveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestDrive'], meta: { name: 'TestDrive' } }
    /**
     * Find zero or one TestDrive that matches the filter.
     * @param {TestDriveFindUniqueArgs} args - Arguments to find a TestDrive
     * @example
     * // Get one TestDrive
     * const testDrive = await prisma.testDrive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestDriveFindUniqueArgs>(args: SelectSubset<T, TestDriveFindUniqueArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestDrive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestDriveFindUniqueOrThrowArgs} args - Arguments to find a TestDrive
     * @example
     * // Get one TestDrive
     * const testDrive = await prisma.testDrive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestDriveFindUniqueOrThrowArgs>(args: SelectSubset<T, TestDriveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestDrive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveFindFirstArgs} args - Arguments to find a TestDrive
     * @example
     * // Get one TestDrive
     * const testDrive = await prisma.testDrive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestDriveFindFirstArgs>(args?: SelectSubset<T, TestDriveFindFirstArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestDrive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveFindFirstOrThrowArgs} args - Arguments to find a TestDrive
     * @example
     * // Get one TestDrive
     * const testDrive = await prisma.testDrive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestDriveFindFirstOrThrowArgs>(args?: SelectSubset<T, TestDriveFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestDrives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestDrives
     * const testDrives = await prisma.testDrive.findMany()
     * 
     * // Get first 10 TestDrives
     * const testDrives = await prisma.testDrive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testDriveWithIdOnly = await prisma.testDrive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestDriveFindManyArgs>(args?: SelectSubset<T, TestDriveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestDrive.
     * @param {TestDriveCreateArgs} args - Arguments to create a TestDrive.
     * @example
     * // Create one TestDrive
     * const TestDrive = await prisma.testDrive.create({
     *   data: {
     *     // ... data to create a TestDrive
     *   }
     * })
     * 
     */
    create<T extends TestDriveCreateArgs>(args: SelectSubset<T, TestDriveCreateArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestDrives.
     * @param {TestDriveCreateManyArgs} args - Arguments to create many TestDrives.
     * @example
     * // Create many TestDrives
     * const testDrive = await prisma.testDrive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestDriveCreateManyArgs>(args?: SelectSubset<T, TestDriveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestDrives and returns the data saved in the database.
     * @param {TestDriveCreateManyAndReturnArgs} args - Arguments to create many TestDrives.
     * @example
     * // Create many TestDrives
     * const testDrive = await prisma.testDrive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestDrives and only return the `id`
     * const testDriveWithIdOnly = await prisma.testDrive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestDriveCreateManyAndReturnArgs>(args?: SelectSubset<T, TestDriveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestDrive.
     * @param {TestDriveDeleteArgs} args - Arguments to delete one TestDrive.
     * @example
     * // Delete one TestDrive
     * const TestDrive = await prisma.testDrive.delete({
     *   where: {
     *     // ... filter to delete one TestDrive
     *   }
     * })
     * 
     */
    delete<T extends TestDriveDeleteArgs>(args: SelectSubset<T, TestDriveDeleteArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestDrive.
     * @param {TestDriveUpdateArgs} args - Arguments to update one TestDrive.
     * @example
     * // Update one TestDrive
     * const testDrive = await prisma.testDrive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestDriveUpdateArgs>(args: SelectSubset<T, TestDriveUpdateArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestDrives.
     * @param {TestDriveDeleteManyArgs} args - Arguments to filter TestDrives to delete.
     * @example
     * // Delete a few TestDrives
     * const { count } = await prisma.testDrive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDriveDeleteManyArgs>(args?: SelectSubset<T, TestDriveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestDrives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestDrives
     * const testDrive = await prisma.testDrive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestDriveUpdateManyArgs>(args: SelectSubset<T, TestDriveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestDrives and returns the data updated in the database.
     * @param {TestDriveUpdateManyAndReturnArgs} args - Arguments to update many TestDrives.
     * @example
     * // Update many TestDrives
     * const testDrive = await prisma.testDrive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestDrives and only return the `id`
     * const testDriveWithIdOnly = await prisma.testDrive.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestDriveUpdateManyAndReturnArgs>(args: SelectSubset<T, TestDriveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestDrive.
     * @param {TestDriveUpsertArgs} args - Arguments to update or create a TestDrive.
     * @example
     * // Update or create a TestDrive
     * const testDrive = await prisma.testDrive.upsert({
     *   create: {
     *     // ... data to create a TestDrive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestDrive we want to update
     *   }
     * })
     */
    upsert<T extends TestDriveUpsertArgs>(args: SelectSubset<T, TestDriveUpsertArgs<ExtArgs>>): Prisma__TestDriveClient<$Result.GetResult<Prisma.$TestDrivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestDrives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveCountArgs} args - Arguments to filter TestDrives to count.
     * @example
     * // Count the number of TestDrives
     * const count = await prisma.testDrive.count({
     *   where: {
     *     // ... the filter for the TestDrives we want to count
     *   }
     * })
    **/
    count<T extends TestDriveCountArgs>(
      args?: Subset<T, TestDriveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestDriveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestDrive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestDriveAggregateArgs>(args: Subset<T, TestDriveAggregateArgs>): Prisma.PrismaPromise<GetTestDriveAggregateType<T>>

    /**
     * Group by TestDrive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveGroupByArgs} args - Group by arguments.
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
      T extends TestDriveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestDriveGroupByArgs['orderBy'] }
        : { orderBy?: TestDriveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestDriveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestDriveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestDrive model
   */
  readonly fields: TestDriveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestDrive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestDriveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TestDrive model
   */
  interface TestDriveFieldRefs {
    readonly id: FieldRef<"TestDrive", 'String'>
    readonly leadId: FieldRef<"TestDrive", 'String'>
    readonly carId: FieldRef<"TestDrive", 'String'>
    readonly scheduledAt: FieldRef<"TestDrive", 'DateTime'>
    readonly status: FieldRef<"TestDrive", 'TestDriveStatus'>
    readonly notes: FieldRef<"TestDrive", 'String'>
    readonly createdAt: FieldRef<"TestDrive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestDrive findUnique
   */
  export type TestDriveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * Filter, which TestDrive to fetch.
     */
    where: TestDriveWhereUniqueInput
  }

  /**
   * TestDrive findUniqueOrThrow
   */
  export type TestDriveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * Filter, which TestDrive to fetch.
     */
    where: TestDriveWhereUniqueInput
  }

  /**
   * TestDrive findFirst
   */
  export type TestDriveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * Filter, which TestDrive to fetch.
     */
    where?: TestDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDrives to fetch.
     */
    orderBy?: TestDriveOrderByWithRelationInput | TestDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestDrives.
     */
    cursor?: TestDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDrives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestDrives.
     */
    distinct?: TestDriveScalarFieldEnum | TestDriveScalarFieldEnum[]
  }

  /**
   * TestDrive findFirstOrThrow
   */
  export type TestDriveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * Filter, which TestDrive to fetch.
     */
    where?: TestDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDrives to fetch.
     */
    orderBy?: TestDriveOrderByWithRelationInput | TestDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestDrives.
     */
    cursor?: TestDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDrives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestDrives.
     */
    distinct?: TestDriveScalarFieldEnum | TestDriveScalarFieldEnum[]
  }

  /**
   * TestDrive findMany
   */
  export type TestDriveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * Filter, which TestDrives to fetch.
     */
    where?: TestDriveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDrives to fetch.
     */
    orderBy?: TestDriveOrderByWithRelationInput | TestDriveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestDrives.
     */
    cursor?: TestDriveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDrives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDrives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestDrives.
     */
    distinct?: TestDriveScalarFieldEnum | TestDriveScalarFieldEnum[]
  }

  /**
   * TestDrive create
   */
  export type TestDriveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * The data needed to create a TestDrive.
     */
    data: XOR<TestDriveCreateInput, TestDriveUncheckedCreateInput>
  }

  /**
   * TestDrive createMany
   */
  export type TestDriveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestDrives.
     */
    data: TestDriveCreateManyInput | TestDriveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestDrive createManyAndReturn
   */
  export type TestDriveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * The data used to create many TestDrives.
     */
    data: TestDriveCreateManyInput | TestDriveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestDrive update
   */
  export type TestDriveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * The data needed to update a TestDrive.
     */
    data: XOR<TestDriveUpdateInput, TestDriveUncheckedUpdateInput>
    /**
     * Choose, which TestDrive to update.
     */
    where: TestDriveWhereUniqueInput
  }

  /**
   * TestDrive updateMany
   */
  export type TestDriveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestDrives.
     */
    data: XOR<TestDriveUpdateManyMutationInput, TestDriveUncheckedUpdateManyInput>
    /**
     * Filter which TestDrives to update
     */
    where?: TestDriveWhereInput
    /**
     * Limit how many TestDrives to update.
     */
    limit?: number
  }

  /**
   * TestDrive updateManyAndReturn
   */
  export type TestDriveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * The data used to update TestDrives.
     */
    data: XOR<TestDriveUpdateManyMutationInput, TestDriveUncheckedUpdateManyInput>
    /**
     * Filter which TestDrives to update
     */
    where?: TestDriveWhereInput
    /**
     * Limit how many TestDrives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestDrive upsert
   */
  export type TestDriveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * The filter to search for the TestDrive to update in case it exists.
     */
    where: TestDriveWhereUniqueInput
    /**
     * In case the TestDrive found by the `where` argument doesn't exist, create a new TestDrive with this data.
     */
    create: XOR<TestDriveCreateInput, TestDriveUncheckedCreateInput>
    /**
     * In case the TestDrive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestDriveUpdateInput, TestDriveUncheckedUpdateInput>
  }

  /**
   * TestDrive delete
   */
  export type TestDriveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
    /**
     * Filter which TestDrive to delete.
     */
    where: TestDriveWhereUniqueInput
  }

  /**
   * TestDrive deleteMany
   */
  export type TestDriveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestDrives to delete
     */
    where?: TestDriveWhereInput
    /**
     * Limit how many TestDrives to delete.
     */
    limit?: number
  }

  /**
   * TestDrive without action
   */
  export type TestDriveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDrive
     */
    select?: TestDriveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDrive
     */
    omit?: TestDriveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveInclude<ExtArgs> | null
  }


  /**
   * Model Showroom
   */

  export type AggregateShowroom = {
    _count: ShowroomCountAggregateOutputType | null
    _min: ShowroomMinAggregateOutputType | null
    _max: ShowroomMaxAggregateOutputType | null
  }

  export type ShowroomMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    contactEmail: string | null
    contactPhone: string | null
    active: boolean | null
    approvalRequired: boolean | null
    brandingVisible: boolean | null
    createdAt: Date | null
  }

  export type ShowroomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    contactEmail: string | null
    contactPhone: string | null
    active: boolean | null
    approvalRequired: boolean | null
    brandingVisible: boolean | null
    createdAt: Date | null
  }

  export type ShowroomCountAggregateOutputType = {
    id: number
    name: number
    location: number
    contactEmail: number
    contactPhone: number
    active: number
    approvalRequired: number
    brandingVisible: number
    createdAt: number
    _all: number
  }


  export type ShowroomMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    contactEmail?: true
    contactPhone?: true
    active?: true
    approvalRequired?: true
    brandingVisible?: true
    createdAt?: true
  }

  export type ShowroomMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    contactEmail?: true
    contactPhone?: true
    active?: true
    approvalRequired?: true
    brandingVisible?: true
    createdAt?: true
  }

  export type ShowroomCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    contactEmail?: true
    contactPhone?: true
    active?: true
    approvalRequired?: true
    brandingVisible?: true
    createdAt?: true
    _all?: true
  }

  export type ShowroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showroom to aggregate.
     */
    where?: ShowroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showrooms to fetch.
     */
    orderBy?: ShowroomOrderByWithRelationInput | ShowroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Showrooms
    **/
    _count?: true | ShowroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowroomMaxAggregateInputType
  }

  export type GetShowroomAggregateType<T extends ShowroomAggregateArgs> = {
        [P in keyof T & keyof AggregateShowroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowroom[P]>
      : GetScalarType<T[P], AggregateShowroom[P]>
  }




  export type ShowroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowroomWhereInput
    orderBy?: ShowroomOrderByWithAggregationInput | ShowroomOrderByWithAggregationInput[]
    by: ShowroomScalarFieldEnum[] | ShowroomScalarFieldEnum
    having?: ShowroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowroomCountAggregateInputType | true
    _min?: ShowroomMinAggregateInputType
    _max?: ShowroomMaxAggregateInputType
  }

  export type ShowroomGroupByOutputType = {
    id: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active: boolean
    approvalRequired: boolean
    brandingVisible: boolean
    createdAt: Date
    _count: ShowroomCountAggregateOutputType | null
    _min: ShowroomMinAggregateOutputType | null
    _max: ShowroomMaxAggregateOutputType | null
  }

  type GetShowroomGroupByPayload<T extends ShowroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowroomGroupByOutputType[P]>
            : GetScalarType<T[P], ShowroomGroupByOutputType[P]>
        }
      >
    >


  export type ShowroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: boolean
    cars?: boolean | Showroom$carsArgs<ExtArgs>
    users?: boolean | Showroom$usersArgs<ExtArgs>
    _count?: boolean | ShowroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["showroom"]>

  export type ShowroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["showroom"]>

  export type ShowroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["showroom"]>

  export type ShowroomSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    contactEmail?: boolean
    contactPhone?: boolean
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: boolean
  }

  export type ShowroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "contactEmail" | "contactPhone" | "active" | "approvalRequired" | "brandingVisible" | "createdAt", ExtArgs["result"]["showroom"]>
  export type ShowroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cars?: boolean | Showroom$carsArgs<ExtArgs>
    users?: boolean | Showroom$usersArgs<ExtArgs>
    _count?: boolean | ShowroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShowroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShowroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShowroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Showroom"
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      contactEmail: string
      contactPhone: string
      active: boolean
      approvalRequired: boolean
      brandingVisible: boolean
      createdAt: Date
    }, ExtArgs["result"]["showroom"]>
    composites: {}
  }

  type ShowroomGetPayload<S extends boolean | null | undefined | ShowroomDefaultArgs> = $Result.GetResult<Prisma.$ShowroomPayload, S>

  type ShowroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowroomCountAggregateInputType | true
    }

  export interface ShowroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Showroom'], meta: { name: 'Showroom' } }
    /**
     * Find zero or one Showroom that matches the filter.
     * @param {ShowroomFindUniqueArgs} args - Arguments to find a Showroom
     * @example
     * // Get one Showroom
     * const showroom = await prisma.showroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowroomFindUniqueArgs>(args: SelectSubset<T, ShowroomFindUniqueArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Showroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowroomFindUniqueOrThrowArgs} args - Arguments to find a Showroom
     * @example
     * // Get one Showroom
     * const showroom = await prisma.showroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowroomFindFirstArgs} args - Arguments to find a Showroom
     * @example
     * // Get one Showroom
     * const showroom = await prisma.showroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowroomFindFirstArgs>(args?: SelectSubset<T, ShowroomFindFirstArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Showroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowroomFindFirstOrThrowArgs} args - Arguments to find a Showroom
     * @example
     * // Get one Showroom
     * const showroom = await prisma.showroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Showrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Showrooms
     * const showrooms = await prisma.showroom.findMany()
     * 
     * // Get first 10 Showrooms
     * const showrooms = await prisma.showroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const showroomWithIdOnly = await prisma.showroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShowroomFindManyArgs>(args?: SelectSubset<T, ShowroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Showroom.
     * @param {ShowroomCreateArgs} args - Arguments to create a Showroom.
     * @example
     * // Create one Showroom
     * const Showroom = await prisma.showroom.create({
     *   data: {
     *     // ... data to create a Showroom
     *   }
     * })
     * 
     */
    create<T extends ShowroomCreateArgs>(args: SelectSubset<T, ShowroomCreateArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Showrooms.
     * @param {ShowroomCreateManyArgs} args - Arguments to create many Showrooms.
     * @example
     * // Create many Showrooms
     * const showroom = await prisma.showroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowroomCreateManyArgs>(args?: SelectSubset<T, ShowroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Showrooms and returns the data saved in the database.
     * @param {ShowroomCreateManyAndReturnArgs} args - Arguments to create many Showrooms.
     * @example
     * // Create many Showrooms
     * const showroom = await prisma.showroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Showrooms and only return the `id`
     * const showroomWithIdOnly = await prisma.showroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Showroom.
     * @param {ShowroomDeleteArgs} args - Arguments to delete one Showroom.
     * @example
     * // Delete one Showroom
     * const Showroom = await prisma.showroom.delete({
     *   where: {
     *     // ... filter to delete one Showroom
     *   }
     * })
     * 
     */
    delete<T extends ShowroomDeleteArgs>(args: SelectSubset<T, ShowroomDeleteArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Showroom.
     * @param {ShowroomUpdateArgs} args - Arguments to update one Showroom.
     * @example
     * // Update one Showroom
     * const showroom = await prisma.showroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowroomUpdateArgs>(args: SelectSubset<T, ShowroomUpdateArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Showrooms.
     * @param {ShowroomDeleteManyArgs} args - Arguments to filter Showrooms to delete.
     * @example
     * // Delete a few Showrooms
     * const { count } = await prisma.showroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowroomDeleteManyArgs>(args?: SelectSubset<T, ShowroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Showrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Showrooms
     * const showroom = await prisma.showroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowroomUpdateManyArgs>(args: SelectSubset<T, ShowroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Showrooms and returns the data updated in the database.
     * @param {ShowroomUpdateManyAndReturnArgs} args - Arguments to update many Showrooms.
     * @example
     * // Update many Showrooms
     * const showroom = await prisma.showroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Showrooms and only return the `id`
     * const showroomWithIdOnly = await prisma.showroom.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShowroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Showroom.
     * @param {ShowroomUpsertArgs} args - Arguments to update or create a Showroom.
     * @example
     * // Update or create a Showroom
     * const showroom = await prisma.showroom.upsert({
     *   create: {
     *     // ... data to create a Showroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Showroom we want to update
     *   }
     * })
     */
    upsert<T extends ShowroomUpsertArgs>(args: SelectSubset<T, ShowroomUpsertArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Showrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowroomCountArgs} args - Arguments to filter Showrooms to count.
     * @example
     * // Count the number of Showrooms
     * const count = await prisma.showroom.count({
     *   where: {
     *     // ... the filter for the Showrooms we want to count
     *   }
     * })
    **/
    count<T extends ShowroomCountArgs>(
      args?: Subset<T, ShowroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Showroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShowroomAggregateArgs>(args: Subset<T, ShowroomAggregateArgs>): Prisma.PrismaPromise<GetShowroomAggregateType<T>>

    /**
     * Group by Showroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowroomGroupByArgs} args - Group by arguments.
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
      T extends ShowroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowroomGroupByArgs['orderBy'] }
        : { orderBy?: ShowroomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShowroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Showroom model
   */
  readonly fields: ShowroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Showroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cars<T extends Showroom$carsArgs<ExtArgs> = {}>(args?: Subset<T, Showroom$carsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Showroom$usersArgs<ExtArgs> = {}>(args?: Subset<T, Showroom$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Showroom model
   */
  interface ShowroomFieldRefs {
    readonly id: FieldRef<"Showroom", 'String'>
    readonly name: FieldRef<"Showroom", 'String'>
    readonly location: FieldRef<"Showroom", 'String'>
    readonly contactEmail: FieldRef<"Showroom", 'String'>
    readonly contactPhone: FieldRef<"Showroom", 'String'>
    readonly active: FieldRef<"Showroom", 'Boolean'>
    readonly approvalRequired: FieldRef<"Showroom", 'Boolean'>
    readonly brandingVisible: FieldRef<"Showroom", 'Boolean'>
    readonly createdAt: FieldRef<"Showroom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Showroom findUnique
   */
  export type ShowroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * Filter, which Showroom to fetch.
     */
    where: ShowroomWhereUniqueInput
  }

  /**
   * Showroom findUniqueOrThrow
   */
  export type ShowroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * Filter, which Showroom to fetch.
     */
    where: ShowroomWhereUniqueInput
  }

  /**
   * Showroom findFirst
   */
  export type ShowroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * Filter, which Showroom to fetch.
     */
    where?: ShowroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showrooms to fetch.
     */
    orderBy?: ShowroomOrderByWithRelationInput | ShowroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showrooms.
     */
    cursor?: ShowroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showrooms.
     */
    distinct?: ShowroomScalarFieldEnum | ShowroomScalarFieldEnum[]
  }

  /**
   * Showroom findFirstOrThrow
   */
  export type ShowroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * Filter, which Showroom to fetch.
     */
    where?: ShowroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showrooms to fetch.
     */
    orderBy?: ShowroomOrderByWithRelationInput | ShowroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Showrooms.
     */
    cursor?: ShowroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showrooms.
     */
    distinct?: ShowroomScalarFieldEnum | ShowroomScalarFieldEnum[]
  }

  /**
   * Showroom findMany
   */
  export type ShowroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * Filter, which Showrooms to fetch.
     */
    where?: ShowroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Showrooms to fetch.
     */
    orderBy?: ShowroomOrderByWithRelationInput | ShowroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Showrooms.
     */
    cursor?: ShowroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Showrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Showrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Showrooms.
     */
    distinct?: ShowroomScalarFieldEnum | ShowroomScalarFieldEnum[]
  }

  /**
   * Showroom create
   */
  export type ShowroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Showroom.
     */
    data: XOR<ShowroomCreateInput, ShowroomUncheckedCreateInput>
  }

  /**
   * Showroom createMany
   */
  export type ShowroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Showrooms.
     */
    data: ShowroomCreateManyInput | ShowroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Showroom createManyAndReturn
   */
  export type ShowroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * The data used to create many Showrooms.
     */
    data: ShowroomCreateManyInput | ShowroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Showroom update
   */
  export type ShowroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Showroom.
     */
    data: XOR<ShowroomUpdateInput, ShowroomUncheckedUpdateInput>
    /**
     * Choose, which Showroom to update.
     */
    where: ShowroomWhereUniqueInput
  }

  /**
   * Showroom updateMany
   */
  export type ShowroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Showrooms.
     */
    data: XOR<ShowroomUpdateManyMutationInput, ShowroomUncheckedUpdateManyInput>
    /**
     * Filter which Showrooms to update
     */
    where?: ShowroomWhereInput
    /**
     * Limit how many Showrooms to update.
     */
    limit?: number
  }

  /**
   * Showroom updateManyAndReturn
   */
  export type ShowroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * The data used to update Showrooms.
     */
    data: XOR<ShowroomUpdateManyMutationInput, ShowroomUncheckedUpdateManyInput>
    /**
     * Filter which Showrooms to update
     */
    where?: ShowroomWhereInput
    /**
     * Limit how many Showrooms to update.
     */
    limit?: number
  }

  /**
   * Showroom upsert
   */
  export type ShowroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Showroom to update in case it exists.
     */
    where: ShowroomWhereUniqueInput
    /**
     * In case the Showroom found by the `where` argument doesn't exist, create a new Showroom with this data.
     */
    create: XOR<ShowroomCreateInput, ShowroomUncheckedCreateInput>
    /**
     * In case the Showroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowroomUpdateInput, ShowroomUncheckedUpdateInput>
  }

  /**
   * Showroom delete
   */
  export type ShowroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    /**
     * Filter which Showroom to delete.
     */
    where: ShowroomWhereUniqueInput
  }

  /**
   * Showroom deleteMany
   */
  export type ShowroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Showrooms to delete
     */
    where?: ShowroomWhereInput
    /**
     * Limit how many Showrooms to delete.
     */
    limit?: number
  }

  /**
   * Showroom.cars
   */
  export type Showroom$carsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Showroom.users
   */
  export type Showroom$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Showroom without action
   */
  export type ShowroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
  }


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
    email: string | null
    fullName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    showroomId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    showroomId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    phone: number
    role: number
    showroomId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    phone?: true
    role?: true
    showroomId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    phone?: true
    role?: true
    showroomId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    phone?: true
    role?: true
    showroomId?: true
    createdAt?: true
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
    email: string
    fullName: string
    phone: string | null
    role: $Enums.UserRole
    showroomId: string | null
    createdAt: Date
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
    email?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    showroomId?: boolean
    createdAt?: boolean
    showroom?: boolean | User$showroomArgs<ExtArgs>
    leads?: boolean | User$leadsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    showroomId?: boolean
    createdAt?: boolean
    showroom?: boolean | User$showroomArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    showroomId?: boolean
    createdAt?: boolean
    showroom?: boolean | User$showroomArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    showroomId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "phone" | "role" | "showroomId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showroom?: boolean | User$showroomArgs<ExtArgs>
    leads?: boolean | User$leadsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showroom?: boolean | User$showroomArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showroom?: boolean | User$showroomArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      showroom: Prisma.$ShowroomPayload<ExtArgs> | null
      leads: Prisma.$LeadPayload<ExtArgs>[]
      notes: Prisma.$LeadNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string
      phone: string | null
      role: $Enums.UserRole
      showroomId: string | null
      createdAt: Date
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
    showroom<T extends User$showroomArgs<ExtArgs> = {}>(args?: Subset<T, User$showroomArgs<ExtArgs>>): Prisma__ShowroomClient<$Result.GetResult<Prisma.$ShowroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leads<T extends User$leadsArgs<ExtArgs> = {}>(args?: Subset<T, User$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly showroomId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.showroom
   */
  export type User$showroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Showroom
     */
    select?: ShowroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Showroom
     */
    omit?: ShowroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowroomInclude<ExtArgs> | null
    where?: ShowroomWhereInput
  }

  /**
   * User.leads
   */
  export type User$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadNote
     */
    select?: LeadNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeadNote
     */
    omit?: LeadNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadNoteInclude<ExtArgs> | null
    where?: LeadNoteWhereInput
    orderBy?: LeadNoteOrderByWithRelationInput | LeadNoteOrderByWithRelationInput[]
    cursor?: LeadNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadNoteScalarFieldEnum | LeadNoteScalarFieldEnum[]
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
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: string | null
    carId: string | null
    buyerName: string | null
    buyerPhone: string | null
    message: string | null
    waLinkClicked: boolean | null
    createdAt: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: string | null
    carId: string | null
    buyerName: string | null
    buyerPhone: string | null
    message: string | null
    waLinkClicked: boolean | null
    createdAt: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    carId: number
    buyerName: number
    buyerPhone: number
    message: number
    waLinkClicked: number
    createdAt: number
    _all: number
  }


  export type EnquiryMinAggregateInputType = {
    id?: true
    carId?: true
    buyerName?: true
    buyerPhone?: true
    message?: true
    waLinkClicked?: true
    createdAt?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    carId?: true
    buyerName?: true
    buyerPhone?: true
    message?: true
    waLinkClicked?: true
    createdAt?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    carId?: true
    buyerName?: true
    buyerPhone?: true
    message?: true
    waLinkClicked?: true
    createdAt?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: string
    carId: string
    buyerName: string | null
    buyerPhone: string | null
    message: string | null
    waLinkClicked: boolean
    createdAt: Date
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    message?: boolean
    waLinkClicked?: boolean
    createdAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    message?: boolean
    waLinkClicked?: boolean
    createdAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    message?: boolean
    waLinkClicked?: boolean
    createdAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectScalar = {
    id?: boolean
    carId?: boolean
    buyerName?: boolean
    buyerPhone?: boolean
    message?: boolean
    waLinkClicked?: boolean
    createdAt?: boolean
  }

  export type EnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "buyerName" | "buyerPhone" | "message" | "waLinkClicked" | "createdAt", ExtArgs["result"]["enquiry"]>
  export type EnquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type EnquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type EnquiryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carId: string
      buyerName: string | null
      buyerPhone: string | null
      message: string | null
      waLinkClicked: boolean
      createdAt: Date
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enquiries and returns the data saved in the database.
     * @param {EnquiryCreateManyAndReturnArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, EnquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries and returns the data updated in the database.
     * @param {EnquiryUpdateManyAndReturnArgs} args - Arguments to update many Enquiries.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, EnquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
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
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enquiry model
   */
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'String'>
    readonly carId: FieldRef<"Enquiry", 'String'>
    readonly buyerName: FieldRef<"Enquiry", 'String'>
    readonly buyerPhone: FieldRef<"Enquiry", 'String'>
    readonly message: FieldRef<"Enquiry", 'String'>
    readonly waLinkClicked: FieldRef<"Enquiry", 'Boolean'>
    readonly createdAt: FieldRef<"Enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry createManyAndReturn
   */
  export type EnquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry updateManyAndReturn
   */
  export type EnquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to delete.
     */
    limit?: number
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnquiryInclude<ExtArgs> | null
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


  export const CarScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    make: 'make',
    model: 'model',
    year: 'year',
    price: 'price',
    mileage: 'mileage',
    fuelType: 'fuelType',
    transmission: 'transmission',
    driveType: 'driveType',
    bodyType: 'bodyType',
    colour: 'colour',
    seats: 'seats',
    condition: 'condition',
    importFrom: 'importFrom',
    description: 'description',
    location: 'location',
    status: 'status',
    featured: 'featured',
    showroomId: 'showroomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    url: 'url',
    imagekitId: 'imagekitId',
    order: 'order',
    isPrimary: 'isPrimary'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    buyerName: 'buyerName',
    buyerPhone: 'buyerPhone',
    buyerEmail: 'buyerEmail',
    source: 'source',
    status: 'status',
    agentId: 'agentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const LeadNoteScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    agentId: 'agentId',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type LeadNoteScalarFieldEnum = (typeof LeadNoteScalarFieldEnum)[keyof typeof LeadNoteScalarFieldEnum]


  export const TestDriveScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    carId: 'carId',
    scheduledAt: 'scheduledAt',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type TestDriveScalarFieldEnum = (typeof TestDriveScalarFieldEnum)[keyof typeof TestDriveScalarFieldEnum]


  export const ShowroomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    active: 'active',
    approvalRequired: 'approvalRequired',
    brandingVisible: 'brandingVisible',
    createdAt: 'createdAt'
  };

  export type ShowroomScalarFieldEnum = (typeof ShowroomScalarFieldEnum)[keyof typeof ShowroomScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    phone: 'phone',
    role: 'role',
    showroomId: 'showroomId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    buyerName: 'buyerName',
    buyerPhone: 'buyerPhone',
    message: 'message',
    waLinkClicked: 'waLinkClicked',
    createdAt: 'createdAt'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CarStatus'
   */
  export type EnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus'>
    


  /**
   * Reference to a field of type 'CarStatus[]'
   */
  export type ListEnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LeadSource'
   */
  export type EnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource'>
    


  /**
   * Reference to a field of type 'LeadSource[]'
   */
  export type ListEnumLeadSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadSource[]'>
    


  /**
   * Reference to a field of type 'LeadStatus'
   */
  export type EnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus'>
    


  /**
   * Reference to a field of type 'LeadStatus[]'
   */
  export type ListEnumLeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeadStatus[]'>
    


  /**
   * Reference to a field of type 'TestDriveStatus'
   */
  export type EnumTestDriveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestDriveStatus'>
    


  /**
   * Reference to a field of type 'TestDriveStatus[]'
   */
  export type ListEnumTestDriveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestDriveStatus[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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


  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: StringFilter<"Car"> | string
    slug?: StringFilter<"Car"> | string
    title?: StringFilter<"Car"> | string
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    driveType?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    colour?: StringFilter<"Car"> | string
    seats?: IntFilter<"Car"> | number
    condition?: StringFilter<"Car"> | string
    importFrom?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    location?: StringFilter<"Car"> | string
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    showroomId?: StringNullableFilter<"Car"> | string | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    showroom?: XOR<ShowroomNullableScalarRelationFilter, ShowroomWhereInput> | null
    images?: ImageListRelationFilter
    leads?: LeadListRelationFilter
    enquiries?: EnquiryListRelationFilter
    testDrives?: TestDriveListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    driveType?: SortOrder
    bodyType?: SortOrder
    colour?: SortOrder
    seats?: SortOrder
    condition?: SortOrder
    importFrom?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    showroomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    showroom?: ShowroomOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
    enquiries?: EnquiryOrderByRelationAggregateInput
    testDrives?: TestDriveOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    title?: StringFilter<"Car"> | string
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    driveType?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    colour?: StringFilter<"Car"> | string
    seats?: IntFilter<"Car"> | number
    condition?: StringFilter<"Car"> | string
    importFrom?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    location?: StringFilter<"Car"> | string
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    showroomId?: StringNullableFilter<"Car"> | string | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    showroom?: XOR<ShowroomNullableScalarRelationFilter, ShowroomWhereInput> | null
    images?: ImageListRelationFilter
    leads?: LeadListRelationFilter
    enquiries?: EnquiryListRelationFilter
    testDrives?: TestDriveListRelationFilter
  }, "id" | "slug">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    driveType?: SortOrder
    bodyType?: SortOrder
    colour?: SortOrder
    seats?: SortOrder
    condition?: SortOrder
    importFrom?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    showroomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Car"> | string
    slug?: StringWithAggregatesFilter<"Car"> | string
    title?: StringWithAggregatesFilter<"Car"> | string
    make?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    price?: IntWithAggregatesFilter<"Car"> | number
    mileage?: IntWithAggregatesFilter<"Car"> | number
    fuelType?: StringWithAggregatesFilter<"Car"> | string
    transmission?: StringWithAggregatesFilter<"Car"> | string
    driveType?: StringWithAggregatesFilter<"Car"> | string
    bodyType?: StringWithAggregatesFilter<"Car"> | string
    colour?: StringWithAggregatesFilter<"Car"> | string
    seats?: IntWithAggregatesFilter<"Car"> | number
    condition?: StringWithAggregatesFilter<"Car"> | string
    importFrom?: StringNullableWithAggregatesFilter<"Car"> | string | null
    description?: StringNullableWithAggregatesFilter<"Car"> | string | null
    location?: StringWithAggregatesFilter<"Car"> | string
    status?: EnumCarStatusWithAggregatesFilter<"Car"> | $Enums.CarStatus
    featured?: BoolWithAggregatesFilter<"Car"> | boolean
    showroomId?: StringNullableWithAggregatesFilter<"Car"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    carId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    imagekitId?: StringNullableFilter<"Image"> | string | null
    order?: IntFilter<"Image"> | number
    isPrimary?: BoolFilter<"Image"> | boolean
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    imagekitId?: SortOrderInput | SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    carId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    imagekitId?: StringNullableFilter<"Image"> | string | null
    order?: IntFilter<"Image"> | number
    isPrimary?: BoolFilter<"Image"> | boolean
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    imagekitId?: SortOrderInput | SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    carId?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    imagekitId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    order?: IntWithAggregatesFilter<"Image"> | number
    isPrimary?: BoolWithAggregatesFilter<"Image"> | boolean
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    carId?: StringFilter<"Lead"> | string
    buyerName?: StringFilter<"Lead"> | string
    buyerPhone?: StringFilter<"Lead"> | string
    buyerEmail?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    agentId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    agent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: LeadNoteListRelationFilter
    testDrives?: TestDriveListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    agentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
    agent?: UserOrderByWithRelationInput
    notes?: LeadNoteOrderByRelationAggregateInput
    testDrives?: TestDriveOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    carId?: StringFilter<"Lead"> | string
    buyerName?: StringFilter<"Lead"> | string
    buyerPhone?: StringFilter<"Lead"> | string
    buyerEmail?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    agentId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    agent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: LeadNoteListRelationFilter
    testDrives?: TestDriveListRelationFilter
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrderInput | SortOrder
    source?: SortOrder
    status?: SortOrder
    agentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    carId?: StringWithAggregatesFilter<"Lead"> | string
    buyerName?: StringWithAggregatesFilter<"Lead"> | string
    buyerPhone?: StringWithAggregatesFilter<"Lead"> | string
    buyerEmail?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    source?: EnumLeadSourceWithAggregatesFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusWithAggregatesFilter<"Lead"> | $Enums.LeadStatus
    agentId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type LeadNoteWhereInput = {
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    leadId?: StringFilter<"LeadNote"> | string
    agentId?: StringFilter<"LeadNote"> | string
    note?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    agent?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeadNoteOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
    agent?: UserOrderByWithRelationInput
  }

  export type LeadNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadNoteWhereInput | LeadNoteWhereInput[]
    OR?: LeadNoteWhereInput[]
    NOT?: LeadNoteWhereInput | LeadNoteWhereInput[]
    leadId?: StringFilter<"LeadNote"> | string
    agentId?: StringFilter<"LeadNote"> | string
    note?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    agent?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LeadNoteOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    _count?: LeadNoteCountOrderByAggregateInput
    _max?: LeadNoteMaxOrderByAggregateInput
    _min?: LeadNoteMinOrderByAggregateInput
  }

  export type LeadNoteScalarWhereWithAggregatesInput = {
    AND?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    OR?: LeadNoteScalarWhereWithAggregatesInput[]
    NOT?: LeadNoteScalarWhereWithAggregatesInput | LeadNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadNote"> | string
    leadId?: StringWithAggregatesFilter<"LeadNote"> | string
    agentId?: StringWithAggregatesFilter<"LeadNote"> | string
    note?: StringWithAggregatesFilter<"LeadNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeadNote"> | Date | string
  }

  export type TestDriveWhereInput = {
    AND?: TestDriveWhereInput | TestDriveWhereInput[]
    OR?: TestDriveWhereInput[]
    NOT?: TestDriveWhereInput | TestDriveWhereInput[]
    id?: StringFilter<"TestDrive"> | string
    leadId?: StringFilter<"TestDrive"> | string
    carId?: StringFilter<"TestDrive"> | string
    scheduledAt?: DateTimeFilter<"TestDrive"> | Date | string
    status?: EnumTestDriveStatusFilter<"TestDrive"> | $Enums.TestDriveStatus
    notes?: StringNullableFilter<"TestDrive"> | string | null
    createdAt?: DateTimeFilter<"TestDrive"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type TestDriveOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    carId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type TestDriveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestDriveWhereInput | TestDriveWhereInput[]
    OR?: TestDriveWhereInput[]
    NOT?: TestDriveWhereInput | TestDriveWhereInput[]
    leadId?: StringFilter<"TestDrive"> | string
    carId?: StringFilter<"TestDrive"> | string
    scheduledAt?: DateTimeFilter<"TestDrive"> | Date | string
    status?: EnumTestDriveStatusFilter<"TestDrive"> | $Enums.TestDriveStatus
    notes?: StringNullableFilter<"TestDrive"> | string | null
    createdAt?: DateTimeFilter<"TestDrive"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type TestDriveOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    carId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TestDriveCountOrderByAggregateInput
    _max?: TestDriveMaxOrderByAggregateInput
    _min?: TestDriveMinOrderByAggregateInput
  }

  export type TestDriveScalarWhereWithAggregatesInput = {
    AND?: TestDriveScalarWhereWithAggregatesInput | TestDriveScalarWhereWithAggregatesInput[]
    OR?: TestDriveScalarWhereWithAggregatesInput[]
    NOT?: TestDriveScalarWhereWithAggregatesInput | TestDriveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestDrive"> | string
    leadId?: StringWithAggregatesFilter<"TestDrive"> | string
    carId?: StringWithAggregatesFilter<"TestDrive"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"TestDrive"> | Date | string
    status?: EnumTestDriveStatusWithAggregatesFilter<"TestDrive"> | $Enums.TestDriveStatus
    notes?: StringNullableWithAggregatesFilter<"TestDrive"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestDrive"> | Date | string
  }

  export type ShowroomWhereInput = {
    AND?: ShowroomWhereInput | ShowroomWhereInput[]
    OR?: ShowroomWhereInput[]
    NOT?: ShowroomWhereInput | ShowroomWhereInput[]
    id?: StringFilter<"Showroom"> | string
    name?: StringFilter<"Showroom"> | string
    location?: StringFilter<"Showroom"> | string
    contactEmail?: StringFilter<"Showroom"> | string
    contactPhone?: StringFilter<"Showroom"> | string
    active?: BoolFilter<"Showroom"> | boolean
    approvalRequired?: BoolFilter<"Showroom"> | boolean
    brandingVisible?: BoolFilter<"Showroom"> | boolean
    createdAt?: DateTimeFilter<"Showroom"> | Date | string
    cars?: CarListRelationFilter
    users?: UserListRelationFilter
  }

  export type ShowroomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    active?: SortOrder
    approvalRequired?: SortOrder
    brandingVisible?: SortOrder
    createdAt?: SortOrder
    cars?: CarOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type ShowroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShowroomWhereInput | ShowroomWhereInput[]
    OR?: ShowroomWhereInput[]
    NOT?: ShowroomWhereInput | ShowroomWhereInput[]
    name?: StringFilter<"Showroom"> | string
    location?: StringFilter<"Showroom"> | string
    contactEmail?: StringFilter<"Showroom"> | string
    contactPhone?: StringFilter<"Showroom"> | string
    active?: BoolFilter<"Showroom"> | boolean
    approvalRequired?: BoolFilter<"Showroom"> | boolean
    brandingVisible?: BoolFilter<"Showroom"> | boolean
    createdAt?: DateTimeFilter<"Showroom"> | Date | string
    cars?: CarListRelationFilter
    users?: UserListRelationFilter
  }, "id">

  export type ShowroomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    active?: SortOrder
    approvalRequired?: SortOrder
    brandingVisible?: SortOrder
    createdAt?: SortOrder
    _count?: ShowroomCountOrderByAggregateInput
    _max?: ShowroomMaxOrderByAggregateInput
    _min?: ShowroomMinOrderByAggregateInput
  }

  export type ShowroomScalarWhereWithAggregatesInput = {
    AND?: ShowroomScalarWhereWithAggregatesInput | ShowroomScalarWhereWithAggregatesInput[]
    OR?: ShowroomScalarWhereWithAggregatesInput[]
    NOT?: ShowroomScalarWhereWithAggregatesInput | ShowroomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Showroom"> | string
    name?: StringWithAggregatesFilter<"Showroom"> | string
    location?: StringWithAggregatesFilter<"Showroom"> | string
    contactEmail?: StringWithAggregatesFilter<"Showroom"> | string
    contactPhone?: StringWithAggregatesFilter<"Showroom"> | string
    active?: BoolWithAggregatesFilter<"Showroom"> | boolean
    approvalRequired?: BoolWithAggregatesFilter<"Showroom"> | boolean
    brandingVisible?: BoolWithAggregatesFilter<"Showroom"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Showroom"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    showroomId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    showroom?: XOR<ShowroomNullableScalarRelationFilter, ShowroomWhereInput> | null
    leads?: LeadListRelationFilter
    notes?: LeadNoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    showroomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    showroom?: ShowroomOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
    notes?: LeadNoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    showroomId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    showroom?: XOR<ShowroomNullableScalarRelationFilter, ShowroomWhereInput> | null
    leads?: LeadListRelationFilter
    notes?: LeadNoteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    showroomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    showroomId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: StringFilter<"Enquiry"> | string
    carId?: StringFilter<"Enquiry"> | string
    buyerName?: StringNullableFilter<"Enquiry"> | string | null
    buyerPhone?: StringNullableFilter<"Enquiry"> | string | null
    message?: StringNullableFilter<"Enquiry"> | string | null
    waLinkClicked?: BoolFilter<"Enquiry"> | boolean
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrderInput | SortOrder
    buyerPhone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    waLinkClicked?: SortOrder
    createdAt?: SortOrder
    car?: CarOrderByWithRelationInput
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    carId?: StringFilter<"Enquiry"> | string
    buyerName?: StringNullableFilter<"Enquiry"> | string | null
    buyerPhone?: StringNullableFilter<"Enquiry"> | string | null
    message?: StringNullableFilter<"Enquiry"> | string | null
    waLinkClicked?: BoolFilter<"Enquiry"> | boolean
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrderInput | SortOrder
    buyerPhone?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    waLinkClicked?: SortOrder
    createdAt?: SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enquiry"> | string
    carId?: StringWithAggregatesFilter<"Enquiry"> | string
    buyerName?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    buyerPhone?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    message?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    waLinkClicked?: BoolWithAggregatesFilter<"Enquiry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
  }

  export type CarCreateInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutCarsInput
    images?: ImageCreateNestedManyWithoutCarInput
    leads?: LeadCreateNestedManyWithoutCarInput
    enquiries?: EnquiryCreateNestedManyWithoutCarInput
    testDrives?: TestDriveCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    showroomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutCarInput
    leads?: LeadUncheckedCreateNestedManyWithoutCarInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutCarInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutCarsNestedInput
    images?: ImageUpdateManyWithoutCarNestedInput
    leads?: LeadUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    showroomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    imagekitId?: string | null
    order?: number
    isPrimary?: boolean
    car: CarCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    carId: string
    url: string
    imagekitId?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imagekitId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    car?: CarUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imagekitId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ImageCreateManyInput = {
    id?: string
    carId: string
    url: string
    imagekitId?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imagekitId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imagekitId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadCreateInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutLeadsInput
    agent?: UserCreateNestedOneWithoutLeadsInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    testDrives?: TestDriveCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    carId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    agentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutLeadsNestedInput
    agent?: UserUpdateOneWithoutLeadsNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    testDrives?: TestDriveUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    carId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    agentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteCreateInput = {
    id?: string
    note: string
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutNotesInput
    agent: UserCreateNestedOneWithoutNotesInput
  }

  export type LeadNoteUncheckedCreateInput = {
    id?: string
    leadId: string
    agentId: string
    note: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutNotesNestedInput
    agent?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type LeadNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteCreateManyInput = {
    id?: string
    leadId: string
    agentId: string
    note: string
    createdAt?: Date | string
  }

  export type LeadNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveCreateInput = {
    id?: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutTestDrivesInput
    car: CarCreateNestedOneWithoutTestDrivesInput
  }

  export type TestDriveUncheckedCreateInput = {
    id?: string
    leadId: string
    carId: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type TestDriveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutTestDrivesNestedInput
    car?: CarUpdateOneRequiredWithoutTestDrivesNestedInput
  }

  export type TestDriveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveCreateManyInput = {
    id?: string
    leadId: string
    carId: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type TestDriveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowroomCreateInput = {
    id?: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: Date | string
    cars?: CarCreateNestedManyWithoutShowroomInput
    users?: UserCreateNestedManyWithoutShowroomInput
  }

  export type ShowroomUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutShowroomInput
    users?: UserUncheckedCreateNestedManyWithoutShowroomInput
  }

  export type ShowroomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutShowroomNestedInput
    users?: UserUpdateManyWithoutShowroomNestedInput
  }

  export type ShowroomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutShowroomNestedInput
    users?: UserUncheckedUpdateManyWithoutShowroomNestedInput
  }

  export type ShowroomCreateManyInput = {
    id?: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: Date | string
  }

  export type ShowroomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowroomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutUsersInput
    leads?: LeadCreateNestedManyWithoutAgentInput
    notes?: LeadNoteCreateNestedManyWithoutAgentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    showroomId?: string | null
    createdAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutAgentInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutUsersNestedInput
    leads?: LeadUpdateManyWithoutAgentNestedInput
    notes?: LeadNoteUpdateManyWithoutAgentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutAgentNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    showroomId?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateInput = {
    id?: string
    buyerName?: string | null
    buyerPhone?: string | null
    message?: string | null
    waLinkClicked?: boolean
    createdAt?: Date | string
    car: CarCreateNestedOneWithoutEnquiriesInput
  }

  export type EnquiryUncheckedCreateInput = {
    id?: string
    carId: string
    buyerName?: string | null
    buyerPhone?: string | null
    message?: string | null
    waLinkClicked?: boolean
    createdAt?: Date | string
  }

  export type EnquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    waLinkClicked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutEnquiriesNestedInput
  }

  export type EnquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    waLinkClicked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManyInput = {
    id?: string
    carId: string
    buyerName?: string | null
    buyerPhone?: string | null
    message?: string | null
    waLinkClicked?: boolean
    createdAt?: Date | string
  }

  export type EnquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    waLinkClicked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    waLinkClicked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type EnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ShowroomNullableScalarRelationFilter = {
    is?: ShowroomWhereInput | null
    isNot?: ShowroomWhereInput | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type EnquiryListRelationFilter = {
    every?: EnquiryWhereInput
    some?: EnquiryWhereInput
    none?: EnquiryWhereInput
  }

  export type TestDriveListRelationFilter = {
    every?: TestDriveWhereInput
    some?: TestDriveWhereInput
    none?: TestDriveWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestDriveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    driveType?: SortOrder
    bodyType?: SortOrder
    colour?: SortOrder
    seats?: SortOrder
    condition?: SortOrder
    importFrom?: SortOrder
    description?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    showroomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    driveType?: SortOrder
    bodyType?: SortOrder
    colour?: SortOrder
    seats?: SortOrder
    condition?: SortOrder
    importFrom?: SortOrder
    description?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    showroomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    driveType?: SortOrder
    bodyType?: SortOrder
    colour?: SortOrder
    seats?: SortOrder
    condition?: SortOrder
    importFrom?: SortOrder
    description?: SortOrder
    location?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    showroomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type EnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    imagekitId?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    imagekitId?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    url?: SortOrder
    imagekitId?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type EnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LeadNoteListRelationFilter = {
    every?: LeadNoteWhereInput
    some?: LeadNoteWhereInput
    none?: LeadNoteWhereInput
  }

  export type LeadNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    source?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    source?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    buyerEmail?: SortOrder
    source?: SortOrder
    status?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type EnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeadNoteCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadNoteMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    agentId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTestDriveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TestDriveStatus | EnumTestDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestDriveStatusFilter<$PrismaModel> | $Enums.TestDriveStatus
  }

  export type TestDriveCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    carId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TestDriveMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    carId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type TestDriveMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    carId?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTestDriveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestDriveStatus | EnumTestDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestDriveStatusWithAggregatesFilter<$PrismaModel> | $Enums.TestDriveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestDriveStatusFilter<$PrismaModel>
    _max?: NestedEnumTestDriveStatusFilter<$PrismaModel>
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowroomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    active?: SortOrder
    approvalRequired?: SortOrder
    brandingVisible?: SortOrder
    createdAt?: SortOrder
  }

  export type ShowroomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    active?: SortOrder
    approvalRequired?: SortOrder
    brandingVisible?: SortOrder
    createdAt?: SortOrder
  }

  export type ShowroomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    contactEmail?: SortOrder
    contactPhone?: SortOrder
    active?: SortOrder
    approvalRequired?: SortOrder
    brandingVisible?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    showroomId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    showroomId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    showroomId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    message?: SortOrder
    waLinkClicked?: SortOrder
    createdAt?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    message?: SortOrder
    waLinkClicked?: SortOrder
    createdAt?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    buyerName?: SortOrder
    buyerPhone?: SortOrder
    message?: SortOrder
    waLinkClicked?: SortOrder
    createdAt?: SortOrder
  }

  export type ShowroomCreateNestedOneWithoutCarsInput = {
    create?: XOR<ShowroomCreateWithoutCarsInput, ShowroomUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ShowroomCreateOrConnectWithoutCarsInput
    connect?: ShowroomWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutCarInput = {
    create?: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput> | ImageCreateWithoutCarInput[] | ImageUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[]
    createMany?: ImageCreateManyCarInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutCarInput = {
    create?: XOR<LeadCreateWithoutCarInput, LeadUncheckedCreateWithoutCarInput> | LeadCreateWithoutCarInput[] | LeadUncheckedCreateWithoutCarInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCarInput | LeadCreateOrConnectWithoutCarInput[]
    createMany?: LeadCreateManyCarInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type EnquiryCreateNestedManyWithoutCarInput = {
    create?: XOR<EnquiryCreateWithoutCarInput, EnquiryUncheckedCreateWithoutCarInput> | EnquiryCreateWithoutCarInput[] | EnquiryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutCarInput | EnquiryCreateOrConnectWithoutCarInput[]
    createMany?: EnquiryCreateManyCarInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type TestDriveCreateNestedManyWithoutCarInput = {
    create?: XOR<TestDriveCreateWithoutCarInput, TestDriveUncheckedCreateWithoutCarInput> | TestDriveCreateWithoutCarInput[] | TestDriveUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutCarInput | TestDriveCreateOrConnectWithoutCarInput[]
    createMany?: TestDriveCreateManyCarInputEnvelope
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput> | ImageCreateWithoutCarInput[] | ImageUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[]
    createMany?: ImageCreateManyCarInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<LeadCreateWithoutCarInput, LeadUncheckedCreateWithoutCarInput> | LeadCreateWithoutCarInput[] | LeadUncheckedCreateWithoutCarInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCarInput | LeadCreateOrConnectWithoutCarInput[]
    createMany?: LeadCreateManyCarInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type EnquiryUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<EnquiryCreateWithoutCarInput, EnquiryUncheckedCreateWithoutCarInput> | EnquiryCreateWithoutCarInput[] | EnquiryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutCarInput | EnquiryCreateOrConnectWithoutCarInput[]
    createMany?: EnquiryCreateManyCarInputEnvelope
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
  }

  export type TestDriveUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<TestDriveCreateWithoutCarInput, TestDriveUncheckedCreateWithoutCarInput> | TestDriveCreateWithoutCarInput[] | TestDriveUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutCarInput | TestDriveCreateOrConnectWithoutCarInput[]
    createMany?: TestDriveCreateManyCarInputEnvelope
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCarStatusFieldUpdateOperationsInput = {
    set?: $Enums.CarStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShowroomUpdateOneWithoutCarsNestedInput = {
    create?: XOR<ShowroomCreateWithoutCarsInput, ShowroomUncheckedCreateWithoutCarsInput>
    connectOrCreate?: ShowroomCreateOrConnectWithoutCarsInput
    upsert?: ShowroomUpsertWithoutCarsInput
    disconnect?: ShowroomWhereInput | boolean
    delete?: ShowroomWhereInput | boolean
    connect?: ShowroomWhereUniqueInput
    update?: XOR<XOR<ShowroomUpdateToOneWithWhereWithoutCarsInput, ShowroomUpdateWithoutCarsInput>, ShowroomUncheckedUpdateWithoutCarsInput>
  }

  export type ImageUpdateManyWithoutCarNestedInput = {
    create?: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput> | ImageCreateWithoutCarInput[] | ImageUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCarInput | ImageUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ImageCreateManyCarInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCarInput | ImageUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCarInput | ImageUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutCarNestedInput = {
    create?: XOR<LeadCreateWithoutCarInput, LeadUncheckedCreateWithoutCarInput> | LeadCreateWithoutCarInput[] | LeadUncheckedCreateWithoutCarInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCarInput | LeadCreateOrConnectWithoutCarInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCarInput | LeadUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: LeadCreateManyCarInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCarInput | LeadUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCarInput | LeadUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type EnquiryUpdateManyWithoutCarNestedInput = {
    create?: XOR<EnquiryCreateWithoutCarInput, EnquiryUncheckedCreateWithoutCarInput> | EnquiryCreateWithoutCarInput[] | EnquiryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutCarInput | EnquiryCreateOrConnectWithoutCarInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutCarInput | EnquiryUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: EnquiryCreateManyCarInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutCarInput | EnquiryUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutCarInput | EnquiryUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type TestDriveUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestDriveCreateWithoutCarInput, TestDriveUncheckedCreateWithoutCarInput> | TestDriveCreateWithoutCarInput[] | TestDriveUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutCarInput | TestDriveCreateOrConnectWithoutCarInput[]
    upsert?: TestDriveUpsertWithWhereUniqueWithoutCarInput | TestDriveUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestDriveCreateManyCarInputEnvelope
    set?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    disconnect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    delete?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    update?: TestDriveUpdateWithWhereUniqueWithoutCarInput | TestDriveUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestDriveUpdateManyWithWhereWithoutCarInput | TestDriveUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestDriveScalarWhereInput | TestDriveScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput> | ImageCreateWithoutCarInput[] | ImageUncheckedCreateWithoutCarInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutCarInput | ImageCreateOrConnectWithoutCarInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutCarInput | ImageUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: ImageCreateManyCarInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutCarInput | ImageUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutCarInput | ImageUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<LeadCreateWithoutCarInput, LeadUncheckedCreateWithoutCarInput> | LeadCreateWithoutCarInput[] | LeadUncheckedCreateWithoutCarInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCarInput | LeadCreateOrConnectWithoutCarInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCarInput | LeadUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: LeadCreateManyCarInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCarInput | LeadUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCarInput | LeadUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type EnquiryUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<EnquiryCreateWithoutCarInput, EnquiryUncheckedCreateWithoutCarInput> | EnquiryCreateWithoutCarInput[] | EnquiryUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnquiryCreateOrConnectWithoutCarInput | EnquiryCreateOrConnectWithoutCarInput[]
    upsert?: EnquiryUpsertWithWhereUniqueWithoutCarInput | EnquiryUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: EnquiryCreateManyCarInputEnvelope
    set?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    disconnect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    delete?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    connect?: EnquiryWhereUniqueInput | EnquiryWhereUniqueInput[]
    update?: EnquiryUpdateWithWhereUniqueWithoutCarInput | EnquiryUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: EnquiryUpdateManyWithWhereWithoutCarInput | EnquiryUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
  }

  export type TestDriveUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestDriveCreateWithoutCarInput, TestDriveUncheckedCreateWithoutCarInput> | TestDriveCreateWithoutCarInput[] | TestDriveUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutCarInput | TestDriveCreateOrConnectWithoutCarInput[]
    upsert?: TestDriveUpsertWithWhereUniqueWithoutCarInput | TestDriveUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestDriveCreateManyCarInputEnvelope
    set?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    disconnect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    delete?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    update?: TestDriveUpdateWithWhereUniqueWithoutCarInput | TestDriveUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestDriveUpdateManyWithWhereWithoutCarInput | TestDriveUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestDriveScalarWhereInput | TestDriveScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutImagesInput = {
    create?: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CarCreateOrConnectWithoutImagesInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>
    connectOrCreate?: CarCreateOrConnectWithoutImagesInput
    upsert?: CarUpsertWithoutImagesInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutImagesInput, CarUpdateWithoutImagesInput>, CarUncheckedUpdateWithoutImagesInput>
  }

  export type CarCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CarCreateWithoutLeadsInput, CarUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CarCreateOrConnectWithoutLeadsInput
    connect?: CarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLeadsInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    connect?: UserWhereUniqueInput
  }

  export type LeadNoteCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type TestDriveCreateNestedManyWithoutLeadInput = {
    create?: XOR<TestDriveCreateWithoutLeadInput, TestDriveUncheckedCreateWithoutLeadInput> | TestDriveCreateWithoutLeadInput[] | TestDriveUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutLeadInput | TestDriveCreateOrConnectWithoutLeadInput[]
    createMany?: TestDriveCreateManyLeadInputEnvelope
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
  }

  export type LeadNoteUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type TestDriveUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<TestDriveCreateWithoutLeadInput, TestDriveUncheckedCreateWithoutLeadInput> | TestDriveCreateWithoutLeadInput[] | TestDriveUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutLeadInput | TestDriveCreateOrConnectWithoutLeadInput[]
    createMany?: TestDriveCreateManyLeadInputEnvelope
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
  }

  export type EnumLeadSourceFieldUpdateOperationsInput = {
    set?: $Enums.LeadSource
  }

  export type EnumLeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeadStatus
  }

  export type CarUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<CarCreateWithoutLeadsInput, CarUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CarCreateOrConnectWithoutLeadsInput
    upsert?: CarUpsertWithoutLeadsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutLeadsInput, CarUpdateWithoutLeadsInput>, CarUncheckedUpdateWithoutLeadsInput>
  }

  export type UserUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeadsInput
    upsert?: UserUpsertWithoutLeadsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeadsInput, UserUpdateWithoutLeadsInput>, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type LeadNoteUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutLeadInput | LeadNoteUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutLeadInput | LeadNoteUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutLeadInput | LeadNoteUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type TestDriveUpdateManyWithoutLeadNestedInput = {
    create?: XOR<TestDriveCreateWithoutLeadInput, TestDriveUncheckedCreateWithoutLeadInput> | TestDriveCreateWithoutLeadInput[] | TestDriveUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutLeadInput | TestDriveCreateOrConnectWithoutLeadInput[]
    upsert?: TestDriveUpsertWithWhereUniqueWithoutLeadInput | TestDriveUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: TestDriveCreateManyLeadInputEnvelope
    set?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    disconnect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    delete?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    update?: TestDriveUpdateWithWhereUniqueWithoutLeadInput | TestDriveUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: TestDriveUpdateManyWithWhereWithoutLeadInput | TestDriveUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: TestDriveScalarWhereInput | TestDriveScalarWhereInput[]
  }

  export type LeadNoteUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput> | LeadNoteCreateWithoutLeadInput[] | LeadNoteUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutLeadInput | LeadNoteCreateOrConnectWithoutLeadInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutLeadInput | LeadNoteUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: LeadNoteCreateManyLeadInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutLeadInput | LeadNoteUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutLeadInput | LeadNoteUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type TestDriveUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<TestDriveCreateWithoutLeadInput, TestDriveUncheckedCreateWithoutLeadInput> | TestDriveCreateWithoutLeadInput[] | TestDriveUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: TestDriveCreateOrConnectWithoutLeadInput | TestDriveCreateOrConnectWithoutLeadInput[]
    upsert?: TestDriveUpsertWithWhereUniqueWithoutLeadInput | TestDriveUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: TestDriveCreateManyLeadInputEnvelope
    set?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    disconnect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    delete?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    connect?: TestDriveWhereUniqueInput | TestDriveWhereUniqueInput[]
    update?: TestDriveUpdateWithWhereUniqueWithoutLeadInput | TestDriveUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: TestDriveUpdateManyWithWhereWithoutLeadInput | TestDriveUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: TestDriveScalarWhereInput | TestDriveScalarWhereInput[]
  }

  export type LeadCreateNestedOneWithoutNotesInput = {
    create?: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutNotesInput
    connect?: LeadWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type LeadUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutNotesInput
    upsert?: LeadUpsertWithoutNotesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutNotesInput, LeadUpdateWithoutNotesInput>, LeadUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type LeadCreateNestedOneWithoutTestDrivesInput = {
    create?: XOR<LeadCreateWithoutTestDrivesInput, LeadUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutTestDrivesInput
    connect?: LeadWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutTestDrivesInput = {
    create?: XOR<CarCreateWithoutTestDrivesInput, CarUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: CarCreateOrConnectWithoutTestDrivesInput
    connect?: CarWhereUniqueInput
  }

  export type EnumTestDriveStatusFieldUpdateOperationsInput = {
    set?: $Enums.TestDriveStatus
  }

  export type LeadUpdateOneRequiredWithoutTestDrivesNestedInput = {
    create?: XOR<LeadCreateWithoutTestDrivesInput, LeadUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutTestDrivesInput
    upsert?: LeadUpsertWithoutTestDrivesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutTestDrivesInput, LeadUpdateWithoutTestDrivesInput>, LeadUncheckedUpdateWithoutTestDrivesInput>
  }

  export type CarUpdateOneRequiredWithoutTestDrivesNestedInput = {
    create?: XOR<CarCreateWithoutTestDrivesInput, CarUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: CarCreateOrConnectWithoutTestDrivesInput
    upsert?: CarUpsertWithoutTestDrivesInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutTestDrivesInput, CarUpdateWithoutTestDrivesInput>, CarUncheckedUpdateWithoutTestDrivesInput>
  }

  export type CarCreateNestedManyWithoutShowroomInput = {
    create?: XOR<CarCreateWithoutShowroomInput, CarUncheckedCreateWithoutShowroomInput> | CarCreateWithoutShowroomInput[] | CarUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: CarCreateOrConnectWithoutShowroomInput | CarCreateOrConnectWithoutShowroomInput[]
    createMany?: CarCreateManyShowroomInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutShowroomInput = {
    create?: XOR<UserCreateWithoutShowroomInput, UserUncheckedCreateWithoutShowroomInput> | UserCreateWithoutShowroomInput[] | UserUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShowroomInput | UserCreateOrConnectWithoutShowroomInput[]
    createMany?: UserCreateManyShowroomInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutShowroomInput = {
    create?: XOR<CarCreateWithoutShowroomInput, CarUncheckedCreateWithoutShowroomInput> | CarCreateWithoutShowroomInput[] | CarUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: CarCreateOrConnectWithoutShowroomInput | CarCreateOrConnectWithoutShowroomInput[]
    createMany?: CarCreateManyShowroomInputEnvelope
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutShowroomInput = {
    create?: XOR<UserCreateWithoutShowroomInput, UserUncheckedCreateWithoutShowroomInput> | UserCreateWithoutShowroomInput[] | UserUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShowroomInput | UserCreateOrConnectWithoutShowroomInput[]
    createMany?: UserCreateManyShowroomInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CarUpdateManyWithoutShowroomNestedInput = {
    create?: XOR<CarCreateWithoutShowroomInput, CarUncheckedCreateWithoutShowroomInput> | CarCreateWithoutShowroomInput[] | CarUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: CarCreateOrConnectWithoutShowroomInput | CarCreateOrConnectWithoutShowroomInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutShowroomInput | CarUpsertWithWhereUniqueWithoutShowroomInput[]
    createMany?: CarCreateManyShowroomInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutShowroomInput | CarUpdateWithWhereUniqueWithoutShowroomInput[]
    updateMany?: CarUpdateManyWithWhereWithoutShowroomInput | CarUpdateManyWithWhereWithoutShowroomInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type UserUpdateManyWithoutShowroomNestedInput = {
    create?: XOR<UserCreateWithoutShowroomInput, UserUncheckedCreateWithoutShowroomInput> | UserCreateWithoutShowroomInput[] | UserUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShowroomInput | UserCreateOrConnectWithoutShowroomInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutShowroomInput | UserUpsertWithWhereUniqueWithoutShowroomInput[]
    createMany?: UserCreateManyShowroomInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutShowroomInput | UserUpdateWithWhereUniqueWithoutShowroomInput[]
    updateMany?: UserUpdateManyWithWhereWithoutShowroomInput | UserUpdateManyWithWhereWithoutShowroomInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutShowroomNestedInput = {
    create?: XOR<CarCreateWithoutShowroomInput, CarUncheckedCreateWithoutShowroomInput> | CarCreateWithoutShowroomInput[] | CarUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: CarCreateOrConnectWithoutShowroomInput | CarCreateOrConnectWithoutShowroomInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutShowroomInput | CarUpsertWithWhereUniqueWithoutShowroomInput[]
    createMany?: CarCreateManyShowroomInputEnvelope
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutShowroomInput | CarUpdateWithWhereUniqueWithoutShowroomInput[]
    updateMany?: CarUpdateManyWithWhereWithoutShowroomInput | CarUpdateManyWithWhereWithoutShowroomInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutShowroomNestedInput = {
    create?: XOR<UserCreateWithoutShowroomInput, UserUncheckedCreateWithoutShowroomInput> | UserCreateWithoutShowroomInput[] | UserUncheckedCreateWithoutShowroomInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShowroomInput | UserCreateOrConnectWithoutShowroomInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutShowroomInput | UserUpsertWithWhereUniqueWithoutShowroomInput[]
    createMany?: UserCreateManyShowroomInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutShowroomInput | UserUpdateWithWhereUniqueWithoutShowroomInput[]
    updateMany?: UserUpdateManyWithWhereWithoutShowroomInput | UserUpdateManyWithWhereWithoutShowroomInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ShowroomCreateNestedOneWithoutUsersInput = {
    create?: XOR<ShowroomCreateWithoutUsersInput, ShowroomUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShowroomCreateOrConnectWithoutUsersInput
    connect?: ShowroomWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutAgentInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadNoteCreateNestedManyWithoutAgentInput = {
    create?: XOR<LeadNoteCreateWithoutAgentInput, LeadNoteUncheckedCreateWithoutAgentInput> | LeadNoteCreateWithoutAgentInput[] | LeadNoteUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutAgentInput | LeadNoteCreateOrConnectWithoutAgentInput[]
    createMany?: LeadNoteCreateManyAgentInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadNoteUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<LeadNoteCreateWithoutAgentInput, LeadNoteUncheckedCreateWithoutAgentInput> | LeadNoteCreateWithoutAgentInput[] | LeadNoteUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutAgentInput | LeadNoteCreateOrConnectWithoutAgentInput[]
    createMany?: LeadNoteCreateManyAgentInputEnvelope
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type ShowroomUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ShowroomCreateWithoutUsersInput, ShowroomUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShowroomCreateOrConnectWithoutUsersInput
    upsert?: ShowroomUpsertWithoutUsersInput
    disconnect?: ShowroomWhereInput | boolean
    delete?: ShowroomWhereInput | boolean
    connect?: ShowroomWhereUniqueInput
    update?: XOR<XOR<ShowroomUpdateToOneWithWhereWithoutUsersInput, ShowroomUpdateWithoutUsersInput>, ShowroomUncheckedUpdateWithoutUsersInput>
  }

  export type LeadUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAgentInput | LeadUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAgentInput | LeadUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAgentInput | LeadUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadNoteUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LeadNoteCreateWithoutAgentInput, LeadNoteUncheckedCreateWithoutAgentInput> | LeadNoteCreateWithoutAgentInput[] | LeadNoteUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutAgentInput | LeadNoteCreateOrConnectWithoutAgentInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutAgentInput | LeadNoteUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LeadNoteCreateManyAgentInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutAgentInput | LeadNoteUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutAgentInput | LeadNoteUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput> | LeadCreateWithoutAgentInput[] | LeadUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAgentInput | LeadCreateOrConnectWithoutAgentInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAgentInput | LeadUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LeadCreateManyAgentInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAgentInput | LeadUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAgentInput | LeadUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadNoteUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<LeadNoteCreateWithoutAgentInput, LeadNoteUncheckedCreateWithoutAgentInput> | LeadNoteCreateWithoutAgentInput[] | LeadNoteUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: LeadNoteCreateOrConnectWithoutAgentInput | LeadNoteCreateOrConnectWithoutAgentInput[]
    upsert?: LeadNoteUpsertWithWhereUniqueWithoutAgentInput | LeadNoteUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: LeadNoteCreateManyAgentInputEnvelope
    set?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    disconnect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    delete?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    connect?: LeadNoteWhereUniqueInput | LeadNoteWhereUniqueInput[]
    update?: LeadNoteUpdateWithWhereUniqueWithoutAgentInput | LeadNoteUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: LeadNoteUpdateManyWithWhereWithoutAgentInput | LeadNoteUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
  }

  export type CarCreateNestedOneWithoutEnquiriesInput = {
    create?: XOR<CarCreateWithoutEnquiriesInput, CarUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: CarCreateOrConnectWithoutEnquiriesInput
    connect?: CarWhereUniqueInput
  }

  export type CarUpdateOneRequiredWithoutEnquiriesNestedInput = {
    create?: XOR<CarCreateWithoutEnquiriesInput, CarUncheckedCreateWithoutEnquiriesInput>
    connectOrCreate?: CarCreateOrConnectWithoutEnquiriesInput
    upsert?: CarUpsertWithoutEnquiriesInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutEnquiriesInput, CarUpdateWithoutEnquiriesInput>, CarUncheckedUpdateWithoutEnquiriesInput>
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

  export type NestedEnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedEnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumLeadSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceFilter<$PrismaModel> | $Enums.LeadSource
  }

  export type NestedEnumLeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusFilter<$PrismaModel> | $Enums.LeadStatus
  }

  export type NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadSource | EnumLeadSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadSource[] | ListEnumLeadSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadSourceWithAggregatesFilter<$PrismaModel> | $Enums.LeadSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadSourceFilter<$PrismaModel>
    _max?: NestedEnumLeadSourceFilter<$PrismaModel>
  }

  export type NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeadStatus | EnumLeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeadStatus[] | ListEnumLeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeadStatusFilter<$PrismaModel>
    _max?: NestedEnumLeadStatusFilter<$PrismaModel>
  }

  export type NestedEnumTestDriveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TestDriveStatus | EnumTestDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestDriveStatusFilter<$PrismaModel> | $Enums.TestDriveStatus
  }

  export type NestedEnumTestDriveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestDriveStatus | EnumTestDriveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TestDriveStatus[] | ListEnumTestDriveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTestDriveStatusWithAggregatesFilter<$PrismaModel> | $Enums.TestDriveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestDriveStatusFilter<$PrismaModel>
    _max?: NestedEnumTestDriveStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type ShowroomCreateWithoutCarsInput = {
    id?: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutShowroomInput
  }

  export type ShowroomUncheckedCreateWithoutCarsInput = {
    id?: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutShowroomInput
  }

  export type ShowroomCreateOrConnectWithoutCarsInput = {
    where: ShowroomWhereUniqueInput
    create: XOR<ShowroomCreateWithoutCarsInput, ShowroomUncheckedCreateWithoutCarsInput>
  }

  export type ImageCreateWithoutCarInput = {
    id?: string
    url: string
    imagekitId?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type ImageUncheckedCreateWithoutCarInput = {
    id?: string
    url: string
    imagekitId?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type ImageCreateOrConnectWithoutCarInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>
  }

  export type ImageCreateManyCarInputEnvelope = {
    data: ImageCreateManyCarInput | ImageCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutCarInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    agent?: UserCreateNestedOneWithoutLeadsInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    testDrives?: TestDriveCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCarInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    agentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCarInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCarInput, LeadUncheckedCreateWithoutCarInput>
  }

  export type LeadCreateManyCarInputEnvelope = {
    data: LeadCreateManyCarInput | LeadCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type EnquiryCreateWithoutCarInput = {
    id?: string
    buyerName?: string | null
    buyerPhone?: string | null
    message?: string | null
    waLinkClicked?: boolean
    createdAt?: Date | string
  }

  export type EnquiryUncheckedCreateWithoutCarInput = {
    id?: string
    buyerName?: string | null
    buyerPhone?: string | null
    message?: string | null
    waLinkClicked?: boolean
    createdAt?: Date | string
  }

  export type EnquiryCreateOrConnectWithoutCarInput = {
    where: EnquiryWhereUniqueInput
    create: XOR<EnquiryCreateWithoutCarInput, EnquiryUncheckedCreateWithoutCarInput>
  }

  export type EnquiryCreateManyCarInputEnvelope = {
    data: EnquiryCreateManyCarInput | EnquiryCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type TestDriveCreateWithoutCarInput = {
    id?: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutTestDrivesInput
  }

  export type TestDriveUncheckedCreateWithoutCarInput = {
    id?: string
    leadId: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type TestDriveCreateOrConnectWithoutCarInput = {
    where: TestDriveWhereUniqueInput
    create: XOR<TestDriveCreateWithoutCarInput, TestDriveUncheckedCreateWithoutCarInput>
  }

  export type TestDriveCreateManyCarInputEnvelope = {
    data: TestDriveCreateManyCarInput | TestDriveCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type ShowroomUpsertWithoutCarsInput = {
    update: XOR<ShowroomUpdateWithoutCarsInput, ShowroomUncheckedUpdateWithoutCarsInput>
    create: XOR<ShowroomCreateWithoutCarsInput, ShowroomUncheckedCreateWithoutCarsInput>
    where?: ShowroomWhereInput
  }

  export type ShowroomUpdateToOneWithWhereWithoutCarsInput = {
    where?: ShowroomWhereInput
    data: XOR<ShowroomUpdateWithoutCarsInput, ShowroomUncheckedUpdateWithoutCarsInput>
  }

  export type ShowroomUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutShowroomNestedInput
  }

  export type ShowroomUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutShowroomNestedInput
  }

  export type ImageUpsertWithWhereUniqueWithoutCarInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutCarInput, ImageUncheckedUpdateWithoutCarInput>
    create: XOR<ImageCreateWithoutCarInput, ImageUncheckedCreateWithoutCarInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutCarInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutCarInput, ImageUncheckedUpdateWithoutCarInput>
  }

  export type ImageUpdateManyWithWhereWithoutCarInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutCarInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    carId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    imagekitId?: StringNullableFilter<"Image"> | string | null
    order?: IntFilter<"Image"> | number
    isPrimary?: BoolFilter<"Image"> | boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutCarInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCarInput, LeadUncheckedUpdateWithoutCarInput>
    create: XOR<LeadCreateWithoutCarInput, LeadUncheckedCreateWithoutCarInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCarInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCarInput, LeadUncheckedUpdateWithoutCarInput>
  }

  export type LeadUpdateManyWithWhereWithoutCarInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCarInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    carId?: StringFilter<"Lead"> | string
    buyerName?: StringFilter<"Lead"> | string
    buyerPhone?: StringFilter<"Lead"> | string
    buyerEmail?: StringNullableFilter<"Lead"> | string | null
    source?: EnumLeadSourceFilter<"Lead"> | $Enums.LeadSource
    status?: EnumLeadStatusFilter<"Lead"> | $Enums.LeadStatus
    agentId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type EnquiryUpsertWithWhereUniqueWithoutCarInput = {
    where: EnquiryWhereUniqueInput
    update: XOR<EnquiryUpdateWithoutCarInput, EnquiryUncheckedUpdateWithoutCarInput>
    create: XOR<EnquiryCreateWithoutCarInput, EnquiryUncheckedCreateWithoutCarInput>
  }

  export type EnquiryUpdateWithWhereUniqueWithoutCarInput = {
    where: EnquiryWhereUniqueInput
    data: XOR<EnquiryUpdateWithoutCarInput, EnquiryUncheckedUpdateWithoutCarInput>
  }

  export type EnquiryUpdateManyWithWhereWithoutCarInput = {
    where: EnquiryScalarWhereInput
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyWithoutCarInput>
  }

  export type EnquiryScalarWhereInput = {
    AND?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
    OR?: EnquiryScalarWhereInput[]
    NOT?: EnquiryScalarWhereInput | EnquiryScalarWhereInput[]
    id?: StringFilter<"Enquiry"> | string
    carId?: StringFilter<"Enquiry"> | string
    buyerName?: StringNullableFilter<"Enquiry"> | string | null
    buyerPhone?: StringNullableFilter<"Enquiry"> | string | null
    message?: StringNullableFilter<"Enquiry"> | string | null
    waLinkClicked?: BoolFilter<"Enquiry"> | boolean
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
  }

  export type TestDriveUpsertWithWhereUniqueWithoutCarInput = {
    where: TestDriveWhereUniqueInput
    update: XOR<TestDriveUpdateWithoutCarInput, TestDriveUncheckedUpdateWithoutCarInput>
    create: XOR<TestDriveCreateWithoutCarInput, TestDriveUncheckedCreateWithoutCarInput>
  }

  export type TestDriveUpdateWithWhereUniqueWithoutCarInput = {
    where: TestDriveWhereUniqueInput
    data: XOR<TestDriveUpdateWithoutCarInput, TestDriveUncheckedUpdateWithoutCarInput>
  }

  export type TestDriveUpdateManyWithWhereWithoutCarInput = {
    where: TestDriveScalarWhereInput
    data: XOR<TestDriveUpdateManyMutationInput, TestDriveUncheckedUpdateManyWithoutCarInput>
  }

  export type TestDriveScalarWhereInput = {
    AND?: TestDriveScalarWhereInput | TestDriveScalarWhereInput[]
    OR?: TestDriveScalarWhereInput[]
    NOT?: TestDriveScalarWhereInput | TestDriveScalarWhereInput[]
    id?: StringFilter<"TestDrive"> | string
    leadId?: StringFilter<"TestDrive"> | string
    carId?: StringFilter<"TestDrive"> | string
    scheduledAt?: DateTimeFilter<"TestDrive"> | Date | string
    status?: EnumTestDriveStatusFilter<"TestDrive"> | $Enums.TestDriveStatus
    notes?: StringNullableFilter<"TestDrive"> | string | null
    createdAt?: DateTimeFilter<"TestDrive"> | Date | string
  }

  export type CarCreateWithoutImagesInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutCarsInput
    leads?: LeadCreateNestedManyWithoutCarInput
    enquiries?: EnquiryCreateNestedManyWithoutCarInput
    testDrives?: TestDriveCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutImagesInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    showroomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCarInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutCarInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutImagesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>
  }

  export type CarUpsertWithoutImagesInput = {
    update: XOR<CarUpdateWithoutImagesInput, CarUncheckedUpdateWithoutImagesInput>
    create: XOR<CarCreateWithoutImagesInput, CarUncheckedCreateWithoutImagesInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutImagesInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutImagesInput, CarUncheckedUpdateWithoutImagesInput>
  }

  export type CarUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutCarsNestedInput
    leads?: LeadUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutLeadsInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutCarsInput
    images?: ImageCreateNestedManyWithoutCarInput
    enquiries?: EnquiryCreateNestedManyWithoutCarInput
    testDrives?: TestDriveCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutLeadsInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    showroomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutCarInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutCarInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutLeadsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutLeadsInput, CarUncheckedCreateWithoutLeadsInput>
  }

  export type UserCreateWithoutLeadsInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutUsersInput
    notes?: LeadNoteCreateNestedManyWithoutAgentInput
  }

  export type UserUncheckedCreateWithoutLeadsInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    showroomId?: string | null
    createdAt?: Date | string
    notes?: LeadNoteUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UserCreateOrConnectWithoutLeadsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
  }

  export type LeadNoteCreateWithoutLeadInput = {
    id?: string
    note: string
    createdAt?: Date | string
    agent: UserCreateNestedOneWithoutNotesInput
  }

  export type LeadNoteUncheckedCreateWithoutLeadInput = {
    id?: string
    agentId: string
    note: string
    createdAt?: Date | string
  }

  export type LeadNoteCreateOrConnectWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    create: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput>
  }

  export type LeadNoteCreateManyLeadInputEnvelope = {
    data: LeadNoteCreateManyLeadInput | LeadNoteCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type TestDriveCreateWithoutLeadInput = {
    id?: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
    car: CarCreateNestedOneWithoutTestDrivesInput
  }

  export type TestDriveUncheckedCreateWithoutLeadInput = {
    id?: string
    carId: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type TestDriveCreateOrConnectWithoutLeadInput = {
    where: TestDriveWhereUniqueInput
    create: XOR<TestDriveCreateWithoutLeadInput, TestDriveUncheckedCreateWithoutLeadInput>
  }

  export type TestDriveCreateManyLeadInputEnvelope = {
    data: TestDriveCreateManyLeadInput | TestDriveCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithoutLeadsInput = {
    update: XOR<CarUpdateWithoutLeadsInput, CarUncheckedUpdateWithoutLeadsInput>
    create: XOR<CarCreateWithoutLeadsInput, CarUncheckedCreateWithoutLeadsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutLeadsInput, CarUncheckedUpdateWithoutLeadsInput>
  }

  export type CarUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutCarsNestedInput
    images?: ImageUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserUpsertWithoutLeadsInput = {
    update: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
    create: XOR<UserCreateWithoutLeadsInput, UserUncheckedCreateWithoutLeadsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeadsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeadsInput, UserUncheckedUpdateWithoutLeadsInput>
  }

  export type UserUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutUsersNestedInput
    notes?: LeadNoteUpdateManyWithoutAgentNestedInput
  }

  export type UserUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: LeadNoteUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type LeadNoteUpsertWithWhereUniqueWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    update: XOR<LeadNoteUpdateWithoutLeadInput, LeadNoteUncheckedUpdateWithoutLeadInput>
    create: XOR<LeadNoteCreateWithoutLeadInput, LeadNoteUncheckedCreateWithoutLeadInput>
  }

  export type LeadNoteUpdateWithWhereUniqueWithoutLeadInput = {
    where: LeadNoteWhereUniqueInput
    data: XOR<LeadNoteUpdateWithoutLeadInput, LeadNoteUncheckedUpdateWithoutLeadInput>
  }

  export type LeadNoteUpdateManyWithWhereWithoutLeadInput = {
    where: LeadNoteScalarWhereInput
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadNoteScalarWhereInput = {
    AND?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    OR?: LeadNoteScalarWhereInput[]
    NOT?: LeadNoteScalarWhereInput | LeadNoteScalarWhereInput[]
    id?: StringFilter<"LeadNote"> | string
    leadId?: StringFilter<"LeadNote"> | string
    agentId?: StringFilter<"LeadNote"> | string
    note?: StringFilter<"LeadNote"> | string
    createdAt?: DateTimeFilter<"LeadNote"> | Date | string
  }

  export type TestDriveUpsertWithWhereUniqueWithoutLeadInput = {
    where: TestDriveWhereUniqueInput
    update: XOR<TestDriveUpdateWithoutLeadInput, TestDriveUncheckedUpdateWithoutLeadInput>
    create: XOR<TestDriveCreateWithoutLeadInput, TestDriveUncheckedCreateWithoutLeadInput>
  }

  export type TestDriveUpdateWithWhereUniqueWithoutLeadInput = {
    where: TestDriveWhereUniqueInput
    data: XOR<TestDriveUpdateWithoutLeadInput, TestDriveUncheckedUpdateWithoutLeadInput>
  }

  export type TestDriveUpdateManyWithWhereWithoutLeadInput = {
    where: TestDriveScalarWhereInput
    data: XOR<TestDriveUpdateManyMutationInput, TestDriveUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadCreateWithoutNotesInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutLeadsInput
    agent?: UserCreateNestedOneWithoutLeadsInput
    testDrives?: TestDriveCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutNotesInput = {
    id?: string
    carId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    agentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutNotesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutUsersInput
    leads?: LeadCreateNestedManyWithoutAgentInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    showroomId?: string | null
    createdAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type LeadUpsertWithoutNotesInput = {
    update: XOR<LeadUpdateWithoutNotesInput, LeadUncheckedUpdateWithoutNotesInput>
    create: XOR<LeadCreateWithoutNotesInput, LeadUncheckedCreateWithoutNotesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutNotesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutNotesInput, LeadUncheckedUpdateWithoutNotesInput>
  }

  export type LeadUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutLeadsNestedInput
    agent?: UserUpdateOneWithoutLeadsNestedInput
    testDrives?: TestDriveUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testDrives?: TestDriveUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutUsersNestedInput
    leads?: LeadUpdateManyWithoutAgentNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type LeadCreateWithoutTestDrivesInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutLeadsInput
    agent?: UserCreateNestedOneWithoutLeadsInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutTestDrivesInput = {
    id?: string
    carId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    agentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutTestDrivesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutTestDrivesInput, LeadUncheckedCreateWithoutTestDrivesInput>
  }

  export type CarCreateWithoutTestDrivesInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutCarsInput
    images?: ImageCreateNestedManyWithoutCarInput
    leads?: LeadCreateNestedManyWithoutCarInput
    enquiries?: EnquiryCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutTestDrivesInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    showroomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutCarInput
    leads?: LeadUncheckedCreateNestedManyWithoutCarInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutTestDrivesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutTestDrivesInput, CarUncheckedCreateWithoutTestDrivesInput>
  }

  export type LeadUpsertWithoutTestDrivesInput = {
    update: XOR<LeadUpdateWithoutTestDrivesInput, LeadUncheckedUpdateWithoutTestDrivesInput>
    create: XOR<LeadCreateWithoutTestDrivesInput, LeadUncheckedCreateWithoutTestDrivesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutTestDrivesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutTestDrivesInput, LeadUncheckedUpdateWithoutTestDrivesInput>
  }

  export type LeadUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutLeadsNestedInput
    agent?: UserUpdateOneWithoutLeadsNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type CarUpsertWithoutTestDrivesInput = {
    update: XOR<CarUpdateWithoutTestDrivesInput, CarUncheckedUpdateWithoutTestDrivesInput>
    create: XOR<CarCreateWithoutTestDrivesInput, CarUncheckedCreateWithoutTestDrivesInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutTestDrivesInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutTestDrivesInput, CarUncheckedUpdateWithoutTestDrivesInput>
  }

  export type CarUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutCarsNestedInput
    images?: ImageUpdateManyWithoutCarNestedInput
    leads?: LeadUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutShowroomInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutCarInput
    leads?: LeadCreateNestedManyWithoutCarInput
    enquiries?: EnquiryCreateNestedManyWithoutCarInput
    testDrives?: TestDriveCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutShowroomInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutCarInput
    leads?: LeadUncheckedCreateNestedManyWithoutCarInput
    enquiries?: EnquiryUncheckedCreateNestedManyWithoutCarInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutShowroomInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutShowroomInput, CarUncheckedCreateWithoutShowroomInput>
  }

  export type CarCreateManyShowroomInputEnvelope = {
    data: CarCreateManyShowroomInput | CarCreateManyShowroomInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutShowroomInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    leads?: LeadCreateNestedManyWithoutAgentInput
    notes?: LeadNoteCreateNestedManyWithoutAgentInput
  }

  export type UserUncheckedCreateWithoutShowroomInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutAgentInput
    notes?: LeadNoteUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UserCreateOrConnectWithoutShowroomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShowroomInput, UserUncheckedCreateWithoutShowroomInput>
  }

  export type UserCreateManyShowroomInputEnvelope = {
    data: UserCreateManyShowroomInput | UserCreateManyShowroomInput[]
    skipDuplicates?: boolean
  }

  export type CarUpsertWithWhereUniqueWithoutShowroomInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutShowroomInput, CarUncheckedUpdateWithoutShowroomInput>
    create: XOR<CarCreateWithoutShowroomInput, CarUncheckedCreateWithoutShowroomInput>
  }

  export type CarUpdateWithWhereUniqueWithoutShowroomInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutShowroomInput, CarUncheckedUpdateWithoutShowroomInput>
  }

  export type CarUpdateManyWithWhereWithoutShowroomInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutShowroomInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: StringFilter<"Car"> | string
    slug?: StringFilter<"Car"> | string
    title?: StringFilter<"Car"> | string
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: IntFilter<"Car"> | number
    mileage?: IntFilter<"Car"> | number
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    driveType?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    colour?: StringFilter<"Car"> | string
    seats?: IntFilter<"Car"> | number
    condition?: StringFilter<"Car"> | string
    importFrom?: StringNullableFilter<"Car"> | string | null
    description?: StringNullableFilter<"Car"> | string | null
    location?: StringFilter<"Car"> | string
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    showroomId?: StringNullableFilter<"Car"> | string | null
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutShowroomInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutShowroomInput, UserUncheckedUpdateWithoutShowroomInput>
    create: XOR<UserCreateWithoutShowroomInput, UserUncheckedCreateWithoutShowroomInput>
  }

  export type UserUpdateWithWhereUniqueWithoutShowroomInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutShowroomInput, UserUncheckedUpdateWithoutShowroomInput>
  }

  export type UserUpdateManyWithWhereWithoutShowroomInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutShowroomInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    showroomId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ShowroomCreateWithoutUsersInput = {
    id?: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: Date | string
    cars?: CarCreateNestedManyWithoutShowroomInput
  }

  export type ShowroomUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    location: string
    contactEmail: string
    contactPhone: string
    active?: boolean
    approvalRequired?: boolean
    brandingVisible?: boolean
    createdAt?: Date | string
    cars?: CarUncheckedCreateNestedManyWithoutShowroomInput
  }

  export type ShowroomCreateOrConnectWithoutUsersInput = {
    where: ShowroomWhereUniqueInput
    create: XOR<ShowroomCreateWithoutUsersInput, ShowroomUncheckedCreateWithoutUsersInput>
  }

  export type LeadCreateWithoutAgentInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutLeadsInput
    notes?: LeadNoteCreateNestedManyWithoutLeadInput
    testDrives?: TestDriveCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutAgentInput = {
    id?: string
    carId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: LeadNoteUncheckedCreateNestedManyWithoutLeadInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutAgentInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput>
  }

  export type LeadCreateManyAgentInputEnvelope = {
    data: LeadCreateManyAgentInput | LeadCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type LeadNoteCreateWithoutAgentInput = {
    id?: string
    note: string
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutNotesInput
  }

  export type LeadNoteUncheckedCreateWithoutAgentInput = {
    id?: string
    leadId: string
    note: string
    createdAt?: Date | string
  }

  export type LeadNoteCreateOrConnectWithoutAgentInput = {
    where: LeadNoteWhereUniqueInput
    create: XOR<LeadNoteCreateWithoutAgentInput, LeadNoteUncheckedCreateWithoutAgentInput>
  }

  export type LeadNoteCreateManyAgentInputEnvelope = {
    data: LeadNoteCreateManyAgentInput | LeadNoteCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type ShowroomUpsertWithoutUsersInput = {
    update: XOR<ShowroomUpdateWithoutUsersInput, ShowroomUncheckedUpdateWithoutUsersInput>
    create: XOR<ShowroomCreateWithoutUsersInput, ShowroomUncheckedCreateWithoutUsersInput>
    where?: ShowroomWhereInput
  }

  export type ShowroomUpdateToOneWithWhereWithoutUsersInput = {
    where?: ShowroomWhereInput
    data: XOR<ShowroomUpdateWithoutUsersInput, ShowroomUncheckedUpdateWithoutUsersInput>
  }

  export type ShowroomUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUpdateManyWithoutShowroomNestedInput
  }

  export type ShowroomUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    approvalRequired?: BoolFieldUpdateOperationsInput | boolean
    brandingVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cars?: CarUncheckedUpdateManyWithoutShowroomNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutAgentInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutAgentInput, LeadUncheckedUpdateWithoutAgentInput>
    create: XOR<LeadCreateWithoutAgentInput, LeadUncheckedCreateWithoutAgentInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutAgentInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutAgentInput, LeadUncheckedUpdateWithoutAgentInput>
  }

  export type LeadUpdateManyWithWhereWithoutAgentInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutAgentInput>
  }

  export type LeadNoteUpsertWithWhereUniqueWithoutAgentInput = {
    where: LeadNoteWhereUniqueInput
    update: XOR<LeadNoteUpdateWithoutAgentInput, LeadNoteUncheckedUpdateWithoutAgentInput>
    create: XOR<LeadNoteCreateWithoutAgentInput, LeadNoteUncheckedCreateWithoutAgentInput>
  }

  export type LeadNoteUpdateWithWhereUniqueWithoutAgentInput = {
    where: LeadNoteWhereUniqueInput
    data: XOR<LeadNoteUpdateWithoutAgentInput, LeadNoteUncheckedUpdateWithoutAgentInput>
  }

  export type LeadNoteUpdateManyWithWhereWithoutAgentInput = {
    where: LeadNoteScalarWhereInput
    data: XOR<LeadNoteUpdateManyMutationInput, LeadNoteUncheckedUpdateManyWithoutAgentInput>
  }

  export type CarCreateWithoutEnquiriesInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    showroom?: ShowroomCreateNestedOneWithoutCarsInput
    images?: ImageCreateNestedManyWithoutCarInput
    leads?: LeadCreateNestedManyWithoutCarInput
    testDrives?: TestDriveCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutEnquiriesInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    showroomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutCarInput
    leads?: LeadUncheckedCreateNestedManyWithoutCarInput
    testDrives?: TestDriveUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutEnquiriesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutEnquiriesInput, CarUncheckedCreateWithoutEnquiriesInput>
  }

  export type CarUpsertWithoutEnquiriesInput = {
    update: XOR<CarUpdateWithoutEnquiriesInput, CarUncheckedUpdateWithoutEnquiriesInput>
    create: XOR<CarCreateWithoutEnquiriesInput, CarUncheckedCreateWithoutEnquiriesInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutEnquiriesInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutEnquiriesInput, CarUncheckedUpdateWithoutEnquiriesInput>
  }

  export type CarUpdateWithoutEnquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showroom?: ShowroomUpdateOneWithoutCarsNestedInput
    images?: ImageUpdateManyWithoutCarNestedInput
    leads?: LeadUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutEnquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    showroomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutCarNestedInput
  }

  export type ImageCreateManyCarInput = {
    id?: string
    url: string
    imagekitId?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type LeadCreateManyCarInput = {
    id?: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    agentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnquiryCreateManyCarInput = {
    id?: string
    buyerName?: string | null
    buyerPhone?: string | null
    message?: string | null
    waLinkClicked?: boolean
    createdAt?: Date | string
  }

  export type TestDriveCreateManyCarInput = {
    id?: string
    leadId: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imagekitId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ImageUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imagekitId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ImageUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    imagekitId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: UserUpdateOneWithoutLeadsNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    testDrives?: TestDriveUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    waLinkClicked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    waLinkClicked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: NullableStringFieldUpdateOperationsInput | string | null
    buyerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    waLinkClicked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutTestDrivesNestedInput
  }

  export type TestDriveUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteCreateManyLeadInput = {
    id?: string
    agentId: string
    note: string
    createdAt?: Date | string
  }

  export type TestDriveCreateManyLeadInput = {
    id?: string
    carId: string
    scheduledAt: Date | string
    status?: $Enums.TestDriveStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type LeadNoteUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type LeadNoteUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutTestDrivesNestedInput
  }

  export type TestDriveUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTestDriveStatusFieldUpdateOperationsInput | $Enums.TestDriveStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarCreateManyShowroomInput = {
    id?: string
    slug: string
    title: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    fuelType: string
    transmission: string
    driveType: string
    bodyType: string
    colour: string
    seats?: number
    condition?: string
    importFrom?: string | null
    description?: string | null
    location: string
    status?: $Enums.CarStatus
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyShowroomInput = {
    id?: string
    email: string
    fullName: string
    phone?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
  }

  export type CarUpdateWithoutShowroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutCarNestedInput
    leads?: LeadUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutShowroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutCarNestedInput
    leads?: LeadUncheckedUpdateManyWithoutCarNestedInput
    enquiries?: EnquiryUncheckedUpdateManyWithoutCarNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutShowroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    driveType?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    colour?: StringFieldUpdateOperationsInput | string
    seats?: IntFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    importFrom?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutShowroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutAgentNestedInput
    notes?: LeadNoteUpdateManyWithoutAgentNestedInput
  }

  export type UserUncheckedUpdateWithoutShowroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutAgentNestedInput
    notes?: LeadNoteUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type UserUncheckedUpdateManyWithoutShowroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyAgentInput = {
    id?: string
    carId: string
    buyerName: string
    buyerPhone: string
    buyerEmail?: string | null
    source?: $Enums.LeadSource
    status?: $Enums.LeadStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadNoteCreateManyAgentInput = {
    id?: string
    leadId: string
    note: string
    createdAt?: Date | string
  }

  export type LeadUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutLeadsNestedInput
    notes?: LeadNoteUpdateManyWithoutLeadNestedInput
    testDrives?: TestDriveUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: LeadNoteUncheckedUpdateManyWithoutLeadNestedInput
    testDrives?: TestDriveUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    buyerName?: StringFieldUpdateOperationsInput | string
    buyerPhone?: StringFieldUpdateOperationsInput | string
    buyerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumLeadSourceFieldUpdateOperationsInput | $Enums.LeadSource
    status?: EnumLeadStatusFieldUpdateOperationsInput | $Enums.LeadStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutNotesNestedInput
  }

  export type LeadNoteUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadNoteUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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