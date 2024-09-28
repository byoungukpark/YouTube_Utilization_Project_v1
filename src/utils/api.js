import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 12,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
};

export const format_api_data = async (_data) => {
    const promises = _data.map(text_data => 
        fetchFromAPI(`videos?part=snippet&id=${text_data.videoId}`)
    );

    const results = await Promise.all(promises);

    const videoData = results.map(result => 
        result.items && result.items.length > 0 ? result.items[0] : null
    ).filter(item => item !== null);

    return make_video_dic(videoData);
};

const make_video_dic = (videoData) => {
    return videoData.map(video => ({
      videoId: video.id,
      img: video.snippet.thumbnails.high.url,
      title: video.snippet.title,
      channelId: video.snippet.channelId,
      channelTitle: video.snippet.channelTitle
    }));
  }