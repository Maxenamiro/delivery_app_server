//что б не возвращать одни и те же поля у категорий

import { Prisma } from '@prisma/client'

export const returnCategoryObject: Prisma.CategorySelect = {
	id: true,
	name: true,
	slug: true,
	image: true
}
