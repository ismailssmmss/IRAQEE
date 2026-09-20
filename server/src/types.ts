import {z} from 'zod';
export const CandleSchema=z.object({time:z.number().int(),open:z.number(),high:z.number(),low:z.number(),close:z.number(),volume:z.number().optional()}); export type Candle=z.infer<typeof CandleSchema>;
export const SwingSchema=z.object({index:z.number().int(),time:z.number(),price:z.number(),type:z.enum(['HIGH','LOW']),confirmed:z.boolean()}); export type Swing=z.infer<typeof SwingSchema>;
export type Settings={deviation:number,depth:number,backstep:number,tolerance:number};
