import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
// console.log('Access Token:', import.meta.env.VITE_ACCESS_TOKEN);
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWE4ZDk3NTczYWRiOTQxYmUyMTJkMzIwOGZlMDgwZSIsIm5iZiI6MTcyMTcxNjc4Mi45NTAxODgsInN1YiI6IjY2OWY0ZTZlMTQ0ZmYwNGJiMjRjN2E2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8LfH4k1htNOBqYzvpmb1kc9R7Q8laNHE9sB-88iatJ4`;
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

  // {/* </React.StrictMode> */}
)
