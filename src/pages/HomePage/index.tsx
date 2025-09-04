import { Container } from "@mui/material";
import useHomeHooks from "../../hooks/home/useHomeHooks";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";
import SearchBlock from "./SearchBlock";
import Empty from "./Empty";

const HomePage = () => {
  const {
    products,
    handleChangeSearch,
    keyword,
    handleSubmit,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    isLoading,
    isEmpty,
    canGoPrevious,
    canGoNext,
    handleAddToCart,
  } = useHomeHooks();

  const skeletonCount = 8;

  return (
    <Container sx={{ py: 2 }}>
      <SearchBlock
        keyword={keyword}
        handleChangeSearch={handleChangeSearch}
        handleSubmit={handleSubmit}
      />
      <ProductGrid
        isEmpty={isEmpty}
        isLoading={isLoading}
        skeletonCount={skeletonCount}
        products={products}
        handleAddToCart={handleAddToCart}
      />
      {isEmpty ? <Empty /> : ""}
      {isLoading ? (
        ""
      ) : (
        <Pagination
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          canGoNext={canGoNext}
          canGoPrevious={canGoPrevious}
        />
      )}
    </Container>
  );
};
export default HomePage;
