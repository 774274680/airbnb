import styled from 'styled-components'

export const ItemWrapper = styled.div`
  width: ${(props) => props.width};
  margin-bottom: 10px;
  .inner {
    margin: 0 10px;
  }
  .cover {
    position: relative;
    padding: 66% 8px 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .verify_info {
    font-size: 12px;
    margin: 10px 0;
  }
  .name {
    line-height: 1.5;
    font-weight: 500;
    font-size: 15px;

    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    overflow: hidden;
  }
  .price {
    font-size: 14px;
    margin: 10px 0;
  }
  .others {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`
