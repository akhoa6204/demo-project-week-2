import { Container } from "@mui/material";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";
import SearchBlock from "./SearchBlock";
import Empty from "./Empty";
import useHomeContext from "../../hooks/home/useHomeContext";

const HomePage = () => {
  const { isEmpty, isLoading } = useHomeContext();
  return (
    <Container sx={{ py: 2 }}>
      <SearchBlock />
      <ProductGrid />
      {isEmpty ? <Empty /> : ""}
      {isLoading ? "" : <Pagination />}
    </Container>
  );
};
export default HomePage;
