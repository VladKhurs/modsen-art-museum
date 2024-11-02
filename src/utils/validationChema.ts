import  {z} from 'zod';

export const searchSchema = z.object({
	searchQuery: z
		.string()
		.min(2, { message: 'Минимум 2 символа' })
		.max(50, { message: 'Максимум 20 символов' })
		.nonempty({ message: 'Поле не должно быть пустым' }),
});
