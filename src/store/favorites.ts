// /src/store/favorites.ts
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavState = {
  items: string[];                     // nombres de países favoritos
};

type FavActions = {
  add: (name: string) => void;
  remove: (name: string) => void;
  toggle: (name: string) => void;
  clear: () => void;
  has: (name: string) => boolean;
};

type FavStore = FavState & FavActions;

export const useFavorites = create<FavStore>()(
  persist(
    (set, get) => ({
      items: [],

      add: (name) =>
        set((s) =>
          s.items.includes(name) ? s : { items: [...s.items, name] }
        ),

      remove: (name) =>
        set((s) => ({ items: s.items.filter((n) => n !== name) })),

      toggle: (name) =>
        set((s) =>
          s.items.includes(name)
            ? { items: s.items.filter((n) => n !== name) }
            : { items: [...s.items, name] }
        ),

      clear: () => set({ items: [] }),

      has: (name) => get().items.includes(name),
    }),
    { name: "fav-countries" } // clave en localStorage
  )
);
