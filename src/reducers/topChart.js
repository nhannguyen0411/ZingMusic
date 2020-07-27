const initialState = {
  page: 1,
  list: [
    {
      id: 1,
      song: "Cứ Thế Rời Xa",
      singer: [
        { id: 13, singer: "Yến Tatoo" },
        { id: 12, singer: "Great" },
      ],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/2/d/c/8/2dc8ceef4c94b6ab43ba46dc3d28f6c7.jpg",
    },
    {
      id: 2,
      song: "Cho anh say",
      singer: [
        { id: 10, singer: "Phan duy anh" },
        { id: 11, singer: "ACV" },
      ],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/2/d/c/8/2dc8ceef4c94b6ab43ba46dc3d28f6c7.jpg",
    },
    {
      id: 3,
      song: "Em ơi sang nhà anh chơi",
      singer: [{ id: 9, singer: "Đạt Ozy" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/1/c/1/8/1c18487bc580d6f84343d4fd2633bf50.jpg",
    },
    {
      id: 4,
      song: "BigCityBoi",
      singer: [
        { id: 8, singer: "Binz" },
        { id: 7, singer: "Touliver" },
      ],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/f/9/6/f/f96f21106a5dc67baa8bd5f06e8e97fc.jpg",
    },
    {
      id: 5,
      song: "Em không sai chúng ta sai",
      singer: [{ id: 4, singer: "Erik" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      id: 6,
      song: "Thương Phận Bèo Trôi",
      singer: [{ id: 5, singer: "Dương Hồng Loan" }],
      view: 1851,
      image:
        "https://photo-zmp3.zadn.vn/banner/3/2/b/5/32b5075d3b0a907f9a2a257ae04233a6.jpg",
    },
    {
      id: 7,
      song: "Về Xứ Nghệ Cùng Em",
      singer: [{ id: 3, singer: "Trang Dung" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/2/0/a/220a512f4a9bab424e0ab1335737757f.jpg",
    },
    {
      id: 8,
      song: "Những Tình Khúc Mưa",
      singer: [{ id: 6, singer: "Nhiều Nghệ Sĩ" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/1/7/a/f17a4a23d78d15ea791ab46e930f1da3.jpg",
    },
    {
      id: 9,
      song: "Liên Khúc 13 Tỉnh Miền...",
      singer: [{ id: 2, singer: "Ân Thiên Vỹ" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/e/f/f/9effe4eefccb1c06942adf8d1d26a273.jpg",
    },
    {
      id: 10,
      song: "Mối Tình Sầu",
      singer: [{ id: 1, singer: "Trường Sơn" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/f/a/9/1fa990c5991dc8ad3d9a8a76c3a0899d.jpg",
    },
    {
      id: 11,
      song: "Anh Chưa đủ tư cách",
      singer: [{ id: 14, singer: "Lý Tuấn Kiệt" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      id: 12,
      song: "Tình Anh",
      singer: [
        { id: 15, singer: "Đình Dũng" },
        { id: 16, singer: "ACV" },
      ],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      id: 13,
      song: "Em đang bận yêu ai",
      singer: [{ id: 17, singer: "Chi Dân" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      id: 14,
      song: "Không thể cùng nhau suốt kiếp",
      singer: [
        { id: 18, singer: "Hòa Minzy" },
        { id: 19, singer: "Mr.Siro" },
      ],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
    {
      id: 15,
      song: "Thích thì đến",
      singer: [{ id: 20, singer: "Lê Bảo Bình" }],
      view: 1851,
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/1/f/8/71f83f03ddbf820c54fe22694da40b61.jpg",
    },
  ],
};

const topChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SONG": {
      const newList = [...state.list];
      newList.push(action.payload);

      return {
        ...state,
        list: newList,
      };
    }
    case "ADD_VIEW": {
      const newList = [...state.list];
      newList.map((item) => {
        return item.id === action.payload.id ? ++item.view : item.view;
      });

      const sortList = [...newList];
      sortList.sort((a, b) => b.view - a.view);

      console.log(sortList);
      return {
        ...state,
        list: sortList,
      };
    }

    case "PAGE_UP": {
      const newList = [...state.list];
      const begin = (++state.page - 1) * 5;
      const end = ++state.page * 5;
      const filterList = newList.splice(begin, end);
      return {
        ...state,
        list: filterList,
      };
    }

    case "PAGE_DOWN": {
      const newList = [...state.list];
      const begin = (--state.page - 1) * 5;
      const end = --state.page * 5;
      const filterList = newList.splice(begin, end);
      return {
        ...state,
        list: filterList,
      };
    }

    default:
      return state;
  }
};

export default topChartReducer;
