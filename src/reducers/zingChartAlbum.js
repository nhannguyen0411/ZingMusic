const initialState = {
  isLoadingZingChartAlbum: false,
  zingChartAlbumList: [],
  imageList: [
    {
      image:
        "https://photo-zmp3.zadn.vn/banner/3/2/b/5/32b5075d3b0a907f9a2a257ae04233a6.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/2/0/a/220a512f4a9bab424e0ab1335737757f.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/1/7/a/f17a4a23d78d15ea791ab46e930f1da3.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/e/f/f/9effe4eefccb1c06942adf8d1d26a273.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/f/a/9/1fa990c5991dc8ad3d9a8a76c3a0899d.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/3/7/7/3377dc54831693aff2a7f0e48337d4e9.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/0/d/5/60d53b8c4df4c08108f532277402b950.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/7/a/d/47ad50fe43058b5f1c6f020efdb25f6d.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/c/2/6/8c26e805aae5e3af745a50f92bf12f32.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/a/c/6/dac658d749f529226bea781ec957122e.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/d/9/f/0d9f30f192b853a816c9d5fc95f56fd5.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/2/d/6/32d68ed6ec429d6017bace5d4b9f1bfc.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/f/a/9/1fa990c5991dc8ad3d9a8a76c3a0899d.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
  ],
  err: "",
};

const zingChartAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ZINGCHARTALBUMLIST_ONPOST": {
      return {
        ...state,
        isLoadingZingChartAlbum: true,
      };
    }

    case "FETCH_ZINGCHARTALBUMLIST_ONSUCCESS": {
      return {
        ...state,
        zingChartAlbumList: action.album.map((item, index) => ({
          ...item,
          image_url: state.imageList[index].image,
        })),
        isLoadingZingChartAlbum: false,
      };
    }

    case "FETCH_ZINGCHARTALBUMLIST_ONFAILURE": {
      return {
        ...state,
        err: action.err,
        isLoadingZingChartAlbum: false,
      };
    }

    default:
      return state;
  }
};

export default zingChartAlbumReducer;
