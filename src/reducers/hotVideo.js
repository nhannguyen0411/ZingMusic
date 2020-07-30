const initialState = {
  loadingHotVideo: false,
  hotVideoList: [],
  imageList: [
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/f/b/7/dfb7117de8f14de267ae81fbdefd62f3.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/a/4/d/8a4dfaca7e32714b09b93c978128d367.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/2/8/9/d289d4b3da78ab215afcff5680091a8f.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/a/8/9/3a89bf3f3d87c00bbbfe878311a79352.jpg",
    },
    {
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/e/4/a/ce4ad9f00a799de5b4aa76b911f347c3.jpg",
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
};

const hotVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HOTVIDEOLIST": {
      return {
        ...state,
        hotVideoList: action.nowplaying.albums.map((item, index) => ({
          ...item,
          image_url: state.imageList[index].image,
        })),
        loadingHotVideo: true,
      };
    }

    default:
      return state;
  }
};

export default hotVideoReducer;
