import { createContext } from "react";
import type { IProduct } from "../../interface/IProduct";
import type { IStatus } from "../../interface/IStatus";
export type HomeContextType = {
  products: IProduct[];
  status: IStatus;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  keyword: string;
  currentPage: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  isLoading: boolean;
  isEmpty: boolean;
  canGoPrevious: boolean;
  canGoNext: boolean;
  handleAddToCart: (product: IProduct) => void;
  skeletonCount: number;
};
export const HomeContext = createContext<HomeContextType | undefined>(
  undefined
);
