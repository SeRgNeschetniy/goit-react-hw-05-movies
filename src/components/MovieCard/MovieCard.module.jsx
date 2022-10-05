import styled from 'styled-components';

export const Container = styled.div`
  height: 450px;
  background-position: right -200px top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.backdrop_path});
`;
//https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg

export const Poster = styled.img`
  width: 300px;
`;

export const Description = styled.div`
  padding-left: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  background-image: linear-gradient(
    to right,
    rgba(220.5, 220.5, 220.5, 1) 150px,
    rgba(220.5, 220.5, 220.5, 0.84) 100%
  );
`;
