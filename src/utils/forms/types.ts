export type CarEditHookFormData = { licensePlateNumber: string; type: string };

export type RouteEditHookFormData = {
    id: string;
    locationFrom: string;
    locationTo: string;
    carId: string | null;
    distanceInKm: number;
    date: string;
};
