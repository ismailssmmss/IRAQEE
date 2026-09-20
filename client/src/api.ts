import { Candle, Swing, Pattern } from './types';
export async function load<T>(path:string):Promise<T>{const r=await fetch(path);if(!r.ok)throw new Error(await r.text());return r.json();}
export function socket(on:(x:any)=>void){const p=location.protocol==='https:'?'wss':'ws';const s=new WebSocket(`${p}://${location.host}/ws`);s.onmessage=e=>on(JSON.parse(e.data));return s;}
export type {Candle,Swing,Pattern};
