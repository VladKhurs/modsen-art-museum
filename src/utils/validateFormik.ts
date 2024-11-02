import { z } from 'zod';
import { QUERIES } from '@/constants/numbers';

const { MIN_QUERY } = QUERIES;

const searchSchema = z.object({
	searchQuery: z
		.string()
		.min(MIN_QUERY, { message: 'Search query cannot be empty' }),
});

export const initialValues = {
	searchQuery: '',
};

export const validate = (values: { searchQuery: string }) => {
	const result = searchSchema.safeParse(values);
	if (result.success) return {};

	return result.error.flatten().fieldErrors;
};
