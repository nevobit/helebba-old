import { Base } from "../../../common";

interface CustomField {
    key: string;
    label: string;
    type: string;
    required: boolean;
    scopes: string[] | null;
    options: string[] | null;
}

interface Onboarding {
    started: boolean;
    completedSettings: boolean;
    completedBackground: boolean;
    completedLogo: boolean;
    finished: boolean;
}

interface Services {
    eventId: string;
    id: string;
}

interface Space extends Base {
    description: string;
    type: string;
    active: boolean;
    includeAllServices: boolean;
    services: Services;
}

export interface TimeSlot {
    weekday: number;
    enabled: boolean;
    startTime: string;
    endTime: string;
    timeSlots: {
        startTime: string;
        endTime: string;
    }[]
}

interface ServiceHashed extends Base {
    serviceId: string;
    hash: string;
}

export interface BookingLocation extends Base {
    name: string;
    description: string;
    type: string;
    typeName?: string;
    active: boolean;
    address: string | null;
    bufferTime: number;
    customFields: CustomField[];
    defaultHeader: string;
    defaultSpace: string;
    extraClosingDates: string[];
    extraOpeningDates: string[];
    hasHeader: boolean;
    hasPicture: boolean;
    hash: string;
    maxDaysAhead: number;
    account: string;
    minimumNoticeTime: number;
    nationalDaysCountry: string | null;
    onboarding: Onboarding;
    phone: string | null;
    publicServiceHashes: ServiceHashed[];
    showBranding: boolean;
    spaces: Space[];
    startTimeIncrement: number;
    timeSlots: TimeSlot[];
    timezone: string;
    url: string | null;
    picture: string;
}
