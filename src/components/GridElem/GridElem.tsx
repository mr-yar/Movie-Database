import React from 'react';
import styled from 'styled-components';
import {GridCategory, GridValue} from './GridElem.styles';

type GridElemProps = {value: string; category: string};

export const GridElem = ({value, category}: GridElemProps): JSX.Element => (
  <Grid>
    <GridValue>{value}</GridValue>
    <GridCategory>{category}</GridCategory>
  </Grid>
);
