import Link from "next/link";
import { getProducts } from "app/lib/get-products";

export default async function CategoryPage({params}:{params:{categoryId:string}}) {
    
    const {categoryId} = params;
    const {pagination, products} = await getProducts({categoryId});
    
    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen">
            <div className="container mx-auto">
                <Link href="/">
                    ⬅️ Return Home
                </Link>
                {/* {products.length > 0 && <sortBy />} */}

                <div className="grid grid-cols-3 gap-4 mt-6">
                    {
                        products.length === 0 && <div className="w-full max-w-sm flex">
                            <div className="px-5 pb-5">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    No products found
                                </h5>
                            </div>
                        </div>
                    }
                    {
                        products.length > 0 && products.map((product) => {
                            <div key={product.slug} className="w-full max-w-sm bg-white border border-gray-200">
                                <a href="#">
                                    <img className="p-8 rounded-t-lg" src={product.image} alt="Product image" />
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        Info?
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
}