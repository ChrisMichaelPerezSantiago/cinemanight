 <a href="https://github.com/ChrisMichaelPerezSantiago/cinemanight#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/cinemanight/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/cinemanight/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a><br>
  <a href="https://nodei.co/npm/cinemanight/"><img src="https://nodei.co/npm/cinemanight.png"></a>



# CINEMANIGHT API
*This API will give you access to the content of the pedropolis.tv page, you can see the entire movies and series catalog and enjoy each chapter.*

<img width="100%" src="./src/assets/logo.png">


## 📣Read this please!📣
*The data provided by the API are in Spanish*

## 🚀 ... Deployment API [BASE URL]
- `https://cinemanight.chrismichael.now.sh/api/v1/`


## 🚀 ... Deployment API Examples [ENDPOINTS]
- `https://cinemanight.chrismichael.now.sh/api/v1/series/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/movies/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/search/Dark`
- `https://cinemanight.chrismichael.now.sh/api/v1/genres/accion/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/episodes/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/latestEpisodes`
- `https://cinemanight.chrismichael.now.sh/api/v1/video_serie/ver-dark-2x8`
- `https://cinemanight.chrismichael.now.sh/api/v1/video_movie/ver-x-men-fenix-oscura/`


## API Functions
- search       
- getAllSeries
- getAllMovies
- getByGenres
- getLatestEpisodes
- getLatestEpisodesAdded
- getSeriesVideoContent
- getMoviesVideoContent


## Use of each function 

### getAllSeries([page])

```json
// 20190902160330
// https://cinemanight.chrismichael.now.sh/api/v1/series/1

{
  "series": [
     {
      "id": "ver-departure-vuelo-716",
      "title": "Departure: Vuelo 716",
      "sinopsis": "Serie que investiga las conspiraciones que rodean al caso del vuelo 716: un avión de pasajeros que desaparece sobre el Océano Atlántico. Tras el misterioso accidente, Kendra Malley, una brillante investigadora de aviación que acaba de quedarse viuda, intentará esclarecer lo ocurrido a petición de su exjefe y mentor, Howard Lawson.",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/9UX4O800c5PTVN7HcmdmFoevojB-185x278.jpg",
      "rating": "10",
      "year": "2019",
      "extra": [
        {
          "channel": "unknown",
          "first_air_date": " First air date Jul. 10, 2019",
          "last_air_date": " Última transmisión Aug. 14, 2019",
          "total_seasons": "1",
          "total_episodes": "6",
          "season_list": [
            {
              "season": 1,
              "episodes": [
                "1x1",
                "1x2"
              ]
            }
          ],
          "cast_members": {
            "creator": {
              "name": "unknown",
              "poster": "https://image.tmdb.org/t/p/w92"
            },
            "members_list": [
              {
                "members_info": [
                  {
                    "characters": {
                      "real_name": "unknown",
                      "character": "unknown"
                    },
                    "poster": "unknown"
                  }
                ]
              }
            ]
          },
          "similar_series": [
            {
              "id": "press",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/03/9cuIcceq9JiVkWsSZonj0hglDAT-185x278.jpg"
            },
            {
              "id": "ver-cheat",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/03/gVhL9jFUMikxLYjA1m3ZwRvkQw3-185x278.jpg"
            },
            {
              "id": "ver-el-tigre-veron",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/07/lzKsTPZzzNfUsTKXzRVobhs4C5N-185x278.jpg"
            },
            {
              "id": "muneca-rusa",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/02/4WijEAbnGMJifP6uepGALci3Jf-185x278.jpg"
            },
            {
              "id": "ozark",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/08/tNDZavjaXfO8poyBY6zpO54aL2e-185x278.jpg"
            },
            {
              "id": "ver-the-twilight-zone",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/04/7gTd9tIEHlDeS07KIt4aYeN9svx-185x278.jpg"
            },
            {
              "id": "ver-les-miserables",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/01/vD5gUfFYEuYXwfOVJQjLIQTGs0s-185x278.jpg"
            },
            {
              "id": "greyzone",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/06/t2K3JAWCuu8kXBJ2vPMt44go1F7-185x278.jpg"
            },
            {
              "id": "lykkeland",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/01/87L3UF1Y0gAMufigq6J9NyKz2xg-185x278.jpg"
            },
            {
              "id": "ver-metodo",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/06/igejqMFDYKThcLLNcoOlSxZICmz-185x278.jpg"
            },
            {
              "id": "ver-too-old-to-die-young",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/06/cG9tZhKilWl5BhtKIPp5mABT1el-185x278.jpg"
            },
            {
              "id": "kiss-me-first",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/04/ki.jpg"
            }
          ]
        }
      ]
    },
    // ...........
  ]
}
```

