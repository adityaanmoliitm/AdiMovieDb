import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODlkNDhjMTZjNjdmYTQyYTBlYjUxOGM4NzhlZjIzNyIsInN1YiI6IjY1ZjIxMzE3MzU4MThmMDE4OGQwMmU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EiptSasUWLJqiwU_sTjx5A2DwXU5y0Sce623zT-VD5Y'
      },// SAHI API KEY LAGA DENA BRO
});

export default instance;
