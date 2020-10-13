import React,{ useCallback, useEffect, useMemo, useState,
}from 'react';

import Hero from 'components/Hero';

import { HomeContainer } from './styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
};

export default Home;
