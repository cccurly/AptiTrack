"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CATEGORIES } from "@/lib/constants";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { Skeleton } from "@/components/ui/skeleton";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading || !user) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Skeleton className="h-8 w-32" />
            <div className="flex-1" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </header>
        <main className="flex-1 p-4 container max-w-5xl mx-auto">
          <Skeleton className="h-10 w-64 mb-8" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        </main>
      </div>
    );
  }

  const getImageForCategory = (id: string) => {
    const slug = id.split('-')[0];
    const img = PlaceHolderImages.find((p) => p.id === slug);
    return img || PlaceHolderImages[0];
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">
            Choose a Category
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => {
              const categoryImage = getImageForCategory(category.id);
              return (
                <Card key={category.id} className="flex flex-col overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out shadow-md hover:shadow-xl">
                  <div className="relative w-full h-40">
                    <Image
                      src={categoryImage.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover"
                      data-ai-hint={categoryImage.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{category.duration} minute test</span>
                      </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/test/${category.id}`}>
                        Start Test <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
