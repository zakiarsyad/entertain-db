# ORCESTRATOR

### `GET /movies`

| Route     | HTTP  | Headers | Body   | Description | Additional Info |
| --------- | ----- | ------- | ------ | ----------- | --------------- |
| `/movies` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
[
    {
        "tags": [],
        "_id": "5d9f2f1def65221ce5c456b3",
        "title": "Joker@",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "popularity": 622.695,
        "status": "all ages",
        "createdAt": "2019-10-10T13:16:13.279Z",
        "updatedAt": "2019-10-10T13:16:13.279Z",
        "__v": 0
    }
]
```



### `GET /movies/:id`

| Route         | HTTP  | Headers | Body   | Description | Additional Info |
| ------------- | ----- | ------- | ------ | ----------- | --------------- |
| `/movies/:id` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f2f1def65221ce5c456b3",
    "title": "Joker@",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:16:13.279Z",
    "updatedAt": "2019-10-10T13:16:13.279Z",
    "__v": 0
}
```



### `POST /movies`

| Route     | HTTP   | Headers | Body                                                         | Description | Additional Info |
| --------- | ------ | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/movies` | `POST` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `201`
Response :

```
{
    "tags": [],
    "_id": "5d9ef0d8b6e41d1942659d9c",
    "title": "Joker",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T08:50:32.681Z",
    "updatedAt": "2019-10-10T08:50:32.681Z",
    "__v": 0
}
```



### `PATCH /movies/:id`

| Route         | HTTP    | Headers | Body                                                         | Description | Additional Info |
| ------------- | ------- | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/movies/:id` | `PATCH` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f2f1def65221ce5c456b3",
    "title": "joker edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:16:13.279Z",
    "updatedAt": "2019-10-10T13:21:41.600Z",
    "__v": 0
}
```



### `DELETE /movies/:id`

| Route         | HTTP     | Headers | Body   | Description | Additional Info |
| ------------- | -------- | ------- | ------ | ----------- | --------------- |
| `/movies/:id` | `DELETE` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f2f1def65221ce5c456b3",
    "title": "joker edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:16:13.279Z",
    "updatedAt": "2019-10-10T13:21:41.600Z",
    "__v": 0
}
```



### `GET /tvseries`

| Route       | HTTP  | Headers | Body   | Description | Additional Info |
| ----------- | ----- | ------- | ------ | ----------- | --------------- |
| `/tvseries` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
[
    {
        "tags": [],
        "_id": "5d9f3673cd978b1d970eda43",
        "title": "Joker TV",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "popularity": 622.695,
        "status": "all ages",
        "createdAt": "2019-10-10T13:47:31.261Z",
        "updatedAt": "2019-10-10T13:47:31.261Z",
        "__v": 0
    }
]
```



### `GET /tvseries/:id`

| Route           | HTTP  | Headers | Body   | Description | Additional Info |
| --------------- | ----- | ------- | ------ | ----------- | --------------- |
| `/tvseries/:id` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f3673cd978b1d970eda43",
    "title": "Joker TV",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:47:31.261Z",
    "updatedAt": "2019-10-10T13:47:31.261Z",
    "__v": 0
}
```



### `POST /tvseries`

| Route       | HTTP   | Headers | Body                                                         | Description | Additional Info |
| ----------- | ------ | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/tvseries` | `POST` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `201`
Response :

```
{
    "tags": [],
    "_id": "5d9f36a8cd978b1d970eda44",
    "title": "Joker TV",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:48:24.188Z",
    "updatedAt": "2019-10-10T13:48:24.188Z",
    "__v": 0
}
```



### `PATCH /tvseries/:id`

| Route           | HTTP    | Headers | Body                                                         | Description | Additional Info |
| --------------- | ------- | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/tvseries/:id` | `PATCH` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f3673cd978b1d970eda43",
    "title": "joker TV edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:47:31.261Z",
    "updatedAt": "2019-10-10T13:54:45.579Z",
    "__v": 0
}
```

### `DELETE /tvseries/:id`

| Route         | HTTP    | Headers | Body   | Description | Additional Info |
| ------------- | ------- | ------- | ------ | ----------- | --------------- |
| `/delete/:id` | `PATCH` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f3673cd978b1d970eda43",
    "title": "joker TV edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:47:31.261Z",
    "updatedAt": "2019-10-10T13:54:45.579Z",
    "__v": 0
}
```



# MOVIE SERVER

### `GET /movies`

