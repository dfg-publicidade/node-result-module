import moment from 'moment-timezone';

/* Module */
class Result {
    public status: string;
    public content: any;
    public time: string = moment.tz(new Date(), process.env.TZ).format('DD/MM/YYYY HH:mm:ss');

    public constructor(status: string, content: any) {
        this.status = status;
        this.content = content;
    }
}

export default Result;
