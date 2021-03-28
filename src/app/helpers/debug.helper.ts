export function syncMeter(func: (...params: any[]) => any, name: string = 'Sync', count: number = 1): (...params: any[]) => any {
    return (...params: any[]): any => {
        let result;
        const timeArray: number[] = [];

        for (let i = 0; i < count; i++) {
            const timeStart = performance.now();
            result = func(params);
            timeArray.push(performance.now() - timeStart);
        }

        console.log(`%c${name} (count ${count}): ${timeArray.sort()[Math.floor(timeArray.length / 2)].toFixed(3)} ms`, 'color: #f5e942');
        return result;
    }
}

export function asyncMeter(func: (...params: any[]) => any, name: string = 'Async', count: number = 1): (...params: any[]) => Promise<any> {
    return async(...params: any[]): Promise<any> => {
        let result;
        const timeArray: number[] = [];
        
        for (let i = 0; i < count; i++) {
            const timeStart = performance.now();
            result = await func(params);
            timeArray.push(performance.now() - timeStart);
        }

        console.log(`%c${name} (count ${count}): ${timeArray.sort()[Math.floor(timeArray.length / 2)].toFixed(3)} ms`, 'color: #f5e942');
        return result;
    }
}