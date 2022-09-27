import { gql } from '@apollo/client'

export const LOCATION = gql`
  query location($locationID: String!) {
    location(locationID: $locationID) {
      _id
      title
      small_text
      address
      latitude
      longitude
      isType
      cover
      region
      linkToPost
    }
  }
`

export const LOCATIONS_AND_TP = gql`
  query locationsAndTP($input: ParamsLocationInput!) {
    locationsAndTP(input: $input) {
      total_locations
      locations {
        _id
        title
        isType
        address
        latitude
        longitude
        cover
      }
    }
  }
`

export const LOCATION_FOR_POPUR = gql`
  query location($locationID: String!) {
    location(locationID: $locationID) {
      title
      address
      cover
    }
  }
`
