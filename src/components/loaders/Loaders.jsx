import Grid from "@mui/material/Grid";
import React from 'react'
import { Skeleton, Stack } from "@mui/material";

 export const LayoutLoader = () => {
  return (
    <Grid container height="calc(100vh - 4rem)" sx={{ width: "100%" }} spacing={"1rem"}>
        <Grid
          size={{ sm: 4, md: 3 }}
          sx={{ display: { xs: "none", sm: "block" } }}
          height="100%"
        >
          <Skeleton
            variant="rectangular"
            
            height={"100vh"}
            />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
         height="100%"
        >
         <Stack spacing={"1rem"} >
         {
            Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} variant="rounded" height={"5rem"} />
            ))
          }
          </Stack>

        </Grid>

        <Grid
          size={{ lg: 3, md: 4 }}
          sx={{ display: { xs: "none", md: "block" }}}
          height="100%"
        >
          <Skeleton
            variant="rectangular"
            height={"100vh"}
            />
        </Grid>
      </Grid>
  )
}

