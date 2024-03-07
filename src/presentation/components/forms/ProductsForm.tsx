import { Product } from "@domain/models/product";
import { FormField } from "@presentation/components/FormField/FormField";
import { Button } from "@presentation/components/common";
import { TextInput } from "@presentation/components/common/TextInput";
import { ActionError } from "@presentation/protocols";
import { classNames } from "primereact/utils";
import { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { Toast as PrimeToast } from "primereact/toast";
import { Toast } from "@presentation/components/common/Toast";
import { NumberInput } from "@presentation/components/common/NumberInput";

interface ProductFormProps {
  data?: Product;
}

export const ProductsForm = ({ data }: ProductFormProps) => {

  const actionData = useActionData() as ActionError;
  const navigation = useNavigation();
  const submit = useSubmit();
  const toast = useRef<PrimeToast>(null);

  useEffect(() => {
    if (actionData?.message && toast.current) {
      toast.current.show({
        severity: "error",
        summary: "error",
        detail: actionData.message,
      });
      actionData.message = undefined;
    }
  }, [actionData]);

  const defaultValues = {
    name: data?.name || "",
    brand: data?.brand || "",
    price: data?.price || "",
    color: data?.color || "",
    model: data?.model || "",
  };

  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = async (formData: Product) => {
    submit(
      {
        ...formData
      },
      {
        method: data ? "PUT" : "POST",
        action: data ? `/produto/${data.id}` : "/produtos/novo-produto",
        encType: "application/json",
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(
        "flex flex-col bg-secondary/5 p-8 gap-10 w-full relative"
      )}
    >
      <div className={classNames("grid grid-cols-3 grow gap-8 pt-2")}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Preencha o nome produto." }}
          render={({ field, formState: { errors } }) => (
            <FormField
              title="Nome"
              icon="pi pi-users text-primary text-xl"
              error={errors?.name?.message}
            >
              <TextInput
                id={field.name}
                value={field.value}
                placeholder="informe o nome"
                error={errors?.name?.message}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormField>
          )}
        />
        <Controller
          name="brand"
          control={control}
          rules={{ required: "Preencha a marca do produto." }}
          render={({ field, formState: { errors } }) => (
            <FormField
              title="Marca"
              icon="pi pi-users text-primary text-xl"
              error={errors?.brand?.message}
            >
              <TextInput
                id={field.name}
                value={field.value}
                placeholder="informe a marca"
                error={errors?.brand?.message}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormField>
          )}
        />
        <Controller
          name="model"
          control={control}
          rules={{ required: "Preencha o modelo do produto." }}
          render={({ field, formState: { errors } }) => (
            <FormField
              title="Modelo"
              icon="pi pi-users text-primary text-xl"
              error={errors?.model?.message}
            >
              <TextInput
                id={field.name}
                value={field.value}
                placeholder="informe o modelo"
                error={errors?.model?.message}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormField>
          )}
        />
        <Controller
          name="price"
          control={control}
          rules={{ required: "Preencha o preço do produto" }}
          render={({ field, formState: { errors } }) => (
            <FormField
              title="Preço"
              icon="pi pi-users text-primary text-xl"
              error={errors?.price?.message}
            >
              <NumberInput
                id={field.name}
                value={Number(field.value)}
                placeholder="informe preço"
                error={errors?.price?.message}
                onChange={(e) => field.onChange(e.value)}
              />
            </FormField>
          )}
        />
        <Controller
          name="color"
          control={control}
          rules={{ required: "Preencha a cor do produto." }}
          render={({ field, formState: { errors } }) => (
            <FormField
              title="Cor"
              icon="pi pi-users text-primary text-xl"
              error={errors?.color?.message}
            >
              <TextInput
                id={field.name}
                value={field.value}
                placeholder="informe a cor"
                error={errors?.color?.message}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </FormField>
          )}
        />
      </div>
      <div className="flex w-full gap-3 justify-center">
        <Button
          label="Salvar"
          icon="pi pi-save"
          size="md"
          type="submit"
          loading={navigation.state === "submitting"}
        />
      </div>
      <Toast inputRef={toast} position="bottom-right" />
    </form>
  );
};
