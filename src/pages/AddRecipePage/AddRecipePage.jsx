import React from 'react';
import { MainPageTitle } from 'reusableComponents/ManePageTitle/ManePageTitle';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PopularRecipe } from 'components/PopularRecipe/PopularRecipe';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { Background } from 'reusableComponents/Background/Background';
import { Container } from 'reusableComponents/Container/Container';

const AddRecipePage = () => {
  return (
    <>
      <Background />
      <Container>
        <MainPageTitle title="Add recipe" />
        <AddRecipeForm />
        <FollowUs />
        <PopularRecipe />
      </Container>
    </>
  );
};

export default AddRecipePage;
