# LAST-PASS Clone

One Password to rule them all, One Password to find them, One Password to bring them all. and in the darkness bind them.

## Frontend

    <h1>React + Redux setup</h1> 

    Actions <--------------------------------------- Dispatch
        |                                              ||                                              |         |                                              |
        V                                              |
    Reducer                                            |
        |                                              |
        |                                              |
        |                                              |                             V                                              |
    Store ------------------------------------------> React Component
                                                            |
                                                            |
                                                    ------------------
                                                    |                |
                                                    |                |
                                                    V                V
                                                Containers         Presentational components          components
                                                [Smart]             [Dumb]

## Backend
