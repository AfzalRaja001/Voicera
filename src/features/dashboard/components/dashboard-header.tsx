"use client";

import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const { isLoaded, user } = useUser();

  return (
    <div className="relative z-10 flex items-start justify-between gap-4 text-foreground">
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">
          Nice to see you
        </p>
        <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
          {isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."}
        </h1>
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <Button variant="outline" size="sm" className="bg-background/95 text-foreground shadow-sm backdrop-blur supports-backdrop-filter:bg-background/80" asChild>
          <Link href="mailto:business@codewithantonio.com">
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="bg-background/95 text-foreground shadow-sm backdrop-blur supports-backdrop-filter:bg-background/80" asChild>
          <Link href="mailto:business@codewithantonio.com">
            <Headphones />
            <span className="hidden lg:block">Need help?</span>
          </Link>
        </Button>
      </div>

    </div>
  );
};