import { format } from 'date-fns';

export const mapValues = (index: number, items: any) =>
	items?.filters[index].values.map((item: any) => item);

export const timestamp = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");