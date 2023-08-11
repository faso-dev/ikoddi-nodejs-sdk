export declare class Ikoddi {
    private apiKey;
    private apiBaseURL;
    private groupId;
    constructor();
    withApiKey(apiKey: string): Ikoddi;
    withApiBaseURL(apiBaseURL: string): Ikoddi;
    withGroupId(groupId: string): Ikoddi;
    _assertAllParametersAreCorrect(): void;
    sendAirtime(numbers: Array<string>, ref: string, amount: string, campaignName: string, phonecode?: string, isoCode?: string): Promise<import("axios").AxiosResponse<any, any>>;
    sendSMS(numbers: Array<string>, from: string, message: string, smsBroadCast: string, phonecode?: string, isoCode?: string): Promise<import("axios").AxiosResponse<any, any>>;
    internetPlans(): Promise<import("axios").AxiosResponse<any, any>>;
}