### getAllMovies([page])
```json
// 20190902163413
// https://cinemanight.chrismichael.now.sh/api/v1/movies/1

{
  movies: [
    {
      "id": "ver-x-men-fenix-oscura",
      "title": "X-Men: Fénix Oscura (X-Men: Dark Phoenix)",
      "sinopsis": "Durante una misión de rescate en el espacio, Jean casi muere al ser alcanzada por una misteriosa fuerza cósmica. Cuando regresa a casa, esta fuerza no solo la ha hecho infinitamente más poderosa, sino también mucho más inestable. Mientras lucha con la entidad que habita en su interior, Jean desata sus poderes de formas que no puede controlar ni comprender. ...",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/06/rdByKDkfyVuVSrkllzxKYXiZmTd-185x278.jpg",
      "rating": "9.2",
      "quality": "HD 1080",
      "year": "2019",
      "extra": [
        {
          "air_date": "Jun. 05, 2019",
          "country": "USA",
          "runtime": "114 Min",
          "rated": "PG-13",
          "cast_members": {
            "creator": {
              "name": "Simon Kinberg",
              "poster": "https://image.tmdb.org/t/p/w92/yXlDADc2rLEMLTFZAw9irqXMq2J.jpg"
            },
            "members_list": [
              {
                "members_info": [
                  {
                    "characters": {
                      "real_name": "Sophie Turner isJean Grey / Dark Phoenix",
                      "character": "Jean Grey / Dark Phoenix"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/ed4ajSYdv49j9OF7yMeG8Hznrrt.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "James McAvoy isCharles Xavier / Professor X",
                      "character": "Charles Xavier / Professor X"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/oPIfGm3mf4lbmO5pWwMvfTt5BM1.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Michael Fassbender isErik Lensherr / Magneto",
                      "character": "Erik Lensherr / Magneto"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/oexNPLumoFpazzzUqzBSDDYiUg1.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Jennifer Lawrence isRaven Darkholme / Mystique",
                      "character": "Raven Darkholme / Mystique"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/naZyy9IqAQDaAbr1kYShLdg6aPR.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Jessica Chastain isVuk",
                      "character": "Vuk"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Nicholas Hoult isHank McCoy / Beast",
                      "character": "Hank McCoy / Beast"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/h1gXgpuXERZTVhxMdjT7uvXIyq6.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Evan Peters isPeter Maximoff / Quicksilver",
                      "character": "Peter Maximoff / Quicksilver"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/2a1XA1ynmbZZj2nauwsc03OzRB.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Tye Sheridan isScott Summers / Cyclops",
                      "character": "Scott Summers / Cyclops"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/dECHNyAs5ZrEKYPN4LpyjczUzVd.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Kodi Smit-McPhee isKurt Wagner / Nightcrawler",
                      "character": "Kurt Wagner / Nightcrawler"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/vJLSwYtJH8NHEUDh508XxewnrjD.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Alexandra Shipp isOroro Munroe / Storm",
                      "character": "Ororo Munroe / Storm"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/98AfO5NSqWnlhIxjSg08gGYdxUG.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "unknown",
                      "character": "unknown"
                    },
                    "poster": "unknown"
                  }
                ]
              }
            ]
          },
          "similar_movies": [
            {
              "id": "la-primera-purga-la-noche-de-las-bestias",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/07/pu-185x278.jpg"
            },
            {
              "id": "ver-rompiendo-las-reglas-2",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/04/wQkYieCKVzRglLvJADSEHMm12Fm-185x278.jpg"
            },
            {
              "id": "the-bad-cat",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/09/mdnSGvu7IWfDye27a19U6xqKQgO-185x278.jpg"
            },
            {
              "id": "codigo-oculto-branded",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/08/5qSWvkvbG4b0ZZov1obLovxFHg7-185x278.jpg"
            },
            {
              "id": "tigre-y-dragon-2-la-espada-del-destino",
              "poster": "https://pedropolis.tv/wp-content/uploads/2016/02/draa-185x278.jpg"
            },
            {
              "id": "ver-asher",
              "poster": "https://pedropolis.tv/wp-content/uploads/2019/06/o5p4Ev49KVR4itGWy3OHyqnRsz8-185x278.jpg"
            },
            {
              "id": "ver-between-worlds",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/12/kage-185x278.jpg"
            },
            {
              "id": "ver-trauma",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/12/enDtNl8gS60QQd9eoVPGQ2T6Dlq-185x278.jpg"
            },
            {
              "id": "ver-el-hombre-que-mato-a-don-quijote",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/11/3PGBzDjZf2IWHIAi1f4lpTuIQJI-185x278.jpg"
            },
            {
              "id": "pesadillas",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/08/vlK07mEpwyIXlrnYEQwWpPgmAaW-185x278.jpg"
            },
            {
              "id": "jungle",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/08/jun-185x278.jpg"
            },
            {
              "id": "ploey-nunca-volaras-solo-ploey-you-never-fly-alone",
              "poster": "https://pedropolis.tv/wp-content/uploads/2018/04/PLOEY-185x278.jpg"
            }
          ]
        }
      ]
    },
    // ...........
  ]
}
```

