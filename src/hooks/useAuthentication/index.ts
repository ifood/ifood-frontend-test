import { AuthContextProps } from "../../interfaces";
import { useContext } from "react";
import { AuthContext } from "../../providers";

export default function useAuthentication(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('context not found. Remember, useAuthentication must be used within an AuthProvider.');
  }

  return context;
}
