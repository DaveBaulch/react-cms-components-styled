import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import '../../sass/components/_cards.scss';

const Cards = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/cards-data.json');
    setData(data);
    new lazyloadPicturefillBackground();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <article className="section card-list-block">

      <div className="container">

        <div className="card-list">

          <div className="card-list__heading">
            <h2>{ sata.title }</h2>
          </div>

          <ol class="card-list__list">

            <li class="card-list__item" v-for="item in blockData.data" :key="item.id">
              <Card data="item" />
            </li>

          </ol>

        </div>

      </div>

    </article>
  );
};

export default Cards;