### search([title])
```json
// 20190902163430
// https://cinemanight.chrismichael.now.sh/api/v1/search/Dark

{
  "content": [
     {
      "id": "ver-dark",
      "title": "Dark",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/06/5LoHuHWA4H8jElFlZDvsmU2n63b-150x150.jpg",
      "sinopsis": "Tras la desaparición de un niño, cuatro familias desesperadas tratan de entender lo ocurrido a medida que van desvelando un retorcido misterio que abarca tres décadas… Saga familiar con un giro ...",
      "type": "serie",
      "extra": [
        {
          "channel": "Netflix",
          "first_air_date": " First air date Dec. 01, 2017",
          "last_air_date": " Última transmisión Dec. 01, 2017",
          "total_seasons": "2",
          "total_episodes": "18",
          "season_list": [
            {
              "season": 1,
              "episodes": [
                "1x1",
                "1x2",
                "1x3",
                "1x4",
                "1x5",
                "1x6",
                "1x7",
                "1x8",
                "1x9",
                "1x10"
              ]
            },
            {
              "season": 2,
              "episodes": [
                "2x1",
                "2x2",
                "2x3",
                "2x4",
                "2x5",
                "2x6",
                "2x7",
                "2x8"
              ]
            }
          ],
          "cast_members": {
            "creator": {
              "name": "Baran bo Odar",
              "poster": "https://image.tmdb.org/t/p/w92/3mch6S9Qm0TAi5tUYU2pkCGXXdn.jpg"
            },
            "members_list": [
              {
                "members_info": [
                  {
                    "characters": {
                      "real_name": "Maja Schöne isHannah Kahnwald",
                      "character": "Hannah Kahnwald"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/867PeMDC2fjF5tpnEDDZ9f9MGky.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Jördis Triebel isKatharina Nielsen",
                      "character": "Katharina Nielsen"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/rTwUZGRWOvWcFF0qDWfyCQPVtaC.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Daan Lennard Liebrenz isMikkel Nielsen",
                      "character": "Mikkel Nielsen"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/bpngZTBtb2Pwxq1StW13deo4JNr.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Lisa Vicari isMartha Nielsen",
                      "character": "Martha Nielsen"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/cboaudpZV12bXaUzkHAwUUkOirr.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Moritz Jahn isMagnus Nielsen",
                      "character": "Magnus Nielsen"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/e4RWGRQjPdSNFovVNpVaQEsEBM3.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Paul Lux isBartosz Tiedemann",
                      "character": "Bartosz Tiedemann"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/4VzJcq7vLynObqAnQ7sHRUtF8wD.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Karoline Eichhorn isCharlotte Doppler",
                      "character": "Charlotte Doppler"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/n9q9IKEJLmxm47mB6XJWjqkAbBb.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Louis Hofmann isJonas kahnwald",
                      "character": "Jonas kahnwald"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/m3Mo38afbKmy9EOsfmUagvTFM9q.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Deborah Kaufmann isRégina Tiedemann",
                      "character": "Régina Tiedemann"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/4u82lzHjYnASZozOKeu6b33u4iC.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "unknown",
                      "character": "unknown"
                    },
                    "poster": "unknown"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    // ...........
  ]
}
```

