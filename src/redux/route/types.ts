export type Route = {
    id: string;
    locationFrom: string;
    locationTo: string;
    carId: string | null;
    distanceInKm: number;
    date: Date;
};
