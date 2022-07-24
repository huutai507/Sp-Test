import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { data } from '../data/data';

export default function Home() {
  const [inputSearch, setInputSearch] = useState('');
  const [listProduct, setListProduct] = useState(data);

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  };

  const clearInput = (e) => {
    setInputSearch('');
  };

  const filterData = data.filter((item, index) => {
    if (inputSearch === '' && index) {
      return item;
    } else if (inputSearch !== '') {
      return item.name.toLowerCase().includes(inputSearch);
    }
  });
  const replaceArea = (string, area) => {
    return string.replace('amazon.com', area);
  };

  const fetchMoreData = () => {
    setListProduct(data.slice(0, listProduct.length + 10));
  };

  useEffect(() => {
    setListProduct(data.slice(0, 10));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Best Product Trending</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='search-bar'>
        <div className='input-content'>
          <div className='content-title'>
            <p>Enter product code in reels at below</p>
          </div>
          <input
            className='input-search'
            type='text'
            placeholder='Example: 3'
            onChange={inputHandler}
            value={inputSearch}
            autoFocus
          />
          {inputSearch && (
            <span className='clear-input' onClick={clearInput}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                color='#afafaf'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          )}
        </div>
      </div>
      <div className='container-list'>
        {inputSearch ? (
          <div className='product-list'>
            {filterData.reverse().map((item, index) => (
              <div className='product-item' key={index}>
                <img src={item.imglink} className='imglink' />
                <div className='product-text'>
                  <p>
                    Product code: <span className='code'>{item.name}</span>
                  </p>
                  <h4 className='north-america'>GLOBAL</h4>
                  <a href={item.usalink} target='_blank' className='custom-button'>
                    View Prices on Amazon
                  </a>
                  <a href='https://rebrand.ly/weightlossexipure' target='_blank' className='custom-button check'>
                    Donald Trump Golden Checks <br /> Best Gift For a Patriot!
                  </a>
                  <a href='https://rebrand.ly/goldencheck' target='_blank' className='custom-button weightloss'>
                    The TROPICAL SECRET For Healthy Weight Loss
                  </a>
                  <h4 className='north-america'>AMERICA</h4>
                  <a href={item.usalink} target='_blank' className='custom-button'>
                    USA ‣ View Prices on Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.ca')} target='_blank' className='custom-button'>
                    Canada ‣ View Prices on Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.com.br')} target='_blank' className='custom-button'>
                    Brazil ‣ View Prices on Amazon
                  </a>
                  <h4 className='europe'>EUROPE</h4>
                  <a href={replaceArea(item.usalink, 'amazon.co.uk')} target='_blank' className='custom-button'>
                    UK ‣ View Prices on Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.de')} target='_blank' className='custom-button'>
                    DE ‣ Preise auf Amazon Ansehen
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.it')} target='_blank' className='custom-button'>
                    ITALIA ‣ Visualizza i Prezzi su Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.fr')} target='_blank' className='custom-button'>
                    FRANCE ‣ Voir Les Prix sur Amazon
                  </a>
                  <a href={replaceArea(item.usalink, 'amazon.es')} target='_blank' className='custom-button'>
                    ESPAÑA ‣ Ver Precios en Amazon
                  </a>
                  <h4 className='europe'>ASIA</h4>
                  <a href={replaceArea(item.usalink, 'amazon.in')} target='_blank' className='custom-button'>
                    INDIA ‣ अमेज़न पर कीमतें देखें
                  </a>
                </div>
              </div>
            ))}
            <div>{!filterData.length ? <p>No matching results. Please search again</p> : <p></p>}</div>
          </div>
        ) : (
          <div>
            <InfiniteScroll
              dataLength={listProduct.length}
              next={fetchMoreData}
              hasMore={listProduct.length == data.length ? false : true}
              loader={<div className='dashed-loading'></div>}
              className='product-list'
            >
              {listProduct.map((item, index) => (
                <div className='product-item' key={index}>
                  <img src={item.imglink} className='imglink' />
                  <div className='product-text'>
                    <p>
                      Product code: <span className='code'>{item.name}</span>
                    </p>
                    <h4 className='north-america'>GLOBAL</h4>
                    <a href={item.usalink} target='_blank' className='custom-button'>
                      View Prices on Amazon
                    </a>
                    <a href='https://rebrand.ly/weightlossexipure' target='_blank' className='custom-button check'>
                      Donald Trump Golden Check <br /> Best Gift For a Patriot!
                    </a>
                    <a href='https://rebrand.ly/goldencheck' target='_blank' className='custom-button weightloss'>
                      The TROPICAL SECRET For Healthy Weight Loss
                    </a>
                    <h4 className='north-america'>AMERICA</h4>
                    <a href={item.usalink} target='_blank' className='custom-button'>
                      USA ‣ View Prices on Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.ca')} target='_blank' className='custom-button'>
                      Canada ‣ View Prices on Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.com.br')} target='_blank' className='custom-button'>
                      Brazil ‣ View Prices on Amazon
                    </a>
                    <h4 className='europe'>EUROPE</h4>
                    <a href={replaceArea(item.usalink, 'amazon.co.uk')} target='_blank' className='custom-button'>
                      UK ‣ View Prices on Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.de')} target='_blank' className='custom-button'>
                      DE ‣ Preise auf Amazon Ansehen
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.it')} target='_blank' className='custom-button'>
                      ITALIA ‣ Visualizza i Prezzi su Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.fr')} target='_blank' className='custom-button'>
                      FRANCE ‣ Voir Les Prix sur Amazon
                    </a>
                    <a href={replaceArea(item.usalink, 'amazon.es')} target='_blank' className='custom-button'>
                      ESPAÑA ‣ Ver Precios en Amazon
                    </a>
                    <h4 className='europe'>ASIA</h4>
                    <a href={replaceArea(item.usalink, 'amazon.in')} target='_blank' className='custom-button'>
                      INDIA ‣ अमेज़न पर कीमतें देखें
                    </a>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
        )}
      </div>
    </div>
  );
}
