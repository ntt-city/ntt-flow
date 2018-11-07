declare namespace ntt {
    type KeyArray = Array<KeyType>;
    type KeyPath = Iterable<KeyType>;
    type KeyType = number | string;
    interface FlatArray extends Array<ValueType> {
    }
    interface FlatObject {
        [key: string]: FlatArray | ValueType;
    }
    type EntityModel<T extends FlatObject, K extends keyof T> = Omit<T, K>;
    type EntityKey<T extends FlatObject, K extends keyof T> = Pick<T, K>;
    interface SimpleArray extends Array<SimpleObject | ValueType> {
    }
    interface SimpleObject {
        [key: string]: SimpleArray | SimpleObject | ValueType;
    }
    type PropertyType<T extends SimpleObject, K extends keyof T, P extends T[K]> = P;
    type ComplexPropertyType<T extends SimpleObject, K extends keyof T, P extends FlatObject & T[K]> = P;
    type ValuePropertyType<T extends SimpleObject, K extends keyof T, P extends ValueType & T[K]> = P;
    interface IStore<T extends SimpleObject, K extends keyof T> {
        scope: 'global' | 'individual' | 'network' | 'organization' | 'region';
        target: string;
        create: (model: T) => Promise<boolean>;
        destroy: (key: Pick<T, K>) => Promise<boolean>;
        discard: (key: Pick<T, K>) => Promise<boolean>;
        retrieve: (key: Pick<T, K>) => Promise<T>;
        update: (model: Partial<T>, key: Pick<T, K>) => Promise<T>;
    }
}
