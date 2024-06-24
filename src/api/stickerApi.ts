const stickerApi = {
  getSticker: (params: { user: string; year: number }) => ({
    url: `/api/sticker/${params.user}/${params.year}.json`,
  }),
};

export default stickerApi;
