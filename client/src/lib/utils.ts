import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = "RUB"): string {
  if (currency === "RUB") {
    return `₽ ${price.toLocaleString("ru-RU")}`;
  }
  if (currency === "USD") {
    return `$ ${price.toLocaleString("en-US")}`;
  }
  return `${price} ${currency}`;
}
