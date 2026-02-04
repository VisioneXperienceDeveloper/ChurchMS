
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
 * Model GroupType
 * 
 */
export type GroupType = $Result.DefaultSelection<Prisma.$GroupTypePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Church
 * 
 */
export type Church = $Result.DefaultSelection<Prisma.$ChurchPayload>
/**
 * Model SubGroup
 * 
 */
export type SubGroup = $Result.DefaultSelection<Prisma.$SubGroupPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model SeniorPastor
 * 
 */
export type SeniorPastor = $Result.DefaultSelection<Prisma.$SeniorPastorPayload>
/**
 * Model Pastor
 * 
 */
export type Pastor = $Result.DefaultSelection<Prisma.$PastorPayload>
/**
 * Model Leader
 * 
 */
export type Leader = $Result.DefaultSelection<Prisma.$LeaderPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Newcomer
 * 
 */
export type Newcomer = $Result.DefaultSelection<Prisma.$NewcomerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SENIOR_PASTOR: 'SENIOR_PASTOR',
  PASTOR: 'PASTOR',
  LEADER: 'LEADER',
  MEMBER: 'MEMBER',
  NEWCOMER: 'NEWCOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PersonType: {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G'
};

export type PersonType = (typeof PersonType)[keyof typeof PersonType]


export const VisaType: {
  STUDENT: 'STUDENT',
  WORKING_HOLIDAY: 'WORKING_HOLIDAY',
  TRAVELLING: 'TRAVELLING',
  SPONSERSHIP: 'SPONSERSHIP',
  CITIZENSHIP: 'CITIZENSHIP',
  PR: 'PR',
  GRADUATE: 'GRADUATE',
  ETC: 'ETC'
};

export type VisaType = (typeof VisaType)[keyof typeof VisaType]


