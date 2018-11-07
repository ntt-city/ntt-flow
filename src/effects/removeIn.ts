import { Map } from 'immutable';

export default (root: any, keyPath: KeyPath): any => {
    if (Map.isMap(root)) {
        return (root as Map<string, any>).removeIn(keyPath);
    }
};