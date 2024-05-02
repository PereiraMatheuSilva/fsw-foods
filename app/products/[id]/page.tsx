import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-detail";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductsPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
      restaurant: {
        id: product.restauranteId,
      },
    },
    include: {
      restaurant: true,
    },
  });

  return (
    <div>
      {/*Imagem*/}
      <ProductImage product={product} />

      {/* Titulo e Preço */}
      <ProductDetails product={product} complementaryProducts={juices} />
    </div>
  );
};

export default ProductsPage;
