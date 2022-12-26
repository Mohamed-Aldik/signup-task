import styled from "styled-components";

export const RegStyle = styled.div`

.card-signup 
{
    border-radius: 40px;
    transition: .3s;
}
.light .card-signup 
{
  animation-name: scale;
  animation-duration: 2s;  
  animation-fill-mode: forwards;
}
.dark .card-signup
{
  animation-name: scaleDark;
  animation-duration: 1.5s;  
  animation-fill-mode: forwards;
}
.head-signup+p span ,
.signup-nav{
    color: #ff6a5c;
    cursor: pointer;
    font-weight: bold;

}
.head-signup{
    font-size: 35px;
    font-weight: bold;
}

.light .head-signup,.light .head-signup+p ,.light .signup-nav{
    animation-name: trans1;
  animation-duration: 1s;  
  animation-fill-mode: forwards;
}
.head-signup{
  animation-duration: 1.3s; 
}
.head-signup+p{
  animation-duration: 1.6s; 
}
@keyframes scale {
  from {transform:scale(0.8);opacity:0 }
  to {transform:scale(1);opacity:1}
}
@keyframes scaleDark {
  from {transform:scale(0.85) }
  to {transform:scale(1)}
}
@keyframes trans1 {
  from {transform:translateX(-75px);opacity:0}
  to {transform:translateX(0);opacity:1}
}
`;