import styled from "styled-components"
import Fab from "@material-ui/core/Fab"

export const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

.container{
width: 20%;
height: 200px;
border: 2px solid #CCC;
text-align: center;
padding: 20px;
margin: 10px;
}
img{
    width: 200px;
    height: 150px;
}
`;
export const AddRecipeButton = styled(Fab)`
position: fixed !important;
right: 20px;
bottom: 20px;
z-index: 3;
`;

