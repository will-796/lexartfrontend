import { useAuthStore } from "@data/authentication/auth-store";
import { addUser } from "@data/user/add-user";
import { User } from "@domain/models";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export const createAccountAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json();
  
  try {
    await addUser(formData as unknown as User);
    return redirect('/login')
  } catch (err) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    }
  }

  const userLocation = useAuthStore.getState()?.userLocation || "/";

  return redirect(userLocation);
};
