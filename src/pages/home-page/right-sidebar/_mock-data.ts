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
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/434676726_398893292898031_6405363922840497680_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHe7eToMKNKV27FTnI-lC1VNEOWwAkf9ew0Q5bACR_17KSABnBmnXGcGTAVAa80dgyjJSzGu_021eyxjhkPfMQv&_nc_ohc=zKV-Upd_L4kAX-kNvg_&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAP2Zy9VPFp2UlLbvYM5vYBt4F6Ma1PxG2l5Qryc6PC0w&oe=6611C7B1",
    username: "Hoàng Nguyễn Diệu Thương",
    url: "",
    email: "",
    status: Status.JustNow,
  },
  {
    avatar_url:
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/434676726_398893292898031_6405363922840497680_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHe7eToMKNKV27FTnI-lC1VNEOWwAkf9ew0Q5bACR_17KSABnBmnXGcGTAVAa80dgyjJSzGu_021eyxjhkPfMQv&_nc_ohc=zKV-Upd_L4kAX-kNvg_&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAP2Zy9VPFp2UlLbvYM5vYBt4F6Ma1PxG2l5Qryc6PC0w&oe=6611C7B1",
    username: "Hoàng Nguyễn Diệu Thương",
    url: "",
    email: "",
    status: Status.JustNow,
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
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/434676726_398893292898031_6405363922840497680_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHe7eToMKNKV27FTnI-lC1VNEOWwAkf9ew0Q5bACR_17KSABnBmnXGcGTAVAa80dgyjJSzGu_021eyxjhkPfMQv&_nc_ohc=zKV-Upd_L4kAX-kNvg_&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAP2Zy9VPFp2UlLbvYM5vYBt4F6Ma1PxG2l5Qryc6PC0w&oe=6611C7B1",
    username: "Hoàng Nguyễn Diệu Thương",
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
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/434676726_398893292898031_6405363922840497680_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHe7eToMKNKV27FTnI-lC1VNEOWwAkf9ew0Q5bACR_17KSABnBmnXGcGTAVAa80dgyjJSzGu_021eyxjhkPfMQv&_nc_ohc=zKV-Upd_L4kAX-kNvg_&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAP2Zy9VPFp2UlLbvYM5vYBt4F6Ma1PxG2l5Qryc6PC0w&oe=6611C7B1",
    username: "Hoàng Nguyễn Diệu Thương",
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
      "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/434676726_398893292898031_6405363922840497680_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHe7eToMKNKV27FTnI-lC1VNEOWwAkf9ew0Q5bACR_17KSABnBmnXGcGTAVAa80dgyjJSzGu_021eyxjhkPfMQv&_nc_ohc=zKV-Upd_L4kAX-kNvg_&_nc_ht=scontent.fhan4-1.fna&oh=00_AfAP2Zy9VPFp2UlLbvYM5vYBt4F6Ma1PxG2l5Qryc6PC0w&oe=6611C7B1",
    username: "Hoàng Nguyễn Diệu Thương",
    url: "",
    email: "",
    status: Status.Online,
  },
];

const mockPages: Page[] = [
  {
    src: "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-1/369171962_1440244773493479_7286616473499390583_n.jpg?stp=c0.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG9BUZa1rPxhkgN8v0meeZ-zgPaDNC8GMjOA9oM0LwYyNZvhTnqWKKPMhcwd0JmwhPPMfHhgZvzMCcV2xSVmbTF&_nc_ohc=6ut8dJk5ID0AX_SWG9_&_nc_ht=scontent.fhan4-6.fna&oh=00_AfBAqLVtYifbmYp1eCFQxpuMuC5Jt5Pu-DZbISRxSLtJ_w&oe=6611BA45",
    text: "Learn Chatbot",
  },
];

export { mockOnlineUsers, mockPages };
