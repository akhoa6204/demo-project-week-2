import {
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Row from "./Row";
import type { CartItem } from "../../../interface/ICartItem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const heads = ["tên sản phẩm", "giá", "số lượng"];
const TableComponent = ({
  cart,
  handleChangeQuantity,
  handleRemoveItems,
  handleToggleSelectedItems,
  handleToggleAllSelectedItems,
  selectedItems,
}: {
  cart: CartItem[];
  handleChangeQuantity: (id: number, qty: number) => void;
  handleRemoveItems: (ids: number[]) => void;
  handleToggleSelectedItems: (id: number) => void;
  handleToggleAllSelectedItems: () => void;
  selectedItems: number[];
}) => {
  return (
    <Table>
      <TableHead sx={{ bgcolor: "#f3f2f2ff" }}>
        <TableRow>
          <TableCell>
            <Checkbox
              size="small"
              checked={selectedItems.length === cart.length && cart.length > 0}
              indeterminate={
                selectedItems.length > 0 && selectedItems.length < cart.length
              }
              onChange={handleToggleAllSelectedItems}
            />
          </TableCell>
          {heads.map((head, i) => (
            <TableCell
              key={i}
              sx={{
                textTransform: "uppercase",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {head}
            </TableCell>
          ))}
          <TableCell>
            {selectedItems.length ? (
              <IconButton
                color="error"
                onClick={() => handleRemoveItems(selectedItems)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            ) : (
              ""
            )}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cart.map((item: CartItem) => (
          <Row
            key={item.id}
            handleChangeQuantity={handleChangeQuantity}
            handleToggleSelectedItems={handleToggleSelectedItems}
            selectedItems={selectedItems}
            handleRemoveItems={handleRemoveItems}
            {...item}
          />
        ))}
      </TableBody>
    </Table>
  );
};
export default TableComponent;
