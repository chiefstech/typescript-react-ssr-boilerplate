window.scrollTo = () => { };

// Polyfill for rAF.
//
// This removes the React 16 warning "React depends on requestAnimationFrame"
// when using Enzyme with React 16.
// TODO: Remove this when Enzyme adds support for React 16 (v3)
window.requestAnimationFrame = function(cb) {
  return setTimeout(cb, 0);
};
window._appconfig = {
  licensee: {
      licensee: {
          id: 3,
          address: {
              country: 'CA'
          }
      }
  }
};

/*** Mock Google Maps JavaScript API ***/
// https://github.com/hibiken/react-places-autocomplete/issues/189
window.google ={
  maps:{
      Marker:class{},
      Map:class{ setTilt(){} fitBounds(){}},
      LatLngBounds:class{},
      places:{
          Autocomplete(){},
          AutocompleteService(){},
          AutocompleteSessionToken(){},
          PlacesServiceStatus: {
              INVALID_REQUEST: 'INVALID_REQUEST',
              NOT_FOUND: 'NOT_FOUND',
              OK: 'OK',
              OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
              REQUEST_DENIED: 'REQUEST_DENIED',
              UNKNOWN_ERROR: 'UNKNOWN_ERROR',
              ZERO_RESULTS: 'ZERO_RESULTS',
          },
          PlacesAutocomplete:{
              INVALID_REQUEST: 'INVALID_REQUEST',
              NOT_FOUND: 'NOT_FOUND',
              OK: 'OK',
              OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
              REQUEST_DENIED: 'REQUEST_DENIED',
              UNKNOWN_ERROR: 'UNKNOWN_ERROR',
              ZERO_RESULTS: 'ZERO_RESULTS',
          }
      },

      MarkerClusterer:class{},
      Geocoder:class{},
  }
};

window.jest = true;
