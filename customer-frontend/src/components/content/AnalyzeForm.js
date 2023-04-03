import React from 'react';
import Button from '../common/Button';

class AnalyzeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: '',
            mapName: '',
        }
    }

    handleChange = (event) => {
        const property = event.target.getAttribute('name');
        const value = event.target.value;
        this.setState({ [property]: value });
    }

    searchWithMatchURL = () => {
        // todo later. Currently only player name and map search supported
    }

    searchWithPlayerName = () => {
        console.log(this.state);
        return;
        fetch('http://localhost:5000/analyze', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log('Something went wrong');
        })
    }

    render() {
        return <div className=''>
            <label className='text-xs'>Player name</label>
            <input className='p-2 w-full mb-2 rounded-lg text-dark' name='player' onChange={this.handleChange} value={this.state.player} placeholder='Enter player e.g. s1mple' />
            <label className='text-xs'>Map name</label>
            <select className='p-2 w-full mb-2 text-dark rounded-lg' name='mapName' onChange={this.handleChange}>
                <option value='' disabled selected>Choose map</option>
                <option value='de_mirage'>de_mirage</option>
                <option value='de_inferno'>de_inferno</option>
                <option value='de_overpass'>de_overpass</option>
                <option value='de_ancient'>de_ancient</option>
            </select>
            <div className='grid gap-2 grid-cols-2 mt-2'>
              {/* <Button primary onClick={() => this.searchWithMatchURL()}>Search with match URL</Button> */}
              <Button primary onClick={() => this.searchWithPlayerName()}>Search with player name</Button>
            </div>
        </div>;
    }
}

export default AnalyzeForm;