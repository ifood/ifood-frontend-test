# SPTFD

- Only one page
- 2 components:
  - One list of featured playlists
  - One filter component with API filter fields and one local search text input to filter the playlists by "name".

Every time the user change any information on the filter component, the list should be refresh accordingly. In case of API filter field change you should recall the playlists API with the filter parameters every time.

Considering that we live in a chaotic and fast-changing world, the page should refresh its content every 30 seconds, to see if any information from the Spotify APIs had been changed.
