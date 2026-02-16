import './Main.css';
import React from 'react';
import MovieList from '../components/MovieList.js';

class Main extends React.Component
{
    state = 
    {
        movies:[]
    }

    componentDidMount()
    {
        fetch('https://omdbapi.com/?apikey=1430ab10&s=alien')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}));
    }

    render()
    {
        return(
            <div className='main'>
                <div className='wrap'>

                    <MovieList movies={this.state.movies}></MovieList>
                </div>
            </div>
        )
    }
}
export default Main;