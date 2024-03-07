import { useLoaderData, useNavigate } from "react-router-dom";
import { Button } from "@presentation/components/common";
import { classNames } from "primereact/utils";
import { Product } from "@domain/models/product";
import { ProductCard } from "../../components/Card/ProductCard";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export const Products = () => {
  const data = useLoaderData() as Product[];
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(data);

  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = data.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTermLower) ||
        product.brand.toLowerCase().includes(searchTermLower) ||
        product.model.toLowerCase().includes(searchTermLower)
    );
    setFilteredProducts(filtered);
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredProducts(data);
  };

  return (
    <section className="flex flex-col items-center gap-4 w-full md:gap-6">
      <div className="flex flex-col items-start py-4 gap-6 self-stretch md:py-0">
        <div
          className={classNames(
            "flex justify-between items-center w-full px-3 md:px-0"
          )}
        >
          <div className="flex gap-4 items-center">
            <h3>Produtos</h3>
          </div>
          <Button
            label="Novo produto"
            icon="pi pi-plus"
            size="md"
            onClick={() => navigate("/produtos/novo-produto")}
          />
        </div>
      </div>

      <span className="p-input-icon-left w-full flex">
        <InputText
          className="rounded-l-md w-full text-base font-bold appearance-none text-secondary placeholder:text-secondary/50 focus:outline-secondary border border-primary p-2 bg-white data-error:border-alert data-error:rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          icon="pi pi-search ml-2"
          size="md"
          customStyles="rounded-r-md rounded-l-[0px]"
          onClick={handleSearch}
        />
        <Button label="Limpar" size="md" onClick={resetSearch} customStyles="ml-4" />
      </span>

      <div
        className={classNames(
          "grid justify-between gap-6 w-full px-3 pb-3 md:px-0 md:pb-0",
          "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
