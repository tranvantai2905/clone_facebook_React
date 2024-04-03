import { InteractTyp, PostTyp, PagePostTyp } from "./_types";

const mock_posts: (PostTyp | PagePostTyp)[] = [
  {
    post_user: {
      email: "",
      username: "TOEIC PMP English",
      avatar_url:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/256808720_1029863651198262_2081377557852238490_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeElbsdf6DGOuIQIcPTjPRrOm9DZmEGjJhSb0NmYQaMmFLn3ebPN35K_FmkoJwUI_xefNupRepHqI-rCjnHazCig&_nc_ohc=ye6DWqScs68AX-sqMOU&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCwOyF2M9Ot6NRuKVqA34dkIL5ViNUlKS7xamwftk7QGw&oe=66133758",
    },
    date_post: new Date("April 03, 2024 11:13:00"),
    content: "",
    interact_users: [
      {
        user: { email: "", username: "TOEIC PMP English" },
        interact: InteractTyp.Love,
      },
      {
        user: { email: "", username: "Huỳnh Quốc Cường" },
        interact: InteractTyp.Like,
      },
      {
        user: { email: "", username: "Hải Yến" },
        interact: InteractTyp.Like,
      },
      {
        user: { email: "", username: "Nguyễn Thuận An" },
        interact: InteractTyp.Like,
      },
    ],
  },
  {
    page: { page_name: "Kiếm Đến (kiếm lai-剑来)", url: "" },
    post_user: {
      email: "",
      username: "Tiểu Phàm",
      avatar_url:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/256808720_1029863651198262_2081377557852238490_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeElbsdf6DGOuIQIcPTjPRrOm9DZmEGjJhSb0NmYQaMmFLn3ebPN35K_FmkoJwUI_xefNupRepHqI-rCjnHazCig&_nc_ohc=ye6DWqScs68AX-sqMOU&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCwOyF2M9Ot6NRuKVqA34dkIL5ViNUlKS7xamwftk7QGw&oe=66133758",
    },
    date_post: new Date("April 03, 2024 11:13:00"),
    content: "",
    interact_users: [
      {
        user: { email: "", username: "TOEIC PMP English" },
        interact: InteractTyp.Love,
      },
      {
        user: { email: "", username: "Huỳnh Quốc Cường" },
        interact: InteractTyp.Like,
      },
      {
        user: { email: "", username: "Hải Yến" },
        interact: InteractTyp.Like,
      },
      {
        user: { email: "", username: "Nguyễn Thuận An" },
        interact: InteractTyp.Like,
      },
    ],
  },
];
export { mock_posts };
