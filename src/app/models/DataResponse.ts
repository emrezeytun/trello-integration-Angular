export class DataResponse {
    data:any;
    success: boolean;
    message: string;

    constructor(obj: any) {
        this.data = obj.data;
        this.success = obj.success;
        this.message = obj.message;
    }
}