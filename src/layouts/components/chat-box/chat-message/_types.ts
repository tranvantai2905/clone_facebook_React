export type MessageTyp = {
  type: WhoSend;
  message: string;
  date: Date;
};

export enum WhoSend {
  Sender = "Sender",
  Me = "Me",
}
