import { AuthContextProps } from "../../interfaces/AuthContext";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function useAuthentication(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('context not found. Remember, useAuthentication must be used within an AuthProvider.');
  }

  return context;
}
