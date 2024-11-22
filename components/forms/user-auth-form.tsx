"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Callout } from "../shared/callout";
import { Icons } from "../shared/icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "login" | "register";
}

type FormData = z.infer<typeof userAuthSchema>;
type LoadingState = "form" | "google" | "github";

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  const [isLoading, setLoading] = useState<LoadingState | null>(null);

  async function onSubmit(data: FormData) {
    console.log(data);
    setLoading("form");
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="johndoe@email.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className=""
              disabled={isLoading !== null}
              {...register("email")}
            />
            {errors?.email && (
              <Callout type="error">
                <p>{errors.email.message}</p>
              </Callout>
            )}
          </div>
          <Button disabled={isLoading === "form"}>
            {isLoading === "form" && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            {type === "register" ? "Sign Up with Email" : "Sign In with Email"}
          </Button>
        </div>
      </form>

      <Divider />

      <div className="grid gap-2">
        <SocialLoginButton
          provider="google"
          isLoading={isLoading}
          onClick={() => {}}
        />

        <SocialLoginButton
          provider="gitHub"
          isLoading={isLoading}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t"></span>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or Continue with
        </span>
      </div>
    </div>
  );
}

function SocialLoginButton({
  provider,
  isLoading,
  onClick,
}: {
  provider: string;
  isLoading: LoadingState | null;
  onClick: () => void;
}) {
  const Icon = Icons[provider];

  return (
    <Button
      type="button"
      variant={"outline"}
      onClick={onClick}
      disabled={isLoading !== null}
    >
      {isLoading === provider ? (
        <Icons.spinner className="mr-2 size-4 animate-spin" />
      ) : (
        Icon && <Icon className="mr-2 size-4" />
      )}
      {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </Button>
  );
}
