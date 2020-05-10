import { EnumLiteralsOf } from './general';

export type SortsModeTypes = EnumLiteralsOf<typeof SortsMode>;
export const SortsMode = Object.freeze({
    ASC: 'ASC' as 'ASC',
    DESC: 'DESC' as 'DESC'
});
