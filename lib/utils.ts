import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import registry from "@/registry.json";
import type { RegistryItem } from "shadcn/registry";
const components = registry.items as unknown as RegistryItem[];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
  const componentsMap = new Map(components?.map((comp) => [comp.name, comp]));

  return names
    .map((name) => componentsMap.get(name))
    .filter((comp): comp is RegistryItem => comp !== undefined);
};