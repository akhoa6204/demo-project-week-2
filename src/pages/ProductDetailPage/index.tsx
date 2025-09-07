import { Container } from "@mui/material";
import MainContent from "./MainContent";
import MainContentSkeleton from "./Skeleton";
import { useProductDetailContext } from "../../hooks/product-detail/useProductDetailContext";

const ProductDetailPage = () => {
  const { status, product } = useProductDetailContext();
  if (status === "loading") {
    return (
      <Container sx={{ py: 3 }}>
        <MainContentSkeleton />
      </Container>
    );
  }
  return <Container sx={{ py: 3 }}>{product ? <MainContent /> : ""}</Container>;
};

export default ProductDetailPage;
