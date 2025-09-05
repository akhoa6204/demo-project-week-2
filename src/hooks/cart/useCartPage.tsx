import { useEffect, useMemo, useState } from "react";
import { removeItemsCart, updateQty } from "../../redux/slice/cart.slice";
import { useAppDispatch, useAppSelector } from "../useRedux";
import { useNavigate } from "react-router-dom";

const useCartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart.cart);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const originalTotal = useMemo(() => {
    const items = cart.filter((item) => selectedItems.includes(item.id));
    return items.reduce((acc, cur) => acc + cur.product.price * cur.qty, 0);
  }, [cart, selectedItems]);

  const discountTotal = useMemo(() => {
    const items = cart.filter((item) => selectedItems.includes(item.id));
    return items.reduce((acc, cur) => {
      const original = cur.product.price;
      const hasDiscount =
        cur.product.discountPercentage && cur.product.discountPercentage > 0;

      const final = hasDiscount
        ? Math.round(original * (1 - cur.product.discountPercentage / 100))
        : original;

      const savedPerItem = original - final;
      return acc + savedPerItem * cur.qty;
    }, 0);
  }, [cart, selectedItems]);

  const finalTotal = useMemo(
    () => originalTotal - discountTotal,
    [originalTotal, discountTotal]
  );

  const handleBackToHome = () => navigate("/");

  const handleToggleSelectedItems = (id: number) =>
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );

  const handleToggleAllSelectedItems = () =>
    setSelectedItems((prev) =>
      prev.length ? [] : [...prev, ...cart.map((item) => item.id)]
    );

  const handleRemoveItems = (ids: number[]) => {
    setSelectedItems((pre) => pre.filter((itemId) => !ids.includes(itemId)));
    dispatch(removeItemsCart(ids));
  };

  const handleChangeQuantity = (id: number, newQty: number) => {
    if (newQty < 1) return;
    const item = cart.find((i) => i.id === id);
    if (item?.product.stock && item.product.stock < newQty) return;
    dispatch(updateQty({ id, qty: newQty }));
  };

  return {
    cart,
    handleChangeQuantity,
    handleRemoveItems,
    handleToggleSelectedItems,
    handleToggleAllSelectedItems,
    selectedItems,
    handleBackToHome,
    originalTotal,
    discountTotal,
    finalTotal,
    isLoading
  };
};
export default useCartPage;
