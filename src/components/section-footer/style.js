import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  .show-more {
    display: flex;
    align-items: center;
    flex-grow: 0;
    background-color: #fefdfc;
    padding: 10px 20px;
    border: 1px solid #eee;
    cursor: pointer;
    color: ${(props) => props.color};
    span {
      margin-right: 10px;
      font-weight: 700;
    }
  }
`
