import { HttpStatusCode } from "@data/protocols";
import { UnexpectedError } from "@domain/errors";
import { httpRequestWithAuth } from "@main/decorators";
import { redirect } from "react-router-dom";

export const deleteProduct = async (teamId: string) => {
  const httpResponse = await httpRequestWithAuth({
    url: `/products/${teamId}/`,
    method: "DELETE",
  });
  console.log(httpResponse);
  switch (httpResponse.statusCode) {
    case HttpStatusCode.noContent:
      return redirect("/produtos");
    case HttpStatusCode.unauthorized:
      return redirect("/login");
    default:
      throw new UnexpectedError();
  }
};