### getByGenres([genre] , [page])
| Genres   |          |
|----------| ----------
| accion   | drama    |
| aventura | familia  |
| comedia  | fantasia |
| crimen   | misterio |
| suspense | suspenso | 
| terror   |          |

    

```json
// 20190902163704
// https://cinemanight.chrismichael.now.sh/api/v1/genres/accion/1

{
  "content": [
    {
      "id": "ver-x-men-fenix-oscura",
      "title": "X-Men: Fénix Oscura (X-Men: Dark Phoenix)",
      "sinopsis": "Durante una misión de rescate en el espacio, Jean casi muere al ser alcanzada por una misteriosa fuerza cósmica. Cuando regresa a casa, esta fuerza no solo la ha hecho infinitamente más poderosa, sino también mucho más inestable. Mientras lucha con la entidad que habita en su interior, Jean desata sus poderes de formas que no puede controlar ni comprender. ...",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/06/rdByKDkfyVuVSrkllzxKYXiZmTd-185x278.jpg",
      "rating": "8.9",
      "quality": "BR-S",
      "year": "2019",
      "extra": [
        {
          "air_date": "Jun. 05, 2019",
          "country": "USA",
          "runtime": "114 Min",
          "rated": "PG-13",
          "cast_members": {
            "creator": {
              "name": "Simon Kinberg",
              "poster": "https://image.tmdb.org/t/p/w92/yXlDADc2rLEMLTFZAw9irqXMq2J.jpg"
            },
            "members_list": [
              {
                "members_info": [
                  {
                    "characters": {
                      "real_name": "Sophie Turner isJean Grey / Dark Phoenix",
                      "character": "Jean Grey / Dark Phoenix"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/ed4ajSYdv49j9OF7yMeG8Hznrrt.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "James McAvoy isCharles Xavier / Professor X",
                      "character": "Charles Xavier / Professor X"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/oPIfGm3mf4lbmO5pWwMvfTt5BM1.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Michael Fassbender isErik Lensherr / Magneto",
                      "character": "Erik Lensherr / Magneto"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/oexNPLumoFpazzzUqzBSDDYiUg1.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Jennifer Lawrence isRaven Darkholme / Mystique",
                      "character": "Raven Darkholme / Mystique"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/naZyy9IqAQDaAbr1kYShLdg6aPR.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Jessica Chastain isVuk",
                      "character": "Vuk"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Nicholas Hoult isHank McCoy / Beast",
                      "character": "Hank McCoy / Beast"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/h1gXgpuXERZTVhxMdjT7uvXIyq6.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Evan Peters isPeter Maximoff / Quicksilver",
                      "character": "Peter Maximoff / Quicksilver"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/2a1XA1ynmbZZj2nauwsc03OzRB.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Tye Sheridan isScott Summers / Cyclops",
                      "character": "Scott Summers / Cyclops"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/dECHNyAs5ZrEKYPN4LpyjczUzVd.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Kodi Smit-McPhee isKurt Wagner / Nightcrawler",
                      "character": "Kurt Wagner / Nightcrawler"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/vJLSwYtJH8NHEUDh508XxewnrjD.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Alexandra Shipp isOroro Munroe / Storm",
                      "character": "Ororo Munroe / Storm"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/98AfO5NSqWnlhIxjSg08gGYdxUG.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "unknown",
                      "character": "unknown"
                    },
                    "poster": "unknown"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    // ...........
  ]
}
```

