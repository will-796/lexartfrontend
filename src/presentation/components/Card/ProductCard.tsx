import { Product } from "@domain/models/product";
import { Card } from "@presentation/components/Card/Card";

export const ProductCard = ({ item }: { item: Product }) => {
  return (
    <Card to={`/produto/${item.id}`} className="px-4 py-8 gap-2 ">
      <div className="flex flex-col grow basis-2/3 items-start pl-2 gap-1">
        <div className="flex justify-center w-full text-base leading-5 font-bold processTitle-tooltip">
          <span className="truncate">{item.name}</span>
        </div>
        <div className="flex items-start self-stretch justify-around gap-2">
          <div className="flex flex-col w-[7.75rem] items-start gap-2">
            <span className="text-sm font-normal leading-[140%] text-secondary/50">
              Marca
            </span>
            <span className="text-base font-medium">{item.brand}</span>
          </div>

          <div className="flex flex-col w-[8.625rem] items-start gap-2">
            <span className="text-sm font-normal leading-[140%] text-secondary/50">
              Modelo
            </span>
            <span className="text-base font-normal leading-[100%]">
              {item.model}
            </span>
          </div>
        </div>
        <div className="flex justify-around items-start self-stretch">
          <div className="flex flex-col w-[7.75rem] items-start gap-[2px]">
            <span className="text-sm font-normal leading-[140%] text-secondary/50">
              Cor
            </span>
            <span className="text-base font-normal leading-[100%]">
              {item.color}
            </span>
          </div>

          <div className="flex flex-col w-[8.625rem] items-start gap-[2px]">
            <span className="text-sm font-normal leading-[140%] text-secondary/50">
              Valor
            </span>
            <span className="text-base font-normal leading-[100%]">
              {item.price}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
