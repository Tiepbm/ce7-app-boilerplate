import {Cloneable} from './Cloneable';
import {PureModelData} from './PureModelData';

export class Model extends Cloneable {
  key?: string | number;

  [key: string]: any;

  public static clone<T extends Model>(model?: PureModelData<T>): T {
    const instance: T = new Model() as T;
    if (typeof model === 'object' && model !== null) {
      Object.assign(instance, model);
    }
    return instance;
  }
}