### getLatestEpisodes([page])
```json
// 20190902164627
// https://cinemanight.chrismichael.now.sh/api/v1/episodes/1

{
  "episodes": [
    {
      "id": "ver-los-rios-de-color-purpura-1x4",
      "title": "Los ríos de color púrpura: 1×4",
      "episode_name": " El día de las cenizas (2)",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/cszdWR5z8a65CPTeCjTARNslwjV-300x170.jpg",
      "date": "Dec. 03, 2018",
      "quality": "HD 1080",
      "sinopsis": "Cuando Niemans obtiene imágenes de rayos X de los frescos dañados, proporcionan más información sobre el caso, pero ¿un fragmento faltante de las escenas bíblicas retratadas tiene la clave del asesino?"
    },
    {
      "id": "ver-los-rios-de-color-purpura-1x3",
      "title": "Los ríos de color púrpura: 1×3",
      "episode_name": " El día de las cenizas (1)",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/wntYgHDhaLDNPTdBH1CCp1A5j89-300x170.jpg",
      "date": "Dec. 03, 2018",
      "quality": "HD 1080",
      "sinopsis": "En una región vitivinícola en la época de la cosecha, se descubre un cadáver maltratado bajo los escombros cuando una bóveda se derrumba durante la renovación de una capilla, destruyendo un fresco. ¿Fue un accidente o un juego sucio?"
    },
    {
      "id": "ver-toy-boy-1x1",
      "title": "Toy Boy: 1×1",
      "episode_name": " Capítulo 1",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/toy1-300x170.jpg",
      "date": "Sep. 08, 2019",
      "quality": "HD 1080",
      "sinopsis": "‘Toy Boy’ es un thriller que cuenta la historia de Hugo, un stripper que, gracias a su juventud y atractivo, había conseguido llevar una vida despreocupada. Todo se torció para él cuando, tras una excesiva fiesta nocturna, se despierta en un velero junto al cadáver del marido de su amante, Macarena, lo que le llevará a la cárcel. Tras siete años en prisión, conoce a Triana, una joven abogada que, en nombre de unos intereses ocultos y poderosos, consigue su liberación provisional."
    },
    // ...........
  ]
}
```

### getLatestEpisodesAdded()
```json
// 20190916104207
// http://localhost:5000/api/v1/latestEpisodes

{
  "episodes": [
    {
      "id": "ver-los-rios-de-color-purpura-1x6",
      "title": "Los ríos de color púrpura: 1×6",
      "episode_name": " La cruzada de los niños (2)",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/3RsqrpWhwJe1R5yBRtPOdmp3uM1-300x170.jpg",
      "date": "Dec. 10, 2018",
      "quality": "HD 1080",
      "sinopsis": "Dos personas más son asesinadas en el cementerio: una pareja casada que acogió a niños adoptivos. Pero una cita de un cuento antiguo sobre un grupo de niños desafortunados en un monumento proporciona una pista."
    },
    {
      "id": "ver-los-rios-de-color-purpura-1x5",
      "title": "Los ríos de color púrpura: 1×5",
      "episode_name": " La cruzada de los niños (1)",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/ugzppVfB67KvWO3AwngYNFgCFQ9-300x170.jpg",
      "date": "Dec. 10, 2018",
      "quality": "HD 1080",
      "sinopsis": "Cuando dos hombres descubren la mano cortada de un niño, Niemans y Camille encuentran a la policía local distraída por el caso de un asesino en serie armado con un rifle. ¿Pueden encontrar pistas en la casa de un niño?"
    },
    {
      "id": "ver-the-gulf-1x3",
      "title": "The Gulf: 1×3",
      "episode_name": " Episodio 3",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/tg3-300x170.jpg",
      "date": "Sep. 09, 2019",
      "quality": "HD 1080",
      "sinopsis": "Max Lee quiere respuestas sobre su hija desaparecida y Jess debe tomar el caso. Ruby tiene algunas noticias y se descubre algo horrible en los manglares."
    },
    // ...........
  ]
}
```

### getSeriesVideoContent([id])
*The param **id** is a combination of the **id** of each series + **episodes list**.*
```javascript
"episodes": ["1x1","1x2","1x3","1x4","1x5","1x6","1x7","1x8""1x9","1x10"]
"id": "ver-dark",

// ver-dark-1x1
const id = `${id}-${episodes[0]}`

getSeriesVideoContent([id]).then(doc => console.log(doc))

//output
{
  "video_iframe": [
    {
      "iframe": {
        "option": 1,
        "video_iframe": "https://openload.co/embed/q09zLdztG-4/dark-s01e01-lat-720p.mkv.mp4"
      }
    },
    {
      "iframe": {
        "option": 2,
        "video_iframe": "https://openload.co/embed/FkL-FvH07rk/D4rk.1x01.m720p.DD.5.1.Dmsec.mkv.mp4"
      }
    },
    {
      "iframe": {
        "option": 3,
        "video_iframe": "https://openload.co/embed/kXdvMoYgO1Q/dark-s01e01-vose-720p.mkv.mp4"
      }
    }
  ]
}
```

