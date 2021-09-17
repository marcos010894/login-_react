import Carousel from 'styled-components-carousel';
import img1 from "../../assets/img/celular.png";
import img2 from "../../assets/img/stick.png";
import img3 from "../../assets/img/celularM.png";
import styled from 'styled-components';
import { Img, DivImg, TextImg } from '../styled/style';
const sliders = [
  {
    'imagem': img1,
    'texto': 'Faça login de qualquer lugar.'
  },
  {
    'imagem': img2,
    'texto': 'Os seus dados estão protegidos.'
  },
  {
    'imagem': img3,
    'texto': 'Faça tudo com um so clique.'
  }
]
export const Slider = () => (  
    <Carousel
        center
        infinite={true}
        showArrows={false}
        showIndicator
        slidesToShow={1}
        swipeable={false}
    >
        <DivImg>
            <Img src={sliders[0].imagem}></Img>            
            <TextImg>{sliders[0].texto}</TextImg>
        </DivImg>
        
        <DivImg>
        <Img src={sliders[1].imagem}></Img>            
            <TextImg>{sliders[1].texto}</TextImg>
        </DivImg>       
        
        <DivImg>
        <Img src={sliders[2].imagem}></Img>            
            <TextImg>{sliders[2].texto}</TextImg>
        </DivImg>
       
    </Carousel>
);