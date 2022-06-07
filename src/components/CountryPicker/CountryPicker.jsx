import React, {useState,useEffect} from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {

  const [fetchedCountries,setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI();
  },[setFetchedCountries])

console.log("fetched Countries",fetchedCountries )


  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="global">Global</option>
          {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
