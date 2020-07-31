const initialState = {
  isLoading: false,
  list: [],
  imageList: [
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/2/d/c/8/2dc8ceef4c94b6ab43ba46dc3d28f6c7.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/2/d/c/8/2dc8ceef4c94b6ab43ba46dc3d28f6c7.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/1/c/1/8/1c18487bc580d6f84343d4fd2633bf50.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/9/6/f/f96f21106a5dc67baa8bd5f06e8e97fc.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
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

const topChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOPCHARTLIST_ONPOST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "FETCH_TOPCHARTLIST_ONSUCCESS": {
      return {
        ...state,
        list: action.nowplaying.albums.map((item, index) => ({
          ...item,
          image_url: state.imageList[index].image,
        })),
        isLoading: false,
      };
    }

    case "FETCH_TOPCHARTLIST_ONFAILURE": {
      return {
        ...state,
        err: action.err,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default topChartReducer;
