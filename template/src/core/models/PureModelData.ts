import {Model} from './Model';
import {Moment} from 'moment';

export type PureModelData<T extends Model> =
  | {
      [P in keyof T]: T[P] extends number
        ? number
        : T[P] extends string
        ? string
        : T[P] extends boolean
        ? boolean
        : T[P] extends null
        ? null
        : T[P] extends undefined
        ? undefined
        : T[P] extends Model
        ? T[P]
        : T[P] extends Moment
        ? string
        : any;
    }
  | T;
