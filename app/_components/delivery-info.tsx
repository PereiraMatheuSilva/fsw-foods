import { BikeIcon, TimerIcon } from "lucide-react";
import { Card } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Restaurant } from "@prisma/client";

interface DeliveryInfoProps {
  restaurant: Pick<Restaurant, "deliveryFee" | "deliveryTimeMinutes">;
}

const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  return (
    <div className="px-5">
      <Card className="mt-6 flex justify-around py-3">
        {/*Custo de Entrega */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <BikeIcon size={14} />
          </div>

          {Number(restaurant.deliveryFee) > 0 ? (
            <p className="mt-1' text-xs font-semibold">
              {formatCurrency(Number(restaurant.deliveryFee))}
            </p>
          ) : (
            <p className="mt-1">Grátis</p>
          )}
        </div>

        {/*Tempo de Entrega */}
        <div className="flex flex-col items-center">
          {/*Custo de Entrega */}
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <TimerIcon size={14} />
          </div>

          <p className="mt-1 text-xs font-semibold">
            {restaurant.deliveryTimeMinutes} min
          </p>
        </div>
      </Card>
    </div>
  );
};

export default DeliveryInfo;
