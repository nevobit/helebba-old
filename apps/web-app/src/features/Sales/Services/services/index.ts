import { helebbaApi } from '@/api';
import { UpdateServiceDto } from '@helebba/entities';

export const updateService = async (service: UpdateServiceDto) => {
    const { data } = await helebbaApi.patch(`/services/${service.id}`, service);
    return data;
};

export const createService = async ({
    account,
    service }: { account: string, service: UpdateServiceDto }
) => {
    const { data } = await helebbaApi.post(`/services`, service, {
        headers: {
            account,
        },
    });
    return data;
};

export const getServices = async ({ id, page }: { id: string, page: number }) => {
    const { data } = await helebbaApi.get(`/services?page=${page}&limit=10`, {
        headers: {
            account: id,
        },
    });
    return data;
};

export const getService = async (id: string) => {
    const { data } = await helebbaApi.get(`/services/${id}`);
    return data;
};


export const deleteService = async (id: string) => {
    const { data } = await helebbaApi.get(`/services/${id}/delete`);
    return data;
}