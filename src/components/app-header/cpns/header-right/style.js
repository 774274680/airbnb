import styled from 'styled-components'

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  .btns {
    display: flex;
    align-items: center;
    .btn {
      margin-left: 20px;
    }
  }
  .profile {
    display: flex;
    align-items: center;
    margin-left: 10px;
    color: ${(props) => props.theme.color.primaryColor};
    .icon {
      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
`
