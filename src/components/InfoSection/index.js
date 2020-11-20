import React from 'react'
import { Button } from '../ButtonElement';
import {InfoContainer, 
InfoWrapper,InfoRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
SubTitle,
BtnWrap,
ImgWrap,
} from './InfoElements';
import {ReactComponent as Img1} from "../../images/svg-1.svg";
import {ReactComponent as Img2} from "../../images/svg-2.svg";
import {ReactComponent as Img3} from "../../images/svg-1.svg";


const InfoSection = ({LightBg, id, imgStart, topLine,LightText, headline, darkText, description, buttonLabel,ImgComp, alt, primary , dark, dark2}) => {
    const images = {
        "about": <Img1/>,
         "home": <Img2/>,
         "service":<Img3/>
    };
    
    return (
        <>
            <InfoContainer LightBg={LightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart ={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading LightText={LightText}>{headline}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                                <Button to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1: 0}
                                dark={dark ? 1 : 0}
                                dark2 = {dark2 ? 2 : 0}> {buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                               {images[id]}
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
