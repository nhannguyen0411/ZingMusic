const initialState = {
  isLoadingZingChartNews: false,
  zingChartNewsList: [],
  imageList: [
    {
      title: `Giải mã kỷ lục 500 triệu lượt nghe của ‘Sóng gió’`,
      image:
        "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_15/Song_gio_thumb.jpg",
    },
    {
      title: "9 bản hit đạt top 1 #zingchart tuần trong nửa đầu năm 2020",
      image:
        "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_14/Thumb_Top_1_nua_dau_2020.jpg",
    },
    {
      title: "Bích Phương, Binz được nhiều hơn mất khi đối đầu Sơn Tùng M-TP?",
      image:
        "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_15/Song_gio_thumb.jpg",
    },
    {
      title: "Quân A.P thể hiện khả năng hát live với loạt hit quen thuộc",
      image:
        "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_10/quan_1.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_09/H2.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/3/7/7/3377dc54831693aff2a7f0e48337d4e9.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/0/d/5/60d53b8c4df4c08108f532277402b950.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/7/a/d/47ad50fe43058b5f1c6f020efdb25f6d.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/c/2/6/8c26e805aae5e3af745a50f92bf12f32.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/a/c/6/dac658d749f529226bea781ec957122e.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/d/9/f/0d9f30f192b853a816c9d5fc95f56fd5.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/2/d/6/32d68ed6ec429d6017bace5d4b9f1bfc.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/f/a/9/1fa990c5991dc8ad3d9a8a76c3a0899d.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      title: "‘Bigcityboi’ của Binz thâu tóm top 3 BXH sau nửa ngày phát hành",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
  ],
  err: "",
};

const zingChartNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ZINGCHARTNEWSLIST_ONPOST": {
      return {
        ...state,
        isLoadingZingChartNews: true,
      };
    }

    case "FETCH_ZINGCHARTNEWSLIST_ONSUCCESS": {
      return {
        ...state,
        zingChartNewsList: action.nowplaying.albums.map((item, index) => ({
          ...item,
          image_url: state.imageList[index].image,
          title: state.imageList[index].title,
        })),
        isLoadingZingChartNews: false,
      };
    }

    case "FETCH_ZINGCHARTNEWSLIST_ONFAILURE": {
      return {
        ...state,
        err: action.err,
        isLoadingZingChartNews: false,
      };
    }

    default:
      return state;
  }
};

export default zingChartNewsReducer;
