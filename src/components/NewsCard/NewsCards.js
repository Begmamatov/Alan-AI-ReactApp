import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import NewCard from '../NewCard/NewCard'

export default function NewsCards({ articles }) {
    return (
        <Grow in>
            <Grid container alignItems='stretch' spacing={3} >
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewCard article={article} index={index} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}
