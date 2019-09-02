 <a href="https://github.com/ChrisMichaelPerezSantiago/cinemanight#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/cinemanight/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ChrisMichaelPerezSantiago/cinemanight/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>


# CINEMANIGHT API
*This API will give you access to the content of the pedropolis.tv page, you can see the entire movies and series catalog and enjoy each chapter.*


## 🚀 ... Deployment API [BASE URL]
- `https://cinemanight.chrismichael.now.sh/api/v1/`


## 🚀 ... Deployment API Examples [ENDPOINTS]
- `https://cinemanight.chrismichael.now.sh/api/v1/series/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/movies/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/search/Dark`
- `https://cinemanight.chrismichael.now.sh/api/v1/genres/accion/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/episodes/1`
- `https://cinemanight.chrismichael.now.sh/api/v1/video_serie/ver-dark-2x8`
- `https://cinemanight.chrismichael.now.sh/api/v1/video_movie/ver-x-men-fenix-oscura/`


## API Functions
- search       
- getAllSeries
- getAllMovies
- getByGenres
- getLatestEpisodes
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
      "id": "ver-the-a-list",
      "title": "The A List",
      "sinopsis": "Mia llega a un idílico campamento de verano esperando convertirse en el centro de atención, pero sus vacaciones de ensueño no tardan en convertirse en una pesadilla.",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/08/osnDYGhH9Dsw7EkDZ4lDifrkYjI-185x278.jpg",
      "rating": "10",
      "year": "2018",
      "extra": [
        {
          "channel": "BBC ThreeBBC iPlayer",
          "first_air_date": " First air date Oct. 25, 2018",
          "last_air_date": " Última transmisión Oct. 25, 2018",
          "total_seasons": "1",
          "total_episodes": "13",
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
                "1x10",
                "1x11",
                "1x12",
                "1x13"
              ]
            }
          ],
          "cast_members": {
            "creator": {
              "name": "Dan Berlinka",
              "poster": "https://pedropolis.tv/wp-content/themes/dooplay/assets/img/no_foto_cast.png"
            },
            "members_list": [
              {
                "members_info": [
                  {
                    "characters": {
                      "real_name": "Lisa Ambalavanar isMia",
                      "character": "Mia"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/8bVWbpkqCBlE4G01fEpqJDpOvXK.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Ellie Duckles isAmber",
                      "character": "Amber"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/33WZXcneQF6dPrHjFDC2os5NGjC.jpg"
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

### getAllMovies([page])
```json
// 20190902163413
// https://cinemanight.chrismichael.now.sh/api/v1/movies/1

{
  movies: [
     {
      "id": "ver-men-in-black-internacional",
      "title": "Hombres de negro: internacional",
      "sinopsis": "En esta entrega, los Hombres de Negro, que siempre han protegido la Tierra, deben descubrir un topo dentro de la organización MIB. Para luchar contra unos nuevos malévolos aliens camuflados como humanos utilizarán una gran tecnología.",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/06/bV7BDakL6lEol6z1NgZm8EfptTb-185x278.jpg",
      "rating": "9.2",
      "quality": "HD 1080",
      "year": "2019",
      "extra": [
        {
          "air_date": "Jun. 12, 2019",
          "country": "USA, UK",
          "runtime": "115 Min",
          "rated": "N/A",
          "cast_members": {
            "creator": {
              "name": "F. Gary Gray",
              "poster": "https://image.tmdb.org/t/p/w92/6p11B9eBjvoiAY5Nyoao6Pm7a2J.jpg"
            },
            "members_list": [
              {
                "members_info": [
                  {
                    "characters": {
                      "real_name": "Chris Hemsworth isAgent H",
                      "character": "Agent H"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/lrhth7yK9p3vy6p7AabDUM1THKl.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Tessa Thompson isAgent M",
                      "character": "Agent M"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/3POwFJPt9Mn7UqktzgoRQKjnfwp.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Liam Neeson isAgent High T",
                      "character": "Agent High T"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/9mdAohLsDu36WaXV2N3SQ388bvz.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Rebecca Ferguson isRiza",
                      "character": "Riza"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/dbIS4S32rrIJyEysx7huT6ZAmjN.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Emma Thompson isAgent O",
                      "character": "Agent O"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/cWTBHN8kLf6yapxiaQD9C6N1uMw.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Rafe Spall isAgent C",
                      "character": "Agent C"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/7ucsDEWvcMU4SpxtZEaYErPpXHh.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Kumail Nanjiani isPawny (voice)",
                      "character": "Pawny (voice)"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/9EyrK1Cv7ey1h1GgmsVAOn45w6G.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Jess Radomska isSpike - Alien",
                      "character": "Spike - Alien"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/yH9mnfx9YeWGqt1VlYZSzdiwrpv.jpg"
                  },
                  {
                    "characters": {
                      "real_name": "Viktorija Faith isJellyfish Alien",
                      "character": "Jellyfish Alien"
                    },
                    "poster": "https://pedropolis.tv/wp-content/themes/dooplay/assets/img/no_foto_cast.png"
                  },
                  {
                    "characters": {
                      "real_name": "Ania Sowinski isAlien Boss Wife",
                      "character": "Alien Boss Wife"
                    },
                    "poster": "https://image.tmdb.org/t/p/w92/s8OcPfo6dAshyVXXCfDjBT7WYhk.jpg"
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
      "synopsis": "Tras la desaparición de un niño, cuatro familias desesperadas tratan de entender lo ocurrido a medida que van desvelando un retorcido misterio que abarca tres décadas… Saga familiar con un giro ...",
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
      "id": "ver-sanditon-1x2",
      "title": "Sanditon: 1×2",
      "episode_name": " Episodio 2",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/09/odHeaVleTdrN6d5SKADRFU26ymR-300x170.jpg",
      "quality": "HD 1080"
    },
    {
      "id": "ver-my-life-is-murder-1x7",
      "title": "My Life Is Murder: 1×7",
      "episode_name": " Vieja escuela",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/08/mi-300x170.jpg",
      "quality": "HD 1080"
    },
    {
      "id": "ver-los-rios-de-color-purpura-1x1",
      "title": "Los ríos de color púrpura: 1×1",
      "episode_name": " La última caza (1)",
      "poster": "https://pedropolis.tv/wp-content/uploads/2019/03/oduP3Di75bXAqhfXRa8GmhoJoNN-300x170.jpg",
      "quality": "HD 1080"
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

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/ChrisMichaelPerezSantiago/cinemanight/blob/master/LICENSE) file for details.



## Where to get Help
If you have any questions about the template, contact me at email chrisperezsantiago1@gmail.com


I'll be glad you give this API a good use! 💖