import React from 'react'
import Icon1 from '../../images/svg-7.svg'
import Icon2 from '../../images/svg-8.svg'
import Icon3 from '../../images/svg-9.svg'
import { 
    ServicesContainer,
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesElements'

const Services = () => {
    return (
       <ServicesContainer id="services">
            <ServicesH1>Minhas Habilidades</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> HTML| JavaScript | CSS</ServicesH2>
                    <ServicesP>2 anos de experiência com a linguagem JavaScript e conhecimentos avançados em HTML e CSS</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>ReactJS</ServicesH2>
                    <ServicesP>1 Ano de experiência com a biblioteca ReactJS e conhecimentos em Styled-Components</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Git</ServicesH2>
                    <ServicesP>2 Anos de experiência com o sistema de controle de versão GIT e conhecimentos em padrões de commit </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
       </ServicesContainer>
    )
}

export default Services
