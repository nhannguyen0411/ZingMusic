const initialState = {
  isLoadingHappyVideo: false,
  happyVideoList: [],
  imageList: [
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/e/d/d/aeddc4fd2381642856daf642e29ceeaa.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/8/3/8/c8380271699dc9ec3fcd5650b3db16f2.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/7/8/3/f783c2a08c26a1e6d51982097a3baa15.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/7/a/f/b7afd2437eca1e662af751085e0f32dc.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/b/b/c/abbc2762a133a3dc2dca85ed0a8d638b.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/a/f/e/cafed8b10c57dee44fe377034ddc4670.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/4/3/7/a4377712de1642b79e6f679ee6724b72.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/d/e/0/5de00aec998b51db0ff4a93fac5e411a.jpg",
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

const happyVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HAPPYVIDEOLIST_ONPOST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "FETCH_HAPPYVIDEOLIST_ONSUCCESS": {
      return {
        ...state,
        happyVideoList: action.nowplaying.albums.map((item, index) => ({
          ...item,
          image_url: state.imageList[index].image,
        })),
        isLoading: false,
      };
    }

    case "FETCH_HAPPYVIDEOLIST_ONFAILURE": {
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

export default happyVideoReducer;
