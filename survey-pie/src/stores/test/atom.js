import { atom } from 'jotai';

const testAtom = atom({ key: 'testAtom', default: ['a', 'b', 'c', 'd'] });

export default testAtom;
