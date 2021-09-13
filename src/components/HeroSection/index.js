import React from "react";
import Video from '../../videos/video.mp4';
// import {Button} from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    // HeroBtnWrapper,
    // ArrowFoward,
    // ArrowRight
} from './HeroElements'

const HeroSection = () => {

    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay muted loop src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Olá, bem vindo</HeroH1>
                <HeroP>
                  Site desenvolvido com o conceito de One Page utilizando ReactJS e Styled-Components
                </HeroP>
                {/* <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get started {hover ? <ArrowFoward /> : <ArrowRight
                         />}
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;