export const ProcessStatus: {
  READY: 'READY',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ProcessStatus = (typeof ProcessStatus)[keyof typeof ProcessStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PersonType = $Enums.PersonType

export const PersonType: typeof $Enums.PersonType

export type VisaType = $Enums.VisaType

export const VisaType: typeof $Enums.VisaType

export type ProcessStatus = $Enums.ProcessStatus

export const ProcessStatus: typeof $Enums.ProcessStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GroupTypes
 * const groupTypes = await prisma.groupType.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more GroupTypes
   * const groupTypes = await prisma.groupType.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.groupType`: Exposes CRUD operations for the **GroupType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupTypes
    * const groupTypes = await prisma.groupType.findMany()
    * ```
    */
  get groupType(): Prisma.GroupTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.church`: Exposes CRUD operations for the **Church** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Churches
    * const churches = await prisma.church.findMany()
    * ```
    */
  get church(): Prisma.ChurchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subGroup`: Exposes CRUD operations for the **SubGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubGroups
    * const subGroups = await prisma.subGroup.findMany()
    * ```
    */
  get subGroup(): Prisma.SubGroupDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seniorPastor`: Exposes CRUD operations for the **SeniorPastor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeniorPastors
    * const seniorPastors = await prisma.seniorPastor.findMany()
    * ```
    */
  get seniorPastor(): Prisma.SeniorPastorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pastor`: Exposes CRUD operations for the **Pastor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pastors
    * const pastors = await prisma.pastor.findMany()
    * ```
    */
  get pastor(): Prisma.PastorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leader`: Exposes CRUD operations for the **Leader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaders
    * const leaders = await prisma.leader.findMany()
    * ```
    */
  get leader(): Prisma.LeaderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newcomer`: Exposes CRUD operations for the **Newcomer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Newcomers
    * const newcomers = await prisma.newcomer.findMany()
    * ```
    */
  get newcomer(): Prisma.NewcomerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
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
    GroupType: 'GroupType',
    Group: 'Group',
    Church: 'Church',
    SubGroup: 'SubGroup',
    User: 'User',
    Person: 'Person',
    SeniorPastor: 'SeniorPastor',
    Pastor: 'Pastor',
    Leader: 'Leader',
    Member: 'Member',
    Newcomer: 'Newcomer'
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
      modelProps: "groupType" | "group" | "church" | "subGroup" | "user" | "person" | "seniorPastor" | "pastor" | "leader" | "member" | "newcomer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GroupType: {
        payload: Prisma.$GroupTypePayload<ExtArgs>
        fields: Prisma.GroupTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>
          }
          findFirst: {
            args: Prisma.GroupTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>
          }
          findMany: {
            args: Prisma.GroupTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>[]
          }
          create: {
            args: Prisma.GroupTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>
          }
          createMany: {
            args: Prisma.GroupTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>[]
          }
          delete: {
            args: Prisma.GroupTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>
          }
          update: {
            args: Prisma.GroupTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>
          }
          deleteMany: {
            args: Prisma.GroupTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>[]
          }
          upsert: {
            args: Prisma.GroupTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTypePayload>
          }
          aggregate: {
            args: Prisma.GroupTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupType>
          }
          groupBy: {
            args: Prisma.GroupTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupTypeCountArgs<ExtArgs>
            result: $Utils.Optional<GroupTypeCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Church: {
        payload: Prisma.$ChurchPayload<ExtArgs>
        fields: Prisma.ChurchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChurchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChurchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          findFirst: {
            args: Prisma.ChurchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChurchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          findMany: {
            args: Prisma.ChurchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>[]
          }
          create: {
            args: Prisma.ChurchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          createMany: {
            args: Prisma.ChurchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChurchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>[]
          }
          delete: {
            args: Prisma.ChurchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          update: {
            args: Prisma.ChurchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          deleteMany: {
            args: Prisma.ChurchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChurchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChurchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>[]
          }
          upsert: {
            args: Prisma.ChurchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChurchPayload>
          }
          aggregate: {
            args: Prisma.ChurchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChurch>
          }
          groupBy: {
            args: Prisma.ChurchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChurchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChurchCountArgs<ExtArgs>
            result: $Utils.Optional<ChurchCountAggregateOutputType> | number
          }
        }
      }
      SubGroup: {
        payload: Prisma.$SubGroupPayload<ExtArgs>
        fields: Prisma.SubGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          findFirst: {
            args: Prisma.SubGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          findMany: {
            args: Prisma.SubGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>[]
          }
          create: {
            args: Prisma.SubGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          createMany: {
            args: Prisma.SubGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>[]
          }
          delete: {
            args: Prisma.SubGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          update: {
            args: Prisma.SubGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          deleteMany: {
            args: Prisma.SubGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>[]
          }
          upsert: {
            args: Prisma.SubGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubGroupPayload>
          }
          aggregate: {
            args: Prisma.SubGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubGroup>
          }
          groupBy: {
            args: Prisma.SubGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubGroupCountArgs<ExtArgs>
            result: $Utils.Optional<SubGroupCountAggregateOutputType> | number
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
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      SeniorPastor: {
        payload: Prisma.$SeniorPastorPayload<ExtArgs>
        fields: Prisma.SeniorPastorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeniorPastorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeniorPastorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>
          }
          findFirst: {
            args: Prisma.SeniorPastorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeniorPastorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>
          }
          findMany: {
            args: Prisma.SeniorPastorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>[]
          }
          create: {
            args: Prisma.SeniorPastorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>
          }
          createMany: {
            args: Prisma.SeniorPastorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeniorPastorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>[]
          }
          delete: {
            args: Prisma.SeniorPastorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>
          }
          update: {
            args: Prisma.SeniorPastorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>
          }
          deleteMany: {
            args: Prisma.SeniorPastorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeniorPastorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeniorPastorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>[]
          }
          upsert: {
            args: Prisma.SeniorPastorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeniorPastorPayload>
          }
          aggregate: {
            args: Prisma.SeniorPastorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeniorPastor>
          }
          groupBy: {
            args: Prisma.SeniorPastorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeniorPastorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeniorPastorCountArgs<ExtArgs>
            result: $Utils.Optional<SeniorPastorCountAggregateOutputType> | number
          }
        }
      }
      Pastor: {
        payload: Prisma.$PastorPayload<ExtArgs>
        fields: Prisma.PastorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PastorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PastorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>
          }
          findFirst: {
            args: Prisma.PastorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PastorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>
          }
          findMany: {
            args: Prisma.PastorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>[]
          }
          create: {
            args: Prisma.PastorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>
          }
          createMany: {
            args: Prisma.PastorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PastorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>[]
          }
          delete: {
            args: Prisma.PastorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>
          }
          update: {
            args: Prisma.PastorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>
          }
          deleteMany: {
            args: Prisma.PastorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PastorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PastorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>[]
          }
          upsert: {
            args: Prisma.PastorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PastorPayload>
          }
          aggregate: {
            args: Prisma.PastorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePastor>
          }
          groupBy: {
            args: Prisma.PastorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PastorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PastorCountArgs<ExtArgs>
            result: $Utils.Optional<PastorCountAggregateOutputType> | number
          }
        }
      }
      Leader: {
        payload: Prisma.$LeaderPayload<ExtArgs>
        fields: Prisma.LeaderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>
          }
          findFirst: {
            args: Prisma.LeaderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>
          }
          findMany: {
            args: Prisma.LeaderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>[]
          }
          create: {
            args: Prisma.LeaderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>
          }
          createMany: {
            args: Prisma.LeaderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>[]
          }
          delete: {
            args: Prisma.LeaderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>
          }
          update: {
            args: Prisma.LeaderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>
          }
          deleteMany: {
            args: Prisma.LeaderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>[]
          }
          upsert: {
            args: Prisma.LeaderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderPayload>
          }
          aggregate: {
            args: Prisma.LeaderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeader>
          }
          groupBy: {
            args: Prisma.LeaderGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Newcomer: {
        payload: Prisma.$NewcomerPayload<ExtArgs>
        fields: Prisma.NewcomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewcomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewcomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>
          }
          findFirst: {
            args: Prisma.NewcomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewcomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>
          }
          findMany: {
            args: Prisma.NewcomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>[]
          }
          create: {
            args: Prisma.NewcomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>
          }
          createMany: {
            args: Prisma.NewcomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewcomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>[]
          }
          delete: {
            args: Prisma.NewcomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>
          }
          update: {
            args: Prisma.NewcomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>
          }
          deleteMany: {
            args: Prisma.NewcomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewcomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewcomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>[]
          }
          upsert: {
            args: Prisma.NewcomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewcomerPayload>
          }
          aggregate: {
            args: Prisma.NewcomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewcomer>
          }
          groupBy: {
            args: Prisma.NewcomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewcomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewcomerCountArgs<ExtArgs>
            result: $Utils.Optional<NewcomerCountAggregateOutputType> | number
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
    groupType?: GroupTypeOmit
    group?: GroupOmit
    church?: ChurchOmit
    subGroup?: SubGroupOmit
    user?: UserOmit
    person?: PersonOmit
    seniorPastor?: SeniorPastorOmit
    pastor?: PastorOmit
    leader?: LeaderOmit
    member?: MemberOmit
    newcomer?: NewcomerOmit
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
   * Count Type GroupTypeCountOutputType
   */

  export type GroupTypeCountOutputType = {
    groups: number
  }

  export type GroupTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | GroupTypeCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * GroupTypeCountOutputType without action
   */
  export type GroupTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTypeCountOutputType
     */
    select?: GroupTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupTypeCountOutputType without action
   */
  export type GroupTypeCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    subGroups: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subGroups?: boolean | GroupCountOutputTypeCountSubGroupsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountSubGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubGroupWhereInput
  }


  /**
   * Count Type ChurchCountOutputType
   */

  export type ChurchCountOutputType = {
    groupTypes: number
  }

  export type ChurchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupTypes?: boolean | ChurchCountOutputTypeCountGroupTypesArgs
  }

  // Custom InputTypes
  /**
   * ChurchCountOutputType without action
   */
  export type ChurchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChurchCountOutputType
     */
    select?: ChurchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChurchCountOutputType without action
   */
  export type ChurchCountOutputTypeCountGroupTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTypeWhereInput
  }


  /**
   * Count Type SubGroupCountOutputType
   */

  export type SubGroupCountOutputType = {
    children: number
    members: number
  }

  export type SubGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | SubGroupCountOutputTypeCountChildrenArgs
    members?: boolean | SubGroupCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * SubGroupCountOutputType without action
   */
  export type SubGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroupCountOutputType
     */
    select?: SubGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubGroupCountOutputType without action
   */
  export type SubGroupCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubGroupWhereInput
  }

  /**
   * SubGroupCountOutputType without action
   */
  export type SubGroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    invitedNewcomers: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitedNewcomers?: boolean | PersonCountOutputTypeCountInvitedNewcomersArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountInvitedNewcomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewcomerWhereInput
  }


  /**
   * Count Type SeniorPastorCountOutputType
   */

  export type SeniorPastorCountOutputType = {
    churches: number
    groupTypes: number
  }

  export type SeniorPastorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    churches?: boolean | SeniorPastorCountOutputTypeCountChurchesArgs
    groupTypes?: boolean | SeniorPastorCountOutputTypeCountGroupTypesArgs
  }

  // Custom InputTypes
  /**
   * SeniorPastorCountOutputType without action
   */
  export type SeniorPastorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastorCountOutputType
     */
    select?: SeniorPastorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeniorPastorCountOutputType without action
   */
  export type SeniorPastorCountOutputTypeCountChurchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChurchWhereInput
  }

  /**
   * SeniorPastorCountOutputType without action
   */
  export type SeniorPastorCountOutputTypeCountGroupTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTypeWhereInput
  }


  /**
   * Count Type PastorCountOutputType
   */

  export type PastorCountOutputType = {
    ledGroups: number
  }

  export type PastorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledGroups?: boolean | PastorCountOutputTypeCountLedGroupsArgs
  }

  // Custom InputTypes
  /**
   * PastorCountOutputType without action
   */
  export type PastorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PastorCountOutputType
     */
    select?: PastorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PastorCountOutputType without action
   */
  export type PastorCountOutputTypeCountLedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubGroupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GroupType
   */

  export type AggregateGroupType = {
    _count: GroupTypeCountAggregateOutputType | null
    _avg: GroupTypeAvgAggregateOutputType | null
    _sum: GroupTypeSumAggregateOutputType | null
    _min: GroupTypeMinAggregateOutputType | null
    _max: GroupTypeMaxAggregateOutputType | null
  }

  export type GroupTypeAvgAggregateOutputType = {
    order: number | null
  }

  export type GroupTypeSumAggregateOutputType = {
    order: number | null
  }

  export type GroupTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    churchId: string | null
    seniorPastorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    churchId: string | null
    seniorPastorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupTypeCountAggregateOutputType = {
    id: number
    name: number
    order: number
    churchId: number
    seniorPastorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupTypeAvgAggregateInputType = {
    order?: true
  }

  export type GroupTypeSumAggregateInputType = {
    order?: true
  }

  export type GroupTypeMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    churchId?: true
    seniorPastorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupTypeMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    churchId?: true
    seniorPastorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupTypeCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    churchId?: true
    seniorPastorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupType to aggregate.
     */
    where?: GroupTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTypes to fetch.
     */
    orderBy?: GroupTypeOrderByWithRelationInput | GroupTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupTypes
    **/
    _count?: true | GroupTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupTypeMaxAggregateInputType
  }

  export type GetGroupTypeAggregateType<T extends GroupTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupType[P]>
      : GetScalarType<T[P], AggregateGroupType[P]>
  }




  export type GroupTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTypeWhereInput
    orderBy?: GroupTypeOrderByWithAggregationInput | GroupTypeOrderByWithAggregationInput[]
    by: GroupTypeScalarFieldEnum[] | GroupTypeScalarFieldEnum
    having?: GroupTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupTypeCountAggregateInputType | true
    _avg?: GroupTypeAvgAggregateInputType
    _sum?: GroupTypeSumAggregateInputType
    _min?: GroupTypeMinAggregateInputType
    _max?: GroupTypeMaxAggregateInputType
  }

  export type GroupTypeGroupByOutputType = {
    id: string
    name: string
    order: number
    churchId: string
    seniorPastorId: string
    createdAt: Date
    updatedAt: Date
    _count: GroupTypeCountAggregateOutputType | null
    _avg: GroupTypeAvgAggregateOutputType | null
    _sum: GroupTypeSumAggregateOutputType | null
    _min: GroupTypeMinAggregateOutputType | null
    _max: GroupTypeMaxAggregateOutputType | null
  }

  type GetGroupTypeGroupByPayload<T extends GroupTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupTypeGroupByOutputType[P]>
            : GetScalarType<T[P], GroupTypeGroupByOutputType[P]>
        }
      >
    >


  export type GroupTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    churchId?: boolean
    seniorPastorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groups?: boolean | GroupType$groupsArgs<ExtArgs>
    church?: boolean | ChurchDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
    _count?: boolean | GroupTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupType"]>

  export type GroupTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    churchId?: boolean
    seniorPastorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    church?: boolean | ChurchDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupType"]>

  export type GroupTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    churchId?: boolean
    seniorPastorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    church?: boolean | ChurchDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupType"]>

  export type GroupTypeSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    churchId?: boolean
    seniorPastorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order" | "churchId" | "seniorPastorId" | "createdAt" | "updatedAt", ExtArgs["result"]["groupType"]>
  export type GroupTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | GroupType$groupsArgs<ExtArgs>
    church?: boolean | ChurchDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
    _count?: boolean | GroupTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    church?: boolean | ChurchDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }
  export type GroupTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    church?: boolean | ChurchDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }

  export type $GroupTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupType"
    objects: {
      groups: Prisma.$GroupPayload<ExtArgs>[]
      church: Prisma.$ChurchPayload<ExtArgs>
      seniorPastor: Prisma.$SeniorPastorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
      churchId: string
      seniorPastorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupType"]>
    composites: {}
  }

  type GroupTypeGetPayload<S extends boolean | null | undefined | GroupTypeDefaultArgs> = $Result.GetResult<Prisma.$GroupTypePayload, S>

  type GroupTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupTypeCountAggregateInputType | true
    }

  export interface GroupTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupType'], meta: { name: 'GroupType' } }
    /**
     * Find zero or one GroupType that matches the filter.
     * @param {GroupTypeFindUniqueArgs} args - Arguments to find a GroupType
     * @example
     * // Get one GroupType
     * const groupType = await prisma.groupType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupTypeFindUniqueArgs>(args: SelectSubset<T, GroupTypeFindUniqueArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupTypeFindUniqueOrThrowArgs} args - Arguments to find a GroupType
     * @example
     * // Get one GroupType
     * const groupType = await prisma.groupType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTypeFindFirstArgs} args - Arguments to find a GroupType
     * @example
     * // Get one GroupType
     * const groupType = await prisma.groupType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupTypeFindFirstArgs>(args?: SelectSubset<T, GroupTypeFindFirstArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTypeFindFirstOrThrowArgs} args - Arguments to find a GroupType
     * @example
     * // Get one GroupType
     * const groupType = await prisma.groupType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupTypes
     * const groupTypes = await prisma.groupType.findMany()
     * 
     * // Get first 10 GroupTypes
     * const groupTypes = await prisma.groupType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupTypeWithIdOnly = await prisma.groupType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupTypeFindManyArgs>(args?: SelectSubset<T, GroupTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupType.
     * @param {GroupTypeCreateArgs} args - Arguments to create a GroupType.
     * @example
     * // Create one GroupType
     * const GroupType = await prisma.groupType.create({
     *   data: {
     *     // ... data to create a GroupType
     *   }
     * })
     * 
     */
    create<T extends GroupTypeCreateArgs>(args: SelectSubset<T, GroupTypeCreateArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupTypes.
     * @param {GroupTypeCreateManyArgs} args - Arguments to create many GroupTypes.
     * @example
     * // Create many GroupTypes
     * const groupType = await prisma.groupType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupTypeCreateManyArgs>(args?: SelectSubset<T, GroupTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupTypes and returns the data saved in the database.
     * @param {GroupTypeCreateManyAndReturnArgs} args - Arguments to create many GroupTypes.
     * @example
     * // Create many GroupTypes
     * const groupType = await prisma.groupType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupTypes and only return the `id`
     * const groupTypeWithIdOnly = await prisma.groupType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupType.
     * @param {GroupTypeDeleteArgs} args - Arguments to delete one GroupType.
     * @example
     * // Delete one GroupType
     * const GroupType = await prisma.groupType.delete({
     *   where: {
     *     // ... filter to delete one GroupType
     *   }
     * })
     * 
     */
    delete<T extends GroupTypeDeleteArgs>(args: SelectSubset<T, GroupTypeDeleteArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupType.
     * @param {GroupTypeUpdateArgs} args - Arguments to update one GroupType.
     * @example
     * // Update one GroupType
     * const groupType = await prisma.groupType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupTypeUpdateArgs>(args: SelectSubset<T, GroupTypeUpdateArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupTypes.
     * @param {GroupTypeDeleteManyArgs} args - Arguments to filter GroupTypes to delete.
     * @example
     * // Delete a few GroupTypes
     * const { count } = await prisma.groupType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupTypeDeleteManyArgs>(args?: SelectSubset<T, GroupTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupTypes
     * const groupType = await prisma.groupType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupTypeUpdateManyArgs>(args: SelectSubset<T, GroupTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTypes and returns the data updated in the database.
     * @param {GroupTypeUpdateManyAndReturnArgs} args - Arguments to update many GroupTypes.
     * @example
     * // Update many GroupTypes
     * const groupType = await prisma.groupType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupTypes and only return the `id`
     * const groupTypeWithIdOnly = await prisma.groupType.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupType.
     * @param {GroupTypeUpsertArgs} args - Arguments to update or create a GroupType.
     * @example
     * // Update or create a GroupType
     * const groupType = await prisma.groupType.upsert({
     *   create: {
     *     // ... data to create a GroupType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupType we want to update
     *   }
     * })
     */
    upsert<T extends GroupTypeUpsertArgs>(args: SelectSubset<T, GroupTypeUpsertArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTypeCountArgs} args - Arguments to filter GroupTypes to count.
     * @example
     * // Count the number of GroupTypes
     * const count = await prisma.groupType.count({
     *   where: {
     *     // ... the filter for the GroupTypes we want to count
     *   }
     * })
    **/
    count<T extends GroupTypeCountArgs>(
      args?: Subset<T, GroupTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupTypeAggregateArgs>(args: Subset<T, GroupTypeAggregateArgs>): Prisma.PrismaPromise<GetGroupTypeAggregateType<T>>

    /**
     * Group by GroupType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTypeGroupByArgs} args - Group by arguments.
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
      T extends GroupTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupTypeGroupByArgs['orderBy'] }
        : { orderBy?: GroupTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupType model
   */
  readonly fields: GroupTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends GroupType$groupsArgs<ExtArgs> = {}>(args?: Subset<T, GroupType$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    church<T extends ChurchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChurchDefaultArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seniorPastor<T extends SeniorPastorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeniorPastorDefaultArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupType model
   */
  interface GroupTypeFieldRefs {
    readonly id: FieldRef<"GroupType", 'String'>
    readonly name: FieldRef<"GroupType", 'String'>
    readonly order: FieldRef<"GroupType", 'Int'>
    readonly churchId: FieldRef<"GroupType", 'String'>
    readonly seniorPastorId: FieldRef<"GroupType", 'String'>
    readonly createdAt: FieldRef<"GroupType", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupType findUnique
   */
  export type GroupTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * Filter, which GroupType to fetch.
     */
    where: GroupTypeWhereUniqueInput
  }

  /**
   * GroupType findUniqueOrThrow
   */
  export type GroupTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * Filter, which GroupType to fetch.
     */
    where: GroupTypeWhereUniqueInput
  }

  /**
   * GroupType findFirst
   */
  export type GroupTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * Filter, which GroupType to fetch.
     */
    where?: GroupTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTypes to fetch.
     */
    orderBy?: GroupTypeOrderByWithRelationInput | GroupTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTypes.
     */
    cursor?: GroupTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTypes.
     */
    distinct?: GroupTypeScalarFieldEnum | GroupTypeScalarFieldEnum[]
  }

  /**
   * GroupType findFirstOrThrow
   */
  export type GroupTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * Filter, which GroupType to fetch.
     */
    where?: GroupTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTypes to fetch.
     */
    orderBy?: GroupTypeOrderByWithRelationInput | GroupTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTypes.
     */
    cursor?: GroupTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTypes.
     */
    distinct?: GroupTypeScalarFieldEnum | GroupTypeScalarFieldEnum[]
  }

  /**
   * GroupType findMany
   */
  export type GroupTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * Filter, which GroupTypes to fetch.
     */
    where?: GroupTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTypes to fetch.
     */
    orderBy?: GroupTypeOrderByWithRelationInput | GroupTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupTypes.
     */
    cursor?: GroupTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTypes.
     */
    skip?: number
    distinct?: GroupTypeScalarFieldEnum | GroupTypeScalarFieldEnum[]
  }

  /**
   * GroupType create
   */
  export type GroupTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupType.
     */
    data: XOR<GroupTypeCreateInput, GroupTypeUncheckedCreateInput>
  }

  /**
   * GroupType createMany
   */
  export type GroupTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupTypes.
     */
    data: GroupTypeCreateManyInput | GroupTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupType createManyAndReturn
   */
  export type GroupTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * The data used to create many GroupTypes.
     */
    data: GroupTypeCreateManyInput | GroupTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupType update
   */
  export type GroupTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupType.
     */
    data: XOR<GroupTypeUpdateInput, GroupTypeUncheckedUpdateInput>
    /**
     * Choose, which GroupType to update.
     */
    where: GroupTypeWhereUniqueInput
  }

  /**
   * GroupType updateMany
   */
  export type GroupTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupTypes.
     */
    data: XOR<GroupTypeUpdateManyMutationInput, GroupTypeUncheckedUpdateManyInput>
    /**
     * Filter which GroupTypes to update
     */
    where?: GroupTypeWhereInput
    /**
     * Limit how many GroupTypes to update.
     */
    limit?: number
  }

  /**
   * GroupType updateManyAndReturn
   */
  export type GroupTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * The data used to update GroupTypes.
     */
    data: XOR<GroupTypeUpdateManyMutationInput, GroupTypeUncheckedUpdateManyInput>
    /**
     * Filter which GroupTypes to update
     */
    where?: GroupTypeWhereInput
    /**
     * Limit how many GroupTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupType upsert
   */
  export type GroupTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupType to update in case it exists.
     */
    where: GroupTypeWhereUniqueInput
    /**
     * In case the GroupType found by the `where` argument doesn't exist, create a new GroupType with this data.
     */
    create: XOR<GroupTypeCreateInput, GroupTypeUncheckedCreateInput>
    /**
     * In case the GroupType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupTypeUpdateInput, GroupTypeUncheckedUpdateInput>
  }

  /**
   * GroupType delete
   */
  export type GroupTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    /**
     * Filter which GroupType to delete.
     */
    where: GroupTypeWhereUniqueInput
  }

  /**
   * GroupType deleteMany
   */
  export type GroupTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTypes to delete
     */
    where?: GroupTypeWhereInput
    /**
     * Limit how many GroupTypes to delete.
     */
    limit?: number
  }

  /**
   * GroupType.groups
   */
  export type GroupType$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * GroupType without action
   */
  export type GroupTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    groupTypeId: string | null
    createdAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    groupTypeId: string | null
    createdAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    groupTypeId: number
    createdAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    groupTypeId?: true
    createdAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    groupTypeId?: true
    createdAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    groupTypeId?: true
    createdAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    groupTypeId: string
    createdAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groupTypeId?: boolean
    createdAt?: boolean
    type?: boolean | GroupTypeDefaultArgs<ExtArgs>
    church?: boolean | Group$churchArgs<ExtArgs>
    subGroups?: boolean | Group$subGroupsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groupTypeId?: boolean
    createdAt?: boolean
    type?: boolean | GroupTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    groupTypeId?: boolean
    createdAt?: boolean
    type?: boolean | GroupTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    groupTypeId?: boolean
    createdAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "groupTypeId" | "createdAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | GroupTypeDefaultArgs<ExtArgs>
    church?: boolean | Group$churchArgs<ExtArgs>
    subGroups?: boolean | Group$subGroupsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | GroupTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | GroupTypeDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      type: Prisma.$GroupTypePayload<ExtArgs>
      church: Prisma.$ChurchPayload<ExtArgs> | null
      subGroups: Prisma.$SubGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      groupTypeId: string
      createdAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends GroupTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupTypeDefaultArgs<ExtArgs>>): Prisma__GroupTypeClient<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    church<T extends Group$churchArgs<ExtArgs> = {}>(args?: Subset<T, Group$churchArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subGroups<T extends Group$subGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Group$subGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly groupTypeId: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.church
   */
  export type Group$churchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    where?: ChurchWhereInput
  }

  /**
   * Group.subGroups
   */
  export type Group$subGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    where?: SubGroupWhereInput
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    cursor?: SubGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Church
   */

  export type AggregateChurch = {
    _count: ChurchCountAggregateOutputType | null
    _min: ChurchMinAggregateOutputType | null
    _max: ChurchMaxAggregateOutputType | null
  }

  export type ChurchMinAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    estDate: Date | null
    seniorPastorId: string | null
    updatedAt: Date | null
  }

  export type ChurchMaxAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    estDate: Date | null
    seniorPastorId: string | null
    updatedAt: Date | null
  }

  export type ChurchCountAggregateOutputType = {
    id: number
    address: number
    phone: number
    estDate: number
    seniorPastorId: number
    updatedAt: number
    _all: number
  }


  export type ChurchMinAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    estDate?: true
    seniorPastorId?: true
    updatedAt?: true
  }

  export type ChurchMaxAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    estDate?: true
    seniorPastorId?: true
    updatedAt?: true
  }

  export type ChurchCountAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    estDate?: true
    seniorPastorId?: true
    updatedAt?: true
    _all?: true
  }

  export type ChurchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Church to aggregate.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Churches
    **/
    _count?: true | ChurchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChurchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChurchMaxAggregateInputType
  }

  export type GetChurchAggregateType<T extends ChurchAggregateArgs> = {
        [P in keyof T & keyof AggregateChurch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChurch[P]>
      : GetScalarType<T[P], AggregateChurch[P]>
  }




  export type ChurchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChurchWhereInput
    orderBy?: ChurchOrderByWithAggregationInput | ChurchOrderByWithAggregationInput[]
    by: ChurchScalarFieldEnum[] | ChurchScalarFieldEnum
    having?: ChurchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChurchCountAggregateInputType | true
    _min?: ChurchMinAggregateInputType
    _max?: ChurchMaxAggregateInputType
  }

  export type ChurchGroupByOutputType = {
    id: string
    address: string | null
    phone: string | null
    estDate: Date | null
    seniorPastorId: string
    updatedAt: Date
    _count: ChurchCountAggregateOutputType | null
    _min: ChurchMinAggregateOutputType | null
    _max: ChurchMaxAggregateOutputType | null
  }

  type GetChurchGroupByPayload<T extends ChurchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChurchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChurchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChurchGroupByOutputType[P]>
            : GetScalarType<T[P], ChurchGroupByOutputType[P]>
        }
      >
    >


  export type ChurchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    estDate?: boolean
    seniorPastorId?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
    groupTypes?: boolean | Church$groupTypesArgs<ExtArgs>
    _count?: boolean | ChurchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["church"]>

  export type ChurchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    estDate?: boolean
    seniorPastorId?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["church"]>

  export type ChurchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    estDate?: boolean
    seniorPastorId?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["church"]>

  export type ChurchSelectScalar = {
    id?: boolean
    address?: boolean
    phone?: boolean
    estDate?: boolean
    seniorPastorId?: boolean
    updatedAt?: boolean
  }

  export type ChurchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "phone" | "estDate" | "seniorPastorId" | "updatedAt", ExtArgs["result"]["church"]>
  export type ChurchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
    groupTypes?: boolean | Church$groupTypesArgs<ExtArgs>
    _count?: boolean | ChurchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChurchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }
  export type ChurchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    seniorPastor?: boolean | SeniorPastorDefaultArgs<ExtArgs>
  }

  export type $ChurchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Church"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      seniorPastor: Prisma.$SeniorPastorPayload<ExtArgs>
      groupTypes: Prisma.$GroupTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string | null
      phone: string | null
      estDate: Date | null
      seniorPastorId: string
      updatedAt: Date
    }, ExtArgs["result"]["church"]>
    composites: {}
  }

  type ChurchGetPayload<S extends boolean | null | undefined | ChurchDefaultArgs> = $Result.GetResult<Prisma.$ChurchPayload, S>

  type ChurchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChurchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChurchCountAggregateInputType | true
    }

  export interface ChurchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Church'], meta: { name: 'Church' } }
    /**
     * Find zero or one Church that matches the filter.
     * @param {ChurchFindUniqueArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChurchFindUniqueArgs>(args: SelectSubset<T, ChurchFindUniqueArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Church that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChurchFindUniqueOrThrowArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChurchFindUniqueOrThrowArgs>(args: SelectSubset<T, ChurchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Church that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchFindFirstArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChurchFindFirstArgs>(args?: SelectSubset<T, ChurchFindFirstArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Church that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchFindFirstOrThrowArgs} args - Arguments to find a Church
     * @example
     * // Get one Church
     * const church = await prisma.church.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChurchFindFirstOrThrowArgs>(args?: SelectSubset<T, ChurchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Churches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Churches
     * const churches = await prisma.church.findMany()
     * 
     * // Get first 10 Churches
     * const churches = await prisma.church.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const churchWithIdOnly = await prisma.church.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChurchFindManyArgs>(args?: SelectSubset<T, ChurchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Church.
     * @param {ChurchCreateArgs} args - Arguments to create a Church.
     * @example
     * // Create one Church
     * const Church = await prisma.church.create({
     *   data: {
     *     // ... data to create a Church
     *   }
     * })
     * 
     */
    create<T extends ChurchCreateArgs>(args: SelectSubset<T, ChurchCreateArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Churches.
     * @param {ChurchCreateManyArgs} args - Arguments to create many Churches.
     * @example
     * // Create many Churches
     * const church = await prisma.church.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChurchCreateManyArgs>(args?: SelectSubset<T, ChurchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Churches and returns the data saved in the database.
     * @param {ChurchCreateManyAndReturnArgs} args - Arguments to create many Churches.
     * @example
     * // Create many Churches
     * const church = await prisma.church.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Churches and only return the `id`
     * const churchWithIdOnly = await prisma.church.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChurchCreateManyAndReturnArgs>(args?: SelectSubset<T, ChurchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Church.
     * @param {ChurchDeleteArgs} args - Arguments to delete one Church.
     * @example
     * // Delete one Church
     * const Church = await prisma.church.delete({
     *   where: {
     *     // ... filter to delete one Church
     *   }
     * })
     * 
     */
    delete<T extends ChurchDeleteArgs>(args: SelectSubset<T, ChurchDeleteArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Church.
     * @param {ChurchUpdateArgs} args - Arguments to update one Church.
     * @example
     * // Update one Church
     * const church = await prisma.church.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChurchUpdateArgs>(args: SelectSubset<T, ChurchUpdateArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Churches.
     * @param {ChurchDeleteManyArgs} args - Arguments to filter Churches to delete.
     * @example
     * // Delete a few Churches
     * const { count } = await prisma.church.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChurchDeleteManyArgs>(args?: SelectSubset<T, ChurchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Churches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Churches
     * const church = await prisma.church.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChurchUpdateManyArgs>(args: SelectSubset<T, ChurchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Churches and returns the data updated in the database.
     * @param {ChurchUpdateManyAndReturnArgs} args - Arguments to update many Churches.
     * @example
     * // Update many Churches
     * const church = await prisma.church.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Churches and only return the `id`
     * const churchWithIdOnly = await prisma.church.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChurchUpdateManyAndReturnArgs>(args: SelectSubset<T, ChurchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Church.
     * @param {ChurchUpsertArgs} args - Arguments to update or create a Church.
     * @example
     * // Update or create a Church
     * const church = await prisma.church.upsert({
     *   create: {
     *     // ... data to create a Church
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Church we want to update
     *   }
     * })
     */
    upsert<T extends ChurchUpsertArgs>(args: SelectSubset<T, ChurchUpsertArgs<ExtArgs>>): Prisma__ChurchClient<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Churches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchCountArgs} args - Arguments to filter Churches to count.
     * @example
     * // Count the number of Churches
     * const count = await prisma.church.count({
     *   where: {
     *     // ... the filter for the Churches we want to count
     *   }
     * })
    **/
    count<T extends ChurchCountArgs>(
      args?: Subset<T, ChurchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChurchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Church.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChurchAggregateArgs>(args: Subset<T, ChurchAggregateArgs>): Prisma.PrismaPromise<GetChurchAggregateType<T>>

    /**
     * Group by Church.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChurchGroupByArgs} args - Group by arguments.
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
      T extends ChurchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChurchGroupByArgs['orderBy'] }
        : { orderBy?: ChurchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChurchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChurchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Church model
   */
  readonly fields: ChurchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Church.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChurchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seniorPastor<T extends SeniorPastorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeniorPastorDefaultArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupTypes<T extends Church$groupTypesArgs<ExtArgs> = {}>(args?: Subset<T, Church$groupTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Church model
   */
  interface ChurchFieldRefs {
    readonly id: FieldRef<"Church", 'String'>
    readonly address: FieldRef<"Church", 'String'>
    readonly phone: FieldRef<"Church", 'String'>
    readonly estDate: FieldRef<"Church", 'DateTime'>
    readonly seniorPastorId: FieldRef<"Church", 'String'>
    readonly updatedAt: FieldRef<"Church", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Church findUnique
   */
  export type ChurchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church findUniqueOrThrow
   */
  export type ChurchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church findFirst
   */
  export type ChurchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Churches.
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Churches.
     */
    distinct?: ChurchScalarFieldEnum | ChurchScalarFieldEnum[]
  }

  /**
   * Church findFirstOrThrow
   */
  export type ChurchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Church to fetch.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Churches.
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Churches.
     */
    distinct?: ChurchScalarFieldEnum | ChurchScalarFieldEnum[]
  }

  /**
   * Church findMany
   */
  export type ChurchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter, which Churches to fetch.
     */
    where?: ChurchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Churches to fetch.
     */
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Churches.
     */
    cursor?: ChurchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Churches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Churches.
     */
    skip?: number
    distinct?: ChurchScalarFieldEnum | ChurchScalarFieldEnum[]
  }

  /**
   * Church create
   */
  export type ChurchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * The data needed to create a Church.
     */
    data: XOR<ChurchCreateInput, ChurchUncheckedCreateInput>
  }

  /**
   * Church createMany
   */
  export type ChurchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Churches.
     */
    data: ChurchCreateManyInput | ChurchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Church createManyAndReturn
   */
  export type ChurchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * The data used to create many Churches.
     */
    data: ChurchCreateManyInput | ChurchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Church update
   */
  export type ChurchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * The data needed to update a Church.
     */
    data: XOR<ChurchUpdateInput, ChurchUncheckedUpdateInput>
    /**
     * Choose, which Church to update.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church updateMany
   */
  export type ChurchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Churches.
     */
    data: XOR<ChurchUpdateManyMutationInput, ChurchUncheckedUpdateManyInput>
    /**
     * Filter which Churches to update
     */
    where?: ChurchWhereInput
    /**
     * Limit how many Churches to update.
     */
    limit?: number
  }

  /**
   * Church updateManyAndReturn
   */
  export type ChurchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * The data used to update Churches.
     */
    data: XOR<ChurchUpdateManyMutationInput, ChurchUncheckedUpdateManyInput>
    /**
     * Filter which Churches to update
     */
    where?: ChurchWhereInput
    /**
     * Limit how many Churches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Church upsert
   */
  export type ChurchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * The filter to search for the Church to update in case it exists.
     */
    where: ChurchWhereUniqueInput
    /**
     * In case the Church found by the `where` argument doesn't exist, create a new Church with this data.
     */
    create: XOR<ChurchCreateInput, ChurchUncheckedCreateInput>
    /**
     * In case the Church was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChurchUpdateInput, ChurchUncheckedUpdateInput>
  }

  /**
   * Church delete
   */
  export type ChurchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    /**
     * Filter which Church to delete.
     */
    where: ChurchWhereUniqueInput
  }

  /**
   * Church deleteMany
   */
  export type ChurchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Churches to delete
     */
    where?: ChurchWhereInput
    /**
     * Limit how many Churches to delete.
     */
    limit?: number
  }

  /**
   * Church.groupTypes
   */
  export type Church$groupTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    where?: GroupTypeWhereInput
    orderBy?: GroupTypeOrderByWithRelationInput | GroupTypeOrderByWithRelationInput[]
    cursor?: GroupTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupTypeScalarFieldEnum | GroupTypeScalarFieldEnum[]
  }

  /**
   * Church without action
   */
  export type ChurchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
  }


  /**
   * Model SubGroup
   */

  export type AggregateSubGroup = {
    _count: SubGroupCountAggregateOutputType | null
    _min: SubGroupMinAggregateOutputType | null
    _max: SubGroupMaxAggregateOutputType | null
  }

  export type SubGroupMinAggregateOutputType = {
    id: string | null
    parentId: string | null
    pastorId: string | null
    leaderId: string | null
    updatedAt: Date | null
  }

  export type SubGroupMaxAggregateOutputType = {
    id: string | null
    parentId: string | null
    pastorId: string | null
    leaderId: string | null
    updatedAt: Date | null
  }

  export type SubGroupCountAggregateOutputType = {
    id: number
    parentId: number
    pastorId: number
    leaderId: number
    updatedAt: number
    _all: number
  }


  export type SubGroupMinAggregateInputType = {
    id?: true
    parentId?: true
    pastorId?: true
    leaderId?: true
    updatedAt?: true
  }

  export type SubGroupMaxAggregateInputType = {
    id?: true
    parentId?: true
    pastorId?: true
    leaderId?: true
    updatedAt?: true
  }

  export type SubGroupCountAggregateInputType = {
    id?: true
    parentId?: true
    pastorId?: true
    leaderId?: true
    updatedAt?: true
    _all?: true
  }

  export type SubGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubGroup to aggregate.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubGroups
    **/
    _count?: true | SubGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubGroupMaxAggregateInputType
  }

  export type GetSubGroupAggregateType<T extends SubGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateSubGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubGroup[P]>
      : GetScalarType<T[P], AggregateSubGroup[P]>
  }




  export type SubGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubGroupWhereInput
    orderBy?: SubGroupOrderByWithAggregationInput | SubGroupOrderByWithAggregationInput[]
    by: SubGroupScalarFieldEnum[] | SubGroupScalarFieldEnum
    having?: SubGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubGroupCountAggregateInputType | true
    _min?: SubGroupMinAggregateInputType
    _max?: SubGroupMaxAggregateInputType
  }

  export type SubGroupGroupByOutputType = {
    id: string
    parentId: string | null
    pastorId: string | null
    leaderId: string | null
    updatedAt: Date
    _count: SubGroupCountAggregateOutputType | null
    _min: SubGroupMinAggregateOutputType | null
    _max: SubGroupMaxAggregateOutputType | null
  }

  type GetSubGroupGroupByPayload<T extends SubGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubGroupGroupByOutputType[P]>
            : GetScalarType<T[P], SubGroupGroupByOutputType[P]>
        }
      >
    >


  export type SubGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    pastorId?: boolean
    leaderId?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    parent?: boolean | SubGroup$parentArgs<ExtArgs>
    children?: boolean | SubGroup$childrenArgs<ExtArgs>
    pastor?: boolean | SubGroup$pastorArgs<ExtArgs>
    leader?: boolean | SubGroup$leaderArgs<ExtArgs>
    members?: boolean | SubGroup$membersArgs<ExtArgs>
    _count?: boolean | SubGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subGroup"]>

  export type SubGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    pastorId?: boolean
    leaderId?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    parent?: boolean | SubGroup$parentArgs<ExtArgs>
    pastor?: boolean | SubGroup$pastorArgs<ExtArgs>
    leader?: boolean | SubGroup$leaderArgs<ExtArgs>
  }, ExtArgs["result"]["subGroup"]>

  export type SubGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentId?: boolean
    pastorId?: boolean
    leaderId?: boolean
    updatedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    parent?: boolean | SubGroup$parentArgs<ExtArgs>
    pastor?: boolean | SubGroup$pastorArgs<ExtArgs>
    leader?: boolean | SubGroup$leaderArgs<ExtArgs>
  }, ExtArgs["result"]["subGroup"]>

  export type SubGroupSelectScalar = {
    id?: boolean
    parentId?: boolean
    pastorId?: boolean
    leaderId?: boolean
    updatedAt?: boolean
  }

  export type SubGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentId" | "pastorId" | "leaderId" | "updatedAt", ExtArgs["result"]["subGroup"]>
  export type SubGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    parent?: boolean | SubGroup$parentArgs<ExtArgs>
    children?: boolean | SubGroup$childrenArgs<ExtArgs>
    pastor?: boolean | SubGroup$pastorArgs<ExtArgs>
    leader?: boolean | SubGroup$leaderArgs<ExtArgs>
    members?: boolean | SubGroup$membersArgs<ExtArgs>
    _count?: boolean | SubGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    parent?: boolean | SubGroup$parentArgs<ExtArgs>
    pastor?: boolean | SubGroup$pastorArgs<ExtArgs>
    leader?: boolean | SubGroup$leaderArgs<ExtArgs>
  }
  export type SubGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    parent?: boolean | SubGroup$parentArgs<ExtArgs>
    pastor?: boolean | SubGroup$pastorArgs<ExtArgs>
    leader?: boolean | SubGroup$leaderArgs<ExtArgs>
  }

  export type $SubGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubGroup"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      parent: Prisma.$SubGroupPayload<ExtArgs> | null
      children: Prisma.$SubGroupPayload<ExtArgs>[]
      pastor: Prisma.$PastorPayload<ExtArgs> | null
      leader: Prisma.$LeaderPayload<ExtArgs> | null
      members: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentId: string | null
      pastorId: string | null
      leaderId: string | null
      updatedAt: Date
    }, ExtArgs["result"]["subGroup"]>
    composites: {}
  }

  type SubGroupGetPayload<S extends boolean | null | undefined | SubGroupDefaultArgs> = $Result.GetResult<Prisma.$SubGroupPayload, S>

  type SubGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubGroupCountAggregateInputType | true
    }

  export interface SubGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubGroup'], meta: { name: 'SubGroup' } }
    /**
     * Find zero or one SubGroup that matches the filter.
     * @param {SubGroupFindUniqueArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubGroupFindUniqueArgs>(args: SelectSubset<T, SubGroupFindUniqueArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubGroupFindUniqueOrThrowArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, SubGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupFindFirstArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubGroupFindFirstArgs>(args?: SelectSubset<T, SubGroupFindFirstArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupFindFirstOrThrowArgs} args - Arguments to find a SubGroup
     * @example
     * // Get one SubGroup
     * const subGroup = await prisma.subGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, SubGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubGroups
     * const subGroups = await prisma.subGroup.findMany()
     * 
     * // Get first 10 SubGroups
     * const subGroups = await prisma.subGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subGroupWithIdOnly = await prisma.subGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubGroupFindManyArgs>(args?: SelectSubset<T, SubGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubGroup.
     * @param {SubGroupCreateArgs} args - Arguments to create a SubGroup.
     * @example
     * // Create one SubGroup
     * const SubGroup = await prisma.subGroup.create({
     *   data: {
     *     // ... data to create a SubGroup
     *   }
     * })
     * 
     */
    create<T extends SubGroupCreateArgs>(args: SelectSubset<T, SubGroupCreateArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubGroups.
     * @param {SubGroupCreateManyArgs} args - Arguments to create many SubGroups.
     * @example
     * // Create many SubGroups
     * const subGroup = await prisma.subGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubGroupCreateManyArgs>(args?: SelectSubset<T, SubGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubGroups and returns the data saved in the database.
     * @param {SubGroupCreateManyAndReturnArgs} args - Arguments to create many SubGroups.
     * @example
     * // Create many SubGroups
     * const subGroup = await prisma.subGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubGroups and only return the `id`
     * const subGroupWithIdOnly = await prisma.subGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, SubGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubGroup.
     * @param {SubGroupDeleteArgs} args - Arguments to delete one SubGroup.
     * @example
     * // Delete one SubGroup
     * const SubGroup = await prisma.subGroup.delete({
     *   where: {
     *     // ... filter to delete one SubGroup
     *   }
     * })
     * 
     */
    delete<T extends SubGroupDeleteArgs>(args: SelectSubset<T, SubGroupDeleteArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubGroup.
     * @param {SubGroupUpdateArgs} args - Arguments to update one SubGroup.
     * @example
     * // Update one SubGroup
     * const subGroup = await prisma.subGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubGroupUpdateArgs>(args: SelectSubset<T, SubGroupUpdateArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubGroups.
     * @param {SubGroupDeleteManyArgs} args - Arguments to filter SubGroups to delete.
     * @example
     * // Delete a few SubGroups
     * const { count } = await prisma.subGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubGroupDeleteManyArgs>(args?: SelectSubset<T, SubGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubGroups
     * const subGroup = await prisma.subGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubGroupUpdateManyArgs>(args: SelectSubset<T, SubGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubGroups and returns the data updated in the database.
     * @param {SubGroupUpdateManyAndReturnArgs} args - Arguments to update many SubGroups.
     * @example
     * // Update many SubGroups
     * const subGroup = await prisma.subGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubGroups and only return the `id`
     * const subGroupWithIdOnly = await prisma.subGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, SubGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubGroup.
     * @param {SubGroupUpsertArgs} args - Arguments to update or create a SubGroup.
     * @example
     * // Update or create a SubGroup
     * const subGroup = await prisma.subGroup.upsert({
     *   create: {
     *     // ... data to create a SubGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubGroup we want to update
     *   }
     * })
     */
    upsert<T extends SubGroupUpsertArgs>(args: SelectSubset<T, SubGroupUpsertArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupCountArgs} args - Arguments to filter SubGroups to count.
     * @example
     * // Count the number of SubGroups
     * const count = await prisma.subGroup.count({
     *   where: {
     *     // ... the filter for the SubGroups we want to count
     *   }
     * })
    **/
    count<T extends SubGroupCountArgs>(
      args?: Subset<T, SubGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubGroupAggregateArgs>(args: Subset<T, SubGroupAggregateArgs>): Prisma.PrismaPromise<GetSubGroupAggregateType<T>>

    /**
     * Group by SubGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubGroupGroupByArgs} args - Group by arguments.
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
      T extends SubGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubGroupGroupByArgs['orderBy'] }
        : { orderBy?: SubGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubGroup model
   */
  readonly fields: SubGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends SubGroup$parentArgs<ExtArgs> = {}>(args?: Subset<T, SubGroup$parentArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends SubGroup$childrenArgs<ExtArgs> = {}>(args?: Subset<T, SubGroup$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pastor<T extends SubGroup$pastorArgs<ExtArgs> = {}>(args?: Subset<T, SubGroup$pastorArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leader<T extends SubGroup$leaderArgs<ExtArgs> = {}>(args?: Subset<T, SubGroup$leaderArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends SubGroup$membersArgs<ExtArgs> = {}>(args?: Subset<T, SubGroup$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubGroup model
   */
  interface SubGroupFieldRefs {
    readonly id: FieldRef<"SubGroup", 'String'>
    readonly parentId: FieldRef<"SubGroup", 'String'>
    readonly pastorId: FieldRef<"SubGroup", 'String'>
    readonly leaderId: FieldRef<"SubGroup", 'String'>
    readonly updatedAt: FieldRef<"SubGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubGroup findUnique
   */
  export type SubGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup findUniqueOrThrow
   */
  export type SubGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup findFirst
   */
  export type SubGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubGroups.
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubGroups.
     */
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * SubGroup findFirstOrThrow
   */
  export type SubGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * Filter, which SubGroup to fetch.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubGroups.
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubGroups.
     */
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * SubGroup findMany
   */
  export type SubGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * Filter, which SubGroups to fetch.
     */
    where?: SubGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubGroups to fetch.
     */
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubGroups.
     */
    cursor?: SubGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubGroups.
     */
    skip?: number
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * SubGroup create
   */
  export type SubGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a SubGroup.
     */
    data: XOR<SubGroupCreateInput, SubGroupUncheckedCreateInput>
  }

  /**
   * SubGroup createMany
   */
  export type SubGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubGroups.
     */
    data: SubGroupCreateManyInput | SubGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubGroup createManyAndReturn
   */
  export type SubGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * The data used to create many SubGroups.
     */
    data: SubGroupCreateManyInput | SubGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubGroup update
   */
  export type SubGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a SubGroup.
     */
    data: XOR<SubGroupUpdateInput, SubGroupUncheckedUpdateInput>
    /**
     * Choose, which SubGroup to update.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup updateMany
   */
  export type SubGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubGroups.
     */
    data: XOR<SubGroupUpdateManyMutationInput, SubGroupUncheckedUpdateManyInput>
    /**
     * Filter which SubGroups to update
     */
    where?: SubGroupWhereInput
    /**
     * Limit how many SubGroups to update.
     */
    limit?: number
  }

  /**
   * SubGroup updateManyAndReturn
   */
  export type SubGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * The data used to update SubGroups.
     */
    data: XOR<SubGroupUpdateManyMutationInput, SubGroupUncheckedUpdateManyInput>
    /**
     * Filter which SubGroups to update
     */
    where?: SubGroupWhereInput
    /**
     * Limit how many SubGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubGroup upsert
   */
  export type SubGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the SubGroup to update in case it exists.
     */
    where: SubGroupWhereUniqueInput
    /**
     * In case the SubGroup found by the `where` argument doesn't exist, create a new SubGroup with this data.
     */
    create: XOR<SubGroupCreateInput, SubGroupUncheckedCreateInput>
    /**
     * In case the SubGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubGroupUpdateInput, SubGroupUncheckedUpdateInput>
  }

  /**
   * SubGroup delete
   */
  export type SubGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    /**
     * Filter which SubGroup to delete.
     */
    where: SubGroupWhereUniqueInput
  }

  /**
   * SubGroup deleteMany
   */
  export type SubGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubGroups to delete
     */
    where?: SubGroupWhereInput
    /**
     * Limit how many SubGroups to delete.
     */
    limit?: number
  }

  /**
   * SubGroup.parent
   */
  export type SubGroup$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    where?: SubGroupWhereInput
  }

  /**
   * SubGroup.children
   */
  export type SubGroup$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    where?: SubGroupWhereInput
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    cursor?: SubGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * SubGroup.pastor
   */
  export type SubGroup$pastorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    where?: PastorWhereInput
  }

  /**
   * SubGroup.leader
   */
  export type SubGroup$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    where?: LeaderWhereInput
  }

  /**
   * SubGroup.members
   */
  export type SubGroup$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * SubGroup without action
   */
  export type SubGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
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
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hash?: true
    createdAt?: true
    updatedAt?: true
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
    hash: string
    createdAt: Date
    updatedAt: Date
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
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | User$personArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | User$personArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hash: string
      createdAt: Date
      updatedAt: Date
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
    person<T extends User$personArgs<ExtArgs> = {}>(args?: Subset<T, User$personArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly hash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.person
   */
  export type User$personArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
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
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    gender: boolean | null
    phone: string | null
    kakaoAccount: string | null
    bod: Date | null
    address: string | null
    profileImgUrl: string | null
    occupation: string | null
    visaType: $Enums.VisaType | null
    assignedAt: Date | null
    role: $Enums.Role | null
    hasBaptized: boolean | null
    note: string | null
    userId: string | null
    groupId: string | null
    createdAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    gender: boolean | null
    phone: string | null
    kakaoAccount: string | null
    bod: Date | null
    address: string | null
    profileImgUrl: string | null
    occupation: string | null
    visaType: $Enums.VisaType | null
    assignedAt: Date | null
    role: $Enums.Role | null
    hasBaptized: boolean | null
    note: string | null
    userId: string | null
    groupId: string | null
    createdAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    gender: number
    phone: number
    kakaoAccount: number
    bod: number
    address: number
    profileImgUrl: number
    occupation: number
    visaType: number
    assignedAt: number
    role: number
    hasBaptized: number
    note: number
    userId: number
    groupId: number
    createdAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    phone?: true
    kakaoAccount?: true
    bod?: true
    address?: true
    profileImgUrl?: true
    occupation?: true
    visaType?: true
    assignedAt?: true
    role?: true
    hasBaptized?: true
    note?: true
    userId?: true
    groupId?: true
    createdAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    phone?: true
    kakaoAccount?: true
    bod?: true
    address?: true
    profileImgUrl?: true
    occupation?: true
    visaType?: true
    assignedAt?: true
    role?: true
    hasBaptized?: true
    note?: true
    userId?: true
    groupId?: true
    createdAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    gender?: true
    phone?: true
    kakaoAccount?: true
    bod?: true
    address?: true
    profileImgUrl?: true
    occupation?: true
    visaType?: true
    assignedAt?: true
    role?: true
    hasBaptized?: true
    note?: true
    userId?: true
    groupId?: true
    createdAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    gender: boolean
    phone: string
    kakaoAccount: string | null
    bod: Date | null
    address: string | null
    profileImgUrl: string | null
    occupation: string | null
    visaType: $Enums.VisaType | null
    assignedAt: Date
    role: $Enums.Role
    hasBaptized: boolean
    note: string | null
    userId: string | null
    groupId: string
    createdAt: Date
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    phone?: boolean
    kakaoAccount?: boolean
    bod?: boolean
    address?: boolean
    profileImgUrl?: boolean
    occupation?: boolean
    visaType?: boolean
    assignedAt?: boolean
    role?: boolean
    hasBaptized?: boolean
    note?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    user?: boolean | Person$userArgs<ExtArgs>
    group?: boolean | Person$groupArgs<ExtArgs>
    invitedNewcomers?: boolean | Person$invitedNewcomersArgs<ExtArgs>
    seniorPastor?: boolean | Person$seniorPastorArgs<ExtArgs>
    pastor?: boolean | Person$pastorArgs<ExtArgs>
    leader?: boolean | Person$leaderArgs<ExtArgs>
    member?: boolean | Person$memberArgs<ExtArgs>
    newcomer?: boolean | Person$newcomerArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    phone?: boolean
    kakaoAccount?: boolean
    bod?: boolean
    address?: boolean
    profileImgUrl?: boolean
    occupation?: boolean
    visaType?: boolean
    assignedAt?: boolean
    role?: boolean
    hasBaptized?: boolean
    note?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    user?: boolean | Person$userArgs<ExtArgs>
    group?: boolean | Person$groupArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    phone?: boolean
    kakaoAccount?: boolean
    bod?: boolean
    address?: boolean
    profileImgUrl?: boolean
    occupation?: boolean
    visaType?: boolean
    assignedAt?: boolean
    role?: boolean
    hasBaptized?: boolean
    note?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
    user?: boolean | Person$userArgs<ExtArgs>
    group?: boolean | Person$groupArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    gender?: boolean
    phone?: boolean
    kakaoAccount?: boolean
    bod?: boolean
    address?: boolean
    profileImgUrl?: boolean
    occupation?: boolean
    visaType?: boolean
    assignedAt?: boolean
    role?: boolean
    hasBaptized?: boolean
    note?: boolean
    userId?: boolean
    groupId?: boolean
    createdAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "gender" | "phone" | "kakaoAccount" | "bod" | "address" | "profileImgUrl" | "occupation" | "visaType" | "assignedAt" | "role" | "hasBaptized" | "note" | "userId" | "groupId" | "createdAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Person$userArgs<ExtArgs>
    group?: boolean | Person$groupArgs<ExtArgs>
    invitedNewcomers?: boolean | Person$invitedNewcomersArgs<ExtArgs>
    seniorPastor?: boolean | Person$seniorPastorArgs<ExtArgs>
    pastor?: boolean | Person$pastorArgs<ExtArgs>
    leader?: boolean | Person$leaderArgs<ExtArgs>
    member?: boolean | Person$memberArgs<ExtArgs>
    newcomer?: boolean | Person$newcomerArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Person$userArgs<ExtArgs>
    group?: boolean | Person$groupArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Person$userArgs<ExtArgs>
    group?: boolean | Person$groupArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      group: Prisma.$SubGroupPayload<ExtArgs> | null
      invitedNewcomers: Prisma.$NewcomerPayload<ExtArgs>[]
      seniorPastor: Prisma.$SeniorPastorPayload<ExtArgs> | null
      pastor: Prisma.$PastorPayload<ExtArgs> | null
      leader: Prisma.$LeaderPayload<ExtArgs> | null
      member: Prisma.$MemberPayload<ExtArgs> | null
      newcomer: Prisma.$NewcomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      gender: boolean
      phone: string
      kakaoAccount: string | null
      bod: Date | null
      address: string | null
      profileImgUrl: string | null
      occupation: string | null
      visaType: $Enums.VisaType | null
      assignedAt: Date
      role: $Enums.Role
      hasBaptized: boolean
      note: string | null
      userId: string | null
      groupId: string
      createdAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
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
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
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
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Person$userArgs<ExtArgs> = {}>(args?: Subset<T, Person$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends Person$groupArgs<ExtArgs> = {}>(args?: Subset<T, Person$groupArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invitedNewcomers<T extends Person$invitedNewcomersArgs<ExtArgs> = {}>(args?: Subset<T, Person$invitedNewcomersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seniorPastor<T extends Person$seniorPastorArgs<ExtArgs> = {}>(args?: Subset<T, Person$seniorPastorArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pastor<T extends Person$pastorArgs<ExtArgs> = {}>(args?: Subset<T, Person$pastorArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leader<T extends Person$leaderArgs<ExtArgs> = {}>(args?: Subset<T, Person$leaderArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    member<T extends Person$memberArgs<ExtArgs> = {}>(args?: Subset<T, Person$memberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    newcomer<T extends Person$newcomerArgs<ExtArgs> = {}>(args?: Subset<T, Person$newcomerArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly firstName: FieldRef<"Person", 'String'>
    readonly lastName: FieldRef<"Person", 'String'>
    readonly gender: FieldRef<"Person", 'Boolean'>
    readonly phone: FieldRef<"Person", 'String'>
    readonly kakaoAccount: FieldRef<"Person", 'String'>
    readonly bod: FieldRef<"Person", 'DateTime'>
    readonly address: FieldRef<"Person", 'String'>
    readonly profileImgUrl: FieldRef<"Person", 'String'>
    readonly occupation: FieldRef<"Person", 'String'>
    readonly visaType: FieldRef<"Person", 'VisaType'>
    readonly assignedAt: FieldRef<"Person", 'DateTime'>
    readonly role: FieldRef<"Person", 'Role'>
    readonly hasBaptized: FieldRef<"Person", 'Boolean'>
    readonly note: FieldRef<"Person", 'String'>
    readonly userId: FieldRef<"Person", 'String'>
    readonly groupId: FieldRef<"Person", 'String'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.user
   */
  export type Person$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Person.group
   */
  export type Person$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    where?: SubGroupWhereInput
  }

  /**
   * Person.invitedNewcomers
   */
  export type Person$invitedNewcomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    where?: NewcomerWhereInput
    orderBy?: NewcomerOrderByWithRelationInput | NewcomerOrderByWithRelationInput[]
    cursor?: NewcomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewcomerScalarFieldEnum | NewcomerScalarFieldEnum[]
  }

  /**
   * Person.seniorPastor
   */
  export type Person$seniorPastorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    where?: SeniorPastorWhereInput
  }

  /**
   * Person.pastor
   */
  export type Person$pastorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    where?: PastorWhereInput
  }

  /**
   * Person.leader
   */
  export type Person$leaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    where?: LeaderWhereInput
  }

  /**
   * Person.member
   */
  export type Person$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Person.newcomer
   */
  export type Person$newcomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    where?: NewcomerWhereInput
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model SeniorPastor
   */

  export type AggregateSeniorPastor = {
    _count: SeniorPastorCountAggregateOutputType | null
    _min: SeniorPastorMinAggregateOutputType | null
    _max: SeniorPastorMaxAggregateOutputType | null
  }

  export type SeniorPastorMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type SeniorPastorMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type SeniorPastorCountAggregateOutputType = {
    id: number
    updatedAt: number
    _all: number
  }


  export type SeniorPastorMinAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type SeniorPastorMaxAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type SeniorPastorCountAggregateInputType = {
    id?: true
    updatedAt?: true
    _all?: true
  }

  export type SeniorPastorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeniorPastor to aggregate.
     */
    where?: SeniorPastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeniorPastors to fetch.
     */
    orderBy?: SeniorPastorOrderByWithRelationInput | SeniorPastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeniorPastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeniorPastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeniorPastors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeniorPastors
    **/
    _count?: true | SeniorPastorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeniorPastorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeniorPastorMaxAggregateInputType
  }

  export type GetSeniorPastorAggregateType<T extends SeniorPastorAggregateArgs> = {
        [P in keyof T & keyof AggregateSeniorPastor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeniorPastor[P]>
      : GetScalarType<T[P], AggregateSeniorPastor[P]>
  }




  export type SeniorPastorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeniorPastorWhereInput
    orderBy?: SeniorPastorOrderByWithAggregationInput | SeniorPastorOrderByWithAggregationInput[]
    by: SeniorPastorScalarFieldEnum[] | SeniorPastorScalarFieldEnum
    having?: SeniorPastorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeniorPastorCountAggregateInputType | true
    _min?: SeniorPastorMinAggregateInputType
    _max?: SeniorPastorMaxAggregateInputType
  }

  export type SeniorPastorGroupByOutputType = {
    id: string
    updatedAt: Date
    _count: SeniorPastorCountAggregateOutputType | null
    _min: SeniorPastorMinAggregateOutputType | null
    _max: SeniorPastorMaxAggregateOutputType | null
  }

  type GetSeniorPastorGroupByPayload<T extends SeniorPastorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeniorPastorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeniorPastorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeniorPastorGroupByOutputType[P]>
            : GetScalarType<T[P], SeniorPastorGroupByOutputType[P]>
        }
      >
    >


  export type SeniorPastorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    churches?: boolean | SeniorPastor$churchesArgs<ExtArgs>
    groupTypes?: boolean | SeniorPastor$groupTypesArgs<ExtArgs>
    _count?: boolean | SeniorPastorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seniorPastor"]>

  export type SeniorPastorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seniorPastor"]>

  export type SeniorPastorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seniorPastor"]>

  export type SeniorPastorSelectScalar = {
    id?: boolean
    updatedAt?: boolean
  }

  export type SeniorPastorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updatedAt", ExtArgs["result"]["seniorPastor"]>
  export type SeniorPastorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    churches?: boolean | SeniorPastor$churchesArgs<ExtArgs>
    groupTypes?: boolean | SeniorPastor$groupTypesArgs<ExtArgs>
    _count?: boolean | SeniorPastorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeniorPastorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type SeniorPastorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $SeniorPastorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeniorPastor"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      churches: Prisma.$ChurchPayload<ExtArgs>[]
      groupTypes: Prisma.$GroupTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      updatedAt: Date
    }, ExtArgs["result"]["seniorPastor"]>
    composites: {}
  }

  type SeniorPastorGetPayload<S extends boolean | null | undefined | SeniorPastorDefaultArgs> = $Result.GetResult<Prisma.$SeniorPastorPayload, S>

  type SeniorPastorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeniorPastorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeniorPastorCountAggregateInputType | true
    }

  export interface SeniorPastorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeniorPastor'], meta: { name: 'SeniorPastor' } }
    /**
     * Find zero or one SeniorPastor that matches the filter.
     * @param {SeniorPastorFindUniqueArgs} args - Arguments to find a SeniorPastor
     * @example
     * // Get one SeniorPastor
     * const seniorPastor = await prisma.seniorPastor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeniorPastorFindUniqueArgs>(args: SelectSubset<T, SeniorPastorFindUniqueArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeniorPastor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeniorPastorFindUniqueOrThrowArgs} args - Arguments to find a SeniorPastor
     * @example
     * // Get one SeniorPastor
     * const seniorPastor = await prisma.seniorPastor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeniorPastorFindUniqueOrThrowArgs>(args: SelectSubset<T, SeniorPastorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeniorPastor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorPastorFindFirstArgs} args - Arguments to find a SeniorPastor
     * @example
     * // Get one SeniorPastor
     * const seniorPastor = await prisma.seniorPastor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeniorPastorFindFirstArgs>(args?: SelectSubset<T, SeniorPastorFindFirstArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeniorPastor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorPastorFindFirstOrThrowArgs} args - Arguments to find a SeniorPastor
     * @example
     * // Get one SeniorPastor
     * const seniorPastor = await prisma.seniorPastor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeniorPastorFindFirstOrThrowArgs>(args?: SelectSubset<T, SeniorPastorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeniorPastors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorPastorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeniorPastors
     * const seniorPastors = await prisma.seniorPastor.findMany()
     * 
     * // Get first 10 SeniorPastors
     * const seniorPastors = await prisma.seniorPastor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seniorPastorWithIdOnly = await prisma.seniorPastor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeniorPastorFindManyArgs>(args?: SelectSubset<T, SeniorPastorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeniorPastor.
     * @param {SeniorPastorCreateArgs} args - Arguments to create a SeniorPastor.
     * @example
     * // Create one SeniorPastor
     * const SeniorPastor = await prisma.seniorPastor.create({
     *   data: {
     *     // ... data to create a SeniorPastor
     *   }
     * })
     * 
     */
    create<T extends SeniorPastorCreateArgs>(args: SelectSubset<T, SeniorPastorCreateArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeniorPastors.
     * @param {SeniorPastorCreateManyArgs} args - Arguments to create many SeniorPastors.
     * @example
     * // Create many SeniorPastors
     * const seniorPastor = await prisma.seniorPastor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeniorPastorCreateManyArgs>(args?: SelectSubset<T, SeniorPastorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeniorPastors and returns the data saved in the database.
     * @param {SeniorPastorCreateManyAndReturnArgs} args - Arguments to create many SeniorPastors.
     * @example
     * // Create many SeniorPastors
     * const seniorPastor = await prisma.seniorPastor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeniorPastors and only return the `id`
     * const seniorPastorWithIdOnly = await prisma.seniorPastor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeniorPastorCreateManyAndReturnArgs>(args?: SelectSubset<T, SeniorPastorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeniorPastor.
     * @param {SeniorPastorDeleteArgs} args - Arguments to delete one SeniorPastor.
     * @example
     * // Delete one SeniorPastor
     * const SeniorPastor = await prisma.seniorPastor.delete({
     *   where: {
     *     // ... filter to delete one SeniorPastor
     *   }
     * })
     * 
     */
    delete<T extends SeniorPastorDeleteArgs>(args: SelectSubset<T, SeniorPastorDeleteArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeniorPastor.
     * @param {SeniorPastorUpdateArgs} args - Arguments to update one SeniorPastor.
     * @example
     * // Update one SeniorPastor
     * const seniorPastor = await prisma.seniorPastor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeniorPastorUpdateArgs>(args: SelectSubset<T, SeniorPastorUpdateArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeniorPastors.
     * @param {SeniorPastorDeleteManyArgs} args - Arguments to filter SeniorPastors to delete.
     * @example
     * // Delete a few SeniorPastors
     * const { count } = await prisma.seniorPastor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeniorPastorDeleteManyArgs>(args?: SelectSubset<T, SeniorPastorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeniorPastors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorPastorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeniorPastors
     * const seniorPastor = await prisma.seniorPastor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeniorPastorUpdateManyArgs>(args: SelectSubset<T, SeniorPastorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeniorPastors and returns the data updated in the database.
     * @param {SeniorPastorUpdateManyAndReturnArgs} args - Arguments to update many SeniorPastors.
     * @example
     * // Update many SeniorPastors
     * const seniorPastor = await prisma.seniorPastor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeniorPastors and only return the `id`
     * const seniorPastorWithIdOnly = await prisma.seniorPastor.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeniorPastorUpdateManyAndReturnArgs>(args: SelectSubset<T, SeniorPastorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeniorPastor.
     * @param {SeniorPastorUpsertArgs} args - Arguments to update or create a SeniorPastor.
     * @example
     * // Update or create a SeniorPastor
     * const seniorPastor = await prisma.seniorPastor.upsert({
     *   create: {
     *     // ... data to create a SeniorPastor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeniorPastor we want to update
     *   }
     * })
     */
    upsert<T extends SeniorPastorUpsertArgs>(args: SelectSubset<T, SeniorPastorUpsertArgs<ExtArgs>>): Prisma__SeniorPastorClient<$Result.GetResult<Prisma.$SeniorPastorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeniorPastors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorPastorCountArgs} args - Arguments to filter SeniorPastors to count.
     * @example
     * // Count the number of SeniorPastors
     * const count = await prisma.seniorPastor.count({
     *   where: {
     *     // ... the filter for the SeniorPastors we want to count
     *   }
     * })
    **/
    count<T extends SeniorPastorCountArgs>(
      args?: Subset<T, SeniorPastorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeniorPastorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeniorPastor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorPastorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeniorPastorAggregateArgs>(args: Subset<T, SeniorPastorAggregateArgs>): Prisma.PrismaPromise<GetSeniorPastorAggregateType<T>>

    /**
     * Group by SeniorPastor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeniorPastorGroupByArgs} args - Group by arguments.
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
      T extends SeniorPastorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeniorPastorGroupByArgs['orderBy'] }
        : { orderBy?: SeniorPastorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeniorPastorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeniorPastorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeniorPastor model
   */
  readonly fields: SeniorPastorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeniorPastor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeniorPastorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    churches<T extends SeniorPastor$churchesArgs<ExtArgs> = {}>(args?: Subset<T, SeniorPastor$churchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChurchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupTypes<T extends SeniorPastor$groupTypesArgs<ExtArgs> = {}>(args?: Subset<T, SeniorPastor$groupTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SeniorPastor model
   */
  interface SeniorPastorFieldRefs {
    readonly id: FieldRef<"SeniorPastor", 'String'>
    readonly updatedAt: FieldRef<"SeniorPastor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeniorPastor findUnique
   */
  export type SeniorPastorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * Filter, which SeniorPastor to fetch.
     */
    where: SeniorPastorWhereUniqueInput
  }

  /**
   * SeniorPastor findUniqueOrThrow
   */
  export type SeniorPastorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * Filter, which SeniorPastor to fetch.
     */
    where: SeniorPastorWhereUniqueInput
  }

  /**
   * SeniorPastor findFirst
   */
  export type SeniorPastorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * Filter, which SeniorPastor to fetch.
     */
    where?: SeniorPastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeniorPastors to fetch.
     */
    orderBy?: SeniorPastorOrderByWithRelationInput | SeniorPastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeniorPastors.
     */
    cursor?: SeniorPastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeniorPastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeniorPastors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeniorPastors.
     */
    distinct?: SeniorPastorScalarFieldEnum | SeniorPastorScalarFieldEnum[]
  }

  /**
   * SeniorPastor findFirstOrThrow
   */
  export type SeniorPastorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * Filter, which SeniorPastor to fetch.
     */
    where?: SeniorPastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeniorPastors to fetch.
     */
    orderBy?: SeniorPastorOrderByWithRelationInput | SeniorPastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeniorPastors.
     */
    cursor?: SeniorPastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeniorPastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeniorPastors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeniorPastors.
     */
    distinct?: SeniorPastorScalarFieldEnum | SeniorPastorScalarFieldEnum[]
  }

  /**
   * SeniorPastor findMany
   */
  export type SeniorPastorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * Filter, which SeniorPastors to fetch.
     */
    where?: SeniorPastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeniorPastors to fetch.
     */
    orderBy?: SeniorPastorOrderByWithRelationInput | SeniorPastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeniorPastors.
     */
    cursor?: SeniorPastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeniorPastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeniorPastors.
     */
    skip?: number
    distinct?: SeniorPastorScalarFieldEnum | SeniorPastorScalarFieldEnum[]
  }

  /**
   * SeniorPastor create
   */
  export type SeniorPastorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * The data needed to create a SeniorPastor.
     */
    data: XOR<SeniorPastorCreateInput, SeniorPastorUncheckedCreateInput>
  }

  /**
   * SeniorPastor createMany
   */
  export type SeniorPastorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeniorPastors.
     */
    data: SeniorPastorCreateManyInput | SeniorPastorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeniorPastor createManyAndReturn
   */
  export type SeniorPastorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * The data used to create many SeniorPastors.
     */
    data: SeniorPastorCreateManyInput | SeniorPastorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeniorPastor update
   */
  export type SeniorPastorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * The data needed to update a SeniorPastor.
     */
    data: XOR<SeniorPastorUpdateInput, SeniorPastorUncheckedUpdateInput>
    /**
     * Choose, which SeniorPastor to update.
     */
    where: SeniorPastorWhereUniqueInput
  }

  /**
   * SeniorPastor updateMany
   */
  export type SeniorPastorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeniorPastors.
     */
    data: XOR<SeniorPastorUpdateManyMutationInput, SeniorPastorUncheckedUpdateManyInput>
    /**
     * Filter which SeniorPastors to update
     */
    where?: SeniorPastorWhereInput
    /**
     * Limit how many SeniorPastors to update.
     */
    limit?: number
  }

  /**
   * SeniorPastor updateManyAndReturn
   */
  export type SeniorPastorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * The data used to update SeniorPastors.
     */
    data: XOR<SeniorPastorUpdateManyMutationInput, SeniorPastorUncheckedUpdateManyInput>
    /**
     * Filter which SeniorPastors to update
     */
    where?: SeniorPastorWhereInput
    /**
     * Limit how many SeniorPastors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeniorPastor upsert
   */
  export type SeniorPastorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * The filter to search for the SeniorPastor to update in case it exists.
     */
    where: SeniorPastorWhereUniqueInput
    /**
     * In case the SeniorPastor found by the `where` argument doesn't exist, create a new SeniorPastor with this data.
     */
    create: XOR<SeniorPastorCreateInput, SeniorPastorUncheckedCreateInput>
    /**
     * In case the SeniorPastor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeniorPastorUpdateInput, SeniorPastorUncheckedUpdateInput>
  }

  /**
   * SeniorPastor delete
   */
  export type SeniorPastorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
    /**
     * Filter which SeniorPastor to delete.
     */
    where: SeniorPastorWhereUniqueInput
  }

  /**
   * SeniorPastor deleteMany
   */
  export type SeniorPastorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeniorPastors to delete
     */
    where?: SeniorPastorWhereInput
    /**
     * Limit how many SeniorPastors to delete.
     */
    limit?: number
  }

  /**
   * SeniorPastor.churches
   */
  export type SeniorPastor$churchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Church
     */
    select?: ChurchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Church
     */
    omit?: ChurchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChurchInclude<ExtArgs> | null
    where?: ChurchWhereInput
    orderBy?: ChurchOrderByWithRelationInput | ChurchOrderByWithRelationInput[]
    cursor?: ChurchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChurchScalarFieldEnum | ChurchScalarFieldEnum[]
  }

  /**
   * SeniorPastor.groupTypes
   */
  export type SeniorPastor$groupTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupType
     */
    select?: GroupTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupType
     */
    omit?: GroupTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTypeInclude<ExtArgs> | null
    where?: GroupTypeWhereInput
    orderBy?: GroupTypeOrderByWithRelationInput | GroupTypeOrderByWithRelationInput[]
    cursor?: GroupTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupTypeScalarFieldEnum | GroupTypeScalarFieldEnum[]
  }

  /**
   * SeniorPastor without action
   */
  export type SeniorPastorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeniorPastor
     */
    select?: SeniorPastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeniorPastor
     */
    omit?: SeniorPastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeniorPastorInclude<ExtArgs> | null
  }


  /**
   * Model Pastor
   */

  export type AggregatePastor = {
    _count: PastorCountAggregateOutputType | null
    _min: PastorMinAggregateOutputType | null
    _max: PastorMaxAggregateOutputType | null
  }

  export type PastorMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type PastorMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type PastorCountAggregateOutputType = {
    id: number
    updatedAt: number
    _all: number
  }


  export type PastorMinAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type PastorMaxAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type PastorCountAggregateInputType = {
    id?: true
    updatedAt?: true
    _all?: true
  }

  export type PastorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pastor to aggregate.
     */
    where?: PastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastors to fetch.
     */
    orderBy?: PastorOrderByWithRelationInput | PastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pastors
    **/
    _count?: true | PastorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PastorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PastorMaxAggregateInputType
  }

  export type GetPastorAggregateType<T extends PastorAggregateArgs> = {
        [P in keyof T & keyof AggregatePastor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePastor[P]>
      : GetScalarType<T[P], AggregatePastor[P]>
  }




  export type PastorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PastorWhereInput
    orderBy?: PastorOrderByWithAggregationInput | PastorOrderByWithAggregationInput[]
    by: PastorScalarFieldEnum[] | PastorScalarFieldEnum
    having?: PastorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PastorCountAggregateInputType | true
    _min?: PastorMinAggregateInputType
    _max?: PastorMaxAggregateInputType
  }

  export type PastorGroupByOutputType = {
    id: string
    updatedAt: Date
    _count: PastorCountAggregateOutputType | null
    _min: PastorMinAggregateOutputType | null
    _max: PastorMaxAggregateOutputType | null
  }

  type GetPastorGroupByPayload<T extends PastorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PastorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PastorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PastorGroupByOutputType[P]>
            : GetScalarType<T[P], PastorGroupByOutputType[P]>
        }
      >
    >


  export type PastorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    ledGroups?: boolean | Pastor$ledGroupsArgs<ExtArgs>
    _count?: boolean | PastorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pastor"]>

  export type PastorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pastor"]>

  export type PastorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pastor"]>

  export type PastorSelectScalar = {
    id?: boolean
    updatedAt?: boolean
  }

  export type PastorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updatedAt", ExtArgs["result"]["pastor"]>
  export type PastorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    ledGroups?: boolean | Pastor$ledGroupsArgs<ExtArgs>
    _count?: boolean | PastorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PastorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PastorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $PastorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pastor"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      ledGroups: Prisma.$SubGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      updatedAt: Date
    }, ExtArgs["result"]["pastor"]>
    composites: {}
  }

  type PastorGetPayload<S extends boolean | null | undefined | PastorDefaultArgs> = $Result.GetResult<Prisma.$PastorPayload, S>

  type PastorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PastorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PastorCountAggregateInputType | true
    }

  export interface PastorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pastor'], meta: { name: 'Pastor' } }
    /**
     * Find zero or one Pastor that matches the filter.
     * @param {PastorFindUniqueArgs} args - Arguments to find a Pastor
     * @example
     * // Get one Pastor
     * const pastor = await prisma.pastor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PastorFindUniqueArgs>(args: SelectSubset<T, PastorFindUniqueArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pastor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PastorFindUniqueOrThrowArgs} args - Arguments to find a Pastor
     * @example
     * // Get one Pastor
     * const pastor = await prisma.pastor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PastorFindUniqueOrThrowArgs>(args: SelectSubset<T, PastorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pastor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastorFindFirstArgs} args - Arguments to find a Pastor
     * @example
     * // Get one Pastor
     * const pastor = await prisma.pastor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PastorFindFirstArgs>(args?: SelectSubset<T, PastorFindFirstArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pastor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastorFindFirstOrThrowArgs} args - Arguments to find a Pastor
     * @example
     * // Get one Pastor
     * const pastor = await prisma.pastor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PastorFindFirstOrThrowArgs>(args?: SelectSubset<T, PastorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pastors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pastors
     * const pastors = await prisma.pastor.findMany()
     * 
     * // Get first 10 Pastors
     * const pastors = await prisma.pastor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pastorWithIdOnly = await prisma.pastor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PastorFindManyArgs>(args?: SelectSubset<T, PastorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pastor.
     * @param {PastorCreateArgs} args - Arguments to create a Pastor.
     * @example
     * // Create one Pastor
     * const Pastor = await prisma.pastor.create({
     *   data: {
     *     // ... data to create a Pastor
     *   }
     * })
     * 
     */
    create<T extends PastorCreateArgs>(args: SelectSubset<T, PastorCreateArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pastors.
     * @param {PastorCreateManyArgs} args - Arguments to create many Pastors.
     * @example
     * // Create many Pastors
     * const pastor = await prisma.pastor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PastorCreateManyArgs>(args?: SelectSubset<T, PastorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pastors and returns the data saved in the database.
     * @param {PastorCreateManyAndReturnArgs} args - Arguments to create many Pastors.
     * @example
     * // Create many Pastors
     * const pastor = await prisma.pastor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pastors and only return the `id`
     * const pastorWithIdOnly = await prisma.pastor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PastorCreateManyAndReturnArgs>(args?: SelectSubset<T, PastorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pastor.
     * @param {PastorDeleteArgs} args - Arguments to delete one Pastor.
     * @example
     * // Delete one Pastor
     * const Pastor = await prisma.pastor.delete({
     *   where: {
     *     // ... filter to delete one Pastor
     *   }
     * })
     * 
     */
    delete<T extends PastorDeleteArgs>(args: SelectSubset<T, PastorDeleteArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pastor.
     * @param {PastorUpdateArgs} args - Arguments to update one Pastor.
     * @example
     * // Update one Pastor
     * const pastor = await prisma.pastor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PastorUpdateArgs>(args: SelectSubset<T, PastorUpdateArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pastors.
     * @param {PastorDeleteManyArgs} args - Arguments to filter Pastors to delete.
     * @example
     * // Delete a few Pastors
     * const { count } = await prisma.pastor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PastorDeleteManyArgs>(args?: SelectSubset<T, PastorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pastors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pastors
     * const pastor = await prisma.pastor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PastorUpdateManyArgs>(args: SelectSubset<T, PastorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pastors and returns the data updated in the database.
     * @param {PastorUpdateManyAndReturnArgs} args - Arguments to update many Pastors.
     * @example
     * // Update many Pastors
     * const pastor = await prisma.pastor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pastors and only return the `id`
     * const pastorWithIdOnly = await prisma.pastor.updateManyAndReturn({
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
    updateManyAndReturn<T extends PastorUpdateManyAndReturnArgs>(args: SelectSubset<T, PastorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pastor.
     * @param {PastorUpsertArgs} args - Arguments to update or create a Pastor.
     * @example
     * // Update or create a Pastor
     * const pastor = await prisma.pastor.upsert({
     *   create: {
     *     // ... data to create a Pastor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pastor we want to update
     *   }
     * })
     */
    upsert<T extends PastorUpsertArgs>(args: SelectSubset<T, PastorUpsertArgs<ExtArgs>>): Prisma__PastorClient<$Result.GetResult<Prisma.$PastorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pastors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastorCountArgs} args - Arguments to filter Pastors to count.
     * @example
     * // Count the number of Pastors
     * const count = await prisma.pastor.count({
     *   where: {
     *     // ... the filter for the Pastors we want to count
     *   }
     * })
    **/
    count<T extends PastorCountArgs>(
      args?: Subset<T, PastorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PastorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pastor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PastorAggregateArgs>(args: Subset<T, PastorAggregateArgs>): Prisma.PrismaPromise<GetPastorAggregateType<T>>

    /**
     * Group by Pastor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PastorGroupByArgs} args - Group by arguments.
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
      T extends PastorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PastorGroupByArgs['orderBy'] }
        : { orderBy?: PastorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PastorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPastorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pastor model
   */
  readonly fields: PastorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pastor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PastorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ledGroups<T extends Pastor$ledGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Pastor$ledGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pastor model
   */
  interface PastorFieldRefs {
    readonly id: FieldRef<"Pastor", 'String'>
    readonly updatedAt: FieldRef<"Pastor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pastor findUnique
   */
  export type PastorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * Filter, which Pastor to fetch.
     */
    where: PastorWhereUniqueInput
  }

  /**
   * Pastor findUniqueOrThrow
   */
  export type PastorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * Filter, which Pastor to fetch.
     */
    where: PastorWhereUniqueInput
  }

  /**
   * Pastor findFirst
   */
  export type PastorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * Filter, which Pastor to fetch.
     */
    where?: PastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastors to fetch.
     */
    orderBy?: PastorOrderByWithRelationInput | PastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pastors.
     */
    cursor?: PastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pastors.
     */
    distinct?: PastorScalarFieldEnum | PastorScalarFieldEnum[]
  }

  /**
   * Pastor findFirstOrThrow
   */
  export type PastorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * Filter, which Pastor to fetch.
     */
    where?: PastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastors to fetch.
     */
    orderBy?: PastorOrderByWithRelationInput | PastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pastors.
     */
    cursor?: PastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pastors.
     */
    distinct?: PastorScalarFieldEnum | PastorScalarFieldEnum[]
  }

  /**
   * Pastor findMany
   */
  export type PastorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * Filter, which Pastors to fetch.
     */
    where?: PastorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pastors to fetch.
     */
    orderBy?: PastorOrderByWithRelationInput | PastorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pastors.
     */
    cursor?: PastorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pastors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pastors.
     */
    skip?: number
    distinct?: PastorScalarFieldEnum | PastorScalarFieldEnum[]
  }

  /**
   * Pastor create
   */
  export type PastorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * The data needed to create a Pastor.
     */
    data: XOR<PastorCreateInput, PastorUncheckedCreateInput>
  }

  /**
   * Pastor createMany
   */
  export type PastorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pastors.
     */
    data: PastorCreateManyInput | PastorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pastor createManyAndReturn
   */
  export type PastorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * The data used to create many Pastors.
     */
    data: PastorCreateManyInput | PastorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pastor update
   */
  export type PastorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * The data needed to update a Pastor.
     */
    data: XOR<PastorUpdateInput, PastorUncheckedUpdateInput>
    /**
     * Choose, which Pastor to update.
     */
    where: PastorWhereUniqueInput
  }

  /**
   * Pastor updateMany
   */
  export type PastorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pastors.
     */
    data: XOR<PastorUpdateManyMutationInput, PastorUncheckedUpdateManyInput>
    /**
     * Filter which Pastors to update
     */
    where?: PastorWhereInput
    /**
     * Limit how many Pastors to update.
     */
    limit?: number
  }

  /**
   * Pastor updateManyAndReturn
   */
  export type PastorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * The data used to update Pastors.
     */
    data: XOR<PastorUpdateManyMutationInput, PastorUncheckedUpdateManyInput>
    /**
     * Filter which Pastors to update
     */
    where?: PastorWhereInput
    /**
     * Limit how many Pastors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pastor upsert
   */
  export type PastorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * The filter to search for the Pastor to update in case it exists.
     */
    where: PastorWhereUniqueInput
    /**
     * In case the Pastor found by the `where` argument doesn't exist, create a new Pastor with this data.
     */
    create: XOR<PastorCreateInput, PastorUncheckedCreateInput>
    /**
     * In case the Pastor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PastorUpdateInput, PastorUncheckedUpdateInput>
  }

  /**
   * Pastor delete
   */
  export type PastorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
    /**
     * Filter which Pastor to delete.
     */
    where: PastorWhereUniqueInput
  }

  /**
   * Pastor deleteMany
   */
  export type PastorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pastors to delete
     */
    where?: PastorWhereInput
    /**
     * Limit how many Pastors to delete.
     */
    limit?: number
  }

  /**
   * Pastor.ledGroups
   */
  export type Pastor$ledGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    where?: SubGroupWhereInput
    orderBy?: SubGroupOrderByWithRelationInput | SubGroupOrderByWithRelationInput[]
    cursor?: SubGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubGroupScalarFieldEnum | SubGroupScalarFieldEnum[]
  }

  /**
   * Pastor without action
   */
  export type PastorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pastor
     */
    select?: PastorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pastor
     */
    omit?: PastorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PastorInclude<ExtArgs> | null
  }


  /**
   * Model Leader
   */

  export type AggregateLeader = {
    _count: LeaderCountAggregateOutputType | null
    _min: LeaderMinAggregateOutputType | null
    _max: LeaderMaxAggregateOutputType | null
  }

  export type LeaderMinAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type LeaderMaxAggregateOutputType = {
    id: string | null
    updatedAt: Date | null
  }

  export type LeaderCountAggregateOutputType = {
    id: number
    updatedAt: number
    _all: number
  }


  export type LeaderMinAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type LeaderMaxAggregateInputType = {
    id?: true
    updatedAt?: true
  }

  export type LeaderCountAggregateInputType = {
    id?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leader to aggregate.
     */
    where?: LeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeaderOrderByWithRelationInput | LeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaders
    **/
    _count?: true | LeaderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderMaxAggregateInputType
  }

  export type GetLeaderAggregateType<T extends LeaderAggregateArgs> = {
        [P in keyof T & keyof AggregateLeader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeader[P]>
      : GetScalarType<T[P], AggregateLeader[P]>
  }




  export type LeaderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderWhereInput
    orderBy?: LeaderOrderByWithAggregationInput | LeaderOrderByWithAggregationInput[]
    by: LeaderScalarFieldEnum[] | LeaderScalarFieldEnum
    having?: LeaderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderCountAggregateInputType | true
    _min?: LeaderMinAggregateInputType
    _max?: LeaderMaxAggregateInputType
  }

  export type LeaderGroupByOutputType = {
    id: string
    updatedAt: Date
    _count: LeaderCountAggregateOutputType | null
    _min: LeaderMinAggregateOutputType | null
    _max: LeaderMaxAggregateOutputType | null
  }

  type GetLeaderGroupByPayload<T extends LeaderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderGroupByOutputType[P]>
        }
      >
    >


  export type LeaderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    leadGroup?: boolean | Leader$leadGroupArgs<ExtArgs>
  }, ExtArgs["result"]["leader"]>

  export type LeaderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leader"]>

  export type LeaderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leader"]>

  export type LeaderSelectScalar = {
    id?: boolean
    updatedAt?: boolean
  }

  export type LeaderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updatedAt", ExtArgs["result"]["leader"]>
  export type LeaderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    leadGroup?: boolean | Leader$leadGroupArgs<ExtArgs>
  }
  export type LeaderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type LeaderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $LeaderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leader"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      leadGroup: Prisma.$SubGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      updatedAt: Date
    }, ExtArgs["result"]["leader"]>
    composites: {}
  }

  type LeaderGetPayload<S extends boolean | null | undefined | LeaderDefaultArgs> = $Result.GetResult<Prisma.$LeaderPayload, S>

  type LeaderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderCountAggregateInputType | true
    }

  export interface LeaderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leader'], meta: { name: 'Leader' } }
    /**
     * Find zero or one Leader that matches the filter.
     * @param {LeaderFindUniqueArgs} args - Arguments to find a Leader
     * @example
     * // Get one Leader
     * const leader = await prisma.leader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderFindUniqueArgs>(args: SelectSubset<T, LeaderFindUniqueArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderFindUniqueOrThrowArgs} args - Arguments to find a Leader
     * @example
     * // Get one Leader
     * const leader = await prisma.leader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderFindFirstArgs} args - Arguments to find a Leader
     * @example
     * // Get one Leader
     * const leader = await prisma.leader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderFindFirstArgs>(args?: SelectSubset<T, LeaderFindFirstArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderFindFirstOrThrowArgs} args - Arguments to find a Leader
     * @example
     * // Get one Leader
     * const leader = await prisma.leader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaders
     * const leaders = await prisma.leader.findMany()
     * 
     * // Get first 10 Leaders
     * const leaders = await prisma.leader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderWithIdOnly = await prisma.leader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderFindManyArgs>(args?: SelectSubset<T, LeaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leader.
     * @param {LeaderCreateArgs} args - Arguments to create a Leader.
     * @example
     * // Create one Leader
     * const Leader = await prisma.leader.create({
     *   data: {
     *     // ... data to create a Leader
     *   }
     * })
     * 
     */
    create<T extends LeaderCreateArgs>(args: SelectSubset<T, LeaderCreateArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaders.
     * @param {LeaderCreateManyArgs} args - Arguments to create many Leaders.
     * @example
     * // Create many Leaders
     * const leader = await prisma.leader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderCreateManyArgs>(args?: SelectSubset<T, LeaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaders and returns the data saved in the database.
     * @param {LeaderCreateManyAndReturnArgs} args - Arguments to create many Leaders.
     * @example
     * // Create many Leaders
     * const leader = await prisma.leader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaders and only return the `id`
     * const leaderWithIdOnly = await prisma.leader.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leader.
     * @param {LeaderDeleteArgs} args - Arguments to delete one Leader.
     * @example
     * // Delete one Leader
     * const Leader = await prisma.leader.delete({
     *   where: {
     *     // ... filter to delete one Leader
     *   }
     * })
     * 
     */
    delete<T extends LeaderDeleteArgs>(args: SelectSubset<T, LeaderDeleteArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leader.
     * @param {LeaderUpdateArgs} args - Arguments to update one Leader.
     * @example
     * // Update one Leader
     * const leader = await prisma.leader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderUpdateArgs>(args: SelectSubset<T, LeaderUpdateArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaders.
     * @param {LeaderDeleteManyArgs} args - Arguments to filter Leaders to delete.
     * @example
     * // Delete a few Leaders
     * const { count } = await prisma.leader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderDeleteManyArgs>(args?: SelectSubset<T, LeaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaders
     * const leader = await prisma.leader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderUpdateManyArgs>(args: SelectSubset<T, LeaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaders and returns the data updated in the database.
     * @param {LeaderUpdateManyAndReturnArgs} args - Arguments to update many Leaders.
     * @example
     * // Update many Leaders
     * const leader = await prisma.leader.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaders and only return the `id`
     * const leaderWithIdOnly = await prisma.leader.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaderUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leader.
     * @param {LeaderUpsertArgs} args - Arguments to update or create a Leader.
     * @example
     * // Update or create a Leader
     * const leader = await prisma.leader.upsert({
     *   create: {
     *     // ... data to create a Leader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leader we want to update
     *   }
     * })
     */
    upsert<T extends LeaderUpsertArgs>(args: SelectSubset<T, LeaderUpsertArgs<ExtArgs>>): Prisma__LeaderClient<$Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderCountArgs} args - Arguments to filter Leaders to count.
     * @example
     * // Count the number of Leaders
     * const count = await prisma.leader.count({
     *   where: {
     *     // ... the filter for the Leaders we want to count
     *   }
     * })
    **/
    count<T extends LeaderCountArgs>(
      args?: Subset<T, LeaderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaderAggregateArgs>(args: Subset<T, LeaderAggregateArgs>): Prisma.PrismaPromise<GetLeaderAggregateType<T>>

    /**
     * Group by Leader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderGroupByArgs} args - Group by arguments.
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
      T extends LeaderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderGroupByArgs['orderBy'] }
        : { orderBy?: LeaderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leader model
   */
  readonly fields: LeaderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leadGroup<T extends Leader$leadGroupArgs<ExtArgs> = {}>(args?: Subset<T, Leader$leadGroupArgs<ExtArgs>>): Prisma__SubGroupClient<$Result.GetResult<Prisma.$SubGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Leader model
   */
  interface LeaderFieldRefs {
    readonly id: FieldRef<"Leader", 'String'>
    readonly updatedAt: FieldRef<"Leader", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Leader findUnique
   */
  export type LeaderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * Filter, which Leader to fetch.
     */
    where: LeaderWhereUniqueInput
  }

  /**
   * Leader findUniqueOrThrow
   */
  export type LeaderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * Filter, which Leader to fetch.
     */
    where: LeaderWhereUniqueInput
  }

  /**
   * Leader findFirst
   */
  export type LeaderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * Filter, which Leader to fetch.
     */
    where?: LeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeaderOrderByWithRelationInput | LeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaders.
     */
    cursor?: LeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaders.
     */
    distinct?: LeaderScalarFieldEnum | LeaderScalarFieldEnum[]
  }

  /**
   * Leader findFirstOrThrow
   */
  export type LeaderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * Filter, which Leader to fetch.
     */
    where?: LeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeaderOrderByWithRelationInput | LeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaders.
     */
    cursor?: LeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaders.
     */
    distinct?: LeaderScalarFieldEnum | LeaderScalarFieldEnum[]
  }

  /**
   * Leader findMany
   */
  export type LeaderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * Filter, which Leaders to fetch.
     */
    where?: LeaderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaders to fetch.
     */
    orderBy?: LeaderOrderByWithRelationInput | LeaderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaders.
     */
    cursor?: LeaderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaders.
     */
    skip?: number
    distinct?: LeaderScalarFieldEnum | LeaderScalarFieldEnum[]
  }

  /**
   * Leader create
   */
  export type LeaderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * The data needed to create a Leader.
     */
    data: XOR<LeaderCreateInput, LeaderUncheckedCreateInput>
  }

  /**
   * Leader createMany
   */
  export type LeaderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaders.
     */
    data: LeaderCreateManyInput | LeaderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leader createManyAndReturn
   */
  export type LeaderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * The data used to create many Leaders.
     */
    data: LeaderCreateManyInput | LeaderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leader update
   */
  export type LeaderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * The data needed to update a Leader.
     */
    data: XOR<LeaderUpdateInput, LeaderUncheckedUpdateInput>
    /**
     * Choose, which Leader to update.
     */
    where: LeaderWhereUniqueInput
  }

  /**
   * Leader updateMany
   */
  export type LeaderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaders.
     */
    data: XOR<LeaderUpdateManyMutationInput, LeaderUncheckedUpdateManyInput>
    /**
     * Filter which Leaders to update
     */
    where?: LeaderWhereInput
    /**
     * Limit how many Leaders to update.
     */
    limit?: number
  }

  /**
   * Leader updateManyAndReturn
   */
  export type LeaderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * The data used to update Leaders.
     */
    data: XOR<LeaderUpdateManyMutationInput, LeaderUncheckedUpdateManyInput>
    /**
     * Filter which Leaders to update
     */
    where?: LeaderWhereInput
    /**
     * Limit how many Leaders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leader upsert
   */
  export type LeaderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * The filter to search for the Leader to update in case it exists.
     */
    where: LeaderWhereUniqueInput
    /**
     * In case the Leader found by the `where` argument doesn't exist, create a new Leader with this data.
     */
    create: XOR<LeaderCreateInput, LeaderUncheckedCreateInput>
    /**
     * In case the Leader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderUpdateInput, LeaderUncheckedUpdateInput>
  }

  /**
   * Leader delete
   */
  export type LeaderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
    /**
     * Filter which Leader to delete.
     */
    where: LeaderWhereUniqueInput
  }

  /**
   * Leader deleteMany
   */
  export type LeaderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaders to delete
     */
    where?: LeaderWhereInput
    /**
     * Limit how many Leaders to delete.
     */
    limit?: number
  }

  /**
   * Leader.leadGroup
   */
  export type Leader$leadGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubGroup
     */
    select?: SubGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubGroup
     */
    omit?: SubGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubGroupInclude<ExtArgs> | null
    where?: SubGroupWhereInput
  }

  /**
   * Leader without action
   */
  export type LeaderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leader
     */
    select?: LeaderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leader
     */
    omit?: LeaderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    type: $Enums.PersonType | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    type: $Enums.PersonType | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    type: number
    updatedAt: number
    _all: number
  }


  export type MemberMinAggregateInputType = {
    id?: true
    type?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    type?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    type?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    type: $Enums.PersonType
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    type?: boolean
    updatedAt?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "updatedAt", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.PersonType
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly type: FieldRef<"Member", 'PersonType'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Newcomer
   */

  export type AggregateNewcomer = {
    _count: NewcomerCountAggregateOutputType | null
    _min: NewcomerMinAggregateOutputType | null
    _max: NewcomerMaxAggregateOutputType | null
  }

  export type NewcomerMinAggregateOutputType = {
    id: string | null
    type: $Enums.PersonType | null
    inviterId: string | null
    prevChurch: string | null
    prevServedPart: string | null
    processStatus: $Enums.ProcessStatus | null
    updatedAt: Date | null
  }

  export type NewcomerMaxAggregateOutputType = {
    id: string | null
    type: $Enums.PersonType | null
    inviterId: string | null
    prevChurch: string | null
    prevServedPart: string | null
    processStatus: $Enums.ProcessStatus | null
    updatedAt: Date | null
  }

  export type NewcomerCountAggregateOutputType = {
    id: number
    type: number
    inviterId: number
    prevChurch: number
    prevServedPart: number
    processStatus: number
    updatedAt: number
    _all: number
  }


  export type NewcomerMinAggregateInputType = {
    id?: true
    type?: true
    inviterId?: true
    prevChurch?: true
    prevServedPart?: true
    processStatus?: true
    updatedAt?: true
  }

  export type NewcomerMaxAggregateInputType = {
    id?: true
    type?: true
    inviterId?: true
    prevChurch?: true
    prevServedPart?: true
    processStatus?: true
    updatedAt?: true
  }

  export type NewcomerCountAggregateInputType = {
    id?: true
    type?: true
    inviterId?: true
    prevChurch?: true
    prevServedPart?: true
    processStatus?: true
    updatedAt?: true
    _all?: true
  }

  export type NewcomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newcomer to aggregate.
     */
    where?: NewcomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newcomers to fetch.
     */
    orderBy?: NewcomerOrderByWithRelationInput | NewcomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewcomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newcomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newcomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Newcomers
    **/
    _count?: true | NewcomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewcomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewcomerMaxAggregateInputType
  }

  export type GetNewcomerAggregateType<T extends NewcomerAggregateArgs> = {
        [P in keyof T & keyof AggregateNewcomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewcomer[P]>
      : GetScalarType<T[P], AggregateNewcomer[P]>
  }




  export type NewcomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewcomerWhereInput
    orderBy?: NewcomerOrderByWithAggregationInput | NewcomerOrderByWithAggregationInput[]
    by: NewcomerScalarFieldEnum[] | NewcomerScalarFieldEnum
    having?: NewcomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewcomerCountAggregateInputType | true
    _min?: NewcomerMinAggregateInputType
    _max?: NewcomerMaxAggregateInputType
  }

  export type NewcomerGroupByOutputType = {
    id: string
    type: $Enums.PersonType
    inviterId: string | null
    prevChurch: string | null
    prevServedPart: string | null
    processStatus: $Enums.ProcessStatus
    updatedAt: Date
    _count: NewcomerCountAggregateOutputType | null
    _min: NewcomerMinAggregateOutputType | null
    _max: NewcomerMaxAggregateOutputType | null
  }

  type GetNewcomerGroupByPayload<T extends NewcomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewcomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewcomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewcomerGroupByOutputType[P]>
            : GetScalarType<T[P], NewcomerGroupByOutputType[P]>
        }
      >
    >


  export type NewcomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    inviterId?: boolean
    prevChurch?: boolean
    prevServedPart?: boolean
    processStatus?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    inviter?: boolean | Newcomer$inviterArgs<ExtArgs>
  }, ExtArgs["result"]["newcomer"]>

  export type NewcomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    inviterId?: boolean
    prevChurch?: boolean
    prevServedPart?: boolean
    processStatus?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    inviter?: boolean | Newcomer$inviterArgs<ExtArgs>
  }, ExtArgs["result"]["newcomer"]>

  export type NewcomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    inviterId?: boolean
    prevChurch?: boolean
    prevServedPart?: boolean
    processStatus?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    inviter?: boolean | Newcomer$inviterArgs<ExtArgs>
  }, ExtArgs["result"]["newcomer"]>

  export type NewcomerSelectScalar = {
    id?: boolean
    type?: boolean
    inviterId?: boolean
    prevChurch?: boolean
    prevServedPart?: boolean
    processStatus?: boolean
    updatedAt?: boolean
  }

  export type NewcomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "inviterId" | "prevChurch" | "prevServedPart" | "processStatus" | "updatedAt", ExtArgs["result"]["newcomer"]>
  export type NewcomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    inviter?: boolean | Newcomer$inviterArgs<ExtArgs>
  }
  export type NewcomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    inviter?: boolean | Newcomer$inviterArgs<ExtArgs>
  }
  export type NewcomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    inviter?: boolean | Newcomer$inviterArgs<ExtArgs>
  }

  export type $NewcomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Newcomer"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      inviter: Prisma.$PersonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.PersonType
      inviterId: string | null
      prevChurch: string | null
      prevServedPart: string | null
      processStatus: $Enums.ProcessStatus
      updatedAt: Date
    }, ExtArgs["result"]["newcomer"]>
    composites: {}
  }

  type NewcomerGetPayload<S extends boolean | null | undefined | NewcomerDefaultArgs> = $Result.GetResult<Prisma.$NewcomerPayload, S>

  type NewcomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewcomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewcomerCountAggregateInputType | true
    }

  export interface NewcomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Newcomer'], meta: { name: 'Newcomer' } }
    /**
     * Find zero or one Newcomer that matches the filter.
     * @param {NewcomerFindUniqueArgs} args - Arguments to find a Newcomer
     * @example
     * // Get one Newcomer
     * const newcomer = await prisma.newcomer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewcomerFindUniqueArgs>(args: SelectSubset<T, NewcomerFindUniqueArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Newcomer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewcomerFindUniqueOrThrowArgs} args - Arguments to find a Newcomer
     * @example
     * // Get one Newcomer
     * const newcomer = await prisma.newcomer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewcomerFindUniqueOrThrowArgs>(args: SelectSubset<T, NewcomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newcomer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewcomerFindFirstArgs} args - Arguments to find a Newcomer
     * @example
     * // Get one Newcomer
     * const newcomer = await prisma.newcomer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewcomerFindFirstArgs>(args?: SelectSubset<T, NewcomerFindFirstArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Newcomer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewcomerFindFirstOrThrowArgs} args - Arguments to find a Newcomer
     * @example
     * // Get one Newcomer
     * const newcomer = await prisma.newcomer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewcomerFindFirstOrThrowArgs>(args?: SelectSubset<T, NewcomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Newcomers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewcomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Newcomers
     * const newcomers = await prisma.newcomer.findMany()
     * 
     * // Get first 10 Newcomers
     * const newcomers = await prisma.newcomer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newcomerWithIdOnly = await prisma.newcomer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewcomerFindManyArgs>(args?: SelectSubset<T, NewcomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Newcomer.
     * @param {NewcomerCreateArgs} args - Arguments to create a Newcomer.
     * @example
     * // Create one Newcomer
     * const Newcomer = await prisma.newcomer.create({
     *   data: {
     *     // ... data to create a Newcomer
     *   }
     * })
     * 
     */
    create<T extends NewcomerCreateArgs>(args: SelectSubset<T, NewcomerCreateArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Newcomers.
     * @param {NewcomerCreateManyArgs} args - Arguments to create many Newcomers.
     * @example
     * // Create many Newcomers
     * const newcomer = await prisma.newcomer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewcomerCreateManyArgs>(args?: SelectSubset<T, NewcomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Newcomers and returns the data saved in the database.
     * @param {NewcomerCreateManyAndReturnArgs} args - Arguments to create many Newcomers.
     * @example
     * // Create many Newcomers
     * const newcomer = await prisma.newcomer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Newcomers and only return the `id`
     * const newcomerWithIdOnly = await prisma.newcomer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewcomerCreateManyAndReturnArgs>(args?: SelectSubset<T, NewcomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Newcomer.
     * @param {NewcomerDeleteArgs} args - Arguments to delete one Newcomer.
     * @example
     * // Delete one Newcomer
     * const Newcomer = await prisma.newcomer.delete({
     *   where: {
     *     // ... filter to delete one Newcomer
     *   }
     * })
     * 
     */
    delete<T extends NewcomerDeleteArgs>(args: SelectSubset<T, NewcomerDeleteArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Newcomer.
     * @param {NewcomerUpdateArgs} args - Arguments to update one Newcomer.
     * @example
     * // Update one Newcomer
     * const newcomer = await prisma.newcomer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewcomerUpdateArgs>(args: SelectSubset<T, NewcomerUpdateArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Newcomers.
     * @param {NewcomerDeleteManyArgs} args - Arguments to filter Newcomers to delete.
     * @example
     * // Delete a few Newcomers
     * const { count } = await prisma.newcomer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewcomerDeleteManyArgs>(args?: SelectSubset<T, NewcomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newcomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewcomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Newcomers
     * const newcomer = await prisma.newcomer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewcomerUpdateManyArgs>(args: SelectSubset<T, NewcomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Newcomers and returns the data updated in the database.
     * @param {NewcomerUpdateManyAndReturnArgs} args - Arguments to update many Newcomers.
     * @example
     * // Update many Newcomers
     * const newcomer = await prisma.newcomer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Newcomers and only return the `id`
     * const newcomerWithIdOnly = await prisma.newcomer.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewcomerUpdateManyAndReturnArgs>(args: SelectSubset<T, NewcomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Newcomer.
     * @param {NewcomerUpsertArgs} args - Arguments to update or create a Newcomer.
     * @example
     * // Update or create a Newcomer
     * const newcomer = await prisma.newcomer.upsert({
     *   create: {
     *     // ... data to create a Newcomer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Newcomer we want to update
     *   }
     * })
     */
    upsert<T extends NewcomerUpsertArgs>(args: SelectSubset<T, NewcomerUpsertArgs<ExtArgs>>): Prisma__NewcomerClient<$Result.GetResult<Prisma.$NewcomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Newcomers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewcomerCountArgs} args - Arguments to filter Newcomers to count.
     * @example
     * // Count the number of Newcomers
     * const count = await prisma.newcomer.count({
     *   where: {
     *     // ... the filter for the Newcomers we want to count
     *   }
     * })
    **/
    count<T extends NewcomerCountArgs>(
      args?: Subset<T, NewcomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewcomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Newcomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewcomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewcomerAggregateArgs>(args: Subset<T, NewcomerAggregateArgs>): Prisma.PrismaPromise<GetNewcomerAggregateType<T>>

    /**
     * Group by Newcomer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewcomerGroupByArgs} args - Group by arguments.
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
      T extends NewcomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewcomerGroupByArgs['orderBy'] }
        : { orderBy?: NewcomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewcomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewcomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Newcomer model
   */
  readonly fields: NewcomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Newcomer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewcomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inviter<T extends Newcomer$inviterArgs<ExtArgs> = {}>(args?: Subset<T, Newcomer$inviterArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Newcomer model
   */
  interface NewcomerFieldRefs {
    readonly id: FieldRef<"Newcomer", 'String'>
    readonly type: FieldRef<"Newcomer", 'PersonType'>
    readonly inviterId: FieldRef<"Newcomer", 'String'>
    readonly prevChurch: FieldRef<"Newcomer", 'String'>
    readonly prevServedPart: FieldRef<"Newcomer", 'String'>
    readonly processStatus: FieldRef<"Newcomer", 'ProcessStatus'>
    readonly updatedAt: FieldRef<"Newcomer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Newcomer findUnique
   */
  export type NewcomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * Filter, which Newcomer to fetch.
     */
    where: NewcomerWhereUniqueInput
  }

  /**
   * Newcomer findUniqueOrThrow
   */
  export type NewcomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * Filter, which Newcomer to fetch.
     */
    where: NewcomerWhereUniqueInput
  }

  /**
   * Newcomer findFirst
   */
  export type NewcomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * Filter, which Newcomer to fetch.
     */
    where?: NewcomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newcomers to fetch.
     */
    orderBy?: NewcomerOrderByWithRelationInput | NewcomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newcomers.
     */
    cursor?: NewcomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newcomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newcomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newcomers.
     */
    distinct?: NewcomerScalarFieldEnum | NewcomerScalarFieldEnum[]
  }

  /**
   * Newcomer findFirstOrThrow
   */
  export type NewcomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * Filter, which Newcomer to fetch.
     */
    where?: NewcomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newcomers to fetch.
     */
    orderBy?: NewcomerOrderByWithRelationInput | NewcomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Newcomers.
     */
    cursor?: NewcomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newcomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newcomers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Newcomers.
     */
    distinct?: NewcomerScalarFieldEnum | NewcomerScalarFieldEnum[]
  }

  /**
   * Newcomer findMany
   */
  export type NewcomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * Filter, which Newcomers to fetch.
     */
    where?: NewcomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Newcomers to fetch.
     */
    orderBy?: NewcomerOrderByWithRelationInput | NewcomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Newcomers.
     */
    cursor?: NewcomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Newcomers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Newcomers.
     */
    skip?: number
    distinct?: NewcomerScalarFieldEnum | NewcomerScalarFieldEnum[]
  }

  /**
   * Newcomer create
   */
  export type NewcomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Newcomer.
     */
    data: XOR<NewcomerCreateInput, NewcomerUncheckedCreateInput>
  }

  /**
   * Newcomer createMany
   */
  export type NewcomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Newcomers.
     */
    data: NewcomerCreateManyInput | NewcomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Newcomer createManyAndReturn
   */
  export type NewcomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * The data used to create many Newcomers.
     */
    data: NewcomerCreateManyInput | NewcomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Newcomer update
   */
  export type NewcomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Newcomer.
     */
    data: XOR<NewcomerUpdateInput, NewcomerUncheckedUpdateInput>
    /**
     * Choose, which Newcomer to update.
     */
    where: NewcomerWhereUniqueInput
  }

  /**
   * Newcomer updateMany
   */
  export type NewcomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Newcomers.
     */
    data: XOR<NewcomerUpdateManyMutationInput, NewcomerUncheckedUpdateManyInput>
    /**
     * Filter which Newcomers to update
     */
    where?: NewcomerWhereInput
    /**
     * Limit how many Newcomers to update.
     */
    limit?: number
  }

  /**
   * Newcomer updateManyAndReturn
   */
  export type NewcomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * The data used to update Newcomers.
     */
    data: XOR<NewcomerUpdateManyMutationInput, NewcomerUncheckedUpdateManyInput>
    /**
     * Filter which Newcomers to update
     */
    where?: NewcomerWhereInput
    /**
     * Limit how many Newcomers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Newcomer upsert
   */
  export type NewcomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Newcomer to update in case it exists.
     */
    where: NewcomerWhereUniqueInput
    /**
     * In case the Newcomer found by the `where` argument doesn't exist, create a new Newcomer with this data.
     */
    create: XOR<NewcomerCreateInput, NewcomerUncheckedCreateInput>
    /**
     * In case the Newcomer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewcomerUpdateInput, NewcomerUncheckedUpdateInput>
  }

  /**
   * Newcomer delete
   */
  export type NewcomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
    /**
     * Filter which Newcomer to delete.
     */
    where: NewcomerWhereUniqueInput
  }

  /**
   * Newcomer deleteMany
   */
  export type NewcomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Newcomers to delete
     */
    where?: NewcomerWhereInput
    /**
     * Limit how many Newcomers to delete.
     */
    limit?: number
  }

  /**
   * Newcomer.inviter
   */
  export type Newcomer$inviterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
  }

  /**
   * Newcomer without action
   */
  export type NewcomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Newcomer
     */
    select?: NewcomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Newcomer
     */
    omit?: NewcomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewcomerInclude<ExtArgs> | null
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


  export const GroupTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    churchId: 'churchId',
    seniorPastorId: 'seniorPastorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupTypeScalarFieldEnum = (typeof GroupTypeScalarFieldEnum)[keyof typeof GroupTypeScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    groupTypeId: 'groupTypeId',
    createdAt: 'createdAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ChurchScalarFieldEnum: {
    id: 'id',
    address: 'address',
    phone: 'phone',
    estDate: 'estDate',
    seniorPastorId: 'seniorPastorId',
    updatedAt: 'updatedAt'
  };

  export type ChurchScalarFieldEnum = (typeof ChurchScalarFieldEnum)[keyof typeof ChurchScalarFieldEnum]


  export const SubGroupScalarFieldEnum: {
    id: 'id',
    parentId: 'parentId',
    pastorId: 'pastorId',
    leaderId: 'leaderId',
    updatedAt: 'updatedAt'
  };

  export type SubGroupScalarFieldEnum = (typeof SubGroupScalarFieldEnum)[keyof typeof SubGroupScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hash: 'hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    gender: 'gender',
    phone: 'phone',
    kakaoAccount: 'kakaoAccount',
    bod: 'bod',
    address: 'address',
    profileImgUrl: 'profileImgUrl',
    occupation: 'occupation',
    visaType: 'visaType',
    assignedAt: 'assignedAt',
    role: 'role',
    hasBaptized: 'hasBaptized',
    note: 'note',
    userId: 'userId',
    groupId: 'groupId',
    createdAt: 'createdAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const SeniorPastorScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt'
  };

  export type SeniorPastorScalarFieldEnum = (typeof SeniorPastorScalarFieldEnum)[keyof typeof SeniorPastorScalarFieldEnum]


  export const PastorScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt'
  };

  export type PastorScalarFieldEnum = (typeof PastorScalarFieldEnum)[keyof typeof PastorScalarFieldEnum]


  export const LeaderScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt'
  };

  export type LeaderScalarFieldEnum = (typeof LeaderScalarFieldEnum)[keyof typeof LeaderScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    type: 'type',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const NewcomerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    inviterId: 'inviterId',
    prevChurch: 'prevChurch',
    prevServedPart: 'prevServedPart',
    processStatus: 'processStatus',
    updatedAt: 'updatedAt'
  };

  export type NewcomerScalarFieldEnum = (typeof NewcomerScalarFieldEnum)[keyof typeof NewcomerScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VisaType'
   */
  export type EnumVisaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaType'>
    


  /**
   * Reference to a field of type 'VisaType[]'
   */
  export type ListEnumVisaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VisaType[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'PersonType'
   */
  export type EnumPersonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonType'>
    


  /**
   * Reference to a field of type 'PersonType[]'
   */
  export type ListEnumPersonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonType[]'>
    


  /**
   * Reference to a field of type 'ProcessStatus'
   */
  export type EnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus'>
    


  /**
   * Reference to a field of type 'ProcessStatus[]'
   */
  export type ListEnumProcessStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessStatus[]'>
    


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


  export type GroupTypeWhereInput = {
    AND?: GroupTypeWhereInput | GroupTypeWhereInput[]
    OR?: GroupTypeWhereInput[]
    NOT?: GroupTypeWhereInput | GroupTypeWhereInput[]
    id?: StringFilter<"GroupType"> | string
    name?: StringFilter<"GroupType"> | string
    order?: IntFilter<"GroupType"> | number
    churchId?: StringFilter<"GroupType"> | string
    seniorPastorId?: StringFilter<"GroupType"> | string
    createdAt?: DateTimeFilter<"GroupType"> | Date | string
    updatedAt?: DateTimeFilter<"GroupType"> | Date | string
    groups?: GroupListRelationFilter
    church?: XOR<ChurchScalarRelationFilter, ChurchWhereInput>
    seniorPastor?: XOR<SeniorPastorScalarRelationFilter, SeniorPastorWhereInput>
  }

  export type GroupTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    churchId?: SortOrder
    seniorPastorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
    church?: ChurchOrderByWithRelationInput
    seniorPastor?: SeniorPastorOrderByWithRelationInput
  }

  export type GroupTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupTypeWhereInput | GroupTypeWhereInput[]
    OR?: GroupTypeWhereInput[]
    NOT?: GroupTypeWhereInput | GroupTypeWhereInput[]
    name?: StringFilter<"GroupType"> | string
    order?: IntFilter<"GroupType"> | number
    churchId?: StringFilter<"GroupType"> | string
    seniorPastorId?: StringFilter<"GroupType"> | string
    createdAt?: DateTimeFilter<"GroupType"> | Date | string
    updatedAt?: DateTimeFilter<"GroupType"> | Date | string
    groups?: GroupListRelationFilter
    church?: XOR<ChurchScalarRelationFilter, ChurchWhereInput>
    seniorPastor?: XOR<SeniorPastorScalarRelationFilter, SeniorPastorWhereInput>
  }, "id">

  export type GroupTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    churchId?: SortOrder
    seniorPastorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupTypeCountOrderByAggregateInput
    _avg?: GroupTypeAvgOrderByAggregateInput
    _max?: GroupTypeMaxOrderByAggregateInput
    _min?: GroupTypeMinOrderByAggregateInput
    _sum?: GroupTypeSumOrderByAggregateInput
  }

  export type GroupTypeScalarWhereWithAggregatesInput = {
    AND?: GroupTypeScalarWhereWithAggregatesInput | GroupTypeScalarWhereWithAggregatesInput[]
    OR?: GroupTypeScalarWhereWithAggregatesInput[]
    NOT?: GroupTypeScalarWhereWithAggregatesInput | GroupTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupType"> | string
    name?: StringWithAggregatesFilter<"GroupType"> | string
    order?: IntWithAggregatesFilter<"GroupType"> | number
    churchId?: StringWithAggregatesFilter<"GroupType"> | string
    seniorPastorId?: StringWithAggregatesFilter<"GroupType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupType"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    groupTypeId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    type?: XOR<GroupTypeScalarRelationFilter, GroupTypeWhereInput>
    church?: XOR<ChurchNullableScalarRelationFilter, ChurchWhereInput> | null
    subGroups?: SubGroupListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    groupTypeId?: SortOrder
    createdAt?: SortOrder
    type?: GroupTypeOrderByWithRelationInput
    church?: ChurchOrderByWithRelationInput
    subGroups?: SubGroupOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    groupTypeId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    type?: XOR<GroupTypeScalarRelationFilter, GroupTypeWhereInput>
    church?: XOR<ChurchNullableScalarRelationFilter, ChurchWhereInput> | null
    subGroups?: SubGroupListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    groupTypeId?: SortOrder
    createdAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    groupTypeId?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type ChurchWhereInput = {
    AND?: ChurchWhereInput | ChurchWhereInput[]
    OR?: ChurchWhereInput[]
    NOT?: ChurchWhereInput | ChurchWhereInput[]
    id?: StringFilter<"Church"> | string
    address?: StringNullableFilter<"Church"> | string | null
    phone?: StringNullableFilter<"Church"> | string | null
    estDate?: DateTimeNullableFilter<"Church"> | Date | string | null
    seniorPastorId?: StringFilter<"Church"> | string
    updatedAt?: DateTimeFilter<"Church"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    seniorPastor?: XOR<SeniorPastorScalarRelationFilter, SeniorPastorWhereInput>
    groupTypes?: GroupTypeListRelationFilter
  }

  export type ChurchOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    estDate?: SortOrderInput | SortOrder
    seniorPastorId?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    seniorPastor?: SeniorPastorOrderByWithRelationInput
    groupTypes?: GroupTypeOrderByRelationAggregateInput
  }

  export type ChurchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChurchWhereInput | ChurchWhereInput[]
    OR?: ChurchWhereInput[]
    NOT?: ChurchWhereInput | ChurchWhereInput[]
    address?: StringNullableFilter<"Church"> | string | null
    phone?: StringNullableFilter<"Church"> | string | null
    estDate?: DateTimeNullableFilter<"Church"> | Date | string | null
    seniorPastorId?: StringFilter<"Church"> | string
    updatedAt?: DateTimeFilter<"Church"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    seniorPastor?: XOR<SeniorPastorScalarRelationFilter, SeniorPastorWhereInput>
    groupTypes?: GroupTypeListRelationFilter
  }, "id">

  export type ChurchOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    estDate?: SortOrderInput | SortOrder
    seniorPastorId?: SortOrder
    updatedAt?: SortOrder
    _count?: ChurchCountOrderByAggregateInput
    _max?: ChurchMaxOrderByAggregateInput
    _min?: ChurchMinOrderByAggregateInput
  }

  export type ChurchScalarWhereWithAggregatesInput = {
    AND?: ChurchScalarWhereWithAggregatesInput | ChurchScalarWhereWithAggregatesInput[]
    OR?: ChurchScalarWhereWithAggregatesInput[]
    NOT?: ChurchScalarWhereWithAggregatesInput | ChurchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Church"> | string
    address?: StringNullableWithAggregatesFilter<"Church"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Church"> | string | null
    estDate?: DateTimeNullableWithAggregatesFilter<"Church"> | Date | string | null
    seniorPastorId?: StringWithAggregatesFilter<"Church"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Church"> | Date | string
  }

  export type SubGroupWhereInput = {
    AND?: SubGroupWhereInput | SubGroupWhereInput[]
    OR?: SubGroupWhereInput[]
    NOT?: SubGroupWhereInput | SubGroupWhereInput[]
    id?: StringFilter<"SubGroup"> | string
    parentId?: StringNullableFilter<"SubGroup"> | string | null
    pastorId?: StringNullableFilter<"SubGroup"> | string | null
    leaderId?: StringNullableFilter<"SubGroup"> | string | null
    updatedAt?: DateTimeFilter<"SubGroup"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    parent?: XOR<SubGroupNullableScalarRelationFilter, SubGroupWhereInput> | null
    children?: SubGroupListRelationFilter
    pastor?: XOR<PastorNullableScalarRelationFilter, PastorWhereInput> | null
    leader?: XOR<LeaderNullableScalarRelationFilter, LeaderWhereInput> | null
    members?: PersonListRelationFilter
  }

  export type SubGroupOrderByWithRelationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    pastorId?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    parent?: SubGroupOrderByWithRelationInput
    children?: SubGroupOrderByRelationAggregateInput
    pastor?: PastorOrderByWithRelationInput
    leader?: LeaderOrderByWithRelationInput
    members?: PersonOrderByRelationAggregateInput
  }

  export type SubGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leaderId?: string
    AND?: SubGroupWhereInput | SubGroupWhereInput[]
    OR?: SubGroupWhereInput[]
    NOT?: SubGroupWhereInput | SubGroupWhereInput[]
    parentId?: StringNullableFilter<"SubGroup"> | string | null
    pastorId?: StringNullableFilter<"SubGroup"> | string | null
    updatedAt?: DateTimeFilter<"SubGroup"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    parent?: XOR<SubGroupNullableScalarRelationFilter, SubGroupWhereInput> | null
    children?: SubGroupListRelationFilter
    pastor?: XOR<PastorNullableScalarRelationFilter, PastorWhereInput> | null
    leader?: XOR<LeaderNullableScalarRelationFilter, LeaderWhereInput> | null
    members?: PersonListRelationFilter
  }, "id" | "leaderId">

  export type SubGroupOrderByWithAggregationInput = {
    id?: SortOrder
    parentId?: SortOrderInput | SortOrder
    pastorId?: SortOrderInput | SortOrder
    leaderId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SubGroupCountOrderByAggregateInput
    _max?: SubGroupMaxOrderByAggregateInput
    _min?: SubGroupMinOrderByAggregateInput
  }

  export type SubGroupScalarWhereWithAggregatesInput = {
    AND?: SubGroupScalarWhereWithAggregatesInput | SubGroupScalarWhereWithAggregatesInput[]
    OR?: SubGroupScalarWhereWithAggregatesInput[]
    NOT?: SubGroupScalarWhereWithAggregatesInput | SubGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubGroup"> | string
    parentId?: StringNullableWithAggregatesFilter<"SubGroup"> | string | null
    pastorId?: StringNullableWithAggregatesFilter<"SubGroup"> | string | null
    leaderId?: StringNullableWithAggregatesFilter<"SubGroup"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SubGroup"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    person?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    person?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    hash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    gender?: BoolFilter<"Person"> | boolean
    phone?: StringFilter<"Person"> | string
    kakaoAccount?: StringNullableFilter<"Person"> | string | null
    bod?: DateTimeNullableFilter<"Person"> | Date | string | null
    address?: StringNullableFilter<"Person"> | string | null
    profileImgUrl?: StringNullableFilter<"Person"> | string | null
    occupation?: StringNullableFilter<"Person"> | string | null
    visaType?: EnumVisaTypeNullableFilter<"Person"> | $Enums.VisaType | null
    assignedAt?: DateTimeFilter<"Person"> | Date | string
    role?: EnumRoleFilter<"Person"> | $Enums.Role
    hasBaptized?: BoolFilter<"Person"> | boolean
    note?: StringNullableFilter<"Person"> | string | null
    userId?: StringNullableFilter<"Person"> | string | null
    groupId?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    group?: XOR<SubGroupNullableScalarRelationFilter, SubGroupWhereInput> | null
    invitedNewcomers?: NewcomerListRelationFilter
    seniorPastor?: XOR<SeniorPastorNullableScalarRelationFilter, SeniorPastorWhereInput> | null
    pastor?: XOR<PastorNullableScalarRelationFilter, PastorWhereInput> | null
    leader?: XOR<LeaderNullableScalarRelationFilter, LeaderWhereInput> | null
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    newcomer?: XOR<NewcomerNullableScalarRelationFilter, NewcomerWhereInput> | null
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    kakaoAccount?: SortOrderInput | SortOrder
    bod?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImgUrl?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    visaType?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
    hasBaptized?: SortOrder
    note?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: SubGroupOrderByWithRelationInput
    invitedNewcomers?: NewcomerOrderByRelationAggregateInput
    seniorPastor?: SeniorPastorOrderByWithRelationInput
    pastor?: PastorOrderByWithRelationInput
    leader?: LeaderOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
    newcomer?: NewcomerOrderByWithRelationInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    gender?: BoolFilter<"Person"> | boolean
    phone?: StringFilter<"Person"> | string
    kakaoAccount?: StringNullableFilter<"Person"> | string | null
    bod?: DateTimeNullableFilter<"Person"> | Date | string | null
    address?: StringNullableFilter<"Person"> | string | null
    profileImgUrl?: StringNullableFilter<"Person"> | string | null
    occupation?: StringNullableFilter<"Person"> | string | null
    visaType?: EnumVisaTypeNullableFilter<"Person"> | $Enums.VisaType | null
    assignedAt?: DateTimeFilter<"Person"> | Date | string
    role?: EnumRoleFilter<"Person"> | $Enums.Role
    hasBaptized?: BoolFilter<"Person"> | boolean
    note?: StringNullableFilter<"Person"> | string | null
    groupId?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    group?: XOR<SubGroupNullableScalarRelationFilter, SubGroupWhereInput> | null
    invitedNewcomers?: NewcomerListRelationFilter
    seniorPastor?: XOR<SeniorPastorNullableScalarRelationFilter, SeniorPastorWhereInput> | null
    pastor?: XOR<PastorNullableScalarRelationFilter, PastorWhereInput> | null
    leader?: XOR<LeaderNullableScalarRelationFilter, LeaderWhereInput> | null
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    newcomer?: XOR<NewcomerNullableScalarRelationFilter, NewcomerWhereInput> | null
  }, "id" | "userId">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    kakaoAccount?: SortOrderInput | SortOrder
    bod?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    profileImgUrl?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    visaType?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
    hasBaptized?: SortOrder
    note?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    firstName?: StringWithAggregatesFilter<"Person"> | string
    lastName?: StringWithAggregatesFilter<"Person"> | string
    gender?: BoolWithAggregatesFilter<"Person"> | boolean
    phone?: StringWithAggregatesFilter<"Person"> | string
    kakaoAccount?: StringNullableWithAggregatesFilter<"Person"> | string | null
    bod?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Person"> | string | null
    profileImgUrl?: StringNullableWithAggregatesFilter<"Person"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"Person"> | string | null
    visaType?: EnumVisaTypeNullableWithAggregatesFilter<"Person"> | $Enums.VisaType | null
    assignedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"Person"> | $Enums.Role
    hasBaptized?: BoolWithAggregatesFilter<"Person"> | boolean
    note?: StringNullableWithAggregatesFilter<"Person"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Person"> | string | null
    groupId?: StringWithAggregatesFilter<"Person"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type SeniorPastorWhereInput = {
    AND?: SeniorPastorWhereInput | SeniorPastorWhereInput[]
    OR?: SeniorPastorWhereInput[]
    NOT?: SeniorPastorWhereInput | SeniorPastorWhereInput[]
    id?: StringFilter<"SeniorPastor"> | string
    updatedAt?: DateTimeFilter<"SeniorPastor"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    churches?: ChurchListRelationFilter
    groupTypes?: GroupTypeListRelationFilter
  }

  export type SeniorPastorOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    churches?: ChurchOrderByRelationAggregateInput
    groupTypes?: GroupTypeOrderByRelationAggregateInput
  }

  export type SeniorPastorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeniorPastorWhereInput | SeniorPastorWhereInput[]
    OR?: SeniorPastorWhereInput[]
    NOT?: SeniorPastorWhereInput | SeniorPastorWhereInput[]
    updatedAt?: DateTimeFilter<"SeniorPastor"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    churches?: ChurchListRelationFilter
    groupTypes?: GroupTypeListRelationFilter
  }, "id">

  export type SeniorPastorOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    _count?: SeniorPastorCountOrderByAggregateInput
    _max?: SeniorPastorMaxOrderByAggregateInput
    _min?: SeniorPastorMinOrderByAggregateInput
  }

  export type SeniorPastorScalarWhereWithAggregatesInput = {
    AND?: SeniorPastorScalarWhereWithAggregatesInput | SeniorPastorScalarWhereWithAggregatesInput[]
    OR?: SeniorPastorScalarWhereWithAggregatesInput[]
    NOT?: SeniorPastorScalarWhereWithAggregatesInput | SeniorPastorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeniorPastor"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeniorPastor"> | Date | string
  }

  export type PastorWhereInput = {
    AND?: PastorWhereInput | PastorWhereInput[]
    OR?: PastorWhereInput[]
    NOT?: PastorWhereInput | PastorWhereInput[]
    id?: StringFilter<"Pastor"> | string
    updatedAt?: DateTimeFilter<"Pastor"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    ledGroups?: SubGroupListRelationFilter
  }

  export type PastorOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    ledGroups?: SubGroupOrderByRelationAggregateInput
  }

  export type PastorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PastorWhereInput | PastorWhereInput[]
    OR?: PastorWhereInput[]
    NOT?: PastorWhereInput | PastorWhereInput[]
    updatedAt?: DateTimeFilter<"Pastor"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    ledGroups?: SubGroupListRelationFilter
  }, "id">

  export type PastorOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    _count?: PastorCountOrderByAggregateInput
    _max?: PastorMaxOrderByAggregateInput
    _min?: PastorMinOrderByAggregateInput
  }

  export type PastorScalarWhereWithAggregatesInput = {
    AND?: PastorScalarWhereWithAggregatesInput | PastorScalarWhereWithAggregatesInput[]
    OR?: PastorScalarWhereWithAggregatesInput[]
    NOT?: PastorScalarWhereWithAggregatesInput | PastorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pastor"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pastor"> | Date | string
  }

  export type LeaderWhereInput = {
    AND?: LeaderWhereInput | LeaderWhereInput[]
    OR?: LeaderWhereInput[]
    NOT?: LeaderWhereInput | LeaderWhereInput[]
    id?: StringFilter<"Leader"> | string
    updatedAt?: DateTimeFilter<"Leader"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    leadGroup?: XOR<SubGroupNullableScalarRelationFilter, SubGroupWhereInput> | null
  }

  export type LeaderOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    leadGroup?: SubGroupOrderByWithRelationInput
  }

  export type LeaderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaderWhereInput | LeaderWhereInput[]
    OR?: LeaderWhereInput[]
    NOT?: LeaderWhereInput | LeaderWhereInput[]
    updatedAt?: DateTimeFilter<"Leader"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    leadGroup?: XOR<SubGroupNullableScalarRelationFilter, SubGroupWhereInput> | null
  }, "id">

  export type LeaderOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaderCountOrderByAggregateInput
    _max?: LeaderMaxOrderByAggregateInput
    _min?: LeaderMinOrderByAggregateInput
  }

  export type LeaderScalarWhereWithAggregatesInput = {
    AND?: LeaderScalarWhereWithAggregatesInput | LeaderScalarWhereWithAggregatesInput[]
    OR?: LeaderScalarWhereWithAggregatesInput[]
    NOT?: LeaderScalarWhereWithAggregatesInput | LeaderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leader"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leader"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    type?: EnumPersonTypeFilter<"Member"> | $Enums.PersonType
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    type?: EnumPersonTypeFilter<"Member"> | $Enums.PersonType
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    type?: EnumPersonTypeWithAggregatesFilter<"Member"> | $Enums.PersonType
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type NewcomerWhereInput = {
    AND?: NewcomerWhereInput | NewcomerWhereInput[]
    OR?: NewcomerWhereInput[]
    NOT?: NewcomerWhereInput | NewcomerWhereInput[]
    id?: StringFilter<"Newcomer"> | string
    type?: EnumPersonTypeFilter<"Newcomer"> | $Enums.PersonType
    inviterId?: StringNullableFilter<"Newcomer"> | string | null
    prevChurch?: StringNullableFilter<"Newcomer"> | string | null
    prevServedPart?: StringNullableFilter<"Newcomer"> | string | null
    processStatus?: EnumProcessStatusFilter<"Newcomer"> | $Enums.ProcessStatus
    updatedAt?: DateTimeFilter<"Newcomer"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    inviter?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
  }

  export type NewcomerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    inviterId?: SortOrderInput | SortOrder
    prevChurch?: SortOrderInput | SortOrder
    prevServedPart?: SortOrderInput | SortOrder
    processStatus?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    inviter?: PersonOrderByWithRelationInput
  }

  export type NewcomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewcomerWhereInput | NewcomerWhereInput[]
    OR?: NewcomerWhereInput[]
    NOT?: NewcomerWhereInput | NewcomerWhereInput[]
    type?: EnumPersonTypeFilter<"Newcomer"> | $Enums.PersonType
    inviterId?: StringNullableFilter<"Newcomer"> | string | null
    prevChurch?: StringNullableFilter<"Newcomer"> | string | null
    prevServedPart?: StringNullableFilter<"Newcomer"> | string | null
    processStatus?: EnumProcessStatusFilter<"Newcomer"> | $Enums.ProcessStatus
    updatedAt?: DateTimeFilter<"Newcomer"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    inviter?: XOR<PersonNullableScalarRelationFilter, PersonWhereInput> | null
  }, "id">

  export type NewcomerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    inviterId?: SortOrderInput | SortOrder
    prevChurch?: SortOrderInput | SortOrder
    prevServedPart?: SortOrderInput | SortOrder
    processStatus?: SortOrder
    updatedAt?: SortOrder
    _count?: NewcomerCountOrderByAggregateInput
    _max?: NewcomerMaxOrderByAggregateInput
    _min?: NewcomerMinOrderByAggregateInput
  }

  export type NewcomerScalarWhereWithAggregatesInput = {
    AND?: NewcomerScalarWhereWithAggregatesInput | NewcomerScalarWhereWithAggregatesInput[]
    OR?: NewcomerScalarWhereWithAggregatesInput[]
    NOT?: NewcomerScalarWhereWithAggregatesInput | NewcomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Newcomer"> | string
    type?: EnumPersonTypeWithAggregatesFilter<"Newcomer"> | $Enums.PersonType
    inviterId?: StringNullableWithAggregatesFilter<"Newcomer"> | string | null
    prevChurch?: StringNullableWithAggregatesFilter<"Newcomer"> | string | null
    prevServedPart?: StringNullableWithAggregatesFilter<"Newcomer"> | string | null
    processStatus?: EnumProcessStatusWithAggregatesFilter<"Newcomer"> | $Enums.ProcessStatus
    updatedAt?: DateTimeWithAggregatesFilter<"Newcomer"> | Date | string
  }

  export type GroupTypeCreateInput = {
    id?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutTypeInput
    church: ChurchCreateNestedOneWithoutGroupTypesInput
    seniorPastor: SeniorPastorCreateNestedOneWithoutGroupTypesInput
  }

  export type GroupTypeUncheckedCreateInput = {
    id?: string
    name: string
    order: number
    churchId: string
    seniorPastorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutTypeInput
  }

  export type GroupTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutTypeNestedInput
    church?: ChurchUpdateOneRequiredWithoutGroupTypesNestedInput
    seniorPastor?: SeniorPastorUpdateOneRequiredWithoutGroupTypesNestedInput
  }

  export type GroupTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    churchId?: StringFieldUpdateOperationsInput | string
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type GroupTypeCreateManyInput = {
    id?: string
    name: string
    order: number
    churchId: string
    seniorPastorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    churchId?: StringFieldUpdateOperationsInput | string
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    type: GroupTypeCreateNestedOneWithoutGroupsInput
    church?: ChurchCreateNestedOneWithoutGroupInput
    subGroups?: SubGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    groupTypeId: string
    createdAt?: Date | string
    church?: ChurchUncheckedCreateNestedOneWithoutGroupInput
    subGroups?: SubGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: GroupTypeUpdateOneRequiredWithoutGroupsNestedInput
    church?: ChurchUpdateOneWithoutGroupNestedInput
    subGroups?: SubGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    church?: ChurchUncheckedUpdateOneWithoutGroupNestedInput
    subGroups?: SubGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    groupTypeId: string
    createdAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChurchCreateInput = {
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutChurchInput
    seniorPastor: SeniorPastorCreateNestedOneWithoutChurchesInput
    groupTypes?: GroupTypeCreateNestedManyWithoutChurchInput
  }

  export type ChurchUncheckedCreateInput = {
    id: string
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    seniorPastorId: string
    updatedAt?: Date | string
    groupTypes?: GroupTypeUncheckedCreateNestedManyWithoutChurchInput
  }

  export type ChurchUpdateInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutChurchNestedInput
    seniorPastor?: SeniorPastorUpdateOneRequiredWithoutChurchesNestedInput
    groupTypes?: GroupTypeUpdateManyWithoutChurchNestedInput
  }

  export type ChurchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupTypes?: GroupTypeUncheckedUpdateManyWithoutChurchNestedInput
  }

  export type ChurchCreateManyInput = {
    id: string
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    seniorPastorId: string
    updatedAt?: Date | string
  }

  export type ChurchUpdateManyMutationInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChurchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupCreateInput = {
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutSubGroupsInput
    parent?: SubGroupCreateNestedOneWithoutChildrenInput
    children?: SubGroupCreateNestedManyWithoutParentInput
    pastor?: PastorCreateNestedOneWithoutLedGroupsInput
    leader?: LeaderCreateNestedOneWithoutLeadGroupInput
    members?: PersonCreateNestedManyWithoutGroupInput
  }

  export type SubGroupUncheckedCreateInput = {
    id: string
    parentId?: string | null
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
    children?: SubGroupUncheckedCreateNestedManyWithoutParentInput
    members?: PersonUncheckedCreateNestedManyWithoutGroupInput
  }

  export type SubGroupUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSubGroupsNestedInput
    parent?: SubGroupUpdateOneWithoutChildrenNestedInput
    children?: SubGroupUpdateManyWithoutParentNestedInput
    pastor?: PastorUpdateOneWithoutLedGroupsNestedInput
    leader?: LeaderUpdateOneWithoutLeadGroupNestedInput
    members?: PersonUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SubGroupUncheckedUpdateManyWithoutParentNestedInput
    members?: PersonUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupCreateManyInput = {
    id: string
    parentId?: string | null
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
  }

  export type SubGroupUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    person?: PersonUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    group?: SubGroupCreateNestedOneWithoutMembersInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeniorPastorCreateInput = {
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutSeniorPastorInput
    churches?: ChurchCreateNestedManyWithoutSeniorPastorInput
    groupTypes?: GroupTypeCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorUncheckedCreateInput = {
    id: string
    updatedAt?: Date | string
    churches?: ChurchUncheckedCreateNestedManyWithoutSeniorPastorInput
    groupTypes?: GroupTypeUncheckedCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSeniorPastorNestedInput
    churches?: ChurchUpdateManyWithoutSeniorPastorNestedInput
    groupTypes?: GroupTypeUpdateManyWithoutSeniorPastorNestedInput
  }

  export type SeniorPastorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    churches?: ChurchUncheckedUpdateManyWithoutSeniorPastorNestedInput
    groupTypes?: GroupTypeUncheckedUpdateManyWithoutSeniorPastorNestedInput
  }

  export type SeniorPastorCreateManyInput = {
    id: string
    updatedAt?: Date | string
  }

  export type SeniorPastorUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeniorPastorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PastorCreateInput = {
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutPastorInput
    ledGroups?: SubGroupCreateNestedManyWithoutPastorInput
  }

  export type PastorUncheckedCreateInput = {
    id: string
    updatedAt?: Date | string
    ledGroups?: SubGroupUncheckedCreateNestedManyWithoutPastorInput
  }

  export type PastorUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutPastorNestedInput
    ledGroups?: SubGroupUpdateManyWithoutPastorNestedInput
  }

  export type PastorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: SubGroupUncheckedUpdateManyWithoutPastorNestedInput
  }

  export type PastorCreateManyInput = {
    id: string
    updatedAt?: Date | string
  }

  export type PastorUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PastorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderCreateInput = {
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutLeaderInput
    leadGroup?: SubGroupCreateNestedOneWithoutLeaderInput
  }

  export type LeaderUncheckedCreateInput = {
    id: string
    updatedAt?: Date | string
    leadGroup?: SubGroupUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type LeaderUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutLeaderNestedInput
    leadGroup?: SubGroupUpdateOneWithoutLeaderNestedInput
  }

  export type LeaderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadGroup?: SubGroupUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type LeaderCreateManyInput = {
    id: string
    updatedAt?: Date | string
  }

  export type LeaderUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    type?: $Enums.PersonType
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id: string
    type?: $Enums.PersonType
    updatedAt?: Date | string
  }

  export type MemberUpdateInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyInput = {
    id: string
    type?: $Enums.PersonType
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewcomerCreateInput = {
    type?: $Enums.PersonType
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutNewcomerInput
    inviter?: PersonCreateNestedOneWithoutInvitedNewcomersInput
  }

  export type NewcomerUncheckedCreateInput = {
    id: string
    type?: $Enums.PersonType
    inviterId?: string | null
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
  }

  export type NewcomerUpdateInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutNewcomerNestedInput
    inviter?: PersonUpdateOneWithoutInvitedNewcomersNestedInput
  }

  export type NewcomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    inviterId?: NullableStringFieldUpdateOperationsInput | string | null
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewcomerCreateManyInput = {
    id: string
    type?: $Enums.PersonType
    inviterId?: string | null
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
  }

  export type NewcomerUpdateManyMutationInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewcomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    inviterId?: NullableStringFieldUpdateOperationsInput | string | null
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type ChurchScalarRelationFilter = {
    is?: ChurchWhereInput
    isNot?: ChurchWhereInput
  }

  export type SeniorPastorScalarRelationFilter = {
    is?: SeniorPastorWhereInput
    isNot?: SeniorPastorWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    churchId?: SortOrder
    seniorPastorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTypeAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GroupTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    churchId?: SortOrder
    seniorPastorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    churchId?: SortOrder
    seniorPastorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupTypeSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type GroupTypeScalarRelationFilter = {
    is?: GroupTypeWhereInput
    isNot?: GroupTypeWhereInput
  }

  export type ChurchNullableScalarRelationFilter = {
    is?: ChurchWhereInput | null
    isNot?: ChurchWhereInput | null
  }

  export type SubGroupListRelationFilter = {
    every?: SubGroupWhereInput
    some?: SubGroupWhereInput
    none?: SubGroupWhereInput
  }

  export type SubGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupTypeId?: SortOrder
    createdAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    groupTypeId?: SortOrder
    createdAt?: SortOrder
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

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupTypeListRelationFilter = {
    every?: GroupTypeWhereInput
    some?: GroupTypeWhereInput
    none?: GroupTypeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GroupTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChurchCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    estDate?: SortOrder
    seniorPastorId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChurchMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    estDate?: SortOrder
    seniorPastorId?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChurchMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    estDate?: SortOrder
    seniorPastorId?: SortOrder
    updatedAt?: SortOrder
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

  export type SubGroupNullableScalarRelationFilter = {
    is?: SubGroupWhereInput | null
    isNot?: SubGroupWhereInput | null
  }

  export type PastorNullableScalarRelationFilter = {
    is?: PastorWhereInput | null
    isNot?: PastorWhereInput | null
  }

  export type LeaderNullableScalarRelationFilter = {
    is?: LeaderWhereInput | null
    isNot?: LeaderWhereInput | null
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubGroupCountOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    pastorId?: SortOrder
    leaderId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    pastorId?: SortOrder
    leaderId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubGroupMinOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    pastorId?: SortOrder
    leaderId?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonNullableScalarRelationFilter = {
    is?: PersonWhereInput | null
    isNot?: PersonWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumVisaTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVisaTypeNullableFilter<$PrismaModel> | $Enums.VisaType | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NewcomerListRelationFilter = {
    every?: NewcomerWhereInput
    some?: NewcomerWhereInput
    none?: NewcomerWhereInput
  }

  export type SeniorPastorNullableScalarRelationFilter = {
    is?: SeniorPastorWhereInput | null
    isNot?: SeniorPastorWhereInput | null
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type NewcomerNullableScalarRelationFilter = {
    is?: NewcomerWhereInput | null
    isNot?: NewcomerWhereInput | null
  }

  export type NewcomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    kakaoAccount?: SortOrder
    bod?: SortOrder
    address?: SortOrder
    profileImgUrl?: SortOrder
    occupation?: SortOrder
    visaType?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
    hasBaptized?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    kakaoAccount?: SortOrder
    bod?: SortOrder
    address?: SortOrder
    profileImgUrl?: SortOrder
    occupation?: SortOrder
    visaType?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
    hasBaptized?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gender?: SortOrder
    phone?: SortOrder
    kakaoAccount?: SortOrder
    bod?: SortOrder
    address?: SortOrder
    profileImgUrl?: SortOrder
    occupation?: SortOrder
    visaType?: SortOrder
    assignedAt?: SortOrder
    role?: SortOrder
    hasBaptized?: SortOrder
    note?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVisaTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVisaTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VisaType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVisaTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumVisaTypeNullableFilter<$PrismaModel>
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

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type ChurchListRelationFilter = {
    every?: ChurchWhereInput
    some?: ChurchWhereInput
    none?: ChurchWhereInput
  }

  export type ChurchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeniorPastorCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeniorPastorMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeniorPastorMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type PastorCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type PastorMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type PastorMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPersonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeFilter<$PrismaModel> | $Enums.PersonType
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPersonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PersonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonTypeFilter<$PrismaModel>
    _max?: NestedEnumPersonTypeFilter<$PrismaModel>
  }

  export type EnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type NewcomerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    inviterId?: SortOrder
    prevChurch?: SortOrder
    prevServedPart?: SortOrder
    processStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewcomerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    inviterId?: SortOrder
    prevChurch?: SortOrder
    prevServedPart?: SortOrder
    processStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewcomerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    inviterId?: SortOrder
    prevChurch?: SortOrder
    prevServedPart?: SortOrder
    processStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type GroupCreateNestedManyWithoutTypeInput = {
    create?: XOR<GroupCreateWithoutTypeInput, GroupUncheckedCreateWithoutTypeInput> | GroupCreateWithoutTypeInput[] | GroupUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTypeInput | GroupCreateOrConnectWithoutTypeInput[]
    createMany?: GroupCreateManyTypeInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ChurchCreateNestedOneWithoutGroupTypesInput = {
    create?: XOR<ChurchCreateWithoutGroupTypesInput, ChurchUncheckedCreateWithoutGroupTypesInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutGroupTypesInput
    connect?: ChurchWhereUniqueInput
  }

  export type SeniorPastorCreateNestedOneWithoutGroupTypesInput = {
    create?: XOR<SeniorPastorCreateWithoutGroupTypesInput, SeniorPastorUncheckedCreateWithoutGroupTypesInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutGroupTypesInput
    connect?: SeniorPastorWhereUniqueInput
  }

  export type GroupUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<GroupCreateWithoutTypeInput, GroupUncheckedCreateWithoutTypeInput> | GroupCreateWithoutTypeInput[] | GroupUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTypeInput | GroupCreateOrConnectWithoutTypeInput[]
    createMany?: GroupCreateManyTypeInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateManyWithoutTypeNestedInput = {
    create?: XOR<GroupCreateWithoutTypeInput, GroupUncheckedCreateWithoutTypeInput> | GroupCreateWithoutTypeInput[] | GroupUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTypeInput | GroupCreateOrConnectWithoutTypeInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutTypeInput | GroupUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: GroupCreateManyTypeInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutTypeInput | GroupUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutTypeInput | GroupUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ChurchUpdateOneRequiredWithoutGroupTypesNestedInput = {
    create?: XOR<ChurchCreateWithoutGroupTypesInput, ChurchUncheckedCreateWithoutGroupTypesInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutGroupTypesInput
    upsert?: ChurchUpsertWithoutGroupTypesInput
    connect?: ChurchWhereUniqueInput
    update?: XOR<XOR<ChurchUpdateToOneWithWhereWithoutGroupTypesInput, ChurchUpdateWithoutGroupTypesInput>, ChurchUncheckedUpdateWithoutGroupTypesInput>
  }

  export type SeniorPastorUpdateOneRequiredWithoutGroupTypesNestedInput = {
    create?: XOR<SeniorPastorCreateWithoutGroupTypesInput, SeniorPastorUncheckedCreateWithoutGroupTypesInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutGroupTypesInput
    upsert?: SeniorPastorUpsertWithoutGroupTypesInput
    connect?: SeniorPastorWhereUniqueInput
    update?: XOR<XOR<SeniorPastorUpdateToOneWithWhereWithoutGroupTypesInput, SeniorPastorUpdateWithoutGroupTypesInput>, SeniorPastorUncheckedUpdateWithoutGroupTypesInput>
  }

  export type GroupUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<GroupCreateWithoutTypeInput, GroupUncheckedCreateWithoutTypeInput> | GroupCreateWithoutTypeInput[] | GroupUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutTypeInput | GroupCreateOrConnectWithoutTypeInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutTypeInput | GroupUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: GroupCreateManyTypeInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutTypeInput | GroupUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutTypeInput | GroupUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupTypeCreateNestedOneWithoutGroupsInput = {
    create?: XOR<GroupTypeCreateWithoutGroupsInput, GroupTypeUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: GroupTypeCreateOrConnectWithoutGroupsInput
    connect?: GroupTypeWhereUniqueInput
  }

  export type ChurchCreateNestedOneWithoutGroupInput = {
    create?: XOR<ChurchCreateWithoutGroupInput, ChurchUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutGroupInput
    connect?: ChurchWhereUniqueInput
  }

  export type SubGroupCreateNestedManyWithoutGroupInput = {
    create?: XOR<SubGroupCreateWithoutGroupInput, SubGroupUncheckedCreateWithoutGroupInput> | SubGroupCreateWithoutGroupInput[] | SubGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutGroupInput | SubGroupCreateOrConnectWithoutGroupInput[]
    createMany?: SubGroupCreateManyGroupInputEnvelope
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
  }

  export type ChurchUncheckedCreateNestedOneWithoutGroupInput = {
    create?: XOR<ChurchCreateWithoutGroupInput, ChurchUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutGroupInput
    connect?: ChurchWhereUniqueInput
  }

  export type SubGroupUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<SubGroupCreateWithoutGroupInput, SubGroupUncheckedCreateWithoutGroupInput> | SubGroupCreateWithoutGroupInput[] | SubGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutGroupInput | SubGroupCreateOrConnectWithoutGroupInput[]
    createMany?: SubGroupCreateManyGroupInputEnvelope
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
  }

  export type GroupTypeUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<GroupTypeCreateWithoutGroupsInput, GroupTypeUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: GroupTypeCreateOrConnectWithoutGroupsInput
    upsert?: GroupTypeUpsertWithoutGroupsInput
    connect?: GroupTypeWhereUniqueInput
    update?: XOR<XOR<GroupTypeUpdateToOneWithWhereWithoutGroupsInput, GroupTypeUpdateWithoutGroupsInput>, GroupTypeUncheckedUpdateWithoutGroupsInput>
  }

  export type ChurchUpdateOneWithoutGroupNestedInput = {
    create?: XOR<ChurchCreateWithoutGroupInput, ChurchUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutGroupInput
    upsert?: ChurchUpsertWithoutGroupInput
    disconnect?: ChurchWhereInput | boolean
    delete?: ChurchWhereInput | boolean
    connect?: ChurchWhereUniqueInput
    update?: XOR<XOR<ChurchUpdateToOneWithWhereWithoutGroupInput, ChurchUpdateWithoutGroupInput>, ChurchUncheckedUpdateWithoutGroupInput>
  }

  export type SubGroupUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SubGroupCreateWithoutGroupInput, SubGroupUncheckedCreateWithoutGroupInput> | SubGroupCreateWithoutGroupInput[] | SubGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutGroupInput | SubGroupCreateOrConnectWithoutGroupInput[]
    upsert?: SubGroupUpsertWithWhereUniqueWithoutGroupInput | SubGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SubGroupCreateManyGroupInputEnvelope
    set?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    disconnect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    delete?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    update?: SubGroupUpdateWithWhereUniqueWithoutGroupInput | SubGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SubGroupUpdateManyWithWhereWithoutGroupInput | SubGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
  }

  export type ChurchUncheckedUpdateOneWithoutGroupNestedInput = {
    create?: XOR<ChurchCreateWithoutGroupInput, ChurchUncheckedCreateWithoutGroupInput>
    connectOrCreate?: ChurchCreateOrConnectWithoutGroupInput
    upsert?: ChurchUpsertWithoutGroupInput
    disconnect?: ChurchWhereInput | boolean
    delete?: ChurchWhereInput | boolean
    connect?: ChurchWhereUniqueInput
    update?: XOR<XOR<ChurchUpdateToOneWithWhereWithoutGroupInput, ChurchUpdateWithoutGroupInput>, ChurchUncheckedUpdateWithoutGroupInput>
  }

  export type SubGroupUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<SubGroupCreateWithoutGroupInput, SubGroupUncheckedCreateWithoutGroupInput> | SubGroupCreateWithoutGroupInput[] | SubGroupUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutGroupInput | SubGroupCreateOrConnectWithoutGroupInput[]
    upsert?: SubGroupUpsertWithWhereUniqueWithoutGroupInput | SubGroupUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: SubGroupCreateManyGroupInputEnvelope
    set?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    disconnect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    delete?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    update?: SubGroupUpdateWithWhereUniqueWithoutGroupInput | SubGroupUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: SubGroupUpdateManyWithWhereWithoutGroupInput | SubGroupUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutChurchInput = {
    create?: XOR<GroupCreateWithoutChurchInput, GroupUncheckedCreateWithoutChurchInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChurchInput
    connect?: GroupWhereUniqueInput
  }

  export type SeniorPastorCreateNestedOneWithoutChurchesInput = {
    create?: XOR<SeniorPastorCreateWithoutChurchesInput, SeniorPastorUncheckedCreateWithoutChurchesInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutChurchesInput
    connect?: SeniorPastorWhereUniqueInput
  }

  export type GroupTypeCreateNestedManyWithoutChurchInput = {
    create?: XOR<GroupTypeCreateWithoutChurchInput, GroupTypeUncheckedCreateWithoutChurchInput> | GroupTypeCreateWithoutChurchInput[] | GroupTypeUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutChurchInput | GroupTypeCreateOrConnectWithoutChurchInput[]
    createMany?: GroupTypeCreateManyChurchInputEnvelope
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
  }

  export type GroupTypeUncheckedCreateNestedManyWithoutChurchInput = {
    create?: XOR<GroupTypeCreateWithoutChurchInput, GroupTypeUncheckedCreateWithoutChurchInput> | GroupTypeCreateWithoutChurchInput[] | GroupTypeUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutChurchInput | GroupTypeCreateOrConnectWithoutChurchInput[]
    createMany?: GroupTypeCreateManyChurchInputEnvelope
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GroupUpdateOneRequiredWithoutChurchNestedInput = {
    create?: XOR<GroupCreateWithoutChurchInput, GroupUncheckedCreateWithoutChurchInput>
    connectOrCreate?: GroupCreateOrConnectWithoutChurchInput
    upsert?: GroupUpsertWithoutChurchInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutChurchInput, GroupUpdateWithoutChurchInput>, GroupUncheckedUpdateWithoutChurchInput>
  }

  export type SeniorPastorUpdateOneRequiredWithoutChurchesNestedInput = {
    create?: XOR<SeniorPastorCreateWithoutChurchesInput, SeniorPastorUncheckedCreateWithoutChurchesInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutChurchesInput
    upsert?: SeniorPastorUpsertWithoutChurchesInput
    connect?: SeniorPastorWhereUniqueInput
    update?: XOR<XOR<SeniorPastorUpdateToOneWithWhereWithoutChurchesInput, SeniorPastorUpdateWithoutChurchesInput>, SeniorPastorUncheckedUpdateWithoutChurchesInput>
  }

  export type GroupTypeUpdateManyWithoutChurchNestedInput = {
    create?: XOR<GroupTypeCreateWithoutChurchInput, GroupTypeUncheckedCreateWithoutChurchInput> | GroupTypeCreateWithoutChurchInput[] | GroupTypeUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutChurchInput | GroupTypeCreateOrConnectWithoutChurchInput[]
    upsert?: GroupTypeUpsertWithWhereUniqueWithoutChurchInput | GroupTypeUpsertWithWhereUniqueWithoutChurchInput[]
    createMany?: GroupTypeCreateManyChurchInputEnvelope
    set?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    disconnect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    delete?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    update?: GroupTypeUpdateWithWhereUniqueWithoutChurchInput | GroupTypeUpdateWithWhereUniqueWithoutChurchInput[]
    updateMany?: GroupTypeUpdateManyWithWhereWithoutChurchInput | GroupTypeUpdateManyWithWhereWithoutChurchInput[]
    deleteMany?: GroupTypeScalarWhereInput | GroupTypeScalarWhereInput[]
  }

  export type GroupTypeUncheckedUpdateManyWithoutChurchNestedInput = {
    create?: XOR<GroupTypeCreateWithoutChurchInput, GroupTypeUncheckedCreateWithoutChurchInput> | GroupTypeCreateWithoutChurchInput[] | GroupTypeUncheckedCreateWithoutChurchInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutChurchInput | GroupTypeCreateOrConnectWithoutChurchInput[]
    upsert?: GroupTypeUpsertWithWhereUniqueWithoutChurchInput | GroupTypeUpsertWithWhereUniqueWithoutChurchInput[]
    createMany?: GroupTypeCreateManyChurchInputEnvelope
    set?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    disconnect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    delete?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    update?: GroupTypeUpdateWithWhereUniqueWithoutChurchInput | GroupTypeUpdateWithWhereUniqueWithoutChurchInput[]
    updateMany?: GroupTypeUpdateManyWithWhereWithoutChurchInput | GroupTypeUpdateManyWithWhereWithoutChurchInput[]
    deleteMany?: GroupTypeScalarWhereInput | GroupTypeScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutSubGroupsInput = {
    create?: XOR<GroupCreateWithoutSubGroupsInput, GroupUncheckedCreateWithoutSubGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutSubGroupsInput
    connect?: GroupWhereUniqueInput
  }

  export type SubGroupCreateNestedOneWithoutChildrenInput = {
    create?: XOR<SubGroupCreateWithoutChildrenInput, SubGroupUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutChildrenInput
    connect?: SubGroupWhereUniqueInput
  }

  export type SubGroupCreateNestedManyWithoutParentInput = {
    create?: XOR<SubGroupCreateWithoutParentInput, SubGroupUncheckedCreateWithoutParentInput> | SubGroupCreateWithoutParentInput[] | SubGroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutParentInput | SubGroupCreateOrConnectWithoutParentInput[]
    createMany?: SubGroupCreateManyParentInputEnvelope
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
  }

  export type PastorCreateNestedOneWithoutLedGroupsInput = {
    create?: XOR<PastorCreateWithoutLedGroupsInput, PastorUncheckedCreateWithoutLedGroupsInput>
    connectOrCreate?: PastorCreateOrConnectWithoutLedGroupsInput
    connect?: PastorWhereUniqueInput
  }

  export type LeaderCreateNestedOneWithoutLeadGroupInput = {
    create?: XOR<LeaderCreateWithoutLeadGroupInput, LeaderUncheckedCreateWithoutLeadGroupInput>
    connectOrCreate?: LeaderCreateOrConnectWithoutLeadGroupInput
    connect?: LeaderWhereUniqueInput
  }

  export type PersonCreateNestedManyWithoutGroupInput = {
    create?: XOR<PersonCreateWithoutGroupInput, PersonUncheckedCreateWithoutGroupInput> | PersonCreateWithoutGroupInput[] | PersonUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGroupInput | PersonCreateOrConnectWithoutGroupInput[]
    createMany?: PersonCreateManyGroupInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type SubGroupUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<SubGroupCreateWithoutParentInput, SubGroupUncheckedCreateWithoutParentInput> | SubGroupCreateWithoutParentInput[] | SubGroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutParentInput | SubGroupCreateOrConnectWithoutParentInput[]
    createMany?: SubGroupCreateManyParentInputEnvelope
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<PersonCreateWithoutGroupInput, PersonUncheckedCreateWithoutGroupInput> | PersonCreateWithoutGroupInput[] | PersonUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGroupInput | PersonCreateOrConnectWithoutGroupInput[]
    createMany?: PersonCreateManyGroupInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutSubGroupsNestedInput = {
    create?: XOR<GroupCreateWithoutSubGroupsInput, GroupUncheckedCreateWithoutSubGroupsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutSubGroupsInput
    upsert?: GroupUpsertWithoutSubGroupsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutSubGroupsInput, GroupUpdateWithoutSubGroupsInput>, GroupUncheckedUpdateWithoutSubGroupsInput>
  }

  export type SubGroupUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<SubGroupCreateWithoutChildrenInput, SubGroupUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutChildrenInput
    upsert?: SubGroupUpsertWithoutChildrenInput
    disconnect?: SubGroupWhereInput | boolean
    delete?: SubGroupWhereInput | boolean
    connect?: SubGroupWhereUniqueInput
    update?: XOR<XOR<SubGroupUpdateToOneWithWhereWithoutChildrenInput, SubGroupUpdateWithoutChildrenInput>, SubGroupUncheckedUpdateWithoutChildrenInput>
  }

  export type SubGroupUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubGroupCreateWithoutParentInput, SubGroupUncheckedCreateWithoutParentInput> | SubGroupCreateWithoutParentInput[] | SubGroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutParentInput | SubGroupCreateOrConnectWithoutParentInput[]
    upsert?: SubGroupUpsertWithWhereUniqueWithoutParentInput | SubGroupUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubGroupCreateManyParentInputEnvelope
    set?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    disconnect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    delete?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    update?: SubGroupUpdateWithWhereUniqueWithoutParentInput | SubGroupUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubGroupUpdateManyWithWhereWithoutParentInput | SubGroupUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
  }

  export type PastorUpdateOneWithoutLedGroupsNestedInput = {
    create?: XOR<PastorCreateWithoutLedGroupsInput, PastorUncheckedCreateWithoutLedGroupsInput>
    connectOrCreate?: PastorCreateOrConnectWithoutLedGroupsInput
    upsert?: PastorUpsertWithoutLedGroupsInput
    disconnect?: PastorWhereInput | boolean
    delete?: PastorWhereInput | boolean
    connect?: PastorWhereUniqueInput
    update?: XOR<XOR<PastorUpdateToOneWithWhereWithoutLedGroupsInput, PastorUpdateWithoutLedGroupsInput>, PastorUncheckedUpdateWithoutLedGroupsInput>
  }

  export type LeaderUpdateOneWithoutLeadGroupNestedInput = {
    create?: XOR<LeaderCreateWithoutLeadGroupInput, LeaderUncheckedCreateWithoutLeadGroupInput>
    connectOrCreate?: LeaderCreateOrConnectWithoutLeadGroupInput
    upsert?: LeaderUpsertWithoutLeadGroupInput
    disconnect?: LeaderWhereInput | boolean
    delete?: LeaderWhereInput | boolean
    connect?: LeaderWhereUniqueInput
    update?: XOR<XOR<LeaderUpdateToOneWithWhereWithoutLeadGroupInput, LeaderUpdateWithoutLeadGroupInput>, LeaderUncheckedUpdateWithoutLeadGroupInput>
  }

  export type PersonUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PersonCreateWithoutGroupInput, PersonUncheckedCreateWithoutGroupInput> | PersonCreateWithoutGroupInput[] | PersonUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGroupInput | PersonCreateOrConnectWithoutGroupInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutGroupInput | PersonUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PersonCreateManyGroupInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutGroupInput | PersonUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutGroupInput | PersonUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type SubGroupUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<SubGroupCreateWithoutParentInput, SubGroupUncheckedCreateWithoutParentInput> | SubGroupCreateWithoutParentInput[] | SubGroupUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutParentInput | SubGroupCreateOrConnectWithoutParentInput[]
    upsert?: SubGroupUpsertWithWhereUniqueWithoutParentInput | SubGroupUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SubGroupCreateManyParentInputEnvelope
    set?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    disconnect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    delete?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    update?: SubGroupUpdateWithWhereUniqueWithoutParentInput | SubGroupUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SubGroupUpdateManyWithWhereWithoutParentInput | SubGroupUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<PersonCreateWithoutGroupInput, PersonUncheckedCreateWithoutGroupInput> | PersonCreateWithoutGroupInput[] | PersonUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutGroupInput | PersonCreateOrConnectWithoutGroupInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutGroupInput | PersonUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: PersonCreateManyGroupInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutGroupInput | PersonUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutGroupInput | PersonUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    upsert?: PersonUpsertWithoutUserInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutUserInput, PersonUpdateWithoutUserInput>, PersonUncheckedUpdateWithoutUserInput>
  }

  export type PersonUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonCreateOrConnectWithoutUserInput
    upsert?: PersonUpsertWithoutUserInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutUserInput, PersonUpdateWithoutUserInput>, PersonUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPersonInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    connect?: UserWhereUniqueInput
  }

  export type SubGroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<SubGroupCreateWithoutMembersInput, SubGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutMembersInput
    connect?: SubGroupWhereUniqueInput
  }

  export type NewcomerCreateNestedManyWithoutInviterInput = {
    create?: XOR<NewcomerCreateWithoutInviterInput, NewcomerUncheckedCreateWithoutInviterInput> | NewcomerCreateWithoutInviterInput[] | NewcomerUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: NewcomerCreateOrConnectWithoutInviterInput | NewcomerCreateOrConnectWithoutInviterInput[]
    createMany?: NewcomerCreateManyInviterInputEnvelope
    connect?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
  }

  export type SeniorPastorCreateNestedOneWithoutPersonInput = {
    create?: XOR<SeniorPastorCreateWithoutPersonInput, SeniorPastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutPersonInput
    connect?: SeniorPastorWhereUniqueInput
  }

  export type PastorCreateNestedOneWithoutPersonInput = {
    create?: XOR<PastorCreateWithoutPersonInput, PastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PastorCreateOrConnectWithoutPersonInput
    connect?: PastorWhereUniqueInput
  }

  export type LeaderCreateNestedOneWithoutPersonInput = {
    create?: XOR<LeaderCreateWithoutPersonInput, LeaderUncheckedCreateWithoutPersonInput>
    connectOrCreate?: LeaderCreateOrConnectWithoutPersonInput
    connect?: LeaderWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutPersonInput = {
    create?: XOR<MemberCreateWithoutPersonInput, MemberUncheckedCreateWithoutPersonInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPersonInput
    connect?: MemberWhereUniqueInput
  }

  export type NewcomerCreateNestedOneWithoutPersonInput = {
    create?: XOR<NewcomerCreateWithoutPersonInput, NewcomerUncheckedCreateWithoutPersonInput>
    connectOrCreate?: NewcomerCreateOrConnectWithoutPersonInput
    connect?: NewcomerWhereUniqueInput
  }

  export type NewcomerUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<NewcomerCreateWithoutInviterInput, NewcomerUncheckedCreateWithoutInviterInput> | NewcomerCreateWithoutInviterInput[] | NewcomerUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: NewcomerCreateOrConnectWithoutInviterInput | NewcomerCreateOrConnectWithoutInviterInput[]
    createMany?: NewcomerCreateManyInviterInputEnvelope
    connect?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
  }

  export type SeniorPastorUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<SeniorPastorCreateWithoutPersonInput, SeniorPastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutPersonInput
    connect?: SeniorPastorWhereUniqueInput
  }

  export type PastorUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<PastorCreateWithoutPersonInput, PastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PastorCreateOrConnectWithoutPersonInput
    connect?: PastorWhereUniqueInput
  }

  export type LeaderUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<LeaderCreateWithoutPersonInput, LeaderUncheckedCreateWithoutPersonInput>
    connectOrCreate?: LeaderCreateOrConnectWithoutPersonInput
    connect?: LeaderWhereUniqueInput
  }

  export type MemberUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<MemberCreateWithoutPersonInput, MemberUncheckedCreateWithoutPersonInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPersonInput
    connect?: MemberWhereUniqueInput
  }

  export type NewcomerUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<NewcomerCreateWithoutPersonInput, NewcomerUncheckedCreateWithoutPersonInput>
    connectOrCreate?: NewcomerCreateOrConnectWithoutPersonInput
    connect?: NewcomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumVisaTypeFieldUpdateOperationsInput = {
    set?: $Enums.VisaType | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneWithoutPersonNestedInput = {
    create?: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonInput
    upsert?: UserUpsertWithoutPersonInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonInput, UserUpdateWithoutPersonInput>, UserUncheckedUpdateWithoutPersonInput>
  }

  export type SubGroupUpdateOneWithoutMembersNestedInput = {
    create?: XOR<SubGroupCreateWithoutMembersInput, SubGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutMembersInput
    upsert?: SubGroupUpsertWithoutMembersInput
    disconnect?: SubGroupWhereInput | boolean
    delete?: SubGroupWhereInput | boolean
    connect?: SubGroupWhereUniqueInput
    update?: XOR<XOR<SubGroupUpdateToOneWithWhereWithoutMembersInput, SubGroupUpdateWithoutMembersInput>, SubGroupUncheckedUpdateWithoutMembersInput>
  }

  export type NewcomerUpdateManyWithoutInviterNestedInput = {
    create?: XOR<NewcomerCreateWithoutInviterInput, NewcomerUncheckedCreateWithoutInviterInput> | NewcomerCreateWithoutInviterInput[] | NewcomerUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: NewcomerCreateOrConnectWithoutInviterInput | NewcomerCreateOrConnectWithoutInviterInput[]
    upsert?: NewcomerUpsertWithWhereUniqueWithoutInviterInput | NewcomerUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: NewcomerCreateManyInviterInputEnvelope
    set?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    disconnect?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    delete?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    connect?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    update?: NewcomerUpdateWithWhereUniqueWithoutInviterInput | NewcomerUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: NewcomerUpdateManyWithWhereWithoutInviterInput | NewcomerUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: NewcomerScalarWhereInput | NewcomerScalarWhereInput[]
  }

  export type SeniorPastorUpdateOneWithoutPersonNestedInput = {
    create?: XOR<SeniorPastorCreateWithoutPersonInput, SeniorPastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutPersonInput
    upsert?: SeniorPastorUpsertWithoutPersonInput
    disconnect?: SeniorPastorWhereInput | boolean
    delete?: SeniorPastorWhereInput | boolean
    connect?: SeniorPastorWhereUniqueInput
    update?: XOR<XOR<SeniorPastorUpdateToOneWithWhereWithoutPersonInput, SeniorPastorUpdateWithoutPersonInput>, SeniorPastorUncheckedUpdateWithoutPersonInput>
  }

  export type PastorUpdateOneWithoutPersonNestedInput = {
    create?: XOR<PastorCreateWithoutPersonInput, PastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PastorCreateOrConnectWithoutPersonInput
    upsert?: PastorUpsertWithoutPersonInput
    disconnect?: PastorWhereInput | boolean
    delete?: PastorWhereInput | boolean
    connect?: PastorWhereUniqueInput
    update?: XOR<XOR<PastorUpdateToOneWithWhereWithoutPersonInput, PastorUpdateWithoutPersonInput>, PastorUncheckedUpdateWithoutPersonInput>
  }

  export type LeaderUpdateOneWithoutPersonNestedInput = {
    create?: XOR<LeaderCreateWithoutPersonInput, LeaderUncheckedCreateWithoutPersonInput>
    connectOrCreate?: LeaderCreateOrConnectWithoutPersonInput
    upsert?: LeaderUpsertWithoutPersonInput
    disconnect?: LeaderWhereInput | boolean
    delete?: LeaderWhereInput | boolean
    connect?: LeaderWhereUniqueInput
    update?: XOR<XOR<LeaderUpdateToOneWithWhereWithoutPersonInput, LeaderUpdateWithoutPersonInput>, LeaderUncheckedUpdateWithoutPersonInput>
  }

  export type MemberUpdateOneWithoutPersonNestedInput = {
    create?: XOR<MemberCreateWithoutPersonInput, MemberUncheckedCreateWithoutPersonInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPersonInput
    upsert?: MemberUpsertWithoutPersonInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPersonInput, MemberUpdateWithoutPersonInput>, MemberUncheckedUpdateWithoutPersonInput>
  }

  export type NewcomerUpdateOneWithoutPersonNestedInput = {
    create?: XOR<NewcomerCreateWithoutPersonInput, NewcomerUncheckedCreateWithoutPersonInput>
    connectOrCreate?: NewcomerCreateOrConnectWithoutPersonInput
    upsert?: NewcomerUpsertWithoutPersonInput
    disconnect?: NewcomerWhereInput | boolean
    delete?: NewcomerWhereInput | boolean
    connect?: NewcomerWhereUniqueInput
    update?: XOR<XOR<NewcomerUpdateToOneWithWhereWithoutPersonInput, NewcomerUpdateWithoutPersonInput>, NewcomerUncheckedUpdateWithoutPersonInput>
  }

  export type NewcomerUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<NewcomerCreateWithoutInviterInput, NewcomerUncheckedCreateWithoutInviterInput> | NewcomerCreateWithoutInviterInput[] | NewcomerUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: NewcomerCreateOrConnectWithoutInviterInput | NewcomerCreateOrConnectWithoutInviterInput[]
    upsert?: NewcomerUpsertWithWhereUniqueWithoutInviterInput | NewcomerUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: NewcomerCreateManyInviterInputEnvelope
    set?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    disconnect?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    delete?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    connect?: NewcomerWhereUniqueInput | NewcomerWhereUniqueInput[]
    update?: NewcomerUpdateWithWhereUniqueWithoutInviterInput | NewcomerUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: NewcomerUpdateManyWithWhereWithoutInviterInput | NewcomerUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: NewcomerScalarWhereInput | NewcomerScalarWhereInput[]
  }

  export type SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<SeniorPastorCreateWithoutPersonInput, SeniorPastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: SeniorPastorCreateOrConnectWithoutPersonInput
    upsert?: SeniorPastorUpsertWithoutPersonInput
    disconnect?: SeniorPastorWhereInput | boolean
    delete?: SeniorPastorWhereInput | boolean
    connect?: SeniorPastorWhereUniqueInput
    update?: XOR<XOR<SeniorPastorUpdateToOneWithWhereWithoutPersonInput, SeniorPastorUpdateWithoutPersonInput>, SeniorPastorUncheckedUpdateWithoutPersonInput>
  }

  export type PastorUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<PastorCreateWithoutPersonInput, PastorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: PastorCreateOrConnectWithoutPersonInput
    upsert?: PastorUpsertWithoutPersonInput
    disconnect?: PastorWhereInput | boolean
    delete?: PastorWhereInput | boolean
    connect?: PastorWhereUniqueInput
    update?: XOR<XOR<PastorUpdateToOneWithWhereWithoutPersonInput, PastorUpdateWithoutPersonInput>, PastorUncheckedUpdateWithoutPersonInput>
  }

  export type LeaderUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<LeaderCreateWithoutPersonInput, LeaderUncheckedCreateWithoutPersonInput>
    connectOrCreate?: LeaderCreateOrConnectWithoutPersonInput
    upsert?: LeaderUpsertWithoutPersonInput
    disconnect?: LeaderWhereInput | boolean
    delete?: LeaderWhereInput | boolean
    connect?: LeaderWhereUniqueInput
    update?: XOR<XOR<LeaderUpdateToOneWithWhereWithoutPersonInput, LeaderUpdateWithoutPersonInput>, LeaderUncheckedUpdateWithoutPersonInput>
  }

  export type MemberUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<MemberCreateWithoutPersonInput, MemberUncheckedCreateWithoutPersonInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPersonInput
    upsert?: MemberUpsertWithoutPersonInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPersonInput, MemberUpdateWithoutPersonInput>, MemberUncheckedUpdateWithoutPersonInput>
  }

  export type NewcomerUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<NewcomerCreateWithoutPersonInput, NewcomerUncheckedCreateWithoutPersonInput>
    connectOrCreate?: NewcomerCreateOrConnectWithoutPersonInput
    upsert?: NewcomerUpsertWithoutPersonInput
    disconnect?: NewcomerWhereInput | boolean
    delete?: NewcomerWhereInput | boolean
    connect?: NewcomerWhereUniqueInput
    update?: XOR<XOR<NewcomerUpdateToOneWithWhereWithoutPersonInput, NewcomerUpdateWithoutPersonInput>, NewcomerUncheckedUpdateWithoutPersonInput>
  }

  export type PersonCreateNestedOneWithoutSeniorPastorInput = {
    create?: XOR<PersonCreateWithoutSeniorPastorInput, PersonUncheckedCreateWithoutSeniorPastorInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSeniorPastorInput
    connect?: PersonWhereUniqueInput
  }

  export type ChurchCreateNestedManyWithoutSeniorPastorInput = {
    create?: XOR<ChurchCreateWithoutSeniorPastorInput, ChurchUncheckedCreateWithoutSeniorPastorInput> | ChurchCreateWithoutSeniorPastorInput[] | ChurchUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: ChurchCreateOrConnectWithoutSeniorPastorInput | ChurchCreateOrConnectWithoutSeniorPastorInput[]
    createMany?: ChurchCreateManySeniorPastorInputEnvelope
    connect?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
  }

  export type GroupTypeCreateNestedManyWithoutSeniorPastorInput = {
    create?: XOR<GroupTypeCreateWithoutSeniorPastorInput, GroupTypeUncheckedCreateWithoutSeniorPastorInput> | GroupTypeCreateWithoutSeniorPastorInput[] | GroupTypeUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutSeniorPastorInput | GroupTypeCreateOrConnectWithoutSeniorPastorInput[]
    createMany?: GroupTypeCreateManySeniorPastorInputEnvelope
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
  }

  export type ChurchUncheckedCreateNestedManyWithoutSeniorPastorInput = {
    create?: XOR<ChurchCreateWithoutSeniorPastorInput, ChurchUncheckedCreateWithoutSeniorPastorInput> | ChurchCreateWithoutSeniorPastorInput[] | ChurchUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: ChurchCreateOrConnectWithoutSeniorPastorInput | ChurchCreateOrConnectWithoutSeniorPastorInput[]
    createMany?: ChurchCreateManySeniorPastorInputEnvelope
    connect?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
  }

  export type GroupTypeUncheckedCreateNestedManyWithoutSeniorPastorInput = {
    create?: XOR<GroupTypeCreateWithoutSeniorPastorInput, GroupTypeUncheckedCreateWithoutSeniorPastorInput> | GroupTypeCreateWithoutSeniorPastorInput[] | GroupTypeUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutSeniorPastorInput | GroupTypeCreateOrConnectWithoutSeniorPastorInput[]
    createMany?: GroupTypeCreateManySeniorPastorInputEnvelope
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
  }

  export type PersonUpdateOneRequiredWithoutSeniorPastorNestedInput = {
    create?: XOR<PersonCreateWithoutSeniorPastorInput, PersonUncheckedCreateWithoutSeniorPastorInput>
    connectOrCreate?: PersonCreateOrConnectWithoutSeniorPastorInput
    upsert?: PersonUpsertWithoutSeniorPastorInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutSeniorPastorInput, PersonUpdateWithoutSeniorPastorInput>, PersonUncheckedUpdateWithoutSeniorPastorInput>
  }

  export type ChurchUpdateManyWithoutSeniorPastorNestedInput = {
    create?: XOR<ChurchCreateWithoutSeniorPastorInput, ChurchUncheckedCreateWithoutSeniorPastorInput> | ChurchCreateWithoutSeniorPastorInput[] | ChurchUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: ChurchCreateOrConnectWithoutSeniorPastorInput | ChurchCreateOrConnectWithoutSeniorPastorInput[]
    upsert?: ChurchUpsertWithWhereUniqueWithoutSeniorPastorInput | ChurchUpsertWithWhereUniqueWithoutSeniorPastorInput[]
    createMany?: ChurchCreateManySeniorPastorInputEnvelope
    set?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    disconnect?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    delete?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    connect?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    update?: ChurchUpdateWithWhereUniqueWithoutSeniorPastorInput | ChurchUpdateWithWhereUniqueWithoutSeniorPastorInput[]
    updateMany?: ChurchUpdateManyWithWhereWithoutSeniorPastorInput | ChurchUpdateManyWithWhereWithoutSeniorPastorInput[]
    deleteMany?: ChurchScalarWhereInput | ChurchScalarWhereInput[]
  }

  export type GroupTypeUpdateManyWithoutSeniorPastorNestedInput = {
    create?: XOR<GroupTypeCreateWithoutSeniorPastorInput, GroupTypeUncheckedCreateWithoutSeniorPastorInput> | GroupTypeCreateWithoutSeniorPastorInput[] | GroupTypeUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutSeniorPastorInput | GroupTypeCreateOrConnectWithoutSeniorPastorInput[]
    upsert?: GroupTypeUpsertWithWhereUniqueWithoutSeniorPastorInput | GroupTypeUpsertWithWhereUniqueWithoutSeniorPastorInput[]
    createMany?: GroupTypeCreateManySeniorPastorInputEnvelope
    set?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    disconnect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    delete?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    update?: GroupTypeUpdateWithWhereUniqueWithoutSeniorPastorInput | GroupTypeUpdateWithWhereUniqueWithoutSeniorPastorInput[]
    updateMany?: GroupTypeUpdateManyWithWhereWithoutSeniorPastorInput | GroupTypeUpdateManyWithWhereWithoutSeniorPastorInput[]
    deleteMany?: GroupTypeScalarWhereInput | GroupTypeScalarWhereInput[]
  }

  export type ChurchUncheckedUpdateManyWithoutSeniorPastorNestedInput = {
    create?: XOR<ChurchCreateWithoutSeniorPastorInput, ChurchUncheckedCreateWithoutSeniorPastorInput> | ChurchCreateWithoutSeniorPastorInput[] | ChurchUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: ChurchCreateOrConnectWithoutSeniorPastorInput | ChurchCreateOrConnectWithoutSeniorPastorInput[]
    upsert?: ChurchUpsertWithWhereUniqueWithoutSeniorPastorInput | ChurchUpsertWithWhereUniqueWithoutSeniorPastorInput[]
    createMany?: ChurchCreateManySeniorPastorInputEnvelope
    set?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    disconnect?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    delete?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    connect?: ChurchWhereUniqueInput | ChurchWhereUniqueInput[]
    update?: ChurchUpdateWithWhereUniqueWithoutSeniorPastorInput | ChurchUpdateWithWhereUniqueWithoutSeniorPastorInput[]
    updateMany?: ChurchUpdateManyWithWhereWithoutSeniorPastorInput | ChurchUpdateManyWithWhereWithoutSeniorPastorInput[]
    deleteMany?: ChurchScalarWhereInput | ChurchScalarWhereInput[]
  }

  export type GroupTypeUncheckedUpdateManyWithoutSeniorPastorNestedInput = {
    create?: XOR<GroupTypeCreateWithoutSeniorPastorInput, GroupTypeUncheckedCreateWithoutSeniorPastorInput> | GroupTypeCreateWithoutSeniorPastorInput[] | GroupTypeUncheckedCreateWithoutSeniorPastorInput[]
    connectOrCreate?: GroupTypeCreateOrConnectWithoutSeniorPastorInput | GroupTypeCreateOrConnectWithoutSeniorPastorInput[]
    upsert?: GroupTypeUpsertWithWhereUniqueWithoutSeniorPastorInput | GroupTypeUpsertWithWhereUniqueWithoutSeniorPastorInput[]
    createMany?: GroupTypeCreateManySeniorPastorInputEnvelope
    set?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    disconnect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    delete?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    connect?: GroupTypeWhereUniqueInput | GroupTypeWhereUniqueInput[]
    update?: GroupTypeUpdateWithWhereUniqueWithoutSeniorPastorInput | GroupTypeUpdateWithWhereUniqueWithoutSeniorPastorInput[]
    updateMany?: GroupTypeUpdateManyWithWhereWithoutSeniorPastorInput | GroupTypeUpdateManyWithWhereWithoutSeniorPastorInput[]
    deleteMany?: GroupTypeScalarWhereInput | GroupTypeScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutPastorInput = {
    create?: XOR<PersonCreateWithoutPastorInput, PersonUncheckedCreateWithoutPastorInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPastorInput
    connect?: PersonWhereUniqueInput
  }

  export type SubGroupCreateNestedManyWithoutPastorInput = {
    create?: XOR<SubGroupCreateWithoutPastorInput, SubGroupUncheckedCreateWithoutPastorInput> | SubGroupCreateWithoutPastorInput[] | SubGroupUncheckedCreateWithoutPastorInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutPastorInput | SubGroupCreateOrConnectWithoutPastorInput[]
    createMany?: SubGroupCreateManyPastorInputEnvelope
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
  }

  export type SubGroupUncheckedCreateNestedManyWithoutPastorInput = {
    create?: XOR<SubGroupCreateWithoutPastorInput, SubGroupUncheckedCreateWithoutPastorInput> | SubGroupCreateWithoutPastorInput[] | SubGroupUncheckedCreateWithoutPastorInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutPastorInput | SubGroupCreateOrConnectWithoutPastorInput[]
    createMany?: SubGroupCreateManyPastorInputEnvelope
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
  }

  export type PersonUpdateOneRequiredWithoutPastorNestedInput = {
    create?: XOR<PersonCreateWithoutPastorInput, PersonUncheckedCreateWithoutPastorInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPastorInput
    upsert?: PersonUpsertWithoutPastorInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPastorInput, PersonUpdateWithoutPastorInput>, PersonUncheckedUpdateWithoutPastorInput>
  }

  export type SubGroupUpdateManyWithoutPastorNestedInput = {
    create?: XOR<SubGroupCreateWithoutPastorInput, SubGroupUncheckedCreateWithoutPastorInput> | SubGroupCreateWithoutPastorInput[] | SubGroupUncheckedCreateWithoutPastorInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutPastorInput | SubGroupCreateOrConnectWithoutPastorInput[]
    upsert?: SubGroupUpsertWithWhereUniqueWithoutPastorInput | SubGroupUpsertWithWhereUniqueWithoutPastorInput[]
    createMany?: SubGroupCreateManyPastorInputEnvelope
    set?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    disconnect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    delete?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    update?: SubGroupUpdateWithWhereUniqueWithoutPastorInput | SubGroupUpdateWithWhereUniqueWithoutPastorInput[]
    updateMany?: SubGroupUpdateManyWithWhereWithoutPastorInput | SubGroupUpdateManyWithWhereWithoutPastorInput[]
    deleteMany?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
  }

  export type SubGroupUncheckedUpdateManyWithoutPastorNestedInput = {
    create?: XOR<SubGroupCreateWithoutPastorInput, SubGroupUncheckedCreateWithoutPastorInput> | SubGroupCreateWithoutPastorInput[] | SubGroupUncheckedCreateWithoutPastorInput[]
    connectOrCreate?: SubGroupCreateOrConnectWithoutPastorInput | SubGroupCreateOrConnectWithoutPastorInput[]
    upsert?: SubGroupUpsertWithWhereUniqueWithoutPastorInput | SubGroupUpsertWithWhereUniqueWithoutPastorInput[]
    createMany?: SubGroupCreateManyPastorInputEnvelope
    set?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    disconnect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    delete?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    connect?: SubGroupWhereUniqueInput | SubGroupWhereUniqueInput[]
    update?: SubGroupUpdateWithWhereUniqueWithoutPastorInput | SubGroupUpdateWithWhereUniqueWithoutPastorInput[]
    updateMany?: SubGroupUpdateManyWithWhereWithoutPastorInput | SubGroupUpdateManyWithWhereWithoutPastorInput[]
    deleteMany?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutLeaderInput = {
    create?: XOR<PersonCreateWithoutLeaderInput, PersonUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: PersonCreateOrConnectWithoutLeaderInput
    connect?: PersonWhereUniqueInput
  }

  export type SubGroupCreateNestedOneWithoutLeaderInput = {
    create?: XOR<SubGroupCreateWithoutLeaderInput, SubGroupUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutLeaderInput
    connect?: SubGroupWhereUniqueInput
  }

  export type SubGroupUncheckedCreateNestedOneWithoutLeaderInput = {
    create?: XOR<SubGroupCreateWithoutLeaderInput, SubGroupUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutLeaderInput
    connect?: SubGroupWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutLeaderNestedInput = {
    create?: XOR<PersonCreateWithoutLeaderInput, PersonUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: PersonCreateOrConnectWithoutLeaderInput
    upsert?: PersonUpsertWithoutLeaderInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutLeaderInput, PersonUpdateWithoutLeaderInput>, PersonUncheckedUpdateWithoutLeaderInput>
  }

  export type SubGroupUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<SubGroupCreateWithoutLeaderInput, SubGroupUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutLeaderInput
    upsert?: SubGroupUpsertWithoutLeaderInput
    disconnect?: SubGroupWhereInput | boolean
    delete?: SubGroupWhereInput | boolean
    connect?: SubGroupWhereUniqueInput
    update?: XOR<XOR<SubGroupUpdateToOneWithWhereWithoutLeaderInput, SubGroupUpdateWithoutLeaderInput>, SubGroupUncheckedUpdateWithoutLeaderInput>
  }

  export type SubGroupUncheckedUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<SubGroupCreateWithoutLeaderInput, SubGroupUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: SubGroupCreateOrConnectWithoutLeaderInput
    upsert?: SubGroupUpsertWithoutLeaderInput
    disconnect?: SubGroupWhereInput | boolean
    delete?: SubGroupWhereInput | boolean
    connect?: SubGroupWhereUniqueInput
    update?: XOR<XOR<SubGroupUpdateToOneWithWhereWithoutLeaderInput, SubGroupUpdateWithoutLeaderInput>, SubGroupUncheckedUpdateWithoutLeaderInput>
  }

  export type PersonCreateNestedOneWithoutMemberInput = {
    create?: XOR<PersonCreateWithoutMemberInput, PersonUncheckedCreateWithoutMemberInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMemberInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumPersonTypeFieldUpdateOperationsInput = {
    set?: $Enums.PersonType
  }

  export type PersonUpdateOneRequiredWithoutMemberNestedInput = {
    create?: XOR<PersonCreateWithoutMemberInput, PersonUncheckedCreateWithoutMemberInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMemberInput
    upsert?: PersonUpsertWithoutMemberInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutMemberInput, PersonUpdateWithoutMemberInput>, PersonUncheckedUpdateWithoutMemberInput>
  }

  export type PersonCreateNestedOneWithoutNewcomerInput = {
    create?: XOR<PersonCreateWithoutNewcomerInput, PersonUncheckedCreateWithoutNewcomerInput>
    connectOrCreate?: PersonCreateOrConnectWithoutNewcomerInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutInvitedNewcomersInput = {
    create?: XOR<PersonCreateWithoutInvitedNewcomersInput, PersonUncheckedCreateWithoutInvitedNewcomersInput>
    connectOrCreate?: PersonCreateOrConnectWithoutInvitedNewcomersInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumProcessStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessStatus
  }

  export type PersonUpdateOneRequiredWithoutNewcomerNestedInput = {
    create?: XOR<PersonCreateWithoutNewcomerInput, PersonUncheckedCreateWithoutNewcomerInput>
    connectOrCreate?: PersonCreateOrConnectWithoutNewcomerInput
    upsert?: PersonUpsertWithoutNewcomerInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutNewcomerInput, PersonUpdateWithoutNewcomerInput>, PersonUncheckedUpdateWithoutNewcomerInput>
  }

  export type PersonUpdateOneWithoutInvitedNewcomersNestedInput = {
    create?: XOR<PersonCreateWithoutInvitedNewcomersInput, PersonUncheckedCreateWithoutInvitedNewcomersInput>
    connectOrCreate?: PersonCreateOrConnectWithoutInvitedNewcomersInput
    upsert?: PersonUpsertWithoutInvitedNewcomersInput
    disconnect?: PersonWhereInput | boolean
    delete?: PersonWhereInput | boolean
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutInvitedNewcomersInput, PersonUpdateWithoutInvitedNewcomersInput>, PersonUncheckedUpdateWithoutInvitedNewcomersInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumVisaTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVisaTypeNullableFilter<$PrismaModel> | $Enums.VisaType | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVisaTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VisaType | EnumVisaTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.VisaType[] | ListEnumVisaTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVisaTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.VisaType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVisaTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumVisaTypeNullableFilter<$PrismaModel>
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

  export type NestedEnumPersonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeFilter<$PrismaModel> | $Enums.PersonType
  }

  export type NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PersonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonTypeFilter<$PrismaModel>
    _max?: NestedEnumPersonTypeFilter<$PrismaModel>
  }

  export type NestedEnumProcessStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusFilter<$PrismaModel> | $Enums.ProcessStatus
  }

  export type NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessStatus | EnumProcessStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessStatus[] | ListEnumProcessStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessStatusFilter<$PrismaModel>
  }

  export type GroupCreateWithoutTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    church?: ChurchCreateNestedOneWithoutGroupInput
    subGroups?: SubGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    church?: ChurchUncheckedCreateNestedOneWithoutGroupInput
    subGroups?: SubGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTypeInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTypeInput, GroupUncheckedCreateWithoutTypeInput>
  }

  export type GroupCreateManyTypeInputEnvelope = {
    data: GroupCreateManyTypeInput | GroupCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ChurchCreateWithoutGroupTypesInput = {
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutChurchInput
    seniorPastor: SeniorPastorCreateNestedOneWithoutChurchesInput
  }

  export type ChurchUncheckedCreateWithoutGroupTypesInput = {
    id: string
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    seniorPastorId: string
    updatedAt?: Date | string
  }

  export type ChurchCreateOrConnectWithoutGroupTypesInput = {
    where: ChurchWhereUniqueInput
    create: XOR<ChurchCreateWithoutGroupTypesInput, ChurchUncheckedCreateWithoutGroupTypesInput>
  }

  export type SeniorPastorCreateWithoutGroupTypesInput = {
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutSeniorPastorInput
    churches?: ChurchCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorUncheckedCreateWithoutGroupTypesInput = {
    id: string
    updatedAt?: Date | string
    churches?: ChurchUncheckedCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorCreateOrConnectWithoutGroupTypesInput = {
    where: SeniorPastorWhereUniqueInput
    create: XOR<SeniorPastorCreateWithoutGroupTypesInput, SeniorPastorUncheckedCreateWithoutGroupTypesInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutTypeInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutTypeInput, GroupUncheckedUpdateWithoutTypeInput>
    create: XOR<GroupCreateWithoutTypeInput, GroupUncheckedCreateWithoutTypeInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutTypeInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutTypeInput, GroupUncheckedUpdateWithoutTypeInput>
  }

  export type GroupUpdateManyWithWhereWithoutTypeInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutTypeInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    groupTypeId?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type ChurchUpsertWithoutGroupTypesInput = {
    update: XOR<ChurchUpdateWithoutGroupTypesInput, ChurchUncheckedUpdateWithoutGroupTypesInput>
    create: XOR<ChurchCreateWithoutGroupTypesInput, ChurchUncheckedCreateWithoutGroupTypesInput>
    where?: ChurchWhereInput
  }

  export type ChurchUpdateToOneWithWhereWithoutGroupTypesInput = {
    where?: ChurchWhereInput
    data: XOR<ChurchUpdateWithoutGroupTypesInput, ChurchUncheckedUpdateWithoutGroupTypesInput>
  }

  export type ChurchUpdateWithoutGroupTypesInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutChurchNestedInput
    seniorPastor?: SeniorPastorUpdateOneRequiredWithoutChurchesNestedInput
  }

  export type ChurchUncheckedUpdateWithoutGroupTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeniorPastorUpsertWithoutGroupTypesInput = {
    update: XOR<SeniorPastorUpdateWithoutGroupTypesInput, SeniorPastorUncheckedUpdateWithoutGroupTypesInput>
    create: XOR<SeniorPastorCreateWithoutGroupTypesInput, SeniorPastorUncheckedCreateWithoutGroupTypesInput>
    where?: SeniorPastorWhereInput
  }

  export type SeniorPastorUpdateToOneWithWhereWithoutGroupTypesInput = {
    where?: SeniorPastorWhereInput
    data: XOR<SeniorPastorUpdateWithoutGroupTypesInput, SeniorPastorUncheckedUpdateWithoutGroupTypesInput>
  }

  export type SeniorPastorUpdateWithoutGroupTypesInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSeniorPastorNestedInput
    churches?: ChurchUpdateManyWithoutSeniorPastorNestedInput
  }

  export type SeniorPastorUncheckedUpdateWithoutGroupTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    churches?: ChurchUncheckedUpdateManyWithoutSeniorPastorNestedInput
  }

  export type GroupTypeCreateWithoutGroupsInput = {
    id?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    church: ChurchCreateNestedOneWithoutGroupTypesInput
    seniorPastor: SeniorPastorCreateNestedOneWithoutGroupTypesInput
  }

  export type GroupTypeUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    order: number
    churchId: string
    seniorPastorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupTypeCreateOrConnectWithoutGroupsInput = {
    where: GroupTypeWhereUniqueInput
    create: XOR<GroupTypeCreateWithoutGroupsInput, GroupTypeUncheckedCreateWithoutGroupsInput>
  }

  export type ChurchCreateWithoutGroupInput = {
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    updatedAt?: Date | string
    seniorPastor: SeniorPastorCreateNestedOneWithoutChurchesInput
    groupTypes?: GroupTypeCreateNestedManyWithoutChurchInput
  }

  export type ChurchUncheckedCreateWithoutGroupInput = {
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    seniorPastorId: string
    updatedAt?: Date | string
    groupTypes?: GroupTypeUncheckedCreateNestedManyWithoutChurchInput
  }

  export type ChurchCreateOrConnectWithoutGroupInput = {
    where: ChurchWhereUniqueInput
    create: XOR<ChurchCreateWithoutGroupInput, ChurchUncheckedCreateWithoutGroupInput>
  }

  export type SubGroupCreateWithoutGroupInput = {
    updatedAt?: Date | string
    parent?: SubGroupCreateNestedOneWithoutChildrenInput
    children?: SubGroupCreateNestedManyWithoutParentInput
    pastor?: PastorCreateNestedOneWithoutLedGroupsInput
    leader?: LeaderCreateNestedOneWithoutLeadGroupInput
    members?: PersonCreateNestedManyWithoutGroupInput
  }

  export type SubGroupUncheckedCreateWithoutGroupInput = {
    parentId?: string | null
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
    children?: SubGroupUncheckedCreateNestedManyWithoutParentInput
    members?: PersonUncheckedCreateNestedManyWithoutGroupInput
  }

  export type SubGroupCreateOrConnectWithoutGroupInput = {
    where: SubGroupWhereUniqueInput
    create: XOR<SubGroupCreateWithoutGroupInput, SubGroupUncheckedCreateWithoutGroupInput>
  }

  export type SubGroupCreateManyGroupInputEnvelope = {
    data: SubGroupCreateManyGroupInput | SubGroupCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupTypeUpsertWithoutGroupsInput = {
    update: XOR<GroupTypeUpdateWithoutGroupsInput, GroupTypeUncheckedUpdateWithoutGroupsInput>
    create: XOR<GroupTypeCreateWithoutGroupsInput, GroupTypeUncheckedCreateWithoutGroupsInput>
    where?: GroupTypeWhereInput
  }

  export type GroupTypeUpdateToOneWithWhereWithoutGroupsInput = {
    where?: GroupTypeWhereInput
    data: XOR<GroupTypeUpdateWithoutGroupsInput, GroupTypeUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupTypeUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    church?: ChurchUpdateOneRequiredWithoutGroupTypesNestedInput
    seniorPastor?: SeniorPastorUpdateOneRequiredWithoutGroupTypesNestedInput
  }

  export type GroupTypeUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    churchId?: StringFieldUpdateOperationsInput | string
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChurchUpsertWithoutGroupInput = {
    update: XOR<ChurchUpdateWithoutGroupInput, ChurchUncheckedUpdateWithoutGroupInput>
    create: XOR<ChurchCreateWithoutGroupInput, ChurchUncheckedCreateWithoutGroupInput>
    where?: ChurchWhereInput
  }

  export type ChurchUpdateToOneWithWhereWithoutGroupInput = {
    where?: ChurchWhereInput
    data: XOR<ChurchUpdateWithoutGroupInput, ChurchUncheckedUpdateWithoutGroupInput>
  }

  export type ChurchUpdateWithoutGroupInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorPastor?: SeniorPastorUpdateOneRequiredWithoutChurchesNestedInput
    groupTypes?: GroupTypeUpdateManyWithoutChurchNestedInput
  }

  export type ChurchUncheckedUpdateWithoutGroupInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupTypes?: GroupTypeUncheckedUpdateManyWithoutChurchNestedInput
  }

  export type SubGroupUpsertWithWhereUniqueWithoutGroupInput = {
    where: SubGroupWhereUniqueInput
    update: XOR<SubGroupUpdateWithoutGroupInput, SubGroupUncheckedUpdateWithoutGroupInput>
    create: XOR<SubGroupCreateWithoutGroupInput, SubGroupUncheckedCreateWithoutGroupInput>
  }

  export type SubGroupUpdateWithWhereUniqueWithoutGroupInput = {
    where: SubGroupWhereUniqueInput
    data: XOR<SubGroupUpdateWithoutGroupInput, SubGroupUncheckedUpdateWithoutGroupInput>
  }

  export type SubGroupUpdateManyWithWhereWithoutGroupInput = {
    where: SubGroupScalarWhereInput
    data: XOR<SubGroupUpdateManyMutationInput, SubGroupUncheckedUpdateManyWithoutGroupInput>
  }

  export type SubGroupScalarWhereInput = {
    AND?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
    OR?: SubGroupScalarWhereInput[]
    NOT?: SubGroupScalarWhereInput | SubGroupScalarWhereInput[]
    id?: StringFilter<"SubGroup"> | string
    parentId?: StringNullableFilter<"SubGroup"> | string | null
    pastorId?: StringNullableFilter<"SubGroup"> | string | null
    leaderId?: StringNullableFilter<"SubGroup"> | string | null
    updatedAt?: DateTimeFilter<"SubGroup"> | Date | string
  }

  export type GroupCreateWithoutChurchInput = {
    id?: string
    name: string
    createdAt?: Date | string
    type: GroupTypeCreateNestedOneWithoutGroupsInput
    subGroups?: SubGroupCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutChurchInput = {
    id?: string
    name: string
    groupTypeId: string
    createdAt?: Date | string
    subGroups?: SubGroupUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutChurchInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutChurchInput, GroupUncheckedCreateWithoutChurchInput>
  }

  export type SeniorPastorCreateWithoutChurchesInput = {
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutSeniorPastorInput
    groupTypes?: GroupTypeCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorUncheckedCreateWithoutChurchesInput = {
    id: string
    updatedAt?: Date | string
    groupTypes?: GroupTypeUncheckedCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorCreateOrConnectWithoutChurchesInput = {
    where: SeniorPastorWhereUniqueInput
    create: XOR<SeniorPastorCreateWithoutChurchesInput, SeniorPastorUncheckedCreateWithoutChurchesInput>
  }

  export type GroupTypeCreateWithoutChurchInput = {
    id?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutTypeInput
    seniorPastor: SeniorPastorCreateNestedOneWithoutGroupTypesInput
  }

  export type GroupTypeUncheckedCreateWithoutChurchInput = {
    id?: string
    name: string
    order: number
    seniorPastorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutTypeInput
  }

  export type GroupTypeCreateOrConnectWithoutChurchInput = {
    where: GroupTypeWhereUniqueInput
    create: XOR<GroupTypeCreateWithoutChurchInput, GroupTypeUncheckedCreateWithoutChurchInput>
  }

  export type GroupTypeCreateManyChurchInputEnvelope = {
    data: GroupTypeCreateManyChurchInput | GroupTypeCreateManyChurchInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutChurchInput = {
    update: XOR<GroupUpdateWithoutChurchInput, GroupUncheckedUpdateWithoutChurchInput>
    create: XOR<GroupCreateWithoutChurchInput, GroupUncheckedCreateWithoutChurchInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutChurchInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutChurchInput, GroupUncheckedUpdateWithoutChurchInput>
  }

  export type GroupUpdateWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: GroupTypeUpdateOneRequiredWithoutGroupsNestedInput
    subGroups?: SubGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subGroups?: SubGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SeniorPastorUpsertWithoutChurchesInput = {
    update: XOR<SeniorPastorUpdateWithoutChurchesInput, SeniorPastorUncheckedUpdateWithoutChurchesInput>
    create: XOR<SeniorPastorCreateWithoutChurchesInput, SeniorPastorUncheckedCreateWithoutChurchesInput>
    where?: SeniorPastorWhereInput
  }

  export type SeniorPastorUpdateToOneWithWhereWithoutChurchesInput = {
    where?: SeniorPastorWhereInput
    data: XOR<SeniorPastorUpdateWithoutChurchesInput, SeniorPastorUncheckedUpdateWithoutChurchesInput>
  }

  export type SeniorPastorUpdateWithoutChurchesInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutSeniorPastorNestedInput
    groupTypes?: GroupTypeUpdateManyWithoutSeniorPastorNestedInput
  }

  export type SeniorPastorUncheckedUpdateWithoutChurchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupTypes?: GroupTypeUncheckedUpdateManyWithoutSeniorPastorNestedInput
  }

  export type GroupTypeUpsertWithWhereUniqueWithoutChurchInput = {
    where: GroupTypeWhereUniqueInput
    update: XOR<GroupTypeUpdateWithoutChurchInput, GroupTypeUncheckedUpdateWithoutChurchInput>
    create: XOR<GroupTypeCreateWithoutChurchInput, GroupTypeUncheckedCreateWithoutChurchInput>
  }

  export type GroupTypeUpdateWithWhereUniqueWithoutChurchInput = {
    where: GroupTypeWhereUniqueInput
    data: XOR<GroupTypeUpdateWithoutChurchInput, GroupTypeUncheckedUpdateWithoutChurchInput>
  }

  export type GroupTypeUpdateManyWithWhereWithoutChurchInput = {
    where: GroupTypeScalarWhereInput
    data: XOR<GroupTypeUpdateManyMutationInput, GroupTypeUncheckedUpdateManyWithoutChurchInput>
  }

  export type GroupTypeScalarWhereInput = {
    AND?: GroupTypeScalarWhereInput | GroupTypeScalarWhereInput[]
    OR?: GroupTypeScalarWhereInput[]
    NOT?: GroupTypeScalarWhereInput | GroupTypeScalarWhereInput[]
    id?: StringFilter<"GroupType"> | string
    name?: StringFilter<"GroupType"> | string
    order?: IntFilter<"GroupType"> | number
    churchId?: StringFilter<"GroupType"> | string
    seniorPastorId?: StringFilter<"GroupType"> | string
    createdAt?: DateTimeFilter<"GroupType"> | Date | string
    updatedAt?: DateTimeFilter<"GroupType"> | Date | string
  }

  export type GroupCreateWithoutSubGroupsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    type: GroupTypeCreateNestedOneWithoutGroupsInput
    church?: ChurchCreateNestedOneWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutSubGroupsInput = {
    id?: string
    name: string
    groupTypeId: string
    createdAt?: Date | string
    church?: ChurchUncheckedCreateNestedOneWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutSubGroupsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutSubGroupsInput, GroupUncheckedCreateWithoutSubGroupsInput>
  }

  export type SubGroupCreateWithoutChildrenInput = {
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutSubGroupsInput
    parent?: SubGroupCreateNestedOneWithoutChildrenInput
    pastor?: PastorCreateNestedOneWithoutLedGroupsInput
    leader?: LeaderCreateNestedOneWithoutLeadGroupInput
    members?: PersonCreateNestedManyWithoutGroupInput
  }

  export type SubGroupUncheckedCreateWithoutChildrenInput = {
    id: string
    parentId?: string | null
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
    members?: PersonUncheckedCreateNestedManyWithoutGroupInput
  }

  export type SubGroupCreateOrConnectWithoutChildrenInput = {
    where: SubGroupWhereUniqueInput
    create: XOR<SubGroupCreateWithoutChildrenInput, SubGroupUncheckedCreateWithoutChildrenInput>
  }

  export type SubGroupCreateWithoutParentInput = {
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutSubGroupsInput
    children?: SubGroupCreateNestedManyWithoutParentInput
    pastor?: PastorCreateNestedOneWithoutLedGroupsInput
    leader?: LeaderCreateNestedOneWithoutLeadGroupInput
    members?: PersonCreateNestedManyWithoutGroupInput
  }

  export type SubGroupUncheckedCreateWithoutParentInput = {
    id: string
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
    children?: SubGroupUncheckedCreateNestedManyWithoutParentInput
    members?: PersonUncheckedCreateNestedManyWithoutGroupInput
  }

  export type SubGroupCreateOrConnectWithoutParentInput = {
    where: SubGroupWhereUniqueInput
    create: XOR<SubGroupCreateWithoutParentInput, SubGroupUncheckedCreateWithoutParentInput>
  }

  export type SubGroupCreateManyParentInputEnvelope = {
    data: SubGroupCreateManyParentInput | SubGroupCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PastorCreateWithoutLedGroupsInput = {
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutPastorInput
  }

  export type PastorUncheckedCreateWithoutLedGroupsInput = {
    id: string
    updatedAt?: Date | string
  }

  export type PastorCreateOrConnectWithoutLedGroupsInput = {
    where: PastorWhereUniqueInput
    create: XOR<PastorCreateWithoutLedGroupsInput, PastorUncheckedCreateWithoutLedGroupsInput>
  }

  export type LeaderCreateWithoutLeadGroupInput = {
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutLeaderInput
  }

  export type LeaderUncheckedCreateWithoutLeadGroupInput = {
    id: string
    updatedAt?: Date | string
  }

  export type LeaderCreateOrConnectWithoutLeadGroupInput = {
    where: LeaderWhereUniqueInput
    create: XOR<LeaderCreateWithoutLeadGroupInput, LeaderUncheckedCreateWithoutLeadGroupInput>
  }

  export type PersonCreateWithoutGroupInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutGroupInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutGroupInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutGroupInput, PersonUncheckedCreateWithoutGroupInput>
  }

  export type PersonCreateManyGroupInputEnvelope = {
    data: PersonCreateManyGroupInput | PersonCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutSubGroupsInput = {
    update: XOR<GroupUpdateWithoutSubGroupsInput, GroupUncheckedUpdateWithoutSubGroupsInput>
    create: XOR<GroupCreateWithoutSubGroupsInput, GroupUncheckedCreateWithoutSubGroupsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutSubGroupsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutSubGroupsInput, GroupUncheckedUpdateWithoutSubGroupsInput>
  }

  export type GroupUpdateWithoutSubGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: GroupTypeUpdateOneRequiredWithoutGroupsNestedInput
    church?: ChurchUpdateOneWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutSubGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groupTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    church?: ChurchUncheckedUpdateOneWithoutGroupNestedInput
  }

  export type SubGroupUpsertWithoutChildrenInput = {
    update: XOR<SubGroupUpdateWithoutChildrenInput, SubGroupUncheckedUpdateWithoutChildrenInput>
    create: XOR<SubGroupCreateWithoutChildrenInput, SubGroupUncheckedCreateWithoutChildrenInput>
    where?: SubGroupWhereInput
  }

  export type SubGroupUpdateToOneWithWhereWithoutChildrenInput = {
    where?: SubGroupWhereInput
    data: XOR<SubGroupUpdateWithoutChildrenInput, SubGroupUncheckedUpdateWithoutChildrenInput>
  }

  export type SubGroupUpdateWithoutChildrenInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSubGroupsNestedInput
    parent?: SubGroupUpdateOneWithoutChildrenNestedInput
    pastor?: PastorUpdateOneWithoutLedGroupsNestedInput
    leader?: LeaderUpdateOneWithoutLeadGroupNestedInput
    members?: PersonUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: PersonUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUpsertWithWhereUniqueWithoutParentInput = {
    where: SubGroupWhereUniqueInput
    update: XOR<SubGroupUpdateWithoutParentInput, SubGroupUncheckedUpdateWithoutParentInput>
    create: XOR<SubGroupCreateWithoutParentInput, SubGroupUncheckedCreateWithoutParentInput>
  }

  export type SubGroupUpdateWithWhereUniqueWithoutParentInput = {
    where: SubGroupWhereUniqueInput
    data: XOR<SubGroupUpdateWithoutParentInput, SubGroupUncheckedUpdateWithoutParentInput>
  }

  export type SubGroupUpdateManyWithWhereWithoutParentInput = {
    where: SubGroupScalarWhereInput
    data: XOR<SubGroupUpdateManyMutationInput, SubGroupUncheckedUpdateManyWithoutParentInput>
  }

  export type PastorUpsertWithoutLedGroupsInput = {
    update: XOR<PastorUpdateWithoutLedGroupsInput, PastorUncheckedUpdateWithoutLedGroupsInput>
    create: XOR<PastorCreateWithoutLedGroupsInput, PastorUncheckedCreateWithoutLedGroupsInput>
    where?: PastorWhereInput
  }

  export type PastorUpdateToOneWithWhereWithoutLedGroupsInput = {
    where?: PastorWhereInput
    data: XOR<PastorUpdateWithoutLedGroupsInput, PastorUncheckedUpdateWithoutLedGroupsInput>
  }

  export type PastorUpdateWithoutLedGroupsInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutPastorNestedInput
  }

  export type PastorUncheckedUpdateWithoutLedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderUpsertWithoutLeadGroupInput = {
    update: XOR<LeaderUpdateWithoutLeadGroupInput, LeaderUncheckedUpdateWithoutLeadGroupInput>
    create: XOR<LeaderCreateWithoutLeadGroupInput, LeaderUncheckedCreateWithoutLeadGroupInput>
    where?: LeaderWhereInput
  }

  export type LeaderUpdateToOneWithWhereWithoutLeadGroupInput = {
    where?: LeaderWhereInput
    data: XOR<LeaderUpdateWithoutLeadGroupInput, LeaderUncheckedUpdateWithoutLeadGroupInput>
  }

  export type LeaderUpdateWithoutLeadGroupInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutLeaderNestedInput
  }

  export type LeaderUncheckedUpdateWithoutLeadGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpsertWithWhereUniqueWithoutGroupInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutGroupInput, PersonUncheckedUpdateWithoutGroupInput>
    create: XOR<PersonCreateWithoutGroupInput, PersonUncheckedCreateWithoutGroupInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutGroupInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutGroupInput, PersonUncheckedUpdateWithoutGroupInput>
  }

  export type PersonUpdateManyWithWhereWithoutGroupInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutGroupInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: StringFilter<"Person"> | string
    firstName?: StringFilter<"Person"> | string
    lastName?: StringFilter<"Person"> | string
    gender?: BoolFilter<"Person"> | boolean
    phone?: StringFilter<"Person"> | string
    kakaoAccount?: StringNullableFilter<"Person"> | string | null
    bod?: DateTimeNullableFilter<"Person"> | Date | string | null
    address?: StringNullableFilter<"Person"> | string | null
    profileImgUrl?: StringNullableFilter<"Person"> | string | null
    occupation?: StringNullableFilter<"Person"> | string | null
    visaType?: EnumVisaTypeNullableFilter<"Person"> | $Enums.VisaType | null
    assignedAt?: DateTimeFilter<"Person"> | Date | string
    role?: EnumRoleFilter<"Person"> | $Enums.Role
    hasBaptized?: BoolFilter<"Person"> | boolean
    note?: StringNullableFilter<"Person"> | string | null
    userId?: StringNullableFilter<"Person"> | string | null
    groupId?: StringFilter<"Person"> | string
    createdAt?: DateTimeFilter<"Person"> | Date | string
  }

  export type PersonCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    group?: SubGroupCreateNestedOneWithoutMembersInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    groupId: string
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutUserInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
  }

  export type PersonUpsertWithoutUserInput = {
    update: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
    create: XOR<PersonCreateWithoutUserInput, PersonUncheckedCreateWithoutUserInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutUserInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutUserInput, PersonUncheckedUpdateWithoutUserInput>
  }

  export type PersonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type UserCreateWithoutPersonInput = {
    id?: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPersonInput = {
    id?: string
    email: string
    hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPersonInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
  }

  export type SubGroupCreateWithoutMembersInput = {
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutSubGroupsInput
    parent?: SubGroupCreateNestedOneWithoutChildrenInput
    children?: SubGroupCreateNestedManyWithoutParentInput
    pastor?: PastorCreateNestedOneWithoutLedGroupsInput
    leader?: LeaderCreateNestedOneWithoutLeadGroupInput
  }

  export type SubGroupUncheckedCreateWithoutMembersInput = {
    id: string
    parentId?: string | null
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
    children?: SubGroupUncheckedCreateNestedManyWithoutParentInput
  }

  export type SubGroupCreateOrConnectWithoutMembersInput = {
    where: SubGroupWhereUniqueInput
    create: XOR<SubGroupCreateWithoutMembersInput, SubGroupUncheckedCreateWithoutMembersInput>
  }

  export type NewcomerCreateWithoutInviterInput = {
    type?: $Enums.PersonType
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutNewcomerInput
  }

  export type NewcomerUncheckedCreateWithoutInviterInput = {
    id: string
    type?: $Enums.PersonType
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
  }

  export type NewcomerCreateOrConnectWithoutInviterInput = {
    where: NewcomerWhereUniqueInput
    create: XOR<NewcomerCreateWithoutInviterInput, NewcomerUncheckedCreateWithoutInviterInput>
  }

  export type NewcomerCreateManyInviterInputEnvelope = {
    data: NewcomerCreateManyInviterInput | NewcomerCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type SeniorPastorCreateWithoutPersonInput = {
    updatedAt?: Date | string
    churches?: ChurchCreateNestedManyWithoutSeniorPastorInput
    groupTypes?: GroupTypeCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorUncheckedCreateWithoutPersonInput = {
    updatedAt?: Date | string
    churches?: ChurchUncheckedCreateNestedManyWithoutSeniorPastorInput
    groupTypes?: GroupTypeUncheckedCreateNestedManyWithoutSeniorPastorInput
  }

  export type SeniorPastorCreateOrConnectWithoutPersonInput = {
    where: SeniorPastorWhereUniqueInput
    create: XOR<SeniorPastorCreateWithoutPersonInput, SeniorPastorUncheckedCreateWithoutPersonInput>
  }

  export type PastorCreateWithoutPersonInput = {
    updatedAt?: Date | string
    ledGroups?: SubGroupCreateNestedManyWithoutPastorInput
  }

  export type PastorUncheckedCreateWithoutPersonInput = {
    updatedAt?: Date | string
    ledGroups?: SubGroupUncheckedCreateNestedManyWithoutPastorInput
  }

  export type PastorCreateOrConnectWithoutPersonInput = {
    where: PastorWhereUniqueInput
    create: XOR<PastorCreateWithoutPersonInput, PastorUncheckedCreateWithoutPersonInput>
  }

  export type LeaderCreateWithoutPersonInput = {
    updatedAt?: Date | string
    leadGroup?: SubGroupCreateNestedOneWithoutLeaderInput
  }

  export type LeaderUncheckedCreateWithoutPersonInput = {
    updatedAt?: Date | string
    leadGroup?: SubGroupUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type LeaderCreateOrConnectWithoutPersonInput = {
    where: LeaderWhereUniqueInput
    create: XOR<LeaderCreateWithoutPersonInput, LeaderUncheckedCreateWithoutPersonInput>
  }

  export type MemberCreateWithoutPersonInput = {
    type?: $Enums.PersonType
    updatedAt?: Date | string
  }

  export type MemberUncheckedCreateWithoutPersonInput = {
    type?: $Enums.PersonType
    updatedAt?: Date | string
  }

  export type MemberCreateOrConnectWithoutPersonInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPersonInput, MemberUncheckedCreateWithoutPersonInput>
  }

  export type NewcomerCreateWithoutPersonInput = {
    type?: $Enums.PersonType
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
    inviter?: PersonCreateNestedOneWithoutInvitedNewcomersInput
  }

  export type NewcomerUncheckedCreateWithoutPersonInput = {
    type?: $Enums.PersonType
    inviterId?: string | null
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
  }

  export type NewcomerCreateOrConnectWithoutPersonInput = {
    where: NewcomerWhereUniqueInput
    create: XOR<NewcomerCreateWithoutPersonInput, NewcomerUncheckedCreateWithoutPersonInput>
  }

  export type UserUpsertWithoutPersonInput = {
    update: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
    create: XOR<UserCreateWithoutPersonInput, UserUncheckedCreateWithoutPersonInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonInput, UserUncheckedUpdateWithoutPersonInput>
  }

  export type UserUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupUpsertWithoutMembersInput = {
    update: XOR<SubGroupUpdateWithoutMembersInput, SubGroupUncheckedUpdateWithoutMembersInput>
    create: XOR<SubGroupCreateWithoutMembersInput, SubGroupUncheckedCreateWithoutMembersInput>
    where?: SubGroupWhereInput
  }

  export type SubGroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: SubGroupWhereInput
    data: XOR<SubGroupUpdateWithoutMembersInput, SubGroupUncheckedUpdateWithoutMembersInput>
  }

  export type SubGroupUpdateWithoutMembersInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSubGroupsNestedInput
    parent?: SubGroupUpdateOneWithoutChildrenNestedInput
    children?: SubGroupUpdateManyWithoutParentNestedInput
    pastor?: PastorUpdateOneWithoutLedGroupsNestedInput
    leader?: LeaderUpdateOneWithoutLeadGroupNestedInput
  }

  export type SubGroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SubGroupUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NewcomerUpsertWithWhereUniqueWithoutInviterInput = {
    where: NewcomerWhereUniqueInput
    update: XOR<NewcomerUpdateWithoutInviterInput, NewcomerUncheckedUpdateWithoutInviterInput>
    create: XOR<NewcomerCreateWithoutInviterInput, NewcomerUncheckedCreateWithoutInviterInput>
  }

  export type NewcomerUpdateWithWhereUniqueWithoutInviterInput = {
    where: NewcomerWhereUniqueInput
    data: XOR<NewcomerUpdateWithoutInviterInput, NewcomerUncheckedUpdateWithoutInviterInput>
  }

  export type NewcomerUpdateManyWithWhereWithoutInviterInput = {
    where: NewcomerScalarWhereInput
    data: XOR<NewcomerUpdateManyMutationInput, NewcomerUncheckedUpdateManyWithoutInviterInput>
  }

  export type NewcomerScalarWhereInput = {
    AND?: NewcomerScalarWhereInput | NewcomerScalarWhereInput[]
    OR?: NewcomerScalarWhereInput[]
    NOT?: NewcomerScalarWhereInput | NewcomerScalarWhereInput[]
    id?: StringFilter<"Newcomer"> | string
    type?: EnumPersonTypeFilter<"Newcomer"> | $Enums.PersonType
    inviterId?: StringNullableFilter<"Newcomer"> | string | null
    prevChurch?: StringNullableFilter<"Newcomer"> | string | null
    prevServedPart?: StringNullableFilter<"Newcomer"> | string | null
    processStatus?: EnumProcessStatusFilter<"Newcomer"> | $Enums.ProcessStatus
    updatedAt?: DateTimeFilter<"Newcomer"> | Date | string
  }

  export type SeniorPastorUpsertWithoutPersonInput = {
    update: XOR<SeniorPastorUpdateWithoutPersonInput, SeniorPastorUncheckedUpdateWithoutPersonInput>
    create: XOR<SeniorPastorCreateWithoutPersonInput, SeniorPastorUncheckedCreateWithoutPersonInput>
    where?: SeniorPastorWhereInput
  }

  export type SeniorPastorUpdateToOneWithWhereWithoutPersonInput = {
    where?: SeniorPastorWhereInput
    data: XOR<SeniorPastorUpdateWithoutPersonInput, SeniorPastorUncheckedUpdateWithoutPersonInput>
  }

  export type SeniorPastorUpdateWithoutPersonInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    churches?: ChurchUpdateManyWithoutSeniorPastorNestedInput
    groupTypes?: GroupTypeUpdateManyWithoutSeniorPastorNestedInput
  }

  export type SeniorPastorUncheckedUpdateWithoutPersonInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    churches?: ChurchUncheckedUpdateManyWithoutSeniorPastorNestedInput
    groupTypes?: GroupTypeUncheckedUpdateManyWithoutSeniorPastorNestedInput
  }

  export type PastorUpsertWithoutPersonInput = {
    update: XOR<PastorUpdateWithoutPersonInput, PastorUncheckedUpdateWithoutPersonInput>
    create: XOR<PastorCreateWithoutPersonInput, PastorUncheckedCreateWithoutPersonInput>
    where?: PastorWhereInput
  }

  export type PastorUpdateToOneWithWhereWithoutPersonInput = {
    where?: PastorWhereInput
    data: XOR<PastorUpdateWithoutPersonInput, PastorUncheckedUpdateWithoutPersonInput>
  }

  export type PastorUpdateWithoutPersonInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: SubGroupUpdateManyWithoutPastorNestedInput
  }

  export type PastorUncheckedUpdateWithoutPersonInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledGroups?: SubGroupUncheckedUpdateManyWithoutPastorNestedInput
  }

  export type LeaderUpsertWithoutPersonInput = {
    update: XOR<LeaderUpdateWithoutPersonInput, LeaderUncheckedUpdateWithoutPersonInput>
    create: XOR<LeaderCreateWithoutPersonInput, LeaderUncheckedCreateWithoutPersonInput>
    where?: LeaderWhereInput
  }

  export type LeaderUpdateToOneWithWhereWithoutPersonInput = {
    where?: LeaderWhereInput
    data: XOR<LeaderUpdateWithoutPersonInput, LeaderUncheckedUpdateWithoutPersonInput>
  }

  export type LeaderUpdateWithoutPersonInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadGroup?: SubGroupUpdateOneWithoutLeaderNestedInput
  }

  export type LeaderUncheckedUpdateWithoutPersonInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadGroup?: SubGroupUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type MemberUpsertWithoutPersonInput = {
    update: XOR<MemberUpdateWithoutPersonInput, MemberUncheckedUpdateWithoutPersonInput>
    create: XOR<MemberCreateWithoutPersonInput, MemberUncheckedCreateWithoutPersonInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutPersonInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutPersonInput, MemberUncheckedUpdateWithoutPersonInput>
  }

  export type MemberUpdateWithoutPersonInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateWithoutPersonInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewcomerUpsertWithoutPersonInput = {
    update: XOR<NewcomerUpdateWithoutPersonInput, NewcomerUncheckedUpdateWithoutPersonInput>
    create: XOR<NewcomerCreateWithoutPersonInput, NewcomerUncheckedCreateWithoutPersonInput>
    where?: NewcomerWhereInput
  }

  export type NewcomerUpdateToOneWithWhereWithoutPersonInput = {
    where?: NewcomerWhereInput
    data: XOR<NewcomerUpdateWithoutPersonInput, NewcomerUncheckedUpdateWithoutPersonInput>
  }

  export type NewcomerUpdateWithoutPersonInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: PersonUpdateOneWithoutInvitedNewcomersNestedInput
  }

  export type NewcomerUncheckedUpdateWithoutPersonInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    inviterId?: NullableStringFieldUpdateOperationsInput | string | null
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateWithoutSeniorPastorInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    group?: SubGroupCreateNestedOneWithoutMembersInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutSeniorPastorInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutSeniorPastorInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutSeniorPastorInput, PersonUncheckedCreateWithoutSeniorPastorInput>
  }

  export type ChurchCreateWithoutSeniorPastorInput = {
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutChurchInput
    groupTypes?: GroupTypeCreateNestedManyWithoutChurchInput
  }

  export type ChurchUncheckedCreateWithoutSeniorPastorInput = {
    id: string
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    updatedAt?: Date | string
    groupTypes?: GroupTypeUncheckedCreateNestedManyWithoutChurchInput
  }

  export type ChurchCreateOrConnectWithoutSeniorPastorInput = {
    where: ChurchWhereUniqueInput
    create: XOR<ChurchCreateWithoutSeniorPastorInput, ChurchUncheckedCreateWithoutSeniorPastorInput>
  }

  export type ChurchCreateManySeniorPastorInputEnvelope = {
    data: ChurchCreateManySeniorPastorInput | ChurchCreateManySeniorPastorInput[]
    skipDuplicates?: boolean
  }

  export type GroupTypeCreateWithoutSeniorPastorInput = {
    id?: string
    name: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutTypeInput
    church: ChurchCreateNestedOneWithoutGroupTypesInput
  }

  export type GroupTypeUncheckedCreateWithoutSeniorPastorInput = {
    id?: string
    name: string
    order: number
    churchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutTypeInput
  }

  export type GroupTypeCreateOrConnectWithoutSeniorPastorInput = {
    where: GroupTypeWhereUniqueInput
    create: XOR<GroupTypeCreateWithoutSeniorPastorInput, GroupTypeUncheckedCreateWithoutSeniorPastorInput>
  }

  export type GroupTypeCreateManySeniorPastorInputEnvelope = {
    data: GroupTypeCreateManySeniorPastorInput | GroupTypeCreateManySeniorPastorInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutSeniorPastorInput = {
    update: XOR<PersonUpdateWithoutSeniorPastorInput, PersonUncheckedUpdateWithoutSeniorPastorInput>
    create: XOR<PersonCreateWithoutSeniorPastorInput, PersonUncheckedCreateWithoutSeniorPastorInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutSeniorPastorInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutSeniorPastorInput, PersonUncheckedUpdateWithoutSeniorPastorInput>
  }

  export type PersonUpdateWithoutSeniorPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutSeniorPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type ChurchUpsertWithWhereUniqueWithoutSeniorPastorInput = {
    where: ChurchWhereUniqueInput
    update: XOR<ChurchUpdateWithoutSeniorPastorInput, ChurchUncheckedUpdateWithoutSeniorPastorInput>
    create: XOR<ChurchCreateWithoutSeniorPastorInput, ChurchUncheckedCreateWithoutSeniorPastorInput>
  }

  export type ChurchUpdateWithWhereUniqueWithoutSeniorPastorInput = {
    where: ChurchWhereUniqueInput
    data: XOR<ChurchUpdateWithoutSeniorPastorInput, ChurchUncheckedUpdateWithoutSeniorPastorInput>
  }

  export type ChurchUpdateManyWithWhereWithoutSeniorPastorInput = {
    where: ChurchScalarWhereInput
    data: XOR<ChurchUpdateManyMutationInput, ChurchUncheckedUpdateManyWithoutSeniorPastorInput>
  }

  export type ChurchScalarWhereInput = {
    AND?: ChurchScalarWhereInput | ChurchScalarWhereInput[]
    OR?: ChurchScalarWhereInput[]
    NOT?: ChurchScalarWhereInput | ChurchScalarWhereInput[]
    id?: StringFilter<"Church"> | string
    address?: StringNullableFilter<"Church"> | string | null
    phone?: StringNullableFilter<"Church"> | string | null
    estDate?: DateTimeNullableFilter<"Church"> | Date | string | null
    seniorPastorId?: StringFilter<"Church"> | string
    updatedAt?: DateTimeFilter<"Church"> | Date | string
  }

  export type GroupTypeUpsertWithWhereUniqueWithoutSeniorPastorInput = {
    where: GroupTypeWhereUniqueInput
    update: XOR<GroupTypeUpdateWithoutSeniorPastorInput, GroupTypeUncheckedUpdateWithoutSeniorPastorInput>
    create: XOR<GroupTypeCreateWithoutSeniorPastorInput, GroupTypeUncheckedCreateWithoutSeniorPastorInput>
  }

  export type GroupTypeUpdateWithWhereUniqueWithoutSeniorPastorInput = {
    where: GroupTypeWhereUniqueInput
    data: XOR<GroupTypeUpdateWithoutSeniorPastorInput, GroupTypeUncheckedUpdateWithoutSeniorPastorInput>
  }

  export type GroupTypeUpdateManyWithWhereWithoutSeniorPastorInput = {
    where: GroupTypeScalarWhereInput
    data: XOR<GroupTypeUpdateManyMutationInput, GroupTypeUncheckedUpdateManyWithoutSeniorPastorInput>
  }

  export type PersonCreateWithoutPastorInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    group?: SubGroupCreateNestedOneWithoutMembersInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutPastorInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutPastorInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPastorInput, PersonUncheckedCreateWithoutPastorInput>
  }

  export type SubGroupCreateWithoutPastorInput = {
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutSubGroupsInput
    parent?: SubGroupCreateNestedOneWithoutChildrenInput
    children?: SubGroupCreateNestedManyWithoutParentInput
    leader?: LeaderCreateNestedOneWithoutLeadGroupInput
    members?: PersonCreateNestedManyWithoutGroupInput
  }

  export type SubGroupUncheckedCreateWithoutPastorInput = {
    id: string
    parentId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
    children?: SubGroupUncheckedCreateNestedManyWithoutParentInput
    members?: PersonUncheckedCreateNestedManyWithoutGroupInput
  }

  export type SubGroupCreateOrConnectWithoutPastorInput = {
    where: SubGroupWhereUniqueInput
    create: XOR<SubGroupCreateWithoutPastorInput, SubGroupUncheckedCreateWithoutPastorInput>
  }

  export type SubGroupCreateManyPastorInputEnvelope = {
    data: SubGroupCreateManyPastorInput | SubGroupCreateManyPastorInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutPastorInput = {
    update: XOR<PersonUpdateWithoutPastorInput, PersonUncheckedUpdateWithoutPastorInput>
    create: XOR<PersonCreateWithoutPastorInput, PersonUncheckedCreateWithoutPastorInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPastorInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPastorInput, PersonUncheckedUpdateWithoutPastorInput>
  }

  export type PersonUpdateWithoutPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type SubGroupUpsertWithWhereUniqueWithoutPastorInput = {
    where: SubGroupWhereUniqueInput
    update: XOR<SubGroupUpdateWithoutPastorInput, SubGroupUncheckedUpdateWithoutPastorInput>
    create: XOR<SubGroupCreateWithoutPastorInput, SubGroupUncheckedCreateWithoutPastorInput>
  }

  export type SubGroupUpdateWithWhereUniqueWithoutPastorInput = {
    where: SubGroupWhereUniqueInput
    data: XOR<SubGroupUpdateWithoutPastorInput, SubGroupUncheckedUpdateWithoutPastorInput>
  }

  export type SubGroupUpdateManyWithWhereWithoutPastorInput = {
    where: SubGroupScalarWhereInput
    data: XOR<SubGroupUpdateManyMutationInput, SubGroupUncheckedUpdateManyWithoutPastorInput>
  }

  export type PersonCreateWithoutLeaderInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    group?: SubGroupCreateNestedOneWithoutMembersInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutLeaderInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutLeaderInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutLeaderInput, PersonUncheckedCreateWithoutLeaderInput>
  }

  export type SubGroupCreateWithoutLeaderInput = {
    updatedAt?: Date | string
    group: GroupCreateNestedOneWithoutSubGroupsInput
    parent?: SubGroupCreateNestedOneWithoutChildrenInput
    children?: SubGroupCreateNestedManyWithoutParentInput
    pastor?: PastorCreateNestedOneWithoutLedGroupsInput
    members?: PersonCreateNestedManyWithoutGroupInput
  }

  export type SubGroupUncheckedCreateWithoutLeaderInput = {
    id: string
    parentId?: string | null
    pastorId?: string | null
    updatedAt?: Date | string
    children?: SubGroupUncheckedCreateNestedManyWithoutParentInput
    members?: PersonUncheckedCreateNestedManyWithoutGroupInput
  }

  export type SubGroupCreateOrConnectWithoutLeaderInput = {
    where: SubGroupWhereUniqueInput
    create: XOR<SubGroupCreateWithoutLeaderInput, SubGroupUncheckedCreateWithoutLeaderInput>
  }

  export type PersonUpsertWithoutLeaderInput = {
    update: XOR<PersonUpdateWithoutLeaderInput, PersonUncheckedUpdateWithoutLeaderInput>
    create: XOR<PersonCreateWithoutLeaderInput, PersonUncheckedCreateWithoutLeaderInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutLeaderInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutLeaderInput, PersonUncheckedUpdateWithoutLeaderInput>
  }

  export type PersonUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type SubGroupUpsertWithoutLeaderInput = {
    update: XOR<SubGroupUpdateWithoutLeaderInput, SubGroupUncheckedUpdateWithoutLeaderInput>
    create: XOR<SubGroupCreateWithoutLeaderInput, SubGroupUncheckedCreateWithoutLeaderInput>
    where?: SubGroupWhereInput
  }

  export type SubGroupUpdateToOneWithWhereWithoutLeaderInput = {
    where?: SubGroupWhereInput
    data: XOR<SubGroupUpdateWithoutLeaderInput, SubGroupUncheckedUpdateWithoutLeaderInput>
  }

  export type SubGroupUpdateWithoutLeaderInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSubGroupsNestedInput
    parent?: SubGroupUpdateOneWithoutChildrenNestedInput
    children?: SubGroupUpdateManyWithoutParentNestedInput
    pastor?: PastorUpdateOneWithoutLedGroupsNestedInput
    members?: PersonUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SubGroupUncheckedUpdateManyWithoutParentNestedInput
    members?: PersonUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type PersonCreateWithoutMemberInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    group?: SubGroupCreateNestedOneWithoutMembersInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutMemberInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutMemberInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutMemberInput, PersonUncheckedCreateWithoutMemberInput>
  }

  export type PersonUpsertWithoutMemberInput = {
    update: XOR<PersonUpdateWithoutMemberInput, PersonUncheckedUpdateWithoutMemberInput>
    create: XOR<PersonCreateWithoutMemberInput, PersonUncheckedCreateWithoutMemberInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutMemberInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutMemberInput, PersonUncheckedUpdateWithoutMemberInput>
  }

  export type PersonUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type PersonCreateWithoutNewcomerInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    group?: SubGroupCreateNestedOneWithoutMembersInput
    invitedNewcomers?: NewcomerCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutNewcomerInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
    invitedNewcomers?: NewcomerUncheckedCreateNestedManyWithoutInviterInput
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutNewcomerInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutNewcomerInput, PersonUncheckedCreateWithoutNewcomerInput>
  }

  export type PersonCreateWithoutInvitedNewcomersInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPersonInput
    group?: SubGroupCreateNestedOneWithoutMembersInput
    seniorPastor?: SeniorPastorCreateNestedOneWithoutPersonInput
    pastor?: PastorCreateNestedOneWithoutPersonInput
    leader?: LeaderCreateNestedOneWithoutPersonInput
    member?: MemberCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerCreateNestedOneWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutInvitedNewcomersInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    groupId: string
    createdAt?: Date | string
    seniorPastor?: SeniorPastorUncheckedCreateNestedOneWithoutPersonInput
    pastor?: PastorUncheckedCreateNestedOneWithoutPersonInput
    leader?: LeaderUncheckedCreateNestedOneWithoutPersonInput
    member?: MemberUncheckedCreateNestedOneWithoutPersonInput
    newcomer?: NewcomerUncheckedCreateNestedOneWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutInvitedNewcomersInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutInvitedNewcomersInput, PersonUncheckedCreateWithoutInvitedNewcomersInput>
  }

  export type PersonUpsertWithoutNewcomerInput = {
    update: XOR<PersonUpdateWithoutNewcomerInput, PersonUncheckedUpdateWithoutNewcomerInput>
    create: XOR<PersonCreateWithoutNewcomerInput, PersonUncheckedCreateWithoutNewcomerInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutNewcomerInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutNewcomerInput, PersonUncheckedUpdateWithoutNewcomerInput>
  }

  export type PersonUpdateWithoutNewcomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutNewcomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type PersonUpsertWithoutInvitedNewcomersInput = {
    update: XOR<PersonUpdateWithoutInvitedNewcomersInput, PersonUncheckedUpdateWithoutInvitedNewcomersInput>
    create: XOR<PersonCreateWithoutInvitedNewcomersInput, PersonUncheckedCreateWithoutInvitedNewcomersInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutInvitedNewcomersInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutInvitedNewcomersInput, PersonUncheckedUpdateWithoutInvitedNewcomersInput>
  }

  export type PersonUpdateWithoutInvitedNewcomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    group?: SubGroupUpdateOneWithoutMembersNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutInvitedNewcomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type GroupCreateManyTypeInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type GroupUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    church?: ChurchUpdateOneWithoutGroupNestedInput
    subGroups?: SubGroupUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    church?: ChurchUncheckedUpdateOneWithoutGroupNestedInput
    subGroups?: SubGroupUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupCreateManyGroupInput = {
    parentId?: string | null
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
  }

  export type SubGroupUpdateWithoutGroupInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: SubGroupUpdateOneWithoutChildrenNestedInput
    children?: SubGroupUpdateManyWithoutParentNestedInput
    pastor?: PastorUpdateOneWithoutLedGroupsNestedInput
    leader?: LeaderUpdateOneWithoutLeadGroupNestedInput
    members?: PersonUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateWithoutGroupInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SubGroupUncheckedUpdateManyWithoutParentNestedInput
    members?: PersonUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateManyWithoutGroupInput = {
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTypeCreateManyChurchInput = {
    id?: string
    name: string
    order: number
    seniorPastorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupTypeUpdateWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutTypeNestedInput
    seniorPastor?: SeniorPastorUpdateOneRequiredWithoutGroupTypesNestedInput
  }

  export type GroupTypeUncheckedUpdateWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type GroupTypeUncheckedUpdateManyWithoutChurchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    seniorPastorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupCreateManyParentInput = {
    id: string
    pastorId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
  }

  export type PersonCreateManyGroupInput = {
    id?: string
    firstName: string
    lastName: string
    gender?: boolean
    phone: string
    kakaoAccount?: string | null
    bod?: Date | string | null
    address?: string | null
    profileImgUrl?: string | null
    occupation?: string | null
    visaType?: $Enums.VisaType | null
    assignedAt?: Date | string
    role?: $Enums.Role
    hasBaptized?: boolean
    note?: string | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type SubGroupUpdateWithoutParentInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSubGroupsNestedInput
    children?: SubGroupUpdateManyWithoutParentNestedInput
    pastor?: PastorUpdateOneWithoutLedGroupsNestedInput
    leader?: LeaderUpdateOneWithoutLeadGroupNestedInput
    members?: PersonUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SubGroupUncheckedUpdateManyWithoutParentNestedInput
    members?: PersonUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    pastorId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPersonNestedInput
    invitedNewcomers?: NewcomerUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUpdateOneWithoutPersonNestedInput
    pastor?: PastorUpdateOneWithoutPersonNestedInput
    leader?: LeaderUpdateOneWithoutPersonNestedInput
    member?: MemberUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitedNewcomers?: NewcomerUncheckedUpdateManyWithoutInviterNestedInput
    seniorPastor?: SeniorPastorUncheckedUpdateOneWithoutPersonNestedInput
    pastor?: PastorUncheckedUpdateOneWithoutPersonNestedInput
    leader?: LeaderUncheckedUpdateOneWithoutPersonNestedInput
    member?: MemberUncheckedUpdateOneWithoutPersonNestedInput
    newcomer?: NewcomerUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gender?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    kakaoAccount?: NullableStringFieldUpdateOperationsInput | string | null
    bod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profileImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    visaType?: NullableEnumVisaTypeFieldUpdateOperationsInput | $Enums.VisaType | null
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    hasBaptized?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewcomerCreateManyInviterInput = {
    id: string
    type?: $Enums.PersonType
    prevChurch?: string | null
    prevServedPart?: string | null
    processStatus?: $Enums.ProcessStatus
    updatedAt?: Date | string
  }

  export type NewcomerUpdateWithoutInviterInput = {
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutNewcomerNestedInput
  }

  export type NewcomerUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewcomerUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    prevChurch?: NullableStringFieldUpdateOperationsInput | string | null
    prevServedPart?: NullableStringFieldUpdateOperationsInput | string | null
    processStatus?: EnumProcessStatusFieldUpdateOperationsInput | $Enums.ProcessStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChurchCreateManySeniorPastorInput = {
    id: string
    address?: string | null
    phone?: string | null
    estDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type GroupTypeCreateManySeniorPastorInput = {
    id?: string
    name: string
    order: number
    churchId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChurchUpdateWithoutSeniorPastorInput = {
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutChurchNestedInput
    groupTypes?: GroupTypeUpdateManyWithoutChurchNestedInput
  }

  export type ChurchUncheckedUpdateWithoutSeniorPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupTypes?: GroupTypeUncheckedUpdateManyWithoutChurchNestedInput
  }

  export type ChurchUncheckedUpdateManyWithoutSeniorPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    estDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTypeUpdateWithoutSeniorPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutTypeNestedInput
    church?: ChurchUpdateOneRequiredWithoutGroupTypesNestedInput
  }

  export type GroupTypeUncheckedUpdateWithoutSeniorPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    churchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type GroupTypeUncheckedUpdateManyWithoutSeniorPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    churchId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubGroupCreateManyPastorInput = {
    id: string
    parentId?: string | null
    leaderId?: string | null
    updatedAt?: Date | string
  }

  export type SubGroupUpdateWithoutPastorInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutSubGroupsNestedInput
    parent?: SubGroupUpdateOneWithoutChildrenNestedInput
    children?: SubGroupUpdateManyWithoutParentNestedInput
    leader?: LeaderUpdateOneWithoutLeadGroupNestedInput
    members?: PersonUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateWithoutPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: SubGroupUncheckedUpdateManyWithoutParentNestedInput
    members?: PersonUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type SubGroupUncheckedUpdateManyWithoutPastorInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    leaderId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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