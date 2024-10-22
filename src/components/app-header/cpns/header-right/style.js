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
    position: relative;
    margin-left: 10px;
    border: 1px solid #dddddd;
    padding: 4px 15px;
    border-radius: 30px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    .icon-list {
      display: flex;
      align-items: center;
      .icon {
        &:nth-child(2) {
          margin-left: 10px;
        }
      }
    }
    .menu-list {
      position: absolute;
      top: 50px;
      right: 0;
      border: 1px solid #ddd;
      border-radius: 10px;
      background-color: #fff;
      font-size: 14px;
      overflow: hidden;
      .menu-list-item {
        height: 40px;
        line-height: 40px;
        width: 238px;
        padding-left: 10px;

        &:hover {
          background-color: #f7f7f7;
        }
        &.border-bottom {
          border-bottom: 1px solid #dddddd;
        }
      }
    }
  }
`
