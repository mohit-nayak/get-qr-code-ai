"use client"

import countries from "country-data/data/countries.json"

const formattedCountries = countries?.flatMap(
  ({ alpha2, emoji, countryCallingCodes }) => {
    if (alpha2 && emoji && countryCallingCodes) {
      return {
        phoneCode: countryCallingCodes?.[0],
        flag: emoji,
        alpha2,
      }
    }
    return []
  },
)

export const useCountries = () => {
  const getAll = formattedCountries
  const getByValue = (value: string) => {
    return formattedCountries?.find((data) => data?.phoneCode === value)
  }

  return {
    getAll,
    getByValue,
  }
}
