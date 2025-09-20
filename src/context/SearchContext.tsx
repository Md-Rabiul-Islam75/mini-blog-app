"use client";
import React, { createContext, useContext, useState } from "react";

type SearchCtx = {
  term: string;
  setTerm: (v: string) => void;
};

const SearchContext = createContext<SearchCtx | null>(null);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [term, setTerm] = useState("");
  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used inside <SearchProvider>");
  return ctx;
}
