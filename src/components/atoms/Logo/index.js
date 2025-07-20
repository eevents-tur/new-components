import React from 'react';
import { LogoEvents, LogoTexto } from './styles';
import logoEvents from '../../../../assets/LogoText.png';
import logoEeve from '../../../../assets/LogoEeve.png';
import { metrics, theme } from '../../../styles';

export const Logo = ({ size }) => {
  return <LogoTexto source={logoEvents}/>;
};

export const LogoEeve = ({ size }) => {
  return <LogoEvents source={logoEeve} />;
};
