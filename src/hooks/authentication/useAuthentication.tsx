import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export function useAuthentication() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });
  const router = useRouter();

  useEffect(() => {
    setAuthState({
      //   user: { id: 1, name: "Tu", email: "doquangtu199@gmail.com" },
      user: null,
      loading: false,
      error: null,
    });
  }, [router]);

  return {
    user: authState.user,
    loading: authState.loading,
    error: authState.error,
  };
}
