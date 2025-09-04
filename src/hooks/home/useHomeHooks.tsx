import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import ProductServices from "../../services/ProductServices";
import useQuery from "../useQuery";
import type { IStatus } from "../../interface/IStatus";
import type { IProduct } from "../../interface/IProduct";
import { useAppDispatch } from "../useRedux";
import { addCart } from "../../redux/slice/cart.slice";
const defaultParams = { limit: 8, skip: 0 };
const useHomeHooks = () => {
  const { query, updateQuery } = useQuery(defaultParams);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [status, setStatus] = useState<IStatus>("loading");
  const [keyword, setKeyword] = useState<string>("");
  const dispatch = useAppDispatch();

  const isLoading = status === "loading";
  const isEmpty = !isLoading && (!products || products.length === 0);
  const canGoPrevious = currentPage > 1;
  const canGoNext =
    (query.skip || defaultParams.skip) + (query.limit || defaultParams.limit) <
    totalProduct;

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const res = await ProductServices.getProducts(query);
        setProducts(res.products || []);
        setStatus("success");
        setTotalProduct(res.total);
      } catch (err) {
        setStatus("error");
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
    dispatch(addCart(item));
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    if (!e.target.value) updateQuery({ q: "" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateQuery({ q: keyword.trim(), skip: 0 });
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1) return;
    updateQuery({
      skip: (page - 1) * (query.limit || defaultParams.limit),
    });
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (!canGoNext) return;
    goToPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (!canGoPrevious) return;
    goToPage(currentPage - 1);
  };

  return {
    products: products,
    status,
    handleChangeSearch,
    handleSubmit,
    keyword,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    isLoading,
    isEmpty,
    canGoPrevious,
    canGoNext,
    handleAddToCart,
  };
};
export default useHomeHooks;
