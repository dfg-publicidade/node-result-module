import ResultStatus from './enums/resultStatus';
declare class Result {
    status: string;
    content: any;
    time: string;
    constructor(status: ResultStatus, content: any);
}
export default Result;
export { ResultStatus };
