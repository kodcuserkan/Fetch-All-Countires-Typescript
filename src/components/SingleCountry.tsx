import { FunctionComponent } from "react";
import { CountryType } from "../types/Countries"

interface ICountry {
    country: CountryType
}

const SingleCountry:FunctionComponent<ICountry> = props => {
    const { country : {name, capital} } = props;

    return (
        <div className="single-country">
            <p>
                {`${name} - ${capital || "N/A"}`}
            </p>
        </div>
    )
}

export default SingleCountry
