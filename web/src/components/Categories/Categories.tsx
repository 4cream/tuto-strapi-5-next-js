import Link from 'next/link';
import { getCategories } from "app/lib/get-categories";

export const Categories = async () => {
    const categories = await getCategories();

    if (categories.length === 0) return null;

    return (
        <section id="categories" className="ng-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="sm:flex sm:items-center sm:justify-between sm:gap-4">
                    <p className="text-cl font-semibold text-gray-900 dark:text-white sm:text-2xl">Todas las categorias</p>
                </div>

                <div className="mb-4 mt-6 grid grid-cols-1 gab-4 tet-center sm:mt-8 sm:grid-cols-2 lg:mb-0 lg:grid-cols-4 xl:gap-8">
                    {
                        categories.map((category, index) => (
                            <Link href={`/categories/${category.slug}`} key={index} className='grid place-content-center'>
                                <img src={category.image} alt={category.name} className='mx-auto aspect-square w-full h-auto object-cover text-gray-400 dark:text-gray-500' />
                                <p className='text-lg mt-6 font-semibold text-gray-900 dark:text-white'>{category.name}</p>
                                <small>{category.description}</small>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}