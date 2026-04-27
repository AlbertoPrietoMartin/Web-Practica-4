export type Post  = {
    _id: string,
      contenido: string,
      autor: {
        _id: string,
        username: string
      },
      likes: [
        string
      ],
      retweets: [
        {
          usuario: string,
          fecha: string
        }
      ],
      comentarios: [
        {
          _id: string,
          contenido: string,
          autor: {
            _id: string,
            username: string
          },
          fecha: string
        }
      ],
      createdAt: string,
      updatedAt: string
}