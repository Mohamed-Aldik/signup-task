import styled from "styled-components";

export const BtnStyle = styled.div`
 > div{
   display: flex;
align-items: center;
justify-content: space-between;
gap: 24px;
 }
 button p{
    font-size: 14px;
    white-space: nowrap;
 }
 @media (max-width:576px) {
  button span{
    display: none;
  }
  button p{
    font-size: 12px;
 }
 }
  button{
    font-weight: 500;
    padding: 15px 0;
    border-radius:10px;
    background-color: #ffe3e1;
    color: black;
 }
   button:first-of-type{
    padding: 15px 24px;
    flex: 2;
}

.light button{
   animation-name: trans1;
  animation-duration:2s ;
  animation-fill-mode: forwards;
}
.light button span,.light button svg,.light button p{
   animation-name: fade;
  animation-duration:2s ;
  animation-fill-mode: forwards;
}
.light button svg:first-of-type{
  animation-duration:2.3s ;
}
.light button svg:last-of-type{
  animation-duration:2.4s ;
}
@keyframes fade {
  from {opacity:0;transform:scale(.1); }
  to {opacity:1;transform:scale(1);}
}
`;