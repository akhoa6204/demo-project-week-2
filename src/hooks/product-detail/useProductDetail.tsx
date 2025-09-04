import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { IProduct } from "../../interface/IProduct";
import type { IStatus } from "../../interface/IStatus";
import ProductServices from "../../services/ProductServices";
import { useAppDispatch } from "../useRedux";
import { addCart } from "../../redux/slice/cart.slice";

const useProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>();
  const [status, setStatus] = useState<IStatus>("idle");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<number>(0);
  const dispatch = useAppDispatch();

  const images = useMemo(
    () =>
      product?.images?.length
        ? product.images
        : product?.thumbnail
        ? [product.thumbnail]
        : [],
    [product]
  );

  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }
    const fetchData = async () => {
      setStatus("loading");
      try {
        const res = await ProductServices.getProduct(id);
        setProduct(res);
        setStatus("success");
      } catch (err) {
        setStatus("error");
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const item = {
      id: product.id,
      product,
      qty: quantity,
    };
    dispatch(addCart(item));
  };

  const handleChangeQuantity = (id: number, newQty: number) => {
    if (!product) return;
    if (newQty <= 1) return;
    if (newQty > product.stock) return;
    setQuantity(newQty);
  };

  const handleChooseImage = (i: number) => {
    if (i < 0 || i >= images.length) return;
    setActiveImage(i);
  };

  return {
    id,
    status,
    product,
    images,
    quantity,
    handleChangeQuantity,
    handleChooseImage,
    activeImage,
    handleAddToCart,
  };
};
export default useProductDetail;