### getMoviesVideoContent([id])
*The param **id** can be found at the endpoint of the movies `https://cinemanight.chrismichael.now.sh/api/v1/movies/1`*

```javascript
"id": "ver-x-men-fenix-oscura",

const id = `${id}`

getMoviesVideoContent(id).then(doc => console.log(doc))

//output
{
  "video_iframe": [
    {
      "iframe": {
        "option": 1,
        "video_iframe": "https://verystream.com/e/UBuqPHz61V8/Dark.Phoenix.2019.BRS.LAT.mkv.mp4"
      }
    },
    {
      "iframe": {
        "option": 2,
        "video_iframe": "https://verystream.com/e/XCLzuoEXMwb/Dark.Phoenix.2019.BRS.ESP.mkv.mp4"
      }
    },
    {
      "iframe": {
        "option": 3,
        "video_iframe": "https://verystream.com/e/QeySSfVG375/Dark_Phoenix_2019.BRRip.XviD.AC3-EVO.avi.mp4"
      }
    }
  ]
}
```

## 💡 Tips
## Indexing Pattern in season_list
```json
// 20190908221826
// https://cinemanight.chrismichael.now.sh/api/v1/search/juego%20de%20trono
const season_list = {
    "season_list": [
      {
        "season": 1 , "episodes": ["1x1","1x2","1x3","1x4","1x5","1x6","1x7","1x8","1x9","1x10"]
      },
      {
        "season": 2 , "episodes": ["2x1","2x2","2x3","2x4","2x5","2x6","2x7","2x8","2x9","2x10"]
      },
      {
        "season": 3 , "episodes": ["3x1","3x2","3x3","3x4","3x5","3x6","3x7","3x8","3x9","3x10"]
      },
      {
        "season": 4 , "episodes": ["4x1","4x2","4x3","4x4","4x5","4x6","4x7","4x8","4x9","4x10"]
      },
      {
        "season": 5 , "episodes": ["5x1","5x2","5x3","5x4","5x5","5x6","5x7","5x8","5x9","5x10"]
      },
      {
        "season": 6 , "episodes": ["6x1","6x2","6x3","6x4","6x5","6x6","6x7","6x8","6x9","6x10"]
      },
      {
        "season": 7 , "episodes": ["7x1","7x2","7x3","7x4","7x5","7x6","7x7"]
      },
      {
        "season": 8 , "episodes": ["8x1","8x2","8x3","8x4","8x5","8x6"]
      }
    ]
}
```
```javascript
// indexing season_list by seasons
const bySeason = season_list.season_list.reduce((byId , seasons) =>{
  byId[seasons.season] = seasons;
  return byId;
} , {});

//output
{ 
  1:  { season: 1 , episodes: [ '1x1','1x2','1x3','1x4','1x5','1x6','1x7','1x8','1x9','1x10']}, 
  2:  { season: 2 , episodes: [ '2x1','2x2','2x3','2x4','2x5','2x6','2x7','2x8','2x9','2x10']}, 
  3:  { season: 3 , episodes: [ '3x1','3x2','3x3','3x4','3x5','3x6','3x7','3x8','3x9','3x10']}, 
  4:  { season: 4 , episodes: [ '4x1','4x2','4x3','4x4','4x5','4x6','4x7','4x8','4x9','4x10']}, 
  5:  { season: 5 , episodes: [ '5x1','5x2','5x3','5x4','5x5','5x6','5x7','5x8','5x9','5x10']}, 
  6:  { season: 6 , episodes: ['6x1','6x2','6x3','6x4','6x5','6x6','6x7','6x8','6x9','6x10']}, 
  7:  { season: 7 , episodes: ['7x1','7x2','7x3','7x4','7x5','7x6','7x7']}, 
  8:  { season: 8 , episodes: ['8x1','8x2','8x3','8x4','8x5','8x6']}
} 

//way to access a season
console.log(bySeason[1]); // [ '1x1','1x2','1x3','1x4','1x5','1x6','1x7','1x8','1x9','1x10']
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ChrisMichaelPerezSantiago/cinemanight/blob/master/LICENSE) file for details.



## Where to get Help
If you have any questions about the template, contact me at email chrisperezsantiago1@gmail.com


I'll be glad you give this API a good use! 💖