| Route     | HTTP  | Headers | Body   | Description | Additional Info |
| --------- | ----- | ------- | ------ | ----------- | --------------- |
| `/movies` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
[
    {
        "tags": [],
        "_id": "5d9f2f1def65221ce5c456b3",
        "title": "Joker@",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "popularity": 622.695,
        "status": "all ages",
        "createdAt": "2019-10-10T13:16:13.279Z",
        "updatedAt": "2019-10-10T13:16:13.279Z",
        "__v": 0
    }
]
```



### `GET /movies/:id`

| Route         | HTTP  | Headers | Body   | Description | Additional Info |
| ------------- | ----- | ------- | ------ | ----------- | --------------- |
| `/movies/:id` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f2f1def65221ce5c456b3",
    "title": "Joker@",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:16:13.279Z",
    "updatedAt": "2019-10-10T13:16:13.279Z",
    "__v": 0
}
```



### `POST /movies`

| Route     | HTTP   | Headers | Body                                                         | Description | Additional Info |
| --------- | ------ | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/movies` | `POST` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `201`
Response :

```
{
    "tags": [],
    "_id": "5d9f2f1def65221ce5c456b3",
    "title": "Joker@",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:16:13.279Z",
    "updatedAt": "2019-10-10T13:16:13.279Z",
    "__v": 0
}
```



### `PATCH /movies/:id`

| Route         | HTTP    | Headers | Body                                                         | Description | Additional Info |
| ------------- | ------- | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/movies/:id` | `PATCH` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f2f1def65221ce5c456b3",
    "title": "joker edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:16:13.279Z",
    "updatedAt": "2019-10-10T13:21:41.600Z",
    "__v": 0
}
```



### `DELETE /movies/:id`

| Route         | HTTP     | Headers | Body   | Description | Additional Info |
| ------------- | -------- | ------- | ------ | ----------- | --------------- |
| `/movies/:id` | `DELETE` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f2f1def65221ce5c456b3",
    "title": "joker edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:16:13.279Z",
    "updatedAt": "2019-10-10T13:21:41.600Z",
    "__v": 0
}
```





 # TV SERIES SERVER

### `GET /tvseries`

| Route       | HTTP  | Headers | Body   | Description | Additional Info |
| ----------- | ----- | ------- | ------ | ----------- | --------------- |
| `/tvseries` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
[
    {
        "tags": [],
        "_id": "5d9f3673cd978b1d970eda43",
        "title": "Joker TV",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "popularity": 622.695,
        "status": "all ages",
        "createdAt": "2019-10-10T13:47:31.261Z",
        "updatedAt": "2019-10-10T13:47:31.261Z",
        "__v": 0
    }
]
```



### `GET /tvseries/:id`

| Route           | HTTP  | Headers | Body   | Description | Additional Info |
| --------------- | ----- | ------- | ------ | ----------- | --------------- |
| `/tvseries/:id` | `GET` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f3673cd978b1d970eda43",
    "title": "Joker TV",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:47:31.261Z",
    "updatedAt": "2019-10-10T13:47:31.261Z",
    "__v": 0
}
```



### `POST /tvseries`

| Route       | HTTP   | Headers | Body                                                         | Description | Additional Info |
| ----------- | ------ | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/tvseries` | `POST` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `201`
Response :

```
{
    "tags": [],
    "_id": "5d9f36a8cd978b1d970eda44",
    "title": "Joker TV",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:48:24.188Z",
    "updatedAt": "2019-10-10T13:48:24.188Z",
    "__v": 0
}
```



### `PATCH /tvseries/:id`

| Route           | HTTP    | Headers | Body                                                         | Description | Additional Info |
| --------------- | ------- | ------- | ------------------------------------------------------------ | ----------- | --------------- |
| `/tvseries/:id` | `PATCH` | `none`  | `title:String, overview:String, poster_path:String, popularity:Number, status:String` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f3673cd978b1d970eda43",
    "title": "joker TV edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:47:31.261Z",
    "updatedAt": "2019-10-10T13:54:45.579Z",
    "__v": 0
}
```

### `DELETE /tvseries/:id`

| Route         | HTTP    | Headers | Body   | Description | Additional Info |
| ------------- | ------- | ------- | ------ | ----------- | --------------- |
| `/delete/:id` | `PATCH` | `none`  | `none` |             |                 |

Status : `200`
Response :

```
{
    "tags": [],
    "_id": "5d9f3673cd978b1d970eda43",
    "title": "joker TV edit",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "poster_path": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "popularity": 622.695,
    "status": "all ages",
    "createdAt": "2019-10-10T13:47:31.261Z",
    "updatedAt": "2019-10-10T13:54:45.579Z",
    "__v": 0
}
```

