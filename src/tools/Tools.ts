import { EMPTY_STR } from './Const'
import { window, workspace } from 'vscode'
export namespace Tools {

    /**
     * 模拟prinf 函数, 替换temp参数中的 %s 标记
     * @param temp 
     * @param args 
     */
    export function printf(temp: string, ...args: string[]) {
        let i: number = 0,
            flag: boolean = true;
        temp = temp.replace(/%s/g, function () {
            let arg = args[i++];
            if (typeof arg !== 'string') {
                flag = false;
                return EMPTY_STR;
            }
            return arg;
        });
        return flag ? temp : '';
    }
    export function showMsg(msg: string) {
        window.showInformationMessage(msg);
    }
}