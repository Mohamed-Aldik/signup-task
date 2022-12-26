import styled from "styled-components";

export const FormStyle = styled.div`
 .btn{
    font-weight: 550;
    padding: 15px 0;
    border-radius:10px;
    background-color: #ff685d;
 }

 .light .input, .light .btn{
   animation-name: trans1;
  animation-duration:1.4s ;
  animation-fill-mode: forwards;
}
.input:first-of-type{
    animation-duration:1s ;

}
.input:nth-last-of-type(){
  animation-duration:1.8s ;

}
.btn{
  animation-duration:1s ;
}
`;