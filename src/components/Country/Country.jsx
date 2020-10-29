import React,{useState, useEffect} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core'
import {fetchCountries} from '../../api'
 import styles from './Country.module.css'

const Country=({handelCountryChange})=>{
    const[country, setCountry]= useState([])

     useEffect(()=>{
       const fetchCountryAPI=async ()=>{
           setCountry(await fetchCountries() )
       }

       fetchCountryAPI();
     },[setCountry])
     console.log(country)
    return(<div>
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handelCountryChange(e.target.value)}>
            <option value="">Global</option>
            {country.map((countries, i)=><option key={i} value={countries}>{countries} </option>)}
            </NativeSelect>
        </FormControl>
    </div>)
}

export default Country