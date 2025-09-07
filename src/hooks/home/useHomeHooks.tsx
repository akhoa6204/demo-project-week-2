import { useEffect, useReducer, type ChangeEvent, type FormEvent } from "react";
import ProductServices from "../../services/ProductServices";
import useQuery from "../useQuery";
import type { IStatus } from "../../interface/IStatus";
import type { IProduct } from "../../interface/IProduct";
import { useAppDispatch } from "../useRedux";
import { addCart } from "../../redux/actions/cart.action";

const defaultParams = { limit: 8, skip: 0 };

type State = {
  products: IProduct[];
  status: IStatus;
  keyword: string;
  currentPage: number;
  totalProduct: number;
};

type Action =
  | { type: "LOAD_START" }
  | {
      type: "LOAD_SUCCESS";
      payload: { products: IProduct[]; totalProduct: number };
    }
  | { type: "LOAD_ERROR" }
  | { type: "SET_KEYWORD"; payload: string }
  | { type: "SET_PAGE"; payload: number };

const initialState: State = {
  products: [],
  status: "idle",
  keyword: "",
  currentPage: 1,
  totalProduct: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD_START":
      return {
        ...state,
        status: "loading",
      };
    case "LOAD_SUCCESS":
      return {
        ...state,
        status: "success",
        products: action.payload.products,
        totalProduct: action.payload.totalProduct,
      };
    case "LOAD_ERROR":
      return {
        ...state,
        status: "error",
        products: [],
        totalProduct: 0,
        currentPage: 1,
      };
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_KEYWORD":
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
}
const useHomeHooks = () => {
  const { query, updateQuery } = useQuery(defaultParams);
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const dispatchRedux = useAppDispatch();

  const skeletonCount = 8;

  const isLoading = state.status === "loading";
  const isEmpty =
    !isLoading && (!state.products || state.products.length === 0);

  const limit = query.limit ?? defaultParams.limit;
  const skip = query.skip ?? defaultParams.skip;

  const canGoNext = skip + limit < state.totalProduct;
  const canGoPrevious = state.currentPage > 1;

  useEffect(() => {
    const fetchData = async () => {
      dispatchLocal({ type: "LOAD_START" });
      try {
        const res = await ProductServices.getProducts(query);
        dispatchLocal({
          type: "LOAD_SUCCESS",
          payload: { products: res.products || [], totalProduct: res.total },
        });
      } catch (err) {
        dispatchLocal({ type: "LOAD_ERROR" });
        console.error(err);
      }
    };
    fetchData();
  }, [query]);

  const handleAddToCart = (product: IProduct) => {
    const item = {
      id: product.id,
      product,
      qty: 1,
    };
    dispatchRedux(addCart(item));
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchLocal({ type: "SET_KEYWORD", payload: e.target.value });
    if (!e.target.value) updateQuery({ q: "" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateQuery({ q: state.keyword.trim(), skip: 0 });
    dispatchLocal({ type: "SET_PAGE", payload: 1 });
  };

  const goToPage = (page: number) => {
    if (page < 1) return;
    updateQuery({
      skip: (page - 1) * limit,
    });
    dispatchLocal({ type: "SET_PAGE", payload: page });
  };

  const handleNextPage = () => {
    if (!canGoNext) return;
    goToPage(state.currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (!canGoPrevious) return;
    goToPage(state.currentPage - 1);
  };

  return {
    products: state.products,
    status: state.status,
    handleChangeSearch,
    handleSubmit,
    keyword: state.keyword,
    currentPage: state.currentPage,
    handleNextPage,
    handlePreviousPage,
    isLoading,
    isEmpty,
    canGoPrevious,
    canGoNext,
    handleAddToCart,
    skeletonCount,
  };
};

export default useHomeHooks;
