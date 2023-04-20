import styled from "styled-components";

export const MainBox = styled.div`
  @media screen and (max-width: 1439.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1;
  letter-spacing: -0.24px;
  ${(p) => p.theme.sizes.tablet} {
  }
`;

export const Text = styled.p`
margin-left: 14px;
  color: ${(p) => p.theme.colors.recipePreparationTextColor};
 font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 558px;
`;

export const Box = styled.div`
  margin-top: 28px;
  ${(p) => p.theme.sizes.tablet} {
    margin-top: 32px;
  }
  ${(p) => p.theme.sizes.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 260px;
  }
`;

export const Item = styled.li`
  display: flex;
  :not(:first-child) {
    margin-top: 14px;
  }
`;

export const SpanBox = styled.div`
  color: white;
`;
export const Span = styled.span`
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: 1.3;
  border-radius: 50%;
  display: block;
  padding: 5px 10px;
  background: ${(p) => p.theme.colors.green};
  ${(p) => p.theme.flexCentered};
`;

export const Img = styled.img`
  @media screen and (max-width: 1439.98px) {
    margin-top: 40px;
  }
  width: 343px;
  height: 250px;
  ${(p) => p.theme.sizes.tablet} {
    width: 433px;
    height: 332px;
  }
`;
