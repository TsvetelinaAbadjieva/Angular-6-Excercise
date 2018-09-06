export interface EventModel {

    title: string;
    teaser: string;
    body: string;
    startDate: Date;
    endDate: Date;
    startTime: TimeRanges;
    endTime: TimeRanges;
    participants: string[];
}

export interface FormEventModel {
    
    title: string;
    teaser: string;
    body: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    participants: string[];
}