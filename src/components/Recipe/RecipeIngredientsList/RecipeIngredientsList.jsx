import {
  Box,
  ButtonWrapper,
  Img,
  List,
  ListHeaderText,
  ListItem,
  ListItemHeader,
  Measure,
  Title,
  Wrapper,
} from "./RecipeIngredientsList.styled";
import { CustomCheckbox } from "../Checkbox/Checkbox";
import { useSelector } from "react-redux";
import { selectShoppingList } from "../../../redux/selectors";

export const RecipeIngredientsList = ({ ingredients }) => {
  const list = useSelector(selectShoppingList);

  return (
    <Box>
      <List>
        <ListItemHeader>
          <ListHeaderText>Product</ListHeaderText>
          <div>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Add to list</ListHeaderText>
          </div>
        </ListItemHeader>
        {ingredients && ingredients.map(({ _id, title, thumb, measure }) => {
          const isChecked = list.some((item) => item.productId === _id && item.measure[0] === measure );
          
          if (!_id) {
            return null;
          }
          return (
            <ListItem key={_id}>
              <Wrapper>
                <Img alt={title} src={thumb} width={48} height={48} />
                <Title>{title}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <CustomCheckbox
                  ingredientId={_id}
                  isChecked={isChecked}
                  measure={measure} //fix str in arr
                />
              </ButtonWrapper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};