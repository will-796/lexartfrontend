import { Product } from "@domain/models/product";
import { Button } from "@presentation/components/common";
import { ButtonBack } from "@presentation/components/common/ButtonBack";
import { classNames } from "primereact/utils";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteProduct } from "@data/products/deleteProduct";
import { ProductCard } from "@presentation/components/Card/ProductCard";
import { ProductsForm } from "@presentation/components/forms/ProductsForm";

export const ProductDetail = () => {
  const data = useLoaderData() as Product;
  const navigate = useNavigate();
  const [isEdit, SetIsEdit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div
      className={classNames(
        "flex flex-col w-full pt-4 px-2 gap-4 min-h-full",
        "sm:p-4 sm:gap-6 lg:p-6"
      )}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex gap items-center">
          <ButtonBack url="/produtos" />
          <p className="text-h2 font-bold px-3 sm:p-0 md:text-h1">
            {data?.name}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            label={isEdit ? "Cancelar" : "Editar"}
            icon="pi pi-trash"
            size="md"
            onClick={() => SetIsEdit(!isEdit)}
          />
          <Button
            label="Excluir"
            icon="pi pi-trash"
            size="md"
            outline
            secondary
            type="submit"
            onClick={async() => {
              setIsLoading(true);
              await deleteProduct(data.id as string);
              navigate("/produtos");
            }}
            loading={isLoading}
          />
        </div>
      </div>
      {!isEdit ? <ProductCard item={data} /> : <ProductsForm data={data} />}
    </div>
  );
};
