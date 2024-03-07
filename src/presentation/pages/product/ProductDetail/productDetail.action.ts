import { editProduct } from "@data/products/editProduct";
import { ActionFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";

export const productDetailAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const formData = await request.json();
  console.log(formData)

  try {
    console.log(formData);
    
    await editProduct(
      formData,
      params.id as string
    );
    return redirect("/produtos");
  } catch (err) {
    if (err instanceof Error) {
      console.log("entrou err: " + err.message);
      return {
        message: err.message,
      };
    }
  }
};
