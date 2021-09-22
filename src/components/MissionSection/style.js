import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const MissionContainer = styled(Container)`
    padding: 0 40px 0px 129px;
    @media screen and (max-width: 768px) {
        padding: 0 16px 0px 16px;
        margin-top: 45px;
    }
`
export const Missions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Dental = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 49px;
    margin-top: 35px;
    & > div {
        width: 30%;
    }
    @media screen and (max-width: 768px) {
       flex-direction: column;
        text-align: center;
        gap: 5px;
       & > div {
            width: 100%;
        }
    }
`
export const Title = styled.div`
    width: 63%;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        h1{
            font-size: 35px;
        }
    }
`
export const Tooth = styled.div`
    img {
        width: 100%;
		height: 100%;
    }
	@media screen and (max-width: 768px) {
		order: 3;
		img {
			height: 413.92px;
		}
	}
`