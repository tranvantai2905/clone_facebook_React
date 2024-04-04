import { OnlineUser, Page, Status } from "./_types";

const mockOnlineUsers: OnlineUser[] = [
  {
    avatar_url:
      "https://scontent.fhan4-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1ghSy52dCwMeQRzU21a7Xso2H55p0AlGyjYfnmnQCUQ_9a_VDobRwA73etHoAnaxbOPaqH1V2iVspH_XXZLNy&_nc_ohc=q4OFSr5xNooAX9dHH_o&_nc_ht=scontent.fhan4-3.fna&oh=00_AfC1xr8Hfj2zZzHExJj2tBnTXrEC72wj5hKMbnRlxdv5bw&oe=66337138",
    username: "Trương Lê Nhật Lâm",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/434676726_398893292898031_6405363922840497680_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHe7eToMKNKV27FTnI-lC1VNEOWwAkf9ew0Q5bACR_17KSABnBmnXGcGTAVAa80dgyjJSzGu_021eyxjhkPfMQv&_nc_ohc=zKV-Upd_L4kAX-kNvg_&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAP2Zy9VPFp2UlLbvYM5vYBt4F6Ma1PxG2l5Qryc6PC0w&oe=6611C7B1",
    username: "Hoàng Nguyễn Diệu Thương",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/368213297_1356745261912927_1011749619278320867_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH-E7qS_3_1g3hQbDZaniVp1H54UHdpWofUfnhQd2lah2KX_9jGXqQFAEpkAen7flx06g_DK5YbsNRClG2IrYW6&_nc_ohc=o3Pz0D74naMAb62sp6P&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCC3J6hZURjUgmMuO4mLIBYilpS6qYmBelOZYC41YISyg&oe=66143445",
    username: "Vũ Hiếu",
    url: "",
    email: "",
    status: Status.JustNow,
  },
  {
    avatar_url:
      "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-1/405292925_3623586711294481_6787970886075666172_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3bzIp4Z7PA6e562g8_Ke_9R8hPDzCB3n1HyE8PMIHefrUsndciGzOnmUMdoGF-gWzpY5umecgY7TaSlIDCNMX&_nc_ohc=4x5Ic3RxHtkAb50PZfo&_nc_ht=scontent.fhan4-3.fna&oh=00_AfA9I9tGAlW589tLv10gWxpPePiafgZqtQI1brsYUMZidg&oe=66141035",
    username: "Phạm Thị Sen",
    url: "",
    email: "",
    status: Status.JustNow,
  },
  {
    avatar_url:
      "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-1/409778698_920867416039736_6264596762153130965_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEdaA2cNgDF0gGKJwcAH5s_TTSmRhIbT19NNKZGEhtPXxMm_BBdLkBWJ_ZEXqBT1S_uXVmz0hhS1lbVrZjBDI3I&_nc_ohc=VIouHGL7YCUAb44VnFs&_nc_ht=scontent.fhan3-4.fna&oh=00_AfCOp3wAMPt23LtlqSYKwMRTacIqD7_uEQlwJKDZ7dKHzQ&oe=66141BC0",
    username: "Lê Nguyễn Thiên Trúc",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/421722616_3739059136421493_4949172286843962305_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFInW8qegr32erMFmm0jIXWrT6TXg5aD8itPpNeDloPyD_qOcM5QGtbFj9YQJJVSbsvtSIOV6aV61Yl30JHnL-3&_nc_ohc=eud-3NF2AeIAb7_Svc3&_nc_ht=scontent.fhan3-2.fna&oh=00_AfDFNpV9--NP_FJDtEuPP7ZkDC_fweG7oRnsiJcqgbuQww&oe=66141BB4",
    username: "Thùy Duyên",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-1/401598505_1515869498953749_1997782021190146490_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFMIXW9MgQfU_1WNa6FIebKpqb2b9-szTmmpvZv36zNOXk5B3GPcOToRTghxchrnznWlDoupNPDcb9bycT0n3KS&_nc_ohc=_PT02MDsiYoAb5S-xWS&_nc_oc=AdhIztNn8OR6RRkb_loKZWvf5n7sKK7R7aBs5j4Y525E_-APjcOri-KSYzyDVvB-BT0&_nc_ht=scontent.fhan4-5.fna&oh=00_AfBtqqQCnapD7L_ElpElVLc5SmDhxvf3KBlPCTda3sLcmw&oe=661407B5",
    username: "Hương Lan",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/347229970_9539456642761618_7644511859827549203_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEnw-Pd9O0TABlIpoUR-c1JtRifHT2fvZi1GJ8dPZ-9mH1hf_6_f_wa8HpZ07xcC_-eCTFr9S7wkVa0Nlfzb-id&_nc_ohc=YXWRt8B_cFoAb6Ev-xw&_nc_ht=scontent.fhan4-1.fna&oh=00_AfCEKWgXPvChnKeztZHIzhCPy40ybNeswBDMoriS0ekr6Q&oe=66142918",
    username: "Kiều Hoàng Mai",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/412586067_10220267025545860_6913696376324137122_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHR_Gm-L39X5-5vBzEb0ng4Z23rz6vxB8lnbevPq_EHybs5xPSdAvWuVkr2pLIUmHaHEZjMubIyc6WXXBkN8IIh&_nc_ohc=OURE7UCxLIkAb5XSYxn&_nc_ht=scontent.fhan3-3.fna&oh=00_AfDhjiPXvB26PRxOorLSCPuyc5HX0YBU76s8bZqGk-eprQ&oe=661432FA",
    username: "Dương Hoàng",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-1/404558976_1309757639680571_7140942838650726821_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHR_n3_2In4ipTM_Nt6RfxgW_-fTID9zOBb_59MgP3M30KMAutug9B-4wWCpNVgM3PdVTdRHabjw5opV_qftwZ&_nc_ohc=gUMi1a13akQAb7pL5J1&_nc_ht=scontent.fhan4-6.fna&oh=00_AfCJBXPpgqM-PMawMXlAkiBbPktrN01PbqFUw4RkV7TYmw&oe=66143630",
    username: "Mỹ Hà",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/357680267_1443345226440520_557488776225250901_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFfMbbgH_JMv0CtHmT_rONxRdiv1W0MpFBF2K_VbQykUMIxBRecpXbJYQ9I0AwBOvgVg7YkaZwgZNN3VHCHbtfG&_nc_ohc=Hi7B_b0R5pUAb7M-otM&_nc_ht=scontent.fhan3-3.fna&oh=00_AfC2ih_2vObT189qCpKpqszBwHEDr9H9-MdCNlhj0WLqDw&oe=66141FED",
    username: "Lê Thanh Lam",
    url: "",
    email: "",
    status: Status.Online,
  },
  {
    avatar_url:
      "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-1/416250307_1958546661214586_5464901500962864542_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHwOUrJ3FOq87A4gaVtV2vpGXT_R7Qp-YcZdP9HtCn5h6vTTQcsR64AhDVxEt0uehTwiUXLPE31rzUq2pSP7EzS&_nc_ohc=7QNE340bF5wAb7YnxHj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan4-5.fna&oh=00_AfDWquuYC03dt1AQgsmhulIhXpo1NLGQIWVl_IBw9PdphA&oe=6614308D",
    username: "Lê Quang PHú",
    url: "",
    email: "",
    status: Status.JustNow,
  },
];

const mockPages: Page[] = [
  {
    src: "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-1/369171962_1440244773493479_7286616473499390583_n.jpg?stp=c0.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG9BUZa1rPxhkgN8v0meeZ-zgPaDNC8GMjOA9oM0LwYyNZvhTnqWKKPMhcwd0JmwhPPMfHhgZvzMCcV2xSVmbTF&_nc_ohc=6ut8dJk5ID0AX_SWG9_&_nc_ht=scontent.fhan4-6.fna&oh=00_AfBAqLVtYifbmYp1eCFQxpuMuC5Jt5Pu-DZbISRxSLtJ_w&oe=6611BA45",
    text: "Learn Chatbot",
  },
];

export { mockOnlineUsers, mockPages };
