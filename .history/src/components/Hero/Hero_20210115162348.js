import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios'; // moved to custom hook
import { useEffect } from 'react';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import './Hero.scss';
import useData from '../../hooks/useData';
import Spinner from '../Spinner';
import Container from '../Container';

const Hero = () => {
  // console.log(data);

  // moved to custom hook
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   const { data } = await axios.get('data/hero-data.json');
  //   setData(data);
  //   new lazyloadPicturefillBackground();
  // };

  const [data, isLoading, isError] = useData('data/hero-data.json');
  console.log('data: ' + data + 'loading: ' + isLoading + 'error: ' + isError);

  useEffect(() => {
    if (data) {
      new lazyloadPicturefillBackground();
    }
  }, [data, isLoading, isError]);

  const { imgSrc1, imgSrc2, imgSrc3, imgSrc4, title, text } = data;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <div className="loading-error">
        <p>Oops - something went wrong ...</p>
      </div>
    );
  }

  return (
    <article className="section banner-block">
      <div className="banner">
        <div className="banner__background picturefill-background is-lazy">
          <span
            className="picturefill-background-source"
            data-src={imgSrc1}
          ></span>
          <span
            className="picturefill-background-source"
            data-src={imgSrc2}
            data-media="(min-width: 576px)"
          ></span>
          <span
            className="picturefill-background-source"
            data-src={imgSrc3}
            data-media="(min-width: 768px)"
          ></span>
          <span
            className="picturefill-background-source"
            data-src={imgSrc4}
            data-media="(min-width: 992px)"
          ></span>
        </div>

        <div className="container">
          <div className="banner__content">
            <div className="banner__inner">
              <h1 className="banner__heading">{title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: text
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;
