"use client";
import { useAuthentication } from "@/hooks/authentication/useAuthentication";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthentication();

  useEffect(() => {
    if (user?.id) {
      router.replace("/ecommerce");
    } else {
      router.replace("/signin");
    }
  });

  return <div>WellCome to isomorphic</div>;
}
