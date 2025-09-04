import { Container } from "@mui/material";
import useProductDetail from "../../hooks/product-detail/useProductDetail";
import MainContent from "./MainContent";
import MainContentSkeleton from "./Skeleton";

const ProductDetailPage = () => {
  const {
    product,
    status,
    images,
    quantity,
    handleChangeQuantity,
    handleChooseImage,
    activeImage,
    handleAddToCart,
  } = useProductDetail();
  if (status === "loading") {
    return (
      <Container sx={{ py: 3 }}>
        <MainContentSkeleton />
      </Container>
    );
  }
  return (
    <Container sx={{ py: 3 }}>
      {product ? (
        <MainContent
          images={images}
          product={product}
          quantity={quantity}
          handleChangeQuantity={handleChangeQuantity}
          handleChooseImage={handleChooseImage}
          activeImage={activeImage}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default ProductDetailPage;
