import './Main.css';
import React from 'react';
import MovieList from '../components/MovieList.js';
import Preloader from '../components/Preloader.js';
import Search from '../components/Search.js';

class Main extends React.Component
{
    state = 
    {
        movies:[],
        count:0
    }

    // componentDidMount()
    // {
    //     fetch('https://omdbapi.com/?apikey=1430ab10&s=alien')
    //     .then(response => response.json())
    //     .then(data => this.setState({movies: data.Search}));
    // }

    searchMovie = (str, type='all', page=1) =>
    {
        fetch(`https://omdbapi.com/?apikey=1430ab10&s=${str}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, count: data.totalResults}));
    }

    render()
    {
        return(
            <div className='main'>
                <div className='wrap'>
                    <Search searchMovie={this.searchMovie} totalCount={this.state.count}/>
                    {
                        this.state.movie != null && this.state.movies.length === 0 ? <Preloader /> : <MovieList movies={this.state.movies} />
                    }
                </div>
            </div>
        )
    }
}
export default Main;