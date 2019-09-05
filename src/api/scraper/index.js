const cheerio = require('cheerio');
const fetch = require('node-fetch');
const axios = require('axios');
const URL = require('./url/index.js');


const getSeriesVideoContent = async(id = "ver-dark-1x1") =>{
  const res = await fetch(`${URL.EPISODES}/${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const videos = [];


  $('#dt_contenedor #contenedor #single #reproductor #playex .play-box-iframe').each((index , element) =>{
    const $element = $(element);
    const iframe_videos = $element.find('iframe.metaframe.rptss').attr('src');

    videos.push({
      iframe:{
        option: Number(index + 1),
        video_iframe: iframe_videos
      }
    });       
  });  
  return await Promise.all(videos);
};


const getMoviesVideoContent = async(id) =>{
  const res = await fetch(`${URL.MOVIES_URL}/${id}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const videos = [];
  $('#dt_contenedor #contenedor #single #playex .play-box-iframe').each((index , element) =>{
    const $element = $(element);
    const iframe_videos = $element.find('iframe.metaframe.rptss').attr('src')
    videos.push({
      iframe:{
        option: Number(index + 1),
        video_iframe: iframe_videos
      }
    });       
  });    
  return await Promise.all(videos);
};


const getLatestEpisodes = async(page) => {
  const res = await fetch(`${URL.EPISODES}/page/${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('article').each((index , element) =>{
    const $element = $(element);
    const title = $element.find('.poster img').attr('alt');
    const episode_name = $element.find('div.data h3').text();
    const poster = $element.find('.poster img').attr('src');
    const quality = $element.find('.poster span.quality').text();
    const id = $element.find('div div.season_m.animation-1 a').attr('href').split('/')[4]
    promises.push({
      id: id || 'unknown',
      title: title || 'unknown',
      episode_name: episode_name || 'unknown',
      poster: poster || 'unknown',
      quality: quality || 'unknown',
    })
  });  
  console.log(promises);
  return await Promise.all(promises);
};



/**
 * @param {*} genres = [accion , aventura , comedia , crimen , drama , familia , fantasia , misterio , suspense , suspenso , terror]
 * @param {*} page = unknown limit
 */
const getByGenres = async(genre , page) =>{
  const res = await fetch(`${URL.GENRES}/${genre}/page/${page}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('article').each((index , element) =>{
    const $element = $(element);
    const title = $element.find('.animation-1 .title h4').text();
    const sinopsis = $element.find('.animation-1 .texto').text();
    const poster = $element.find('.poster img').attr('src');
    const rating = $element.find('.poster .rating').first().text().trim();
    const quality = $element.find('.poster .mepo span.quality').text();
    const year = $element.find('.data span').text();
    const id = $element.find('.data h3 a').attr('href').split('/')[4];
    const type = $element.find('.data h3 a').attr('href').split('/')[3];
    if(type === 'serie'){
      promises.push(seriesHandler(id).then(async(extra) => ({
        id: id || 'unknown',
        title: title || 'unknown',
        poster: poster || 'unknown',
        rating: rating || 'unknown',
        quality: quality || 'unknown',
        year: year || 'unknown',
        sinopsis: sinopsis || 'unknown',
        type: type || 'unknown',
        extra: extra
      })))
    }
    if(type === 'pelicula'){
      promises.push(movieHandler(id).then(async(extra) => ({
        id: id || 'unknown',
        title: title || 'unknown',
        poster: poster || 'unknown',
        rating: rating || 'unknown',
        quality: quality || 'unknown',
        year: year || 'unknown',
        sinopsis: sinopsis || 'unknown',
        type: type || 'unknown',
        extra: extra
      })))
    }
  });
  return await Promise.all(promises);
}


const search = async(title) =>{
  const res = await fetch(`${URL.SEARCH_URL}${title}`);
  const body = await res.text();
  const $ = cheerio.load(body);
  const promises = [];

  $('#dt_contenedor #contenedor .module .content.csearch .search-page .result-item article')
    .each(async(index, element) =>{
      const $element = $(element);
      const title = $element.find('.details .title').text().trim();
      const poster = $element.find('.image .thumbnail.animation-2 a img').attr('src');
      const synopsis = $element.find('.details .contenido p').text();
      const type = $element.find('.details .title a').attr('href').split('/')[3];
      const id = $element.find('.details .title a').attr('href').split('/')[4];
      
      if(type === 'serie'){
        promises.push(seriesHandler(id).then(async(extra) => ({
          id: id || 'unknown',
          title: title || 'unknown',
          poster: poster || 'unknown',
          synopsis: synopsis || 'unknown',
          type: type || 'unknown',
          extra: extra
        })))
      }
      if(type === 'pelicula'){
        promises.push(movieHandler(id).then(async(extra) => ({
          id: id || 'unknown',
          title: title || 'unknown',
          poster: poster || 'unknown',
          synopsis: synopsis || 'unknown',
          type: type || 'unknown',
          extra: extra
        })))
      }
    });
    return await Promise.all(promises);
};


const getAllMovies = async(page = 1) =>{
  const res = await fetch(`${URL.MOVIES_URL}/page/${page}`);
  const body = await res.text();
  const promises = [];
  const $ = cheerio.load(body);

  $('article').each((index , element) =>{
    const $element = $(element);
    const title = $element.find('.animation-1 .title h4').text();
    const sinopsis = $element.find('.animation-1 .texto').text();
    const poster = $element.find('.poster img').attr('src');
    const rating = $element.find('.poster .rating').first().text().trim();
    const quality = $element.find('.poster .mepo span.quality').text();
    const year = $element.find('.data span').text();
    const id = $element.find('.data h3 a').attr('href').split('/')[4];
    promises.push(movieHandler(id).then(extra => ({
      id: id || 'unknown',
      title: title || 'unknown',
      sinopsis: sinopsis || 'unknown',
      poster: poster || 'unknown',
      rating: rating || 'unknown',
      quality: quality || 'unknown',
      year: year || 'unknown',
      extra: extra
    })))
  });
  return await Promise.all(promises);
}

const movieHandler = async(id) =>{
  const res = await fetch(`${URL.MOVIES_URL}/${id}`);
  const body = await res.text();
  const promises = [];
  const $ = cheerio.load(body);

  $('#dt_contenedor').each((index , element) =>{
    const $element = $(element);
    const air_date = $element.find('#single div.sheader div.data div.extra span.date').text();
    const country = $element.find('#single div.sheader div.data div.extra span.country').text();
    const rated = $element.find('#single div.sheader div.data div.extra span').eq(3).text();
    const runtime = $element.find('#single div.sheader div.data div.extra span.runtime').text().replace('.' , '').trim();

    const members_list = []
    const members_info = []
    $element.find('#single.dtsingle .content #cast.sbox.fixidtab div.persons div.person').each((j , content) =>{
      members_info.push({
        characters: {
          real_name: $element.find('div.img a img').eq(Number(j + 1)).attr('alt') || 'unknown',
          character: $element.find('div.data div.caracter').eq(Number(j + 1)).text() || 'unknown',
        },
        poster: $element.find('div.img a img').eq(Number(j + 1)).attr('src') || 'unknown'
      })
    });

    members_list.push({members_info})

      
    const cast_members = {
      creator:{
        name: $element.find('#single.dtsingle .content #cast.sbox.fixidtab div.persons div.person div.img a img').eq(0).attr('alt') || 'unknown',
        poster: $element.find('#single.dtsingle .content #cast.sbox.fixidtab div.persons div.person div.img a img').eq(0).attr('src') || 'unknown',
      },
      members_list: members_list
    }  
    promises.push({
      air_date: air_date || 'unknown',
      country: country || 'unknown',
      runtime: runtime || 'unknown',
      rated: rated || 'unknown',
      cast_members: cast_members
    });
  });
  
  return await Promise.all(promises);
};


const getAllSeries = async(page = 1) => {
  const res = await fetch(`${URL.SERIES_URL}/page/${page}`);
  const body = await res.text();
  const promises = [];
  const $ = cheerio.load(body);

  $('article').each((index , element) =>{
    const $element = $(element);
    const title = $element.find('.animation-1 .title h4').text();
    const sinopsis = $element.find('.animation-1 .texto').text();
    const poster = $element.find('.poster img').attr('src');
    const rating = $element.find('.poster .rating').first().text().trim();
    const year = $element.find('.data span').first().text()
    const id = $element.find('.data h3 a').attr('href').split('/')[4];
    promises.push(seriesHandler(id).then(extra => ({
      id: id || 'unknown',
      title: title || 'unknown',
      sinopsis: sinopsis || 'unknown',
      poster: poster || 'unknown',
      rating: rating || 'unknown',
      year: year || 'unknown',
      extra: extra || 'unknown'
    })))
  });  
  return await Promise.all(promises);
};


const seriesHandler = async(id) =>{
  const res = await fetch(`${URL.SERIES_URL}/${id}`);
  const body = await res.text();
  const promises = [];
  const $ = cheerio.load(body);

  $('#dt_contenedor').each((index , element) =>{
    const $element = $(element);
    const channel = $element.find('#single div.sheader div.data div.extra span a').text();
    const first_air_date = $element.find('#info .custom_fields').eq(1).text();
    const last_air_date = $element.find('#info .custom_fields').eq(2).text();
    const total_seasons = $element.find('#info .custom_fields').eq(3).text().replace(/[^0-9]/g , '');
    const total_episodes = $element.find('#info .custom_fields').eq(4).text().replace(/[^0-9]/g , '');
    const season_list = []
    $('#episodes #serie_contenido #seasons').each((index , el) =>{
      const $el = $(el);
      $el.find('div.se-a ul.episodios').each((i , e) =>{
        const $e = $(e);
        const season = Number(i + 1) || 'unknown';
        const episodes = $e.find('div.numerando').text().split('-').slice(-1).join().trim() || 'unknown'
        const extra = {
          season: season, 
          episodes: Array.from({length: episodes}, (v , k) => k + 1).map(num => `${season}x${num}`)
        };
        season_list.push(extra);
      })
    })
    
    const members_list = []
    const members_info = []
    $element.find('#single.dtsingle .content #cast.sbox.fixidtab div.persons div.person').each((j , content) =>{
      members_info.push({
        characters: {
          real_name: $element.find('div.img a img').eq(Number(j + 1)).attr('alt') || 'unknown',
          character: $element.find('div.data div.caracter').eq(Number(j + 1)).text() || 'unknown',
        },
        poster: $element.find('div.img a img').eq(Number(j + 1)).attr('src') || 'unknown'
      })
    });

    members_list.push({members_info})

      
    const cast_members = {
      creator:{
        name: $element.find('#single.dtsingle .content #cast.sbox.fixidtab div.persons div.person div.img a img').eq(0).attr('alt') || 'unknown',
        poster: $element.find('#single.dtsingle .content #cast.sbox.fixidtab div.persons div.person div.img a img').eq(0).attr('src') || 'unknown',
      },
      members_list: members_list
    }  
    promises.push({
      channel: channel || 'unknown',                  
      first_air_date: first_air_date || 'unknown',
      last_air_date: last_air_date || 'unknown',
      total_seasons: total_seasons || 'unknown',
      total_episodes: total_episodes || 'unknown',
      season_list: season_list || 'unknown',
      cast_members: cast_members
    })
  });  
  return await Promise.all(promises);
};


module.exports = {
  search,
  getAllSeries,
  getAllMovies,
  getByGenres,
  getLatestEpisodes,
  getSeriesVideoContent,
  getMoviesVideoContent
};