import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 200px;
  height: 250px;
  position: relative;
  display: flex;
  border-radius: 5px;
  color: ${props => props.color};
`

export const Column1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const Column2 = styled.div`
  display: flex;
  flex: 3;
  /*border: 1px solid black;*/
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const Column3 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  bottom: 20px;
`

export const TLNumber = styled.div`
  left: 5;
  top: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 2em;
`

export const BRNumber = styled.div`
  right: 5;
  bottom: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
`

export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  grid-template-rows: repeat(${props => props.column}, minmax(1fr, 3fr))

`

export const GridItem = styled.div`
  font-size: 2em;
  margin: auto;
`