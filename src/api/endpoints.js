const f = require('./scraper/index.js');
const express = require('express');
const router = express.Router();


router.get('/search/:title' , (req , res) =>{
  const title = req.params.title;
  f.search(title)
    .then(content =>{
      res.status(200).json({
        content
      });
    }).catch(err =>{
      console.log(err);
    });
});

router.get('/series/:page', (req, res) => {
  const page = req.params.page;
  f.getAllSeries(page)
    .then(series =>{
      res.status(200).json({
        series
      })
    }).catch(err =>{
      console.log(err);
    });
});

router.get('/movies/:page' , (req , res) => {
  const page = req.params.page;
  f.getAllMovies(page)
    .then(movies =>{
      res.status(200).json({
        movies
      })
    }).catch(err =>{
      console.log(err);
    });
});

router.get('/genres/:genre/:page' , (req , res) =>{
  const genres = req.params.genre;
  const page = req.params.page;
  f.getByGenres(genres , page)
    .then(content =>{
      res.status(200).json({
        content
      });
    }).catch(err =>{
      console.log(err);
    });
});

router.get('/episodes/:page' , (req , res) =>{
  const page = req.params.page;
  f.getLatestEpisodes(page)
    .then(episodes =>{
      res.status(200).json({
        episodes
      });
    }).catch(err =>{
      console.log(err);
    });
});

router.get('/video_serie/:id' , (req , res) =>{
  const id = req.params.id;
  f.getSeriesVideoContent(id)
    .then(video_iframe =>{
      res.status(200).json({
        video_iframe
      });
    }).catch(err =>{
      console.log(err);
    });
});

router.get('/video_movie/:id' , (req , res) =>{
  const id = req.params.id;
  f.getMoviesVideoContent(id)
    .then(video_iframe =>{
      res.status(200).json({
        video_iframe
      });
    }).catch(err =>{
      console.log(err);
    });
});


module.exports = router;
