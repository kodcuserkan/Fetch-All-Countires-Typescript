import { useEffect, useState } from "react";
import { CountryType } from "./types/Countries";
import "./App.css";
import axios from "axios";
import Loading from "./components/Loading";
import SingleCountry from "./components/SingleCountry";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true);

    try {
      fetchCountries()
    } catch (error) {
      console.log("Error while fetching data", error);
      alert(`Error while fetching data ${error}`)
    } finally {
      setLoading(false)
    }

    return () => {
      fetchCountries()
    }

  }, [])

  const fetchCountries = async () => {
    const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
    if(data) {
      setCountries(data)
    }
  }

  // console.log("Countries", countries);

  return (
    <div className="App">
      <h1>Countries App with TS</h1>
      <Loading loading={loading}>
        {
          countries.map(country => <SingleCountry country={country} key={country.numericCode} />)
        }
      </Loading>
    </div>
  );
}

export default App;
