import styled from 'styled-components'

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  .tab-item {
    padding: 10px;
    border: 1px solid #eee;
    margin-right: 10px;
    cursor: pointer;
    background-color: #fdfdfc;
    white-space: nowrap;
    &.active {
      background-color: ${(props) => props.theme.color.secondaryColor};
      color: #fff;
    }
  }
`
