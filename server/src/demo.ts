import type {Candle} from './types.js';
export const fixture: Candle[]=Array.from({length:160},(_,i)=>{const base=1920+Math.sin(i/7)*18+Math.sin(i/19)*12+i*.12;return {time:Date.now()/1000-((160-i)*300),open:base-2,high:base+5,low:base-6,close:base+1,volume:1000+i}});
