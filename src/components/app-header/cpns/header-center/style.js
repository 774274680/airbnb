import styled from 'styled-components'

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  height: 48px;
  padding: 0 10px 0 20px;
  border-radius: 30px;
  width: 300px;
  cursor: pointer;
  span {
    font-size: 14px;
    font-weight: 700;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${(prop) => prop.theme.color.primaryColor};
    /* color: ${(prop) => prop.theme.color.primaryColor}; */
  }
`
