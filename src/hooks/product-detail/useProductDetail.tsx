import { useEffect, useMemo, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { IProduct } from "../../interface/IProduct";
import type { IStatus } from "../../interface/IStatus";
import ProductServices from "../../services/ProductServices";
import { useAppDispatch } from "../useRedux";
import { addCart } from "../../redux/actions/cart.action";
type State = {
  product?: IProduct;
  status: IStatus;
  quantity: number;
  activeImage: number;
};
type Action =
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; payload: { product: IProduct } }
  | { type: "LOAD_ERROR" }
  | { type: "SET_IMAGE"; payload: number }
  | { type: "SET_QUANTITY"; payload: number };
const initialState: State = {
  product: undefined,
  status: "idle",
  quantity: 1,
  activeImage: 0,
};
const reducer = (state: State, action: Action): State => {
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
        product: action.payload.product,
      };
    case "LOAD_ERROR":
      return {
        ...state,
        status: "error",
      };
    case "SET_IMAGE":
      return {
        ...state,
        activeImage: action.payload,
      };
    case "SET_QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      return state;
  }
};

const useProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const dispatch = useAppDispatch();

  const images = useMemo(
    () =>
      state.product?.images?.length
        ? state.product.images
        : state.product?.thumbnail
        ? [state.product.thumbnail]
        : [],
    [state.product]
  );

  useEffect(() => {
    if (!id) {
      navigate("/");
      return;
    }
    const fetchData = async () => {
      dispatchLocal({ type: "LOAD_START" });
      try {
        const res = await ProductServices.getProduct(id);
        dispatchLocal({
          type: "LOAD_SUCCESS",
          payload: { product: res },
        });
      } catch (err) {
        dispatchLocal({ type: "LOAD_ERROR" });
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    if (!state.product) return;
    const item = {
      id: state.product.id,
      product: state.product,
      qty: state.quantity,
    };
    dispatch(addCart(item));
  };

  const handleChangeQuantity = (id: number, newQty: number) => {
    if (!state.product) return;
    if (newQty <= 1) return;
    if (newQty > state.product.stock) return;
    dispatchLocal({ type: "SET_QUANTITY", payload: newQty });
  };

  const handleChooseImage = (i: number) => {
    if (i < 0 || i >= images.length) return;
    dispatchLocal({ type: "SET_IMAGE", payload: i });
  };

  return {
    id,
    status: state.status,
    product: state.product,
    images,
    quantity: state.quantity,
    handleChangeQuantity,
    handleChooseImage,
    activeImage: state.activeImage,
    handleAddToCart,
  };
};
export default useProductDetail;
