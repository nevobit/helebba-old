import LineScaleLoader from "@/containers/Loader";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useBookingsLocation, useCreateBookingLocation } from "../../hooks";
import { useAccountStore } from "@/state-manager";

function generateHash(prefix: string): string {
    const randomPart = Math.random().toString(36).substring(2, 8); // Cadena aleatoria alfanumérica
    return `${prefix}${randomPart}`;
}

const RedirectHome = () => {
    const { isLoading, bookingsLocatios } = useBookingsLocation();
    const { isCreating, createBookingLocation } = useCreateBookingLocation();
    const account = useAccountStore((state) => state.account);

    const isWorking = isLoading || isCreating;

    const navigate = useNavigate();

    useEffect(() => {
        if (!isWorking) {

            if (bookingsLocatios == undefined) {
                createBookingLocation({
                    account: account.id!,
                    bookingLocation: {
                        account: account.id!,
                        name: "Negocio principal",
                        type: "",
                        phone: null,
                        address: null,
                        description: "",
                        active: true,
                        bufferTime: 0,
                        customFields: [],
                        defaultHeader: "",
                        defaultSpace: "",
                        extraClosingDates: [],
                        extraOpeningDates: [],
                        hasHeader: false,
                        hasPicture: false,
                        hash: generateHash(`${account.name?.toLowerCase()}-`),
                        maxDaysAhead: 28,
                        minimumNoticeTime: 86400,
                        nationalDaysCountry: null,
                        onboarding: {
                            started: false,
                            completedSettings: false,
                            completedBackground: false,
                            completedLogo: false,
                            finished: false
                        },
                        publicServiceHashes: [],
                        showBranding: false,
                        spaces: [],
                        startTimeIncrement: 0,
                        timeSlots: [],
                        timezone: "Europe/Madrid",
                        url: null,
                        picture: ""
                    }
                });
            } else if (!isLoading && bookingsLocatios) {
                navigate("/crm/bookings/" + bookingsLocatios.items[0]?.id);
            }
        }

    }, [isLoading, bookingsLocatios, createBookingLocation, account, navigate])

    if (isWorking) {
        return <LineScaleLoader />
    }
    return (
        <div></div>
    )
}

export default RedirectHome