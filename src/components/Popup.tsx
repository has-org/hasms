'use client'
import styled from 'styled-components';
export const ClickButton = styled.div`
    background: powderblue;
    padding: 10px;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
    width: 90px;
    text-align: center;
`
const PopupCard = styled.div`
  width: 300px;
  position: absolute;
  padding: 8px;
  left: 45%;
  top: 50%;
  background-color: white;
  padding: 40px;
  transform: translateY(-50%);
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.75);
`;

type Popup = {
    show: boolean;
    togglePopup: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;

}


export const Popup = ({ togglePopup, children }: Popup) => (
    <Overlay>
        <PopupCard>
            {children}
            <ClickButton onClick={togglePopup}>Close</ClickButton>
        </PopupCard>
    </Overlay>
);