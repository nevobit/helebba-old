import { Base } from "../../../common";

interface Space {
    id: string;
    description: string;
}

interface CustomFieldsValues {
    key: string;
    label: string;
    type: string;
    value: string;
}

export interface Booking extends Base {
    account: string;
    startTime: string;
    endTime: string;
    duration: number;
    service: string;
    location: string;
    space: Space;
    outcome?: string;
    customFieldsValues: CustomFieldsValues[];
    bookingStatus: string;
    hidden: boolean;
}
