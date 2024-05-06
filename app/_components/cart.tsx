import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subTotalPrice, totalPrice, totalDiscounts } =
    useContext(CartContext);

  return (
    <div className="flex h-full flex-col py-5">
      {/* TOTAIS */}
      {products.length > 0 ? (
        <>
          <div className="flex-auto space-y-4">
            {products.map((product) => (
              <CartItem key={product.id} cartProduct={product} />
            ))}
          </div>

          <div className="mt-6">
            <Card>
              <CardContent className="space-y-2 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Subtotal
                  </span>
                  <span>{formatCurrency(subTotalPrice)}</span>
                </div>

                <Separator className="h-[0.5px]" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Descontos
                  </span>
                  <span>- {formatCurrency(totalDiscounts)}</span>
                </div>

                <Separator className="h-[0.5px]" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Entrega</span>

                  {Number(products?.[0].restaurant.deliveryFee) === 0 ? (
                    <span className="uppercase text-primary">Grátis</span>
                  ) : (
                    formatCurrency(Number(products?.[0].restaurant.deliveryFee))
                  )}
                </div>

                <Separator className="h-[0.5px]" />

                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span> {formatCurrency(totalPrice)}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/*Botão Finalizar Pedido*/}
          <Button className="mt-6 w-full">Finalizar Pedido</Button>
        </>
      ) : (
        <h2 className="text-left font-medium">
          Sacola está vazia, Adicione um produto para começar.
        </h2>
      )}
    </div>
  );
};

export default Cart;
