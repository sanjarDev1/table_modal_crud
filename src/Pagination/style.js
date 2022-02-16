import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`
export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
`

export const NumContainer = styled.div`
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-left: 5px;
  width: 46px;
  height: 46px;
  border-radius: 4px;
  border: ${({ current }) =>
    current ? ' 1px solid #1890ff' : '1px solid whitesmoke'};
  cursor: pointer;
  color: ${({ current }) => (current ? '#1890ff' : '#000')};
  :hover {
    color: #1890ff;
    border-color: #1890ff;
    transition: color, border 0.7s;
  }
  @media (max-width: 550px) {
    width: 28px;
  }
`

export const Page = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 150px;
  margin-left: 10px;
  padding: 0 10px;
  cursor: pointer;
  white-space: nowrap;
  color: #000;
  border: none;
  :hover {
    color: #1890ff;
    transition: color, border 0.7s;
  }
`
export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px 0 10px;
  color: #000;
  height: inherit;
  cursor: pointer;
  min-width: 24px;
  transition: color 0.3s;
  :hover {
    color: #1890ff;
    transition: color 0.3s;
  }
`
