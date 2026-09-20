export type Candle={time:number,open:number,high:number,low:number,close:number,volume?:number};
export type Swing={index:number,time:number,price:number,type:'HIGH'|'LOW',confirmed:boolean};
export type Pattern={id:string,pattern:'GARTLEY'|'BAT'|'BUTTERFLY'|'CRAB'|'DEEP_CRAB',direction:'BULLISH'|'BEARISH',points:{X:Swing,A:Swing,B:Swing,C:Swing,D:Swing},ratios:{AB_XA:number,BC_AB:number,CD_BC:number,AD_XA:number},score:number,tolerance:number,completionPrice:number,confirmed:boolean,invalidated:boolean,targets:number[],stopReference:number,timestamp:number,range:{low:number,high:number}};
