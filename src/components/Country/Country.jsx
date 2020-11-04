import React,{useState, useEffect} from 'react';
import {FormControl, NativeSelect,TextField} from '@material-ui/core'
import {fetchCountries} from '../../api'
 import styles from './Country.module.css'
 import Autocomplete from '@material-ui/lab/Autocomplete';
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
            {/* <NativeSelect defaultValue="" onChange={(e)=>handelCountryChange(e.target.value)}>
            <option value="">Global</option>
            {country.map((countries, i)=><option key={i} value={countries}>{countries} </option>)}
            </NativeSelect> */}

            <Autocomplete
            id="debug"
            options={country}
           // getOptionLabel= {(option) => option.title}
          onChange={(event,country) => handelCountryChange(country)}
          // onSelect={(event) => handelCountryChange(event)}
           style={{ width: 300 }}
            debug
            renderInput={(params) => <TextField {...params} label="Global" margin="normal"/>}
            />

            
        </FormControl>
    </div>)
    
}

export default Country