import { Map } from 'immutable';

export default (root: any, keyPath: KeyPath, value: any): any => {
    if (Map.isMap(root)) {
        return (root as Map<string, any>).updateIn(keyPath, value);
    }
};